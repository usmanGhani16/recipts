import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  FlatList,
  Dimensions,
  Text,
} from "react-native";

// imports
import { Picker } from "@react-native-community/picker";
import { api } from "../api/api";
import ReceiptsList from "../components/ReceiptsList";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const ReceiptsScreen = ({ navigation }) => {
  const initialState = {
    year: "",
    month: "",
    date: "",
  };

  const [state, setState] = useState(initialState);

  let filterd = [...api];

  if (state.year) {
    filterd = filterd.filter((el) => state.year === el.year);
  }

  if (state.month) {
    filterd = filterd.filter((el) => state.month === el.date);
  }

  if (state.date) {
    filterd = filterd.filter((el) => state.date === el.week);
  }

  const onClearfilter = () => {
    setState(initialState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.clear}>
        <TouchableOpacity style={styles.btnClear} onPress={onClearfilter}>
          <Text style={{ color: "red" }}>Clear filters</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBox}>
        <View style={styles.year}>
          <Picker
            selectedValue={state.year}
            style={{ height: 50, width: width / 3.3 }}
            onValueChange={(itemValue, itemIndex) =>
              setState({ ...state, year: itemValue })
            }
          >
            <Picker.Item label="Year" value="" />
            <Picker.Item label="2020" value="2020" />
            <Picker.Item label="2019" value="2019" />
            <Picker.Item label="2018" value="2018" />
            <Picker.Item label="2017" value="2017" />
            <Picker.Item label="2016" value="2016" />
            <Picker.Item label="2015" value="2015" />
            <Picker.Item label="2014" value="2014" />
            <Picker.Item label="2013" value="2013" />
            <Picker.Item label="2012" value="2012" />
            <Picker.Item label="2011" value="2011" />
            <Picker.Item label="2010" value="2010" />
          </Picker>
        </View>
        <View style={styles.month}>
          <Picker
            selectedValue={state.month}
            style={{ height: 50, width: width / 3.3 }}
            onValueChange={(itemValue, itemIndex) =>
              setState({ ...state, month: itemValue })
            }
          >
            <Picker.Item label="Month" value="" />
            <Picker.Item label="Jan" value="Jan" />
            <Picker.Item label="Feb" value="Feb" />
            <Picker.Item label="Mar" value="Mar" />
            <Picker.Item label="Apr" value="Apr" />
            <Picker.Item label="May" value="May" />
            <Picker.Item label="Jun" value="Jun" />
            <Picker.Item label="Jul" value="Jul" />
            <Picker.Item label="Aug" value="Aug" />
            <Picker.Item label="Sep" value="Sep" />
            <Picker.Item label="Oct" value="Oct" />
            <Picker.Item label="Nov" value="Nov" />
            <Picker.Item label="Dec" value="Dec" />
          </Picker>
        </View>
        <View style={styles.date}>
          <Picker
            selectedValue={state.date}
            style={{ height: 50, width: width / 3.3 }}
            onValueChange={(itemValue, itemIndex) =>
              setState({ ...state, date: itemValue })
            }
          >
            <Picker.Item label="Day" value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
          </Picker>
        </View>
      </View>

      <FlatList
        keyExtractor={(data) => data.id}
        data={filterd}
        renderItem={({ item }) => {
          return <ReceiptsList {...item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  filterBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: "#e9e9e9",
    borderWidth: 1,
  },
  clear: {
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "flex-end",
  },
  btnClear: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
});

export default ReceiptsScreen;
