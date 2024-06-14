import bitcoinLogo from "./../../assets/bitcoinLogo.svg";

function BitcoinPrice() {
    const price = "$ 72.342,23";
    const hourlyChange = "-2%";
    const dailyChange = "+0,2%";
    const weeklyChange = "+5%";
  return (
    <div className="flex w-full items-center justify-between px-4 py-0
     lg:container lg:mx-auto lg:px-11">
        <div className="flex flex-col justify-start items-start ">
        <div className="flex items-center">
        <img
        src={bitcoinLogo} // You should replace with the actual path to your Bitcoin icon image
        alt="Bitcoin"
       className="w-10 mr-2"
      />
            <p className="text-[#36485C] font-medium text-xl" >
              Bitcoin Price 
            </p>
      </div>
      <div>
        <p className="text-blue-500 text-2xl ml-2">
            {price}
            </p>
      </div>
        </div>
      
      <div className="flex gap-x-4">
            <div className="flex flex-col items-center ">
                <p className="font-semibold">1h</p>
                <p className="text-red-500 font-semibold">{hourlyChange}</p>
            </div>
            <div className="flex flex-col items-center ">
                <p className="font-semibold"> 24h</p>
                <p className="text-green-500 font-semibold">{dailyChange}</p>
            </div>
            <div className="flex flex-col items-center ">
                <p className="font-semibold">7d</p>
                <p  className="text-green-500 font-semibold">{weeklyChange}</p>
            </div>
      </div>
    </div>
  )
}

export default BitcoinPrice