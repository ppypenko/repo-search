import { Component } from '@angular/core';

@Component({
    selector: 'nu-home',
    template: `
    <div>
        <h1>{{ pageTitle }}</h1>
    </div>
     `
})

export class HomeComponent {
    pageTitle: string = "Welcome to the Home Component";
}
