import Toast from 'react-native-simple-toast';

export default class ToastService {
  showToasts = (message) => {
    Toast.show(message);
  }
}