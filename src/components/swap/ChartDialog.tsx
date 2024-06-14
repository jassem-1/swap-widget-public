import bitcoin from "../../assets/bitcoinchart.svg";
import dollar from "../../assets/dollarchart.svg";
import arrows from "../../assets/arrows.svg";
import { useState } from "react";
import TradingView from "./TradingView";


const ChartDialog: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState('24h');

    const handleButtonClick = (value: string) => {
      setSelectedButton(value);
    };
          return (
    <div
      className="relative  text-white max-w-[530px] blur-background px-6 py-2 bg-black bg-opacity-25 overflow-hidden shadow-lg 
     pb-4 rounded-2xl flex flex-col items-center justify-center border border-white "
    >
      <div
        className="flex flex-col justify-start  items-start gap-y-1  rounded-2xl  relative "
   
      >
        <div className="w-[500px] rounded-2xl flex flex-col justify-start items-start py-4 px-2 gap-y-2 ">
          <div className="flex justify-start items-start w-full">
            <div className="flex flex-col gap-y-1 items-start justify-start">
                <div className="flex items-center">

                    <img src={bitcoin} alt="bitcoin" />
                    <img src={dollar} alt="dollar" />
                    <h4 className="font-semibold exo-semibold text-xl mr-1">BTC/USDT</h4>
                    <img src={arrows} alt="arrows" />



                </div>
              <h6 className="exo-semibold text-white"> Trade tokens in an instant</h6>
            </div>
          
          </div>
          <div className="w-full flex justify-between items-center rounded-full bg-black bg-opacity-50 border p-1 border-white">
      <button
        className={`rounded-full text-2xl text-white px-10 py-2 ${
          selectedButton === '24h' ? 'bg-[#1FC7D4]' : ''
        }`}
        onClick={() => handleButtonClick('24h')}
      >
        24h
      </button>
      <button
        className={`rounded-full text-2xl text-white px-10 py-2 ${
          selectedButton === '1W' ? 'bg-[#1FC7D4]' : ''
        }`}
        onClick={() => handleButtonClick('1W')}
      >
        1W
      </button>
      <button
        className={`rounded-full text-2xl text-white px-10 py-2 ${
          selectedButton === '1M' ? 'bg-[#1FC7D4]' : ''
        }`}
        onClick={() => handleButtonClick('1M')}
      >
        1M
      </button>
      <button
        className={`rounded-full text-2xl text-white px-10 py-2 ${
          selectedButton === '1Y' ? 'bg-[#1FC7D4]' : ''
        }`}
        onClick={() => handleButtonClick('1Y')}
      >
        1Y
      </button>
    </div>
    <div className="border-t border-gray-300 w-full mt-2"></div>

          <div className="relative justify-center mt-2 border border-white  overflow-hidden
          rounded-2xl bg-black bg-opacity-70 w-full items-center flex flex-col gap-y-10 h-80">
            <TradingView/>
          </div>
        </div>

      </div>


    </div>
  )
}

export default ChartDialog
