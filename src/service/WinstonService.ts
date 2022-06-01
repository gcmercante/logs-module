import { Format } from 'logform';
import winston, { Logger, LoggerOptions } from 'winston';

export class WinstonService {
    public createLogger(options?: LoggerOptions): Logger {
        return winston.createLogger(options);
    }

    public getFormat(): Format {
        return winston.format.combine(
            winston.format.timestamp(),
            winston.format.printf(({ level, timestamp, message, ...rest }) =>
                JSON.stringify({ timestamp, level, message, ...rest })
            ),
            winston.format.colorize({ all: true, colors: { info: 'white' } })
        );
    }

    public getOptions(format: Format): LoggerOptions {
        return {
            exitOnError: false,
            format,
            transports: [new winston.transports.Console()],
            levels: {
                error: 0,
                info: 1,
                debug: 2,
            },
        };
    }
}
