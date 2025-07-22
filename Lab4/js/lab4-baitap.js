let students = [];

let n = parseInt(prompt("Nhập số lượng sinh viên:"));
for (let i = 0; i < n; i++) {
  let student = {};
  student.name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
  student.diem = parseFloat(prompt(`Nhập điểm của ${student.name}:`));
  student.result = student.diem >= 5 ? "Đậu" : "Rớt";
  students.push(student);
}

let tableHTML = `
  <tr>
    <th>Họ tên</th>
    <th>Điểm</th>
    <th>Học lực</th>
  </tr>
`;

for (let i = 0; i < students.length; i++) {
  tableHTML += `
    <tr>
      <td>${students[i].name}</td>
      <td>${students[i].diem}</td>
      <td>${students[i].result}</td>
    </tr>
  `;
}

document.getElementById("student").innerHTML = tableHTML;
