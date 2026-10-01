const db = require('../config/db');

exports.getAll = (callback) =>{
    db.query('SELECT * FROM personas', callback);
};

exports.getById = (id,callback) => {
    db.query('SELECT * FROM personas WHERE id =?',[id],callback)
};

exports.create = (persona,callback) => {
    db.query('INSERT INTO personas (TipoDocumento, Documento, Nombre, Apellido, Direccion, Ciudad, FechaN, Correo, Edad) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [persona.TipoDocumento, persona.Documento, persona.Nombre, persona.Apellido, persona.Direccion, persona.Ciudad, persona.FechaN, persona.Correo, persona.Edad],
    callback
    );
};

exports.update = (id,persona,callback) => {
    db.query ('UPDATE personas SET TipoDocumento=?, Documento=?, Nombre=?, Apellido=?, Direccion=?, Ciudad=?, FechaN=?, Correo=?, Edad=? WHERE id=? ',
 [persona.TipoDocumento, persona.Documento, persona.Nombre, persona.Apellido, persona.Direccion, persona.Ciudad, persona.FechaN, persona.Correo, persona.Edad,id],
    callback
    );
};

exports.delete = (id,callback) => {
    db.query('DELETE FROM personas WHERE id=?', [id], callback);
};