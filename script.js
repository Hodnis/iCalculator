$(document).ready(function () {
  $(".calculate").click(function () {
    var startingCapital = $('input[name="starting_capital"]').val();
    var monthlySavings = $('input[name="monthly_savings"]').val();
    var targetYears = $('input[name="target_years"]').val();
    var total = (startingCapital - monthlySavings) / targetYears;
    $(".result").html(total);
  });
});

alert("hello!");
