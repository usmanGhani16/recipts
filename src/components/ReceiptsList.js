import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// imports
import { useNavigation } from "@react-navigation/native";

const ReceiptsList = ({ id, name, date, year, week }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <Text style={styles.cardHeader}>{name}</Text>
        <View style={styles.dats}>
          <Text style={styles.dataText}>{date}</Text>
          <Text style={styles.dataText}>{year}</Text>
          <Text style={styles.dataText}>{week}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.receiptBtn}
        onPress={() => navigation.navigate("Receipt", { itemId: id })}
      >
        <Text style={styles.btnText}>View Receipt</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 8,
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardBody: {},
  cardHeader: {
    fontSize: 18,
    marginBottom: 10,
  },
  dats: {
    flexDirection: "row",
  },
  dataText: {
    fontSize: 12,
    marginRight: 5,
  },
  receiptBtn: {
    backgroundColor: "#ffffff",
    marginTop: 4,
  },
  btnText: {
    fontSize: 13,
    color: "#5798e2",
  },
});

export default ReceiptsList;
