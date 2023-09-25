import {Dimensions, Platform} from 'react-native';
// import { assets } from '../../react-native.config';
const {height, width} = Dimensions.get('screen');
export const sizes = {height, width};

export const Icons = {
  logoText: require('../assets/icons/Texpidea-text.png'),
  profile: require('../assets/icons/profile.png'),
  notification: require('../assets/icons/notification.png'),
  camera: require('../assets/icons/camera.png'),
  browse: require('../assets/icons/browse.png'),
  collage: require('../assets/icons/collage.png'),
  saved: require('../assets/icons/saved.png'),
  forward: require('../assets/icons/forward.png'),
  backBtn: require('../assets/icons/back.png'),
  editProfileBtn: require('../assets/icons/editProfile.png'),
  subscription: require('../assets/icons/subscription.png'),
  help: require('../assets/icons/help.png'),
  feedback: require('../assets/icons/feedback.png'),
  about: require('../assets/icons/about.png'),
  check: require('../assets/icons/tick.png'),
  active: require('../assets/icons/active.png'),
  logout: require('../assets/icons/logout.png'),
  youtube: require('../assets/icons/youtube.png'),
  facebook: require('../assets/icons/facebook.png'),
  whatsapp: require('../assets/icons/whatsapp.png'),
  instagram: require('../assets/icons/instagram.png'),
  linkedin: require('../assets/icons/linkedin.png'),
  checkBox: require('../assets/icons/checkboxWhite.png'),
  checkBoxBlue: require('../assets/icons/checkbox.png'),
  submit: require('../assets/icons/submit.png'),
  gallery: require('../assets/icons/gallery.png'),
};


export const Colors = {
  

  //whiteColor
  bText: '#000;',

  //redColor
  rText: 'red',

  //grayColor
  gText: 'rgba(155, 157, 157, 1)',

  //borderColor
  border: 'rgba(255, 255, 255, 0.30)',

  //selectColor
  select: '#2094FF',

  //greenText
  green: '#4ECB71',

  //yellowText
  yellow: '#F19E38',

  //placeholderColor
  placeholderClr: '#C6C6C6',

  //blueColor
  blue: 'rgba(0, 110, 255, 1)',

  //tintColor
  tint: '#FFF',
};

// export const Fonts = {
//     'regular': Nunito-Regular,
//     'bold': Nunito-Bold

// };