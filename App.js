import React from 'react';
import { TouchableNativeFeedback, Alert, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { hidden: false }
  }

  alertWithParams(title, message) {
    Alert.alert(
      title,
      message,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
        {text: 'OK', onPress: () => console.log('Ok Pressed')},
      ]
    )
  }

  defaultAlert() {
    Alert.alert("Default", "no message")
  }

  _onHide() {
    this.setState({ hidden: false });
  }
  _onShow() {
    this.setState({ hidden: true });
  }
  render() {
    let pic = {
      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Atom_editor_logo.svg/838px-Atom_editor_logo.svg.png"
    }

    return (
      <View style={ styles.main }>
        <View style={ styles.container }>
        <TouchableNativeFeedback 
          onPress={ () => this.defaultAlert() }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>
              First
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback 
          onPress={ () => this.alertWithParams("Alert!!!", "With parametres") }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>
              Second
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={ () => this.state.hidden ? this._onHide() : this._onShow() }>
          <View style={ styles.button }>
            <Text style={ styles.buttonText }>
              Show/Hide
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View>
          <Image source={pic} style={ this.state.hidden ? styles.imgHide : styles.imgShow }/>
        </View>
        </View>
        <View style={ styles.footer }>
          <Text style={ styles.footerText }>2019© Made by Olexandr Hnennyi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    padding: 20,
    paddingBottom: 0,
    flexDirection: 'column'
  },
  container: {
    flex:1,
    backgroundColor: "aquamarine",
    alignItems: "center"
  },
  button: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "blue",
    alignContent: "center",
    justifyContent: "center"
  },
  buttonText: {
    width: 100,
    paddingTop: 10,
    paddingBottom: 12,
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  footer: {
    height: 25,
    backgroundColor: "antiquewhite"
  },
  footerText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center"
  },
  imgShow: {
    width: 60,
    height: 55,
    marginTop: 15
  },
  imgHide: {
    width: 60,
    height: 55,
    marginTop: 15,
    opacity: 0,
  }
});
