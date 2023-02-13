"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((res) => {
    console.log('woo');
    console.log(res.data);
})
    .catch((e) => {
    console.log('error', e);
});
