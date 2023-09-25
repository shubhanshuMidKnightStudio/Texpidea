import {
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  TextInput,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Icons, Colors} from '../themes/ThemePath';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [gst, setGst] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    // navigation.navigate();
  };

  const handleEditPicture = () => {
    // navigation.navigate();
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.heading}>
        <View style={styles.headingContent}>
          <Pressable onPress={handleBack}>
            <Image source={Icons.backBtn} style={styles.back} />
          </Pressable>

          <Text style={styles.text}>Edit Profile</Text>

          <Pressable onPress={handleSave}>
            <Image source={Icons.check} style={styles.notification} />
          </Pressable>
        </View>
      </View>

      <View style={styles.profile}>
        <Pressable onPress={handleEditPicture}>
          <Image source={Icons.profile} style={styles.profilePic} />
          <View style={styles.galleryButton}>
            <Image source={Icons.gallery} style={styles.gallery} />
          </View>
        </Pressable>
        <Text style={styles.number}>512 x 512</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.profileItem}>Name</Text>
        <View style={styles.pContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={Colors.placeholderClr}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        <Text style={styles.profileItem}>Email address</Text>
        <View style={styles.pContainer}>
          <TextInput
            style={styles.input}
            placeholder="abcd@gmail.com"
            placeholderTextColor={Colors.placeholderClr}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={styles.profileItem}>Phone number</Text>
        <View style={styles.pContainer}>
          <TextInput
            style={styles.input}
            placeholder="0000000000"
            placeholderTextColor={Colors.placeholderClr}
            value={phoneNo}
            onChangeText={setPhoneNo}
          />
        </View>
        <Text style={styles.profileItem}>Company Name</Text>
        <View style={styles.pContainer}>
          <TextInput
            style={styles.input}
            placeholder="Company Name"
            placeholderTextColor={Colors.placeholderClr}
            value={company}
            onChangeText={setCompany}
          />
        </View>
        <Text style={styles.profileItem}>Address</Text>
        <View style={styles.pContainer}>
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor={Colors.placeholderClr}
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <Text style={styles.profileItem}>GST number</Text>
        <View style={styles.pContainer}>
          <TextInput
            style={styles.input}
            placeholder="GST number"
            placeholderTextColor={Colors.placeholderClr}
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <Text style={styles.profileItem}>Password</Text>
        <View style={styles.pContainer}>
          <TextInput
            style={styles.input}
            placeholder="*********"
            placeholderTextColor={Colors.placeholderClr}
            value={password}
            onChangeText={setPassword}
          />
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
  profile: {
    paddingTop: 40,
    alignItems: 'center',
  },
  profilePic: {
    height: 96,
    width: 96,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: 'rgba(155, 157, 157, 1)',
  },
  galleryButton: {
    position: 'absolute',
    borderWidth: 2.5,
    borderRadius: 50,
    borderColor: 'rgba(155, 157, 157, 1)',
    backgroundColor: '#EBF3FD',
    paddingHorizontal: 4,
    paddingVertical: 4,
    bottom: 0,
    right: 0,
  },
  gallery: {
    height: 20,
    width: 20,
  },
  number: {
    color: 'rgba(155, 157, 157, 1)',
    fontSize: 12,
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  profileItem: {
    color: '#000',
    fontSize: 18,
    paddingTop: 15,
  },
  pContainer: {
    alignItems: 'center',
  },
  input: {
    borderRadius: 8,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(155, 157, 157, 1)',
    paddingHorizontal: 10,
    backgroundColor: '#E9E9E9',
    paddingVertical: 6,
    width: '100%',
    color:'black',
  },
});

export default EditProfile;
