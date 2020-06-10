import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from '../../styles/styles.js';
import ToastService from '../../Services/ToastService'
import {TextInput} from "react-native-paper";

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayerName: '',
      secondPlayerName: '',
    }
  }

  componentDidMount() {
    this.setState({
      firstPlayerName: '',
      secondPlayerName: '',
    })
  }

  validateNames = () => {
    return !(!this.state.firstPlayerName || this.state.firstPlayerName === '' ||
      !this.state.secondPlayerName || this.state.secondPlayerName === '');
  }

  goToGameScreen = () => {
    if(!this.validateNames()) {
      ToastService().showToasts('Please Enter Both Names');
      return;
    }
    this.props.navigation.navigate('gameScreen', {
      firstPlayerName: this.state.firstPlayerName,
      secondPlayerName: this.state.secondPlayerName
    });

    this.setState({
      firstPlayerName: '',
      secondPlayerName: '',
    });
  }

  render() {
    return <View style={styles.center}>
      <Text style={styles.textPrimary}>
        Enter First Player Name
      </Text>
      <TextInput
        style={styles.inputFieldNames}
        onChangeText={(firstPlayerName)=>{this.setState({firstPlayerName})}}
        placeholder={'Name'}
        value={this.state.firstPlayerName}
      />
      <Text style={styles.textPrimary}>
        Enter Second Player Name
      </Text>
      <TextInput
        style={styles.inputFieldNames}
        onChangeText={(secondPlayerName)=>{this.setState({secondPlayerName})}}
        placeholder={'Name'}
        value={this.state.secondPlayerName}
      />
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={this.goToGameScreen}>
        <View>
          <Text style={styles.textButton}>Enter Game</Text>
        </View>
      </TouchableOpacity>
    </View>
  }
}