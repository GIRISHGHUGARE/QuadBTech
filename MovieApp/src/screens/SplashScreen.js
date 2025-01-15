import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SplashImage from '../../assets/SplashImage.webp';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Main'); // Navigate to the main app
        }, 3000);

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            {SplashImage ? (
                <Image source={SplashImage} style={styles.image} />
            ) : (
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.placeholderText}>Logo Not Available</Text>
                </View>
            )}
            <Text style={styles.text}>Welcome to Movie App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10, // Added rounded corners for a polished look
    },
    imagePlaceholder: {
        width: 200,
        height: 200,
        marginBottom: 20,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    placeholderText: {
        color: '#888',
        fontSize: 16,
    },
    text: {
        color: '#e50914',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default SplashScreen;
