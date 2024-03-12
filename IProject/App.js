import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Loading from "./Loading";

// 스플래시 스크린이 자동으로 숨겨지지 않도록 방지
SplashScreen.preventAutoHideAsync();

export default function App() 
{

  if (Loading != 0)
  {
    return <Loading />; 
  }
}
