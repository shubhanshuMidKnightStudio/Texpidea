import {View, Image, StyleSheet, Pressable, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {Icons} from '../themes/ThemePath';
import Divider from '../component/Divider';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleProfile = () => {
        navigation.navigate('Profile');
    }
    
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.heading}>
        <View style={styles.headingContent}>
          <Pressable onPress={handleProfile}>
            <Image source={Icons.profile} style={styles.image} />
          </Pressable>

          <Image source={Icons.logoText} style={styles.logo} />

          <Pressable>
            <Image source={Icons.notification} style={styles.notification} />
          </Pressable>
        </View>
      </View>

      <View style={styles.adContainer}>
        <View style={styles.ad} />
        <View style={styles.adCircle}>
          <View style={styles.circleOne} />
          <View style={styles.circleOne} />
          <View style={styles.circle} />
          <View style={styles.circleOne} />
          <View style={styles.circleOne} />
        </View>
      </View>

      <View style={styles.button}>
        <View style={styles.cameraContainer}>
          <Image source={Icons.camera} style={styles.icon} />
          <View style={styles.cameraBox}>
            <Text style={styles.iconText}>Camera</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </View>
        <View style={{width: '90%', marginHorizontal: 20, marginVertical:20}}>
          <Divider />
        </View>
        <View style={styles.cameraContainer}>
          <Image source={Icons.browse} style={styles.icon} />
          <View style={styles.cameraBox}>
            <Text style={styles.iconText}>Browse</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </View>
        <View style={{width: '90%', marginHorizontal: 20, marginVertical:20}}>
          <Divider />
        </View>
        <View style={styles.cameraContainer}>
          <Image source={Icons.collage} style={styles.icon} />
          <View style={styles.cameraBox}>
            <Text style={styles.iconText}>Collage</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </View>
        <View style={{width: '90%', marginHorizontal: 20, marginVertical:20}}>
          <Divider />
        </View>
        <View style={styles.cameraContainer}>
          <Image source={Icons.saved} style={styles.icon} />
          <View style={styles.cameraBox}>
            <Text style={[styles.iconText]}>Saved</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EBF1FB',
  },
  heading: {
    paddingTop: 30,
  },
  headingContent: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    borderRadius: 8,
    width: 38,
    height: 38,
  },
  logo: {
    width: 130,
    height: 40,
    marginBottom: 10,
  },
  notification: {
    width: 28,
    height: 28,
  },
  adContainer: {
    paddingTop: 40,
    paddingHorizontal: 32,
  },
  ad: {
    width: 320,
    height: 183,
    borderRadius: 18,
    borderColor: '#FFF',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.58)',
  },
  adCircle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 100,
    paddingTop: 15,
  },
  circleOne: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 8,
    width: 12,
    height: 13,
  },
  circle: {
    backgroundColor: 'rgba(122, 204, 251, 1)',
    borderRadius: 8,
    width: 12,
    height: 13,
  },
  button: {
    paddingTop: 45,
  },
  cameraContainer: {
    paddingHorizontal: 40,
    flexDirection: 'row',
  },
  icon: {
    width: 75,
    height: 75,
  },
  cameraBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 25,
    alignContent: 'center',
  },
  iconText: {
    color: '#000',
    fontSize: 18,
    paddingRight: 120,
  },
  forwardIcon: {
    width: 9,
    height: 14,
    marginTop: 5,
  },
});

export default HomeScreen;
