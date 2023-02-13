/**
 * This is Leader board screen
 * This screen shows list user who played this game and their scores 
 * Try logging in with multiple mail id and play the game
 * So that you can see how the leader board displays the data
 */
import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import CommonStyles from '../utils/styles';
import { Colors } from '../utils/constants';
import { getUserListSelector } from '../redux/slice/loginSlice';
import { pop } from '../router/navigation';
import ActionButton from '../components/actionButton';
import BackgroundWallpaper from '../components/backgroundWallpaper';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { Profile } from '../assets';

const LeaderBoardScreen = () => {
    // List of users who logged in to the app
    const userList = [...useSelector(getUserListSelector)].sort((a, b) => (b.totalPoints - a.totalPoints));

    /**
     * Navigate to previous screen
     */
    const goToHomeScreen = () => {
        pop();
    }

    return (
        <BackgroundWallpaper>
            <View style={CommonStyles.flex}>
                <View style={[CommonStyles.center, { margin: 20 }]}>
                    <Text style={CommonStyles.headerText}>Leader Board</Text>
                </View>
                <FlatList
                    contentContainerStyle={CommonStyles.flex}
                    data={userList}
                    renderItem={({ item, index }) => (
                        <View style={styles.rowContainerView}>
                            <View style={[CommonStyles.center, { flexDirection: 'row' }]}>
                                <Image
                                    style={{ width: responsiveWidth(12), height: responsiveWidth(12), borderRadius: responsiveWidth(2) }}
                                    source={Profile}
                                />
                                <View style={{ paddingHorizontal: responsiveWidth(3) }}>
                                    <Text style={CommonStyles.h4}>
                                        {item.email.split('@')[0]}
                                    </Text>
                                    <Text style={CommonStyles.h6}>
                                        {item.email}
                                    </Text>
                                </View>
                            </View>
                            <View style={CommonStyles.center}>
                                <Text style={CommonStyles.h6}>{'Points'}</Text>
                                <Text style={CommonStyles.h3}>{item.totalPoints}</Text>
                            </View>
                        </View>
                    )}
                />
                <View style={styles.footerView}>
                    <ActionButton
                        title={'BACK'}
                        onPress={goToHomeScreen}
                    />
                </View>
            </View>
        </BackgroundWallpaper>
    );
};

const styles = StyleSheet.create({
    rowContainerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: responsiveWidth(3),
        marginTop: 0,
        padding: responsiveWidth(2.5),
        backgroundColor: Colors.transparentWhite,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.secondary,
    },
    footerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
});

export default LeaderBoardScreen;
