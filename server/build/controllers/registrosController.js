"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrosController = void 0;
const database_1 = __importDefault(require("../database"));
class RegistrosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM registros');
            res.json(registros);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const registros = yield database_1.default.query('SELECT * FROM registros WHERE id = ? ', [id]);
            if (registros.length > 0) {
                return res.json(registros[0]);
            }
            res.status(404).json({ text: 'el registro no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO registros set ? ", [req.body]);
            res.json({ message: 'registro insertado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM registros WHERE id = ? ', [id]);
            res.json({ message: 'el registro fue eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE registros set ? WHERE id = ?', [req.body, id]);
            res.json({ text: 'el registro fue actualizado' });
        });
    }
    registrarPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query("INSERT INTO paises set ? ", [req.body]);
                res.json({ message: 'pais insertado' });
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarRepresentante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query("INSERT INTO representantes set ? ", [req.body]);
                res.json({ message: 'representante insertado' });
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarColeccionista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query("INSERT INTO coleccionistas set ? ", [req.body]);
                res.json({ message: 'coleccionista insertado' });
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    getPaises(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM paises');
            res.json(registros);
        });
    }
    getCiudades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM ciudades');
            res.json(registros);
        });
    }
    registrarCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query("INSERT INTO ciudades set ? ", [req.body]);
                res.json({ message: 'ciudad insertada' });
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarClub(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query("INSERT INTO clubes set ? ", [req.body]);
                res.json({ message: 'club insertado' });
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
}
exports.registrosController = new RegistrosController();
exports.default = exports.registrosController;
