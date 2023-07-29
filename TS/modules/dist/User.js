// import  { type Person, somethingElseNotType } from './type'; // --> mix and match
// when inlcude "type" to import a type, it is always ganranteed to be removed from JS file 
// --> safer way of importing a type to ganranteed there will be nothing left over when compiled to js
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out!`);
    }
}
export function userHelper() {
    console.log('userhelper');
}
// if this is the only thing in this file or the only thing that I want to be exported
// or it is one main thing I want to be exported --> export default
