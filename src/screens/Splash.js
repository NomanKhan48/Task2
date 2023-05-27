import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      video();
    }, 2000);
  }, []);

  const video = () => {
    navigation.replace('MyVideoPlayer');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Text style={{fontSize: 30, fontStyle: 'italic', color: '#fff'}}>
        VideoPlayer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
