// Aguarda o carregamento completo do DOM para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       FUNCIONALIDADE 1: Modo Escuro (Acessibilidade)
       ========================================== */
    const toggleDarkModeBtn = document.getElementById("toggle-darkmode");
    
    toggleDarkModeBtn.addEventListener("click", () => {
        // Altera a classe no body para disparar as variáveis CSS do modo escuro
        document.body.classList.toggle("dark-mode");
    });

    /* ==========================================
       FUNCIONALIDADE 2: Validador Interativo do Quiz
       ========================================== */
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");

    quizForm.addEventListener("submit", (event) => {
        // Previne o recarregamento automático da página ao enviar o formulário
        event.preventDefault();

        // Captura a opção selecionada pelo usuário através do name "answer"
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        
        // Verifica se o usuário de fato selecionou uma opção antes de enviar
        if (!selectedOption) return;

        const userResponse = selectedOption.value;

        // Processa a informação armazenada na variável e altera o DOM dinamicamente
        quizResult.classList.remove("hidden", "correct", "incorrect");

        if (userResponse === "correta") {
            quizResult.textContent = "Excelente! Você acertou. Sinais físicos inconsistentes e falhas de áudio/iluminação são fortes indicadores de mídias sintetizadas por IA.";
            quizResult.classList.add("correct");
        } else {
            quizResult.textContent = "Resposta incorreta. Lembre-se: Deepfakes de IA costumam falhar em aspectos físicos sutis como piscar de olhos e sincronia de áudio. Tente novamente!";
            quizResult.classList.add("incorrect");
        }
    });
});
