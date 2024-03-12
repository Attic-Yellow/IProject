import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

// 드랍 다운 메뉴 컴포넌트
const DropdownMenu = () => {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text style={{ fontStyle: "Bold" ,fontSize: 32 }}>⋮</Text> {/* 드랍 다운 버튼 */}
        </TouchableOpacity>
        <Modal visible={isVisible} transparent={true} animationType="fade" onRequestClose={() => setIsVisible(false)}>
            <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsVisible(false)} >
                <View style={styles.dropdownMenu}>
                    {/* 메뉴 아이템들 */}
                    <TouchableOpacity onPress={() => console.log('프로필')}>
                        <Text style={styles.menuItem}>프로필</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('설정')}>
                        <Text style={styles.menuItem}>설정</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 60,
    marginRight: 10,
  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});

export default DropdownMenu;