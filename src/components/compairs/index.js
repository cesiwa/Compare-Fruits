import React from 'react'
import styles from "./style.module.scss"

function Compairs({ compairList }) {

  return (
    <div className={styles.compairs}>

      <div className={styles.compairsFeatures}>
        <div></div>
        <div>Price</div>
        <div>Color</div>
        <div>Condition</div>
      </div>

      {compairList.map((item, i) => (
        <div key={i}>
          <div>{item.compare_name}</div>
          <div>{item.compare_price}</div>
          <div className={styles.colors}>{
            item.compare_colors.map((color) => (<span style={{backgroundColor:color}}></span>))
            }</div>
          <div className={`${styles.condition} ${item.compare_type.toLowerCase() === "fresh" ? styles.conditionFresh : styles.conditionFrozen}`}>{item.compare_type}</div>
        </div>
      ))}



    </div>
  )
}

export default Compairs