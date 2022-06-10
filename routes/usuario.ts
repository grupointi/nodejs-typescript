import { Router } from 'express';
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario, loginUsuario } from '../controllers/usuarios';
import { check  } from 'express-validator';
import { validarCampos } from '../middleware/validarCampos';

const router = Router();

router.get('/', getUsuarios );
router.get('/:id',    getUsuario );
router.post('/',[
  check('nombre','El parametro nombre no debe ser vacio').notEmpty(),
  check('password','El parametro password no debe ser vacio ').notEmpty(),
  check('email','El parametro email no debe ser vacio y debe tener formato correcto').isEmail(),
  validarCampos
], postUsuario );
router.put('/:id',    putUsuario );
router.delete('/:id', deleteUsuario );
router.post('/login' , [
  check('password','El parametro password no debe ser vacio ').notEmpty(),
  check('email','El parametro email no debe ser vacio y debe tener formato correcto').isEmail(),
  validarCampos
], loginUsuario );

export default router;