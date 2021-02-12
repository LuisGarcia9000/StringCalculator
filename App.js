/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {calc} from './src/utils/StringCalculator'

const App: () => React$Node = () => {

  const [result, setResult] = useState(0)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={[styles.center, {marginBottom:20}]}>
                <Text style={styles.sectionTitle}>Calculadora	de Cadenas: </Text>
                <Text style={styles.sectionTitle}>+, -, /, * y ^</Text>
              </View>
              <TextInput 
                style={{borderWidth:0.5, borderColor:'gray'}}
                placeholder="Ej. 4-7+8+9/2*3"                
                maxLength={20}                
                onSubmitEditing={(event) => setResult(calc(event.nativeEvent.text))}
              />
              <Text style={styles.sectionDescription}>
                Resultado <Text style={styles.highlight}>{result}</Text>
              </Text>
            </View>            
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  center: {
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
