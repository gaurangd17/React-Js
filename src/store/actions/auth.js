// import axios from 'axios'

import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, localId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: localId, 
        token: idToken
    }
}

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        errror: err
    }
}

export const logout = () => {
    // localStorage.removeItem('token')
    // localStorage.removeItem('expirationDate')
    // localStorage.removeItem('userId')
    return{
        type: actionTypes.AUTH_INITIATE_LOGOUT
    }
}

export const logoutSucceed = () => {
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch(logout());
    //     }, expirationTime * 1000)
    // }

    return{
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
}

export const auth = (emailId, pass, isSignup) => {
    return {
    type: actionTypes.AUTH_USER,
    emailId: emailId,
    pass: pass,
    isSignup: isSignup
}
//     return dispatch => {
//         dispatch(authStart());
        
//         const authData = {
//             email: emailId,
//             password: pass,
//             returnSecureToken: true
//         }; 

//         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADqcJ2Kga3SLu51fbcD-XN2a4uMLbA9LE';

//         if(!isSignup){
//             url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADqcJ2Kga3SLu51fbcD-XN2a4uMLbA9LE';
//         }

//         axios.post(url, authData)
//             .then(response => {
//                 console.log(response)
//                 const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
//                 localStorage.setItem('token', response.data.idToken)
//                 localStorage.setItem('expirationDate', expirationDate)
//                 localStorage.setItem('userId', response.data.localId)
//                 dispatch(authSuccess(response.data.idToken, response.data.localId))
//                 dispatch(checkAuthTimeout(response.data.expiresIn))
//             })
//             .catch(err => {
//                 console.log(err)
//                 dispatch(authFail(err.response.data.error))
//             })
//     }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return{
        type: actionTypes.AUTH_CHECK_STATE
    }
    // return dispatch => {
    //     const token = localStorage.getItem('token')
    //     if(!token){
    //         dispatch(logout())
    //     } else {
    //         const expirationDate = new Date(localStorage.getItem('expirationDate'))
    //         if(expirationDate > new Date()){
    //             const userId = localStorage.getItem('userId')
    //             dispatch(authSuccess(token,userId))
    //             dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
    //         } else {
    //             dispatch(logout())
    //         }
            

    //     }
    // }
}