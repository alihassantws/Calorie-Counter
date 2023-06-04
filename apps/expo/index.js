import { registerRootComponent } from 'expo'

import App from './App'
import {  Text, TextInput } from 'react-native';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App)
//This is to disable default font scaling
if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }
  
  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }