import { FontAwesome } from "@expo/vector-icons";
import React, { FC, useRef } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

export default function SearchBar() {
  const searchInput = useRef<TextInput>(null);

  return (
    <View style={styles.searchBarWrapper}>
      <TouchableOpacity onPress={() => searchInput.current.focus()}>
        <FontAwesome style={styles.searchIcon} name="search" />
      </TouchableOpacity>
      <TextInput
        ref={searchInput}
        style={styles.textInput}
        placeholder="Search"
      />
      <TouchableOpacity onPress={() => {}}>
        <FontAwesome style={styles.mic} name="microphone" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarWrapper: {
    borderWidth: 2,
    borderStyle: "solid",
    height: 30,
    flex: 1,
    minWidth: "70%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.light.midGray,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    margin: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 9,
    elevation: 3,
    backgroundColor: "white",
  },
  textInput: {
    flex: 1,
  },
  searchIcon: {
    fontSize: 18,
    color: Colors.light.midGray,
    paddingRight: 10,
  },
  mic: {
    fontSize: 18,
    color: Colors.light.midGray,
    paddingLeft: 10,
  },
});
