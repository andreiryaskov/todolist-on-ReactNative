import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {Dimensions, StyleSheet, View} from 'react-native';
import Main from "./src/Main";
import {BODY, HEIGHT, PADDING, WIDTH} from "./src/const";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Main/>
          <StatusBar style="auto" />
        </View>
      </GestureHandlerRootView>
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
