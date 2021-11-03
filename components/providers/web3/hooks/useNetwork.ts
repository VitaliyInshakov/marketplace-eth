import Web3 from "web3";
import { provider } from "web3-core";
import useSWR from "swr";
import { useEffect } from "react";

const NETWORKS: Record<number, string> = {
	1: "Ethereum Main Network",
	3: "Ropsten Test Network",
	4: "Rinkeby Test Network",
	5: "Goerli Test Network",
	42: "Kovan Test Network",
	56: "Binance Smart Chain",
	1337: "Ganache",
}

const targetNetwork = NETWORKS[process.env.NEXT_PUBLIC_TARGET_CHAIN_ID ?? 1];

export const handler = (web3: Web3, provider: provider) => () => {
	const { data, mutate, ...rest } = useSWR(() =>
		web3 ? "web3/network" : null,
		async () => {
			const chainId =  await web3.eth.getChainId();
			return NETWORKS[chainId];
		}
	);

	useEffect(() => {
		provider && (provider as any).on("chainChanged", (chainId: number) => mutate(NETWORKS[parseInt(String(chainId), 16)]));
	}, [web3]);

	return {
		network: {
			data,
			mutate,
			target: targetNetwork,
			isSupported: data === targetNetwork,
			...rest,
		}
	}
}