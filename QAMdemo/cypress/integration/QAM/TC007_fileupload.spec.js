describe('Working with plugins',function(){
    it('File Upload',function(){
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        //upload file
        cy.get('[type="file"]').attachFile('sample.pdf');
        cy.get('[type="submit"]').click()
        cy.contains("You've uploaded a file. Your notes on the file were:")
    })
})