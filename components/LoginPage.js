import { Image , Text,View, SafeAreaView, StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Asset } from 'expo-asset';
import Loginform from './logInform'


// You can import supported modules from npm
import { Button, Card, Title, Paragraph  } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





export default function Loginpage() {
  return <LinearGradient colors={['#EB8A96', '#000000']}>
  <View style={{
     flexDirection : 'column',
     height : windowHeight,
  }}>
   <View style={{flex : 0.1, }}></View>
   {/* Title Name */}
   <View style={{
     flex : 0.15,
   }}>
      <View style={{
        flexDirection : 'row',
        width : windowWidth,
      }}>
          <View style={{
            flex : 0.5,
          }}>
          </View>
          <Title style={{textAlign : 'center' , color : '#fff'}}>
           Welcome {"\n"} To {"\n"} Flower Shop
           </Title>
          <View style={{
            flex : 0.3,
          }}>
           
          </View>
       </View>
     </View> 
     
       {/* Red Ross Image */}
     <View style={{flex : 0.2}}>
        <View style={{
        flexDirection : 'row',
        width : windowWidth,
        shadowColor: "black",
                    shadowOffset: {
                      width: 10,
                      height: 9,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation:10,
                       
      }}>
          <View style={{
            flex : 0.5,
          }}></View>
              <Image source={require('../assets/redross.png')} style={{
                width : 185 ,
                height: 150,
                
              }}/>
      </View>
     </View>

       {/* Login Card  */}

       <View style={{flex : 0.05}}></View>
        <View style={{flex : 0.4 }}>
           <View style={{
              flexDirection : 'row',
              width : windowWidth,
            }}>
                <View style={{
                  flex : 0.16,
                }}></View>
                <View style={{
                  flex : 0.7,
                  backgroundColor: '#E27C7C',
                  borderRadius: 20,
                  width : 240 ,
                  height : 350,
                   shadowColor: "black",
                    shadowOffset: {
                      width: 10,
                      height: 9,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation:10,
                }}>
                <Loginform></Loginform>
               </View>
            </View>    
        </View>
     
  </View>
  </LinearGradient>
}