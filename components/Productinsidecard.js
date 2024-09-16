import { Text,View, SafeAreaView, StyleSheet , Image} from 'react-native';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// You can import supported modules from npm
import { Card , Appbar , Avatar , IconButton, MD3Colors ,Searchbar  } from 'react-native-paper';

// or any files within the Snack


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  title1 : {
    textAlign : 'center' ,
     marginLeft : 40,
  },
  })


export default function Productinsidecard() {
  return <Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />
              
}