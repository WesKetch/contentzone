import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import TopNews from "./screens/TopNews";
import Lifestyle from "./screens/Lifestyle";
import Sports from "./screens/Sports";
import Fun from "./screens/Fun";

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "topNews", title: "Top News", icon: "newspaper" },
      { key: "lifestyle", title: "Lifestyle", icon: "help" },
      { key: "sports", title: "Sports", icon: "basketball" },
      { key: "fun", title: "Fun", icon: "puzzle-outline" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    topNews: TopNews,
    lifestyle: Lifestyle,
    sports: Sports,
    fun: Fun
  });

  render() {
    return (
      <BottomNavigation
        barStyle={{ backgroundColor: "#282c34" }}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
