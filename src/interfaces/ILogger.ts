import { Metadata } from '../types/LoggingServiceTypes';

export interface ILogger {
    error(message: string): void;
    debug(message: string, metadata?: Metadata): void;
    info(message: string, metadata?: Metadata): void;
}
