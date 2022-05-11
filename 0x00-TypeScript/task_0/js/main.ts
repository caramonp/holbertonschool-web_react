interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    location: "England",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Clinton",
    age: 28,
    location: "Canada",
};

const studentsList: Array<Student> = [student1, student2];

const newTable: HTMLTableElement = document.createElement("table");
const rowHead: HTMLTableSectionElement = document.createElement("thead");
const newRow: HTMLTableSectionElement = document.createElement("tbody");

const tableHeader: HTMLTableRowElement = rowHead.insertRow();
tableHeader.insertCell(0).innerHTML = "FirtsName";
tableHeader.insertCell(1).innerHTML = "Location";

newTable.append(rowHead);

studentsList.forEach(student => {
    console.log(student.age)
    const row: HTMLTableRowElement = newRow.insertRow();
    row.insertCell(0).innerHTML = student.firstName;
    row.insertCell(1).innerHTML = student.location;
});

newTable.append(newRow);
document.body.appendChild(newTable);
