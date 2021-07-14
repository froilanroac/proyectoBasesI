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
        this.router.post('/getidobjeto', registrosController.getIdObjeto);
        // revisar esto de objeto (post?)
        this.router.get('/getintereses', registrosController.getIntereses);
        // this.router.post('/', registrosController.create);
        this.router.post('/registrarpais', registrosController.registrarPais);
        this.router.post('/registrarciudad', registrosController.registrarCiudad);
        this.router.post('/registrarclub', registrosController.registrarClub);
        this.router.post('/registrarrepresentante', registrosController.registrarRepresentante);
        this.router.post('/registrarcoleccionista', registrosController.registrarColeccionista);
        this.router.post('/registrarmembresia', registrosController.registrarMembresia);
        this.router.post('/registrartelefono', registrosController.registrarTelefono);
        
        this.router.delete('/:id', registrosController.delete);
        this.router.put('/:id', registrosController.update);
        this.router.post('/cerrarmembresia', registrosController.cerrarMembresia);
        this.router.post('/registrarobjeto', registrosController.registrarObjeto);
        this.router.post('/registrarcomic', registrosController.registrarComic);
        this.router.post('/registrarinteres', registrosController.registrarInteres);
        this.router.post('/registrarorganizacion', registrosController.registrarOrganizacion);
        this.router.post('/registrarlugar', registrosController.registrarLugar);
        

    }


}

const registrosRoutes = new RegistrosRoutes();
export default registrosRoutes.router;