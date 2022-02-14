import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
declare let window:any;
@Injectable({
  providedIn: 'root'
})
export class SmartcontractinteractionService {

  constructor() { }
  async getProvider(){
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  async connectmetamask(){
    return await window.ethereum.request({ method: 'eth_requestAccounts' })
  }
}
