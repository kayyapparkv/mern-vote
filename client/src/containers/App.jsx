import React,{Component} from 'react';
import {Provider} from 'react-redux';
import decode from 'jwt-decode';

import {store} from '../store';
import { setCurrentUser, addError, setToken } from '../store/actions';
import Auth from '../components/Auth';

if(localStorage.jwtToken){
    setToken(decode(localStorage.jwtToken));
    try{
        store.dispatch(setCurrentUser(localStorage.jwtToken));
    }catch(err){
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}

const App=()=>(
    <Provider store={store}>
        <Auth authType={'login'}/>
    </Provider>
)
export default App;