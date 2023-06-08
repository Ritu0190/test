import React, {useState, useMemo} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [evenNum,setEvenNum] = useState(2)


    const memoHook = useMemo(() => {
        return evenNum * 2;
    },[evenNum])

    // function evenNumDouble(){
    //     return evenNum * 2;
    // }

  return (
    <div className='w-10/12 mx-auto px-4'>
        <h2>Counter: {count}</h2><br/>
        <h2>Even Numbers: {evenNum}</h2><br/>
        {/* <h2>Function even Number Double Value: {evenNumDouble()}</h2><br/> */}
        <h2>UseMemo even Number Double Value: {memoHook}</h2><br/>
        <button onClick={() =>setCount(count+1)} className='bg-blue-300 px-4 py-1 rounded'>Increment</button>
        <button onClick={()=>setEvenNum(evenNum+2)} className='ml-3 bg-blue-300 px-4 py-1 rounded'>Even Numbers</button>
    </div>
  )
}

export default Counter