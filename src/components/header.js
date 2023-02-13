import React from 'react';
import { View, Text } from 'react-native';
import * as Animated from 'react-native-animatable';

import CommonStyles from '../utils/styles';

/**
 * This is header component
 * @param {Object} param0 
 * @returns 
 */
const Header = ({ title, level, points }) => (
    <Animated.View
        animation={'bounceInDown'}
        delay={300}
        style={CommonStyles.headerView}
    >
        <View style={CommonStyles.center}>
            <Text style={[CommonStyles.h6, CommonStyles.sideTitleLabel]}>{'Level'}</Text>
            <Text style={[CommonStyles.h3, CommonStyles.sideValueLabel]}>{level}</Text>
        </View>
        <Text style={CommonStyles.headerText}>{title}</Text>
        <View style={CommonStyles.center}>
            <Text style={[CommonStyles.h6, CommonStyles.sideTitleLabel]}>{'Scores'}</Text>
            <Text style={[CommonStyles.h3, CommonStyles.sideValueLabel]}>{points}</Text>
        </View>
    </Animated.View>
)

export default Header;


