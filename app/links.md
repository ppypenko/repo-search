import { Component } from '@angular/core';

@Component({
    selector: 'nu-home',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <img [src]="logoUrl" />
        <input type="text" [(ngModel)]="inputText" />
        <div>{{inputText}}</div>
        <button (click)='buttonClicked()'>Click Me</button>
    </div>
     `
})
export class HomeComponent {
	pageTitle: string = 'Welcome to the Home Page!';
	logoUrl: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
	inputText: string = "";

	buttonClicked(): void {
		alert('button was clicked');
	}
}
