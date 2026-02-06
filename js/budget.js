function setBudget() {
  const budget = document.getElementById("budget").value;
  if (!budget || budget <= 0) {
    alert("Please enter a valid budget");
    return;
  }
  localStorage.setItem("budget", budget);
  localStorage.setItem("total", 0);
  window.location.href = "scan.html";
}
