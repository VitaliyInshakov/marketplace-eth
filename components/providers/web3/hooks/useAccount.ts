import Web3 from "web3";
import { provider } from "web3-core";
import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses: Record<string, boolean> = {
	"0xe3CBe056D1D30F264b15eb712537dbF06Bd4D482": true
}

export const handler = (web3: Web3, provider: provider) => () => {
	const { data, mutate, ...rest } = useSWR(() =>
		web3 ? "web3/accounts" : null,
		async () => {
			const accounts = await web3.eth.getAccounts();
			return accounts[0];
		}
	);

	useEffect(() => {
		provider && (provider as any).on("accountsChanged", (accounts: string[]) => mutate(accounts[0] ?? null));
	}, [provider]);

	return { account: {
		data,
		isAdmin: (data && adminAddresses[data]) ?? false,
		mutate,
		...rest,
	} };
};