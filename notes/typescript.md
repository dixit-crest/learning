# Typescript

- we use interface to combine the types ( combine basic ( primitive) data types), basically create an object.
`interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}`

with this way we can pass an optional property.

- Return type of the function can be written right after the parathesis of the arguments
`function sayHello(name:string, age:number ) : string {
    ...
}`
here the `string` after colon is return type of the function

- UNION : its when we combine the types as follows
`const value : number | string;