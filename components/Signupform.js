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
    colors : '#725' ,
    textAlign : 'center' ,
    marginBottom : 9,
     backgroundColor : 'transparent' ,
  },
  textinput : {
    backgroundColor : 'transparent' ,
    marginHorizontal : 30 ,
    marginBottom : 3,
  },
  textcont : {
    marginBottom : 16,
    marginHorizontal : 60 ,
    borderRadius : 20 ,
    marginTop : 10,
  },
});

export default function Loginform() {
  return <Card mode='elevated' elevation={0} style={styles.container}>
                  <Card.Title title="SignUp"  titleStyle={styles.title1}  ></Card.Title>
                  <TextInput label='Email' style={styles.textinput}  ></TextInput>
                  <TextInput label='Password' style={styles.textinput}></TextInput>
                  <TextInput label='Country' style={styles.textinput}></TextInput>
                  <TextInput label='City' style={styles.textinput}></TextInput>
                  <TextInput label='Address' style={styles.textinput}></TextInput>
                  <TextInput label='Card Number' style={styles.textinput}></TextInput>
                  <TextInput label='Postal Code' style={styles.textinput}></TextInput>
                  <Button mode='contained' style={styles.textcont} color='#733434' labelStyle={{  color : '#000000' }} >Login</Button>
                  <Button mode='text' labelStyle={{  color : '#4147CE' }} >Log In? Click here</Button>
                </Card>
}