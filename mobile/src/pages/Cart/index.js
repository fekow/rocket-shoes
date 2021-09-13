import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Alert } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Container,
  Products,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductInfo,
  ProductDetails,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductQuantity,
  ProductSubTotal,
  Total,
  TotalText,
  TotalPrice,
  FinishCartButton,
  FinishText,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state =>
    state.cart.map(item => ({
      ...item,
      formatedPrice: formatPrice(item.price),
    }))
  );
  const total = useSelector(state =>
    state.cart.reduce(
      (totalSum, product) => totalSum + product.price * product.amount,
      0
    )
  );
  const formatedTotal = formatPrice(total);
  function increment(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  }
  function decrement(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount - 1));
  }
  return (
    <>
      {products.length <= 0 ? (
        <Container>
          <Total>
            <TotalPrice style={{ color: 'rgba(0,0,0,0.2)' }}>
              CARRINHO VAZIO.
            </TotalPrice>
            <ProductDetails />
            <Icon
              name="remove-shopping-cart"
              size={30}
              color={'rgba(0,0,0,0.2)'}
            />
          </Total>
        </Container>
      ) : (
        <Container>
          <Products>
            {products.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage
                    source={{
                      uri: product.image,
                    }}
                  />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.formatedPrice}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon name="delete-forever" size={24} color={'#3949ab'} />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton
                    onPress={() => decrement(product.id, product.amount)}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={'#3949ab'}
                    />
                  </ProductControlButton>
                  <ProductQuantity value={String(product.amount)} />
                  <ProductControlButton
                    onPress={() => increment(product.id, product.amount)}
                  >
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={'#3949ab'}
                    />
                  </ProductControlButton>
                  <ProductSubTotal>
                    {formatPrice(product.price * product.amount)}
                  </ProductSubTotal>
                </ProductControls>
              </Product>
            ))}
          </Products>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{formatedTotal}</TotalPrice>
          </Total>
          <FinishCartButton
            onPress={() =>
              Alert.alert(
                'Aviso',
                'Funcionalidade não existente nesse projeto.'
              )
            }
          >
            <FinishText>FINALIZAR PEDIDO</FinishText>
          </FinishCartButton>
        </Container>
      )}
    </>
  );
}
