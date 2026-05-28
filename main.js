//Arquivo JavaScript para interatividade na página

//Arquivo JavaScript para interatividade na página

/** Resumo do que o código faz:
O código adiciona rastreamento de cliques aos links de menu da página.
Ele mantém um contador de cliques por sessão.
Ele registra eventos e avisos no console.
Ele usa try/catch para lidar com links que não existem no HTML. */

/** Explicação detalhada:
 Esse código basicamente 'monitora' os cliques nos links, para ver se estão funcionando certinho.
 Caso não estejam uma mensagem de erro é mostrada no console. E se tudo estiver certo, mensagens de 
 que está tudo certo também são mostradas no console.
 */

const TITULO_PROJETO = "Diagnóstico do Resumo de JavaScript";
let totalCliquesMenu = 0; // Variável let pois o valor vai mudar

//Const para guardar as seções do resumo
const secoesDoResumo = [
	{ id: "intro", titulo: "Introdução a Programação" },
	{ id: "dados", titulo: "Variáveis, Constantes e Tipos de Dados" },
	{ id: "controle", titulo: "Estruturas de Controle" },
	{ id: "funcoes", titulo: "Funções e Erros" },
	{ id: "objetos", titulo: "Objetos e Arrays" }
];

// Função para formatar mensagens de log
function formatarLog(nomeSecao, acao) {
	return `[Seção: ${nomeSecao}] -> Evento: ${acao}`;
}

// Mensagens do console
console.info(`%c--- Inicializando: ${TITULO_PROJETO} ---`, "color: #a599c9; font-weight: bold;");
console.log("Sistema de monitoramento do menu carregado com sucesso.");
console.debug("Modo de depuração ativo: Verificando integridade dos links do HTML...");

// Mapeamento, loops e tratamento de erros
// Usando o método .forEach() para iterar sobre o array de objetos das seções
secoesDoResumo.forEach(function(secao) {
	
	// Parte try-catch para pegar falhas caso algum ID mude no HTML
	//Mudar ID dá erro que o link correspondente não foi encontrado, e isso é capturado e exibido no console como um erro de estrutura.
	try {
		// Tenta buscar o link do HTML usando o ID do objeto
		const linkElemento = document.querySelector(`a[href="#${secao.id}"]`);
		
		// Geração ativa de erros (throw): Se o link não existir no HTML, dispara um erro
		if (!linkElemento) {
			throw new Error(`O link para a seção '#${secao.id}' não foi encontrado na página!`);
		}

		// Se o link existir, adiciona interatividade (ouvinte de clique)
		linkElemento.addEventListener("click", function() {
			totalCliquesMenu++;
			
			// Executa a função que criamos e exibe o retorno no console.log
			const mensagem = formatarLog(secao.titulo, "Usuário clicou para ler esta seção.");
			console.log(mensagem);
			console.log(`Total de interações com o menu nesta sessão: ${totalCliquesMenu}`);

			// Exemplo de uso do console.warn (Aviso)
			if (totalCliquesMenu >= 5) {
				console.warn("Atenção: O usuário está navegando intensamente pelo menu!");
			}
		});

	} catch (error) {
		// Captura do erro: Se o bloco 'try' falhar ou o 'throw' for acionado, cai aqui
		console.error(`[Erro de Estrutura]: ${error.message}`);
	}
});

console.info("--- Inicialização Concluída ---");
