"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
exports.sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    serve: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutsMillis: 3000
    },
    options: {
        encrypt: false,
        trustSeviceCertificate: true
    }
};
