"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// Rutas
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const posts_router_1 = __importDefault(require("./routes/posts.router"));
const add_router_1 = __importDefault(require("./routes/add.router"));
const users_router_1 = __importDefault(require("./routes/users.router"));
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.router();
        this.public();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    router() {
        this.app.use(index_routes_1.default);
        this.app.use('/uploads', add_router_1.default);
        this.app.use('/posts', posts_router_1.default);
        this.app.use('/users', users_router_1.default);
    }
    public() {
        this.app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
    }
    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}
exports.App = App;
