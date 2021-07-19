"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registrosController_1 = __importDefault(require("../controllers/registrosController"));
class RegistrosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', registrosController_1.default.list);
        this.router.get('/getpaises', registrosController_1.default.getPaises);
        this.router.get('/getsubastas', registrosController_1.default.getSubastas);
        this.router.get('/getciudades', registrosController_1.default.getCiudades);
        this.router.get('/getcoleccionistas', registrosController_1.default.getColeccionistas);
        this.router.get('/getclubes', registrosController_1.default.getClubes);
        this.router.get('/getmembresias', registrosController_1.default.getMembresias);
        this.router.get('/getmembresiasactivas', registrosController_1.default.getMembresiasActivas);
        this.router.get('/getobjetos', registrosController_1.default.getObjetos);
        this.router.get('/getcomics', registrosController_1.default.getComics);
        this.router.get('/getorganizaciones', registrosController_1.default.getOrganizaciones);
        this.router.post('/getidobjeto', registrosController_1.default.getIdObjeto);
        this.router.get('/getlugares', registrosController_1.default.getLugares);
        this.router.post('/primerasubastaobjeto', registrosController_1.default.primeraSubastaObjeto);
        this.router.post('/primerasubastacomic', registrosController_1.default.primeraSubastaComic);
        this.router.post('/ordenventaobjetosubastado', registrosController_1.default.ordenVentaObjetoSubastado);
        this.router.post('/ordenventaobjetoregular', registrosController_1.default.ordenVentaObjetoRegular);
        this.router.post('/ordenventacomicsubastado', registrosController_1.default.ordenVentaComicSubastado);
        this.router.post('/ordenventacomicregular', registrosController_1.default.ordenVentaComicRegular);
        this.router.post('/getcoleccionistasinscribir', registrosController_1.default.getColeccionistasParaInscribir);
        this.router.post('/getsubasta', registrosController_1.default.getSubasta);
        this.router.post('/getordenesventa', registrosController_1.default.getOrdenesVentaSubasta);
        this.router.post('/getinscripciones', registrosController_1.default.getInscripciones);
        this.router.post('/escomic', registrosController_1.default.esComic);
        this.router.post('/comicsubastado', registrosController_1.default.comicSubastado);
        this.router.post('/objetosubastado', registrosController_1.default.objetoSubastado);
        this.router.post('/getidobjetospurgados', registrosController_1.default.getIdObjetosPurgados);
        this.router.post('/getidcomicspurgados', registrosController_1.default.getIdComicsPurgados);
        this.router.post('/getcedulaspurgadas', registrosController_1.default.getCedulasPurgadas);
        this.router.post('/getnombreclub', registrosController_1.default.getNombreClubSubasta);
        // revisar esto de objeto (post?)
        this.router.get('/getintereses', registrosController_1.default.getIntereses);
        // this.router.post('/', registrosController.create);
        this.router.post('/registrarpais', registrosController_1.default.registrarPais);
        this.router.post('/registrarciudad', registrosController_1.default.registrarCiudad);
        this.router.post('/registrarclub', registrosController_1.default.registrarClub);
        this.router.post('/registrarrepresentante', registrosController_1.default.registrarRepresentante);
        this.router.post('/registrarcoleccionista', registrosController_1.default.registrarColeccionista);
        this.router.post('/registrarmembresia', registrosController_1.default.registrarMembresia);
        this.router.post('/registrarevento', registrosController_1.default.registrarEvento);
        this.router.post('/registrartelefono', registrosController_1.default.registrarTelefono);
        this.router.post('/registrarorganizador', registrosController_1.default.registrarOrganizador);
        this.router.post('/registrarinvitacion', registrosController_1.default.registrarInvitacion);
        this.router.post('/registrarinscripcion', registrosController_1.default.registrarInscripcion);
        this.router.post('/registrarcaridad', registrosController_1.default.registrarCaridad);
        this.router.delete('/:id', registrosController_1.default.delete);
        this.router.put('/:id', registrosController_1.default.update);
        this.router.post('/cerrarmembresia', registrosController_1.default.cerrarMembresia);
        this.router.post('/registrarobjeto', registrosController_1.default.registrarObjeto);
        this.router.post('/registrarcomic', registrosController_1.default.registrarComic);
        this.router.post('/registrarinteres', registrosController_1.default.registrarInteres);
        this.router.post('/registrarorganizacion', registrosController_1.default.registrarOrganizacion);
        this.router.post('/registrarlugar', registrosController_1.default.registrarLugar);
    }
}
const registrosRoutes = new RegistrosRoutes();
exports.default = registrosRoutes.router;
