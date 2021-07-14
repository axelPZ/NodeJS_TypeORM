import { Router }  from "express";
import { getAll, addUser } from '../controllers/user';

const router = Router();

router.get('/', getAll );
router.post('/', addUser);




export default router;