import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

// 드랍 다운 메뉴 컴포넌트
const DropdownPlus = () => {
    const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text style={{ fontStyle: "Bold" , fontSize: 34, paddingRight : 60 }}>+</Text> {/* 드랍 다운 버튼 */}
        </TouchableOpacity>
        <Modal visible={isVisible} transparent={true} animationType="fade" onRequestClose={() => setIsVisible(false)}>
            <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsVisible(false)} >
                <View style={styles.dropdownMenu}>
                    {/* 메뉴 아이템들 */}
                    <TouchableOpacity onPress={() => console.log('즐겨찾기 설정')}>
                        <Text style={styles.menuItem}>즐겨찾기 설정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('태그 추가')}>
                        <Text style={styles.menuItem}>태그 추가</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('태그 편집')}>
                        <Text style={styles.menuItem}>태그 편집</Text>
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

export default DropdownPlus;