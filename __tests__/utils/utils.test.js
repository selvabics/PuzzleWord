import { shuffle, getShuffledLetterList, getAnswerLetterList, getWord } from '../../src/utils/utils';

jest.mock('react-native-sound', () => {
    class SoundMocked {
        static setCategory = jest.fn();
    }
    return SoundMocked;
});

describe('Testing all the util functions', () => {
    test('It shuffles letters', () => {
        expect(typeof shuffle('word')).toBe('string');
    });
    test('It convert word into array of object', () => {
        const outputArr = [{"index": 0, "letter": "w"}];
        expect(typeof getShuffledLetterList('w')).toBe('object');
        expect(getShuffledLetterList('w')).toStrictEqual(outputArr);
    });
    test('It convert word into empty array of object', () => {
        const outputArr = [{}];
        expect(typeof getAnswerLetterList('w')).toBe('object');
        expect(getAnswerLetterList('w')).toStrictEqual(outputArr);
    });
    test('It convert array into word', () => {
        const inputArr = [{index: 0, letter: 'f'},{index: 1, letter: 'i'},{index: 2, letter: 's'},{index: 3, letter: 'h'}];
        expect(typeof getWord(inputArr)).toBe('string');
        expect(getWord(inputArr)).toStrictEqual('fish');
    });
});
