import {StatusBar} from 'expo-status-bar';
import {Dimensions, StyleSheet, View} from 'react-native';
import Main from "./src/Main";
import {BODY, HEIGHT, PADDING, WIDTH} from "./src/const";





export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: PADDING,
      backgroundColor: BODY
  },

});
