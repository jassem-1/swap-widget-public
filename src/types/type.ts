// types.ts
export interface Token {
    ticker: string;
    img: string;
    name: string;
  }
  
  export interface Blockchain {
    name: string;
    iconUrl: string;
    tokens: Token[];
  }
  
  export interface Data {
    blockchains: Blockchain[];
  }
  