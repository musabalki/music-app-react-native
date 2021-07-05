
import React from 'react';
import {SafeAreaView,StyleSheet,View,FlatList} from 'react-native';
import data from "./music-data.json"
import SongCard from './components/SongCards';

const App = () => {
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () =><View style={styles.seperator}/>
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList data={data} 
        keyExtractor={item=>item.id} 
        renderItem={renderSong} ItemSeparatorComponent={
          renderSeperator
        } />
      </View>
    </SafeAreaView>
  );
};


export default App;

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderWidth:1,
    borderColor:'#eceff2'
  }
})