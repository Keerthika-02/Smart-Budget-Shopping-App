let total = Number(localStorage.getItem("total")) || 0;
let budget = Number(localStorage.getItem("budget"));

document.getElementById("total").innerText = total;

// Start camera scanner
Quagga.init({
  inputStream: {
    type: "LiveStream",
    target: document.querySelector('#scanner')
  },
  decoder: {
    readers: ["ean_reader", "code_128_reader"]
  }
}, function(err) {
  if (!err) Quagga.start();
});

Quagga.onDetected(data => {
  document.getElementById("barcode").value = data.codeResult.code;
});

function addItem() {
  const price = Number(document.getElementById("price").value);
  if (!price) return alert("Enter price");

  total += price;
  localStorage.setItem("total", total);
  document.getElementById("total").innerText = total;

  document.getElementById("status").innerText =
    total > budget ? "⚠️ Budget Exceeded" : "✅ Within Budget";
    }
