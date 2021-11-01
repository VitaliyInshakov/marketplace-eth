import Web3 from "web3";

export const useAccount = (web3: Web3) => () => {
	return {
		account: web3 ? "Test Account" : "null"
	}
};