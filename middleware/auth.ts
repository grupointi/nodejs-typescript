import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario';

 export const protect = async (req, res, next) => {
  let token;
  if(req.headers['authorization'] && req.headers['authorization'].startsWith('Bearer')){
   token = req.headers['authorization'].split(' ')[1];
  }

 if(!token){
  res.status(500).json({
    msg: 'No tiene acceso a esta ruta'
})
 }

try {
  const decode = jwt.verify(token,process.env.JWT_SECRET as string);
  console.log(decode)
  req['user'] = await Usuario.findByPk(decode['id']);
  next();
} catch (error) {
  res.status(500).json({
    msg: 'No tiene acceso a esta ruta'
})
}
}
