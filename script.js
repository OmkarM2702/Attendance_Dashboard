let subjects = JSON.parse(localStorage.getItem("subjects")) || [];

function addSubject() {
    let name = document.getElementById("subject").value;
    let total = Number(document.getElementById("total").value);
    let attended = Number(document.getElementById("attended").value);

    if (!name || total <= 0 || attended < 0) {
        alert("Invalid input");
        return;
    }

    let percentage = ((attended / total) * 100).toFixed(2);

    subjects.push({ name, total, attended, percentage });
    localStorage.setItem("subjects", JSON.stringify(subjects));

    renderTable();
}

function renderTable() {
    let tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    subjects.forEach(sub => {
        let statusClass = sub.percentage < 75 ? "low" : "good";
        let row = `
            <tr>
                <td>${sub.name}</td>
                <td>${sub.total}</td>
                <td>${sub.attended}</td>
                <td>${sub.percentage}%</td>
                <td class="${statusClass}">
                    ${sub.percentage < 75 ? "Low Attendance" : "Safe"}
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

renderTable();
