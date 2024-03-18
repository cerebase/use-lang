// react.test.ts

import { expect, test } from 'vitest'
import { DemoType } from "./types";
import SayHello from "./react";

const CaseOne : DemoType = {
    firstname: 'John',
    lastname: 'Doe',
    age: 42
}

test('[first, last, age]',() => {
    expect(SayHello(CaseOne)).toBe('Hello John Doe, you are 42 old')
})

const CaseTwo : DemoType = {
    firstname: 'John',
    lastname: 'Doe'
}

test('[first, last]',() => {
    expect(SayHello(CaseTwo)).toBe('Hello John Doe')
})

const CaseThree : DemoType = {
    firstname: 'John'
}

test('[first]',() => {
    expect(SayHello(CaseThree)).toBe('Hello John')
})