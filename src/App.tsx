import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard/SongCard'

export default function App() {
  const renderSong=({item}) => <SongCard song={item}/>
  const renderSeperator= ()=> <View style={styles.seperator} />
  return (
    <View style={styles.container}>
      <FlatList  style={styles.container}
      keyExtractor={(item) =>item.id}
      data={music_data}
      renderItem={renderSong}

      //her bir itemin arasına girecek componenti burada bize hazır verilen component içerisine yazıyoruz
      ItemSeparatorComponent={renderSeperator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
container:{flex: 1,backgroundColor: "white",},
seperator:{borderWidth:0.2, borderColor:"gray"}

})