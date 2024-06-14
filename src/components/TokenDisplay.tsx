
interface TokenDisplayProps {
  BlockchainItem: {
    iconUrl: string;
    name: string;
  };
  token: {
    img: string;
    ticker: string;
  };
  openModal: (id: string) => void;
  id: string;
  top:string;
  left:string;
}

const TokenDisplay: React.FC<TokenDisplayProps> = ({
  BlockchainItem,
  token,
  openModal,
  top = '10', // Default top position if not provided
  left = '20', 

  id
}) => {

  return (
    <div
    className={`absolute flex flex-row items-center bg-transparent text-white p-2 rounded-lg border-none`}
    style={{ top: `${top}rem`, left: `${left}rem` }} // Apply top and left dynamically
    onClick={() => openModal(id)}
  >
      <div className="flex items-center mr-2">
        <div className="flex flex-row justify-center items-center relative">
          <div className="bg-black bg-opacity-45 pr-12 py-1 pl-1 rounded-2xl">
            <img src={BlockchainItem.iconUrl} className="w-9" alt="" />
          </div>
          <div>
            <img
              src={token.img}
              alt=""
              className="w-9 absolute top-1 rounded-full right-0 ring-8 ring-[#FEF4FF]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-sm">{BlockchainItem.name}</span>
        <span>{token.ticker}</span>
      </div>
      <div className="ml-2">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default TokenDisplay;
