import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App () {

  // const imagenG = await launchImageLibrary(options?);
  const [imagen, setImagen] = useState('')
  const [error, setError] = useState(null)

  const perritoRandom = async () => {
    try{
      const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const url = await res.json();
      setImagen(url.message);
      setError(null);
    }catch(e){
      console.log
    }

  };

  // async function gallery(){
  //   try{
  //     await AsyncStorage.setItem("urlImagen", url)
  //     console.log("Se guardaron los datos")
  //   } 
  //   catch(e){
  //     console.log(e)
  //   }
    
  // }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Galería locochona de perritos chisyosos</Text>
      <TouchableOpacity style={styles.button} onPress={perritoRandom} >
        <Text style={styles.buttonText}>Encuentra un perrito</Text>
      </TouchableOpacity>
      {imagen && <Image source={{ uri: imagen }} style={styles.image} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#637BF5'
  },
  title:{
    fontSize:28,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20
  },
  button:{
    backgroundColor: 'white',
    color: 'black',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonText:{
    fontSize: 20
  },
  image: {
    borderRadius: 40,
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});