import decode from 'jwt-decode';

class AuthService {

    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    
        window.location.assign('/');
      }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
            return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

};

export default new AuthService();