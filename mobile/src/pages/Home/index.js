import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductImage,
  ProductPrice,
  PurchaseButton,
  ProductName,
  PurchaseText,
  ButtonDiv,
  ProductQuantity,
} from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;
      return amountSum;
    }, {})
  );

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }
    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductName>{item.title}</ProductName>
              <ProductPrice>{formatPrice(item.price)}</ProductPrice>
              <PurchaseButton onPress={() => handleAddProduct(item.id)}>
                <ButtonDiv>
                  <Icon name="add-shopping-cart" color="#FFF" size={24} />
                  <ProductQuantity>
                    {Number(amount[item.id]) || 0}
                  </ProductQuantity>
                </ButtonDiv>
                <PurchaseText>ADICIONAR</PurchaseText>
              </PurchaseButton>
            </Product>
          );
        }}
        keyExtractor={product => String(product.id)}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
