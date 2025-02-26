// @ts-check

const cubeDimension = 5
const size = 30
const gap = 1.1
const middleCubeColour = 40

const keyStates = {}
/** @type {{index: number; direction: number; axis: number}[]} */
const moves = []

class Main {
		/** @type {HTMLCanvasElement} */
		canvas
		// /** @type {number} */
		// width
		// /** @type {number} */
		// height

		/** @type {WebGLRenderingContext} */
		gl

		/** @type {WebGLShader} */
		vertexShader

		/** @type {WebGLShader} */
		fragmentShader

		/** @type {WebGLProgram} */
		program

		/** @type {GLint} */
		positionAttributeLocation

		/** @type {GLint} */
		colourLocation

		/** @type {WebGLUniformLocation} */
		matrixLocation

		/** @type {WebGLBuffer} */
		positionBuffer

		/** @type {WebGLBuffer} */
		colourBuffer

		/** @type {WebGLBuffer[]} */
		colourBuffers

		/**
		 * @param {HTMLCanvasElement} canvas 
		 * @param {number} width
		 * @param {number} height
		 * @param {string} vertexShaderSource
		 * @param {string} fragmentShaderSource
		 */
		constructor(canvas, width, height, vertexShaderSource, fragmentShaderSource) {
				this.canvas = canvas

				this.canvas.width = width
				this.canvas.height = height

				const gl = canvas.getContext("webgl")
				if (!gl) throw new Error("WebGL not supported!")

				this.gl = gl

				this.vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource)
				this.fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource)

				this.program = this.createProgram(this.vertexShader, this.fragmentShader)

				this.positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position")
				this.colourLocation = this.gl.getAttribLocation(this.program, "a_colour")
 
				const matrixLocation = this.gl.getUniformLocation(this.program, "u_matrix")
				if (!matrixLocation) throw new Error("Couldn't get matrix uniform location!")
						this.matrixLocation = matrixLocation

				const positionBuffer = this.gl.createBuffer()
				if (!positionBuffer) throw new Error("Couldn't create position buffer!")
				this.positionBuffer = positionBuffer

				const colourBuffer = this.gl.createBuffer()
				if (!colourBuffer) throw new Error("Couldn't create colour buffer")
				this.colourBuffer = colourBuffer


				this.colourBuffers = []
				// There are 27 unique buffers regardless of cube dimension
				for (let i = 0; i < 27; ++i) {
					const colourBuffer = this.gl.createBuffer()
					if (!colourBuffer) throw new Error(`Couldn't create colour buffer ${i}`)
					this.colourBuffers.push(colourBuffer)
				}

				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer)
				this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
					// back
					0,   0,  0,
					0, 1,  0,
					1,   0,  0,
					0, 1,  0,
					1, 1,  0,
					1,   0,  0,

					// top
					0,   1,  0,
					0,  1,  1,
					1,  1,  0,
					1,  1,  1,
					1,  1,  0,
					0,  1,  1,

					// left
					0,  1,  0,
					0,  0,  1,
					0,  1,  1,
					0,  1,  0,
					0,  0,  0,
					0,  0,  1,

					// right
					1,  1,  0,
					1,  1,  1,
					1,  0,  1,
					1,  1,  0,
					1,  0,  1,
					1,  0,  0,

					// front
					0,   0,  1,
					1,   0,  1,
					0, 1,  1,
					0, 1,  1,
					1,   0,  1,
					1, 1,  1,

					// bottom
					0,   0,  0,
					1,  0,  0,
					0,  0,  1,
					1,  0,  1,
					0,  0,  1,
					1,  0,  0,
				]), this.gl.STATIC_DRAW)

				/**
				 * 
				 * @param {boolean} top 
				 * @param {boolean} bottom 
				 * @param {boolean} left 
				 * @param {boolean} right 
				 * @param {boolean} front 
				 * @param {boolean} back 
				 */
				function colourBufferArray(top, bottom, left, right, front, back) {
					const allColoursBufferArray = [
						// back
						0,  255, 0,
						0,  255, 0,
						0,  255, 0,
						0,  255, 0,
						0,  255, 0,
						0,  255, 0,
		
						// top
						230,  230, 230,
						230,  230, 230,
						230,  230, 230,
						230,  230, 230,
						230,  230, 230,
						230,  230, 230,
						
						// left
						255,  0, 0,
						255,  0, 0,
						255,  0, 0,
						255,  0, 0,
						255,  0, 0,
						255,  0, 0,
		
						// right
						255, 165, 0,
						255, 165, 0,
						255, 165, 0,
						255, 165, 0,
						255, 165, 0,
						255, 165, 0,
		
						// front
						0, 0, 255,
						0, 0, 255,
						0, 0, 255,
						0, 0, 255,
						0, 0, 255,
						0, 0, 255,
		
						// bottom
						255, 255, 0,
						255, 255, 0,
						255, 255, 0,
						255, 255, 0,
						255, 255, 0,
						255, 255, 0,
					]

					if (!back) {
						for (let i = 0; i < 18 * 1; ++i) {
							allColoursBufferArray[i] = middleCubeColour
						}
					}

					if (!top) {
						for (let i = 18 * 1; i < 18 * 2; ++i) {
							allColoursBufferArray[i] = middleCubeColour
						}
					}

					if (!left) {
						for (let i = 18 * 2; i < 18 * 3; ++i) {
							allColoursBufferArray[i] = middleCubeColour
						}
					}

					if (!right) {
						for (let i = 18 * 3; i < 18 * 4; ++i) {
							allColoursBufferArray[i] = middleCubeColour
						}
					}

					if (!front) {
						for (let i = 18 * 4; i < 18 * 5; ++i) {
							allColoursBufferArray[i] = middleCubeColour
						}
					}

					if (!bottom) {
						for (let i = 18 * 5; i < 18 * 6; ++i) {
							allColoursBufferArray[i] = middleCubeColour
						}
					}

					return allColoursBufferArray
				}

				// deprecated
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, colourBuffer)
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, true, true, true, true, true)), gl.STATIC_DRAW
				)

				// bottom left back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[0])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, true, false, false, true)), gl.STATIC_DRAW
				)

				// bottom back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[1])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, false, false, false, true)), gl.STATIC_DRAW
				)

				// bottom right back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[2])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, false, true, false, true)), gl.STATIC_DRAW
				)

				// bottom left
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[3])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, true, false, false, false)), gl.STATIC_DRAW
				)

				// bottom
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[4])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, false, false, false, false)), gl.STATIC_DRAW
				)

				// bottom right
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[5])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, false, true, false, false)), gl.STATIC_DRAW
				)

				// bottom left front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[6])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, true, false, true, false)), gl.STATIC_DRAW
				)

				// bottom front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[7])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, false, false, true, false)), gl.STATIC_DRAW
				)

				// bottom right front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[8])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, true, false, true, true, false)), gl.STATIC_DRAW
				)

				// middle left back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[9])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, true, false, false, true)), gl.STATIC_DRAW
				)

				// middle back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[10])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, false, false, false, true)), gl.STATIC_DRAW
				)

				// middle right back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[11])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, false, true, false, true)), gl.STATIC_DRAW
				)

				// middle left
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[12])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, true, false, false, false)), gl.STATIC_DRAW
				)

				// middle
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[13])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, false, false, false, false)), gl.STATIC_DRAW
				)

				// middle right
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[14])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, false, true, false, false)), gl.STATIC_DRAW
				)

				// middle left front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[15])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, true, false, true, false)), gl.STATIC_DRAW
				)

				// middle front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[16])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, false, false, true, false)), gl.STATIC_DRAW
				)

				// middle right front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[17])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(false, false, false, true, true, false)), gl.STATIC_DRAW
				)

				// top left back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[18])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, true, false, false, true)), gl.STATIC_DRAW
				)

				// top back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[19])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, false, false, false, true)), gl.STATIC_DRAW
				)

				// top right back
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[20])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, false, true, false, true)), gl.STATIC_DRAW
				)

				// top left
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[21])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, true, false, false, false)), gl.STATIC_DRAW
				)

				// top
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[22])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, false, false, false, false)), gl.STATIC_DRAW
				)

				// top right
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[23])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, false, true, false, false)), gl.STATIC_DRAW
				)

				// top left front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[24])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, true, false, true, false)), gl.STATIC_DRAW
				)

				// top front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[25])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, false, false, true, false)), gl.STATIC_DRAW
				)

				// top right front
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[26])
				this.gl.bufferData(
					gl.ARRAY_BUFFER,
					new Uint8Array(colourBufferArray(true, false, false, true, true, false)), gl.STATIC_DRAW
				)
		}

		/**
		 * @param {[number, number]} cameraAnglesInRadians 
		 * @param {{position: [number, number, number, number]; rotation: [number, number, number, number]}[]} rubiks
		 */
		drawScene(rubiks, cameraAnglesInRadians) {
				this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height)

				this.gl.clearColor(0, 0, 0, 1)
				this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
				this.gl.enable(this.gl.CULL_FACE)
				this.gl.enable(this.gl.DEPTH_TEST)

				this.gl.useProgram(this.program)

				this.gl.enableVertexAttribArray(this.positionAttributeLocation)
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer)
				this.gl.vertexAttribPointer(this.positionAttributeLocation, 3, this.gl.FLOAT, false, 0, 0)

				this.gl.enableVertexAttribArray(this.colourLocation)
				

				const radius = 300
				const fieldOfViewInRadians = Math.PI / 3
				const projectionMatrix = Matrix4.perspective(
						fieldOfViewInRadians, this.gl.canvas.width / this.gl.canvas.height, 1, 2000
				)
				let cameraMatrix = Matrix4.xRotation(cameraAnglesInRadians[0])
				cameraMatrix = Matrix4.yRotate(cameraMatrix, cameraAnglesInRadians[1])
				cameraMatrix = Matrix4.translate(cameraMatrix, 0, 100, radius * 2)

				const viewMatrix = Matrix4.inverse(cameraMatrix)
				const viewProjectionMatrix = Matrix4.multiply(projectionMatrix, viewMatrix)
				
				for (let i = 0; i < rubiks.length; ++i) {


					// this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffer)
					if (i === 0) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[0])
					} else if (i < cubeDimension - 1) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[1])
					} else if (i === cubeDimension - 1) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[2])
					} else if (i % cubeDimension === 0 && i < cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[3])
					} else if (i % cubeDimension !== 0 && i % cubeDimension !== cubeDimension - 1 && i < cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[4])
					} else if (i % cubeDimension === cubeDimension - 1 && i < cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[5])
					} else if (i === cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[6])
					} else if (i < cubeDimension * cubeDimension - 1) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[7])
					} else if (i === cubeDimension * cubeDimension - 1) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[8])
					} else if (i % (cubeDimension * cubeDimension) === 0 && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[9])
					} else if (i % (cubeDimension * cubeDimension) > 0 && i % (cubeDimension * cubeDimension) < cubeDimension - 1 && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[10])
					} else if (i % (cubeDimension * cubeDimension) === cubeDimension - 1 && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[11])
					} else if (i % cubeDimension === 0 && i % (cubeDimension * cubeDimension) !== cubeDimension * cubeDimension - cubeDimension && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[12])
					} else if (i % cubeDimension !== 0 && i % cubeDimension !== cubeDimension - 1 && i % (cubeDimension * cubeDimension) < cubeDimension * cubeDimension - cubeDimension && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[13])
					} else if (i % cubeDimension === cubeDimension - 1 && i % (cubeDimension * cubeDimension) < cubeDimension * cubeDimension - cubeDimension && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[14])
					} else if (i % cubeDimension === 0 && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[15])
					} else if (i % cubeDimension !== 0 && i % cubeDimension !== cubeDimension - 1 && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[16])
					} else if (i % (cubeDimension * cubeDimension) === cubeDimension * cubeDimension - 1 && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[17])
					} else if (i === cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[18])
					} else if (i < cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension + cubeDimension - 1) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[19])
					} else if (i === cubeDimension * cubeDimension * cubeDimension - cubeDimension * cubeDimension + cubeDimension - 1) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[20])
					} else if (i % cubeDimension === 0 && i !== cubeDimension * cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[21])
					} else if (i % cubeDimension > 0 && i % cubeDimension < cubeDimension - 1 && i < cubeDimension * cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[22])
					} else if (i < cubeDimension * cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[23])
					} else if (i === cubeDimension * cubeDimension * cubeDimension - cubeDimension) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[24])
					} else if (i !== cubeDimension * cubeDimension * cubeDimension - 1) {
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[25])
					} else {						
						this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colourBuffers[26])
					}
					this.gl.vertexAttribPointer(this.colourLocation, 3, this.gl.UNSIGNED_BYTE, true, 0, 0)

					let modelMatrix = Matrix4.scale(Matrix4.identity(), size, size, size)

					modelMatrix = Matrix4.translate(modelMatrix, rubiks[i].position[0] - 0.5, rubiks[i].position[1] - 0.5, rubiks[i].position[2] - 0.5)
					// The order of this is the key I think to fixing the bug
					modelMatrix = Matrix4.xRotate(modelMatrix, rubiks[i].rotation[0])
					modelMatrix = Matrix4.zRotate(modelMatrix, rubiks[i].rotation[2])
					modelMatrix = Matrix4.yRotate(modelMatrix, rubiks[i].rotation[1])
					
					modelMatrix = Matrix4.translate(modelMatrix, -rubiks[i].position[0] - 0.5, -rubiks[i].position[1] - 0.5, -rubiks[i].position[2] - 0.5)
					
					modelMatrix = Matrix4.translate(modelMatrix, rubiks[i].position[0], rubiks[i].position[1], rubiks[i].position[2])


					let matrix = Matrix4.multiply(viewProjectionMatrix, modelMatrix)

					this.gl.uniformMatrix4fv(this.matrixLocation, false, matrix)
					this.gl.drawArrays(this.gl.TRIANGLES, 0, 36)
				}

		}

		/**
		 * 
		 * @param {GLenum} type 
		 * @param {string} source 
		 * @returns 
		 */
		createShader(type, source) {
				const shader = this.gl.createShader(type)
				if (!shader) throw new Error("Failed to create shader!")
				
				this.gl.shaderSource(shader, source)
				this.gl.compileShader(shader)
				
				const success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)
				if (!success) {
						this.gl.deleteShader(shader)
						throw new Error("Failed to get shader!")
				}

				return shader;
		}

		/**
		 * 
		 * @param {WebGLShader} vertexShader 
		 * @param {WebGLShader} fragmentShader 
		 * @returns 
		 */
		createProgram(vertexShader, fragmentShader) {
				const program = this.gl.createProgram()
				if (!program) throw new Error("Couldn't create program!")

				this.gl.attachShader(program, vertexShader)
				this.gl.attachShader(program, fragmentShader)
				this.gl.linkProgram(program)

				const success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS)
				if (!success) {
						this.gl.deleteProgram(program)
						console.error(this.gl.getProgramInfoLog(program))
						throw new Error("Couldn't get program!")
				}

				return program;
		}
}



window.addEventListener("keyup", (e) => {
		keyStates[e.key] = false
})
window.addEventListener("keydown", (e) => {
	if (!keyStates[e.key]) {
		let direction = 1
		if (e.key === "Control" || keyStates["Control"]) {
			direction = -1
		}

		let axis = 0
		if (e.key === "Shift" || keyStates["Shift"]) {
			axis = 1
		}

		if (e.key === "Alt" || keyStates["Alt"]) {
			axis = 2
		}

		if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3"
			|| e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7"
			|| e.key === "8" || e.key === "9"
			|| e.key === ")" || e.key === "!" || e.key === "@" || e.key === "#"
			|| e.key === "$" || e.key === "%" || e.key === "^" || e.key === "&"
			|| e.key === "*" || e.key === "(") {
			let index = 0
			if (e.key === "1" || e.key === "!") {
				index = 0
			} else if (e.key === "2" || e.key === "@") {
				index = 1
			} else if (e.key === "3" || e.key === "#") {
				index = 2
			} else if (e.key === "4" || e.key === "$") {
				index = 3
			} else if (e.key === "5" || e.key === "%") {
				index = 4
			} else if (e.key === "6" || e.key === "^") {
				index = 5
			} else if (e.key === "7" || e.key === "&") {
				index = 6
			} else if (e.key === "8" || e.key === "*") {
				index = 7
			} else if (e.key === "9" || e.key === "(") {
				index = 8
			} else if (e.key === "0" || e.key === ")") {
				index = 9
			}

			if (index >= cubeDimension) {
				return
			}

			moves.push({
				index,
				direction,
				axis,
			})
		}
	}
	keyStates[e.key] = true
	
	if (!(e.key === "F5" || e.key === "F12")) {
		e.preventDefault()
	}

})


window.onload = () => {
	const canvas = /** @type {HTMLCanvasElement | null} */ (document.getElementById("myCanvas"))
	if (!canvas) throw new Error("Couldn't get canvas!")

	const main = new Main(canvas, window.innerWidth, window.innerHeight, vertexShaderSource, fragmentShaderSource)

	/** @type {{position: [number, number, number, number]; rotation: [number, number, number, number]}[]} */
		let rubiksCube = []
	for (let i = 0; i < Math.pow(cubeDimension, 3); ++i) {

		let x = (i % cubeDimension) - cubeDimension / 2
		let y = Math.floor(i / (cubeDimension * cubeDimension)) - cubeDimension / 2
		let z = (Math.floor(i / cubeDimension) % cubeDimension) - cubeDimension / 2

		x *= gap
		y *= gap
		z *= gap

		rubiksCube.push({
			position: [
				x, y, z,
				1
			],
			rotation: [
				0, 0, 0, 1
			]
		})
	}

	let degrees = [0, 0]

	let animationDegrees = -1

	let lastTime = 0
	
	/**
	 * 
	 * @param {number} time 
	 */
	function loop(time) {
		requestAnimationFrame(loop)

		let delta = time - lastTime
		if (delta < 10) return
		if (delta > 100) delta = 16

		lastTime = time

		if (keyStates["w"]) {
				degrees[0] += delta / 10
		}
		if (keyStates["s"]) {
				degrees[0] -= delta / 10
		}
		if (keyStates["a"]) {
				degrees[1] += delta / 10
		}
		if (keyStates["d"]) {
				degrees[1] -= delta / 10
		}

		if (animationDegrees === -1) {
			animationDegrees = 0

		} else {
			let move = moves[0]

			if (move !== undefined) {
				
				// let step = delta / 170
				let step = delta / 1700
				if (animationDegrees >= Math.PI / 2) {
					step = Math.PI / 2 - animationDegrees
					animationDegrees = -1
					const tmpMove = moves.shift()
					if (tmpMove === undefined) throw new Error("Unreachable")
					move = tmpMove
				} else {
					animationDegrees += step
				}

				for (let i = 0; i < Math.pow(cubeDimension, 3); ++i) {
					const t = -0.5 * gap

					/** @type {[number, number ,number, number]} */
					let pos = [
						rubiksCube[i].position[0] - t,
						rubiksCube[i].position[1] - t,
						rubiksCube[i].position[2] - t,
						1
					]

					/** @type {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number] | undefined} */
					let matrix = undefined

					const coord = gap * cubeDimension / 2 - gap * (cubeDimension - move.index)
					if (rubiksCube[i].position[move.axis] < coord + 0.5 && rubiksCube[i].position[move.axis] > coord - 0.5) {
						if (move.axis === 0) {
							matrix = Matrix4.xRotation(-move.direction * step)
						} else if (move.axis === 1) {
							matrix = Matrix4.yRotation(-move.direction * step)
						} else if (move.axis === 2) {
							matrix = Matrix4.zRotation(-move.direction * step)
						}
					}

					if (matrix !== undefined) {
						rubiksCube[i].rotation[move.axis] += move.direction * step
						pos = Matrix4.multiplyVector(pos, matrix)
						
						rubiksCube[i].position = [
							pos[0] + t,
							pos[1] + t,
							pos[2] + t,
							1,
						]
					}
				}
				
			}
		}
				
		main.drawScene(rubiksCube, [
			degrees[0] * Math.PI / 180,
			degrees[1] * Math.PI / 180
		])
	
	}
	
	loop(0)

}
