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
      var targetYears = $('input[name="target_years"]').val();
      var totalInvested =
        Number(startingCapital) +
        (Number(monthlySavings * 12) * Number(targetYears));
      $('input[name="total_investments"]').setAttribute(totalInvested);
    });
  });
