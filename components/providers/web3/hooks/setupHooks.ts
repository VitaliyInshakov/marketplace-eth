import Web3 from "web3";
import { handler as createUseAccount } from "./useAccount";

export const setupHooks = (web3: Web3) => {
	return {
		useAccount: createUseAccount(web3),
	}
}