import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as Animated from 'react-native-animatable';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import { Colors } from '../utils/constants';
import CommonStyles from '../utils/styles';
import { playSound } from '../utils/utils';
import { CategorySound } from '../assets'

/**
 * This is category component which renders the category name 
 * game level and the points scored in this category
 * @param {Object} param0 
 * @returns 
 */
const Category = ({ onPress, categoryName, isSelectedCategory, level, rounds, points }) => {

    const onClick = () => {
        playSound(CategorySound);
        onPress();
    }

    return (
        <TouchableOpacity onPress={onClick}>
            <Animated.View
                animation={'bounceInDown'}
                delay={300}
                style={[CommonStyles.rectBox, styles.categoryView, { backgroundColor: isSelectedCategory ? Colors.status : Colors.transparentWhite }]}
            >
                <View style={[CommonStyles.center, { marginHorizontal: responsiveWidth(1) }]}>
                    <Text style={CommonStyles.h7}>{'Level'}</Text>
                    <Text style={[CommonStyles.h6, { fontWeight: 'bold' }]}>{`${level}/${rounds}`}</Text>
                </View>
                <Text style={CommonStyles.h4}>{categoryName}</Text>
                <View style={[CommonStyles.center, { marginHorizontal: responsiveWidth(1) }]}>
                    <Text style={CommonStyles.h7}>{'Score'}</Text>
                    <Text style={[CommonStyles.h6, { fontWeight: 'bold' }]}>{points}</Text>
                </View>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    categoryView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: responsiveWidth(3),
        padding: responsiveWidth(1),
    },
});

export default Category;


