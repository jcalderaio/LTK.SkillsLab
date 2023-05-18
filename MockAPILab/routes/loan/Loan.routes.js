const loanController = require('../../controllers/Loan.controller.js');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

module.exports = (app) => {
    app.get('/getLoans', loanController.getLoans);
    app.get('/getLoan/:loanId', loanController.getLoan);
    app.post('/createLoan', jsonParser, loanController.createLoan);
    app.delete('/deleteLoan/:loanId', loanController.deleteLoan);
    app.post('/createBorrower/:loanId', jsonParser, loanController.createBorrower);
    app.patch('/updateBorrower/:loanId/:pairId', jsonParser, loanController.updateBorrower);
    app.delete('/deleteBorrower/:loanId/:pairId', loanController.deleteBorrower);
}