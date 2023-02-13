import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Colors } from './constants';

export default StyleSheet.create({
    // Different text sizes
    h1: {
        fontSize: responsiveFontSize(4),
    },
    h2: {
        fontSize: responsiveFontSize(3.5),
    },
    h3: {
        fontSize: responsiveFontSize(3),
    },
    h4: {
        fontSize: responsiveFontSize(2.5),
    },
    h5: {
        fontSize: responsiveFontSize(2),
    },
    h6: {
        fontSize: responsiveFontSize(1.5),
    },
    h7: {
        fontSize: responsiveFontSize(1),
    },
    h8: {
        fontSize: responsiveFontSize(0.5),
    },
    // Common styles
    flex: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
        color: 'white',
        margin: responsiveWidth(2),
    },
    rectBox: {
        width: responsiveWidth(70),
        height: responsiveHeight(6),
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: responsiveWidth(1),
    },
    squareBox: {
        width: responsiveWidth(12),
        height: responsiveWidth(12),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 5,
        margin: 10,
        padding: 5,
        backgroundColor: Colors.transparentWhite,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    sideTitleLabel: {
        color: 'white',
        textAlign: 'center',
    },
    sideValueLabel: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});