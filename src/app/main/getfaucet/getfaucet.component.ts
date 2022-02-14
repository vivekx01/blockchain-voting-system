import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getfaucet',
  templateUrl: './getfaucet.component.html',
  styleUrls: ['./getfaucet.component.css']
})
export class GetfaucetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getfaucet(){
    const url = `https://faucets.chain.link/rinkeby/`
    window.open(url,"_blank")
  }
}
