import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import MainPage from "./MainPage";

export default function Loading()
{
    var [isLoading, setLoading] = useState(true);

    useEffect(() => {
      async function prepare() 
      {
        // 필요한 초기화 로직을 추가
  
        // 2초 후 로딩 상태 변경
        setTimeout(async () => {
          setLoading(false); // 로딩 상태를 false로 설정하여 메인 페이지를 표시
          await SplashScreen.hideAsync();
        }, 2000);
      };
  
      prepare();
    }, []);
    
    if (isLoading)
    {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>Start Loading Page</Text>
            </View>
        );
    }
    else
    {
        return <MainPage />;
    }

}

const styles = StyleSheet.create
({
    container: 
    {
        flex: 1,   
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text :
    {
        color: "#2c2d2c",
        fontSize: 30
    }
});