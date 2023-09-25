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

const Profile = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handelEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleHelp = () => {
    navigation.navigate('Help');
  };

  const handleFeedback = () => {
    navigation.navigate('Feedback');
  };

  const handleAbout = () => {
    navigation.navigate('About');
  };

  const handleLogout = () => {
    //
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

          <Text style={styles.text}>My Profile</Text>

          <Pressable>
            <Image source={Icons.notification} style={styles.notification} />
          </Pressable>
        </View>
      </View>

      <View style={styles.profileContainer}>
        <Image source={Icons.profile} style={styles.profilePic} />

        <View style={styles.profileInfo}>
          <Text style={styles.fullName}>Test Account Bhusan</Text>
          <Pressable onPress={handelEditProfile}>
            <Image
              source={Icons.editProfileBtn}
              style={styles.editProfileBtn}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.container}>
        <Pressable>
          <View style={styles.buttonItem}>
            <Image source={Icons.subscription} style={styles.buttonIcons} />
            <Text style={styles.itemText}>Subscription</Text>
            <Image source={Icons.active} style={styles.activeIcon} />
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </Pressable>

        <View style={{width: '90%', marginHorizontal: 20, marginVertical: 20}}>
          <Divider />
        </View>

        <Pressable onPress={handleHelp}>
          <View style={styles.buttonItem}>
            <Image source={Icons.help} style={styles.buttonIcons} />
            <Text style={styles.help}>Help</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </Pressable>

        <View style={{width: '90%', marginHorizontal: 20, marginVertical: 20}}>
          <Divider />
        </View>

        <Pressable onPress={handleFeedback}>
          <View style={styles.buttonItem}>
            <Image source={Icons.feedback} style={styles.buttonIcons} />
            <Text style={styles.feedback}>Feedback</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </Pressable>

        <View style={{width: '90%', marginHorizontal: 20, marginVertical: 20}}>
          <Divider />
        </View>

        <Pressable onPress={handleAbout}>
          <View style={styles.buttonItem}>
            <Image source={Icons.about} style={styles.buttonIcons} />
            <Text style={styles.about}>About Us</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </Pressable>

        <View style={{width: '90%', marginHorizontal: 20, marginVertical: 20}}>
          <Divider />
        </View>

        <Pressable onPress={handleLogout}>
          <View style={styles.buttonItem}>
            <Image source={Icons.logout} style={styles.buttonIcons} />
            <Text style={styles.logout}>Log out</Text>
            <Image source={Icons.forward} style={styles.forwardIcon} />
          </View>
        </Pressable>
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
  profileContainer: {
    paddingTop: 30,
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  profilePic: {
    width: 96,
    height: 96,
  },
  profileInfo: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  fullName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  editProfileBtn: {
    marginTop: 10,
    marginLeft: 10,
    width: 119,
    height: 32,
  },
  container: {
    paddingTop: 50,
  },
  buttonItem: {
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  buttonIcons: {
    width: 28,
    height: 28,
    marginHorizontal: 10,
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    letterSpacing: 0.5,
    marginTop: 3,
  },
  help: {
    color: '#000',
    fontSize: 16,
    letterSpacing: 0.5,
    marginTop: 3,
    paddingRight: 200,
  },
  feedback: {
    color: '#000',
    fontSize: 16,
    letterSpacing: 0.5,
    marginTop: 3,
    paddingRight: 160,
  },
  about: {
    color: '#000',
    fontSize: 16,
    letterSpacing: 0.5,
    marginTop: 3,
    paddingRight: 165,
  },
  logout: {
    color: '#000',
    fontSize: 16,
    letterSpacing: 0.5,
    marginTop: 3,
    paddingRight: 180,
  },
  activeIcon: {
    width: 79,
    height: 23,
    marginTop: 5,
    marginHorizontal: 30,
  },
  forwardIcon: {
    width: 9,
    height: 14,
    marginTop: 5,
    marginLeft: 20,
  },
  footer: {
    paddingTop: 150,
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

export default Profile;
