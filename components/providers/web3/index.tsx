import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { provider } from "web3-core";

const Web3Context = createContext<any>(null);

type Web3ApiType = {
	provider: provider;
	web3: Web3 | null;
	contract: null;
	isInitialized: boolean;
};

export default function Web3Provider({ children }: { children: ReactNode; }) {
	const [web3Api, setWeb3Api] = useState<Web3ApiType>({
		provider: null,
		web3: null,
		contract: null,
		isInitialized: false,
	});

	useEffect(() => {
		const loadProvider = async () => {
			const provider: any = await detectEthereumProvider();
			if (provider) {
				const web3 = new Web3(provider);
				setWeb3Api({
					provider,
					web3,
					contract: null,
					isInitialized: true,
				});
			} else {
				setWeb3Api(prevState => ({...prevState, isInitialized: true}));
				console.error("Please, install Metamask.");
			}
		}

		loadProvider();
	}, []);

	return (
		<Web3Context.Provider value={web3Api}>
			{children}
		</Web3Context.Provider>
	);
}

export function useWeb3() {
	return useContext(Web3Context);
}