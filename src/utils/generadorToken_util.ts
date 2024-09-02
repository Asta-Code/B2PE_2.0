import { sign } from 'jsonwebtoken'
import { TokenI } from '../interface/token_interface';
require("dotenv").config();



export const generadorToken = async (data:any) => {


    const {  JWT_SECRET, JWT_DURATION } = process.env as unknown  as TokenI
    try {

        const token = sign(
            { data },JWT_SECRET,
            { expiresIn: JWT_DURATION }
          );
        return token
    } catch (error) {
        return new Error((error as Error).message)
    }

} 