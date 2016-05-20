import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';

@Component({
    selector: 'nu-app',
    template: `
    <div>
        <h1>{{ pageTitle }}</h1>
        <img [src]="logoUrl" />
        <nu-home>Loading Home...</nu-home>
    </div>
     `,
     directives: [HomeComponent]
})

export class AppComponent {
	pageTitle: string = 'NU Angular 2 Demo!!!';
	logoUrl: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

}
