const esquerda = document.querySelector(".esquerda");
const direita = document.querySelector(".direita");
const recipiente = document.querySelector(".recipiente");

esquerda.addEventListener("mouseenter", () =>
    recipiente.classList.add("hover-esquerda")
);
esquerda.addEventListener("mouseleave", () =>
    recipiente.classList.remove("hover-esquerda")
);
direita.addEventListener("mouseenter", () =>
    recipiente.classList.add("hover-direita")
);
direita.addEventListener("mouseleave", () =>
    recipiente.classList.remove("hover-direita")
);