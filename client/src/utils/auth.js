import decode from 'jwt-decode';

class Auth {
    getProfile() {
        return decode(this.getToken());
    }

    getID() {
        const auth = this.getProfile();
        return auth.data._id;
    }

    getDisplayName() {
        const auth = this.getProfile();
        return `${auth.data.firstName} ${auth.data.lastName}`;
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
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

    tokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        
        // window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new Auth();