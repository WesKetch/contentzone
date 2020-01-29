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
  ImageBackground,
  Button
} from "react-native";

import Header from "./components/Header";
import ContentCard from "./components/ContentCard";

import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { BottomNavigation, Text as PaperText } from "react-native-paper";

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

const App = props => {
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
        <Text style={styles.text}>Top News Stories</Text>
        {articles.map((article, index) => (
          <ContentCard key={index} article={article} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Sports = () => (
  <View>
    <Text>hi</Text>
  </View>
);

const Home = createMaterialBottomTabNavigator(
  {
    News: App,
    LifeStyle: Sports
  },
  {
    initialRouteName: "News",
    activeColor: "orange",
    inactiveColor: "black",
    barStyle: { backgroundColor: "#F0F0F0" }
  }
);

export default createAppContainer(Home);
