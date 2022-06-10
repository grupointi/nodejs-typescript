import { Router } from 'express';
import { getProductos, postProducto} from '../controllers/productos';
import { check  } from 'express-validator';
import { validarCampos } from '../middleware/validarCampos';

import { protect } from '../middleware/auth';
const router = Router();

router.get('/', protect , getProductos);
router.post('/' , [
  check('nombre','El parametro nombre no debe ser vacio ').notEmpty(),
  check('descripcion','El parametro descripcion no debe ser vacio').notEmpty(),
  validarCampos,
  protect
],  postProducto );

export default router;