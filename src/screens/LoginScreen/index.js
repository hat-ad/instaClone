import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./style";
import insta_splash from "../../../assets/insta_splash.png";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={insta_splash} style={{ width: "30%", height: "30%" }} />
      <View style={styles.heading}>
        <Text style={styles.headingText}>Instagram</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="username" style={styles.inputBox}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="password"
          style={styles.inputBox}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.submitButt}>
        <Text style={styles.submitButtText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassContainer}>
        <Text style={styles.forgotPassText}>Forgot your password ?</Text>
      </TouchableOpacity>
      <View style={styles.separtor}>
        <View style={styles.separtorLine} />
        <Text style={styles.separtorText}>or</Text>
        <View style={styles.separtorLine} />
      </View>
      <TouchableOpacity style={{ marginTop: 5 }}>
        <Text style={styles.link}>Sign Up with email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
