// react.test.ts

import { expect, test } from 'vitest'
import { ExampleType } from "../types/example";

import sayHello from "../core/use-example";

const CaseOne : ExampleType = {
    firstname: 'John',
    lastname: 'Doe',
    age: 42
}

test('[first, last, age]',() => {
    expect(sayHello(CaseOne)).toBe('Hello John Doe, you are 42 old')
})

const CaseTwo : ExampleType = {
    firstname: 'John',
    lastname: 'Doe'
}

test('[first, last]',() => {
    expect(sayHello(CaseTwo)).toBe('Hello John Doe')
})

const CaseThree : ExampleType = {
    firstname: 'John'
}

test('[first]',() => {
    expect(sayHello(CaseThree)).toBe('Hello John')
})