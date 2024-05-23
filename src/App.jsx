import React, { useState } from 'react'
import Products from './Products'

function App() {
  var[a,b] = useState(0);
  return (
    <div className="w-full h-screen bg-zinc-600 p-4">
      <h1>{a}</h1>
      <button onClick={()=>b(a-1)} className="px-3 py1 bg-green-500 rounded-md ">click</button>
      <Products age="21" data={{age: 25, name: "meghavi"}}/>
    </div>
  )
}

export default App