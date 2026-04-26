const table = new Tabulator("#example-table", {
  layout: "fitColumns",
  placeholder: "Loading data...",
  columns: [
    {title: "ID", field: "id", width: 60},
    {title: "Name", field: "name"},
    {title: "Username", field: "username"},
    {title: "Email", field: "email"},
    {title: "City", field: "address.city"}
  ]
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    table.setData(data);
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });
