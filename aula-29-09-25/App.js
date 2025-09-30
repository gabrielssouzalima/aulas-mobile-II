import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native';

const data = [
  { id: 1, name: "Taylor Swift", image: require('./images/taylor-swift.jpg') },
  { id: 2, name: "Lana Del Rey", image: require('./images/lana-del-rey.jpg') },
  { id: 3, name: "Ariana Grande", image: require('./images/ariana-grande.jpg') },
 { id: 4, name: "Chapell Roan", image: require('./images/chappel-roan.jpg') },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.name}>Artistas Internacionais</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  list: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    width: 250,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
  },
  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
});
