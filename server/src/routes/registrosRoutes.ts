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
        this.router.get('/getsubastas', registrosController.getSubastas);
        this.router.get('/getciudades', registrosController.getCiudades);
        this.router.get('/getcoleccionistas', registrosController.getColeccionistas);
        this.router.get('/getclubes', registrosController.getClubes);
        this.router.get('/getmembresias', registrosController.getMembresias);
        this.router.get('/getmembresiasactivas', registrosController.getMembresiasActivas);
        this.router.get('/getobjetos', registrosController.getObjetos);
        this.router.get('/getcomics', registrosController.getComics);
        this.router.get('/getorganizaciones', registrosController.getOrganizaciones);
        this.router.post('/getidobjeto', registrosController.getIdObjeto);
        this.router.get('/getlugares', registrosController.getLugares);
        this.router.post('/primerasubastaobjeto', registrosController.primeraSubastaObjeto);
        this.router.post('/primerasubastacomic', registrosController.primeraSubastaComic);
        this.router.post('/ordenventaobjetosubastado', registrosController.ordenVentaObjetoSubastado);
        this.router.post('/ordenventaobjetoregular', registrosController.ordenVentaObjetoRegular);
        this.router.post('/ordenventacomicsubastado', registrosController.ordenVentaComicSubastado);
        this.router.post('/ordenventacomicregular', registrosController.ordenVentaComicRegular);
        this.router.get('/getcoleccionistasinscribir', registrosController.getColeccionistasParaInscribir);
        this.router.post('/getdescripcionobjeto', registrosController.getDescripcionObjetoSubasta);
        this.router.post('/getsubasta', registrosController.getSubasta);

        this.router.post('/getordenesventa', registrosController.getOrdenesVentaSubasta);

        this.router.post('/getinscripciones', registrosController.getInscripciones);

        this.router.post('/escomic', registrosController.esComic);

        this.router.post('/comicsubastado', registrosController.comicSubastado);

        this.router.post('/objetosubastado', registrosController.objetoSubastado);

        this.router.post('/getregistrosbeneficio', registrosController.getRegistrosBeneficio);

        this.router.post('/registrarbeneficio', registrosController.registrarBeneficio);
        
        this.router.post('/getidobjetospurgados', registrosController.getIdObjetosPurgados);

        this.router.post('/getidcomicspurgados', registrosController.getIdComicsPurgados);

        this.router.post('/getcedulaspurgadas', registrosController.getCedulasPurgadas);

        this.router.post('/getnombreclub', registrosController.getNombreClubSubasta);

        this.router.post('/eliminarsubasta', registrosController.eliminarSubasta);

        // revisar esto de objeto (post?)
        this.router.get('/getintereses', registrosController.getIntereses);
        // this.router.post('/', registrosController.create);
        this.router.post('/registrarpais', registrosController.registrarPais);
        this.router.post('/registrarciudad', registrosController.registrarCiudad);
        this.router.post('/registrarclub', registrosController.registrarClub);
        this.router.post('/registrarrepresentante', registrosController.registrarRepresentante);
        this.router.post('/registrarcoleccionista', registrosController.registrarColeccionista);
        this.router.post('/registrarmembresia', registrosController.registrarMembresia);
        this.router.post('/registrarevento', registrosController.registrarEvento);
        this.router.post('/registrartelefono', registrosController.registrarTelefono);
        this.router.post('/registrarorganizador', registrosController.registrarOrganizador);
        this.router.post('/registrarinvitacion', registrosController.registrarInvitacion);
        this.router.post('/registrarinscripcion', registrosController.registrarInscripcion);
        this.router.post('/registrarcaridad', registrosController.registrarCaridad);
       
        

        
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