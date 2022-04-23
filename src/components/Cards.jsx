import { useEffect, useState } from 'react'
import Card from './Card'
import Data from '../data/data.json'

function Cards(){

    const [show,setShow] = useState([])
    const [round,setRound] = useState(0)
    const [cards,setCards] = useState([])

    function firstShow() {
        const arr = []
        for (let i = 0; i < 8; i++) {
            arr.push(false)
        }
        return arr
    }


    useEffect(()=>{
        setShow(firstShow())
        setCards(createCards(8))
    },[])



    function toggle(e,index){
        setRound(prev=>prev+1)
        setShow(prev=>{ 
            let arr = []
            for (let i = 0; i < 8; i++) {
                if(index == i){
                    arr.push(!prev[i])
                    if(e.target.innerHTML === '') {
                        e.target.innerHTML = Data.data[i].info
                    }
                    else {
                        e.target.innerHTML = ''
                    }
                }
                else {
                    arr.push(prev[i])
                }
            }
            for (let i = 0; i < 8; i++) {
                
            }
            return arr;
        });
        if(round >= 2) setShow(firstShow())
    }
    console.log(round);
    if(round >= 2) setRound(0)

    function createCards(n) {
        const arr = []
        for (let i = 0; i < n; i++) {
            arr.push(
            <button 
                onClick={(e)=>toggle(e,i)} 
                key={Data.data[i].id} 
            >
                {''}
            </button>
            )
        }
        return arr.sort(function(a, b){return 0.5 - Math.random()});
    }
   
    return (
        <div className="container">
            {cards}
        </div>
    )
}

export default Cards