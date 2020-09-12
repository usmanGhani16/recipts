import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";

// import
import { api } from "../api/api";

const { width } = Dimensions.get("screen");

const Receipt = ({ navigation, route }) => {
  const { itemId } = route.params;
  const iniTailState = {
    data: [],
    lading: true,
  };
  const [state, setState] = useState(iniTailState);

  useEffect(() => {
    setState({
      ...state,
      data: api.filter((el) => el.id === itemId),
      loading: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      {state.loading ? (
        <></>
      ) : (
        <>
          <View style={styles.wrapper}>
            <View style={styles.receipt}>
              <Text style={styles.heading}>Receipts</Text>
              <View>
                <Text style={[styles.dateText, styles.totalText]}>
                  Total:
                  <Text style={{ fontWeight: "700" }}>
                    {state.data[0]?.price}
                  </Text>
                </Text>
                <Text style={styles.dateText}>
                  {state.data[0]?.date}, {state.data[0]?.week},
                  {state.data[0]?.year}
                </Text>
              </View>
            </View>
            <View style={styles.thankYou}>
              <Text style={styles.thankYouHeading}>
                Thank you for Purchasing, Person
              </Text>
              <Text style={styles.smHeading}>
                We`re glad to have you as an our purchaser.
              </Text>
            </View>
          </View>

          <View style={styles.totalBox}>
            <Text style={styles.totalBoxheading}>Total</Text>
            <Text style={styles.totalBoxheading}>{state.data[0]?.price}</Text>
          </View>

          <View style={styles.totalBox2}>
            <View style={styles.list}>
              <Text style={styles.totalBox2heading}>Subtotal</Text>
              <Text style={styles.totalBox2heading}>
                {state.data[0]?.price}
              </Text>
            </View>

            <View style={styles.list}>
              <Text style={styles.item}>Tax</Text>
              <Text style={styles.item}>{state.data[0]?.tax}</Text>
            </View>

            <View style={styles.list}>
              <Text style={styles.item}>Subtotal</Text>
              <Text style={styles.item}>Item (3)</Text>
            </View>

            <View style={styles.list}>
              <Text style={styles.item}>Tramsaction ID</Text>
              <Text style={styles.item}>#ID-1234</Text>
            </View>

            <View style={styles.list}>
              <Text style={styles.item}>Tramsaction Type</Text>
              <Text style={styles.item}>Money Tranfer</Text>
            </View>
          </View>

          <View style={styles.store}>
            <View style={styles.list}>
              <Text style={styles.totalBox2heading}>Store location</Text>
            </View>

            <View style={styles.list}>
              <Text style={styles.item}>Torrence store</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.item}>11503 Nornabue Ave</Text>
            </View>
            <View style={styles.list}>
              <Text style={styles.item}>Torrence, CA 90501</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: "#fcf0d8",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  receipt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  heading: {
    fontSize: 25,
  },
  dateText: {
    textAlign: "right",
  },
  totalText: {
    fontSize: 12,
  },
  thankYou: {
    width: width / 1.2,
  },
  thankYouHeading: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "700",
  },
  smHeading: {
    fontSize: 18,
  },
  totalBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 30,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#61b7c8",
  },
  totalBoxheading: {
    fontSize: 30,
    fontWeight: "700",
  },
  totalBox2: {
    paddingVertical: 20,
    marginHorizontal: 30,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalBox2heading: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 3,
  },
  item: {
    fontSize: 16,
    marginBottom: 3,
  },
  store: {
    paddingVertical: 20,
    marginHorizontal: 30,
    marginBottom: 20,
  },
});

export default Receipt;
