import React from 'react'

const Box = (props) => {
  console.log("박스 result : ",props.result)
  let newResult = props.result
  if(props.result !== "" && props.title === "Computer" && props.result !== "TIE"){
    newResult = props.result === "WIN" ? "LOSE" : "WIN"
  }

  console.log("props.title : ", props.title, " , " , newResult)
  return (
    <div className={`box ${newResult}`}>
        <h1>{props.title}</h1>
        <img className="item-img" src={props.item && props.item.img}/>
        
        <h2>{newResult}</h2>
    </div>
  )
}

export default Box