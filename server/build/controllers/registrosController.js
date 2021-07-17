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
    registrarOrganizacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, descripcion } = req.body;
            try {
                const respuesta = yield database_1.default.query("INSERT INTO organizaciones_caridad (NOMBRE,DESCRIPCION) VALUES ('" + nombre + "','" + descripcion + "');");
                res.json('ORGANIZACION INSERTADA CON EXITO');
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarInscripcion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_subasta, membresia_fechainicio, cedula_coleccionista, id_club, autorizado } = req.body;
            try {
                const respuesta = yield database_1.default.query("INSERT INTO INSCRIPCIONES (ID_SUBASTA,MEMBRESIA_FECHAINICIO,CEDULA_COLECCIONISTA,ID_CLUB,AUTORIZADO) VALUES (" + id_subasta + ",'" + membresia_fechainicio + "'," + cedula_coleccionista + "," + id_club + "," + autorizado + ");");
                res.json('INSCRIPCION INSERTADA CON EXITO');
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
    getLugares(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const registros = yield database_1.default.query('SELECT * FROM lugares_subasta');
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
    getOrganizaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const registros = yield database_1.default.query('SELECT * FROM organizaciones_caridad');
            res.json(registros);
        });
    }
    getColeccionistasParaInscribir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_club } = req.body;
            try {
                const registros = yield database_1.default.query('select e.cedula_coleccionista, e.id_club, e.fecha_inicio from membresias e where fecha_fin is null and id_club <> ' + id_club + ";");
                res.json(registros);
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    getComics(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM comics');
            res.json(registros);
        });
    }
    getMembresiasActivas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM membresias where fecha_fin is null;');
            res.json(registros);
        });
    }
    getObjetos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM objetos_de_valor');
            res.json(registros);
        });
    }
    primeraSubasta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const registros = yield database_1.default.query('SELECT * FROM objetos_de_valor');
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
    registrarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, hora_inicio, hora_fin, fecha, modo, tipo, caridad, id_lugar } = req.body;
                const respuesta = yield database_1.default.query("INSERT INTO SUBASTAS (ID,HORA_INICIO,HORA_FIN,FECHA,MODO,TIPO,CARIDAD,CANCELADA,ID_LUGAR) VALUES (" + id + ",'" + hora_inicio + "','" + hora_fin + "','" + fecha + "','" + modo + "','" + tipo + "','" + caridad + "','NO'," + id_lugar + ");");
                res.json('EVENTO REGISTRADO CON EXITO');
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    primeraSubastaObjeto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var mensaje = '';
            try {
                const { id_objeto_valor } = req.body;
                const respuesta = yield database_1.default.query("select e.id from historicos_duenos e where id_objeto_valor = " + id_objeto_valor + ";");
                console.log(respuesta);
                // const respuesta2 = await pool.query("select e.id,e.cedula_coleccionista from historicos_duenos e where id_objeto_valor = "+id_objeto_valor+" and fecha")
                if (respuesta['length'] > 1) {
                    mensaje = "NO";
                }
                else {
                    mensaje = "SI";
                }
                res.json(mensaje);
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    primeraSubastaComic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var mensaje = '';
            try {
                const { id_comic } = req.body;
                const respuesta = yield database_1.default.query("select e.id from historicos_duenos e where id_objeto_valor = " + id_comic + ";");
                if (respuesta['length'] > 1) {
                    mensaje = "NO";
                }
                else {
                    mensaje = "SI";
                }
                res.json(mensaje);
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    ordenVentaComicSubastado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_comic, id_subasta } = req.body;
                const respuesta = yield database_1.default.query("select  max(fecha_registro) from historicos_duenos where id_comic = " + id_comic + ";");
                var fecha = respuesta[0]['max(fecha_registro)'];
                fecha = fecha.toISOString().split('T')[0];
                const respuesta2 = yield database_1.default.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_comic = " + id_comic + " and fecha_registro='" + fecha + "';");
                const respuesta3 = yield database_1.default.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO) VALUES (" + id_subasta + "," + respuesta2[0]['precio_compra$'] + "," + respuesta2[0]['cedula_coleccionista'] + "," + respuesta2[0]['id'] + ",'" + fecha + "');");
                res.json("ORDEN VENTA DE COMIC HECHA CON EXITO");
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    ordenVentaComicRegular(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_comic, id_subasta, precio_base$, numero_en_subasta, duracion_puja_min } = req.body;
                const respuesta = yield database_1.default.query("select  max(fecha_registro) from historicos_duenos where id_comic = " + id_comic + ";");
                var fecha = respuesta[0]['max(fecha_registro)'];
                fecha = fecha.toISOString().split('T')[0];
                const respuesta2 = yield database_1.default.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_comic = " + id_comic + " and fecha_registro='" + fecha + "';");
                const respuesta3 = yield database_1.default.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO,NUMERO_EN_SUBASTA,DURACION_PUJA_MIN) VALUES (" + id_subasta + "," + precio_base$ + "," + respuesta2[0]['cedula_coleccionista'] + "," + respuesta2[0]['id'] + ",'" + fecha + "'," + numero_en_subasta + "," + duracion_puja_min + ");");
                res.json("ORDEN VENTA DE COMIC HECHA CON EXITO");
            }
            catch (e) {
                console.log(e);
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    ordenVentaObjetoSubastado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var mensaje = '';
            try {
                const { id_objeto_valor, id_subasta } = req.body;
                const respuesta = yield database_1.default.query("select  max(fecha_registro) from historicos_duenos where id_objeto_valor = " + id_objeto_valor + ";");
                var fecha = respuesta[0]['max(fecha_registro)'];
                fecha = fecha.toISOString().split('T')[0];
                const respuesta2 = yield database_1.default.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_objeto_valor = " + id_objeto_valor + " and fecha_registro='" + fecha + "';");
                const respuesta3 = yield database_1.default.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO) VALUES (" + id_subasta + "," + respuesta2[0]['precio_compra$'] + "," + respuesta2[0]['cedula_coleccionista'] + "," + respuesta2[0]['id'] + ",'" + fecha + "');");
                // console.log("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO) VALUES ("+id_subasta+","+respuesta2[0]['precio_compra$']+","+respuesta2[0]['cedula_coleccionista']+","+respuesta2[0]['id']+",'"+fecha+"');")
                res.json("ORDEN VENTA DE OBJETO HECHA CON EXITO");
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    ordenVentaObjetoRegular(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_objeto_valor, id_subasta, precio_base$, numero_en_subasta, duracion_puja_min } = req.body;
                const respuesta = yield database_1.default.query("select  max(fecha_registro) from historicos_duenos where id_objeto_valor = " + id_objeto_valor + ";");
                var fecha = respuesta[0]['max(fecha_registro)'];
                fecha = fecha.toISOString().split('T')[0];
                const respuesta2 = yield database_1.default.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_objeto_valor = " + id_objeto_valor + " and fecha_registro='" + fecha + "';");
                const respuesta3 = yield database_1.default.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO,NUMERO_EN_SUBASTA,DURACION_PUJA_MIN) VALUES (" + id_subasta + "," + precio_base$ + "," + respuesta2[0]['cedula_coleccionista'] + "," + respuesta2[0]['id'] + ",'" + fecha + "'," + numero_en_subasta + "," + duracion_puja_min + ");");
                res.json("ORDEN VENTA DE OBJETO HECHA CON EXITO");
            }
            catch (e) {
                console.log(e);
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarOrganizador(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_subasta, id_club } = req.body;
                const respuesta = yield database_1.default.query("INSERT INTO S_C (ID_SUBASTA,ID_CLUB) VALUES (" + id_subasta + "," + id_club + ");");
                res.json('ORGANIZADOR REGISTRADO CON EXITO');
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarCaridad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_organizacion, id_subasta, porcentaje } = req.body;
                const respuesta = yield database_1.default.query("INSERT INTO registros_beneficio (id_organizacion,id_subasta,porcentaje) VALUES (" + id_organizacion + "," + id_subasta + "," + porcentaje + ");");
                res.json('CARIDAD REGISTRADA CON EXITO');
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarInvitacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_subasta, club_invitado } = req.body;
                const respuesta = yield database_1.default.query("INSERT INTO S_C (ID_SUBASTA,CLUB_INVITADO) VALUES (" + id_subasta + "," + club_invitado + ");");
                res.json('INVITACION REGISTRADA CON EXITO');
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
    getIntereses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'listando juegos'})
            const registros = yield database_1.default.query('SELECT * FROM intereses');
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
    registrarInteres(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_club, interes } = req.body;
            try {
                const resp = yield database_1.default.query("SELECT E.ID FROM intereses E WHERE  descripcion='" + interes + "';");
                if (resp['length'] == 0) {
                    const respuesta = yield database_1.default.query("INSERT INTO INTERESES (descripcion) VALUES ('" + interes + "');");
                    const respuesta2 = yield database_1.default.query("SELECT E.ID FROM intereses E WHERE  descripcion='" + interes + "';");
                    console.log(respuesta2[0]['ID']);
                    if (respuesta2['length'] != 0) {
                        const respuesta3 = yield database_1.default.query("INSERT INTO c_i (id_club,id_interes) VALUES (" + id_club + "," + respuesta2[0]['ID'] + ");");
                    }
                    else {
                        console.log("problemas con c_i");
                    }
                }
                else {
                    console.log("ya existe ese interes");
                    let respuesta2 = yield database_1.default.query("SELECT E.ID FROM intereses E WHERE  descripcion='" + interes + "';");
                    let respuesta3 = yield database_1.default.query("INSERT INTO c_i (id_club,id_interes) VALUES (" + id_club + "," + respuesta2[0]['ID'] + ");");
                }
                res.json("INTERES REGISTRADO CON EXITO");
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarTelefono(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { telefono, id_club } = req.body;
            console.log("INSERT INTO contactos_club (id_club,telefono) VALUES (" + id_club + "," + telefono + ");");
            try {
                const { telefono, id_club } = req.body;
                const registros = yield database_1.default.query("INSERT INTO contactos_club (id_club,telefono) VALUES (" + id_club + "," + telefono + ");");
                res.json("TELEFONO REGISTRADO CON EXITO");
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
    registrarLugar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { calle, avenida, id_ciudad, id_pais, tipo, nombre_lugar } = req.body;
                const registros = yield database_1.default.query("INSERT INTO lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar) VALUES ('" + calle + "','" + avenida + "'," + id_ciudad + "," + id_pais + ",'" + tipo + "','" + nombre_lugar + "');");
                res.json("LUGAR REGISTRADO CON EXITO");
            }
            catch (e) {
                res.json("SQL ERROR: " + e.sqlMessage);
            }
        });
    }
}
exports.registrosController = new RegistrosController();
exports.default = exports.registrosController;
