import samples from './SampleData.json'

export function getAllSamples() {
  return samples.map(sample => sample)
}