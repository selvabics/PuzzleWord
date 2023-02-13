/**
 * This is puzzle game screen
 * Question will be load based on the level
 * Points will be provided based on the level
 * User needs to form the answer by selecting the given shuffled letters
 * User can see the points and level for the category they choose to play
 * User will be notified if the answere is wrong
 * If answer is right,they can share their points to their friends in social media
 * And they can move to next round if they wish to play next round
 */
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animated from 'react-native-animatable';

import CommonStyles from '../utils/styles';
import { Colors } from '../utils/constants';
import { pop } from '../router/navigation';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { getWord, getShuffledLetterList, getAnswerLetterList, playSound } from '../utils/utils';
import { getCurrentUserSelector } from '../redux/slice/loginSlice';
import { updateGameLevelAction } from '../redux/action/loginActions';
import { shareInSocialMediaAction } from '../redux/action/puzzleActions';
import BackgroundWallper from '../components/backgroundWallpaper';
import Header from '../components/header';
import ActionButton from '../components/actionButton';
import PuzzleBox from '../components/puzzleBox';
import Success from '../components/success';
import { SwapSound, WinSound, ErrorSound } from '../assets';

const PuzzleScreen = ({ route }) => {
    const dispatch = useDispatch();
    const { category } = route.params; // Selected category obj
    const puzzles = category.puzzles; // List of puzzle questions
    const currentUser = useSelector(getCurrentUserSelector); // Current logged in user data obj
    const [level, setLevel] = useState(currentUser.level[category.categoryId] || 0); // Game level of the selected category
    const [points, setPoints] = useState(currentUser.points[category.categoryId] || 0); // Scored points of the selected category
    const [question, setQuestion] = useState({}); // Store current question
    const [letters, setLetters] = useState([]); // Puzzle letters for reset purpose
    const [puzzleLetters, setPuzzleLetters] = useState([]); // Puzzle letters
    const [answerLetters, setAnswerLetters] = useState([]); // Answer letters
    const [error, setError] = useState(false); // Incorrect answer flag
    const [success, setSuccess] = useState(false); // Game level complete flag
    const puzzleColumn = Math.round(puzzles[level] ? puzzles[level]?.answer.length / 2 : 0);
    const [noOfColumn, setNoOfColumn] = useState(puzzleColumn > 5 ? 5 : puzzleColumn); // No of column the puzzle list should have 

    useEffect(() => {
        // Load puzzle questions
        loadQuestion();
    }, [level]);

    /**
     * This method is used to load question based on the level
     */
    const loadQuestion = () => {
        const question = puzzles[level];
        setQuestion(question);
        const shuffedLetters = getShuffledLetterList(question?.answer);
        setLetters(shuffedLetters);
        setPuzzleLetters(shuffedLetters);
        setAnswerLetters(getAnswerLetterList(question?.answer));
        const puzzleColumn = Math.round(question ? question?.answer?.length / 2 : 0);
        setNoOfColumn(puzzleColumn > 5 ? 5 : puzzleColumn);
    }

    /**
     * Navigate to previous screen
     */
    const goToHomeScreen = () => {
        pop();
    };

    /**
     * This method is used to go to next level of the game
     */
    const goToNextLevel = useCallback(() => {
        // If all the puzzles are solved in the category
        // Then show a success alert
        if (puzzles.length === level + 1) {
            Alert.alert('Success', 'You have completed all the levels in this category');
            return;
        }
        // Else move to next level
        setLevel(level + 1);
        setSuccess(false);
        loadQuestion();
    }, [level])

    /**
     * This method is called when user click on share button
     */
    const shareButtonClick = () => {
        // Share the points that you have scored to your friends in social media network
        const message = `I have scored ${question.points} in level ${level + 1} of ${category.categoryName}`;
        dispatch(shareInSocialMediaAction(message));
    }

    /**
     * This method is used to reset the letters to continue again
     */
    const resetLetters = () => {
        setPuzzleLetters([...letters]);
        setAnswerLetters(getAnswerLetterList(question?.answer));
    }

    /**
     * This method is used check whether the formed answer word is correct or not
     * If answer is correct then show success message on the screen
     * Else show error message
     * @param {String} answerWord 
     */
    const checkAnswerStatus = (answerWord) => {
        if (answerWord === question.answer) {
            setSuccess(true);
            playSound(WinSound);
            const payload = {
                categoryId: category.categoryId,
                level: level + 1,
                points: points + question.points,
            };
            dispatch(updateGameLevelAction(payload));
            setPoints(points + question.points);
        } else {
            setError(true);
            playSound(ErrorSound);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }

    /**
     * This method is used to move the selected letter to answer array
     * @param {Object} puzzleItem 
     * @param {Number} index 
     * @returns
     */
    const popLetterToAnswerList = (puzzleItem, index) => {
        // If no letter then do nothing
        if (!puzzleItem.letter) {
            return;
        }
        // Remove the selected letter from puzzle array
        const newPuzzleArr = [...puzzleLetters];
        newPuzzleArr[index] = {};
        setPuzzleLetters(newPuzzleArr);

        // Append the selected letter to answer array
        const newAnswerArr = [...answerLetters];
        const length = newAnswerArr.length;
        for (let i = 0; i < length; i++) {
            let item = newAnswerArr[i];
            if (!item?.letter) {
                newAnswerArr[i] = puzzleItem;
                setAnswerLetters(newAnswerArr);
                // Answer is formed in from user perspective
                // Need to check the answer word
                if (i === length - 1) {
                    // Get the answer word as string from array of letters
                    const answerWord = getWord(newAnswerArr);
                    checkAnswerStatus(answerWord);
                }
                break;
            }
        }
    };

    /**
     * This method is used to move back the or pop the last letter to answer array
     */
    const popLetterToPuzzleList = () => {
        playSound(SwapSound);
        let puzzleItem = {};
        const length = answerLetters.length;
        // Remove the letter from answer array and store it in a variable
        for (let i = length - 1; i >= 0; i--) {
            puzzleItem = answerLetters[i];
            if (puzzleItem?.letter) {
                const newAnswerArr = [...answerLetters];
                newAnswerArr[i] = {};
                setAnswerLetters(newAnswerArr);
                break;
            }
        }
        // Add the poped letter back to puzzle array
        if (puzzleItem) {
            const newPuzzleArr = [...puzzleLetters];
            newPuzzleArr[puzzleItem.index] = puzzleItem;
            setPuzzleLetters(newPuzzleArr);
        }
    };

    /**
     * This method renders success message with a button to share on social media
     * @returns 
     */
    const renderSuccess = () => {
        return (
            <View style={[CommonStyles.flex, CommonStyles.center]}>
                <Success points={question.points} />
                <ActionButton
                    style={styles.actionButton}
                    title={'SHARE'}
                    onPress={shareButtonClick}
                />
            </View>
        )
    }

    /**
     * This method renders the actual puzzle view with question and shuffled letters
     * @returns 
     */
    const renderPuzzle = () => {
        return (
            <View style={[CommonStyles.flex, CommonStyles.center]}>
                <TouchableOpacity onPress={popLetterToPuzzleList}>
                    <FlatList
                        key={`${noOfColumn}`}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                        style={{ flexGrow: 0, flexWrap: 'wrap' }}
                        numColumns={noOfColumn}
                        data={answerLetters}
                        renderItem={({ item, index }) => (
                            <PuzzleBox item={item} />
                        )}
                    />
                </TouchableOpacity>
                <Animated.View animation={'bounceIn'}>
                    <TouchableOpacity style={{ margin: 30 }}>
                        <Text style={styles.questionText}>{question?.question}</Text>
                    </TouchableOpacity>
                </Animated.View>
                <FlatList
                    key={`${noOfColumn}`}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    style={{ flexGrow: 0, flexWrap: 'wrap' }}
                    numColumns={noOfColumn}
                    data={puzzleLetters}
                    renderItem={({ item, index }) => (
                        <PuzzleBox
                            item={item}
                            onPress={() => popLetterToAnswerList(item, index)}
                        />
                    )}
                />
            </View>
        );
    }

    return (
        <BackgroundWallper>
            <View style={CommonStyles.flex}>
                <Header
                    title={category.categoryName}
                    level={level + 1}
                    points={points}
                />
                <Text style={styles.errorText}>{error ? 'Incorrect Answer' : '.'}</Text>
                {success ? renderSuccess() : renderPuzzle()}
                <View style={CommonStyles.headerView}>
                    <ActionButton
                        style={styles.actionButton}
                        title={'BACK'}
                        onPress={goToHomeScreen}
                    />
                    {success ? (
                        <ActionButton
                            style={styles.actionButton}
                            title={'NEXT'}
                            onPress={goToNextLevel}
                        />) : (
                        <ActionButton
                            style={[styles.actionButton, { alignSelf: 'center' }]}
                            title={'RESET'}
                            onPress={resetLetters}
                        />
                    )}
                </View>
            </View>
        </BackgroundWallper>
    );
};

const styles = StyleSheet.create({
    errorText: {
        ...CommonStyles.h4,
        margin: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.status,
    },
    questionText: {
        ...CommonStyles.h4,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    actionButton: {
        ...CommonStyles.rectBox,
        width: responsiveWidth(30),
    },
});

export default PuzzleScreen;
