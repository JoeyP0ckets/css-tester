import {React, useState} from 'react' 
import { getAllSamples } from '../DataGrabber'
import SampleCard from './SampleCard'
import SampleView from '../containers/SampleView'

const FirstDoses = () => {

  const [selectedSample, setSelectedSample] = useState(null);

  const handleClick = (sample) => {
    setSelectedSample(sample)
  }

  const renderAllSamples = () => {
    let sampleArray = getAllSamples();
    
    return sampleArray.map((sample, index) =>
      <SampleCard
        key={index}
        sample={sample}
        handleClick={handleClick}
      />
    )
  }
  
  return(
    <div className="first-doses-page">
      <div className="sample-view-container">

        {selectedSample ? <SampleView selectedSample={selectedSample}/> : "I don't have a selected sample"}

      </div>
      <div className="samples-container">
        {renderAllSamples()}
      </div>
      
    </div>
  )
}

export default (FirstDoses)

