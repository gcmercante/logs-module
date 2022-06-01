import { ILogger } from '../interfaces/ILogger';
import { winston as adapter } from '../adapters';
import { Metadata } from '../types/LoggingServiceTypes';

export class LoggerService {
    protected logger: ILogger;

    constructor(verbosity?: string) {
        this.logger = new adapter(verbosity);
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
