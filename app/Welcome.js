import { Image, ImageBackground, Text, View,Pressable } from "react-native"
import * as Animatable from "react-native-animatable";

const logo = require("../assets/split.png")

function Welcome({isStarted ,setIsStarted}) {
    return (
        <ImageBackground
        source={logo}
        className={`w-full h-full flex-1  bg-white justify-center items-center pt-72 ${isStarted ? "hidden" : ""}`}
        resizeMode="contain"
       
      >
        <Pressable
          type="button"
          onPress={() => setIsStarted(true)}
          className="md:px-6 px-12 py-4 font-bold text-lg border-2 border-gray-300 rounded-full bg-gradient-to-r from-white to-gray-100 shadow-lg shadow-gray-300"
          style={{
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            shadowColor: '#000',
          }}
        >
          <Animatable.View animation="pulse" iterationCount="infinite" direction="alternate">
            <Text className="text-center text-teal-700 text-2xl font-medium tracking-widest shadow-sm shadow-gray-700">
              START
            </Text>
          </Animatable.View>
        </Pressable>
      </ImageBackground>
      
    )
}

export default Welcome
