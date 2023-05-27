import React, { useEffect, useState } from 'react';
import { View, StatusBar, Button, StyleSheet, Text, Image, Dimensions } from 'react-native';
import VideoPlayer from 'react-native-video-controls';


const MyVideoPlayer = () => {
  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  return (

    <View style={styles.container}>
      <VideoPlayer
        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
        navigator={null}
        muted={false}
        disableBack={true}
        disableFullscreen={true}
        disableVolume={true}
        controlTimeout={5000}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Image
              style={styles.logoImage}
              resizeMode='contain'
              source={require('../assets/images/b.png')}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Image
              style={styles.londonImage}
              resizeMode='contain'
              source={require('../assets/images/l.png')}
            />
          </View>

          <View style={styles.buttonWrapper}>
            <Image
              style={styles.londonImage}
              resizeMode='contain'
              source={require('../assets/images/h.png')}
            />
          </View>
        </View>
      </VideoPlayer>

      <View style={styles.overlayContainer}>
        <View>
          <Image
            style={styles.historyImage}
            resizeMode='contain'
            source={require('../assets/images/a.png')}
          />
        </View>
      </View>
    </View>



  );
};

export default MyVideoPlayer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonWrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
  },
  logoImage: {
    height: 15,
  },
  londonImage: {
    height: 20,
  },
  historyImage: {
    height: 30,
    width: 300,
  },
  overlayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '75%',
  },
});
