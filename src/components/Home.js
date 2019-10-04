// Home.js
import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

class Home extends React.Component {
  render() {
    console.log('this here', this)
    return (
      <View style={styles.container}>
        <Text>Home Screen.</Text>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => this.props.navigation.openDrawer()}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerButton: {
    height: 30,
    width: '40%',
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home