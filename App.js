import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import React, {useEfect, useState} from 'react';
import {AntDesign, Ionicons} from '@expo/vector-icons';


export default function App() {

  
const [audio, setarAudio] = useState(null);


const [musicas, setMusicas] = useState([
  {
    nomme: 'eu',
    artista: 'tu',
    playing: true, 
    file: '',
  },
  {
    nomme: '1',
    artista: '2',
    playing: false, 
    file: '',
  },
  {
    nomme: 'a',
    artista: 'b',
    playing: false, 
    file: '',
  },
  ]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar auto/>
      <View style={styles.header}>
        <Text style={{textAlign:'center', color:'white', fontSize:25}}>SPOTIFY</Text>
      </View>

      <View style={styles.table}>
        <Text style={{width:'50%', color:'rgb(200,200,200)'}}>Musica</Text>
        <Text style={{width:'50%', color:'rgb(200,200,200)'}}>Artista</Text>
      </View>

      {
        musicas.map((val)=>{
          if(val.playing){
            return(
              <View style={styles.table}>
                <TouchableOpacity style={{width:'100%', flexDirection: 'row'}}>
                  <Text style={{width:'50%', color:'green'}}>
                    <AntDesign name="pausecircle" size={20} color="white" />  {val.nomme}
                  </Text>

                  <Text style={{width:'50%', color:'green'}}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
            );
          }else {
            return(
              <View style={styles.table}>
                <TouchableOpacity style={{width:'100%', flexDirection: 'row'}}>
                  <Text style={{width:'50%', color:'white'}}>
                    <AntDesign name='play' size={20} color='white'/>  {val.nomme}
                  </Text>

                  <Text style={{width:'50%', color:'white'}}>{val.artista}</Text>
                </TouchableOpacity>
              </View>
            );
          }
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  header: {
    backgroundColor:'green',
    alignSelf:'center',
    width:'90%',
    padding:20,
    marginTop:10
  },  
  table: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor:'white',
    borderBottomWidth:1
  }
});
