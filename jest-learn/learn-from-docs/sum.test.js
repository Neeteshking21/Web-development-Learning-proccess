const sum = require('./sum')

test("Testing Sum Function", ()=>{
    expect(sum(1,2)).toEqual(3)
})

/*
/------------------------------------------------------
//  Numbers and Truthiness
/------------------------------------------------------
*/
test("Adding positive number is not zero", ()=>{
    for(let i=1; i<=10; i++){
        for (let j=0; j<=10; j++){
            expect(i+j).not.toBe(0)
            expect(i+j).not.toBeNull()
            expect(i+j).not.toBeUndefined()
            // expect(i+j).not.toBeTruthy()
            expect(i+j).not.toBeFalsy()
            expect(i+j).toBeGreaterThanOrEqual(0)

        }
    }
})
/*
/------------------------------------------------------
//  Strings
/------------------------------------------------------
*/

test("Testing Strings", ()=>{
    expect("team").not.toMatch(/I/)
    // expect("team").not.toMatch(/t/)  :Return error
    expect("team").toMatch(/team/)
})
/*
/------------------------------------------------------
//  Arrays and iterables
/------------------------------------------------------
*/

const myList = [
    "Neetesh",
    "Vashisth",
    "19",
    "Happy:hacking"
]

test("Testing Arrays and Iterables", ()=>{
    expect(myList).toContain("19")
    // expect(new Set(myList)).toContain('milk') :Return error
    expect(new Set(myList)).toContain('Happy:hacking')
})

/*
/------------------------------------------------------
//  Exceptions
If you want to test whether a particular function throws 
an error when it's called, use toThrow
/------------------------------------------------------
*/

const testFunc = ()=>{
    throw new error("Dont take this error seriously 😅")
}

test("Testing Exceptions", ()=>{
    expect(()=>testFunc()).toThrow()
    // expect(()=>testFunc()).not.toThrow()   Will fail test case 🔥
    expect(()=>testFunc()).toThrowError()
    // expect(()=>testFunc()).not.toThrowError()  Will fail test case
    // You can also use the exact error message or a regexp
    // expect(() => testFunc()).toThrow('you are using the wrong JDK');
    expect(() => testFunc()).not.toThrow('you are using the wrong JDK');
    // expect(() => testFunc()).toThrow(/JDK/);
});


/*
/------------------------------------------------------
//  Testing Asynchronous Code                         |
/------------------------------------------------------
*/
/* function fetchData(){
    return "peanut butter";
}

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    
    fetchData(callback);
});

*/

/*
/------------------------------------------------------
//  Promises                        |
/------------------------------------------------------
*/
// function fetchData(){
//     return /peanut butter/;
// }
// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//       expect(data).toBe(/peanut butter/i);
//     });
//   });

/*
/------------------------------------------------------
//  .resolves / .rejects                       |
/------------------------------------------------------

You can also use the .resolves matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.
*/
// test('the data is peanut butter', () => {
//   return expect(fetchData()).resolves.toBe('peanut butter');
// });
 /*
Be sure to return the assertion—if you omit this return statement, your test will complete before the promise returned from fetchData is resolved and then() has a chance to execute the callback.

If you expect a promise to be rejected, use the .rejects matcher. It works analogically to the .resolves matcher. If the promise is fulfilled, the test will automatically fail.
*/
// test('the fetch fails with an error', () => {
//   return expect(fetchData()).rejects.toMatch('error');
// });



