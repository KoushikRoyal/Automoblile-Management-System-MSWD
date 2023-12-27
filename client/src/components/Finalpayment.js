import React from 'react'

const Finalpayment = (props) => {
  const total_price=localStorage.getItem("price")
  const item1=localStorage.getItem("item1")
  
  const item1_price=localStorage.getItem("item1_price")
  const item2=localStorage.getItem("item2")
  const item2_price=localStorage.getItem("item2_price")
  const item3=localStorage.getItem("item3")
  const item3_price=localStorage.getItem("item3_price")
  const item4=localStorage.getItem("item4")
  const item4_price=localStorage.getItem("item4_price")
  return (
    <div className='main_finalpayment'>
      <h1>{item1}:{item1_price}</h1>
      <h1>{item2}:{item2_price}</h1>
      <h1>{item3}:{item3_price}</h1>
      <h1>{item4}:{item4_price}</h1>
      <br></br>
    <h1>{total_price}</h1>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <br></br> <br></br> <br></br>
    </div>
  )
}

export default Finalpayment