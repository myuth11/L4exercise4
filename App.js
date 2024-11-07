import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.parent]} >
      <View style={[styles.child,{backgroundColor: 'blue'}]}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.child,{backgroundColor: 'green'}]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.child]}>
        <Text>Square 3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  parent:{
    backgroundColor: 'whitesmoke',
    marginTop:30,
    alignItems:'center',
    flex:1,
    justifyContent:'space-around',
    flexDirection:'row'
  },
  child:{
    width:80,
    height:80,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    backgroundColor:'red',

  }
});
