import { MulterFile } from "../interface/upload_interface";
const cloudinary = require('../utils/cloudynari')


export const uploadAvatars = async (files:any)  => {
    try {
        const cloudinaryResponses: any = {};
    if (files) {
      for (const [fieldname, fileArray] of Object.entries(files)) {
        for (const file of fileArray as MulterFile[]) {
          const cloudinaryResponse = await cloudinary.uploader.upload(file.path);
          cloudinaryResponses[fieldname] = cloudinaryResponse.secure_url;
        }
      }
    }

    return cloudinaryResponses;
    } catch (error) {
        throw new Error((error as Error).message)
    }
}