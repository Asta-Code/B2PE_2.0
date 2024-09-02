import { Request , Response} from 'express'
import B2PE_DB from '../config/database'

export const userRegister = async  (req:Request , res:Response) => {
    try {

        res.status(200).json({message : 'kevin cabro'})
        
    } catch (error) {
        res.status(500).json({erro:Error((error as Error).message)})
    }
}