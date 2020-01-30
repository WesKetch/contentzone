import React, { useState, useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import TopNews from "./screens/TopNews";
import Lifestyle from "./screens/Lifestyle";
import Sports from "./screens/Sports";
import Fun from "./screens/Fun";

const Navigation = () => {
  const renderScene = BottomNavigation.SceneMap({
    topNews: TopNews,
    lifestyle: Lifestyle,
    sports: Sports,
    fun: Fun
  });

  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    { key: "topNews", title: "Top News", icon: "newspaper" },
    { key: "lifestyle", title: "Lifestyle", icon: "help" },
    { key: "sports", title: "Sports", icon: "basketball" },
    { key: "fun", title: "Fun", icon: "puzzle-outline" }
  ]);

  const handleIndexChange = index => setIndex(index);

  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#282c34" }}
      navigationState={{ routes, index }}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
    />
  );
};

export default Navigation;
