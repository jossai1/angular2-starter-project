import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
    selector: 'my-app',
    template: `
    <p> hi jane</p>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'we want better meetings!';

}
