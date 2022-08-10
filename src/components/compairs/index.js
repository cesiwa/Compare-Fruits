import React from 'react'
import styles from "./style.module.scss"

function Compairs({ compairList }) {

  return (
    <div className={styles.compairs}>

      <div className={styles.compairsFeatures}>
        <div></div>
        <div>Price</div>
        <div>Memory</div>
        <div>Color</div>
        <div>Inch Size</div>
        <div>Disk</div>
        <div>Battery</div>
        <div>Fast Charging</div>
      </div>

      {compairList.map((item, i) => (
        <div key={i}>
          <div>{item.name}</div>
          <div>${item.price}</div>
          <div>{item.memory} GB</div>
          <div className={styles.colors}>{
            item.colors.map((color) => (<span style={{backgroundColor:color}}></span>))
            }</div>
        <div>{item.inchSize}</div>

          <div>{item.disk} GB</div>
          <div>{item.battery} mAh</div>

          <div className={`${styles.condition} ${item.fastCharging.toLowerCase() === "yes" ? styles.conditionTrue : styles.conditionFalse}`}>{item.fastCharging}</div>
        </div>
      ))}



    </div>
  )
}

export default Compairs