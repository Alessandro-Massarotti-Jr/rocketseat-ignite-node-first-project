import "reflect-metadata";
import "../typeorm";
import "../../container";
import express, { NextFunction, Request, Response, response } from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";
import { AppError } from "../../errors/AppError";
import { router } from "@shared/infra/http/routes";



const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

app.listen(3333, () => {
    console.log("server is running in http://localhost:3333")
})