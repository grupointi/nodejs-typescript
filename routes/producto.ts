import { Router } from 'express';
import { getProductos, postProducto} from '../controllers/productos';

import { protect } from '../middleware/auth';
const router = Router();

router.get('/', protect , getProductos);
router.post('/', protect , postProducto );

export default router;