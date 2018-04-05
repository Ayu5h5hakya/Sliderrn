import React from 'react'
import {
    ScrollView,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'
import styles from './styles'

export default class Slider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentSlide: 0
        }
    }

    componentDidMount() {
        if (this.props.autoCycle) {
            setInterval(() => {
                this.gotoSlide(this.state.currentSlide + 1)
            }, 2000)
        }
    }

    gotoSlide(nextSlide) {
        nextSlide = nextSlide % this.props.dataArray.length
        this.setState({ currentSlide: nextSlide })
        this._ref.scrollTo({ animated: true, y: 0, x: nextSlide * Dimensions.get('window').width })
    }

    onReference(ref) {
        this._ref = ref
    }

    render() {
        return (
            <View>
                <ScrollView
                    ref={ref => this.onReference(ref)}
                    style={styles.slider}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}>

                    {this.props.dataArray.map((image, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => this.props.onSliderClick(index)}
                            >
                                <Image
                                    resizeMode='cover'
                                    style={styles.slide}
                                    source={image ? image : this.props.placeholder}
                                />
                            </TouchableWithoutFeedback>
                        )
                    })}
                </ScrollView>
                <View style={styles.slideIndicatorlayout}>
                    {this.props.dataArray.map((image, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.slideIndicator,
                                    setIndicatorSize(this.props.indicatorSize)
                                ]}>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }

}

Slider.defaultProps = {
    height: 200,
    indicatorSize: 7,
    indicatorColor: '#cccccc',
    indicatorSelectedColor: 'white',
    autoCycle: false,
    arrowSize: 16
}

const setIndicatorSize = (size) => {
    return {
        width: size,
        height: size,
        borderRadius: size / 2
    }
}
