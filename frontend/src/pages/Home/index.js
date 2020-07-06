import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { Productlist } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((amountCalc, product) => {
      amountCalc[product.id] = product.amount;
      /* to setando a chave do amount como id, se nao existe o valor ele cria uma
     nova chave com esse nome com o amount do state(feito pelo @CART/ADD),
    se a chave ja existe, atualiza com o valor do amount(feito pelo @cart/UPDATE). */
      return amountCalc;
    }, {})
  );
  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`products`);
      const data = response.data.map(product => ({
        ...product, // pego item por item tudo q tem dentro e adiciono o formatado
        priceFormatted: formatPrice(product.price),
      })); // faço aqui pra nao por uma função no render, é ruim
      setProducts(data);
    }
    loadProducts();
  }, []);

  // uso isso ao invez do mapdispatchtoprops, ja pego a função direto
  const dispatch = useDispatch();

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }
  return (
    <Productlist>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} colo="#fff" />{' '}
              {amount[product.id] || 0}
              {/* aqui pego o objeto amount e seleciono a chave com valor tal,
                 tipo amount.id, so que com o valor no lugar do id, que é o nome da chave
                 e se o objeto estiver vazio tem o ||(or) e fica igual á zero. */}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </Productlist>
  );
}
