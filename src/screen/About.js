import {
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import {Icons} from '../themes/ThemePath';
import {useNavigation} from '@react-navigation/native';
import Divider from '../component/Divider';

const About = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
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

          <Text style={styles.text}>About</Text>

          <Pressable>
            <Image source={Icons.notification} style={styles.notification} />
          </Pressable>
        </View>
      </View>

      <View style={styles.company}>
        <Text style={styles.text}>Texpidea Technologies Pvt. Ltd.</Text>
      </View>

      <View style={{width: '90%', marginHorizontal: 20, marginVertical: 20}}>
        <Divider />
      </View>

      <View style={styles.aboutCompany}>
        <Text style={styles.aboutParaOne}>
          Texpidea was established in April 2018 to create a revolution in the
          textile industry. Texpidea came into the picture to develop
          specialised software applications for the fashion and garment
          industries. It is our constant endeavour to create software solutions
          that encourage users to work the way they think.
        </Text>
        <Text style={styles.aboutParaTwo}>
          With its wide range of software applications, Texpidea officially
          incorporated on April 18, 2022, as Texpidea Technologies PVT. LTD.
        </Text>
        <Text style={styles.aboutParaThree}>
          We now have a wide range of software solutions for the fashion and
          garment industry. Individuals and corporations are drawn to software.
          Our software applications run on the Hand to Hand Android (mobile /
          tab) and iOS (iPhone / iPad) mobile platforms, which are both very
          affordable.
        </Text>
        <Text style={styles.aboutParaFour}>
          We have a very secure database management system that provides
          customer data safety. Our products require little or no learning to
          get hands-on, which helps us reach the maximum.
        </Text>
      </View>

      <View style={styles.websiteContainer}>
        <Text style={styles.website}>www.texpidea.com</Text>
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
  company: {
    paddingTop: 50,
    alignItems: 'center',
  },
  aboutCompany: {
    paddingTop: 20,
    paddingHorizontal: 25,
  },
  aboutParaOne: {
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
  },
  aboutParaTwo: {
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 20,
  },
  aboutParaThree: {
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 20,
  },
  aboutParaFour: {
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
  },
  websiteContainer: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  website: {
    color: '#319CFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
  footer: {
    paddingTop: 70,
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

export default About;
