const contract = require("@truffle/contract");

export const loadContract = async (name: string, provider: any) => {
    const res = await fetch(`/contracts/${name}.json`);
    const Artifact = await res.json();

    const _contract = contract(Artifact);
    _contract.setProvider(provider);

    let deployedContract = null;

    try {
        deployedContract = await _contract.deployed();
    } catch {
        console.log(`Contract ${name} cann;t be loaded`);
    }

    return deployedContract;
}