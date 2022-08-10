import React from 'react'
import styles from "./style.module.scss"


function Box({features, setCommpairList, compairs}) {

    const handleClick = () => {
        setCommpairList((prev) => [...prev,features])
        
    }
    const handleRemove = () => {
        setCommpairList((prev) =>{
            const remove = prev.filter((item) => item.id != features.id )
            return [...remove]
            
        })
    }
    const hasItem = compairs.some(({id}) => features.id == id)
  return (
    <div className={styles.boxWrapper}>

        <div className={`${styles.boxImage} ${hasItem ? styles.activeItem :""}`}>

            { hasItem ? (<button onClick={handleRemove}>remove</button>): (<button onClick={handleClick}>compare</button>)}
            
            <img src={"images/"+features.images}></img>
        </div>


        <div className={styles.boxInfo}>
            <div className={styles.boxInfoLeft}>
                <p>{features.name}</p>
                <p>{features.trademark}</p>
            </div>
            <div className={styles.boxInfoRight}>
                ${features.price}
            </div>
            
        </div>
    </div>
    
  )
}

export default Box