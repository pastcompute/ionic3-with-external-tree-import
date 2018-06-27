import { Injectable, NgModule } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
export const HELLO = 'world';
@Injectable()
export class HelloClass {
    constructor(platform: Platform, splashScreen: SplashScreen) {
        console.log(1);
        platform.ready().then(() => {
            splashScreen.hide();
            console.log(2);
        });
    }
};

@NgModule({
    providers: [
        HelloClass,
    ]
})
export class HelloModule {};
