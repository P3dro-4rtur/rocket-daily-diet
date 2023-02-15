import { Dimensions, PixelRatio } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function widthInPixelToDP(widthInPixel: number) {
  const widthPercent = (widthInPixel * 100) / screenWidth;
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
}

function heightInPixelToDP(heightInPixel: number) {
  const heightPercent = (heightInPixel * 100) / screenHeight;
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
}

function fontInPixelToDP(fontInPixel: number) {
  return RFValue(fontInPixel);
}

export const Responsive = {
  screenWidth,
  screenHeight,
  widthInPixelToDP,
  heightInPixelToDP,
  fontInPixelToDP,
};
