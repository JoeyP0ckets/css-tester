import React from 'react'

const SampleView = (props) => {
  
  const {sample_name, image_url, description, sample_size} = props.selectedSample 
  
  return(
    <div>
      <h1 style={{paddingTop: "20px", color: "whitesmoke", fontFamily: "Cinzel", fontWeight: "bold"}}>{sample_name}</h1>
      <img id="selected_sample_image" src={image_url} alt={sample_name}/>
      <div className="sample-info-container">
        <h4 style={{fontFamily: "Cinzel"}}>{description}</h4>
        <h4 style={{fontFamily: "Cinzel"}}>Sample Size: {sample_size}</h4>
      </div>
    </div>
  )
}

export default (SampleView)