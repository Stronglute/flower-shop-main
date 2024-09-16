import { Text,View, SafeAreaView, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { Card , Appbar , Avatar , IconButton, MD3Colors ,Searchbar , TextInput , Button  } from 'react-native-paper';
import { SelectList ,  MultipleSelectList } from 'react-native-dropdown-select-list'


// or any files within the Snack
import Bar from './Topappbar' ;
import Productcard from './Productcard' ; 
import Productinsidecard from './Productinsidecard'


  
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    underline: {textDecorationLine: 'underline'  , textAlign : 'center' , fontSize : 24 , color : '#F59696' , fontStyle : 'Medium' , marginTop : 20 , width : 150 , height : 50 } ,
     textinput : {
    backgroundColor : 'transparent' ,
    marginHorizontal : 30 ,
    marginBottom : 10,
  },
  textoption : {
    backgroundColor : 'transparent' ,
    marginHorizontal : 30 ,
    marginBottom : 10,
    marginTop : 10 ,
    borderColor : 'transparent' ,
    borderBottomColor : '#D9D9D9' ,
    borderRadius:0 ,
    height : 50 ,
  },
  textcont : {
    marginBottom : 16,
    marginHorizontal : 60 ,
    borderRadius : 20 ,
    marginTop : 30,
  },
  container: {
     backgroundColor : 'transparent' ,
     marginTop : 50 ,
  },
})

export default function Addproductpage() {
  const [selected, setSelected] = useState("Catogery");
  return <View style={{flexDirection : 'column' , height : windowHeight,}}>
   <Bar></Bar> 
   <View style={{flex : 0.1 , textAlign : 'center' , alignItems : 'center' }}>
   <Text style={styles.underline}>ADD Product</Text>
   </View>
   <View>
   <Card mode='elevated' elevation={0} style={styles.container}>
                  <TextInput label='Name' style={styles.textinput}  ></TextInput>
                  <SelectList  setSelected={(val) => setSelected(val)}  data={data}  save="value" boxStyles={styles.textoption} placeholder='Catogery' />
                  <TextInput label='Price' style={styles.textinput}></TextInput>
                  <MultipleSelectList  setSelected={(val) => setSelected(val)}  data={data}  save="value"  label="Categories" boxStyles={styles.textoption} placeholder='Availabile Color' />
                  <TextInput label='Image' style={styles.textinput}></TextInput>
                  <TextInput label='Description' style={styles.textinput}></TextInput>
                  <Button mode='contained' style={styles.textcont} color='#733434' labelStyle={{  color : '#000000' }} >ADD</Button>
                </Card>
   </View>
   </View>
}