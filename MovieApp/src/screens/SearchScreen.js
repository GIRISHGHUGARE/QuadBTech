import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SearchScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchResults = async () => {
            if (query.length > 2) {
                setIsLoading(true);
                try {
                    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
                    const data = await response.json();
                    setResults(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setIsLoading(false);
                }
            } else {
                setResults([]);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            fetchResults();
        }, 300); // Debounce API calls by 300ms

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.movieCard}
            onPress={() => navigation.navigate('Details', { movie: item.show })}
        >
            {item.show.image ? (
                <Image source={{ uri: item.show.image.medium }} style={styles.thumbnail} />
            ) : (
                <View style={styles.thumbnailPlaceholder}>
                    <Text style={styles.placeholderText}>No Image</Text>
                </View>
            )}
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{item.show.name}</Text>
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
                placeholder="Search movies..."
                placeholderTextColor="#aaa"
                value={query}
                onChangeText={setQuery}
            />
            {isLoading ? (
                <Text style={styles.loadingText}>Loading...</Text>
            ) : (
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.show.id.toString()}
                    renderItem={renderItem}
                    ListEmptyComponent={
                        query.length > 2 && results.length === 0 ? (
                            <Text style={styles.noResults}>No results found.</Text>
                        ) : null
                    }
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    searchBar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 12,
        margin: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    movieCard: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: '#222',
        borderRadius: 8,
        padding: 10,
        alignItems: 'flex-start',
    },
    thumbnail: {
        width: 100,
        height: 150,
        marginRight: 10,
        borderRadius: 4,
    },
    thumbnailPlaceholder: {
        width: 100,
        height: 150,
        marginRight: 10,
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    placeholderText: {
        color: '#ccc',
        fontSize: 14,
    },
    info: {
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    summary: {
        color: '#aaa',
        fontSize: 14,
        lineHeight: 20,
    },
    noResults: {
        color: '#aaa',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    loadingText: {
        color: '#aaa',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
});

export default SearchScreen;
