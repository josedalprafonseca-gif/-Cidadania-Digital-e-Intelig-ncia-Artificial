/**
 * Componente Curricular: Educação Digital e Computação
 * Controle Operacional do Portal de Cidadania Digital
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // Injeção Segura de Referências do DOM
    const toggleDarkModeBtn = document.getElementById("toggle-darkmode");
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");

    /* ==========================================================================
       GERENCIAMENTO DE TEMA (Acessibilidade e Manipulação do DOM)
       ========================================================================== */
    if (toggleDarkModeBtn) {
        toggleDarkModeBtn.addEventListener("click", () => {
            const isDarkModeActive = document.body.classList.toggle("dark-mode");
            
            // Ajuste semântico e visual do estado do botão
            toggleDarkModeBtn.textContent = isDarkModeActive ? "Modo Claro" : "Modo Escuro";
        });
    }

    /* ==========================================================================
       SISTEMA INTERATIVO DO QUIZ (Processamento de Dados e Eventos)
       ========================================================================== */
    if (quizForm && quizResult) {
        quizForm.addEventListener("submit", (event) => {
            // Impede a submissão nativa e recarregamento da janela
            event.preventDefault();

            // Captura dinâmica do elemento marcado
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            
            if (!selectedOption) return;

            const responseValue = selectedOption.value;

            // Reset estrutural das classes utilitárias
            quizResult.classList.remove("hidden", "correct", "incorrect");

            // Estrutura Condicional Analítica (Processamento das Variáveis)
            if (responseValue === "correta") {
                quizResult.textContent = "Excelente! Você identificou corretamente. Algoritmos de IA frequentemente cometem microerros biológicos, como renderizar piscadas assíncronas e falhas na iluminação tridimensional do rosto.";
                quizResult.classList.add("correct");
            } else {
                quizResult.textContent = "Resposta incorreta. Atenção: Embora a alta resolução seja comum hoje em dia, as deepfakes entregam-se em falhas biológicas sutis de movimento e física de luz. Revise as dicas abaixo e tente novamente!";
                quizResult.classList.add("incorrect");
            }
        });
    }
});
