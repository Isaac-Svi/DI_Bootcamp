let c = { greeting: 'Hey!' }
let d

d = c
c.greeting = 'Hello'
console.log(d.greeting)

// Since c and d are both objects (which is a complex data type), it means that they both point to the same place in the heap.  Therefore, when c.greeting is changed, it changes d.greeting as well.  Therefore, the output will be "Hello".
