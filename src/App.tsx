import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import music_data from './music-data.json'
import SongCard from './components/SongCard/SongCard'
import SearchBar from './components/SearchBar'

export default function App() {
  const renderSong=({item}) => <SongCard song={item}/>

  const renderSeperator= ()=> <View style={styles.seperator} />

  const handleSearch = text =>{
    const filteredList = music_data.filter(song=>
      {
      const searcedText = text.toLowerCase()
      const currentTittle = song.title.toLowerCase()

      return currentTittle.indexOf(searcedText)> -1;

    })

    setList(filteredList)
  };

  const[list,setList]=useState(music_data);
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch}/>
      <FlatList  style={styles.container}
      keyExtractor={(item) =>item.id}
      data={list}
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