import {
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';
import React from 'react';
import {Icons} from '../themes/ThemePath';
import {useNavigation} from '@react-navigation/native';
import Divider from '../component/Divider';

const Help = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleIntroduction = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  const handleCrope = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  const handleDrape = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  const handleYoutube = () => {
    Linking.openURL('https://www.youtube.com/');
  };

  const handleFacebook = () => {
    Linking.openURL('https://www.facebook.com/');
  };

  const handleWhatsapp = () => {
    Linking.openURL('https://api.whatsapp.com/');
  };

  const handleInstagram = () => {
    Linking.openURL('https://www.instagram.com/');
  };

  const handleLinkedin = () => {
    Linking.openURL('https://www.linkedin.com/feed/');
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.heading}>
        <View style={styles.headingContent}>
          <Pressable onPress={handleBack}>
            <Image source={Icons.backBtn} style={styles.back} />
          </Pressable>

          <Text style={styles.text}>Help</Text>

          <Pressable>
            <Image source={Icons.notification} style={styles.notification} />
          </Pressable>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.youtubeData}>
          <Pressable onPress={handleIntroduction}>
            <View style={styles.youtubeButton}>
              <Image source={Icons.youtube} style={styles.youtube} />
              <Text style={styles.buttonText}>Introduction</Text>
            </View>
          </Pressable>
          <Pressable onPress={handleCrope}>
            <View style={styles.youtubeButton}>
              <Image source={Icons.youtube} style={styles.youtube} />
              <Text style={styles.buttonTextOne}>Crope</Text>
            </View>
          </Pressable>
          <Pressable onPress={handleDrape}>
            <View style={styles.youtubeButton}>
              <Image source={Icons.youtube} style={styles.youtube} />
              <Text style={styles.buttonTextOne}>Drape</Text>
            </View>
          </Pressable>
        </View>
      </View>

      <View style={{width: '90%', marginHorizontal: 20, marginVertical: 20}}>
        <Divider />
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.text}>Contact Us</Text>
        <Text style={styles.website}>www.texpidea.com</Text>
        <Text style={styles.email}>support@texpidea.com</Text>
        <Text style={styles.mobile}>+91 96656 64966</Text>
        <Text style={styles.mobile}>+91 99757 50166</Text>
      </View>

      <View style={{width: '90%', marginHorizontal: 20, marginVertical: 20}}>
        <Divider />
      </View>

      <View style={styles.footer}>
        <View style={styles.socialButton}>
          <Pressable onPress={handleYoutube}>
            <Image source={Icons.youtube} style={styles.socialIcons} />
          </Pressable>
          <Pressable onPress={handleFacebook}>
            <Image source={Icons.facebook} style={styles.socialIcons} />
          </Pressable>
          <Pressable onPress={handleWhatsapp}>
            <Image source={Icons.whatsapp} style={styles.socialIcons} />
          </Pressable>
          <Pressable onPress={handleInstagram}>
            <Image source={Icons.instagram} style={styles.socialIcons} />
          </Pressable>
          <Pressable onPress={handleLinkedin}>
            <Image source={Icons.linkedin} style={styles.socialIcons} />
          </Pressable>
        </View>
        <View style={styles.footerLogo}>
          <Image source={Icons.logoText} style={styles.logo} />
          <Text style={styles.footerText}>Texpidea Technologies Pvt. Ltd.</Text>
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
    paddingTop: 50,
  },
  headingContent: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    borderRadius: 8,
    width: 28,
    height: 28,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notification: {
    width: 28,
    height: 28,
  },
  container: {
    paddingTop: 30,
    paddingBottom: 250,
  },
  youtubeData: {
    flexDirection: 'row',
    paddingHorizontal: 50,
  },
  youtubeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  youtube: {
    width: 50,
    height: 50,
    marginLeft: 12,
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
    marginTop: 10,
  },
  buttonTextOne: {
    color: '#000',
    fontSize: 13,
    marginLeft: 20,
    marginTop: 10,
  },
  contactInfo: {
    paddingTop: 10,
    alignItems: 'center',
  },
  website: {
    color: '#319CFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  email: {
    color: '#319CFF',
    fontSize: 13,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  mobile: {
    color: '#565656',
    fontSize: 14,
    // fontWeight: 'bold',
    marginTop: 5,
  },
  footer: {
    paddingTop: 40,
  },
  socialButton: {
    paddingHorizontal: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIcons: {
    width: 28,
    height: 28,
  },
  footerLogo: {
    paddingHorizontal: 70,
  },
  logo: {
    width: 120,
    height: 40,
    marginVertical: 10,
    marginHorizontal: 60,
  },
  footerText: {
    color: 'rgba(155, 157, 157, 1)',
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: '600',
  },
});

export default Help;
