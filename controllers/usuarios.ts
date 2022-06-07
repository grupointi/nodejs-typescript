import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Usuario from '../models/usuario';
import bcrypt from 'bcryptjs';
import { getToken } from '../utils/utils';

export const getUsuarios = async( req: Request , res: Response ) => {
    const usuarios = await Usuario.findAll();
    res.json({usuarios});
};

export const getUsuario = async( req: Request , res: Response ) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk( id );
    if( usuario ) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }
}

export const postUsuario = async( req: Request , res: Response ) => {
    const { body } = req;
    try {
         const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }
    // encriptar password y guardar usuario
    const salt = await bcrypt.genSalt(10);
    body.password =  await bcrypt.hash(body.password,salt)
    const usuario = Usuario.build(body);
    await usuario.save();
    // generar jwt token
    const index = 'id';
    const token = getToken(usuario[index]);
    // enviar json con usuario y token
    res.status(200).json({usuario,
              token
    });
    } catch (err) {
        if (err instanceof Error) {
            console.log(err);
          } else {
            console.log('Unexpected error', err);
          }
         res.status(500).json({
            msg: 'Hable con el administrador, error inesperado'
        })
    }
}

export const loginUsuario = async( req: Request , res: Response, next ) => {
  const { body} = req;
  let isMatch;

 if(!body.email || !body.password){
      return res.status(400).json({
        msg: 'Por favor ingrese un email y un password'
    });
 }

 const usuario = await Usuario.findOne({
  where: {
      email: body.email
  }
});

if (!usuario) {
  return res.status(400).json({
      msg: 'Credenciales erroneas'
  });
}else{
  const indexPassword = 'password';
  isMatch = await bcrypt.compare(body.password,usuario[indexPassword]);
}

if(!isMatch){
  return res.status(400).json({
    msg: 'Credenciales erroneas'
});
}else{
  const index = 'id';
  const token = getToken(usuario[index]);
  res.status(200).json({token});
}
}

export const putUsuario = async( req: Request , res: Response ) => {
    const { id }   = req.params;
    const { body } = req;
    try {
        const usuario = await Usuario.findByPk( id );
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }

        await usuario.update( body );
        res.json( usuario );

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

export const deleteUsuario = async( req: Request , res: Response ) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk( id );

    if ( !usuario ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

   // borrado logico
   // await usuario.update({ estado: false });
   // borrado fisico
   await usuario.destroy();

    res.json(usuario);
}
