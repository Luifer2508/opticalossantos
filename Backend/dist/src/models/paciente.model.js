"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const mongoose_1 = require("mongoose");
const pacienteSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true
    },
    run: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    diagnostico: {
        type: String
    },
    receta: {
        type: String
    },
    fechaCita: {
        type: Date
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.Paciente = (0, mongoose_1.model)('Paciente', pacienteSchema);
//# sourceMappingURL=paciente.model.js.map