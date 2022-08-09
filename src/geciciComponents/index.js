import React from 'react'
import { useState } from 'react'

function Compairs() {
    const items = [{
        name: "cherry",
        id:1
    }, {
        name: "orange",
        id:2

    }, {
        name: "nuts",
        id:3

    }, {
        name: "strawberry",
        id:4

    }]
    const [array, setArray] = useState([])

    const handleState = (arr) => {
        setArray((prev) => {
            prev.push(arr)
            return [...prev]
        })

    }
    const handleDelete = (id) =>{
        setArray((prev) => {
            const delArr = prev.filter((it) => it.id != id)
            return [...delArr]
        })

    }

    return (
        <div>
            {items.map((item, i) => {
                if (array.some(({id})=>id == item.id)){
                    return(
                        <button key={i} onClick={() => handleDelete(item.id)}>
                        sil {item.name}

                    </button>
                    )
                }

                return (
                    <button key={i} onClick={() => { handleState(item) }}>
                        ekle {item.name}

                    </button>
                )
            }
            )}
            {array.length >= 2 && (

                <ul>
                    {array.map((item) => (
                        <li>{item.name}</li>
                    ))}

                </ul>
            )}
        </div>

    )
}

export default Compairs