//Crie um aplicativo React do zero.
//Mostra um único h1 que diz "Bom dia" se estiver entre meia-noite e 12h.
//ou "Boa tarde" se entre 12h e 18h.
//ou "Boa noite" se estiver entre 18h e meia-noite.
//Aplica o estilo "título" em estilos.css
//Alterar dinamicamente a cor do h1 usando estilos CSS embutidos.
//Manhã = vermelho, Tarde = verde, Noite = azul.

import React from "react";
import ReactDom from "react-dom";

let hour = new Date().getHours();

let x;

let color = {
  color: "black",
};

if (hour > 0 && hour <= 12) {
  console.log("Bom dia");
  x = "Bom dia";
  color.color = "red";
} else if (hour >= 12 && hour <= 18) {
  console.log("Boa tarde");
  x = "Boa tarde";
  color.color = "green";
} else {
  console.log("boa Noite");
  x = "Boa noite";
  color.color = "blue";
}

ReactDom.render(
  <h1 style={color}>
    {x} {hour}
  </h1>,
  document.getElementById("root")
);
