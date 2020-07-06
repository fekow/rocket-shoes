import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  Logo,
  CartButtom,
  HomeButton,
  ItemCount,
} from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Wrapper>
      <Container>
        <HomeButton onPress={() => navigation.navigate('Home')}>
          <Logo />
        </HomeButton>
        <CartButtom onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
        </CartButtom>
        <ItemCount>{cartSize || 0}</ItemCount>
      </Container>
    </Wrapper>
  );
}

export default Header;
