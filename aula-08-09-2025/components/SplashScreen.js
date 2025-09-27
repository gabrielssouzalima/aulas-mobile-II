import React, { useEffect } from "react";
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Navega para Home após 4s
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={style.SplashScreen}>
            <Image 
                source={{uri:'https://br.pinterest.com/pin/2885187254116752/'}} 
                style={style.splashImage} 
            />
            <ActivityIndicator size="large" color="#0000ff" style={style.loader} />
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
