
import { StyleSheet, Text, View } from 'react-native';
import {HeaderComponent,ToDoComponent} from './src/components/index'
import store from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <HeaderComponent />
      <ToDoComponent />
    </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
