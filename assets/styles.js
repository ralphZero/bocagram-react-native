import { StyleSheet, Platform, StatusBar } from 'react-native';

export const appBarStyles = StyleSheet.create({
    appBar: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        backgroundColor: '#FFFFFF',
    }, 
    appBarTitle: {
        fontSize: 30,
        fontWeight: '800',
        paddingVertical: 12
    }
});

export const photoCardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        marginVertical: 5,
        borderRadius: 2,
    },
    headerGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8
    },
    header: {
        flexDirection: 'row',
        flexGrow: 1
    },
    tagGroup: {
        marginStart: 8
    },
    tagName: {
        fontWeight: '800',
        color: '#333333',
    },
    location: {
        color: '#383838',
    },
    post: {
        width: '100%',
        aspectRatio: 1,
        flex: 1,
    },
    description: {
        paddingLeft: 5,
    },
    bottomSection: {
        padding: 8,
    },
    captionGroup: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    likesCount: {
        fontWeight: '800'
    },
    icons: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 8,
    }
});

export const photoListStyles = StyleSheet.create({
    photoList: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        paddingVertical: 5,
    }
});

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    brand: {
        fontSize: 32,
        fontWeight: '800',
        paddingVertical: 18,
        marginBottom: 82
    },
    cta : {
        width: '90%',
    }
});