"use strict";

// prettier-ignore
$(document).ready(function () {
    $(".calculate").click(function () {
      var startingCapital = Number($('input[name="starting_capital"]').val());
      var monthlySavings = Number($('input[name="monthly_savings"]').val());
      var targetYears = Number($('input[name="target_years"]').val());
      var yearlyReturns = Number($('input[name="yearly_returns"]').val()) / 100 + 1;

      var totalInvested =
        startingCapital +
        (monthlySavings * 12 * targetYears);

      var totalReturned = (startingCapital * Math.pow(yearlyReturns, targetYears)) + monthlySavings * 12 * yearlyReturns * ((Math.pow(yearlyReturns, targetYears) - 1) / (yearlyReturns - 1));

      var totalBankReturns = (startingCapital * Math.pow(1.001, targetYears)) + monthlySavings * 12 * 1.001 * ((Math.pow(1.001, targetYears) - 1) / (1.001 - 1));

      let numTotalInvested = totalInvested.toFixed(2);
      let numTotalReturned = totalReturned.toFixed(2);
      let numTotalBankReturns = totalBankReturns.toFixed(2);

      $('input[name="total_investments"]').val(numTotalInvested);
      $('input[name="total_returns"]').val(numTotalReturned);
      $('input[name="total_returns_bank"').val(numTotalBankReturns);
    });
  });

// Fikse så maks 2 desimaler på svar. FIkse enten i formel eller for inputfield
// FIkse åpenrom i number-field så det ser mer oversiktlig ut
