import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PhotoCard from './PhotoCard';

const bsPhotos = [
    {description: 'Selfie with mom'},
    {description: 'goofy cat picture'},
    {description: 'sick car picture'},
]

const PhotoList = () => {
    return (
        <ScrollView style={styles.PhotoList}>
            {bsPhotos.map((photo, index) => (<PhotoCard key={index} photo={photo}/>))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    PhotoList: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        paddingVertical: 10,
        paddingHorizontal: 12
    }
});

export default PhotoList;
