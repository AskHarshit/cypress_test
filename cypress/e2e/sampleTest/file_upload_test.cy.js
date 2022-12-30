describe('file uploading', ()=>{
    it('test file upload on automation practice', () => {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        cy.get("input[name='userfile']")
        .attachFile('profile.json');
    });

    it('drag & drop file upload', () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file')
        .attachFile('myinvitation.jpeg');
        cy.get('div.box__success').should('contain.text', 'Done! ')
    });

    it('multiple file upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
        .attachFile(['example.json', 'profile.json']);
        cy.get('#fileList li:nth-of-type(1)').should('contain.text', 'example.json')
    });


})