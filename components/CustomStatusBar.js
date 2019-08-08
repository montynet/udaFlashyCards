import {StatusBar, View} from "react-native";
import Constants from "expo-constants";
import React from "react";

const CustomStatusBar = ({backgroundColor, ...props}) => {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default CustomStatusBar
