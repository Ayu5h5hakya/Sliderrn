import {StyleSheet, Dimensions} from 'react-native'
export default styles = StyleSheet.create({
    slider : {
        width : Dimensions.get('window').width,
        height : 200,
    },
    slide : {
        width : Dimensions.get('window').width,
        height : 200
    },
    slideIndicatorlayout : {
        height : 15,
        position : 'absolute',
        bottom : 5,
        left : 0,
        right : 0,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
        backgroundColor : 'transparent'
    },
    slideIndicator : {
        margin : 3,
        opacity : 0.8,
        backgroundColor : 'white'
    },
    activeSlideIndicator : {
        opacity : 1
    }
})