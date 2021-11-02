import Web3 from "web3";
import { provider } from "web3-core";
import { useEffect, useState } from "react";

export const handler = (web3: Web3, provider: provider) => () => {
	const [account, setAccount] = useState<string | null>(null);

	useEffect(() => {
		const getAccount = async () => {
			const accounts = await web3.eth.getAccounts();
			setAccount(accounts[0]);
		};

		web3 && getAccount();
	}, [web3]);

	useEffect(() => {
		provider && (provider as any).on("accountsChanged", (accounts: string[]) => setAccount(accounts[0] ?? null));
	}, [provider]);

	return { account };
};