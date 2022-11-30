import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: 'center',
        borderWidth: 0.5,
        borderTopLeftRadius: 70,
        borderBottomLeftRadius: 70,
        backgroundColor: "white",
        borderColor: "transparent",
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        

    },
    text: {
        marginLeft: 10,
        fontSize: 24,
    }
});