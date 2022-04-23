import { useState } from 'react'
import Card from './Card'
import Data from '../data/data.json'

function Cards(){

    const [show,setShow] = useState([false,false,false,false,false,false,false,false])

    function toggle(e){
        setShow(prev=>{
            let arr = []
            for (let i = 0; i < 8; i++) {
                if(e.target.className == i){
                    arr.push(!prev[i])
                }
                else {
                    arr.push(prev[i])
                }
            }
            return arr;
        })
    }

    function createCards(n) {
        const arr = []
        for (let i = 0; i < n; i++) {
            arr.push(
            <button 
                onClick={toggle} 
                key={Data.data[i].id} 
                className={i}>{
                    show[i] ? 
                    Data.data[i].info : 
                    ''}
            </button>
            )
        }
        return arr;
    }
   
    return (
        <div className="container">
            {createCards(8)}
        </div>
    )
}

export default Cards