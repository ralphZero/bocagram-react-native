import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AppBar from './components/AppBar';
import PhotoList from './components/PhotoList';

export default function App() {
  return (
      <SafeAreaView style={styles.safeArea}>
        <AppBar />
        <PhotoList />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'white',
    fontSize: 32,
  }
});
