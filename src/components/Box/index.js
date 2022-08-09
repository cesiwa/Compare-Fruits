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
            
            <img src={"images/"+features.compare_images}></img>
        </div>


        <div className={styles.boxInfo}>
            <div className={styles.boxInfoLeft}>
                <p>{features.compare_name}</p>
                <p>{features.compare_piece}</p>
            </div>
            <div className={styles.boxInfoRight}>
                ${features.compare_price}
            </div>
            
        </div>
    </div>
    
  )
}

export default Box