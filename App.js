/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native'

import indy from 'rn-indy-sdk'

import { Colors } from 'react-native/Libraries/NewAppScreen'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionDescription}>Check console.log for test results</Text>
            <View style={styles.sectionContainer}>
              <Button title="Sample method" onPress={sampleMethod} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Create wallet" onPress={createWallet} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Open wallet" onPress={openWallet} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Close wallet" onPress={closeWallet} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Delete wallet" onPress={deleteWallet} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

let walletHandle

async function sampleMethod() {
  console.log('sampleMethod onPress')
  const result = await indy.sampleMethod('abc', 123)
  console.log('result', result)
}

async function createWallet() {
  console.log('createWallet onPress')
  const result = await indy.createWallet({ id: 'wallet-123' }, { key: 'key' })
  console.log('result', result)
}

async function openWallet() {
  console.log('openWallet onPress')
  const result = await indy.openWallet({ id: 'wallet-123' }, { key: 'key' })
  walletHandle = result
  console.log('result', result)
}

async function closeWallet() {
  console.log('closeWallet onPress')
  const result = await indy.closeWallet(walletHandle)
  console.log('result', result)
}

async function deleteWallet() {
  console.log('deleteWallet onPress')
  const result = await indy.deleteWallet({ id: 'wallet-123' }, { key: 'key' })
  console.log('result', result)
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
})

export default App
