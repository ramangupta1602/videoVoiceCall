import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, VideoCallScreen} from '../screens/index'
const Routes = createNativeStackNavigator({
  screens: {
    Home: Home,
    VideoCallScreen: VideoCallScreen,
  },
});

export default Routes;
