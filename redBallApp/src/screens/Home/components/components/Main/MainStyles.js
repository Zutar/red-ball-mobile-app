import {StyleSheet} from 'react-native';

const faqStyle = StyleSheet.create({
    mainBlock: {
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 5,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    mainHeader: {
        width: '100%',
        paddingBottom: 20
    },
    mainTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    mainLastUpdatedTime: {
        fontSize: 12,
    },
    mainBall: {
        width: '45%',
        alignItems: 'center'
    },
    ball: {
        backgroundColor: '#fafafa',
        width: 125,
        height: 125,
        borderRadius: 125,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 25
    },
    ballText: {
        color: '#484848',
        fontWeight: '500',
        fontSize: 16
    },
    ballSubText: {
        color: '#484848',
        fontWeight: '400',
        fontSize: 14
    },
    mainInfo: {
        width: '55%',
        borderLeftWidth: 1,
        borderLeftColor: '#e1e1e1',
        padding: 10,
        justifyContent: 'center'
    },
    mainInfoTitle: {
        color: '#484848',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 10,
    },
    mainInfoText: {
        color: '#484848',
        fontSize: 16,
        paddingTop: 3,
        paddingBottom: 3
    },
    mainStatsSpeed: {
        marginTop: 12,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 5,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
});

export default faqStyle;
