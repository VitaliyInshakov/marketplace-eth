import Web3 from "web3";
import { provider } from "web3-core";
import { useEffect } from "react";
import useSWR from "swr";

export const handler = (web3: Web3, provider: provider) => () => {
	const { mutate, ...rest } = useSWR(() =>
		web3 ? "web3/accounts" : null,
		async () => {
			const accounts = await web3.eth.getAccounts();
			return accounts[0];
		}
	);

	useEffect(() => {
		provider && (provider as any).on("accountsChanged", (accounts: string[]) => mutate(accounts[0] ?? null));
	}, [provider]);

	return { account: { mutate, ...rest } };
};