import { React, useState } from 'react'
import { getAllSamples } from '../DataGrabber'
import SampleCard from './SampleCard'
import SampleView from '../containers/SampleView'
import { Container } from 'react-bootstrap'

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

  return (
    <div className="first-doses-page">
      <div id="theatre">
        <div className="sample-view-container">
          {selectedSample ? <SampleView selectedSample={selectedSample} /> : <h3 id="please_select"> </h3>}
        </div>
      </div>
      <div id="please-select-sample-header">Please select a medication below.</div>
      <div className="samples-container">
        {renderAllSamples()}
      </div><br></br><br></br><br></br>

      <Container className="contact-container">
        <div id="contact-text">
        </div>
      </Container>

    </div>
  )
}

export default (FirstDoses)

