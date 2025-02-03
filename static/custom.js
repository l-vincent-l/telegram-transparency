addEventListener("DOMContentLoaded", () => {
  $("#dataTable").bootstrapTable("sortBy", {
    field: "requests",
    sortOrder: "desc",
  });
});
