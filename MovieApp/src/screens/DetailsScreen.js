import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { movie } = route.params;

    return (
        <ScrollView style={styles.container}>
            {movie.image?.original ? (
                <Image source={{ uri: movie.image.original }} style={styles.image} />
            ) : (
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.placeholderText}>Image Not Available</Text>
                </View>
            )}
            <Text style={styles.title}>{movie.name}</Text>
            <Text style={styles.summary}>
                {movie.summary?.replace(/<[^>]*>/g, '') || 'No summary available.'}
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    imagePlaceholder: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    placeholderText: {
        color: '#888',
        fontSize: 16,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summary: {
        color: '#bbb',
        fontSize: 16,
        lineHeight: 24,
    },
});

export default DetailsScreen;
