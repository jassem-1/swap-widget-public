import Menu from "./../../assets/Menu.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import bitcoin from "../../assets/bitcoinchart.svg";
import ConnectWalletButton from "../swap/ConnectWallet";


const navLinks = [{ name: "Discover" }, { name: "Courses" }, { name: "About" }];


function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-4
    lg:container lg:mx-auto lg:px-6">
     <div className="flex items-center text-white exo-bold text-4xl">
       LOGO
    
     </div>
     <div className="flex gap-x-4">
  
         <button className="hidden lg:flex bg-black bg-opacity-50 border justify-between border-white items-center gap-x-1 text-black text-lg font-medium
          py-2 px-8 rounded-full shadow-md hover:bg-black">
              <img src={bitcoin} alt="bitcoin" className="w-8 h-8" />
           <span className="exo-semibold text-white text-base">0.0000</span>
           <MdOutlineKeyboardArrowDown className="text-white  text-xl"/>

         </button>
         <ConnectWalletButton
        buttonText="Connect Wallet"
        buttonClass="text-lg hover:bg-blue-700"
      />
      {/*    <button className="hidden lg:block bg-[#1FC7D4] text-white 
         text-lg exo-bold py-2 px-11  rounded-full hover:bg-[#327c81]">
           Connect wallet
         </button>
      */}

       <img src={Menu} alt="Menu Button" className="lg:hidden" />
     </div>
   </nav>
  )
}

export default Navbar