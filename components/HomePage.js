import { Text,View, SafeAreaView, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';


// You can import supported modules from npm
import { Card , Appbar , Avatar , IconButton, MD3Colors ,Searchbar  } from 'react-native-paper';

// or any files within the Snack
import Bar from './Topappbar' ;
import Productcard from './Productcard' ; 
import Productinsidecard from './Productinsidecard'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    underline: {textDecorationLine: 'underline'  , textAlign : 'center' , fontSize : 24 , color : '#F59696' , fontStyle : 'Medium' , marginTop : 20} ,
    searchbar : {width : windowWidth * 80/100 , height : 30 , borderRadius : 5 , backgroundColor : '#D9D9D9' , alignItems : 'center' , marginHorizontal : 42, marginTop : 20 ,  } ,
})

export default function Homepage() {
  return <View style={{flexDirection : 'column' , height : windowHeight,}}>
   <Bar></Bar>
   <Searchbar  mode='view'  style={styles.searchbar}   placeholder="Search" iconColor='black'   ></Searchbar>
   <View style={{flex : 0.1}}>
   <Text style={styles.underline}>New Product</Text>
   </View>
   <Productcard></Productcard>
  </View>
  
  }