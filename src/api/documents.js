export default function (instance) {
  return {
    getTest(payload) {
      return instance.get('test', payload)
    },
    getPatientDocument(payload) {
      return instance.get('test', payload)
    },
  }
}