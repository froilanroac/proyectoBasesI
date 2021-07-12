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
                res.json('PAIS INSERTADO CON EXITO');
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
                res.json('REPRESENTANTE REGISTRADO CON EXITO');
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
                res.json('COLECCIONISTA INSERTADO CON EXITO');
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
    getMembresias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM membresias');
            res.json(registros);
        });
    }
    registrarCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query("INSERT INTO ciudades set ? ", [req.body]);
                res.json('CIUDAD INSERTADA CON EXITO');
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
                res.json('CLUB INSERTADO CON EXITO');
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarMembresia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const respuesta = yield database_1.default.query("INSERT INTO membresias set ? ", [req.body]);
                res.json('MEMBRESIA REGISTRADA CON EXITO');
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    getColeccionistas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM coleccionistas');
            res.json(registros);
        });
    }
    getClubes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM clubes');
            res.json(registros);
        });
    }
    cerrarMembresia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { fecha, cedula, id_club } = req.body;
                const registros = yield database_1.default.query('UPDATE MEMBRESIAS SET FECHA_FIN=(CURRENT_DATE) WHERE FECHA_INICIO="' + fecha + '" AND CEDULA_COLECCIONISTA=' + cedula + ' AND ID_CLUB=' + id_club + ';');
                res.json("CERRANDO MEMBRESIA DE " + fecha + ',' + cedula + ',' + id_club);
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarObjeto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, descripcion, fecha_fabricacion, cedula_coleccionista, fecha_registro, precio_compra$, significado } = req.body;
            var id;
            try {
                const respuesta = yield database_1.default.query("INSERT INTO objetos_de_valor (NOMBRE,DESCRIPCION,FECHA_FABRICACION) VALUES ('" + nombre + "','" + descripcion + "','" + fecha_fabricacion + "');");
                const respuesta2 = yield database_1.default.query("SELECT E.ID FROM OBJETOS_DE_VALOR E WHERE NOMBRE='" + nombre + "';");
                console.log(respuesta2[0]['ID']);
                if (respuesta2['length'] != 0) {
                    const respuesta3 = yield database_1.default.query("INSERT INTO historicos_duenos (CEDULA_COLECCIONISTA,FECHA_REGISTRO,PRECIO_COMPRA$,SIGNIFICADO,ID_OBJETO_VALOR) VALUES (" + cedula_coleccionista + ",'" + fecha_registro + "'," + precio_compra$ + ",'" + significado + "'," + respuesta2[0]['ID'] + ");");
                }
                else {
                    console.log("problemas con el historico");
                }
                res.json("OBJETO REGISTRADO CON EXITO");
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    getIdObjeto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.body;
            const registros = yield database_1.default.query("SELECT E.ID FROM OBJETOS_DE_VALOR E WHERE NOMBRE='" + nombre + "';");
            res.json(registros);
        });
    }
    registrarComic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fecha_publicacion, sinopsis, editor, paginas, color, titulo, numero, precio_org$, vol_numero, cedula_coleccionista, fecha_registro, precio_compra$, significado } = req.body;
            var id;
            try {
                const respuesta = yield database_1.default.query("INSERT INTO comics (FECHA_PUBLICACION,SINOPSIS,EDITOR,PAGINAS,COLOR,TITULO,NUMERO,PRECIO_ORG$,VOL_NUMERO) VALUES ('" + fecha_publicacion + "','" + sinopsis + "','" + editor + "','" + paginas + "'," + color + ",'" + titulo + "'," + numero + "," + precio_org$ + "," + vol_numero + ");");
                const respuesta2 = yield database_1.default.query("SELECT E.ID FROM comics E WHERE titulo='" + titulo + "';");
                console.log(respuesta2[0]['ID']);
                if (respuesta2['length'] != 0) {
                    const respuesta3 = yield database_1.default.query("INSERT INTO historicos_duenos (CEDULA_COLECCIONISTA,FECHA_REGISTRO,PRECIO_COMPRA$,SIGNIFICADO,ID_COMIC) VALUES (" + cedula_coleccionista + ",'" + fecha_registro + "'," + precio_compra$ + ",'" + significado + "'," + respuesta2[0]['ID'] + ");");
                }
                else {
                    console.log("problemas con el historico");
                }
                res.json("OBJETO REGISTRADO CON EXITO");
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
}
exports.registrosController = new RegistrosController();
exports.default = exports.registrosController;
