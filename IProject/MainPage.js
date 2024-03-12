import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropdownMenu from './DropdownMenu';
import DropdownPlus from './DropdownPlus';

const HeaderRightButtons = () => {
    return (
      <View style={{ flexDirection: 'row', paddingRight : 40 }}>
        <DropdownPlus />
        <DropdownMenu />
      </View>
    );
  };

// 각 화면을 위한 컴포넌트 생성
function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
}

// 스택 네비게이터 생성
const Stack = createNativeStackNavigator();

export default function MainPage()
{
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: '홈',
              headerRight: () => <HeaderRightButtons />, }} // 여기에서 헤더 타이틀 설정
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create
({
    container :
    {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#E8D9FF"
    }
});