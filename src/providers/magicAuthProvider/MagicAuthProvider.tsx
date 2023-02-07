import {Magic} from "magic-sdk";
import {magicAuthContext} from "./magicAuthContext";
import React, {ReactNode} from "react";

const MagicAuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <magicAuthContext.Provider value={{
            magic: new Magic('pk_live_4761E18BF79E0D3E', {
                network: {
                    rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
                    chainId: 43113
                }
            })
        }}>
            {children}
        </magicAuthContext.Provider>
    )
}

export default MagicAuthProvider;