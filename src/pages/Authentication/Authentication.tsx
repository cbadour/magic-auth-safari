import React, {useContext, useState} from 'react';
import {magicAuthContext} from "../../providers/magicAuthProvider/magicAuthContext";
import {useHistory} from "react-router";

const Authentication: React.FC = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | undefined>('');
    const {magic} = useContext(magicAuthContext);
    const {push} = useHistory();

    const login = async (email: string): Promise<void> => {
        try {
            await magic?.auth.loginWithEmailOTP({email});
        } catch (error: any) {
            setError(error.message);
        }
    }

    const authenticate = async () => {
        if (!email) {
            return;
        }

        await login(email);
        push('/dashboard');
    }

    return (
        <div>
            <label>Email Address</label>
            <br/>
            <input
                placeholder='Please enter your email address'
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}/>
            <br/>
            {error && <p>{error}</p>}
            <br/>
            <button
                onClick={authenticate}>
                Continue with email
            </button>
        </div>
    )
}

export default Authentication