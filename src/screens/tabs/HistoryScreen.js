import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from '../../styles/styles.js'
import {getHistory} from "../../Services/HistoryHandler";

export default class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null,
    };
  }
  componentDidMount = () => {
    let {navigation} = this.props;
    let games = getHistory();
    navigation.addListener('focus', () => {
      console.log('fucussed');
      this.setState({
        games: games,
      }, () => console.log(this.state.games));
    });
  }

  render() {
    let {games} = this.state;
    if(!games) return <View/>
    return (
      <View style={styles.center}>
        <ScrollView style={{width: '100%'}}>
        {games.map((game, key) => {
          return <HistoryItem game={game} key={key} />
        })}
        </ScrollView>
      </View>
    );
  }
}

class HistoryItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      game: null,
    };
  }

  componentDidMount = () => {
    let {game} = this.props;
    this.setState({game,})
  }

  render() {
    let {game} = this.state;
    if(!game) return <View/>
    console.log(game);
    return (
      <View style={{backgroundColor: 'white', marginBottom: 20}}>
        <Text style={styles.textPrimary}>{game.firstPlayerName + ": " + game.firstPlayerScore}</Text>
        <Text style={styles.textPrimary}>{game.secondPlayerName + ": " + game.secondPlayerScore}</Text>
      </View>
    )
  }
}