import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Animated from 'react-native-animatable';

import { Colors } from '../utils/constants';
import CommonStyles from '../utils/styles';
import { playSound } from '../utils/utils';
import { ButtonSound } from '../assets'

/**
 * This is Action button component
 * @param {Object} param0
 * @returns 
 */
const ActionButton = ({ onPress, style, title }) => {

    const onClick = () => {
        playSound(ButtonSound);
        onPress();
    }

    return (
        <TouchableOpacity onPress={onClick}>
            <Animated.View
                animation={'bounceIn'}
                delay={500}
                style={[styles.containerView, CommonStyles.rectBox, style]}
            >
                <Text style={styles.textLabel}>{title}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: Colors.highlight,
        margin: 20,
    },
    textLabel: {
        ...CommonStyles.h5,
        fontWeight: 'bold',
    }
});

export default ActionButton;


