import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Producto from '../models/producto';

 export const getProductos = async( req: Request , res: Response ) => {
  let idUsuario;
  if(req['user']) {
       idUsuario = req['user']['id']}
  else return res.status(500).json({
    msg: 'No posee los permisos para esta operacion'
  })

  const productos = await Producto.findAll({
    where: {
      idUsuario
    }
  });
   return res.json({productos});
};

export const postProducto = async( req: Request , res: Response ) => {
  const { body } = req;
  // obtener el id de usuario logueado en jwt y asignarle el id de usuario al producto
  if(req['user']) body['idUsuario'] = req['user']['id']
  else return res.status(500).json({
    msg: 'No posee los permisos para esta operacion'
  })

    try {
    const producto = Producto.build(body);
    await producto.save();
    return res.json( producto );
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
          } else {
            console.log('Unexpected error', err);
          }
           return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}