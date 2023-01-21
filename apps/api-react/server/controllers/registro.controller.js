import {pool} from "../db.js"

//obtener usuarios
export const getRegistro = async(req,res)=> {
    try {
        
        const [rows] = await pool.query("SELECT * FROM registro")
        res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: "Ocurre un Error"
        })

    }
    
}

//obtener un usuario
export const getRegistro_Un = async(req,res)=> {
    try {
        const [rows] = await pool.query("SELECT * FROM registro where id_usuario = ?",[req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: "Usuario no encontrado"
        })
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Ocurre un Error"
        })
        
    }

}

//crear
export const postRegistro = async(req,res)=>{
    const {nombre, apellido, edad,correo,clave} = req.body
    try {
  
        const [rows] = await pool.query("INSERT INTO registro (nombre, apellido, edad,correo,clave) VALUES (?,?,?,?,?)",
        [nombre,apellido, edad,correo,clave])
        
        res.send({
            id: rows.insertId,
            nombre,
            apellido,
            edad,
            correo,
            clave
        })
    } catch (error) {
        return res.status(500).json({
            message: "Ocurre un Error"
        })
        
    }

}




//actualizar
export const putRegistro = async (req,res)=> {
    const {id} = req.params
    const {nombre, apellido, edad,correo,clave} = req.body
    try {

        const [result] = await pool.query("UPDATE registro SET nombre = IFNULL(?,nombre),apellido= IFNULL(?,apellido), edad = IFNULL(?,edad), correo = IFNULL(?,correo), clave = IFNULL(?,clave) WHERE id_usuario = ?",[nombre, apellido, edad,correo,clave, id])
    
        
        if(result.affectedRows === 0) return res.status(404).json({
            message: "Usuario no encontrado"
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Ocurre un Error"
        })
    }

}







//eliminar
export const delRegistro = async (req,res)=>{
    try {
        const [result] = await pool.query("DELETE FROM registro where id_usuario = ?",[req.params.id])
    
        if(result.length <= 0) return res.status(404).json({
            message: "Usuario no encontrado"
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Ocurre un Error"
        })
        
    }

}