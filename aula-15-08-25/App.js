import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import estilo from './components/estiloApp';
const request = async (callback) => {
    const response = await fetch('http://universities.hipolabs.com/search?country=Brazil');
    const data = await response.json();
    callback(data);
};

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <View style={estilo.container}>
      <Text style={estilo.superior}>Universidades no Brasil</Text>

      <FlatList
        data={registros}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={estilo.item}>
            <Text style={estilo.nome}>🏫{item.name}</Text>
            <Text>📍{item.country}</Text>
            <Text>{item.web_pages}</Text>
          </View>
        )}
      />
    </View>
  );
}
