import { LoggerService } from '../service/LoggerService';

function getSut(verbosity?: string) {
    return new LoggerService(verbosity);
}

describe('-- Logger Service --', () => {
    test('Should create a valid instance of logger service', () => {
        const sut = getSut();

        expect(sut).toBeInstanceOf(LoggerService);
        expect(sut).toBeDefined();
    });

    test('Should be possible to call error method', () => {
        const sut = getSut('error');
        const mockErrorLog = jest.spyOn(sut, 'error');

        sut.error('ERROR LOG');

        expect(mockErrorLog).toHaveBeenCalledTimes(1);
    });

    test('Should be possible to call info method', () => {
        const sut = getSut('info');
        const mockInfoLog = jest.spyOn(sut, 'info');

        sut.info('INFO LOG');

        expect(mockInfoLog).toHaveBeenCalledTimes(1);
    });

    test('Should be possible to call debug method', () => {
        const sut = getSut('debug');
        const mockDebugLog = jest.spyOn(sut, 'debug');

        sut.debug('DEBUG LOG');

        expect(mockDebugLog).toHaveBeenCalledTimes(1);
    });

    test('Should create a valid instance of logger service without log level and use default level as error', () => {
        const sut = getSut();
        const mockErrorLog = jest.spyOn(sut, 'error');

        sut.error('ERROR LOG');

        expect(sut).toBeInstanceOf(LoggerService);
        expect(sut).toBeDefined();
        expect(mockErrorLog).toHaveBeenCalledTimes(1);
    });

    test('Should create a valid instance of logger service adding log level and validate', () => {
        const sut = getSut('info');
        const mockLog = jest.spyOn(sut, 'info');

        sut.info('INFO LOG');

        expect(sut).toBeInstanceOf(LoggerService);
        expect(sut).toBeDefined();
        expect(mockLog).toHaveBeenCalledTimes(1);
    });
});
