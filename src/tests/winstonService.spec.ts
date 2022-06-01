import { WinstonService } from '../service/WinstonService';

function getSut() {
    return new WinstonService();
}

describe('-- Winston Service --', () => {
    test('Should be possible to call createLogger method from service', () => {
        const sut = getSut();
        const mockFn = jest.spyOn(sut, 'createLogger');

        sut.createLogger();

        expect(sut).toBeInstanceOf(WinstonService);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('Should be possible to call format method from service', () => {
        const sut = getSut();
        const mockFn = jest.spyOn(sut, 'getFormat');

        sut.getFormat();

        expect(sut).toBeInstanceOf(WinstonService);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('Should be possible to call getOptions method from service', () => {
        const sut = getSut();
        const mockFn = jest.spyOn(sut, 'getOptions');

        sut.getOptions(sut.getFormat());

        expect(sut).toBeInstanceOf(WinstonService);
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
