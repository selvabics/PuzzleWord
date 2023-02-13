import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Background } from '../assets';

/**
 * This is Background image component
 * @param {Object} param0
 * @returns 
 */
const BackgroundWallper = ({ children, style }) => (
    <ImageBackground
        source={Background}
        style={[styles.containerView, { ...style }]}
    >
        {children}
    </ImageBackground>
);

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 20,
    },
});

export default BackgroundWallper;
