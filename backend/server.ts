import express from "express"
import type { Request, Response, NextFunction } from "express";
import cors from "cors";
import logger from "./config/logger";
import dataRoutes from "./routes"

const app = express();
// const HOST = "0.0.0.0";
const HOST = '172.20.10.7';
const PORT = Number(process.env.PORT) || 3001;


app.use(express.json());
// app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})
app.use(express.urlencoded({ extended: true }));


app.use('/api',dataRoutes)
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: "Not Found", message: "The requested resource was not found." });
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    res.status(500).json({ error: "Internal Server Error", message: err.message });
});
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
}).on("error",(err) => {
    logger.error("[start server error]:");
    logger.error(JSON.stringify(err));
});
  