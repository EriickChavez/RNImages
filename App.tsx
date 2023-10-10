import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Infrastructure/store/store';
import NavigationRoute from './src/Navigation/NavigationRoute';
import 'react-native-gesture-handler';
interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <Provider store={store}>
      <NavigationRoute />
    </Provider>
  );
};

export default App;
