import { ScrollView } from 'react-native';

import { photoListStyles } from '../assets/styles';
import PhotoCard from './PhotoCard';

const bsPhotos = [
    {description: 'Selfie with mom'},
    {description: 'goofy cat picture'},
    {description: 'sick car picture'},
]

const PhotoList = () => {
    return (
        <ScrollView style={photoListStyles.photoList}>
            {bsPhotos.map((photo, index) => (<PhotoCard key={index} photo={photo}/>))}
        </ScrollView>
    );
}

export default PhotoList;
