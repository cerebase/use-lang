import { DemoType } from "./types";

export default function SayHello({ firstname, lastname, age} : DemoType) {
    if (firstname && lastname && age ) return `Hello ${firstname} ${lastname}, you are ${age} old`
    if (firstname && lastname ) return `Hello ${firstname} ${lastname}`
    return`Hello ${firstname}`;
}