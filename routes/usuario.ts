import { Router } from "express";
import { getUsuarios, postUsuario, getUsuario, deleteUsuario, putUsuario } from '../controller/usuario';

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);






export default router;