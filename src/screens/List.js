import React, { useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const items = [
  { id: 1, name: 'React Native' },
  { id: 2, name: 'Expo' },
  { id: 3, name: 'React Navigation' },
];

const List = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ onPress, tintColor }) => {
        return (
          <MaterialIcons
            name="chevron-left"
            size={30}
            style={{ marginLeft: 11 }}
            color={tintColor}
            onPress={onPress}
          />
        );
      },
      headerRight: ({ tintColor }) => {
        return (
          <MaterialIcons
            name="home"
            size={30}
            style={{ marginRight: 11 }}
            color={tintColor}
            onPress={() => navigation.popToTop()}
          />
        );
      },
    });
  }, []);

  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(({ id, name }) => (
        <Button
          key={id}
          title={name}
          onPress={() => navigation.navigate('Chat', { id, name })}
        />
      ))}
    </Container>
  );
};

export default List;
