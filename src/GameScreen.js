import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { styles } from './styles/styles';
import {addToHistory} from './Services/HistoryHandler'

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayerName: null,
      secondPlayerName: null,
      firstPlayerScore: null,
      secondPlayerScore: null,
    };
  }

  componentDidMount() {
    let firstPlayerName = this.props.route && this.props.route.params && this.props.route.params.firstPlayerName;
    let secondPlayerName = this.props.route && this.props.route.params && this.props.route.params.secondPlayerName;
    console.log(firstPlayerName, secondPlayerName);
    this.setState({
      firstPlayerName,
      secondPlayerName,
      firstPlayerScore: 0,
      secondPlayerScore: 0,
    })
  }

  saveToHistory = (firstPlayerName,
                   secondPlayerName,
                   firstPlayerScore,
                   secondPlayerScore) => {
    addToHistory({
      firstPlayerName,
      secondPlayerName,
      firstPlayerScore,
      secondPlayerScore
    });
  }

  endGame = () => {
    let {firstPlayerName, secondPlayerName, firstPlayerScore, secondPlayerScore} = this.state;
    this.saveToHistory(
      firstPlayerName,
      secondPlayerName,
      firstPlayerScore,
      secondPlayerScore
    );
    this.props.navigation.goBack();
  }

  render() {
    let {firstPlayerName, secondPlayerName, firstPlayerScore, secondPlayerScore} = this.state;
    if (!firstPlayerName || !secondPlayerName) {
      return <View/>
    }
    let navigation = this.props;
    return (
      <View style={styles.center}>
        <Text style={[styles.textPrimary, {marginBottom: 100,}]}>
          {firstPlayerScore === secondPlayerScore ? 'GAME TIE':
            (firstPlayerScore > secondPlayerScore ? firstPlayerName : secondPlayerName) + ' is Winning'
          }
        </Text>

        <View style={{flexDirection: 'row',}}>
          <Text style={[styles.textPrimary, {width: '60%'}]}>{firstPlayerName}</Text>
          <TouchableOpacity
            style={styles.buttonWin}
            onPress={() => {this.setState({firstPlayerScore: firstPlayerScore+1})}}>
            <View>
              <Text style={styles.textButton}>Add Win</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.textPrimary}>{'Wins: ' + firstPlayerScore}</Text>


        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.textPrimary, {width: '60%'}]}>{secondPlayerName}</Text>
          <TouchableOpacity
            style={styles.buttonWin}
            onPress={() => {this.setState({secondPlayerScore: secondPlayerScore+1})}}>
            <View>
              <Text style={styles.textButton}>Add Win</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.textPrimary}>{'Wins: ' + secondPlayerScore}</Text>
        <TouchableOpacity
          style={styles.buttonWin}
          onPress={this.endGame}>
          <View>
            <Text style={styles.textButton}>End Game</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
