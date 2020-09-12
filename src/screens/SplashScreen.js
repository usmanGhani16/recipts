import React from "react";
import { StyleSheet, Image, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../assets/logo-inapp.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 130,
    height: 130,
  },
  img: {
    height: "100%",
    width: "100%",
  },
});

export default SplashScreen;
