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
            res.json({message:'pais insertado'});
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }

    public async registrarRepresentante (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO representantes set ? ", [req.body]);
            res.json({message:'representante insertado'});
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }


    public async registrarColeccionista (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO coleccionistas set ? ", [req.body]);
            res.json({message:'coleccionista insertado'});
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
            res.json({message:'ciudad insertada'});
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }

    public async registrarClub (req:Request, res:Response){
        try {
            const respuesta = await pool.query("INSERT INTO clubes set ? ", [req.body]);
            res.json({message:'club insertado'});
          } catch (e) {  
            res.json("SQL ERROR: " + e.sqlMessage);            
          }
    }

    public async registrarMembresia (req:Request, res:Response){
      try {
          const respuesta = await pool.query("INSERT INTO membresias set ? ", [req.body]);
          res.json({message:'membresia insertado'});
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


public async cerrarMembresia (req:Request, res:Response){
  try {
  const { fecha,cedula,id_club } = req.body; 
  const registros = await pool.query('UPDATE MEMBRESIAS SET FECHA_FIN=(CURRENT_DATE) WHERE FECHA_INICIO="'+fecha+'" AND CEDULA_COLECCIONISTA='+cedula+' AND ID_CLUB='+ id_club+';');

  res.json("cerrando membresia de " +fecha+' '+ cedula+' '+id_club);
} catch (e) { 
  res.json("SQL ERROR: " + e.sqlMessage);            
}


}


}

export const registrosController = new RegistrosController();
export default registrosController;