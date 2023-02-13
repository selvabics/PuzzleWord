import React from 'react';
import { StyleSheet } from 'react-native';
import * as Animated from 'react-native-animatable';

import CommonStyles from '../utils/styles';
import { Colors } from '../utils/constants';

/**
 * This components renders a succes message 
 * @param {Object} param0 
 * @returns 
 */
const Success = ({ points }) => (
    <Animated.Text animation={'bounceIn'} style={styles.successText}>
        Correct!
        {'\n'}
        Congratulations
        {'\n'}
        You earn {points}
        {'\n'}
        points
    </Animated.Text>
)

const styles = StyleSheet.create({
    successText: {
        ...CommonStyles.h1,
        textAlign: 'center',
        color: Colors.status,
        margin: 20,
    },
});

export default Success;


