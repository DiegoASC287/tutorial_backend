import express from 'express';

const server = express();
server.get("/", (req, res) => {
    return res.send("Olá devs");
})



export {server}