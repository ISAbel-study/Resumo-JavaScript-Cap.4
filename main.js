//Arquivo JavaScript para interatividade na página

//aguarda que todo o html seja carregado antes de colocar interação
document.addEventListener("DOMContentLoaded", function(){

    // 1. Animação fofa no console
    console.log("%c✨ Bons estudos! Você está indo super bem! ✨", "color: #ff4081; font-size: 16px; font-weight: bold;");

    // 2. Seleciona todas linhas da tabela conteúdo
    // Buscamos as tags 'tr' (linhas) que estão dentro dos corpos (tbody) das tabelas
    const linhasTabela = document.querySelectorAll(".table1 tbody tr, .table2 tbody tr, .table3 tbody tr");

    // 3. ADICIONA EFEITOS EM CADA LINHA DISPONÍVEL
    linhasTabela.forEach(function(linha){

        // Quando o mouse entra na linha: destaca com uma corzinha de marca-texto fofa
        linha.addEventListener("mouseenter", function(){
            linha.style.backgroundColor = "#fffde7"; // Amarelo pastel bem suave
            linha.style.cursor = "pointer";          // Transforma o mouse em mãozinha
            linha.style.transition = "background-color 0.3s ease"; // Deixa a mudança suave
        });

        // Quando o mouse sai da linha: volta para o fundo original dela
        linha.addEventListener("mouseleave", function(){
            linha.style.backgroundColor = ""; // Remove a propriedade e deixa o CSS original agir
        });

        // Quando o usuário clica na linha: solta um efeito visual ou marca permanentemente
        linha.addEventListener("click", function(){
            // Verifica se a linha já está marcada como "concluída"
            if (linha.style.opacity === "0.6") {
                linha.style.opacity = "1"; // Volta ao normal
                linha.style.textDecoration = "none";
            } else {
                linha.style.opacity = "0.6"; // Opacidade menor indica que você já leu/estudou esse item!
                linha.style.textDecoration = "line-through"; // Risca o texto levemente para controle de estudo
            }
        });
    });
});