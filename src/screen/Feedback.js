import {
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors, Icons} from '../themes/ThemePath';
import {useNavigation} from '@react-navigation/native';
import Divider from '../component/Divider';

const Feedback = () => {
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

          <Text style={styles.text}>Feedback</Text>

          <Pressable>
            <Image source={Icons.notification} style={styles.notification} />
          </Pressable>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBoxItem}>
            <Image source={Icons.checkBox} style={styles.checkBox} />
            <Text style={styles.checkBoxText}>App</Text>
          </View>
          <View style={styles.checkBoxItem}>
            <Image source={Icons.checkBoxBlue} style={styles.checkBox} />
            <Text style={styles.checkBoxText}>Feature</Text>
          </View>
          <View style={styles.checkBoxItem}>
            <Image source={Icons.checkBox} style={styles.checkBox} />
            <Text style={styles.checkBoxText}>Output</Text>
          </View>
        </View>

        <View style={{width: '90%', marginHorizontal: 20, marginVertical: 40}}>
          <Divider />
        </View>

        <View style={styles.textInput}>
          <TextInput
          style={styles.input}
          placeholder=" write your feedback and suggestions about app ... "
          placeholderTextColor={Colors.gText}
          />
          <Text style={styles.limit}>0/150</Text>
        </View>

        <View style={styles.submitButton}>
          <Pressable>
          <Image source={Icons.submit} style={styles.submit} />
          </Pressable>
        </View>
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
    paddingTop: 60,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  checkBoxItem: {
    paddingHorizontal: 30,
  },
  checkBox: {
    width: 28,
    height: 28,
    marginHorizontal: 10,
  },
  checkBoxText: {
    color: '#000',
    fontSize: 18,
    marginTop: 15,
  },
  textInput :{
    borderRadius: 12,
    paddingHorizontal: 25,
    alignSelf: 'center',
  },
  input: {
    height: 250,
    borderRadius: 20,
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 102, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.58)',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  limit: {
    textAlign: 'right',
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.50)',
    fontWeight: 'bold'
  },
  submitButton: {
    paddingTop: 20,
    alignItems: 'center'
  },
  submit: {
    width: 129,
    height: 35,
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

export default Feedback;
