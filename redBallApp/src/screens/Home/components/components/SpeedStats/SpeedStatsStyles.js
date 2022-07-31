import {StyleSheet} from 'react-native';

const faqStyle = StyleSheet.create({
    statsBlock: {
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
    statsHeader: {
        width: '100%',
        paddingBottom: 20
    },
    statsTitle: {
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default faqStyle;
