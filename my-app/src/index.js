import React from "react";
import reactDom from "react-dom";

function HelloWorld() {
    return (
        <p>Olá Mundo!!  </p>
    )
}

reactDom.render(
    <HelloWorld />,

    document.getElementById("root")
);