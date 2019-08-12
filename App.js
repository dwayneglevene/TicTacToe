import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';


export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Codjkdsjkol</Text>
      <Button style={styles.button} bordered success>
            <Text>Su111ccedokokokokoddss</Text>
          </Button>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  

});
