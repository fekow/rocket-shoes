import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { navigate } from '../../../services/rootNavigation';
// select serve pra acessar o state do redux
// put é basicamente o dispatch
// yield = await, mas nao posso fazer api.get direto, preciso usar o call
// all junta todos os listeners das actions
// takelatest é a forma de escutar as requests
// msg de erro flutuante
import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

/* UTILIZAR O SAGA SEMPRE QUE PRECISA DE VAZER ALGUMA VERIFICAÇÃO OU SIDE EFFECT
NA HORA DE VERIFICAR ALGUM DADO DO REDUX */
// similar a função async, chamada de generator, permite fazer mais coisas.

// ***IMPORTANTE*** DESESTRUTURAR A INFO QUE CHEGA
function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );
  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque.');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `products/${id}`);
    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
    navigate('Cart');
    // disparo minha ação com os dados do produto
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque.');
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}
export default all([
  /* se o usuario clicar varias vezes no botao antes de terminar o await,
  ele cancela a anterior e so pega a ultima para fazer a chamada api */
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  // aqui que eu escuto as actions, e se eu ver um add request rodo minha função.
]);
