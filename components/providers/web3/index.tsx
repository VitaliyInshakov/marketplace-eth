import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { provider } from "web3-core";

const Web3Context = createContext<any>(null);

type Web3ApiType = {
	provider: provider;
	web3: Web3 | null;
	contract: null;
	isLoading: boolean;
};

export default function Web3Provider({ children }: { children: ReactNode; }) {
	const [web3Api, setWeb3Api] = useState<Web3ApiType>({
		provider: null,
		web3: null,
		contract: null,
		isLoading: false,
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
					isLoading: true,
				});
			} else {
				setWeb3Api(prevState => ({...prevState, isLoading: true}));
				console.error("Please, install Metamask.");
			}
		}

		loadProvider();
	}, []);

	const _web3Api = useMemo(() => {
		return {
			...web3Api,
			isWeb3Loaded: !web3Api.isLoading && web3Api.web3,
			connect: web3Api.provider
				? async () => {
					try {
						await (web3Api?.provider as any).request({ method: "eth_requestAccounts" });
					} catch {
						window.location.reload();
					}
				}
				: () => console.error("Cannot connect to Metamask, try to reload your browser please."),
		};
	}, [web3Api]);

	return (
		<Web3Context.Provider value={_web3Api}>
			{children}
		</Web3Context.Provider>
	);
}

export function useWeb3() {
	return useContext(Web3Context);
}