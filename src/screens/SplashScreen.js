/**
 * This is Splash screen
 * Here we can implement any loading tasks such as calling API, set us user account etc
 */
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import BackgroundWallper from '../components/backgroundWallpaper';
import { replace } from '../router/navigation';
import CommonStyles from '../utils/styles';

const SplashScreen = () => {

    useEffect(() => {
        // We can do any loading tasks here before we go into the app
        setTimeout(() => {
            replace('loginScreen');
        }, 500);
    }, []);

    return (
        <BackgroundWallper>
            <View style={[CommonStyles.flex, CommonStyles.center]}>
                <ActivityIndicator
                    style={styles.logo}
                    animating={true}
                    size={'small'}
                    color={'white'}
                />
            </View>
        </BackgroundWallper>
    );
};

const styles = StyleSheet.create({
});

export default SplashScreen;
