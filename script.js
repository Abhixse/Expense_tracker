const expennseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById("expenseList")


expennseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const description = document.getElementById("description").value;
    const catagory = document.getElementById('catagory')
    const amount = document.getElementById('amount').value;

    if (document && catagory && !isNaN(amount)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${description}</td> 
        <td>${catagory.value}</td> 
        <td>${amount}</td>`

        expenseList.appendChild(newRow);


        document.getElementById('description').value = '';
        document.getElementById('catagory').value = '';
        document.getElementById('amount').value = '';
    }
    else {
        alert(`Please fill the value Data`)
    }



})