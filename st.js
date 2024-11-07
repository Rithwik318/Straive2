// json2html.js
export default function json2html(data) {
  // Create the table header
  let html = `<table data-user="rithwik.j2002@gmail.com">
    <thead>
      <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
    </thead>
    <tbody>`;

  // Populate the table rows
  data.forEach(row => {
    html += "<tr>";
    html += `<td>${row.Name || ""}</td>`;
    html += `<td>${row.Age || ""}</td>`;
    html += `<td>${row.Gender || ""}</td>`;
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}