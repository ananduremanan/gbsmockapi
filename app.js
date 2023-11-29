const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const customer = [
  { customerId: "HJ4565", customerName: "guj8956", totalRows: 100 },
  { customerId: "GH6767", customerName: "har2356", totalRows: 100 },
  { customerId: "TY4654", customerName: "him5825", totalRows: 100 },
  { customerId: "GG6t76", customerName: "jhar4589", totalRows: 100 },
  { customerId: "ER4553", customerName: "ker4512", totalRows: 100 },
  { customerId: "RT34543", customerName: "ker4512", totalRows: 100 },
  { customerId: "YU4564", customerName: "ker4512", totalRows: 100 },
  { customerId: "TY243", customerName: "ker4512", totalRows: 100 },
  { customerId: "KJ4363", customerName: "ker4512", totalRows: 100 },
  { customerId: "HJ645535", customerName: "ker4512", totalRows: 100 },
  { customerId: "HHJ6778", customerName: "ker4512", totalRows: 100 },
  { customerId: "JK5654", customerName: "ker4512", totalRows: 100 },
  { customerId: "FG4543", customerName: "ker4512", totalRows: 100 },
  { customerId: "GHG4535", customerName: "ker4512", totalRows: 100 },
  { customerId: "HJ45", customerName: "ker4512", totalRows: 100 },
  { customerId: "TY4535", customerName: "ker4512", totalRows: 100 },
];

app.get("/customer", (req, res) => res.send(customer));

app.listen(5050, () => console.log("Listening at 5050"));
