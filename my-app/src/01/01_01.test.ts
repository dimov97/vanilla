import {mult, splitIntoWords, sum} from "./01_01";

let a:number
let b:number
let c:number

beforeEach(()=>{
    a=1
    b=2
    c=3
})

test('sum should be correct', () => {

    //data

    //action
    const result1 = sum(a,b)
    const result2 = sum(b,c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test('mult should be correct', () => {

    //data

    //action
    const result1 = mult(a,b)
    const result2 = mult(b,c)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})
test('splitIntoWords should be correct', () => {

    //data
    const sent1 = 'hello my friend!'
    const sent2 = 'js - the  best language.'

    //action
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(4)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('language')
})