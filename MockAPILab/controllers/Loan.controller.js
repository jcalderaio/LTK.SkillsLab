const mongoose = require("mongoose");
const Loan = mongoose.model("Loan");

exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    return res.json({
      success: true,
      loans,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message ?? "Error while fetching loans",
    });
  }
};
exports.getLoan = async (req, res) => {
  try {
    const loanId = req.params?.loanId;
    if (!loanId) {
      throw new Error("Invalid loanId");
    }
    const loan = await Loan.findOne({ loanId });
    return res.json({
      success: true,
      loan,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message ?? "Error while fetching loans",
    });
  }
};
exports.createLoan = async (req, res) => {
  try {
    const newLoan = new Loan(req.body);
    const loan = await newLoan.save();
    return res.json({
      success: true,
      loan,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message ?? "Error while creating loan",
    });
  }
};

exports.deleteLoan = async (req, res) => {
  try {
    const loanId = req.params?.loanId;
    if (!loanId) {
      throw new Error("Invalid loanId");
    }
    const loan = await Loan.findOneAndDelete({ loanId });
    return res.json({
      success: true,
      loan,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: err.message ?? "Error while deleting loan",
    });
  }
};
exports.createBorrower = async (req, res) => {
  try {
    const loanId = req.params?.loanId;
    const newBorrower = req.body;
    if (loanId && newBorrower) {
      if (
        !newBorrower.pairId &&
        !newBorrower.firstName &&
        !newBorrower.lastName &&
        !newBorrower.phone
      ) {
        throw new Error("Invalid borrower");
      }
      const loan = await Loan.findOne({ loanId });
      const result = await Loan.findOneAndUpdate(
        { loanId },
        { $set: { borrowers: [newBorrower, ...loan.borrowers] } }
      );

      return res.json({
        success: true,
        result,
      });
    }
  } catch (err) {
    return res.json({
      success: false,
      message: err.message ?? "Error while creating borrower",
    });
  }
};
exports.deleteBorrower = async (req, res) => {
    try {
      const loanId = req.params?.loanId;
      const pairId = req.params?.pairId;
      if (loanId && pairId) {
        const result = await Loan.updateOne(
          { loanId, "borrowers.pairId": pairId },
          {
            $pull: {
              "borrowers": { pairId },
            },
          }
        );
        return res.json({
          success: true,
          result,
        });
      }
    } catch (err) {
      return res.json({
        success: false,
        message: err.message?? "Error while deleting borrower",
      });
    }
};
exports.updateBorrower = async (req, res) => {
  try {
    const loanId = req.params?.loanId;
    const pairId = req.params?.pairId;
    const newBorrower = req.body;
    if (loanId && newBorrower && pairId) {
      const result = await Loan.updateOne(
        { loanId, "borrowers.pairId": pairId },
        {
          $set: {
            "borrowers.$.firstName": newBorrower.firstName,
            "borrowers.$.lastName": newBorrower.lastName,
            "borrowers.$.phone": newBorrower.phone,
          },
        }
      );
      return res.json({
        success: true,
        result,
      });
    }
  } catch (err) {
    return res.json({
      success: false,
      message: err.message ?? "Error while updating borrower",
    });
  }
};
