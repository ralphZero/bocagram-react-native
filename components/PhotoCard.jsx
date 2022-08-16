import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const PhotoCard = ({ photo }) => {
    return (
        <View style={styles.card}>
            <View>
                <Text>{photo.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        marginVertical: 4,
        borderRadius: 8,
    }
});

export default PhotoCard;
