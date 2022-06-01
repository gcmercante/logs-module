import { Logger, LoggerOptions } from 'winston';
import { WinstonAdapter } from '../adapters/WinstonAdapter';

export type Metadata = Record<any, any>;
export type Verbosity = string | undefined;
export type CustomLogger = Logger;
export type Adapters = WinstonAdapter;
export type CustomOptions = LoggerOptions;
