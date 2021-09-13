import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  width: ${Dimensions.get('screen').width}px; /*very nice*/
  background: #191920;
  flex-direction: row;
`;
export const HomeButton = styled.TouchableOpacity``;
export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const CartButtom = styled.TouchableOpacity``;

export const ItemCount = styled.Text`
  background: #3949ab;
  position: absolute;
  top: 13px;
  right: 13px;
  color: #fff;
  border-radius: 16px;
  font-size: 12px;
  padding: 1px 5px;
`;
