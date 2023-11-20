import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Header = ({titulo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContairner}>
        <Text style={styles.titule}>{titulo}</Text>
      </View>
      <View style={styles.rightContairner}>
        <Image source={require('../../img/cucei-logo.png')}
            style={styles.imgHeaderLogo}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    imgHeaderLogo:{
      width: wp('18%'),
      height: hp('10%'),
      margin: 10
      // width: 400,
      // height: 400,
    },
    container:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#595C64'
    },
    leftContairner:{
      flex: 1,
      alignItems: 'flex-start',
    },
    rightContairner:{
      flex: 1,
      alignItems: 'flex-end',
    },
    titule:{
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 20,
      color: 'white',
    }
});

export default Header
