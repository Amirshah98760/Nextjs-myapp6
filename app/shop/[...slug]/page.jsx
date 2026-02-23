import React from 'react'

const ElectronicProducts = async(props) => {
  const {slug} = await props.params;
  console.log(slug)
  return (
   <div>
    <h1>Electronic Products</h1>
    <p>Product: {slug}</p>
   </div>
  )
}

export default ElectronicProducts