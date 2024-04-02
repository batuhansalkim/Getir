import { View, Text,Image } from 'react-native'
import React from 'react'
import {Entypo} from "@expo/vector-icons";
import styles from './styles'

const index = () => {
  return (
    <View style={styles.headerMain}>

      <View style={styles.headerOne}>
        <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
        <View style={styles.headerOneView}>
            <Text style={styles.headerOneText}>Ev</Text>
            <Text style={styles.headerAdressText}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
            <Entypo name='chevron-right' size={22} color="#5D3EBD"/>
        </View>
        <View style={styles.headerTwo}>
            <Text style={styles.headerTwoText}>TVS</Text>
            <Text style={styles.headerTwoTimeText}>13<Text style={styles.headerTwoMinuteText}>dk</Text></Text>
      </View>
      </View>

      
    </View>
  )
}

export default index