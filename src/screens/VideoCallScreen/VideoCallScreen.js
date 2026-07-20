import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import MyAppKeys from '../../constants/MyAppKeys'
import { useNavigation } from '@react-navigation/native'

const VideoCallScreen = () => {

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
       <ZegoUIKitPrebuiltCall
                appID={MyAppKeys.AppID}
                appSign={MyAppKeys.AppSign}
                userID={'12345'} // userID can be something like a phone number or the user id on your own user system. 
                userName={"App Stack Engineer"}
                callID={'12345'} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID, reason, duration) => {
                        // If you're using React Navigation 6, use the navigate method instead of popTo.
                       navigation.goBack()
                    },
                }}
            />

    </View>
  )
}

export default VideoCallScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
  },
})