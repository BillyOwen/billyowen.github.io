// @ts-check

const vertexShaderSource = /*glsl*/ `
    // an attribute will receive data from a buffer
    attribute vec4 a_position;
    attribute vec4 a_colour;

    uniform mat4 u_matrix;

    varying vec4 v_colour;

    // all shaders have a main function
    void main() {
        gl_Position = u_matrix * a_position;

        v_colour = a_colour;
    }
`

const fragmentShaderSource = /*glsl*/ `
    // fragment shaders don't have a default precision so we need
    // to pick one. mediump is a good default
    precision mediump float;
    
    varying vec4 v_colour;

    void main() {
        // gl_FragColor is a special variable a fragment shader
        // is responsible for setting
        gl_FragColor = v_colour;
    }
`