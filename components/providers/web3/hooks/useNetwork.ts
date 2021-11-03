import Web3 from "web3";
import { provider } from "web3-core";

export const handler = (web3: Web3, provider: provider) => () => {

	return {
		network: {
			data: "Testing Network"
		}
	}
}