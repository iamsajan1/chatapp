import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './Home';
import AddChat from './screens/AddChat';
 import Chat from './screens/Chat';
const stack = createNativeStackNavigator();
const globalScreenOptions={
  
headerStyle:{backgroundColor:'#f5abc5'},
headerTitleStyle:{color:'white'},
headerTintColor:'white',

};
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator  screenOptions={ globalScreenOptions} >
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Register" component={Register} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="AddChat" component={AddChat} />
        <stack.Screen name="chat" component={Chat} />
        </stack.Navigator>
        
    </NavigationContainer>
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
