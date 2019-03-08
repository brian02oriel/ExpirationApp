import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './src/components/Login';
import ProductList from './src/components/ProductList';

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    ProductList: {
        screen: ProductList
    }
})

const Routes = createAppContainer(AppNavigator);

export default Routes;
