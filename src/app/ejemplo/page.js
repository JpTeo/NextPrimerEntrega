import React from 'react'

const Ejemplo = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        cache:"no-cache", 
        next: {
            revalidate: 3600
        }
    });
    const result = await data.json();
    console.log({result});
  return (
    <h1> {result.title} </h1>
   
  )
}

export default Ejemplo 