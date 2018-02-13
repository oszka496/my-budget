import { Component, OnInit } from '@angular/core';
import * as PromiseWindow from 'promise-window';

@Component({
    selector: 'app-oauth',
    templateUrl: './oauth.component.html',
    styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    showPopUp() {
        const magicalUrl = 'https://accounts.google.com/o/oauth2/v2/auth' + 
        '?response_type=token&client_id=417959407604-mgdnabjuqhp3ljpp9pjksfgrrrcoi76f.apps.googleusercontent.com' +
        '&redirect_uri=http://localhost:8000/api/auth/google/callback/&scope=email';

        function windowAsPromise() {
            return new Promise(function(resolve) {
                window.open(magicalUrl, '', 'width=500,height=600');
                window.addEventListener("message", function(event) {
                    if (event.origin !== 'http://localhost:8000') {
                        return;
                    }
                    resolve(event.data)
                });
            });
        }

        windowAsPromise()
            .then(({key}) => {
                return fetch('http://localhost:8000/api/auth/user/', {
                    headers: {
                        'Authorization': `Token ${key}`
                    }
                })
            })
            .then(r => r.json())
            .then(console.log.bind(console));

    }
}
