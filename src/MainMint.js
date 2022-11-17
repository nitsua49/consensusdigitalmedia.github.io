import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import consensusNFT from './ConsensusNFT.json';

const consensusNFTAddress = "https://goerli.etherscan.io/address/0xcfEd46022d6A0F78fa78B071feeC2ebAC7470d24";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                consensusNFTAddress,
                consensusNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount <= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return(
        <div>
            <h1>Consensus Digital Media</h1>
            <p>Be part of our exclusive Web 3 membership and get access to our exclusive stories and other membership benefits in the future. Mint your membership NFT today!</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
        </div>
    );
};

export default MainMint; 