import { View, Text, Image } from 'react-native';
import { photoCardStyles } from '../assets/styles';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Icon } from 'react-native-elements/dist/icons/Icon';


const PhotoCard = ({ photo }) => {
    const BASE_URL = 'https://source.unsplash.com/random?city=';
    
    return (
        <View style={photoCardStyles.card}>
            <View style={photoCardStyles.headerGroup}>
                <View style={photoCardStyles.header}>
                    <Avatar rounded size="small" source={{url: "https://randomuser.me/api/portraits/men/1.jpg"}} />
                    <View style={photoCardStyles.tagGroup}>
                        <Text style={photoCardStyles.tagName}>tagnamehere</Text>
                        <Text style={photoCardStyles.location}>location</Text>
                    </View>
                </View>
                <Icon name='more-vert' />
            </View>
            <Image source={{ uri: BASE_URL + 1 }} style={photoCardStyles.post} />
            
            <View style={photoCardStyles.bottomSection}>
                <Text style={photoCardStyles.likesCount}>12,55 likes</Text>
                <View style={photoCardStyles.captionGroup}>
                    <Text style={photoCardStyles.tagName}>tagname</Text>
                    <Text style={photoCardStyles.description}>{photo.description}</Text>
                </View>
            </View>
        </View>
    );
}

export default PhotoCard;
