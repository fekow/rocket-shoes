import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdRemoveShoppingCart,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount), // crio um novo prop com o calculo pronto
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const dispatch = useDispatch();
  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length <= 0 ? (
        <div style={{ textAlign: 'center' }}>
          <MdRemoveShoppingCart size={40} color="rgba(0,0,0,0.4)" />
          <br />
          <br />
          <h1 style={{ color: 'rgba(0,0,0,0.4)' }}>CARRINHO VAZIO</h1>
        </div>
      ) : (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th aria-label="image column" />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th aria-label="delete column" />
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button onClick={() => decrement(product)} type="button">
                        <MdRemoveCircleOutline size={20} color="#0094cc" />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button onClick={() => increment(product)} type="button">
                        <MdAddCircleOutline size={20} color="#0094cc" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                      type="button"
                    >
                      <MdDelete size={20} color="#0094cc" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <footer>
            <button type="button">Finalizar pedido</button>
            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      )}
    </Container>
  );
}
