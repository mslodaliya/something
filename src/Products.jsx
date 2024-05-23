import React, { useState } from "react";

function Products({age, data}) {
    const [a, b] = useState(false); //rendering
  return (
    <div className="w-full h-96 bg-zinc-800 text-white p-4">
      <h1>I looking like {age} years old.</h1>
      <h2>my actual age is {data.age}</h2>
      <h2>hello... I am {data.name}</h2>

      <h4 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "Hello" : "Hii"}</h4>
      <button className="px-3 py1 bg-pink-300 text-red-700 rounded-md"  onClick={()=>b(!a)}>change value</button>
    </div>
  );
}

export default Products;
