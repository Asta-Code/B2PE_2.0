import { compare, hash } from "bcrypt";

export const encriptado = async (password: string) => {
  try {
    const salt = await hash(password, 10);
    return salt;
  } catch (error) {
    return new Error((error as Error).message);
  }
};

export const compararPassword = async (
  password: string,
  hasPassword: string
) => {
  try {
    //comparar password
    const comparar = await compare(password, hasPassword);
    return comparar;
  } catch (error) {
    return new Error((error as Error).message);
  }
};