import * as winston from "winston";
import fs from "fs"
import path from "path"

const env = process.env.NODE_ENV || "development";
const logDir = "logs";

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const filename = path.join(logDir, "process.log");

const logger = winston.createLogger({
    level: env === "production" ? "info" : "debug",
    format: winston.format.combine(
        // format.label({ label: path.basename(process.mainModule.filename) }),
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" })
    ),
    transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(
              (info) =>
                `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
            )
          ),
        }),
        new winston.transports.File({
          filename,
          maxsize: 5242880,
          maxFiles: 5,
          format: winston.format.combine(
            winston.format.printf(
              (info) =>
                `${info.timestamp} [${info.label}] ${info.level}: ${JSON.stringify(
                  info.message
                )}`
            )
          ),
        }),
      ],
});

export default logger