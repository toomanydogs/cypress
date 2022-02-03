// @ts-ignore / session support is needed for visiting about:blank between tests
context('multi-domain viewport', { experimentalSessionSupport: true, experimentalMultiDomain: true }, () => {
  beforeEach(() => {
    cy.visit('/fixtures/multi-domain.html')
    cy.get('a[data-cy="multi-domain-secondary-link"]').click()
  })

  context('.viewport()', () => {
    it('changes the viewport', () => {
      cy.switchToDomain('foobar.com', () => {
        cy.window().then((win) => {
          expect(win.innerHeight).not.to.equal(480)
          expect(win.innerWidth).not.to.equal(320)
        })

        cy.viewport(320, 480)

        cy.window().then((win) => {
          expect(win.innerHeight).to.equal(480)
          expect(win.innerWidth).to.equal(320)
        })
      })
    })

    it('resets the viewport between tests', () => {
      cy.switchToDomain('foobar.com', () => {
        cy.window().then((win) => {
          expect(win.innerHeight).not.to.equal(480)
          expect(win.innerWidth).not.to.equal(320)
        })
      })
    })

    it('calls viewport:changed handler in switchToDomain', (done) => {
      cy.switchToDomain('foobar.com', done, () => {
        cy.on('viewport:changed', () => {
          done()
        })

        cy.viewport(320, 480)
      })
    })

    it('does NOT call viewport:changed handler of primary', () => {
      const viewportChangedSpy = cy.spy()

      cy.on('viewport:changed', viewportChangedSpy)

      cy.switchToDomain('foobar.com', () => {
        cy.viewport(320, 480)
      }).then(() => {
        expect(viewportChangedSpy).not.to.be.called
      })
    })
  })
})
