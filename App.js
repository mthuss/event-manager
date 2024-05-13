import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MyTab from './components/Tab';
import { EventsProvider } from './components/EventsContext';

//safe area view aparentemente ta meio q inútil aqui...
export default function App() {
  return (
    <EventsProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <MyTab></MyTab>
        </NavigationContainer>
      </SafeAreaView>
    </EventsProvider>
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