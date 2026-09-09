const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach(function(pergunta) {

    pergunta.addEventListener("click", function() {

        const resposta = pergunta.nextElementSibling;
        const icone = pergunta.querySelector(".faq-icone");

        if (resposta.style.display === "block") {

            resposta.style.display = "none";
            icone.textContent = "+";

        } else {

            resposta.style.display = "block";
            icone.textContent = "−";

        }

    });

});