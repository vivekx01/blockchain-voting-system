from brownie import accounts,config, Election ,network
import json, urllib3

def deploy_election_contract():
    account = get_account()
    election_contract = Election.deploy({"from": account})
    #brownie automatically knows whether to call or transact
    stored_value = election_contract.candidatesCount()
    print(stored_value)
    print("The Contract is deployed to:", election_contract.address)
    print("Writing JSON file....")
    contract_addr = election_contract.address
    addresses ={
        "electioncontract" : contract_addr
    }
    json_object = json.dumps(addresses)
    with open("./../environment/contract-address.json","w") as outfile:
        outfile.write(json_object)
    print("Done")


def get_account():
    if(network.show_active() == "development"):
        return accounts[0]
    else:
        return accounts.add(config["wallets"]["from_key"])

def main():
    deploy_election_contract()