
document.getElementById('prompt-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const trade = document.getElementById('trade').value;
  const scope = document.getElementById('scope').value.trim();
  const materials = document.getElementById('materials').value.trim();
  const location = document.getElementById('location').value.trim();
  const suppliers = document.getElementById('suppliers').value.trim();
  const client = document.getElementById('client').value.trim();
  const format = document.getElementById('format').value;
  const audience = document.getElementById('audience').value;
  const crewCount = parseInt(document.getElementById('crewCount').value);
  const dailyRate = parseInt(document.getElementById('dailyRate').value);
  const days = parseInt(document.getElementById('days').value);
  const nobs = document.getElementById('nobs').checked;
  const clientView = document.getElementById('clientView').checked;

  const labor = crewCount * dailyRate * days;

  let prompt = `Create a construction estimate for the following:
Trade: ${trade}
Scope: ${scope}
Materials: ${materials}
Location: ${location}
Suppliers: ${suppliers}
`;
  if (client) prompt += `Client: ${client}
`;
  prompt += `Audience: ${audience}
Format: ${format}
Labor Cost: $${labor}
`;
  prompt += nobs ? "Use direct, informal tone for internal crew.
" : "Use professional, client-friendly tone.
";

  document.getElementById('result').textContent = prompt;
});
