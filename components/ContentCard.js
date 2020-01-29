import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from "react-native";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#d6d7da",
    marginVertical: 8,
    marginHorizontal: 16
  },
  text: {
    margin: 10
  },
  image: {
    width: 358,
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  }
});

export default ({ article }) => (
  <TouchableNativeFeedback
    onPress={async () => {
      await WebBrowser.openBrowserAsync(article.url, {
        toolbarColor: "#282c34"
      });
    }}
  >
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: article.urlToImage }} />
      <Text style={styles.text}>{article.title}</Text>
    </View>
  </TouchableNativeFeedback>
);
