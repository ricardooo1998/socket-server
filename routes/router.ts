import {Router, Request, Response} from 'express';
const router = Router();

router.get('/mensajes', (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        mensaje: 'Hello there',
        tipo: 'GET'
    });
});

router.post('/mensajes', (req: Request, resp: Response) => {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    resp.json({
        ok: true,
        mensaje: `Hola ${nombre} ${apellidos}`,
        tipo: 'POST'
    });
});

router.post('/mensajes/:id', (req: Request, resp: Response) => {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const id = req.params.id;
    resp.json({
        ok: true,
        mensaje: `Hola ${nombre} ${apellidos}`,
        tipo: 'POST',
        id: id,
    });
});

export default router;

