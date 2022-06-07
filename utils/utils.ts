import jwt from 'jsonwebtoken';
import 'dotenv/config'

export const getToken =  (id:any):string => {
return jwt.sign({id}, process.env.JWT_SECRET as string , {
  expiresIn : process.env.JWT_EXPIRE
 });
}