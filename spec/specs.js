describe('BankAccount', function() {
  it('creates a new bank account with the given specifications', function() {
    var testBankAccount = new BankAccount("Joss", 500.00);
    expect(testBankAccount.ownerName).to.equal("Joss");
    expect(testBankAccount.balance).to.equal(500.00);
  });

  it('adds a deposit to the current balance', function() {
    var testBankAccount = new BankAccount("Joss", 500.00);
    expect(testBankAccount.deposit(100.00)).to.equal(600.00);
  });

  it('subtracts a withdrawal from the current balance', function() {
    var testBankAccount = new BankAccount('Joss', 1000.00);
    expect(testBankAccount.withdrawal(600.00)).to.equal(400.00);
  });

});
