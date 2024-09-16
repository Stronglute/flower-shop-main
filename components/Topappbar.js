import { Text,View, SafeAreaView, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';


// You can import supported modules from npm
import { Card , Appbar , Avatar , IconButton, MD3Colors ,Searchbar  } from 'react-native-paper';

// or any files within the Snack


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  appbar : {
   backgroundColor : '#211' ,
   borderRadius : 50 ,
   height : 90 ,
  },
});

export default function Bar() {
  return <Appbar.Header type='center-aligned' style={styles.appbar}  backgroundColor="#211" >
  <IconButton
    icon="menu"
    size={30}
    onPress={() => console.log('Pressed')}
    style={{backgroundColor : 'black' }}
    color = '#fff'
  />
  <Appbar.Content title='Flower Shop' color='#725959' />
   <Avatar.Image size={70} source={require('../assets/avatar.png')}  style={{backgroundColor : '#211' , marginRight : 10,}} />
  </Appbar.Header>

}