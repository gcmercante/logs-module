import { winston } from '../adapters';

function getSut(verbosity?: string) {
    return new winston(verbosity);
}

describe('-- Winston Adapter --', () => {
    test('Should create a valid instance of the adapter', () => {
        const sut = getSut();

        expect(sut).toBeInstanceOf(winston);
        expect(sut).toBeDefined();
    });

    test('Should be able to call error method', () => {
        const sut = getSut();
        const mockError = jest.spyOn(sut, 'error');

        sut.error('ERROR LOG');

        expect(mockError).toHaveBeenCalledTimes(1);
    });

    test('Should be able to call info method', () => {
        const sut = getSut();
        const mockInfo = jest.spyOn(sut, 'info');

        sut.info('INFO LOG');

        expect(mockInfo).toHaveBeenCalledTimes(1);
    });

    test('Should be able to call debug method', () => {
        const sut = getSut();
        const mockDebug = jest.spyOn(sut, 'debug');

        sut.debug('DEBUG LOG');

        expect(mockDebug).toHaveBeenCalledTimes(1);
    });
});
