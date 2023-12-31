import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    
    serverId: number = 10;
    // serverStatus: string = 'offline';
    serverStatus = 'offline';
    @Input('name') serverName = '';
    
    constructor(){
        this.serverStatus = this.setServerStatus();
    }

    getServerStatus(){
        return this.serverStatus;    
    }

    setServerStatus(){
        let serverStatusVariable = 'offline';
        serverStatusVariable = Math.random() > 0.5 ? 'online' : 'offline';
        
        return serverStatusVariable;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green': 'red';
    }

}