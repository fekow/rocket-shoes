<h1 align="center">
    Rocketshoes
</h1>

<h3 align="center">
E-commerce de sapatos
</h3>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a> | <a href="#books-guia-de-instalação-e-execução">Guia de instalação e execução</a> | <a href="#page_with_curl-licença">Licença</a> | <a href="#computer-versão-web">Versão Web</a> | <a href="#iphone-versão-mobile">Versão Mobile</a>
</p>

## :rocket: Sobre o projeto

<p>Loja Fictícia de sapatos desenvolvida a partir do desafio da rocketseat disponibilizado <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-07">aqui</a>.</p>

<p>Aplicação web feita utilizando o react e react-native com integração do redux e redux-saga para armazenar produtos no carrinho efazer controle de estoque, além de calcular e formatar valores. Utiliza um servidor fictício para carregar as fotos e informações dos produtos.</p>

<p>Aplicativo disponível nas versões:</p>
<h3>
 <ul>
    <li>Web</li>
    <li>Mobile</li>
 </ul>
</h3>

# :computer: Versão web:

![](.github/demo-web.gif)

## :computer: Tecnologias

- [ReactJS](https://reactjs.org/)
- [React router dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [React icons](https://react-icons.github.io/react-icons/)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Immer](https://immerjs.github.io/immer/docs/introduction)
- [Reactotron](https://github.com/infinitered/reactotron)
- [Babel](https://babeljs.io/)
- [Styled Components](https://styled-components.com/)
- [React-toastify](https://fkhadra.github.io/react-toastify/introduction)

# :iphone: Versão Mobile

<img src=".github/demo-mobile.gif">

## :computer: Tecnologias
    
- [React Native](https://reactnative.dev/)
- [React Navigation 5](https://reactnavigation.org/)
- [Axios](https://github.com/axios/axios)
- [React Native Gesture Handler](https://software-mansion.github.io/react-native-gesture-handler/)
- [Styled Components](https://styled-components.com/)
- [Yup](https://github.com/jquense/yup)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [ESLint-Airbnb](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Immer](https://immerjs.github.io/immer/docs/introduction)
- [Reactotron](https://github.com/infinitered/reactotron)
- [Styled Components](https://styled-components.com/)

## :books: Guia de instalação e execução

### Pré-requisitos

Para ambas versões:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= v10.20
- [Yarn](https://yarnpkg.com/)

Para a versao mobile: 
- Emulador ou Dispositivo físico

#### Acesse <a href="https://react-native.rocketseat.dev">aqui</a> a documentação da Rocketseat para montar seu ambiente Mobile.

### :bulb: Como executar

#### Versao mobile

- Clone o repositório,
- Execute ```yarn``` para instalar as dependências
- Usando um emulador rode  ```yarn android``` ou ```yarn ios``` dependendo do sistema que estiver usando.
- Para iniciar o aplicativo rode ```yarn start```
- Para utilizar a API ficticia, instale o modulo json-server com ```yarn global add json-server```.
- Rode ```json-server server.json -p 3333```

<strong>Com um dispositivo físico</strong>

<i>Tenha certeza que está com o modo desenvolvedor ativado e e a opção debugar USB ativada.</i>

- Conecte seu celular pelo cabo USB.
- Verifique se está tudo certo rodando ```adb devices``` e seu dispositivo aparecer como device.
- Se estiver usando um emulador rode  ```yarn android``` ou ```yarn ios``` dependendo do sistema que estiver usando.
- Para utilizar a API ficticia, instale o modulo json-server com ```yarn global add json-server```.
- Rode ```json-server server.json --host 192.168.0.7 -p 3333``` para rodar o servidor.
- Rode ```yarn start``` para iniciar o aplicativo

#### Versão Web

- Clone o repositório,
- Execute ```yarn``` para instalar as dependências
- Para utilizar a API ficticia, instale o modulo json-server com ```yarn global add json-server```.
- Rode ```json-server server.json -p 3333```
- Para iniciar o aplicativo rode ```yarn start```


## :page_with_curl: Licença

Esse projeto está sob a licença MIT. Veja o arquivo <a href="https://github.com/fekow/rocket-shoes/blob/master/LICENSE">LICENSE</a> para mais detalhes.
