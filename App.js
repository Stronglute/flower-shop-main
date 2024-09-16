import { Text,View, SafeAreaView, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Loginpage from './components/LoginPage';
import Signuppage from './components/SignupPage' ;
import Homepage from './components/HomePage' ; 
import Productpage from './components/ProductPage' ;
import  Addproductpage from './components/AddProduct' ;
import Menupage from './components/MenuPage' ;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
  return (
   
     //<Loginpage style={styles.container}></Loginpage>
     //<Signuppage style={styles.container}></Signuppage>
     //<Homepage style={styles.container}></Homepage>
     //<Productpage style={styles.container} ></Productpage>
     //<Addproductpage style={styles.container} ></Addproductpage>
     <Menupage style={styles.container} ></Menupage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height : windowHeight ,
  },
  
});
