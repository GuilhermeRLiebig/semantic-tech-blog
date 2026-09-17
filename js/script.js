/* =========================
   ELEMENTOS PRINCIPAIS
========================= */

const themeButton =
    document.getElementById("theme-toggle");

const themeIcon =
    themeButton.querySelector("i");

const menuButton =
    document.getElementById("menu-toggle");

const menuIcon =
    menuButton.querySelector("i");

const nav =
    document.getElementById("nav");

const backToTop =
    document.getElementById("back-to-top");

const pageProgress =
    document.getElementById("page-progress");


/* =========================
   ANO AUTOMÁTICO
========================= */

document.getElementById(
    "current-year"
).textContent =
    new Date().getFullYear();


/* =========================
   TEMA
========================= */

const savedTheme =
    localStorage.getItem("theme");


const prefersLight =
    window.matchMedia(
        "(prefers-color-scheme: light)"
    ).matches;


if (
    savedTheme === "light" ||
    (!savedTheme && prefersLight)
) {

    document.body.classList.add(
        "light"
    );

    themeIcon.classList.remove(
        "fa-moon"
    );

    themeIcon.classList.add(
        "fa-sun"
    );

}


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const isLight =
            document.body.classList.contains(
                "light"
            );


        localStorage.setItem(
            "theme",
            isLight
                ? "light"
                : "dark"
        );


        themeIcon.classList.toggle(
            "fa-moon",
            !isLight
        );


        themeIcon.classList.toggle(
            "fa-sun",
            isLight
        );

    }
);


/* =========================
   MENU MOBILE
========================= */

menuButton.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "active"
        );


        const open =
            nav.classList.contains(
                "active"
            );


        menuIcon.classList.toggle(
            "fa-bars",
            !open
        );


        menuIcon.classList.toggle(
            "fa-xmark",
            open
        );


        menuButton.setAttribute(
            "aria-label",
            open
                ? "Fechar menu"
                : "Abrir menu"
        );

    }
);


document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "active"
                );


                menuIcon.classList.remove(
                    "fa-xmark"
                );


                menuIcon.classList.add(
                    "fa-bars"
                );

            }
        );

    });


/* =========================
   SCROLL
========================= */

function updateScroll() {

    const scrollTop =
        window.scrollY;


    if (scrollTop > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }


    const pageHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;


    const percentage =
        pageHeight > 0
            ? (
                scrollTop /
                pageHeight
            ) * 100
            : 0;


    pageProgress.style.width =
        `${percentage}%`;

}


window.addEventListener(
    "scroll",
    updateScroll
);


updateScroll();


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================
   NAVEGAÇÃO ATIVA
========================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav a"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    navLinks.forEach(
                        link => {

                            link.classList.remove(
                                "active"
                            );

                        }
                    );


                    const active =
                        document.querySelector(
                            `.nav a[href="#${entry.target.id}"]`
                        );


                    if (active) {

                        active.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(
    section =>
        sectionObserver.observe(
            section
        )
);


/* =========================
   REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".content-card, .card, .semantic-figure, .tag-grid article, .tag-explorer, .code-project, .quiz-shell"
    );


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );


                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    element =>
        revealObserver.observe(
            element
        )
);


/* =========================
   DADOS DO EXPLORADOR
========================= */

const tagData = {

    header: {

        title: "<header>",

        description:
            "Representa o cabeçalho de uma página ou de uma seção.",

        usage:
            "É adequado para títulos, logotipos, introduções e outros elementos que apresentam aquela área.",

        example:
`<header>
    <h1>Meu site</h1>
</header>`

    },


    nav: {

        title: "<nav>",

        description:
            "Representa uma região contendo links de navegação.",

        usage:
            "É utilizada principalmente para menus e conjuntos importantes de links.",

        example:
`<nav>
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
</nav>`

    },


    main: {

        title: "<main>",

        description:
            "Representa o conteúdo principal do documento.",

        usage:
            "Deve conter aquilo que está diretamente relacionado ao objetivo central da página.",

        example:
`<main>
    <h1>Conteúdo principal</h1>

    <p>
        Conteúdo da página.
    </p>
</main>`

    },


    article: {

        title: "<article>",

        description:
            "Representa um conteúdo independente que pode fazer sentido mesmo isoladamente.",

        usage:
            "É indicado para posts, notícias, artigos, comentários e publicações.",

        example:
`<article>
    <h2>Minha publicação</h2>

    <p>
        Conteúdo do artigo.
    </p>
</article>`

    },


    section: {

        title: "<section>",

        description:
            "Representa uma seção temática dentro do documento.",

        usage:
            "É útil para agrupar conteúdos relacionados que formam uma parte específica da página.",

        example:
`<section>
    <h2>Benefícios</h2>

    <p>
        Conteúdo da seção.
    </p>
</section>`

    },


    figure: {

        title: "<figure>",

        description:
            "Agrupa conteúdo ilustrativo relacionado ao conteúdo principal.",

        usage:
            "Pode representar imagens, diagramas, gráficos ou códigos e geralmente pode receber uma legenda.",

        example:
`<figure>

    <img
        src="imagem.jpg"
        alt="Descrição da imagem"
    >

    <figcaption>
        Legenda da imagem
    </figcaption>

</figure>`

    },


    aside: {

        title: "<aside>",

        description:
            "Representa conteúdo complementar ao conteúdo principal.",

        usage:
            "Pode ser utilizado para informações adicionais, barras laterais, curiosidades ou conteúdos relacionados.",

        example:
`<aside>
    <h3>Veja também</h3>

    <p>
        Conteúdo complementar.
    </p>
</aside>`

    },


    footer: {

        title: "<footer>",

        description:
            "Representa o rodapé de uma página ou seção.",

        usage:
            "Normalmente apresenta autoria, copyright, contato ou outros links relacionados.",

        example:
`<footer>
    <p>
        © 2026 Meu Site
    </p>
</footer>`

    }

};


/* =========================
   EXPLORADOR
========================= */

const tagButtons =
    document.querySelectorAll(
        ".tag-button"
    );

const tagTitle =
    document.getElementById(
        "tag-title"
    );

const tagDescription =
    document.getElementById(
        "tag-description"
    );

const tagUsage =
    document.getElementById(
        "tag-usage"
    );

const tagExample =
    document.getElementById(
        "tag-example"
    );


tagButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            tagButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            const data =
                tagData[
                    button.dataset.tag
                ];


            tagTitle.textContent =
                data.title;

            tagDescription.textContent =
                data.description;

            tagUsage.textContent =
                data.usage;

            tagExample.textContent =
                data.example;

        }
    );

});


/* =========================
   COPIAR TEXTO
========================= */

async function copyText(text) {

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        await navigator.clipboard.writeText(
            text
        );

        return;

    }


    const textarea =
        document.createElement(
            "textarea"
        );


    textarea.value = text;


    document.body.appendChild(
        textarea
    );


    textarea.select();


    document.execCommand(
        "copy"
    );


    textarea.remove();

}


/* =========================
   COPIAR CÓDIGOS
========================= */

const copyTagButton =
    document.getElementById(
        "copy-tag-code"
    );


copyTagButton.addEventListener(
    "click",
    async () => {

        await copyText(
            tagExample.textContent
        );


        const original =
            copyTagButton.innerHTML;


        copyTagButton.innerHTML =
            '<i class="fa-solid fa-check"></i> Copiado';


        setTimeout(
            () => {

                copyTagButton.innerHTML =
                    original;

            },
            1400
        );

    }
);


const copyMainButton =
    document.getElementById(
        "copy-main-code"
    );

const mainCode =
    document.getElementById(
        "main-code"
    );


copyMainButton.addEventListener(
    "click",
    async () => {

        await copyText(
            mainCode.textContent
        );


        const original =
            copyMainButton.innerHTML;


        copyMainButton.innerHTML =
            '<i class="fa-solid fa-check"></i> Copiado';


        setTimeout(
            () => {

                copyMainButton.innerHTML =
                    original;

            },
            1400
        );

    }
);


/* =========================
   QUIZ
========================= */

const quizQuestions = [

    {

        question:
            "Qual elemento deve representar o conteúdo principal de uma página?",

        options: [
            "<header>",
            "<main>",
            "<aside>",
            "<nav>"
        ],

        answer: 1,

        explanation:
            "<main> representa o conteúdo central e principal do documento."

    },


    {

        question:
            "Qual tag é mais adequada para uma publicação de blog que pode fazer sentido isoladamente?",

        options: [
            "<section>",
            "<div>",
            "<article>",
            "<footer>"
        ],

        answer: 2,

        explanation:
            "<article> representa conteúdo independente, como notícias, posts ou publicações."

    },


    {

        question:
            "Qual elemento é destinado principalmente a conjuntos de links de navegação?",

        options: [
            "<nav>",
            "<aside>",
            "<figure>",
            "<main>"
        ],

        answer: 0,

        explanation:
            "<nav> representa uma região contendo os principais links de navegação."

    },


    {

        question:
            "Qual é a principal diferença entre <img> e <figure>?",

        options: [
            "<img> só funciona dentro de <figure>.",
            "<figure> substitui completamente a tag <img>.",
            "<img> insere a imagem, enquanto <figure> agrupa conteúdo ilustrativo relacionado.",
            "Não existe diferença entre elas."
        ],

        answer: 2,

        explanation:
            "<img> é o elemento da imagem. <figure> pode agrupar a imagem e outros elementos, como <figcaption>."

    },


    {

        question:
            "Qual elemento representa conteúdo complementar ao conteúdo principal?",

        options: [
            "<header>",
            "<main>",
            "<aside>",
            "<nav>"
        ],

        answer: 2,

        explanation:
            "<aside> representa conteúdo complementar, como informações relacionadas ou uma barra lateral."

    },


    {

        question:
            "Qual elemento pode ser utilizado para dar uma legenda a uma <figure>?",

        options: [
            "<caption>",
            "<figcaption>",
            "<description>",
            "<label>"
        ],

        answer: 1,

        explanation:
            "<figcaption> fornece uma legenda associada ao conteúdo de uma <figure>."

    },


    {

        question:
            "Uma vantagem do HTML semântico para acessibilidade é:",

        options: [
            "Aumentar automaticamente a velocidade da internet.",
            "Permitir que leitores de tela compreendam melhor a estrutura da página.",
            "Eliminar a necessidade de CSS.",
            "Converter HTML automaticamente em JavaScript."
        ],

        answer: 1,

        explanation:
            "Elementos semânticos ajudam tecnologias assistivas a identificar corretamente as diferentes regiões da página."

    },


    {

        question:
            "Qual afirmação sobre <section> e <article> está correta?",

        options: [
            "São exatamente a mesma coisa.",
            "<section> só pode existir dentro de <article>.",
            "<article> é indicado para conteúdo independente, enquanto <section> agrupa conteúdo por tema.",
            "<article> serve apenas para imagens."
        ],

        answer: 2,

        explanation:
            "<article> representa conteúdo independente. <section> organiza uma parte temática do documento."

    }

];


/* =========================
   ELEMENTOS DO QUIZ
========================= */

const quizCounter =
    document.getElementById(
        "quiz-counter"
    );

const quizScoreElement =
    document.getElementById(
        "quiz-score"
    );

const quizProgressBar =
    document.getElementById(
        "quiz-progress-bar"
    );

const quizQuestion =
    document.getElementById(
        "quiz-question"
    );

const quizOptions =
    document.getElementById(
        "quiz-options"
    );

const quizFeedback =
    document.getElementById(
        "quiz-feedback"
    );

const nextQuestionButton =
    document.getElementById(
        "next-question"
    );

const quizCard =
    document.getElementById(
        "quiz-card"
    );

const quizResult =
    document.getElementById(
        "quiz-result"
    );

const resultTitle =
    document.getElementById(
        "result-title"
    );

const resultScore =
    document.getElementById(
        "result-score"
    );

const resultMessage =
    document.getElementById(
        "result-message"
    );

const bestScoreElement =
    document.getElementById(
        "best-score"
    );

const restartQuizButton =
    document.getElementById(
        "restart-quiz"
    );


let currentQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let answered = false;


/* =========================
   EMBARALHAR
========================= */

function shuffle(array) {

    const copy = [...array];


    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const random =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[random]
        ] =
        [
            copy[random],
            copy[i]
        ];

    }


    return copy;

}


/* =========================
   INICIAR QUIZ
========================= */

function startQuiz() {

    currentQuestions =
        shuffle(
            quizQuestions
        );


    currentQuestionIndex = 0;

    quizScore = 0;

    answered = false;


    quizCard.hidden = false;

    quizResult.hidden = true;


    quizScoreElement.textContent =
        "0 pontos";


    renderQuestion();

}


/* =========================
   MOSTRAR PERGUNTA
========================= */

function renderQuestion() {

    answered = false;


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    quizCounter.textContent =
        `Pergunta ${
            currentQuestionIndex + 1
        } de ${
            currentQuestions.length
        }`;


    quizQuestion.textContent =
        question.question;


    quizOptions.innerHTML = "";

    quizFeedback.innerHTML = "";

    quizFeedback.className =
        "quiz-feedback";


    nextQuestionButton.hidden =
        true;


    const progress =
        (
            currentQuestionIndex /
            currentQuestions.length
        ) * 100;


    quizProgressBar.style.width =
        `${progress}%`;


    const letters =
        ["A", "B", "C", "D"];


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "quiz-option";


            button.innerHTML =
                `
                    <span class="option-letter">
                        ${letters[index]}
                    </span>

                    <span>
                        ${escapeHTML(option)}
                    </span>
                `;


            button.addEventListener(
                "click",
                () =>
                    selectAnswer(
                        index,
                        button
                    )
            );


            quizOptions.appendChild(
                button
            );

        }
    );

}


/* =========================
   ESCAPAR HTML
========================= */

function escapeHTML(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

}


/* =========================
   ESCOLHER RESPOSTA
========================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (answered) {
        return;
    }


    answered = true;


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    const optionButtons =
        quizOptions.querySelectorAll(
            ".quiz-option"
        );


    optionButtons.forEach(
        button => {

            button.disabled = true;

        }
    );


    const correctButton =
        optionButtons[
            question.answer
        ];


    correctButton.classList.add(
        "correct"
    );


    if (
        selectedIndex ===
        question.answer
    ) {

        quizScore++;


        selectedButton.classList.add(
            "correct"
        );


        quizFeedback.className =
            "quiz-feedback visible correct";


        quizFeedback.innerHTML =
            `
                <strong>
                    <i class="fa-solid fa-circle-check"></i>
                    Resposta correta!
                </strong>

                ${escapeHTML(
                    question.explanation
                )}
            `;

    } else {

        selectedButton.classList.add(
            "wrong"
        );


        quizFeedback.className =
            "quiz-feedback visible wrong";


        quizFeedback.innerHTML =
            `
                <strong>
                    <i class="fa-solid fa-circle-xmark"></i>
                    Não foi dessa vez.
                </strong>

                ${escapeHTML(
                    question.explanation
                )}
            `;

    }


    quizScoreElement.textContent =
        `${quizScore} ${
            quizScore === 1
                ? "ponto"
                : "pontos"
        }`;


    const progress =
        (
            (
                currentQuestionIndex + 1
            ) /
            currentQuestions.length
        ) * 100;


    quizProgressBar.style.width =
        `${progress}%`;


    nextQuestionButton.hidden =
        false;


    if (
        currentQuestionIndex ===
        currentQuestions.length - 1
    ) {

        nextQuestionButton.innerHTML =
            `
                Ver resultado
                <i class="fa-solid fa-flag-checkered"></i>
            `;

    } else {

        nextQuestionButton.innerHTML =
            `
                Próxima pergunta
                <i class="fa-solid fa-arrow-right"></i>
            `;

    }

}


/* =========================
   PRÓXIMA QUESTÃO
========================= */

nextQuestionButton.addEventListener(
    "click",
    () => {

        if (
            currentQuestionIndex <
            currentQuestions.length - 1
        ) {

            currentQuestionIndex++;

            renderQuestion();

        } else {

            finishQuiz();

        }

    }
);


/* =========================
   FINALIZAR QUIZ
========================= */

function finishQuiz() {

    quizCard.hidden = true;

    quizResult.hidden = false;


    const total =
        currentQuestions.length;


    const percentage =
        Math.round(
            (
                quizScore /
                total
            ) * 100
        );


    resultScore.textContent =
        `${quizScore}/${total}`;


    if (percentage === 100) {

        resultTitle.textContent =
            "Perfeito!";

        resultMessage.textContent =
            "Você acertou todas as questões. Seu domínio dos conceitos básicos de HTML semântico está excelente.";

    } else if (
        percentage >= 75
    ) {

        resultTitle.textContent =
            "Muito bom!";

        resultMessage.textContent =
            "Você demonstrou uma boa compreensão de HTML semântico. Mais uma revisão e você chega aos 100%.";

    } else if (
        percentage >= 50
    ) {

        resultTitle.textContent =
            "Bom começo!";

        resultMessage.textContent =
            "Você já compreendeu vários conceitos, mas vale revisar o explorador de tags antes de tentar novamente.";

    } else {

        resultTitle.textContent =
            "Hora de revisar!";

        resultMessage.textContent =
            "Volte às seções do projeto, explore as tags e tente novamente. O quiz embaralha as perguntas a cada tentativa.";

    }


    const savedBest =
        Number(
            localStorage.getItem(
                "semanticQuizBest"
            )
        ) || 0;


    const best =
        Math.max(
            savedBest,
            quizScore
        );


    localStorage.setItem(
        "semanticQuizBest",
        best
    );


    bestScoreElement.textContent =
        `${best}/${total}`;

}


/* =========================
   REINICIAR QUIZ
========================= */

restartQuizButton.addEventListener(
    "click",
    startQuiz
);


/* =========================
   MELHOR RESULTADO INICIAL
========================= */

const initialBest =
    Number(
        localStorage.getItem(
            "semanticQuizBest"
        )
    ) || 0;


bestScoreElement.textContent =
    `${initialBest}/${quizQuestions.length}`;


/* =========================
   INICIAR
========================= */

startQuiz();