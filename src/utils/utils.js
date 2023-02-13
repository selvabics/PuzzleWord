import Sound from 'react-native-sound';

/**
 * This method is used to shuffle the word
 * @param {String} word 
 * @returns {String} shuffledWord
 */
export const shuffle = (word) => {
    const shuffledWord = word.split("");
    const n = shuffledWord.length;
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = shuffledWord[i];
        shuffledWord[i] = shuffledWord[j];
        shuffledWord[j] = tmp;
    }
    return shuffledWord.join("");
}

/**
 * This method is used to convert word in to array of obj 
 * Which contains char and index
 * @param {String} word 
 * @returns {Array} shuffledLetterList
 */
export const getShuffledLetterList = (word = '') => {
    return shuffle(word).split('').map((letter, index) => ({ letter, index }));
}

/**
 * This method is used to get a array of empty objects 
 * Which length is equal to word length
 * @param {String} word 
 * @returns {Array} letterArr
 */
export const getAnswerLetterList = (word = '') => {
    return word.split('').map(() => ({}));
}

/**
 * This method is used to convert array of letter obj into a word
 * @param {Array} letterArr 
 * @returns {String} word
 */
export const getWord = (letterArr) => {
    let word = '';
    const n = letterArr.length;
    for (let i = 0; i < n; i++) {
        const item = letterArr[i];
        const letter = item?.letter ? item.letter : '';
        word = word + letter;
    }
    return word;
}

/**
 * This method is used to play sound file
 * @param {Media} soundFile 
 */
export const playSound = (soundFile) => {
    const sound = new Sound(soundFile, (error, _sound) => {
        if (error) {
            alert('error' + error.message);
            return;
        }
        sound.play(() => {
            sound.release();
        });
    });
}