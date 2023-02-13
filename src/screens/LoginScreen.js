/**
 * This is Login screen
 * If user will be register for the first time
 * From next time user will be logged in 
 * And they can play the game where the left
 */
import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Alert, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useDispatch } from 'react-redux';
import * as Animated from 'react-native-animatable';

import { navigate } from '../router/navigation';
import { Colors } from '../utils/constants';
import CommonStyles from '../utils/styles';
import { loginUserAction } from '../redux/action/loginActions'
import BackgroundWallper from '../components/backgroundWallpaper';
import ActionButton from '../components/actionButton';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(''); // User email id

    /**
     * This method is called when user click on sign in button 
     */
    const signInButtonClick = useCallback(async () => {
        // If user email id is not valid then show alert message
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Info', 'Please enter a valid email adderss');
            return;
        }
        // Call actions to login the user into the app
        await dispatch(loginUserAction(email));
        navigate('homeScreen');
    }, [email])

    return (
        <BackgroundWallper>
            <Animated.View animation={'bounceIn'}
                delay={300}
                style={[CommonStyles.flex, CommonStyles.center]}
            >
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.containerView}>
                    <Text style={styles.headerText}>Puzzle Word</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        autoCapitalize={'none'}
                        placeholder="Email Address"
                        keyboardType="email-address"
                        onChangeText={email => setEmail(email)}
                        value={email}
                    />
                    <ActionButton
                        title={'SIGN IN'}
                        onPress={signInButtonClick}
                    />
                </KeyboardAvoidingView>
            </Animated.View>
        </BackgroundWallper>
    );
};

const styles = StyleSheet.create({
    containerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        ...CommonStyles.h1,
        margin: responsiveWidth(3),
        color: 'white',
    },
    textInputStyle: {
        ...CommonStyles.h5,
        marginTop: responsiveHeight(3),
        height: responsiveHeight(6),
        width: responsiveWidth(70),
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        textAlign: 'center',
        backgroundColor: Colors.transparentWhite,
    },
    buttonStyle: {
        ...CommonStyles.center,
        height: responsiveHeight(6),
        width: responsiveWidth(70),
        marginTop: responsiveHeight(3),
        padding: responsiveWidth(1),
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Colors.primary
    }
});

export default LoginScreen;
