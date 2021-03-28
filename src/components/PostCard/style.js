import React from "react";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#fff",
    borderColor: "#000",
    // borderWidth: 1,
    width: "100%",
    // height: "70%",
    maxHeight: 580,
    // minHeight: "70%",
    padding: 0,
    // marginBottom: 10,
  },
  postHeader: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  postHeaderText: {
    fontSize: 16,
    fontWeight: "700",
  },
  postFooterSocial: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  commentContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: 9,
  },
});
export default Styles;
