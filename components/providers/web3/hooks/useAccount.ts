import Web3 from "web3";
import { provider } from "web3-core";
import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses: Record<string, boolean> = {
	"0x63064cb8bcb61c27b6387e70d9a1055b9da98b3ff1ae829251689b995f348b20": true
}

export const handler = ({ web3, provider }: { web3: Web3; provider: provider; }) => () => {
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

	return {
		data,
		isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
		mutate,
		...rest,
	};
};