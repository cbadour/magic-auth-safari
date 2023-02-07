import React, {useContext, useMemo} from "react";
import {magicAuthContext} from "../../providers/magicAuthProvider/magicAuthContext";

const Dashboard: React.FC = () => {

    const {magic} = useContext(magicAuthContext);

    return (
        <div>
            <h4>Welcome to the dashboard</h4>
            {magic?.user.isLoggedIn && <p>Your are logged in successfully</p>}
        </div>
    )
}

export default Dashboard;