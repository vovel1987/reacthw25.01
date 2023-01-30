import React from 'react'
import data from './data.module.css'

export default function DataBase(props) {
  return (
    <div className={data.data}>
        <p>Summ of all Products :   <span>{props.summaCount}</span> </p>
       
        <p>Price of all Products :  <span> {props.priceProducts}</span></p>
    </div>
  )
}
