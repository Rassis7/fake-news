import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import {GOOGLE_IOS_CLIENT_ID, GOOGLE_WEB_CLIENT_ID} from 'react-native-dotenv';

export default function GoogleLogin({signIn, ...props}) {
  useEffect(
    () =>
      GoogleSignin.configure({
        webClientId: GOOGLE_WEB_CLIENT_ID,
        offlineAccess: true,
        hostedDomain: '',
        loginHint: '',
        forceConsentPrompt: true,
        accountName: '',
        iosClientId: GOOGLE_IOS_CLIENT_ID,
      }),
    [],
  );

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={signIn}
      {...props}
    />
  );
}
