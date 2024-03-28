// vetor das perguntas
const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "define",
            "var",
            "let",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário",
            "<!-- Comentário -->",
            "/* Comentário */",
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes é um operador de comparação em JavaScript?",
        respostas: [
            "=",
            "==",
            "===",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para se referir a um arquivo externo de script chamado 'script.js'?",
        respostas: [
            "<script src='script.js'></script>",
            "<script href='script.js'></script>",
            "<script name='script.js'></script>",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o método usado para imprimir algo no console em JavaScript?",
        respostas: [
            "log()",
            "print()",
            "console()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Para verificar se uma variável é do tipo 'string'.",
            "Para retornar o tipo de uma variável.",
            "Para verificar se uma variável é definida.",
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "addToEnd()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão '3 + 2 + '5' em JavaScript?",
        respostas: [
            "10",
            "7",
            "325",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
        respostas: [
            "Para selecionar um elemento pelo seu ID.",
            "Para selecionar um elemento pelo seu nome.",
            "Para selecionar um elemento usando um seletor CSS.",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o valor do tipo de dados 'undefined' em JavaScript?",
        respostas: [
            "0",
            "null",
            "indefinido",
        ],
        correta: 2
    }
];

// chamando a class e id do html
const quiz = document.querySelector('#quiz')
const templete = document.querySelector('template');

// total de acertos
const corretas = new Set();
// total de itens
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector('#acertos span');

// laço de repetição
for (const item of perguntas) {
    // pegando as perguntas
    const quizItem = templete.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    // exibindo as respostas
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        // verificação se a resposta esta correta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value = item.correta;
            corretas.delete(item);
            if (estaCorreta) {
                corretas.add(item)
            }
            // mostar o total de acertos     
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
        }



        quizItem.querySelector('dl').appendChild(dt);
    };

    // remove a frase dentro do span html
    quizItem.querySelector('dl dt').remove();

    // coloca a pergunta na tela
    quiz.appendChild(quizItem);

}