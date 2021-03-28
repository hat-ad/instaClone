import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import Styles from "./style";
import { PostCard, Header } from "../../components/index";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const obj = [
    { id: 1, name: "Ashis" },
    { id: 2, name: "Ashis" },
    { id: 3, name: "Ashis" },
    { id: 4, name: "Ashis" },
  ];
  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <ScrollView>
        <FlatList
          data={obj}
          renderItem={(item) => <PostCard key={item.id} />}
        />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
