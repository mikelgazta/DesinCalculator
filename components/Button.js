import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ({ onPress, text }) => {
  const textStyles = [styles.text];

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

// set dimmenstion
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 36,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#4B5EFC",
  },
});