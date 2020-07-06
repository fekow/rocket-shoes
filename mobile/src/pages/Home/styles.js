import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
`;

export const Product = styled.View`
  border-radius: 4px;
  background: #fff;
  flex: 1;
  padding: 10px;
  margin: 15px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  background: #ddd;
  margin: 0 auto;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2, // numero de linhas maximo do texto, cria ... automatico
})`
  font-size: 16px;
  text-align: center;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 24px;
  margin-bottom: 14px;
  font-weight: bold;
`;
export const ButtonDiv = styled.View`
  display: flex;
  background: rgba(0, 0, 0, 0.1);
  padding: 12px;
  align-items: center;
  flex-direction: row;
`;
export const PurchaseButton = styled.TouchableOpacity`
  border-radius: 4px;
  flex-direction: row;
  background: #7159c1;
  align-items: center;
  margin-top: auto;
`;

export const PurchaseText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
export const ProductQuantity = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;
