const budget = localStorage.getItem("budget");
const total = localStorage.getItem("total");

document.getElementById("b").innerText = budget;
document.getElementById("t").innerText = total;

new Chart(document.getElementById("chart"), {
  type: 'bar',
  data: {
    labels: ['Budget', 'Spent'],
    datasets: [{
      data: [budget, total]
    }]
  }
});
