import Web3 from "web3";
import { provider } from "web3-core";
import { handler as createUseAccount } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (web3: Web3, provider: provider) => {
	return {
		useAccount: createUseAccount(web3, provider),
		useNetwork: createNetworkHook(web3, provider),
	}
}