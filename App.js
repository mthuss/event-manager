import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet} from 'react-native';
import MyTab from './components/Tab';
import { EventsProvider } from './components/EventsContext';
import { MenuProvider } from 'react-native-popup-menu';

//safe area view aparentemente ta meio q inútil aqui...
export default function App() {
  return (
    <EventsProvider>
      <MenuProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <MyTab></MyTab>
          </NavigationContainer>
        </SafeAreaView>
      </MenuProvider>
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
