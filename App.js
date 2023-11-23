import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";
import calculator, { initialState } from "./util/calculator";

export default class App extends Component {
  state = initialState;

  Pulsador = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };
  
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button text="C"  onPress={() => this.Pulsador("clear")}/>
            <Button text="="  onPress={() => this.Pulsador("equal", "=")}/>
          </Row>
          <Row>
            <Button text="7" onPress={() => this.Pulsador("number", 7)} />
            <Button text="8" onPress={() => this.Pulsador("number", 8)} />
            <Button text="9" onPress={() => this.Pulsador("number", 9)} />
            <Button text="X" onPress={() => this.Pulsador("operator", "*")}/>
          </Row>

          <Row>
            <Button text="5" style={styles.button} onPress={() => this.Pulsador("number", 5)} />
            <Button text="6" style={styles.button} onPress={() => this.Pulsador("number", 6)} />
            <Button text="7" style={styles.button} onPress={() => this.Pulsador("number", 7)} />
            <Button text="-" style={styles.botonAzul} onPress={() => this.Pulsador("operator", "-")}/>
          </Row>

          <Row>
            <Button text="1" onPress={() => this.Pulsador("number", 1)} />
            <Button text="2" onPress={() => this.Pulsador("number", 2)} />
            <Button text="3" onPress={() => this.Pulsador("number", 3)} />
            <Button text="+" onPress={() => this.Pulsador("operator", "+")}/>
          </Row>
          <Row>
            <Button text="0" onPress={() => this.Pulsador("number", 0)} />
            <Button text="/" onPress={() => this.Pulsador("operator", "/")}/>
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17171C",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 100,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },

});