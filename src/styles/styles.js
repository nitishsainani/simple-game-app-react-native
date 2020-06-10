import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  center: {
    height: 'auto',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    marginBottom: 16
  },
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  },
  inputFieldNames: {
    height: 50,
    width: '90%',
  },
  buttonPrimary: {
    margin: 30,
    backgroundColor: 'green',
    fontWeight: '400',
    width: '50%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    padding: 20,
  },
  textPrimary: {
    fontSize: 20,
    color: 'gray',
    padding: 20,
  },
  buttonWin: {
    height: 60,
    backgroundColor: 'green',
    fontWeight: '400',
    width: '40%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
});