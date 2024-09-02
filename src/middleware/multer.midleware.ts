import { RequestHandler } from 'express'

const multer = require('multer')

const storage = multer.diskStorage({
  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname)
  }
})

export const createUploadMiddleware = (
  fields: { name: string; maxCount?: number }[]
): RequestHandler => {
  const upload = multer({ storage: storage })
  return upload.fields(fields)
}