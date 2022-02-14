import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setupmetamask(){
    const url = `https://www.geeksforgeeks.org/how-to-install-and-use-metamask-on-google-chrome/`
    window.open(url,"_blank")
  }
  getfaucet(){
    const url = `https://blockchain-election.web.app/assets/guides/get-faucet-ether.pdf`
    window.open(url,"_blank")
  }
  getdesktop(){
    const url = `https://blockchain-election.web.app/assets/guides/Desktop-Guide-For-Users.pdf`
    window.open(url,"_blank")
  }
  getmobile(){
    const url = `https://blockchain-election.web.app/assets/guides/guide-for-mobile-devices.pdf`
    window.open(url,"_blank")
  }

}
