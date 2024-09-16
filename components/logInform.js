import { Image , Text,View, SafeAreaView, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Asset } from 'expo-asset';


// You can import supported modules from npm
import { Button, Card, Title, Paragraph , TextInput  } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
  container: {
     backgroundColor : 'transparent' ,
     borderRadius : 20 ,
  },
  title1 : {
    colors : '#725959' ,
    textAlign : 'center' ,
    marginBottom : 10,
  },
  textinput : {
    backgroundColor : 'transparent' ,
    marginHorizontal : 30 ,
    marginBottom : 10,
  },
  text : {
    marginBottom : 20,
  },
  textcont : {
    marginBottom : 30,
    marginHorizontal : 60 ,
    borderRadius : 20 ,
  },
});

export default function Loginform() {
  return <Card mode='elevated' elevation={0} style={styles.container}>
                  <Card.Title title="LOGIN"  titleStyle={styles.title1}/>
                  <TextInput label='Email' style={styles.textinput}></TextInput>
                  <TextInput label='Password' style={styles.textinput}></TextInput>
                  <Button mode='text' style={styles.text} labelStyle={{  color : '#8083C8' }} >Forget Password ?</Button>
                  <Button mode='contained' style={styles.textcont} color='#733434' labelStyle={{  color : '#000000' }} >Login</Button>
                  <Button mode='text' labelStyle={{  color : '#4147CE' }} >Sign Up? Click here</Button>
                </Card>
}