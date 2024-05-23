export function getToken(identifier = "token") {
  return localStorage.getItem(identifier);
}

export function setToken(token,  identifier="token" ) {
    localStorage.setItem(identifier, token);
}

// just in case 
export function removeToken( identifier="token" ) {
    localStorage.removeItem(identifier);
}