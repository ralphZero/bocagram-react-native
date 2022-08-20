import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { photoCardStyles } from '../assets/styles';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const PhotoCard = ({ photo }) => {
    const BASE_URL = 'https://source.unsplash.com/random?city=';
    const [liked, setLiked] = useState(false)

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
                <Icon name='more-vertical' type='feather' size={18} />
            </View>
            <Image source={{ uri: BASE_URL + 1 }} style={photoCardStyles.post} />
            
            <View style={photoCardStyles.bottomSection}>
                <View style={photoCardStyles.icons}>
                    <Icon onPress={() => setLiked(!liked)} style={{marginEnd: 12}} color={liked ? 'red' : 'black'} name={liked ? 'favorite' : 'favorite-border'} type='material' />
                    <Icon style={{marginEnd: 12}} name='message-circle' type='feather' />
                    <Icon name='send' type='feather' />
                </View>
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
