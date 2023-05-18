const mongoose = require('mongoose');
const LoanSchema = new mongoose.Schema({
    loanId: {
        type: Number,
        default: 0,
    },
    borrowers: {
        type: Array,
        ref: 'Borrower',
        default: [],
    }
});

const Loan = mongoose.model('Loan', LoanSchema);

module.exports = Loan;