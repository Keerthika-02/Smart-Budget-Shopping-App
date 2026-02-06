let total = Number(localStorage.getItem("total")) || 0;
let budget = Number(localStorage.getItem("budget"));

document.getElementById("total").innerText = total;

function addItem() {
  const price = Number(document.getElementById("price").value);

  if (!price || price <= 0) {
    alert("Enter valid price");
    return;
  }

  total += price;
  localStorage.setItem("total", total);
  document.getElementById("total").innerText = total;

  if (total > budget) {
    document.getElementById("status").innerText =
      "⚠️ Budget exceeded!";
    document.getElementById("status").style.color = "red";
  } else {
    document.getElementById("status").innerText =
      "✅ Within budget";
    document.getElementById("status").style.color = "green";
  }
}
