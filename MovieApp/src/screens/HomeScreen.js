import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.movieCard}
            onPress={() => navigation.navigate('Details', { movie: item.show })}
        >
            <Image source={{ uri: item.show.image?.medium }} style={styles.thumbnail} />
            <View style={styles.movieInfo}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.show.name}
                </Text>
                <Text style={styles.summary} numberOfLines={3}>
                    {item.show.summary?.replace(/<[^>]*>/g, '') || 'No summary available.'}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                placeholderTextColor="#aaa"
                onFocus={() => navigation.navigate('Search')}
            />
            <FlatList
                data={movies}
                keyExtractor={(item) => item.show.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    searchBar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 12,
        margin: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    listContainer: {
        paddingBottom: 10,
    },
    movieCard: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#222',
        borderRadius: 10,
        padding: 10,
        alignItems: 'flex-start',
    },
    thumbnail: {
        width: 90,
        height: 135,
        borderRadius: 5,
        marginRight: 10,
    },
    movieInfo: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    summary: {
        color: '#bbb',
        fontSize: 14,
        lineHeight: 20,
    },
});

export default HomeScreen;
