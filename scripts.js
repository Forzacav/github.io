document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const team1 = document.getElementById('team1').value;
    const score1 = document.getElementById('score1').value;
    const team2 = document.getElementById('team2').value;
    const score2 = document.getElementById('score2').value;

    const table = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.textContent = team1;
    cell2.textContent = score1;
    cell3.textContent = team2;
    cell4.textContent = score2;

    document.getElementById('resultForm').reset();
});
