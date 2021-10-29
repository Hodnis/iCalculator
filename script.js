// prettier-ignore
// OPPRINNELIG FUNKSJON SOM FUNGERER
// $(document).ready(function () {
//   $(".calculate").click(function () {
//     var startingCapital = $('input[name="starting_capital"]').val();
//     var monthlySavings = $('input[name="monthly_savings"]').val();
//     var targetYears = $('input[name="target_years"]').val();
//     var totalInvested =
//       Number(startingCapital) +
//       (Number(monthlySavings * 12) * Number(targetYears));
//     $(".result").html(totalInvested);
//   });
// });

// prettier-ignore
//Fikse hvordan jeg skal få output fra totalInvested inn i total_investments input field
$(document).ready(function () {
    $(".calculate").click(function () {
      var startingCapital = $('input[name="starting_capital"]').val();
      var monthlySavings = $('input[name="monthly_savings"]').val();
      var targetYears = Number($('input[name="target_years"]').val());
      var yearlyReturns = Number($('input[name="yearly_returns"]').val()) / 100 + 1;
      var totalInvested =
        Number(startingCapital) +
        (Number(monthlySavings * 12) * Number(targetYears));
        var totalReturned = (Number(startingCapital) * Math.pow(yearlyReturns, targetYears)) + Number(monthlySavings * 12) * Number(yearlyReturns) * ((Math.pow(Number(yearlyReturns), Number(targetYears)) - 1) / (Number(yearlyReturns) - 1));
      $('input[name="total_investments"]').val(totalInvested);
      $('input[name="total_returns"]').val(totalReturned);
    });
  });

// endre funksjon så alle var er Number(), så blir det mindre tekst i formelen
// Fikse så maks 2 desimaler på svar. FIkse enten i formel eller for inputfield
// FIkse åpenrom i number-field så det ser penere og mer oversiktlig ut
//

// $("#fnavn").keydown(function () {
//   $(this).change(function () {
//     $("#" + this.id + "-hidden").val($(this).val());
//   });
// });
