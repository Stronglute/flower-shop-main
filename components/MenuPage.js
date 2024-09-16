import { Text,View, SafeAreaView, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
import {Svg , Rect}  from 'react-native-svg';
import {Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// You can import supported modules from npm
import { Card , Appbar , Avatar , IconButton, MD3Colors ,Searchbar  } from 'react-native-paper';

// or any files within the Snack
import Loginpage from './LoginPage';
import Signuppage from './SignupPage' ;
import Homepage from './HomePage' ; 
import Productpage from './ProductPage' ;
import  Addproductpage from './AddProduct' ;


const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  appbar : {
   backgroundColor : '#211' ,
   borderRadius : 50 ,
   height : 90 ,
  },
  button : {
    borderRadius : 10 ,
    marginTop : 18 ,
    marginLeft : 20 ,
  }
});

export default function Menupage() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name="Home" component={UnstackMenupage1} />
        <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={Loginpage} />
        <Stack.Screen options={{headerShown: false}} name="YourScreen" component={Homepage} />
        <Stack.Screen options={{headerShown: false}} name="AddScreen" component={Addproductpage} />
        <Stack.Screen options={{headerShown: false}} name="CartScreen" component={Loginpage} />
        <Stack.Screen options={{headerShown: false}} name="InventoryScreen" component={Loginpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 function UnstackMenupage1({ navigation }) {
  return <View style={{flexDirection : 'column' , height : windowHeight}} >
  <View>
  <Appbar.Header type='center-aligned' style={styles.appbar}  backgroundColor="#211" >
  <IconButton
    icon="arrow-left"
    size={30}
    onPress={() => console.log('Pressed')}
    style={{backgroundColor : 'black' }}
    color = '#fff'
  />
   <Avatar.Image size={70} source={require('../assets/avatar.png')}  style={{backgroundColor : '#211' , marginLeft : 100,}} />
  </Appbar.Header>
  </View>
  <View style={{flex : 0.1 , width : windowWidth , backgroundColor : '#211', } } ><Text style={{color : 'white' , textAlign : 'center' , fontSize : 20 ,}}>Menu</Text></View> 
  <View style={{backgroundColor : '#211' ,  }}></View>
     <View style={{backgroundColor : '#211' ,position: 'absolute',bottom: windowHeight * 20/100 , width : windowWidth * 50 /100 , height : windowHeight * 60/100  , }} >
       <Button  mode="contained" onPress={() => console.log('Pressed')} color='#2F2828' style={styles.button} > Home </Button>
       <Button  mode="contained" onPress={() => console.log('Pressed')} color='#2F2828' style={styles.button} > Your Product </Button>
       <Button  mode="contained" onPress={() => console.log('Pressed')} color='#2F2828' style={styles.button} > Cart </Button>
       <Button  mode="contained" onPress={() => navigation.navigate('LoginScreen')} color='#2F2828' style={styles.button} > Login </Button>
       <Button  mode="contained" onPress={() => console.log('Pressed')} color='#2F2828' style={styles.button} > Inventory </Button>
       <Button  mode="contained" onPress={() => console.log('Pressed')} color='#2F2828' style={styles.button} > Add Product </Button>
     </View>
     <View style={{backgroundColor : '#D9D9D9' ,position: 'absolute',bottom: 0, width : windowWidth * 50 /100 , height : windowHeight * 60/100 ,  marginLeft : 195 , }} ></View>
     <View style={{backgroundColor : '#211' ,position: 'absolute',bottom: windowHeight * 40/100, width : windowWidth * 50 /100 , height : windowHeight * 40/100 , borderBottomRightRadius : 400 ,  marginLeft : 195 , }} ></View>
   <View style={{backgroundColor : '#D9D9D9' ,position: 'absolute',bottom: 0, width : windowWidth * 50 /100 , height : windowHeight * 40/100 , borderTopLeftRadius : 400 , }} ></View>
  </View>
}