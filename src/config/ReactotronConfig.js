import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage'

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'GoBarber' })
    .setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.15.192' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;

}