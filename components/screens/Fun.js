// TODO dry up these components, use a factory pattern or similar
// method
import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

import Header from "..//Header";
import ContentCard from "../ContentCard";
import fetchNews from "../../lib/api";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 16
  }
});

export default () => {
  const [articles, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchNews("quiz");
      setState(data.articles);
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.text}>Games</Text>
        {articles.map((article, index) => (
          <ContentCard key={index} article={article} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
