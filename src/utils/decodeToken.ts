const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')

export const decodeToken = async (token: string) => {
  const { JWT_SECRET, JWT_ALGORITHMS } = process.env

  try {
    if (!token) {
      return { message: 'Token is missing' }
    }

    const decoded = jwt.verify(token, JWT_SECRET as string, {
      algorithms: [JWT_ALGORITHMS as string]
    })
    return decoded.data
  } catch (error) {
    throw new Error((error as Error).message)
  }
}