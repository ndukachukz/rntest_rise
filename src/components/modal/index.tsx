import React, {PropsWithChildren} from 'react';
import {
  Modal as RnModal,
  Pressable,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface Props {
  modalVisible?: boolean;
  closeModal(params?: any): void;
  modalStyles?: ViewStyle;
}

export default function Modal({
  modalVisible,
  closeModal,
  children,
  modalStyles,
}: PropsWithChildren<Props>) {
  return (
    <RnModal
      animationType="slide"
      transparent={modalVisible}
      visible={modalVisible}
      onRequestClose={() => closeModal()}>
      <Pressable style={[styles.centered]}>
        <View style={[styles.modal, modalStyles]}>{children}</View>
      </Pressable>
    </RnModal>
  );
}
