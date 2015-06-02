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
  });




});
