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
        // this.router.post('/', registrosController.create);
        this.router.post('/registrarpais', registrosController_1.default.registrarPais);
        this.router.post('/registrarciudad', registrosController_1.default.registrarCiudad);
        this.router.post('/registrarclub', registrosController_1.default.registrarClub);
        this.router.delete('/:id', registrosController_1.default.delete);
        this.router.put('/:id', registrosController_1.default.update);
    }
}
const registrosRoutes = new RegistrosRoutes();
exports.default = registrosRoutes.router;
