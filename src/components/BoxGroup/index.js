import React from 'react'
import Box from '../Box'
import styles from "./styles.module.scss"

function BoxGroup({items,setCompairData,compairs}) {

  return (
    <div className={styles.boxGroup}>
      {items.map((item)=>(
        <Box features={item} setCommpairList={setCompairData} compairs={compairs}/>
      ))}

    </div>
  )
}

export default BoxGroup