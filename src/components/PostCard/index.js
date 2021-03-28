import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Styles from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PostCard = ({ name, likes, comments, time, desc, img }) => {
  return (
    <View style={Styles.postContainer}>
      <View style={Styles.postHeader}>
        <MaterialCommunityIcons name="account-circle" size={45} color="#999" />
        {/* <Image
          style={{ width: 50, height: 50 }}
          source={require("../../../assets/insta_splash.png")}
        /> */}
        <Text style={Styles.postHeaderText}>ashis642</Text>
      </View>
      <Image
        style={{ width: "100%", maxHeight: 400 }}
        source={require("../../../assets/posts/1.jpg")}
      />
      <View style={Styles.postFooterSocial}>
        <TouchableOpacity onPress={() => console.log("x")}>
          <MaterialCommunityIcons
            name="heart-outline"
            size={30}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("y")}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={30}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("z")}>
          <MaterialCommunityIcons
            name="telegram"
            size={30}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
      </View>

      <Text style={{ marginLeft: 12 }}>246 likes</Text>
      <TouchableOpacity
        onPress={() => console.log("comment")}
        style={{ marginLeft: 12 }}
      >
        <View style={{ marginBottom: 1 }}>
          <Text>
            <Text style={{ fontWeight: "700", marginRight: 10 }}>
              ashis642{"  "}
            </Text>
            lorem ipsum dolor sit amet...
          </Text>
        </View>
        <Text style={{ color: "#aaa" }}>View all 5 comments</Text>
      </TouchableOpacity>
      {/* add comment section */}
      {/* <View style={Styles.commentContainer}>
          <MaterialCommunityIcons name="account-circle" size={24} />
          <Text style={{ marginLeft: 8, color: "#aaa" }}>Add a comment...</Text>
        </View> */}
      <Text style={{ marginLeft: 12, color: "#aaa" }}>3 minutes ago</Text>
    </View>
  );
};

export default PostCard;
