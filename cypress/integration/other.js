describe('test with ky', () => {
  it('stub fetch', async () => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad (win) {
        cy.stub(win, 'fetch', (input, data) => {
          if (input.includes('/posts/1')) {
            return new Promise(resolve => resolve(new Response(JSON.stringify([{ yololo: 1 }]))))
          }
          if (input.includes('/posts/2')) {
            return new Promise(resolve => resolve(new Response(JSON.stringify([{ yololo: 2 }]))))
          }
        })
      }
    })
  })
})
