/**
 * This is Home screen
 * User can view their overall score
 * User can logout
 * List of category of puzzle will be shown
 * Progress of each category is displayed
 * User can select any category and start a new game
 * They have a option to see Leader board too
 */
import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { responsiveWidth } from 'react-native-responsive-dimensions';

import Puzzles from '../utils/puzzles';
import CommonStyles from '../utils/styles';
import { navigate, popToTop } from '../router/navigation';
import { getCurrentUserSelector } from '../redux/slice/loginSlice';
import BackgroundWallper from '../components/backgroundWallpaper';
import ActionButton from '../components/actionButton';
import Category from '../components/category';
import { Logout, Gold } from '../assets';

const HomeScreen = () => {
    const [category, setCategory] = useState(undefined);
    const currentUser = useSelector(getCurrentUserSelector);

    const logout = () => {
        popToTop('loginScreen');
    };

    const goToLeaderBoardScreen = () => {
        navigate('leaderBoardScreen');
    }

    const goToPuzzleScreen = useCallback(() => {
        if (!category) {
            Alert.alert('Info', 'Please select category');
            return;
        }
        const level = currentUser.level[category.categoryId] || 0;
        if (level >= category.puzzles.length) {
            Alert.alert('Info', 'You have completed this category');
            return;
        }
        navigate('puzzleScreen', { category });
    }, [category])

    const selectCategory = (puzzle) => {
        setCategory(puzzle);
    };

    const renderCategory = (puzzle) => {
        const isSelectedCategory = puzzle.categoryId === category?.categoryId;
        const level = currentUser.level[puzzle.categoryId] || 0;
        const points = currentUser.points[puzzle.categoryId] || 0;
        return (
            <Category
                key={`${puzzle.categoryId}`}
                onPress={() => selectCategory(puzzle)}
                categoryName={puzzle.categoryName}
                isSelectedCategory={isSelectedCategory}
                level={level}
                rounds={puzzle.puzzles.length}
                points={points}
            />
        )
    }

    return (
        <BackgroundWallper>
            <View style={CommonStyles.containerView}>
                <View style={CommonStyles.headerView}>
                    <TouchableOpacity onPress={logout}>
                        <Image
                            style={styles.logoutIcon}
                            source={Logout}
                        />
                    </TouchableOpacity>
                    <Text style={CommonStyles.headerText}>Word Puzzle</Text>
                    <View style={styles.iconView}>
                        <Image
                            style={styles.goldIcon}
                            source={Gold}
                        />
                        <Text style={[CommonStyles.h4, { color: 'white' }]}>{currentUser.totalPoints}</Text>
                    </View>
                </View>
                <View style={styles.categoryContainer}>
                    {Puzzles.map(puzzle => (renderCategory(puzzle)))}
                    <ActionButton
                        title={'START'}
                        onPress={goToPuzzleScreen}
                    />
                </View>
                <View>
                    <ActionButton
                        title={'LEADER BOARD'}
                        onPress={goToLeaderBoardScreen}
                    />
                </View>
            </View>
        </BackgroundWallper>
    );
};

const styles = StyleSheet.create({

    categoryContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoutIcon: {
        width: responsiveWidth(8),
        height: responsiveWidth(8),
    },
    goldIcon: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        margin: 5,
    },
});

export default HomeScreen;
