import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    marginBottom: 30,
  },
  headingText: {
    fontSize: 50,
    fontFamily: "regular",
  },
  inputContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  inputBox: {
    width: 250,
    padding: 8,
    fontSize: 16,
  },
  submitButt: {
    width: "70%",
    backgroundColor: "#1a73e8",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
  },
  submitButtText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  forgotPassContainer: {
    marginTop: 5,
    width: "70%",
  },
  forgotPassText: {
    color: "#666",
    textAlign: "left",
  },
  separtor: {
    width: "70%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  separtorLine: {
    borderBottomColor: "#666",
    width: "45%",
    borderBottomWidth: 0.2,
  },
  separtorText: {
    textAlign: "center",
    color: "#666",
    paddingHorizontal: 10,
  },
  link: {
    color: "#1a73e8",
    fontWeight: "bold",
  },
});
