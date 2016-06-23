import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, Nav, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from "./pages/login/login";

@Component({
    templateUrl: "build/app.html"
})
export class MyApp {
    rootPage: any = LoginPage;
    pages: Array<{ title: String, component: any }>;
    @ViewChild(Nav) nav: Nav;
    constructor(platform: Platform, private menu: MenuController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });

        this.pages = [
            { title: "Login", component: LoginPage },
            { title: "Dashboard", component: HomePage }
        ]
    }

    openPage(page) {
        this.menu.close();
        this.nav.setRoot(page.component,{
            animate:true
        });
    }
}

ionicBootstrap(MyApp);
