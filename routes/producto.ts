import { Router } from 'express';
import { getProductos, postProducto} from '../controllers/productos';

const router = Router();

router.get('/',       getProductos );
router.post('/',      postProducto );

export default router;