// prettier-ignore
$(document).ready(function () {
  $(".calculate").click(function () {
    var startingCapital = $('input[name="starting_capital"]').val();
    var monthlySavings = $('input[name="monthly_savings"]').val();
    var targetYears = $('input[name="target_years"]').val();
    var total =
      Number(startingCapital) +
      (Number(monthlySavings * 12) * Number(targetYears));
    $(".result").html(total);
  });
});
