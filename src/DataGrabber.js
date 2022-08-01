import samples from './SampleData.json'
import yourdoses from './YourDoses.json'

export function getAllSamples() {
  return samples.map(sample => sample)
}

export function getYourDoses() {
  return yourdoses.map(yourdose => yourdose)
}