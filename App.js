import { StyleSheet, SafeAreaView } from 'react-native';
import AppBar from './components/AppBar';
import PhotoList from './components/PhotoList';
import Login from './screens/Login';

export default function App() {
  return (
      <SafeAreaView style={styles.safeArea}>
        <AppBar />
        <Login />
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
