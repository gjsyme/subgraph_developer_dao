import { BigInt, Entity } from "@graphprotocol/graph-ts"
import {
  Contract,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer
} from "../generated/Contract/Contract"
import { Developer } from "../generated/schema"

// stub like others
export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {
  let developer = Developer.load(event.params.tokenId.toString())
  
  if(!developer){
    developer = new Developer(event.params.tokenId.toString())
    // populate values from contract
    let contract = Contract.bind(event.address)
    developer.name = `Dev #${event.params.tokenId}`
    developer.clothing = contract.getClothing(event.params.tokenId)
    developer.industry = contract.getIndustry(event.params.tokenId)
    developer.language = contract.getLanguage(event.params.tokenId)
    developer.location = contract.getLocation(event.params.tokenId)
    developer.mind = contract.getMind(event.params.tokenId)
    developer.os = contract.getOS(event.params.tokenId)
    developer.textEditor = contract.getTextEditor(event.params.tokenId)
    developer.vibe = contract.getVibe(event.params.tokenId)
  }

  developer.owner = event.params.to
  developer.save()
}
