const personaModels = require ('../models/personaModels')

exports.getAll = (cb) => personaModels.getAll(cb);
exports.getById = (id,cb) => personaModels.getById(id,cb);
exports.create = (persona,cb) => personaModels.create(persona,cb);
exports.update = (id,persona,cb) => personaModels.update(id,persona,cb);
exports.delete = (id,cb) => personaModels.delete(id,cb);
