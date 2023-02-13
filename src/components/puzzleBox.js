import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Animated from 'react-native-animatable';

import CommonStyles from '../utils/styles';
import { playSound } from '../utils/utils';
import { SwapSound } from '../assets';

/**
 * This is puzzle box component which renders the puzzle letter
 * @param {Object} param0 
 * @returns 
 */
const PuzzleBox = ({ item, onPress }) => {

    const onClick = () => {
        playSound(SwapSound);
        onPress();
    }
    return (
        <TouchableOpacity disabled={!onPress} onPress={onClick}>
            <Animated.View
                animation={onPress ? 'bounceInUp' : 'bounceInDown'}
                delay={300}
                style={[CommonStyles.squareBox]}
            >
                <Text style={styles.puzzleLabel}>{item?.letter}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    puzzleLabel: {
        ...CommonStyles.h4,
        ...CommonStyles.sideValueLabel,
        color: 'black',
    },
});

export default PuzzleBox;


