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

import Header from "./components/Header";
import ContentCard from "./components/ContentCard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
});

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
      <Header />
      <ScrollView>
        {articles.map((article, index) => (
          <ContentCard key={index} article={article} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
