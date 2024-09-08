import { Request, Response } from "express";
import B2PE_DB from "../config/database";
import { QueryTypes } from "sequelize";

export const userRegisterExpect = async (req: Request, res: Response) => {
  const { name, email, password, status, type_user , dni , dni_avatar , ruc , phone, address} = req.body;

  try {

    if(type_user === 'buyer'){
    const result = await B2PE_DB.query(
      "CALL sp_register_user_expects(:name, :email, :password, :status, :type_user)",
      {
        replacements: { name, email, password, status, type_user },
        type: QueryTypes.RAW,
      }
      
    )
    res.status(200).json(result);
  }
  if(type_user === 'seller'){
    const result = await B2PE_DB.query(
      "CALL sp_register_user_seller(:name, :email, :password, :status, :type_user, :dni, :dni_avatar, :ruc, :phone, :address)",
      {
        replacements: { name, email, password, status, type_user , dni , dni_avatar , ruc , phone, address},
        type: QueryTypes.RAW,
      }
    )
    res.status(200).json(result);
  }

    
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const usersGet = async (req: Request , res: Response) => {
  try {
    
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
}
