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
        this.router.get('/:id', registrosController_1.default.getOne);
        this.router.post('/', registrosController_1.default.create);
        this.router.delete('/:id', registrosController_1.default.delete);
        this.router.put('/:id', registrosController_1.default.update);
    }
}
const registrosRoutes = new RegistrosRoutes();
exports.default = registrosRoutes.router;
