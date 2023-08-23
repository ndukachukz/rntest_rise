import {View, Text, FlatList, Pressable} from 'react-native';
import React, {memo, useMemo, useState} from 'react';

import styles from './style';
import Modal from '../modal';
import {height, scale, scaleHeight} from '../../constants';
import {SearchIconSvg, XSvg} from '../svgs';
import {Input} from '../form';
import {countryDialInfo} from '../../utils';

function searchCountries(query: string) {
  query = query.toLowerCase(); // Convert the query to lowercase for case-insensitive search
  return countryDialInfo.filter(country => {
    return (
      country.name.toLowerCase().includes(query) ||
      country.code.toLowerCase().includes(query) ||
      country.dial_code.includes(query)
    );
  });
}

const CountriesModal = ({
  setModalVisible,
  modalVisible,
  onSelect,
}: {
  setModalVisible: (bool: boolean) => void;
  modalVisible: boolean;
  onSelect: (country: Country) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const countries = useMemo(() => searchCountries(searchQuery), [searchQuery]);

  return (
    <Modal
      closeModal={() => setModalVisible(false)}
      modalVisible={modalVisible}
      modalStyles={{
        height: scaleHeight(height / 1.95),
      }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => setModalVisible(false)}>
            <XSvg width={scale(24)} height={scaleHeight(24)} />
          </Pressable>
        </View>
        <View style={styles.searchContainer}>
          <Input
            labelProps={{
              translateX: 30,
              inactiveTranslateX: 25,
            }}
            label="Search Countries"
            textInputProps={{
              style: {},
              value: searchQuery,
              onChangeText: text => setSearchQuery(text),
            }}
            iconLeft={() => (
              <SearchIconSvg width={scale(24)} height={scaleHeight(24)} />
            )}
            containerStyle={{width: '100%'}}
          />
        </View>

        <FlatList
          data={countries}
          renderItem={({item: country, index}) => (
            <Text
              style={styles.country}
              onPress={() => {
                onSelect(country);
                setModalVisible(false);
              }}>
              {country.flag} {'  '} {country.dial_code}
            </Text>
          )}
        />
      </View>
    </Modal>
  );
};

export default memo(CountriesModal);
