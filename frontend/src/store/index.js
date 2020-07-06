import { createStore, applyMiddleware, compose } from 'redux';
// middleware é pra aplicar nos reducers, compose é pra juntar duas configs, nocaso a enhancer tb
import createSagaMiddleware from 'redux-saga';
// como criar midleware pra usar no redux
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
// passo o monitor do saga
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
// mando a config do reactotron no middleware
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});
// enhancer existe pra configurar o reactotron.
const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);
// o applymiddleware abre para o saga passar os middlewares dele dentro do redux
const store = createStore(rootReducer, enhancer);
// depois de configurado, posso passar minhas sagas...
sagaMiddleware.run(rootSaga);

export default store;
