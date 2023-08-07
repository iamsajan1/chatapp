import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "./components/CustomListItem";
import { auth, db } from "./firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [chat, setChat] = useState([]);
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChat(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "SajanChat",
      headerStyle: { backgroundColor: "f5abc5" },
      headerTitleStyle: { color: "white", alignSelf: "center" },
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={signOutUser}
          activeOpacity={0.5}
        >
          <Avatar rounded source={require("./assets/avatar.png")} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 20,
            width: 70,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  const enterChat = (id, chatName) => {
    navigation.navigate("chat", {
      id,
      chatName,
    });
  };

  return (
    <View>
      <ScrollView style={styles.Container}>
        {chat.map(({ id, data: { chatName } }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    height: "100%",
  },
});
