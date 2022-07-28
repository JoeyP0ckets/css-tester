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
      {renderAllSamples()}
    </div>
  )
}

export default (FirstDoses)

