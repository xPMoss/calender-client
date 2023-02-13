
// Angular
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    constructor() { 
        console.log(this.constructor.name)

    }

    signOut(): void {
        console.log(this.constructor.name + ".signOut()")

        window.sessionStorage.clear();
    }

    public saveToken(token: string): void {
        console.log(this.constructor.name + ".saveToken()")

        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        console.log(this.constructor.name + ".getToken()")

        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUser(user: any): void {
        console.log(this.constructor.name + ".saveUser()")

        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any {
        console.log(this.constructor.name + ".getUser()")

        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
        return JSON.parse(user);
        }
        return {};
    }

}