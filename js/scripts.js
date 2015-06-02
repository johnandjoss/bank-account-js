function BankAccount(ownerName, initialDeposit) {
 this.ownerName = ownerName;
 this.balance = initialDeposit;
 this.withdrawal = function(amount) {
     this.balance = this.balance - amount;
     return this.balance;
    }
 this.deposit = function(amount) {
     this.balance = this.balance + amount;
     return this.balance;
    }
}


$(document).ready(function() {

  $("form#new-bank-account").submit(function(event){
    event.preventDefault();
    var inputtedOwnerName = $("input.new-owner-name").val();
    var inputtedInitialDeposit = parseFloat($("input.account_initial_deposit").val());

    var newAccount = new BankAccount(inputtedOwnerName, inputtedInitialDeposit);

    $(".first-name").text(newAccount.ownerName);
    $(".current-balance").text(newAccount.balance);


  $("form#transaction-withdrawal").submit(function(event){
    event.preventDefault();

    var inputtedWithdrawalAmount = parseFloat($("input.new-withdrawal").val());
    var newWithdrawal = newAccount.withdrawal(inputtedWithdrawalAmount);

    var inputtedDepositAmount = parseFloat($("input.new-deposit").val());
    var newDeposit = newAccount.deposit(inputtedDepositAmount);

    $(".first-name").text(newAccount.ownerName);
    $(".current-balance").text(newAccount.balance);

    $("input.new-withdrawal").val("0.00");
    $("input.new-deposit").val("0.00");
  });

  $("#clear-account").click(function(event) {
    event.preventDefault();
    document.location.reload(true);
  });
  });

});
