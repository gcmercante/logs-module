# Log Module

Criei esse módulo como forma de estudo de criação de módulo e também como forma de teste do adapter pattern.

Para utilização do módulo, basta rodar o comando

    npm install @gmercante/logs-module

## Requisitos
- Node versão 16 ou superior

## Começando
Segue abaixo um exemplo de como você pode utilizar o módulo em sua aplicação.

    // usando import
    import { Logger } from 'gmercante-logs';

    const log = new Logger('debug');

    log.debug('Hello World!');

    // usando commonJS
    const { Logger } = require('gmercante-logs');
    const log = new Logger('debug');
    
    log.debug('Hello World!');

    // ou

    const log = new (require('gmercante-logs')).Logger('debug');

    log.debug('Hello World!');
