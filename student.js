const resultForm = document.getElementById('resultForm');
const resultTableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
resultForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const roll = document.getElementById('roll').value;
    const marks = document.getElementById('marks').value;
    let status = 'Pass';
    if (marks < 50) {
        status = 'Fail';
    }
    const newRow = document.createElement('tr');


    newRow.innerHTML = `
        <td>${name}</td>
        <td>${className}</td>
        <td>${roll}</td>
        <td>${marks}</td>
        <td class="${status === 'Pass' ? 'pass' : 'fail'}">${status}</td>
    `;
    resultTableBody.appendChild(newRow);
    resultForm.reset();});
