import React, {useContext, useEffect, useState} from "react";
import {magicAuthContext} from "../providers/magicAuthProvider/magicAuthContext";
import {Redirect, Route} from "react-router-dom";

const PrivateRoute: React.FC<any> = (props) => {

    const {magic} = useContext(magicAuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        magic?.user.isLoggedIn().then(result => {
            setIsLoggedIn(result)
        })
    }, []);

    return (
        <Route {...props}>
            {
                isLoggedIn ?
                    props.children :
                    <Redirect to="/login"/>
            }
        </Route>
    )
}

export default PrivateRoute;