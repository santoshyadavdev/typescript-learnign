import { strict } from "assert";
import { stringify } from "querystring";
import { TextDecoder } from "util";

let a = 123n;

let f: bigint = 1232n;

console.log(a);

const enum Flippable {
    Burger,
    Chair
}

// type Filter = {
//     (array: number[], f: (item: number) => boolean): number[]
//     (array: string[], f: (item: string) => boolean): string[]
//     (array: object[], f: (item: object) => boolean): object[]
// }

type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

function Filter1<T extends string | number>(array: T[], f: (item: T) => boolean) {
    return array.filter((val) => f(val))
}

Filter1([1, 2, 3, true], () => true)

interface Filter2 {
    <T>(array: T[], f: (item: T) => boolean): T[];
}

let names = [
    { firstName: 'abc' },
    { firstName: 'bbc' },
    { firstName: 'abc' }
];
let filter: Filter = (array, f) => array.filter((val) => f(val));
let filter1: typeof Filter1 = (array, f) => array.filter((val) => f(val));

// Filter1(names, _ => _.firstName.startsWith('b'));
let filter2: Filter2 = (array, f) => array.filter((val) => f(val));
filter(names, _ => _.firstName.startsWith('b'));
// filter([])

let nums: Array<number> = [1, 2, 3, 4];

// let list<T

nums.map<boolean>(num => num === 1);

nums.find((val, i,) => {
    val > 1
})

function find(callback: (a: number, b: number) => true) {
    callback(1, 2);
}

find(_ => true);

function add(num1: number, num2: number) {
    num1 + num2;
}

let result = add(1, 2);

console.log(result);


let promise = new Promise<number>(resolve => resolve(45));
promise.then(num => num * 4);

type MyEvent<T> = {
    target: T
    type: string
}

type TreeNode = {
    value: string
}

type LeafNode = TreeNode & {
    isLeaf: true
}

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
    return {
        ...node,
        value: f(node.value)
    }
}


// function call(
//     f: (...args: unknown[])=> unknown,
//     ...args: unknown[]
// ) : unknown {
//     return f(...args)
// }

// ex 4.4
function call<T extends [unknown, string, ...unknown[]], R>(
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}

call(fill, 10, '5');


// ex 4.3
type Reservation = {
    success: boolean
}


type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}


let reserve: Reserve = (destination: Date | string) => {
    let reservation: Reservation = {
        success: false
    };
    if (typeof destination === 'string') {
        return reservation = {
            success: true
        };
    }

    return reservation
}

reserve('Goa');

// ex 4.5

// function is<T>(arg1: T , ...arg2: T[] ): boolean {
//     return arg2.every (a=> a === arg2)
// }

function is<T>(arg1: T, ...args: [T, ...T[]]): boolean {
    return args.every(a => a === arg1)
}

let resultis = is(1, 2)


let h = null;