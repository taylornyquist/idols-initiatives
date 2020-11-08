import decode from 'jwt-decode';

class AuthService {

    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    
        window.location.assign('/');
      }

};

export default new AuthService();