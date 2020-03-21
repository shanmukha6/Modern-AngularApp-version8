import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer:boolean = false;
serverCreationStatus:string = 'No server was created!';
serverName:string = 'Test Server';
userName:string = '';  
constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server was Created! Name is '+ this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(event);

  }

  onResetUserName(){
    this.userName = '';
  }

}
