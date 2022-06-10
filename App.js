import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import React, {useEfect, useState} from 'react';
import {AntDesign} from '@expo/vector-icons';
import Player from './Player';
import { LogBox } from 'react-native';

export default function App() {

LogBox.ignoreAllLogs(true);

const [audioIndex, setAudioIndex] = useState(0);

const [playing, setPlaying] = useState(false);

const [audio, setAudio] = useState(null);

const [musicas, setMusicas] = useState([
  {
    nomme: 'eu',
    artista: 'tu',
    playing: false, 
    file: require('./assets/sample4.mp3'),
  },
  {
    nomme: '1',
    artista: '2',
    playing: false, 
    file: require('./assets/sample4.mp3'),
  },
  {
    nomme: 'a',
    artista: 'b',
    playing: false, 
    file: require('./assets/sample4.mp3'),
  },
  ]);

  const changeMusic = async (id) =>{
    let curFile = null;
    let newMusic = musicas.filter((val, k)=>{
      if(id == k){
        musicas[k].playing = true;
        curFile = musicas[k].file;
        setPlaying(true);
        setAudioIndex(id);
      } else {
        musicas[k].playing = false;
      }
      return musicas[k];
    })
    //fazer botao de pause aq mesmo
    if(audio != null){
      audio.unloadAsync();
    }

    let curAudio = new Audio.Sound();

    try{
      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();
    }catch(error) {}

    setAudio(curAudio);
    setMusicas(newMusic);
  }

  return (
    <View style={{flex:1}}>
      <ScrollView style={styles.container}>
        <StatusBar auto/>
        <View style={styles.header}>
          <Text style={{textAlign:'center', color:'white', fontSize:25, backgroundColor:'green', borderRadius:20, padding:8, width:'60%'}}>SPOTIFY</Text>
        </View>

        <View style={styles.table}>
          <Text style={{width:'50%', color:'rgb(200,200,200)', textAlign:'center'}}>Musica</Text>
          <Text style={{width:'50%', color:'rgb(200,200,200)', textAlign:'center'}}>Artista</Text>
        </View>

        {
          musicas.map((val, k)=>{
            if(val.playing){
              return(
                <View style={styles.table}>
                  <TouchableOpacity onPress={()=> changeMusic(k)} style={{width:'100%', flexDirection: 'row'}}>
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
                  <TouchableOpacity onPress={()=> changeMusic(k)} style={{width:'100%', flexDirection: 'row'}}>
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
        <View style={{paddingBottom:200}}></View>
      </ScrollView>

      <Player 
        playing={playing} setPlaying={setPlaying} 
        audioIndex={audioIndex} setAudioIndex={setAudioIndex}
        musicas={musicas} setMusicas={setMusicas} 
        audio={audio} setAudio={setAudio}
      ></Player>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  header: {
    backgroundColor:'rgb(20,20,20)',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'18%'
  },  
  table: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor:'white',
    borderBottomWidth:1
  }
});
