import React from 'react';

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.requests({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            {/* Left Side - Socials */}
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Email</div>

            {/* Right Side - Sections */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {/* Connect */}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}
        </div>
    );
};

export default NavBar; 