import React, { useEffect } from "react";
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigator }) => {
    useEffect(() => {
        //Define a duração do splash (4 segundos)
        const timer = setTimeout(() => {
            navigator.replace('Home'); //Após o tempo, navega p/ tela de Home
        }, 4000);

        return () => clearTimeout(timer); // limpa o timer quandoo componete for desmontado
    }, [navigator]);
    return (
        <View style={StyleSheet.SplashScreen}>
            <image souce={{uri:'https://br.pinterest.com/pin/2885187254116752/'}} style = {StyleSheet.SplashScreen} />
            <ActivityIndicator size="large" color="#0000ff" style={StyleSheet.loader} />
        </View>
    );
};
const style = StyleSheet.create({
    SplashScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    },
});
export default SplashScreen;