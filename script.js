
document.getElementById('estimator-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const job = document.getElementById('job').value;
  const days = parseInt(document.getElementById('days').value);
  const markup = parseFloat(document.getElementById('markup').value);
  const material = document.getElementById('material').value;

  const laborRate = 400;
  const materialBase = material === 'Premium' ? 1200 : 800;

  const laborCost = days * laborRate;
  const totalBeforeMarkup = laborCost + materialBase;
  const markupAmount = (markup / 100) * totalBeforeMarkup;
  const total = totalBeforeMarkup + markupAmount;

  document.getElementById('result').innerHTML = `
    <strong>Estimate Breakdown:</strong><br>
    Labor (${days} days @ $${laborRate}/day): $${laborCost.toFixed(2)}<br>
    Materials (${material}): $${materialBase.toFixed(2)}<br>
    Markup (${markup}%): $${markupAmount.toFixed(2)}<br>
    <hr>
    <strong>Total: $${total.toFixed(2)}</strong>
  `;
});
