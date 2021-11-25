import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import { provider } from "web3-core";
import { setupHooks } from "@components/providers/web3/hooks/setupHooks";
import { loadContract } from "@utils/loadContract";

const Web3Context = createContext<any>(null);

type Web3ApiType = {
	provider: provider;
	web3: Web3 | null;
	contract: null;
	isLoading: boolean;
	hooks: any;
};

export default function Web3Provider({ children }: { children: ReactNode; }) {
	const [web3Api, setWeb3Api] = useState<Web3ApiType>({
		provider: null,
		web3: null,
		contract: null,
		isLoading: true,
		hooks: setupHooks(),
	});

	useEffect(() => {
		const loadProvider = async () => {
			const provider: any = await detectEthereumProvider();
			if (provider) {
				const web3 = new Web3(provider);
				const contract = await loadContract("CourseMarketplace", provider);

				setWeb3Api({
					provider,
					web3,
					contract,
					isLoading: false,
					hooks: setupHooks(web3, provider),
				});
			} else {
				setWeb3Api(prevState => ({...prevState, isLoading: false}));
				console.error("Please, install Metamask.");
			}
		}

		loadProvider();
	}, []);

	const _web3Api = useMemo(() => {
		const { web3, provider, isLoading } = web3Api;
		return {
			...web3Api,
			requireInstall: !isLoading && !web3,
			connect: provider
				? async () => {
					try {
						await (provider as any).request({ method: "eth_requestAccounts" });
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

export function useHooks(cb: (hooks: any) => any) {
	const { hooks } = useWeb3()
	return cb(hooks)
}