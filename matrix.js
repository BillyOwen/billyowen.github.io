// @ts-check

class Matrix4 {

    /**
     * 
     * @param {[number, number, number, number]} v 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} m 
     * @returns {[number, number, number, number]}
     */
    static multiplyVector(v, m) {
        return [
            v[0] * m[0] + v[1] * m[1] + v[2] * m[2] + v[3] * m[3],
            v[0] * m[4] + v[1] * m[5] + v[2] * m[6] + v[3] * m[7],
            v[0] * m[8] + v[1] * m[9] + v[2] * m[10] + v[3] * m[11],
            v[0] * m[12] + v[1] * m[13] + v[2] * m[14] + v[3] * m[15],
        ]
    }

    /**
     * 
     * @param {[number, number, number, number]} a 
     * @param {[number, number, number, number]} b 
     * @returns {number}
     */
    static dotProduct(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }

    /**
     * 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} a 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} b 
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static multiply(a, b) {
        const b00 = b[0 * 4 + 0]
        const b01 = b[0 * 4 + 1]
        const b02 = b[0 * 4 + 2]
        const b03 = b[0 * 4 + 3]
        const b10 = b[1 * 4 + 0]
        const b11 = b[1 * 4 + 1]
        const b12 = b[1 * 4 + 2]
        const b13 = b[1 * 4 + 3]
        const b20 = b[2 * 4 + 0]
        const b21 = b[2 * 4 + 1]
        const b22 = b[2 * 4 + 2]
        const b23 = b[2 * 4 + 3]
        const b30 = b[3 * 4 + 0]
        const b31 = b[3 * 4 + 1]
        const b32 = b[3 * 4 + 2]
        const b33 = b[3 * 4 + 3]
        const a00 = a[0 * 4 + 0]
        const a01 = a[0 * 4 + 1]
        const a02 = a[0 * 4 + 2]
        const a03 = a[0 * 4 + 3]
        const a10 = a[1 * 4 + 0]
        const a11 = a[1 * 4 + 1]
        const a12 = a[1 * 4 + 2]
        const a13 = a[1 * 4 + 3]
        const a20 = a[2 * 4 + 0]
        const a21 = a[2 * 4 + 1]
        const a22 = a[2 * 4 + 2]
        const a23 = a[2 * 4 + 3]
        const a30 = a[3 * 4 + 0]
        const a31 = a[3 * 4 + 1]
        const a32 = a[3 * 4 + 2]
        const a33 = a[3 * 4 + 3]
     
        return [
            b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
            b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
            b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
            b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
            b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
            b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
            b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
            b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
            b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
            b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
            b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
            b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
            b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
            b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
            b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
        ]
    }


    /**
     * 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} m 
     * @param {number} tx 
     * @param {number} ty 
     * @param {number} tz 
     */
    static translate(m, tx, ty, tz) {
        return Matrix4.multiply(m, Matrix4.translation(tx, ty, tz))
    }

    /**
     * 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} m 
     * @param {number} angleInRadians
     */
    static xRotate(m, angleInRadians) {
        return Matrix4.multiply(m, Matrix4.xRotation(angleInRadians))
    }

    /**
     * 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} m 
     * @param {number} angleInRadians
     */
    static yRotate(m, angleInRadians) {
        return Matrix4.multiply(m, Matrix4.yRotation(angleInRadians))
    }

    /**
     * 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} m 
     * @param {number} angleInRadians
     */
    static zRotate(m, angleInRadians) {
        return Matrix4.multiply(m, Matrix4.zRotation(angleInRadians))
    }
    
     /**
     * 
     * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} m 
     * @param {number} sx 
     * @param {number} sy 
     * @param {number} sz 
     */
     static scale(m, sx, sy, sz) {
        return Matrix4.multiply(m, Matrix4.scaling(sx, sy, sz))
    }


    /**
     * 
     * @param {number} tx 
     * @param {number} ty
     * @param {number} tz
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static translation(tx, ty, tz) {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1,
        ]
    }

    /**
     * @param {number} angleInRadians 
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static xRotation(angleInRadians) {
        const c = Math.cos(angleInRadians)
        const s = Math.sin(angleInRadians)
        return [
            1, 0, 0, 0,
            0, c, -s, 0,
            0, s, c, 0,
            0, 0, 0, 1,
        ]
    }

    /**
     * @param {number} angleInRadians 
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static yRotation(angleInRadians) {
        const c = Math.cos(angleInRadians)
        const s = Math.sin(angleInRadians)
        return [
            c, 0, s, 0,
            0, 1, 0, 0,
            -s, 0, c, 0,
            0, 0, 0, 1,
        ]
    }

    /**
     * @param {number} angleInRadians 
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static zRotation(angleInRadians) {
        const c = Math.cos(angleInRadians)
        const s = Math.sin(angleInRadians)
        return [
            c, -s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]
    }

    /**
     * @param {number} sx 
     * @param {number} sy
     * @param {number} sz
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static scaling(sx, sy, sz) {
        return [
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1,
        ]
    }

    /**
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static identity() {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]
    }

    /**
     * 
     * @param {number} left 
     * @param {number} right 
     * @param {number} bottom 
     * @param {number} top 
     * @param {number} near 
     * @param {number} far
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
    static orthographic(left, right, bottom, top, near, far) {
        return [
            2 / (right - left), 0, 0, 0,
            0, 2  / (top - bottom), 0, 0,
            0, 0, 2 / (near - far), 0,
            (left + right) / (left - right), (bottom + top) / (bottom - top), (near + far) / (near - far), 1,
        ]
    }

    /**
     * @param {number} fudgeFactor
     * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
     */
   static makeZToWMatrix(fudgeFactor) {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, fudgeFactor,
            0, 0, 0, 1,
        ]
   }

   /**
    * 
    * @param {number} fieldOfViewInRadians 
    * @param {number} aspect 
    * @param {number} near 
    * @param {number} far
    * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
    */
   static perspective(fieldOfViewInRadians, aspect, near, far) {
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians)
        const rangeInv = 1.0 / (near - far)

        return [
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (near + far) * rangeInv, -1,
            0, 0, near * far * rangeInv * 2, 0,
        ]
   }

   /**
    * 
    * @param {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]} m 
    * @returns {[number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number]}
    */
   static inverse(m) {
    const m00 = m[0 * 4 + 0]
    const m01 = m[0 * 4 + 1]
    const m02 = m[0 * 4 + 2]
    const m03 = m[0 * 4 + 3]
    const m10 = m[1 * 4 + 0]
    const m11 = m[1 * 4 + 1]
    const m12 = m[1 * 4 + 2]
    const m13 = m[1 * 4 + 3]
    const m20 = m[2 * 4 + 0]
    const m21 = m[2 * 4 + 1]
    const m22 = m[2 * 4 + 2]
    const m23 = m[2 * 4 + 3]
    const m30 = m[3 * 4 + 0]
    const m31 = m[3 * 4 + 1]
    const m32 = m[3 * 4 + 2]
    const m33 = m[3 * 4 + 3]
    const tmp_0  = m22 * m33
    const tmp_1  = m32 * m23
    const tmp_2  = m12 * m33
    const tmp_3  = m32 * m13
    const tmp_4  = m12 * m23
    const tmp_5  = m22 * m13
    const tmp_6  = m02 * m33
    const tmp_7  = m32 * m03
    const tmp_8  = m02 * m23
    const tmp_9  = m22 * m03
    const tmp_10 = m02 * m13
    const tmp_11 = m12 * m03
    const tmp_12 = m20 * m31
    const tmp_13 = m30 * m21
    const tmp_14 = m10 * m31
    const tmp_15 = m30 * m11
    const tmp_16 = m10 * m21
    const tmp_17 = m20 * m11
    const tmp_18 = m00 * m31
    const tmp_19 = m30 * m01
    const tmp_20 = m00 * m21
    const tmp_21 = m20 * m01
    const tmp_22 = m00 * m11
    const tmp_23 = m10 * m01

    const t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31)
    const t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31)
    const t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31)
    const t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21)

    const d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3)

    return [
        d * t0,
        d * t1,
        d * t2,
        d * t3,
        d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
                (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
        d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
                (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
        d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
                (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
        d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
                (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
        d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
                (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
        d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
                (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
        d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
                (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
        d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
                (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
        d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
                (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
        d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
                (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
        d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
                (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
        d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
                (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02))
        ]
   }
}
