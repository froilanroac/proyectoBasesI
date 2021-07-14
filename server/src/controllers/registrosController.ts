import { Request, Response } from 'express';

import pool from '../database';

class RegistrosController{

    public async list (req:Request, res:Response) {
        // res.json({text:'listando juegos'})
        const registros = await pool.query('SELECT * FROM registros');
        res.json(registros);

    }

    public async getOne (req:Request, res:Response) {
        const { id } = req.params;
        const registros = await pool.query('SELECT * FROM registros WHERE id = ? ',[id]);
        if (registros.length > 0){
            return res.json(registros[0])
        }
        res.status(404).json({text:'el registro no existe'});


    }

    public async create (req:Request, res:Response){
        await pool.query("INSERT INTO registros set ? ", [req.body]);
        res.json({message:'registro insertado'});
    }

    public async delete (req:Request, res:Response){
        const { id } = req.params; 
        await pool.query('DELETE FROM registros WHERE id = ? ', [id])
        res.json({message:'el registro fue eliminado'})
    }

    public async update (req:Request, res:Response){
        const { id } = req.params; 
        await pool.query('UPDATE registros set ? WHERE id = ?', [req.body, id])
        res.json({text:'el registro fue actualizado'});
    }

    public async registrarPais (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO paises set ? ", [req.body]);
            res.json('PAIS INSERTADO CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }

    public async registrarOrganizacion(req:Request, res:Response){
      const { nombre,descripcion } = req.body; 
      try {
          const respuesta = await pool.query("INSERT INTO organizaciones_caridad (NOMBRE,DESCRIPCION) VALUES ('"+nombre+"','"+descripcion+"');");
          res.json('ORGANIZACION INSERTADA CON EXITO');
        } catch (e) {  
          res.json("SQL ERROR: " + e.sqlMessage);            
        }
    }

    public async registrarRepresentante (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO representantes set ? ", [req.body]);
            res.json('REPRESENTANTE REGISTRADO CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }


    public async registrarColeccionista (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO coleccionistas set ? ", [req.body]);
            res.json('COLECCIONISTA INSERTADO CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }

    public async getPaises (req:Request, res:Response) {
        // res.json({text:'listando juegos'})
        const registros = await pool.query('SELECT * FROM paises');
        res.json(registros);

    }

    public async getCiudades (req:Request, res:Response) {
        // res.json({text:'listando juegos'})
        const registros = await pool.query('SELECT * FROM ciudades');
        res.json(registros);

    }

    public async getMembresias(req:Request, res:Response) {
      // res.json({text:'listando juegos'})
      const registros = await pool.query('SELECT * FROM membresias');
      res.json(registros);

  }

    public async registrarCiudad (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO ciudades set ? ", [req.body]);
            res.json('CIUDAD INSERTADA CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }

    public async registrarClub (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO clubes set ? ", [req.body]);
            res.json('CLUB INSERTADO CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }

    public async registrarMembresia (req:Request, res:Response){
      try {
          const respuesta = await pool.query("INSERT INTO membresias set ? ", [req.body]);
          res.json('MEMBRESIA REGISTRADA CON EXITO');
        } catch (e) {  
          res.json("SQL ERROR: " + e.sqlMessage);            
        }
  }


    public async getColeccionistas (req:Request, res:Response) {
      // res.json({text:'listando juegos'})
      const registros = await pool.query('SELECT * FROM coleccionistas');
      res.json(registros);

  }

  public async getClubes (req:Request, res:Response) {
    // res.json({text:'listando juegos'})
    const registros = await pool.query('SELECT * FROM clubes');
    res.json(registros);

}

public async getIntereses (req:Request, res:Response) {
  // res.json({text:'listando juegos'})
  const registros = await pool.query('SELECT * FROM intereses');
  res.json(registros);

}


public async cerrarMembresia (req:Request, res:Response){
  try {
  const { fecha,cedula,id_club } = req.body; 
  const registros = await pool.query('UPDATE MEMBRESIAS SET FECHA_FIN=(CURRENT_DATE) WHERE FECHA_INICIO="'+fecha+'" AND CEDULA_COLECCIONISTA='+cedula+' AND ID_CLUB='+ id_club+';');

  res.json("CERRANDO MEMBRESIA DE " +fecha+','+ cedula+','+id_club);
} catch (e) { 
  res.json("SQL ERROR: " + e.sqlMessage);            
}
}

public async registrarObjeto (req:Request, res:Response){
  const { nombre, descripcion,fecha_fabricacion,cedula_coleccionista,fecha_registro,precio_compra$,significado } = req.body;
  var id ;
  try {
      const respuesta = await pool.query("INSERT INTO objetos_de_valor (NOMBRE,DESCRIPCION,FECHA_FABRICACION) VALUES ('"+nombre+ "','"+descripcion+"','"+fecha_fabricacion+"');");
      const respuesta2 = await pool.query("SELECT E.ID FROM OBJETOS_DE_VALOR E WHERE NOMBRE='"+nombre+"';");
      console.log(respuesta2[0]['ID']);
      if(respuesta2['length'] != 0){
        
        const respuesta3 = await pool.query("INSERT INTO historicos_duenos (CEDULA_COLECCIONISTA,FECHA_REGISTRO,PRECIO_COMPRA$,SIGNIFICADO,ID_OBJETO_VALOR) VALUES ("+cedula_coleccionista+",'"+fecha_registro+"',"+precio_compra$+",'"+significado+"',"+respuesta2[0]['ID']+");");
      }else{
        console.log("problemas con el historico");
      }
      res.json("OBJETO REGISTRADO CON EXITO");
    } catch (e) {  
      res.json("SQL ERROR: " + e.sqlMessage);            
    }
  }

  public async getIdObjeto (req:Request, res:Response) {
    const { nombre } = req.body;
    const registros = await pool.query("SELECT E.ID FROM OBJETOS_DE_VALOR E WHERE NOMBRE='"+nombre+"';");
    res.json(registros);

}
public async registrarComic (req:Request, res:Response){
  const { fecha_publicacion, sinopsis,editor,paginas,color,titulo,numero,precio_org$,vol_numero, cedula_coleccionista,fecha_registro,precio_compra$, significado} = req.body;

  var id ;
  try {
      const respuesta = await pool.query("INSERT INTO comics (FECHA_PUBLICACION,SINOPSIS,EDITOR,PAGINAS,COLOR,TITULO,NUMERO,PRECIO_ORG$,VOL_NUMERO) VALUES ('"+fecha_publicacion+"','"+sinopsis+"','"+editor+"','"+paginas+"',"+color+",'"+titulo+"',"+numero+","+precio_org$+","+vol_numero+");");
      const respuesta2 = await pool.query("SELECT E.ID FROM comics E WHERE titulo='"+titulo+"';");
      console.log(respuesta2[0]['ID']);
      if(respuesta2['length'] != 0){
        
        const respuesta3 = await pool.query("INSERT INTO historicos_duenos (CEDULA_COLECCIONISTA,FECHA_REGISTRO,PRECIO_COMPRA$,SIGNIFICADO,ID_COMIC) VALUES ("+cedula_coleccionista+",'"+fecha_registro+"',"+precio_compra$+",'"+significado+"',"+respuesta2[0]['ID']+");");
      }else{
        console.log("problemas con el historico");
      }
      res.json("OBJETO REGISTRADO CON EXITO");
    } catch (e) {  
      res.json("SQL ERROR: " + e.sqlMessage);            
    }
  }

  public async registrarInteres (req:Request, res:Response){
    const { id_club, interes } = req.body;

    try {
        const resp = await pool.query("SELECT E.ID FROM intereses E WHERE  descripcion='"+interes+"';") 
        if(resp['length'] == 0){
          const respuesta = await pool.query("INSERT INTO INTERESES (descripcion) VALUES ('"+interes+"');");
          const respuesta2 = await pool.query("SELECT E.ID FROM intereses E WHERE  descripcion='"+interes+"';");
          console.log(respuesta2[0]['ID']);
          if(respuesta2['length'] != 0){
            const respuesta3 = await pool.query("INSERT INTO c_i (id_club,id_interes) VALUES ("+id_club+","+respuesta2[0]['ID']+");");
          }else{
            console.log("problemas con c_i");
          }
          
        }else{
          console.log("ya existe ese interes");

          let respuesta2 = await pool.query("SELECT E.ID FROM intereses E WHERE  descripcion='"+interes+"';");
          let respuesta3 = await pool.query("INSERT INTO c_i (id_club,id_interes) VALUES ("+id_club+","+respuesta2[0]['ID']+");");

        }
        res.json("INTERES REGISTRADO CON EXITO");
      } catch (e) {  

        res.json("SQL ERROR: " + e.sqlMessage);           
      }
    }

    public async registrarTelefono(req:Request, res:Response){
      const { telefono,id_club } = req.body; 
      console.log("INSERT INTO contactos_club (id_club,telefono) VALUES ("+id_club+","+telefono+");")
      try {
      const { telefono,id_club } = req.body; 
      const registros = await pool.query("INSERT INTO contactos_club (id_club,telefono) VALUES ("+id_club+","+telefono+");");    
      res.json("TELEFONO REGISTRADO CON EXITO");
    } catch (e) { 
      res.json("SQL ERROR: " + e.sqlMessage);            
    }
    }


}

export const registrosController = new RegistrosController();
export default registrosController;