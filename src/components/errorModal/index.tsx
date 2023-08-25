import {View, Text, FlatList, Pressable} from 'react-native';
import React, {memo} from 'react';

import Modal from '../modal';
import {height, scaleHeight} from '../../constants';
import {useAppDispatch} from '../../hooks';
import {setErrorModal} from '../../features/app/slice';

const ErrorModal = ({modalVisible}: {modalVisible: boolean}) => {
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setErrorModal(null));
  };
  return (
    <Modal
      closeModal={() => onClose()}
      modalVisible={modalVisible}
      modalStyles={{
        height: scaleHeight(height / 1.95),
      }}>
      <View>
        <Text>An Error occured</Text>
        <Pressable onPress={() => onClose()}>
          <Text>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default memo(ErrorModal);
