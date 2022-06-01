import { ILogger } from '../interfaces/ILogger';
import { WinstonService } from '../service/WinstonService';
import { CustomLogger, Metadata, Verbosity } from '../types/LoggingServiceTypes';

export class WinstonAdapter implements ILogger {
    private logger: CustomLogger;
    private verbosity?: Verbosity = 'error';
    private readonly winstonService = new WinstonService();

    constructor(verbosity?: Verbosity) {
        if (verbosity) {
            this.verbosity = verbosity;
        }

        const options = this.winstonService.getOptions(this.winstonService.getFormat());
        options.level = this.verbosity;

        this.logger = this.winstonService.createLogger(options);
    }

    public error(message: string): void {
        this.logger.error(message);
    }

    public debug(message: string, metadata?: Metadata): void {
        this.logger.debug(message, metadata);
    }

    public info(message: string, metadata?: Metadata): void {
        this.logger.info(message, metadata);
    }
}
