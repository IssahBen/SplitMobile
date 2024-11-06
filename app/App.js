import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

import Personsvg from "../assets/icon-person.png";

import Dollar from "../assets/icon-dollar.png";
import "../global.css";
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle={"light-content"} />
      <ScrollView>
        <SafeAreaView className="flex-1 bg-light_grayish_cyan ">
          <View className="  bg-light_grayish_cyan  items-center w-full    mt-10 mb-10">
            <Text className="text-very_dark_cyan text-4xl tracking-[8px] font-bold">
              SPLI
            </Text>
            <Text className="text-very_dark_cyan text-4xl tracking-[8px] font-bold ">
              TTER<Text className="">🇨🇦</Text>
            </Text>
          </View>

          <View className="flex-1   bg-white rounded-t-3xl px-12 py-10 gap-y-10 mt-5">
            <BillInput />
            <TipEntry />
            <NumberofPeople />
            <BillDisplay />
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

function BillInput() {
  return (
    <View className="gap-y-2 ">
      <Text className="text-grayish_cyan text-2xl font-semibold font-mono">
        Bill
      </Text>
      <View className="flex-row  w-full h-[50px] bg-very_light_grayish_cyan items-center px-5  rounded-2xl ">
        <Image source={Dollar} alt="" cclassName="w-4 h-6 pl-5" />
        <TextInput
          keyboardType="numeric"
          className=" h-full bg-very_light_grayish_cyan pl-60  font-bold text-2xl text-very_dark_cyan "
        ></TextInput>
      </View>
    </View>
  );
}

function TipEntry() {
  return (
    <View className="gap-y-4">
      <Text className="text-grayish_cyan text-2xl font-semibold font-mono">
        Select Tip %
      </Text>
      <View className="flex-2 flex-row flex-wrap gap-5 bg-white items-center    rounded-2xl ">
        <TipButton tip={5} />
        <TipButton tip={10} />
        <TipButton tip={15} />
        <TipButton tip={25} />
        <TipButton tip={50} />
        <TextInput
          type="text"
          className=" pl-1 bg-light_grayish_cyan text-grayish_cyan font-semibold text-3xl px-8 py-2 rounded-lg"
          placeholder="Custom%"
        />
      </View>
    </View>
  );
}

function TipButton({ tip }) {
  return (
    <Pressable className="w-[146.63px] h-[50px]  bg-very_dark_cyan text-white font-bold text-2xl rounded-lg py-3">
      <Text className="text-white text-3xl font-bold text-center">{tip}%</Text>
    </Pressable>
  );
}

function NumberofPeople() {
  return (
    <View className="gap-y-2 ">
      <Text className="text-grayish_cyan text-2xl font-semibold font-mono">
        Number of People
      </Text>
      <View className="flex-row  w-full h-[50px] bg-very_light_grayish_cyan items-center px-5  rounded-2xl ">
        <Image source={Personsvg} />
        <TextInput
          keyboardType="numeric"
          className=" w-full bg-very_light_grayish_cyan pl-60  font-bold text-2xl text-very_dark_cyan "
        ></TextInput>
      </View>
    </View>
  );
}

function TotalDisplay2() {
  return (
    <View className="flex flex-row justify-between items-center mt-8">
      <View className="">
        <Text className="text-white font-bold text-2xl font-mono">Total</Text>
        <Text className="text-grayish_cyan">/ person</Text>
      </View>
      <View className="flex flex-row items-center gap-x-1">
        <Text className="text-strong_cyan text-3xl font-bold">$</Text>
        <Text className="  font-mon font-bold text-4xl text-strong_cyan">
          3434
        </Text>
      </View>
    </View>
  );
}

function TotalDisplay() {
  return (
    <View className="flex  flex-row  justify-between  items-center mt-8">
      <View className="">
        <Text className="text-white font-bold text-2xl font-mono">Tip</Text>
        <Text className="text-grayish_cyan">/ person</Text>
      </View>
      <View className="flex flex-row items-center gap-x-1">
        <Text className="text-strong_cyan text-3xl font-bold">$</Text>
        <Text
          id="totalperperson"
          className="  font-mon font-bold text-4xl text-strong_cyan"
        >
          345
        </Text>
      </View>
    </View>
  );
}

function BillDisplay() {
  return (
    <View className="  w-full mx-auto flex  justify-between flex-col bg-very_dark_cyan p-10  rounded-xl  mb-4">
      <View>
        <TotalDisplay>
          <Text>Tip amount</Text>
        </TotalDisplay>
        <TotalDisplay2>
          <Text>Total</Text>
        </TotalDisplay2>
      </View>
      <View className="mt-5 flex justify-center w-full">
        <Reset />
      </View>
    </View>
  );
}

function Reset() {
  return (
    <Pressable
      type="button"
      className="w-2/3md:px-0 px-16 py-2 bg-strong_cyan
      text-very_dark_cyan font-bold text-2xl rounded-lg"
    >
      <Text className="text-center  text-very_dark_cyan font-bold text-2xl ">
        Reset
      </Text>
    </Pressable>
  );
}
