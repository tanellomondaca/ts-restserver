"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
class Server {
    constructor() {
        this.apiPath = {
            usuarios: '/api/usuarios',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8081';
        // Definir mis rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPath.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
// Exportar por defecto
exports.default = Server;
//# sourceMappingURL=server.js.map