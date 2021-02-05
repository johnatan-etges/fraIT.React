import React, { createContext, useReducer} from 'react';
import api from '../services/api';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    expiration: null,
};

function createInitialState() {
    const user = JSON.parse(localStorage.getItem('@fraIT/user'));
    const token = JSON.parse(localStorage.getItem('@fraIT/token'));
    const expiration = JSON.parse(localStorage.getItem('@fraIT/expiration'));
    if (user && token) {

        if (Date.now()/1000 < Number(expiration)) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return {
                isAuthenticated: true,
                user,
                token,
                expiration,

            }
        }        
    }
    
    return {
        isAuthenticated: false,
        user: null,
        token: null,
        expiration: null,
    }
}

const reducer = (state, action) => {
    switch (action.type) {

        case "@LOGIN" :
            localStorage.setItem("@fraIT/user", JSON.stringify(action.payload.user));
            localStorage.setItem("@fraIT/token", JSON.stringify(action.payload.token));
            localStorage.setItem("@fraIT/expiration", JSON.stringify(action.payload.expiration));
           
            api.defaults.headers.authorization = `Bearer ${action.payload.token}`;

            return {
                ...state,                             
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                expiration: action.payload.expiration,
            };
        
        case "@LOGOUT" :
            //localStorage.clear();
            localStorage.removeItem('@fraIT/user');
            localStorage.removeItem('@fraIT/token');
            localStorage.removeItem('@fraIT/expiration');

            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                expiration: null,                
            };
        
        default:
            return state;
    }
}

export const AuthContext = createContext();

export function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState,createInitialState);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch}}
            >
            {children}
        </AuthContext.Provider>
    );
}