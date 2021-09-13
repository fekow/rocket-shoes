import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View`
  background: #fff;
`;
export const ProductInfo = styled.View`
  flex-direction: row;
`;
export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;
export const ProductDetails = styled.View`
  margin: 10px;
  justify-content: center;
  flex: 1;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2, // numero de linhas maximo do texto, cria ... automatico
})`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  background: #eee;
  align-content: space-between;
  border-radius: 4px;
  padding: 7px 0;
`;

export const ProductControlButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ProductQuantity = styled.TextInput.attrs({
  readonly: true,
  editable: false,
})`
  color: #000;
  background: #fff;
  border-radius: 4px;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  min-width: 52px;
  max-height: 30px;
`;

export const ProductSubTotal = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  flex: 1;
  padding-right: 5px;
`;

export const Total = styled.View`
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const TotalText = styled.Text`
  color: #888;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const FinishCartButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #3949ab;
  border-radius: 4px;
`;

export const FinishText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 0;
`;
