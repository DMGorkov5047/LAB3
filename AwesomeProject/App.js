import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import { ApolloProvider } from '@apollo/client';
import { WelcomeScreen } from './screens/WelcomeScreen/WelcomeScreen';
import {ConfigProvider} from 'antd-mobile';
import {View} from 'react-native';
import {SelectEventScreen} from './screens/SelectEventScreen/SelectEventScreen';
import { WelcomeScreen } from './screens/WelcomeScreen/WelcomeScreen';
import enUS from 'antd-mobile/es/locales.en-US';


import { ApolloClient} from './services/ApolloClient';

export default function App() {
  return (
  <ApolloProvider client={ApolloClient}>
    <ConfigProvider locale={enUs}>
    <View>
      <SelectEventScreen />
    </View>
    </ConfigProvider>
  </ApolloProvider>
  );

}