import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Producto from '../models/producto';

 export const getProductos = async( req: Request , res: Response ) => {
  const idUsuario =  req['user']['id'];
  const productos = await Producto.findAll({
    where: {
      idUsuario
    }
  });
    res.json({productos});
};

export const postProducto = async( req: Request , res: Response ) => {
  const { body } = req;
  // obtener el id de usuario logueado en jwt y asignarle el id de usuario al producto
  body['idUsuario'] = req['user']['id']
    try {
    const producto = Producto.build(body);
    await producto.save();
    res.json( producto );
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
          } else {
            console.log('Unexpected error', err);
          }
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}