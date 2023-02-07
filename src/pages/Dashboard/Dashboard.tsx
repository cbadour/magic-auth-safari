import React, {useContext} from "react";
import {magicAuthContext} from "../../providers/magicAuthProvider/magicAuthContext";
import {useHistory} from "react-router";

const Dashboard: React.FC = () => {

    const {magic} = useContext(magicAuthContext);
    const {push} = useHistory();

    return (
        <div>
            <h4>Welcome to the dashboard</h4>
            {magic?.user.isLoggedIn && <p>Your are logged in successfully</p>}

            <br/>
            <br/>
            <button onClick={async () => {
                await magic?.user.logout();
                push('/login');
            }}>
                Logout
            </button>
        </div>
    )
}

export default Dashboard;