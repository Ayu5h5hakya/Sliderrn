# ReactNative Image Slider

A bare bones image slider for react native.

## Installation 

```bash
npm install react-slider-native --save
```

## Props
|Propery | Type |
| -- | -- |
| dataArray | list |
| placeholder | image-url|
| autoCycle | bool |
| onSliderClick | function |

## Usage

```javascript
import Slider from 'react-slider-native'

\\...
render() {
    return (
      <Slider
        dataArray={[
          image1,
          image2,
          image3
        ]}
        placeholder={placeholderimage}
        autoCycle={true}
        onSliderClick={this.onSliderClickHandler}
      />
    );
  }
```

## Planned features 

* Async loading
* Simple Image component incase of single element dataArray
