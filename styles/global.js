import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'ghostwhite'
    // },
    // title: {
    //     fontFamily: 'nunito-bold',
    //     fontSize: 18,
    //     color: '#333'
    // },
    // content: {
    //     marginVertical: 8,
    //     lineHeight: 20
    // },
    // body: {

    // }
    container: {
      flex: 1,
      backgroundColor: 'grey'
    },
    content: {
      padding: 40,
      flex: 1
    },
    list: {
      marginTop: 0,
      flex: 1
    },
    item: {
        backgroundColor: 'grey',
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'ghostwhite',
        borderStyle: 'dashed',
        borderRadius: 5,
        flexDirection: 'column',
        padding: 10
    },
    title: {
        color: "pink",
        fontSize: 16
    },
    body: {
        color: 'ghostwhite',
        fontSize: 14
    },
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'pink'
    },
    titleText: {
        fontSize: 18,
        color: 'ghostwhite',
        marginTop: 20,
        color: 'pink'
    },
    bodyText: {
      fontSize: 14,
      color: 'ghostwhite',
      marginTop: 16
    },
    detailContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 30
    }
})