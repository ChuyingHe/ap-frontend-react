import { createContext, useEffect, useState } from "react";

interface LoginContextInterface {
    loggedIn?: boolean,    
    userID?: string,
    userName?: string,
}

interface LoginContextStrapi {
    // TODO: check the response
    loggedIn?: boolean,
    userID?: string,
    userName?: string,
}


export const LoginContext = createContext<LoginContextInterface | null>(null);


export const WithLoginContext = ({children}:{ children: JSX.Element | JSX.Element[];}) => {
    // Note: initial value can be {} ONLY when all the variables are OPTIONAL (with "?")
    const [loginCtx, setLoginCtx] = useState<LoginContextInterface>({});

    useEffect(()=>{
        fetchLoginStatus();
    },[]);

    async function fetchLoginStatus():Promise<void> {
        // TODO: replace the dummy login judgement with real axios request

        // try {
        //     const response: LoginContextStrapi = await axios.get(`${API_URL}?populate=${POPULATE}`);
        //     if(!response?) {
        //         return;
        //     }
        // } catch (error) {
        //    console.error(`Error fetching loginStatus: ${(error as Error).message}`, error);
        // }

        setLoginCtx({
            loggedIn: false,
            userID: "007",
            userName: "Chuying He",
        });
    }

    return (
        <LoginContext.Provider value={loginCtx}>{children}</LoginContext.Provider>
    );
}