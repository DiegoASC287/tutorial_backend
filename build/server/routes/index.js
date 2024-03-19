"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.send('olá dev');
});
router.post('/teste', (req, res) => {
    console.log(req.query.teste);
    return res.status(201).json(req.body);
});
