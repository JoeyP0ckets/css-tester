import { React, useState } from 'react'
import { getAllSamples } from '../DataGrabber'
import SampleCard from './SampleCard'
import SampleView from '../containers/SampleView'
import { Container, Row, Col } from 'react-bootstrap'

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
      <div className="samples-container">
        {renderAllSamples()}
      </div><br></br><br></br><br></br>

      <Container className="contact-container">
        <div id="contact-text">
          <h1 id="contact-header">Contact Info</h1>
          <div id="contact-info">
            Wellness Pharma<br>
            </br>784 N. Tailwater Road<br>
            </br>Norwich, CT 06360
          </div>
        </div>
      </Container>

    </div>
  )
}

export default (FirstDoses)

