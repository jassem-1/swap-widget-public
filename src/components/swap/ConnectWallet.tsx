import React from 'react';
import Onboard from '@web3-onboard/core';
import injectedModule from '@web3-onboard/injected-wallets';
interface ConnectWalletButtonProps {
  buttonText?: string;
  buttonClass?: string;
}

// Use the interface with the React functional component
const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  buttonText = "Connect wallet",
  buttonClass = ""
}) => {
    const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/0b289d0c1b9743e9b48a61dbc0422e55'

    const injected = injectedModule()
    
    const onboard = Onboard({
      wallets: [injected],
      chains: [
        {
          id: '0x1',
          token: 'ETH',
          label: 'Ethereum Mainnet',
          rpcUrl: MAINNET_RPC_URL
        },
        {
          id: 42161,
          token: 'ARB-ETH',
          label: 'Arbitrum One',
          rpcUrl: 'https://rpc.ankr.com/arbitrum'
        },
        {
          id: '0xa4ba',
          token: 'ARB',
          label: 'Arbitrum Nova',
          rpcUrl: 'https://nova.arbitrum.io/rpc'
        },
        {
          id: '0x2105',
          token: 'ETH',
          label: 'Base',
          rpcUrl: 'https://mainnet.base.org'
        },
        {
          id: '0xa4ec',
          token: 'ETH',
          label: 'Celo',
          rpcUrl: 'https://1rpc.io/celo'
        },
        {
          id: 666666666,
          token: 'DEGEN',
          label: 'Degen',
          rpcUrl: 'https://rpc.degen.tips'
        }
      ]
    })
    
    const connectWallet = async () => {
      const wallets = await onboard.connectWallet();
    };

  return (
    <button
      // Combine default styles with optional additional classes
      className={`px-2 py-3 bg-[#1FC7D4] w-full flex justify-center font-semibold text-white rounded-2xl ${buttonClass}`}
      onClick={connectWallet}
    >
      {buttonText}
    </button>
  );
};

export default ConnectWalletButton;
