"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});
server.listen(3001, () => {
    console.log('SERVER IS RUNNING');
});
// import express from 'express';
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
