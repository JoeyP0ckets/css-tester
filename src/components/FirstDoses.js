import React from 'react' 
import { getAllSamples } from '../DataGrabber'
import SampleCard from './SampleCard'

const FirstDoses = () => {
  
  const renderAllSamples = () => {
    let sampleArray = getAllSamples();
    
    return sampleArray.map((sample, index) =>
      <SampleCard
        key={index}
        sample={sample}
      />
    )
  }
  
  return(
    <div className="first-doses-page">
      <div className="sample-view-container">

      </div>
      <div className="samples-container">
        {renderAllSamples()}
      </div>
      
    </div>
  )
}

export default (FirstDoses)

