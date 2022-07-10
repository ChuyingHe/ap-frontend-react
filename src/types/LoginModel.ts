export interface LoginContextInterface {
    loggedIn?: boolean,    
    userID?: string,
    userName?: string,
}

export interface LoginContextStrapi {
    // TODO: check the response
    loggedIn?: boolean,
    userID?: string,
    userName?: string,
}


export interface LoginStatus {
  login: boolean;
  setLogin: (status: boolean) => void;
}