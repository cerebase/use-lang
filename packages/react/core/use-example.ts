import { ExampleType } from "@pkg/react/types/example";

export default function useExample({ firstname, lastname, age} : ExampleType) {
    if (firstname && lastname && age ) return `Hello ${firstname} ${lastname}, you are ${age} old`
    if (firstname && lastname ) return `Hello ${firstname} ${lastname}`
    return`Hello ${firstname}`;
}