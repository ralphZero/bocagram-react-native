import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import UserContextProvider from './contexts/UserContext';

const App = () => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <Navigation />
      </UserContextProvider>
    </NavigationContainer>
  );
}

export default App;
