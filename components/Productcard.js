import { Text,View, SafeAreaView, StyleSheet , Image} from 'react-native';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// You can import supported modules from npm
import { Card , Appbar , Avatar , IconButton, MD3Colors ,Searchbar  } from 'react-native-paper';

// or any files within the Snack


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
     backgroundColor : 'transparent' ,
    
  },
  verticleLine:{
    height: '100%',
    width: 6,
  },
  title : {
     marginLeft : 50,
      width : 130 ,
     marginTop : 20,
     paddingTop : 20,
     flexWrap : 'Wrap' , 
     flexDirection : 'row',

  },
   subtitle : {
    textAlign : 'center' ,
     marginLeft : 50,
      width : 100 ,
     height : 50,
     flexWrap : 'Wrap' , 
     flexDirection : 'row' ,
  },
  })


export default function Productcard() {
  return <View style={{flex : 0.1  ,}}>
           <View style={{flexDirection : 'row'}} >
           <LinearGradient colors={['#CF8E8E', '#fff']}>
           <View style={styles.verticleLine}></View>
           </LinearGradient>
          <Card mode='elevated' elevation={0}   style={styles.container}>
 
                  <Card.Title title="Blue Flower" subtitle="$45"  titleStyle={styles.title}   subtitleStyle={styles.subtitle}
                  left = { () =>  <View style={{ shadowColor: "black",
                    shadowOffset: {
                      width: 10,
                      height: 9,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation:10, }}>
                    <Image source={require('../assets/blueflower.png')} style={{
                      width : 75 ,
                      height : 65,
                      marginBottom : 10,
                    }}/>
                    </View>
                    }
                   right={(props) => <IconButton {...props} icon="arrow-right" style={{backgroundColor : '#D9D9D9' , marginLeft : 250 ,}} onPress={() => {}} />}
                  >
                  </Card.Title>
                 
                </Card>
                </View> 
             </View>    
}