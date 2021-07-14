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
        this.router.get('/getciudades', registrosController_1.default.getCiudades);
        this.router.get('/getcoleccionistas', registrosController_1.default.getColeccionistas);
        this.router.get('/getclubes', registrosController_1.default.getClubes);
        this.router.get('/getmembresias', registrosController_1.default.getMembresias);
        this.router.post('/getidobjeto', registrosController_1.default.getIdObjeto);
        // revisar esto de objeto (post?)
        this.router.get('/getintereses', registrosController_1.default.getIntereses);
        // this.router.post('/', registrosController.create);
        this.router.post('/registrarpais', registrosController_1.default.registrarPais);
        this.router.post('/registrarciudad', registrosController_1.default.registrarCiudad);
        this.router.post('/registrarclub', registrosController_1.default.registrarClub);
        this.router.post('/registrarrepresentante', registrosController_1.default.registrarRepresentante);
        this.router.post('/registrarcoleccionista', registrosController_1.default.registrarColeccionista);
        this.router.post('/registrarmembresia', registrosController_1.default.registrarMembresia);
        this.router.post('/registrartelefono', registrosController_1.default.registrarTelefono);
        this.router.delete('/:id', registrosController_1.default.delete);
        this.router.put('/:id', registrosController_1.default.update);
        this.router.post('/cerrarmembresia', registrosController_1.default.cerrarMembresia);
        this.router.post('/registrarobjeto', registrosController_1.default.registrarObjeto);
        this.router.post('/registrarcomic', registrosController_1.default.registrarComic);
        this.router.post('/registrarinteres', registrosController_1.default.registrarInteres);
        this.router.post('/registrarorganizacion', registrosController_1.default.registrarOrganizacion);
    }
}
const registrosRoutes = new RegistrosRoutes();
exports.default = registrosRoutes.router;
