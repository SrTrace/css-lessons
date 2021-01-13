let table = document.body.lastElementChild.previousElementSibling;

for (let i=0; i<table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}