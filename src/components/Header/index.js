import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Styles from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Header = () => {
  return (
    <View style={Styles.headerContainer}>
      <Text style={Styles.headingText}>Instagram</Text>
      <TouchableOpacity onPress={() => console.log("z")} style={Styles.messg}>
        <MaterialCommunityIcons
          name="telegram"
          size={30}
          style={{ padding: 8, marginRight: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
