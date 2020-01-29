import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground
} from "react-native";

async function getContent() {
  try {
    let response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a09472f675ee4a8d95143320ac7645dc"
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

const Card = ({ article }) => (
  <View style={styles.card}>
    <Image
      style={{
        width: 358,
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
      }}
      source={{ uri: article.urlToImage }}
    />
    <Text style={{ margin: 10 }}>{article.title}</Text>
  </View>
);

export default function App() {
  const [articles, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getContent();
      setState(data.articles);
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {articles.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  card: {
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#d6d7da",
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
