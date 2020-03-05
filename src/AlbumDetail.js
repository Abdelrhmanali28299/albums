import React from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    return (
        <View style={styles.container}>
            <Card>
                <CardSection>
                    <View>
                        <Image style={styles.thumbnailImageStyle} source={{ uri: album.thumbnail_image }} />
                    </View>
                    <View style={styles.titleContainerStyle}>
                        <Text style={styles.headerTextStyle} key={album.title}>{album.title}</Text>
                        <Text>{album.artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={styles.imageStyle} source={{ uri: album.image }} />
                </CardSection>
                <Button
                    onPress={() => {
                        Linking.openURL(album.url)
                    }}
                    textButton="Buy now!"
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    thumbnailImageStyle: {
        height: 50,
        width: 50,
        borderRadius: 5,
        marginHorizontal: 10
    },
    imageStyle: {
        height: 300,
        width: 300,
        borderRadius: 10,
        marginHorizontal: 10,
        flex: 1
    },
    titleContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerTextStyle: {
        fontSize: 18
    },
    container: {
        justifyContent: "center"
    }
});

export default AlbumDetail;