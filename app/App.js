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
  StatusBar,TouchableOpacity
} from "react-native";

import Personsvg from "../assets/icon-person.png";

import Dollar from "../assets/icon-dollar.png";
import "../global.css";
import { useRef, useState } from "react";
import Welcome from "./Welcome";
export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState("");
  const [selected, setSelected] = useState(0);
  const [isStarted,setIsStarted] = useState(false)
  let tpp = "";
  let totalpp = "";

  if (Number(bill) > 0 && Number(tip) > 0 && Number(people) > 0) {
    tpp = ((Number(tip) / 100) * Number(bill) )/ Number(people);
    totalpp = bill / people + tpp;
  }
  function handleReset() {
    setBill("");
    setTip("");
    setPeople("");
    setSelected(0);
  }
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar  backgroundColor={`${isStarted? "#c5e4e7":"#FFFFFF"}`} barStyle={"light-content"} />
     <Welcome isStarted={isStarted} setIsStarted={setIsStarted} />
      <ScrollView className={` ${isStarted ? "" :"hidden"}`}>
        <SafeAreaView className="flex-1 bg-light_grayish_cyan ">
          <View className="  bg-light_grayish_cyan  items-center w-full    mt-10 mb-10">
            <Text className="text-very_dark_cyan text-lg tracking-[2px] font-bold text-center">
              SPLITTER
            </Text>
           
          </View>

          <View className="flex-1   bg-white rounded-t-3xl px-12 py-10 gap-y-5 mt-2">
            <BillInput setBill={setBill} bill={bill} />
            <TipEntry setTip={setTip} setSelected={setSelected} selected={selected}/>
            <NumberofPeople  setPeople={setPeople} people={people}/>
            <BillDisplay reset={handleReset} tip={tpp} total={totalpp}/>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

function BillInput({setBill,bill}) {
  
  return (
    <View className="gap-y-2 ">
      <Text className="text-grayish_cyan text-lg font-semibold tracking-[-1px]">
        Bill
      </Text>
      <View className="flex-row  w-full h-[50px] bg-very_light_grayish_cyan items-center px-5  rounded-2xl ">
        <Image source={Dollar} alt="" cclassName="w-4 h-6 pl-5" />
        <TextInput 

        onChangeText={newText => {setBill(newText)
        }
        }
          value={bill.toString()}
          keyboardType="numeric"
          className=" h-full bg-very_light_grayish_cyan pl-40  font-bold text-2xl text-very_dark_cyan   tracking-[-1px]"
        ></TextInput>
      </View>
    </View>
  );
}

function TipEntry({setTip,selected,setSelected}) {
  
  return (
    <View className="gap-y-4 w-[311px] " >
      <Text className="text-grayish_cyan text-lg font-semibold tracking-[-1px]">
        Select Tip %
      </Text>
      <View className="flex-2 flex-row flex-wrap gap-5 bg-white items-center    rounded-2xl  ">
        <TipButton tip={5} setTip={setTip} setSelected={setSelected} selected={selected} />
        <TipButton tip={10}  setTip={setTip} setSelected={setSelected} selected={selected}/>
        <TipButton tip={15}  setTip={setTip}  setSelected={setSelected} selected={selected}/>
        <TipButton tip={25}   setTip={setTip} setSelected={setSelected} selected={selected}/>
        <TipButton tip={50}   setTip={setTip} setSelected={setSelected} selected={selected}/>
        <TextInput
          type="text"
          className=" w-[135px] h-12 px-10 bg-light_grayish_cyan text-grayish_cyan font-medium text-md  py-2 rounded-lg  tracking-[-1px]"
          placeholder="Custom%"
          keyboardType="numeric"
          onChangeText={newText => {setTip(newText)
            setSelected(0)
          }}
        />
      </View>
    </View>
  );
}

function TipButton({ tip,setTip,setSelected ,selected}) {
   let isselected = selected === tip ? "bg-strong_cyan": "bg-very_dark_cyan"
   function handleSelection(){
    if(tip !== selected){
       setSelected(tip)
    }else{
      setSelected(0)
      setTip(0)
    }
   }
  return (
    <Pressable onPress={()=> {setTip(tip)
      handleSelection()
    }} className={`w-[135.63px] h-[50px]  ${selected === tip ? "bg-strong_cyan": "bg-very_dark_cyan"} font-bold text-2xl rounded-lg py-3`}>
      <Text className={`${selected === tip ? "text-black" :"text-white"} text-lg font-bold text-center  tracking-[-1px]`}>{tip}%</Text>
    </Pressable>
  );
}

function NumberofPeople({setPeople,people}) {
  return (
    <View className="gap-y-2 ">
      <Text className="text-grayish_cyan text-lg font-semibold tracking-[-1px] ">
        Number of People
      </Text>
      <View className="flex-row  w-full h-[50px] bg-very_light_grayish_cyan items-center px-5  rounded-2xl ">
        <Image source={Personsvg} />
        <TextInput
          value={people.toString()}
          keyboardType="numeric"
          onChangeText={newText => setPeople(newText)}
          className=" w-full bg-very_light_grayish_cyan pl-40  font-bold text-lg text-very_dark_cyan "
        ></TextInput>
      </View>
    </View>
  );
}

function TotalDisplay2({total}) {
  return (
    <View className="flex flex-row justify-between items-center mt-8 px-4">
    {/* Label Section */}
    <View className="flex-row items-center space-x-2">
      <Text className="text-white font-medium text-base sm:text-lg  tracking-[-1px]">Total</Text>
      <Text className="text-grayish_cyan text-sm sm:text-base">/ person</Text>
    </View>
  
    {/* Value Section */}
    <View className="flex-row items-center space-x-1">
      <Text className="text-strong_cyan text-lg sm:text-xl font-semibold">$</Text>
      <Text
        id="totalperperson"
        className="text-2xl sm:text-3xl font-bold text-strong_cyan"
      >
        {total}
      </Text>
    </View>
  </View>
  );
}

function TotalDisplay({tip}) {
  return (
    <View className="flex flex-row justify-between items-center mt-8 px-4">

  <View className="flex-row items-center space-x-2">
    <Text className="text-white font-semibold text-base sm:text-lg  tracking-[-1px]">Tip</Text>
    <Text className="text-grayish_cyan text-sm sm:text-base">/ person</Text>
  </View>

  <View className="flex-row items-center space-x-1">
    <Text className="text-strong_cyan text-lg sm:text-xl font-semibold">$</Text>
    <Text
      id="totalperperson"
      className="text-2xl sm:text-3xl font-bold text-strong_cyan  "
    >
      {tip}
    </Text>
  </View>
</View>
  );
}

function BillDisplay({reset,tip,total}) {
  return (
    <View className="  w-full mx-auto flex  justify-between flex-col bg-very_dark_cyan p-10  rounded-xl  mb-4">
      <View>
        <TotalDisplay tip={tip}>
          <Text>Tip amount</Text>
        </TotalDisplay >
        <TotalDisplay2 total={total}>
          <Text>Total</Text>
        </TotalDisplay2>
      </View>
      <View className="mt-5 flex items-center w-full">
        <Reset  reset={reset}/>
      </View>
    </View>
  );
}

function Reset({reset}) {
  return (
    <Pressable
    type="button"
    className=" md:px-4 px-20 py-3 bg-strong_cyan 
               text-very_dark_cyan font-bold text-lg 
               rounded-lg  mt-8"
               
    onPress={reset}
    
  >
    <Text className="text-center text-very_dark_cyan  font-semibold text-xl  tracking-[-1px]">
      Reset
    </Text>
  </Pressable>
  
  );
}
