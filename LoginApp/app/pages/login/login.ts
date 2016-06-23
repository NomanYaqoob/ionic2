import {Page, NavController,MenuController} from "ionic-angular";
import {ViewChild} from "@angular/core";
import {HomePage} from "../home/home";

@Page({
    templateUrl: "build/pages/login/login.html"
})

export class LoginPage {
    constructor(private nav:NavController) {
          
    }

    login() {
         this.nav.setRoot(HomePage,{
            animate:true
        });
    }
}