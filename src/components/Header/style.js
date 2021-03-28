import React from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderBottomColor: "#555",
    borderBottomWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "visible",
  },
  headingText: {
    fontFamily: "regular",
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 10,
    width: "100%",
    marginLeft: 15,
  },
  mssg: { marginRight: 10 },
});
export default Styles;
