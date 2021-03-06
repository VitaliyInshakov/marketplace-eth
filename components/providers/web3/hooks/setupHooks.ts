import { handler as createUseAccount } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (...deps: any) => {
	return {
		useAccount: createUseAccount(deps),
		useNetwork: createNetworkHook(deps),
	}
}