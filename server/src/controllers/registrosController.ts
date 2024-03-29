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

    public async getSubasta (req:Request, res:Response) {
      try {
      const { id } = req.body; 
      const registros = await pool.query('select * from subastas where id ='+id+";");
      return res.json(registros)
    } catch (e) {  
      res.json("SQL ERROR: " + e);  
    }
  }

  public async getOrdenesVentaSubasta(req:Request, res:Response) {
    try {
    const { id } = req.body; 
    const registros = await pool.query("select * from ordenes_venta_subasta where id_subasta = "+id+";");
    return res.json(registros)
  } catch (e) {  
    res.json("SQL ERROR: " + e);  
  }
  }

  public async getInscripciones(req:Request, res:Response) {
    try {
    const { id } = req.body; 
    const registros = await pool.query("select * from inscripciones where id_subasta = "+id+";");
    return res.json(registros)
  } catch (e) {  
    res.json("SQL ERROR: " + e);  
  }
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
            res.json("SQL ERROR: " + e);            
          }
    }

    public async registrarOrganizacion(req:Request, res:Response){
      const { nombre,descripcion } = req.body; 
      try {
          const respuesta = await pool.query("INSERT INTO organizaciones_caridad (NOMBRE,DESCRIPCION) VALUES ('"+nombre+"','"+descripcion+"');");
          res.json('ORGANIZACION INSERTADA CON EXITO');
        } catch (e) {  
          res.json("SQL ERROR: " + e);            
        }
    }

    public async registrarInscripcion(req:Request, res:Response){
      const { id_subasta,membresia_fechainicio ,cedula_coleccionista,id_club,autorizado } = req.body; 
      try {
          const resp = await pool.query("select distinct(m.cedula_coleccionista) from membresias m, coleccionistas c where c.cedula = m.cedula_coleccionista and m.cedula_coleccionista = "+cedula_coleccionista+" and (c.cedula_representante is not null  or c.id_representante is not null) and m.id_club = "+id_club+";")
          if(resp['length'] > 0){
            const respuesta = await pool.query("INSERT INTO INSCRIPCIONES (ID_SUBASTA,MEMBRESIA_FECHAINICIO,CEDULA_COLECCIONISTA,ID_CLUB,AUTORIZADO) VALUES ("+id_subasta+",'"+membresia_fechainicio+"',"+cedula_coleccionista+","+id_club+",1);")
          }else{
            const respuesta = await pool.query("INSERT INTO INSCRIPCIONES (ID_SUBASTA,MEMBRESIA_FECHAINICIO,CEDULA_COLECCIONISTA,ID_CLUB,AUTORIZADO) VALUES ("+id_subasta+",'"+membresia_fechainicio+"',"+cedula_coleccionista+","+id_club+",0);")
          }
          res.json('INSCRIPCION INSERTADA CON EXITO');
        } catch (e) {  
          res.json("SQL ERROR: " + e);            
        }
    }

    public async registrarRepresentante (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO representantes set ? ", [req.body]);
            res.json('REPRESENTANTE REGISTRADO CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e);            
          }
    }


    public async registrarColeccionista (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO coleccionistas set ? ", [req.body]);
            res.json('COLECCIONISTA INSERTADO CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e);            
          }
    }

    public async getPaises (req:Request, res:Response) {
        // res.json({text:'listando juegos'})
        const registros = await pool.query('SELECT * FROM paises');
        res.json(registros);

    }

    public async getSubastas (req:Request, res:Response) {
      try{
      const registros = await pool.query('SELECT * FROM subastas');
      res.json(registros);
    } catch (e) {  
      res.json("SQL ERROR: " + e);            
    }

  }

    public async getCiudades (req:Request, res:Response) {
        // res.json({text:'listando juegos'})
        const registros = await pool.query('SELECT * FROM ciudades');
        res.json(registros);

    }

    public async getLugares (req:Request, res:Response) {
      const registros = await pool.query('SELECT * FROM lugares_subasta');
      res.json(registros);

  }

    public async getMembresias(req:Request, res:Response) {
      // res.json({text:'listando juegos'})
      const registros = await pool.query('SELECT * FROM membresias');
      res.json(registros);

  }

  public async getNombreClubSubasta(req:Request, res:Response) {
    const { id } = req.body; 
    const registros = await pool.query("select c.nombre from subastas s, clubes c, s_c i where s.id = i.id_subasta and s.id="+id+"12312 and i.id_club = c.id ;");
    res.json(registros);

}

public async registrarBeneficio(req:Request, res:Response) {
  const { id, recaudado, porcentaje } = req.body; 
  const registros = await pool.query("update registros_beneficio set dinero_donado$ = "+recaudado*(porcentaje/100)+" where id = "+ id+";");
  res.json("BENEFICIO REGISTRADO CON EXITO");

}

  public async getOrganizaciones(req:Request, res:Response) {
    const registros = await pool.query('SELECT * FROM organizaciones_caridad');
    res.json(registros);

}

public async eliminarSubasta(req:Request, res:Response) {
  const { id } =  req.body; 
  try{
    const registros = await pool.query('DELETE FROM SUBASTAS WHERE ID='+ id );
  res.json("SUBASTA ELIMINADA CON EXITO");
  } catch (e) {  
    res.json("SQL ERROR: " + e);            
  }

}

  public async getColeccionistasParaInscribir(req:Request, res:Response) {
    const { id_club } =  req.body; 
    try{
    const registros = await pool.query('select e.cedula_coleccionista, e.id_club, e.fecha_inicio from membresias e where fecha_fin is null;');
    res.json(registros);
    } catch (e) {  
      res.json("SQL ERROR: " + e);            
    }

}

public async getCedulasPurgadas(req:Request, res:Response) {
  const { id } =  req.body; 
  try{
  const registros = await pool.query("select distinct(m.cedula_coleccionista),m.id_club from membresias m, s_c s, ordenes_venta_subasta o where m.fecha_fin is null and m.id_club = s.club_invitado and s.id_subasta = "+id+" and m.cedula_coleccionista not in (select o.cedula_coleccionista from ordenes_Venta_subasta o where o.id_subasta = "+id+");");
  res.json(registros);
  } catch (e) {  
    res.json("SQL ERROR: " + e);            
  }

}

public async getIdObjetosPurgados(req:Request, res:Response) {
  const { id_club } =  req.body; 
  try{
  const registros = await pool.query("select distinct(o.id) from objetos_de_valor o,historicos_duenos h, coleccionistas c, membresias m where o.id = h.id_objeto_valor and h.cedula_coleccionista = c.cedula and c.cedula = m.cedula_coleccionista and m.fecha_fin is null and m.id_club ="+ id_club +" and h.fecha_registro = (select max(p.fecha_registro) from historicos_duenos p where p.id_objeto_valor = o.id);");
  res.json(registros);
  } catch (e) {  
    res.json("SQL ERROR: " + e);            
  }

}

public async getIdComicsPurgados(req:Request, res:Response) {
  const { id_club } =  req.body; 
  try{
  const registros = await pool.query("select distinct(o.id) from comics o,historicos_duenos h, coleccionistas c, membresias m where o.id = h.id_comic and h.cedula_coleccionista = c.cedula and c.cedula = m.cedula_coleccionista and m.fecha_fin is null and m.id_club ="+ id_club +" and h.fecha_registro = (select max(p.fecha_registro) from historicos_duenos p where p.id_comic = o.id);");
  res.json(registros);
  } catch (e) {  
    res.json("SQL ERROR: " + e);            
  }

}

  public async getComics(req:Request, res:Response) {
    // res.json({text:'listando juegos'})
    const registros = await pool.query('SELECT * FROM comics');
    res.json(registros);

}

public async getRegistrosBeneficio(req:Request, res:Response) {
  const { id } = req.body;
  const registros = await pool.query("select * from registros_beneficio where id_subasta = "+id +";");
  res.json(registros);

}

public async getMembresiasActivas(req:Request, res:Response) {
  // res.json({text:'listando juegos'})
  const registros = await pool.query('SELECT * FROM membresias where fecha_fin is null;');
  res.json(registros);

}

  public async getObjetos(req:Request, res:Response) {
    // res.json({text:'listando juegos'})
    const registros = await pool.query('SELECT * FROM objetos_de_valor');
    res.json(registros);

}

public async primeraSubasta(req:Request, res:Response) {
  const { id } =  req.body; 
  const registros = await pool.query('SELECT * FROM objetos_de_valor');
  res.json(registros);

}

    public async registrarCiudad (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO ciudades set ? ", [req.body]);
            res.json('CIUDAD INSERTADA CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e);            
          }
    }

    public async registrarClub (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO clubes set ? ", [req.body]);
            res.json('CLUB INSERTADO CON EXITO');
          } catch (e) {  
            res.json("SQL ERROR: " + e);            
          }
    }


    public async registrarMembresia (req:Request, res:Response){
      try {
          const respuesta = await pool.query("INSERT INTO membresias set ? ", [req.body]);
          res.json('MEMBRESIA REGISTRADA CON EXITO');
        } catch (e) {  
          res.json("SQL ERROR: " + e);            
        }
  }

  public async registrarEvento (req:Request, res:Response){
    try {
      const { id,hora_inicio,hora_fin,fecha,modo,tipo,caridad,id_lugar} = req.body; 
      const respuesta = await pool.query("INSERT INTO SUBASTAS (ID,HORA_INICIO,HORA_FIN,FECHA,MODO,TIPO,CARIDAD,CANCELADA,ID_LUGAR) VALUES ("+id+",'"+hora_inicio+"','"+hora_fin+"','"+fecha+"','"+modo+"','"+tipo+"','"+caridad+"','NO',"+id_lugar+");")
      res.json('EVENTO REGISTRADO CON EXITO');
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  

  public async primeraSubastaObjeto(req:Request, res:Response){
    var mensaje = ''
    try {
      const { id_objeto_valor } = req.body; 
      const respuesta = await pool.query("select e.id from historicos_duenos e where id_objeto_valor = "+id_objeto_valor+";")
      console.log(respuesta)
      // const respuesta2 = await pool.query("select e.id,e.cedula_coleccionista from historicos_duenos e where id_objeto_valor = "+id_objeto_valor+" and fecha")
      if(respuesta['length'] > 1){
        mensaje = "NO"
      }else{
        mensaje = "SI"
      }
      res.json(mensaje)
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async esComic(req:Request, res:Response){
    var mensaje = ''
    try {
      const { id_historico } = req.body; 
      const respuesta = await pool.query("select h.id from historicos_duenos h where h.id_objeto_valor is null and h.id = "+id_historico+";")
      console.log(respuesta['length'])
      console.log(respuesta)
      if(respuesta['length'] > 0){
        mensaje = "SI"
      }else{
        mensaje = "NO"
      }
      console.log(mensaje)
      res.json(mensaje)
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async comicSubastado(req:Request, res:Response){
    try {
      const { id_inscr_ganador,id_subasta_ganador, id_historico, id_subasta,cedula_coleccionista,precio_compra$,significado} = req.body; 
      const respuesta = await pool.query("update ordenes_venta_subasta set precio_venta = "+precio_compra$+", id_insc_ganador = "+id_inscr_ganador+",id_subasta_ganador = "+ id_subasta_ganador  +" where id_subasta = "+ id_subasta +" and id_historico = "+ id_historico +";")
      const respuesta2 = await pool.query("select c.id_comic from historicos_duenos c where c.id = "+id_historico+";")
      const respuesta3 = await pool.query("INSERT INTO HISTORICOS_DUENOS (CEDULA_COLECCIONISTA,FECHA_REGISTRO,PRECIO_COMPRA$,SIGNIFICADO,ID_COMIC) VALUES ("+cedula_coleccionista+",(CURRENT_DATE),"+precio_compra$+",'"+significado+"',"+respuesta2[0]['id_comic']+");");
      res.json("VENTA DE COMIC  REGISTRADA CON EXITO")
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async objetoSubastado(req:Request, res:Response){
    try {
      const { id_inscr_ganador,id_subasta_ganador, id_historico, id_subasta,cedula_coleccionista,precio_compra$,significado} = req.body; 
      const respuesta = await pool.query("update ordenes_venta_subasta set precio_venta = "+precio_compra$+", id_insc_ganador = "+id_inscr_ganador+",id_subasta_ganador = "+ id_subasta_ganador  +" where id_subasta = "+ id_subasta +" and id_historico = "+ id_historico +";")
      const respuesta2 = await pool.query("select c.id_objeto_valor from historicos_duenos c where c.id = "+id_historico+";")
      const respuesta3 = await pool.query("INSERT INTO HISTORICOS_DUENOS (CEDULA_COLECCIONISTA,FECHA_REGISTRO,PRECIO_COMPRA$,SIGNIFICADO,id_objeto_valor) VALUES ("+cedula_coleccionista+",(CURRENT_DATE),"+precio_compra$+",'"+significado+"',"+respuesta2[0]['id_objeto_valor']+");");
      res.json("VENTA DE OBJETO REGISTRADA CON EXITO")
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async primeraSubastaComic(req:Request, res:Response){
    var mensaje = ''
    try {
      const { id_comic } = req.body; 
      const respuesta = await pool.query("select e.id from historicos_duenos e where id_comic = "+id_comic+";")
      if(respuesta['length'] > 1){
        mensaje = "NO"
      }else{
        mensaje = "SI"
      }
      res.json(mensaje)
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async ordenVentaComicSubastado(req:Request, res:Response){
    try {
      const { id_comic , id_subasta,numero_en_subasta,duracion_puja_min } = req.body; 
      const respuesta = await pool.query("select  max(fecha_registro) from historicos_duenos where id_comic = "+id_comic+";")
      var fecha = respuesta[0]['max(fecha_registro)']
      fecha = fecha.toISOString().split('T')[0]
      const respuesta2 = await pool.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_comic = "+id_comic+" and fecha_registro='"+fecha+"';")

      const respuesta3 = await pool.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO,NUMERO_EN_SUBASTA,DURACION_PUJA_MIN) VALUES ("+id_subasta+","+respuesta2[0]['precio_compra$']+","+respuesta2[0]['cedula_coleccionista']+","+respuesta2[0]['id']+",'"+fecha+"',"+numero_en_subasta+","+duracion_puja_min+");")

      res.json("ORDEN VENTA DE COMIC HECHA CON EXITO")
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async ordenVentaComicRegular(req:Request, res:Response){

    try {
      const { id_comic , id_subasta, precio_base$, numero_en_subasta, duracion_puja_min } = req.body; 
      const respuesta = await pool.query("select  max(fecha_registro) from historicos_duenos where id_comic = "+id_comic+";")
      var fecha = respuesta[0]['max(fecha_registro)']
      fecha = fecha.toISOString().split('T')[0]
      const respuesta2 = await pool.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_comic = "+id_comic+" and fecha_registro='"+fecha+"';")

      const respuesta3 = await pool.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO,NUMERO_EN_SUBASTA,DURACION_PUJA_MIN) VALUES ("+id_subasta+","+precio_base$+","+respuesta2[0]['cedula_coleccionista']+","+respuesta2[0]['id']+",'"+fecha+"',"+numero_en_subasta+","+duracion_puja_min+");")
      res.json("ORDEN VENTA DE COMIC HECHA CON EXITO")
      } catch (e) {  
        console.log(e); 
        res.json("SQL ERROR: " + e);            
      }
  }

  public async ordenVentaObjetoSubastado(req:Request, res:Response){
    var mensaje = ''
    try {
      const { id_objeto_valor , id_subasta,numero_en_subasta,duracion_puja_min } = req.body; 
      const respuesta = await pool.query("select  max(fecha_registro) from historicos_duenos where id_objeto_valor = "+id_objeto_valor+";")
      var fecha = respuesta[0]['max(fecha_registro)']
      fecha = fecha.toISOString().split('T')[0]
      const respuesta2 = await pool.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_objeto_valor = "+id_objeto_valor+" and fecha_registro='"+fecha+"';")

      const respuesta3 = await pool.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO,NUMERO_EN_SUBASTA,DURACION_PUJA_MIN) VALUES ("+id_subasta+","+respuesta2[0]['precio_compra$']+","+respuesta2[0]['cedula_coleccionista']+","+respuesta2[0]['id']+",'"+fecha+"',"+numero_en_subasta+","+duracion_puja_min+");")
      // console.log("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO) VALUES ("+id_subasta+","+respuesta2[0]['precio_compra$']+","+respuesta2[0]['cedula_coleccionista']+","+respuesta2[0]['id']+",'"+fecha+"');")

      res.json("ORDEN VENTA DE OBJETO HECHA CON EXITO")
      } catch (e) {  
        console.log(e)
        res.json("SQL ERROR: " + e);            
      }
  }

  public async ordenVentaObjetoRegular(req:Request, res:Response){

    try {
      const { id_objeto_valor , id_subasta, precio_base$, numero_en_subasta, duracion_puja_min } = req.body; 
      const respuesta = await pool.query("select  max(fecha_registro) from historicos_duenos where id_objeto_valor = "+id_objeto_valor+";")
      var fecha = respuesta[0]['max(fecha_registro)']
      fecha = fecha.toISOString().split('T')[0]
      const respuesta2 = await pool.query("select e.id,e.cedula_coleccionista,e.precio_compra$ from historicos_duenos e where id_objeto_valor = "+id_objeto_valor+" and fecha_registro='"+fecha+"';")

      const respuesta3 = await pool.query("INSERT INTO ORDENES_VENTA_SUBASTA (ID_SUBASTA,PRECIO_BASE$,CEDULA_COLECCIONISTA,ID_HISTORICO,FECHA_REGISTRO,NUMERO_EN_SUBASTA,DURACION_PUJA_MIN) VALUES ("+id_subasta+","+precio_base$+","+respuesta2[0]['cedula_coleccionista']+","+respuesta2[0]['id']+",'"+fecha+"',"+numero_en_subasta+","+duracion_puja_min+");")
      res.json("ORDEN VENTA DE OBJETO HECHA CON EXITO")
      } catch (e) {  
        console.log(e); 
        res.json("SQL ERROR: " + e);            
      }
  }

  public async registrarOrganizador(req:Request, res:Response){
    try {
      const { id_subasta, id_club } = req.body; 
      const respuesta = await pool.query("INSERT INTO S_C (ID_SUBASTA,ID_CLUB) VALUES ("+id_subasta+","+id_club+");")
      res.json('ORGANIZADOR REGISTRADO CON EXITO');
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async registrarCaridad(req:Request, res:Response){
    try {
      const { id_organizacion,id_subasta, porcentaje } = req.body; 
      const respuesta = await pool.query("INSERT INTO registros_beneficio (id_organizacion,id_subasta,porcentaje) VALUES ("+id_organizacion+","+id_subasta+","+porcentaje+");")
      res.json('CARIDAD REGISTRADA CON EXITO');
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
      }
  }

  public async registrarInvitacion(req:Request, res:Response){
    try {
      const { id_subasta, club_invitado } = req.body; 
      const respuesta = await pool.query("INSERT INTO S_C (ID_SUBASTA,CLUB_INVITADO) VALUES ("+id_subasta+","+club_invitado+");")
      res.json('INVITACION REGISTRADA CON EXITO');
      } catch (e) {  
        res.json("SQL ERROR: " + e);            
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
  res.json("SQL ERROR: " + e);            
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
      res.json("SQL ERROR: " + e);            
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
      res.json("SQL ERROR: " + e);            
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

        res.json("SQL ERROR: " + e);           
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
      res.json("SQL ERROR: " + e);            
    }
    }

    public async registrarLugar(req:Request, res:Response){
      try {
        const { calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar } = req.body; 
        const registros = await pool.query("INSERT INTO lugares_subasta (calle,avenida,id_ciudad,id_pais,tipo,nombre_lugar) VALUES ('"+calle+"','"+avenida+"',"+id_ciudad+","+id_pais+",'"+tipo+"','"+nombre_lugar +"');")
      res.json("LUGAR REGISTRADO CON EXITO");
    } catch (e) { 
      res.json("SQL ERROR: " + e);            
    }
    }

    public async getDescripcionObjetoSubasta(req: Request, res:Response){
      // yo del futuro, si ves esto, perdoname :(
      try{
        const { id_historico } = req.body
        const respuesta = await pool.query(`select id_comic, id_objeto_valor from historicos_duenos where id=${id_historico}`)
        const { id_comic, id_objeto_valor } = respuesta[0]
        if(id_comic){
            const titulo = await pool.query(`select titulo from comics where id=${id_comic}`);
            const respuesta = {
              tipo:"Comic",
              titulo: titulo[0]?.titulo || "Undefined"
            }
            console.log(respuesta)
            res.json(respuesta)
        }else if (id_objeto_valor){
            const nombre = await pool.query(`select nombre from objetos_de_valor where id =${id_objeto_valor}`)
            const respuesta = {
              tipo:"Objeto",
              titulo: nombre[0]?.nombre || "Undefined"
            }
            console.log(respuesta)
            res.json(respuesta)
        }
      }catch(e){
        res.json("SQL ERROR: "+e);
      }

    }

}

export const registrosController = new RegistrosController();
export default registrosController;