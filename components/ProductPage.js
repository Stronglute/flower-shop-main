import { View, SafeAreaView, StyleSheet , Image} from 'react-native';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// You can import supported modules from npm
import { Card , Appbar , Avatar , IconButton, MD3Colors ,Searchbar  ,Text , Title , Paragraph} from 'react-native-paper';

// or any files within the Snack
import Bar from './Topappbar' ;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
     backgroundColor : '#D9D9D9' ,
      height : windowHeight * 40/100 , 
  },
  title : {
      width : 100 ,
     flexWrap : 'Wrap' , 
     flexDirection : 'row',
      marginTop : 100 ,
  },
  text : {
      width : 100 ,
     flexWrap : 'Wrap' , 
     flexDirection : 'row',
     marginLeft : 20 ,
     marginTop : 10 ,
  },
  destitle : {
      width : 120 ,
     flexWrap : 'Wrap' , 
     flexDirection : 'row',
     marginHorizontal : 50 ,
     marginTop : 10 ,
      textalign : 'center',
      fontSize : 16,
      fontStyle : 'Thin'
  },
   destext : {
      width : 300 ,
     flexWrap : 'Wrap' , 
     flexDirection : 'row',
     marginHorizontal : 50 ,
     marginTop : 10 ,
      textalign : 'center',
      fontSize : 12,
      fontStyle : 'Thin'
  },
  ttitle : {
      width : 120 ,
     flexWrap : 'Wrap' , 
     flexDirection : 'row',
      marginTop : 20 ,
     
  },
  image : {
      marginRight : 20 ,
      width : 220 ,
      height : 190,
      marginTop : 100 ,
       flexWrap : 'Wrap' , 
     flexDirection : 'row',
    },
    bottombar : {backgroundColor : '#D9D9D9' , width : 325 , height : 67 , marginHorizontal : 31 , borderRadius : 40 , flexDirection : 'row', position: 'absolute', bottom: 30,  },
    bottombutton : {backgroundColor : 'white' , width : 140 , height : 50 , marginLeft : 15 , marginTop : 8 , borderRadius : 40 , flexDirection : 'row' ,   },
    bottombuttontwo : {backgroundColor : 'white' , width : 140 , height : 50 , marginLeft : 16 , marginTop : 8 , borderRadius : 40 , flexDirection : 'row' ,   },
    bottomicon : {  width : 30 , height : 30 , backgroundColor : '#D9D9D9' ,  },
    bottomtext : { marginTop : 15 , marginLeft : 15 , width : 80 , height : 30 ,   }, 
    bottomview : { marginTop : 3  , width : 30 , height : 30 , shadowColor: "black",
                    shadowOffset: {
                      width: 5,
                      height: 5,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1,
                    elevation:3, } , 
    availablecolor :  {width : 20 , height : 20 , backgroundColor : 'blue' , marginTop : 20, borderRadius : 8 , marginLeft :10 , shadowColor: "black",
                    shadowOffset: {
                      width: 5,
                      height: 5,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    elevation:3, } ,
      availablecolorone :  {width : 20 , height : 20 , backgroundColor : 'red' , marginTop : 20, borderRadius : 8 , marginLeft :20 , shadowColor: "black",
                    shadowOffset: {
                      width: 5,
                      height: 5,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    elevation:3, } ,
      availablecolortwo :  {width : 20 , height : 20 , backgroundColor : '#EB8A96' , marginTop : 20, borderRadius : 8 , marginLeft :20 , shadowColor: "black",
                    shadowOffset: {
                      width: 5,
                      height: 5,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    elevation:3, } ,                                
  })


export default function Productpage() {
  return <View style={{flexDirection : 'column' , height : windowHeight,}}>
   <Bar></Bar>
  <Card mode='elevated' elevation={0}   style={styles.container}>
         <View  style={{flexDirection : 'row' , width : windowWidth,}} >

                 <Card.Content>
                     <Text variant="bodyLarge" style={styles.title}>Catogery :</Text>
                     <Title style={styles.text} >Flower</Title>
                     <Text variant="bodyLarge" style={styles.ttitle} >Price :</Text>
                     <Title style={styles.text} >$45</Title>
                     <Text variant="bodyLarge" style={styles.ttitle} >Available Colors :</Text>
                     <View style={{flexDirection : 'row' ,}}>
                     <View style={styles.availablecolor}></View>
                     <View style={styles.availablecolorone}></View>
                     <View style={styles.availablecolortwo}></View>
                     </View>
                 </Card.Content>  
                <View style={{ shadowColor: "black",
                    shadowOffset: {
                      width: 10,
                      height: 9,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation:10, }}>
                    <Image source={require('../assets/blueflower.png')} style={styles.image}/>
                    </View>
               
                  
           </View>      
    </Card>
    <View>
     <Text style={styles.destitle} >Description :</Text>
     <Paragraph style={styles.destext} >Certainly! To provide a more accurate example text, Id need specific details about the purpose, target audience, and key messages of the website. However, I can create a generic example that you can customize according to your needs.</Paragraph>
    </View>
    <View style={styles.bottombar} >
   <View style={styles.bottombutton} >
    <Text style={styles.bottomtext} >Check Out</Text>
  <View style={styles.bottomview}>
    <IconButton
    icon= "arrow-right-thick"
    size={20}
    style={styles.bottomicon}
    color = '#fff'
  />
  </View>
  </View>
  <View style={styles.bottombuttontwo} >
    <Text style={styles.bottomtext} >Add To Cart</Text>
  <View style={styles.bottomview}>
    <IconButton
    icon= "arrow-right-thick"
    size={20}
    style={styles.bottomicon}
    color = '#fff'
  />
  </View>
  </View>
    </View>
      </View>
}