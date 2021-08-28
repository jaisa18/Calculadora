const express = require("express");
const app = express();
var funcoesRoute = require("./routes/funcoesRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/funcoes", funcoesRoute);

app.listen("7000", function () {
  console.log("Projeto funcionando!");
});
