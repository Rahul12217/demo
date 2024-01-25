import {store} from './Redux/index'
import { Provider } from 'react-redux';

export default (props) =>{
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

