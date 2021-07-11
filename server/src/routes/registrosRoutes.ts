import { Router } from 'express';
import registrosController  from '../controllers/registrosController';

class RegistrosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void {
        this.router.get('/', registrosController.list);
        this.router.get('/getpaises', registrosController.getPaises);
        this.router.get('/getciudades', registrosController.getCiudades);
        this.router.get('/getcoleccionistas', registrosController.getColeccionistas);
        this.router.get('/getclubes', registrosController.getClubes);
        this.router.get('/getmembresias', registrosController.getMembresias);
        // this.router.post('/', registrosController.create);
        this.router.post('/registrarpais', registrosController.registrarPais);
        this.router.post('/registrarciudad', registrosController.registrarCiudad);
        this.router.post('/registrarclub', registrosController.registrarClub);
        this.router.post('/registrarrepresentante', registrosController.registrarRepresentante);
        this.router.post('/registrarcoleccionista', registrosController.registrarColeccionista);
        this.router.post('/registrarmembresia', registrosController.registrarMembresia);
        this.router.delete('/:id', registrosController.delete);
        this.router.put('/:id', registrosController.update);
        this.router.post('/cerrarmembresia', registrosController.cerrarMembresia);

    }


}

const registrosRoutes = new RegistrosRoutes();
export default registrosRoutes.router;