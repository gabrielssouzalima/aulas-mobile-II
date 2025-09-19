import React, {useState, useEffect} from 'react';
import {View, Alert, Flatlist, Stylesheet, TouchableOpacity} from 'react-native';
import {Card, Text, IconButton} from 'react-native-paper';
import {fetchEstoque, deleteEstoque} from './Api';
export default function Home({navigation}) {
    const [registro, setRegistros] = useState([]);
    useEffect(() => {
        fetchEstoque(setEstoque);
    }, []);
    const handleDelete = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja deletar esse item?',
            [
                {text: 'Cancelar', style: 'cancel'},
                {
                    text: 'Deletar',
                    onPress: () => deleteEstoque(id, setRegistros),
                },
            ]
        );
    };
    return (
        <View style = {styles.container}>
            <Flatlist
            data = {registro}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item})} => (
                <Card style = {styles. card}>
                    <View style = {styles.cardContent}>
                        {/*Coluna da esquerda: texto */}
                        <View style = {styles.infoColumn}>
                                <Text style = {styles.title}>Código: {item.id}</Text>
                                <Text>Produto: {item.produto}</Text>
                                <Text>Marca: {item.marca}</Text>
                                <Text>Valor: {item.valor}</Text>
                        </View>
                    </View>
                </Card>
            );
        </View>
    )
}