import type { SpecBridgeDomainCommunicator } from './communicator'

let viewportChangedCallbackFn

export const handleEvents = (Cypress: Cypress.Cypress, specBridgeCommunicator: SpecBridgeDomainCommunicator) => {
  Cypress.on('viewport:changed', (viewport, fn) => {
    viewportChangedCallbackFn = fn
    specBridgeCommunicator.toPrimary('viewport:changed:begin', viewport)
  })

  specBridgeCommunicator.on('viewport:changed:end', () => {
    viewportChangedCallbackFn()
  })
}
