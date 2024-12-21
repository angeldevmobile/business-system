import React from 'react'
import * as WebBrowser from 'expo-web-browser';

export const  useWarmUpBrowser =() => {
  React.useEffect(() => {
    void WebBrowser.coolDownAsync();
    return () => {
      void WebBrowser.coolDownAsync();
      };
  }, []);
};