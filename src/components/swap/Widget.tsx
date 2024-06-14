import React, { useState } from "react";
import { Token, Blockchain, Data } from "../../types/type";
import { Input, Radio } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { LuSettings2 } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";
import { FaRegChartBar } from "react-icons/fa";
import warning from "./../../assets/warning.svg";
import "./style.css";
import switcButton from "./../../assets/switching.svg";
import TokenDisplay from "../TokenDisplay";
import { motion, AnimatePresence } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";
import { MdKeyboardArrowLeft } from "react-icons/md";

import ConnectWalletButton from "./ConnectWallet";

interface WidgetProps {
  onChartIconClick: () => void;
}
const Widget: React.FC<WidgetProps> = ({ onChartIconClick }) => {
  const [slippage, setSlippage] = useState<number>(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState<number | null>(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState<number | null>(null);
  const [selectedBlockchain, setSelectedBlockchain] =
    useState<string>("Ethereum"); // Assuming Ethereum is the default blockchain

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isRotated, setIsRotated] = useState<boolean>(false);

  const data: Data = require("../../data/TokenList.json");
  const blockchainOptions = data.blockchains;

  const [tokenOne, setTokenOne] = useState<Token>(
    blockchainOptions[0].tokens[0]
  );
  const [tokenTwo, setTokenTwo] = useState<Token>(
    blockchainOptions[1].tokens[0]
  );
  const [blockchainOne, setBlockchainOne] = useState<Blockchain>(
    blockchainOptions[0]
  );
  const [blockchainTwo, setBlockchainTwo] = useState<Blockchain>(
    blockchainOptions[1]
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [changeToken, setChangeToken] = useState<number>(1);
  const [changeBlockchain, setChangeBlockchain] = useState<number>(1);
  const [isWalletClicked, setIsWalletClicked] = useState<boolean>(false);

  const changeAmountOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || isNaN(parseFloat(value))) {
      setTokenOneAmount(null);
      setTokenTwoAmount(null); // Set tokenTwoAmount to null as well if tokenOneAmount is null
    } else {
      const newValue = parseFloat(value);
      setTokenOneAmount(newValue);
      setTokenTwoAmount(newValue * 3.14); // Automatically set tokenTwoAmount based on tokenOneAmount
    }
  };

  const switchTokens = () => {
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    const one = tokenOne;
    const two = tokenTwo;
    const Bone = blockchainOne;
    const Btwo = blockchainTwo;
    setBlockchainOne(Btwo);
    setBlockchainTwo(Bone);
    rotateImage();
    setTokenOne(two);
    setTokenTwo(one);
  };

  const openModal = (id: number) => {
    setChangeToken(id);
    setChangeBlockchain(id);
    setIsOpen(true);
  };

  const openWallets = () => {
    setIsWalletClicked(true);
  };
  const selectBlockchain = (name: string) => {
    setSelectedBlockchain(name);
  };

  function CloseModal() {
    if (isOpen || isWalletClicked) {
      setIsOpen(false);
      setIsWalletClicked(false);
    }
  }

  const filteredTokens = selectedBlockchain
    ? blockchainOptions.find((b) => b.name === selectedBlockchain)?.tokens || []
    : [];

  function modifyToken(i: number) {
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
    if (changeToken === 1) {
      setTokenOne(filteredTokens[i]);
    } else {
      setTokenTwo(filteredTokens[i]);
    }
    setIsOpen(false);
  }

  function modifyBlockchain(i: number) {
    if (changeBlockchain === 1) {
      setBlockchainOne(blockchainOptions[i]);
    } else {
      setBlockchainTwo(blockchainOptions[i]);
    }
  }

  const rotateImage = () => setIsRotated(!isRotated);
  const handleSlippageChange = (e: RadioChangeEvent) => {
    setSlippage(parseFloat(e.target.value));
  };
  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
  const resetTokenAmounts = () => {
    setTokenOneAmount(null);
    setTokenTwoAmount(null);
  };
  const [selectedButton, setSelectedButton] = useState('Auto');

  const handleButtonClick = (value: string) => {
    setSelectedButton(value);
  };

  return (
    <div
      className="relative  text-white max-w-[530px] blur-background px-6 py-2 bg-black bg-opacity-25 overflow-hidden shadow-lg 
     pb-4 rounded-2xl flex flex-col items-center justify-center border border-white "
    >
      <div
        className={`flex flex-col justify-start  items-start gap-y-1  rounded-2xl  relative ${
          isOpen || isWalletClicked ? "filter blur-sm bg-black bg-opacity-30" : ""
        }`}
        onClick={() => CloseModal()}
      >
        <div className="w-[500px] rounded-2xl flex flex-col justify-start items-start py-4 px-2 gap-y-16 ">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-start justify-start">
              <h4 className="font-semibold exo-semibold text-xl">SWAP</h4>
              <h6 className="exo-light"> Trade tokens in an instant</h6>
            </div>
            <div className="flex items-center gap-x-2">
              
                <LuSettings2    onClick={() => openWallets()}/>
         
            
                <TfiReload onClick={resetTokenAmounts} />
            
             
  <FaRegChartBar  onClick={onChartIconClick}/>

             
            </div>
          </div>
          <div className="relative justify-center w-full items-center flex flex-col gap-y-4 h-80">
            <div className="absolute top-[70px] w-full">
              <Input
                placeholder="0"
                value={tokenOneAmount !== null ? tokenOneAmount.toString() : ""}
                onChange={changeAmountOne}
              />
            </div>

            <TokenDisplay
              BlockchainItem={blockchainOne}
              token={tokenOne}
              openModal={() => openModal(1)} // Pass '1' for tokenOne
              id="1"
              top="0" // Adjust these values as needed
              left="0"
            />

            <div className="absolute bottom-0 w-full">
              <Input
                placeholder="0"
                value={tokenTwoAmount !== null ? tokenTwoAmount.toString() : ""}
                disabled
                onChange={() => {}}
              />
            </div>

            <TokenDisplay
              BlockchainItem={blockchainTwo}
              token={tokenTwo}
              openModal={() => openModal(2)} // Pass '2' for tokenTwo
              id="2"
              top="12" // Adjust these values as needed
              left="0"
            />
            <div className="flex items-center justify-center w-[90%] absolute top-[130px] right-4 ">
              <div className="flex-1 border-t border-gray-300 w-full"></div>
              <img
                src={switcButton}
                alt="switchbutton"
                className={`transition-transform duration-300 w-20 h-20 ${
                  isRotated ? "rotate-180" : ""
                }`}
                onClick={() => switchTokens()}
              />
              <div className="flex-1 border-t border-gray-300 w-full"></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 w-full mb-4"></div>
        <div className="flex flex-col w-full justify-center items-center gap-y-2">
          <div className="flex justify-between w-full items-center">
            <h1 className="exo-semibold">minimum received</h1>
            <span className="exo-bold">$26.2000</span>
          </div>
          <div className="flex justify-between w-full items-center">
            <h1 className="exo-semibold">Price</h1>
            <span className="exo-bold">1 BTC = 70.000 USDT</span>
          </div>
          <div className="flex text-[#DA667C] justify-between w-full items-center">
            <h1 className="exo-semibold">Price Impact</h1>
            <span className="exo-bold">- 0.02%</span>
          </div>
          <div className="flex text-[#DA667C] justify-between w-full items-center">
            <h1 className="exo-semibold">Network +LP Fee</h1>
            <span className="exo-bold">- $21.54</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center w-full mt-3 items-center gap-x-4 px-4 my-2">
      <ConnectWalletButton
        buttonText="Connect Wallet"
        buttonClass="text-lg hover:bg-blue-700"
      />
      </div>
    
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "200%" }}
            animate={{ y: "29%" }}
            exit={{ y: "200%" }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 w-full h-[550px] bg-[#161616] rounded-t-2xl shadow-lg p-4"
          >
            <div className="px-4 flex flex-col justify-center items-center gap-y-1">
              <div className="flex items-center justify-center w-[10%] mb-6">
                <div className="flex-1 border-t-2 border-gray-400"></div>
              </div>
              <div className="relative w-full mb-4">
                <span
                  className="absolute top-0 left-0 hover:cursor-pointer"
                  onClick={() => CloseModal()}
                >
                  <MdKeyboardArrowLeft />

                </span>
                <span className="flex justify-center font-semibold text-xl">
                  Select token
                </span>
              </div>
              <div className="flex justify-between w-full py-2 mb-2">
                <span className="font-semibold">blockchains</span>
                <span className="text-red-300 cursor-pointer hover:underline hover:font-semibold">
                  view all
                </span>
              </div>
              <div className="flex flex-row justify-start gap-x-8 w-full px-2 rounded-2xl mb-4">
                {blockchainOptions.map((blockchain, index) => (
                  <div
                    className="hover:bg-gray-500 bg-black hover:bg-opacity-40 
  rounded-2xl flex flex-col p-2"
                    onClick={() => modifyBlockchain(index)}
                  >
                    <div
                      key={index}
                      onClick={() => selectBlockchain(blockchain.name)}
                      className="flex items-center flex-col"
                    >
                      <img
                        src={blockchain.iconUrl}
                        alt={blockchain.name}
                        className="w-7"
                      />
                      <span className="text-sm">{blockchain.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-start items-center w-full mb-3 ">
                <span className="font-semibold">tokens</span>
              </div>
              <div className="flex flex-col justify-start items-start w-full max-h-[270px] overflow-auto  ">
                {filteredTokens.map((token, index) => (
                  <div
                    className="flex justify-start items-center px-4 py-2 hover:cursor-pointer 
hover:bg-gray-600 hover:bg-opacity-40  rounded-2xl"
                    key={index}
                    onClick={() => modifyToken(index)}
                  >
                    <img src={token.img} alt={token.ticker} className="w-8" />
                    <div className="tokenChoiceNames">
                      <div className="tokenName">{token.name}</div>
                      <div className="tokenTicker">{token.ticker}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isWalletClicked && (
          <motion.div
            initial={{ y: "200%" }}
            animate={{ y: "56%" }}
            exit={{ y: "200%" }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-0 w-full h-[500px] bg-[#161616]   rounded-t-2xl shadow-lg p-4"
          >
            <div className="flex flex-col justify-center items-center  px-2">
              <div className="flex items-center justify-center w-[15%] mb-6">
                <div className="flex-1 border-t-2 border-gray-400"></div>
              </div>
              <div className="relative w-full mb-2">
                <span
                  className="absolute top-0 left-0 hover:cursor-pointer"
                  onClick={() => CloseModal()}
                >
                 <MdKeyboardArrowLeft />

                </span>
                <span className="flex justify-center exo-semibold text-white text-xl font-semibold">
                On-chain Settings
                </span>
              </div>
             <div className="flex mt-3 flex-col justify-start w-full items-start gap-y-4">
              <div className="flex flex-col justify-center w-full items-start">
              <div className="flex justify-start items-center gap-x-1">
                <img src={warning} alt="" />
                <span className="exo-semibold text-white">Trade tokens in an instant</span>

              </div>
              <div className="w-full flex justify-between items-center rounded-full mt-2 bg-transparent p-1">
                <div className="flex items-center justify-center gap-x-2">
                <button
        className={`rounded-full text-sm  exo-semibold px-6 py-2 border border-white ${
          selectedButton === 'Auto' ? 'bg-[#1FC7D4] text-black' : 'text-white'
        }`}
        onClick={() => handleButtonClick('Auto')}
      >
        Auto
      </button>
      <button
        className={`rounded-full text-sm text-white px-6 py-2 border border-whit ${
          selectedButton === '0.1%' ?  'bg-[#1FC7D4] text-black' : 'text-white'
        }`}
        onClick={() => handleButtonClick('0.1%')}
      >
        0.1%
      </button>
      <button
        className={`rounded-full text-sm text-white px-6 py-2 border border-whit ${
          selectedButton === '0.5%' ?  'bg-[#1FC7D4] text-black' : 'text-white'
        }`}
        onClick={() => handleButtonClick('0.5%')}
      >
        0.5%
      </button>
                </div>
     
      <button
        className={`rounded-full text-sm text-white px-6 py-2  border border-whit${
          selectedButton === '2%' ?  'bg-[#1FC7D4] text-black' : 'text-white'
        }`}
        onClick={() => handleButtonClick('2%')}
      >
        2%
      </button>
    </div>
              </div>
              <div className="flex flex-col justify-center w-full items-start">
              <div className="flex justify-start items-center gap-x-1">
                <img src={warning} alt="" className="mr-1" />
                <span className="exo-semibold text-white">Transaction deadline</span>

              </div>
              <div className="w-full flex justify-between items-center rounded-full mt-2 bg-transparent p-1">
                <div className="flex items-center justify-center gap-x-2">
                <button
        className="rounded-full text-sm bg-gray-700 border border-white  exo-semibold px-6 py-2  "
      >
        20
      </button>
     <span> minutes</span>
                </div>
     
      
    </div>
              </div>
              <div className="flex justify-between w-full items-center gap-x-1">
                <div className="flex items-center">
                <img src={warning} alt=""  className="mr-1" />
                <span className="exo-semibold text-white">Disable multihops</span>

                </div>
                <ToggleSwitch/>
              </div>
              <div className="flex justify-between w-full items-center gap-x-1">
                <div className="flex items-center">
                <img src={warning} alt=""  className="mr-1"/>
                <span className="exo-semibold text-white">Auto-refresh</span>

                </div>
                <ToggleSwitch/>
              </div>
              <div className="flex justify-between w-full items-center gap-x-1">
                <div className="flex items-center">
                <img src={warning} alt=""  className="mr-1" />
                <span className="exo-semibold text-white">Show Receiver Address</span>

                </div>
                <ToggleSwitch/>
              </div>

             </div>
              
     
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Widget;
