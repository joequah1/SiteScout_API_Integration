import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
    loginUser : (jwt) => {
        localStorage.setItem('jwt', jwt);
        
        AppDispatcher.dispatch({
            actionType : 'LOGIN_USER',
            jwt : jwt
        })
    },
    
    logoutUser : () => {
        localStorage.removeItem('jwt');
        
        AppDispatcher.dispatch({
            actionType: 'LOGOUT_USER'
        });
    }
}