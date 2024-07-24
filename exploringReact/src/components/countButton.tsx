import { useState } from "react"


export function CountButton() {
    
    const [count, setCount] = useState(0)
    
        return (
            <button onClick={() => setCount((count) => count + 1)} 
                    className=" text-3xl bg-blue-400 hover:bg-blue-500 p-2 rounded-md my-auto ">
                count is {count}
            </button>
        )
}

export default CountButton