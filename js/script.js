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

const installButton =
    document.getElementById("install-app");


/* =========================
   ANO
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
   MENU
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


    backToTop.classList.toggle(
        "visible",
        scrollTop > 500
    );


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
   NAV ATIVA
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
                    !entry.isIntersecting
                ) {
                    return;
                }


                navLinks.forEach(
                    link =>
                        link.classList.remove(
                            "active"
                        )
                );


                const activeLink =
                    document.querySelector(
                        `.nav a[href="#${entry.target.id}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

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
   ANIMAÇÕES
========================= */

const revealElements =
    document.querySelectorAll(
        ".content-card, .card, .semantic-figure, .tag-grid article, .tag-explorer, .playground-grid, .semantic-analyzer, .code-project, .quiz-shell"
    );


revealElements.forEach(
    element =>
        element.classList.add(
            "reveal"
        )
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
   EXPLORADOR
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
   COPIAR
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


async function temporaryButtonMessage(
    button,
    message
) {

    const original =
        button.innerHTML;


    button.innerHTML = message;


    setTimeout(
        () => {
            button.innerHTML = original;
        },
        1400
    );

}


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


        temporaryButtonMessage(
            copyTagButton,
            '<i class="fa-solid fa-check"></i> Copiado'
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


        temporaryButtonMessage(
            copyMainButton,
            '<i class="fa-solid fa-check"></i> Copiado'
        );

    }
);


/* =========================
   PLAYGROUND TEMPLATES
========================= */

const playgroundTemplates = {

    blog:
`<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Meu Blog</title>
</head>

<body>

    <header>
        <h1>Meu Blog de Tecnologia</h1>

        <nav>
            <a href="#inicio">Início</a>
            <a href="#artigo">Artigo</a>
        </nav>
    </header>

    <main>

        <article id="artigo">

            <header>
                <h2>HTML Semântico</h2>
            </header>

            <section>

                <p>
                    HTML semântico ajuda a organizar
                    e dar significado ao conteúdo.
                </p>

                <figure>

                    <img
                        src="https://via.placeholder.com/400x180"
                        alt="Exemplo ilustrativo de desenvolvimento web"
                    >

                    <figcaption>
                        Exemplo de conteúdo ilustrativo.
                    </figcaption>

                </figure>

            </section>

        </article>

        <aside>
            Conteúdo complementar.
        </aside>

    </main>

    <footer>
        <p>© Meu Blog</p>
    </footer>

</body>

</html>`,


    article:
`<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Artigo</title>
</head>

<body>

    <header>
        <h1>Dev Journal</h1>
    </header>

    <main>

        <article>

            <header>
                <h2>Por que aprender HTML?</h2>
            </header>

            <section>

                <p>
                    HTML é a base estrutural da Web.
                </p>

            </section>

            <section>

                <h2>Conclusão</h2>

                <p>
                    Uma boa estrutura melhora
                    acessibilidade e manutenção.
                </p>

            </section>

        </article>

    </main>

    <footer>
        <p>Publicado por Guilherme</p>
    </footer>

</body>

</html>`,


    portfolio:
`<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <title>Meu Portfólio</title>
</head>

<body>

    <header>

        <h1>Guilherme</h1>

        <nav>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
        </nav>

    </header>

    <main>

        <section id="sobre">

            <h2>Sobre mim</h2>

            <p>
                Estudante de Ciência da Computação.
            </p>

        </section>

        <section id="projetos">

            <h2>Projetos</h2>

            <article>

                <h3>Semantic.dev</h3>

                <p>
                    Plataforma interativa para
                    estudar HTML semântico.
                </p>

            </article>

        </section>

    </main>

    <footer>
        <p>Meu Portfólio</p>
    </footer>

</body>

</html>`

};


/* =========================
   PLAYGROUND
========================= */

const htmlEditor =
    document.getElementById(
        "html-editor"
    );

const htmlPreview =
    document.getElementById(
        "html-preview"
    );

const templateSelect =
    document.getElementById(
        "template-select"
    );

const resetPlaygroundButton =
    document.getElementById(
        "reset-playground"
    );

const copyPlaygroundButton =
    document.getElementById(
        "copy-playground"
    );

const downloadPlaygroundButton =
    document.getElementById(
        "download-playground"
    );

const editorLines =
    document.getElementById(
        "editor-lines"
    );

const editorCharacters =
    document.getElementById(
        "editor-characters"
    );

const saveStatus =
    document.getElementById(
        "save-status"
    );

const scoreRing =
    document.getElementById(
        "score-ring"
    );

const semanticScore =
    document.getElementById(
        "semantic-score"
    );

const semanticLevel =
    document.getElementById(
        "semantic-level"
    );

const semanticChecks =
    document.getElementById(
        "semantic-checks"
    );


const savedPlaygroundCode =
    localStorage.getItem(
        "semanticPlaygroundCode"
    );


htmlEditor.value =
    savedPlaygroundCode ||
    playgroundTemplates.blog;


let playgroundTimeout;


/* =========================
   PREVIEW
========================= */

function updatePlayground() {

    const code =
        htmlEditor.value;


    htmlPreview.srcdoc =
        code;


    const lines =
        code.split("\n").length;


    editorLines.textContent =
        `${lines} ${
            lines === 1
                ? "linha"
                : "linhas"
        }`;


    editorCharacters.textContent =
        `${code.length} caracteres`;


    analyzeSemanticHTML(
        code
    );

}


/* =========================
   AUTO SAVE
========================= */

function savePlayground() {

    localStorage.setItem(
        "semanticPlaygroundCode",
        htmlEditor.value
    );


    saveStatus.innerHTML =
        '<i class="fa-solid fa-check"></i> Salvo';

}


htmlEditor.addEventListener(
    "input",
    () => {

        saveStatus.innerHTML =
            '<i class="fa-solid fa-spinner"></i> Salvando';


        clearTimeout(
            playgroundTimeout
        );


        playgroundTimeout =
            setTimeout(
                () => {

                    savePlayground();

                    updatePlayground();

                },
                300
            );

    }
);


/* CTRL + ENTER */

htmlEditor.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            (
                event.ctrlKey ||
                event.metaKey
            )
        ) {

            event.preventDefault();

            savePlayground();

            updatePlayground();

        }

    }
);


/* TEMPLATE */

templateSelect.addEventListener(
    "change",
    () => {

        const template =
            playgroundTemplates[
                templateSelect.value
            ];


        htmlEditor.value =
            template;


        savePlayground();

        updatePlayground();

    }
);


/* RESET */

resetPlaygroundButton.addEventListener(
    "click",
    () => {

        const template =
            playgroundTemplates[
                templateSelect.value
            ];


        htmlEditor.value =
            template;


        savePlayground();

        updatePlayground();

    }
);


/* COPY */

copyPlaygroundButton.addEventListener(
    "click",
    async () => {

        await copyText(
            htmlEditor.value
        );


        temporaryButtonMessage(
            copyPlaygroundButton,
            '<i class="fa-solid fa-check"></i> Copiado'
        );

    }
);


/* DOWNLOAD */

downloadPlaygroundButton.addEventListener(
    "click",
    () => {

        const blob =
            new Blob(
                [
                    htmlEditor.value
                ],
                {
                    type:
                        "text/html;charset=utf-8"
                }
            );


        const url =
            URL.createObjectURL(
                blob
            );


        const link =
            document.createElement(
                "a"
            );


        link.href = url;

        link.download =
            "semantic-playground.html";


        document.body.appendChild(
            link
        );


        link.click();

        link.remove();


        URL.revokeObjectURL(
            url
        );

    }
);


/* =========================
   ANALISADOR SEMÂNTICO
========================= */

function analyzeSemanticHTML(code) {

    const parser =
        new DOMParser();


    const documentResult =
        parser.parseFromString(
            code,
            "text/html"
        );


    const images =
        [
            ...documentResult.querySelectorAll(
                "img"
            )
        ];


    const checks = [

        {
            label:
                "Elemento <main>",
            points: 15,
            pass:
                documentResult.querySelectorAll(
                    "main"
                ).length === 1
        },

        {
            label:
                "Elemento <header>",
            points: 10,
            pass:
                Boolean(
                    documentResult.querySelector(
                        "header"
                    )
                )
        },

        {
            label:
                "Navegação com <nav>",
            points: 10,
            pass:
                Boolean(
                    documentResult.querySelector(
                        "nav"
                    )
                )
        },

        {
            label:
                "Conteúdo com <article>",
            points: 10,
            pass:
                Boolean(
                    documentResult.querySelector(
                        "article"
                    )
                )
        },

        {
            label:
                "Seções temáticas",
            points: 10,
            pass:
                Boolean(
                    documentResult.querySelector(
                        "section"
                    )
                )
        },

        {
            label:
                "<figure> + <figcaption>",
            points: 10,
            pass:
                Boolean(
                    documentResult.querySelector(
                        "figure figcaption"
                    )
                )
        },

        {
            label:
                "Rodapé com <footer>",
            points: 10,
            pass:
                Boolean(
                    documentResult.querySelector(
                        "footer"
                    )
                )
        },

        {
            label:
                "Imagens com texto alternativo",
            points: 10,
            pass:
                images.length > 0 &&
                images.every(
                    image =>
                        image.hasAttribute(
                            "alt"
                        ) &&
                        image.getAttribute(
                            "alt"
                        ).trim() !== ""
                )
        },

        {
            label:
                "Um título principal <h1>",
            points: 10,
            pass:
                documentResult.querySelectorAll(
                    "h1"
                ).length === 1
        },

        {
            label:
                "Conteúdo complementar <aside>",
            points: 5,
            pass:
                Boolean(
                    documentResult.querySelector(
                        "aside"
                    )
                )
        }

    ];


    const score =
        checks.reduce(
            (
                total,
                check
            ) =>
                total +
                (
                    check.pass
                        ? check.points
                        : 0
                ),
            0
        );


    semanticScore.textContent =
        score;


    scoreRing.style.setProperty(
        "--score-angle",
        `${score * 3.6}deg`
    );


    if (score >= 90) {

        semanticLevel.textContent =
            "Excelente estrutura";

    } else if (
        score >= 70
    ) {

        semanticLevel.textContent =
            "Boa estrutura";

    } else if (
        score >= 50
    ) {

        semanticLevel.textContent =
            "Pode melhorar";

    } else {

        semanticLevel.textContent =
            "Estrutura básica";

    }


    semanticChecks.innerHTML =
        "";


    checks.forEach(check => {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            `semantic-check ${
                check.pass
                    ? "pass"
                    : "fail"
            }`;


        item.innerHTML =
            `
                <i class="fa-solid ${
                    check.pass
                        ? "fa-circle-check"
                        : "fa-circle-xmark"
                }"></i>

                <span>
                    ${escapeHTML(
                        check.label
                    )}
                    (+${check.points})
                </span>
            `;


        semanticChecks.appendChild(
            item
        );

    });

}


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
   HELPERS
========================= */

function escapeHTML(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

}


function shuffle(array) {

    const copy =
        [...array];


    for (
        let index =
            copy.length - 1;
        index > 0;
        index--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (index + 1)
            );


        [
            copy[index],
            copy[randomIndex]
        ] =
        [
            copy[randomIndex],
            copy[index]
        ];

    }


    return copy;

}


/* =========================
   QUIZ START
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
   RENDER QUESTION
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
        (
            option,
            index
        ) => {

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
   SELECT ANSWER
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
   NEXT
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
   FINISH
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
            "Você acertou todas as questões. Seu domínio dos fundamentos de HTML semântico está excelente.";

    } else if (
        percentage >= 75
    ) {

        resultTitle.textContent =
            "Muito bom!";

        resultMessage.textContent =
            "Você demonstrou uma boa compreensão de HTML semântico.";

    } else if (
        percentage >= 50
    ) {

        resultTitle.textContent =
            "Bom começo!";

        resultMessage.textContent =
            "Você já compreendeu vários conceitos, mas ainda existem alguns pontos para revisar.";

    } else {

        resultTitle.textContent =
            "Hora de revisar!";

        resultMessage.textContent =
            "Explore novamente as tags e utilize o Playground antes de tentar outra vez.";

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


restartQuizButton.addEventListener(
    "click",
    startQuiz
);


const initialBest =
    Number(
        localStorage.getItem(
            "semanticQuizBest"
        )
    ) || 0;


bestScoreElement.textContent =
    `${initialBest}/${quizQuestions.length}`;


/* =========================
   PWA
========================= */

let deferredInstallPrompt = null;


window.addEventListener(
    "beforeinstallprompt",
    event => {

        event.preventDefault();

        deferredInstallPrompt =
            event;


        installButton.hidden =
            false;

    }
);


installButton.addEventListener(
    "click",
    async () => {

        if (
            !deferredInstallPrompt
        ) {
            return;
        }


        deferredInstallPrompt.prompt();


        await deferredInstallPrompt
            .userChoice;


        deferredInstallPrompt =
            null;


        installButton.hidden =
            true;

    }
);


window.addEventListener(
    "appinstalled",
    () => {

        installButton.hidden =
            true;

        deferredInstallPrompt =
            null;

    }
);


/* =========================
   SERVICE WORKER
========================= */

if (
    "serviceWorker" in navigator
) {

    window.addEventListener(
        "load",
        () => {

            navigator
                .serviceWorker
                .register(
                    "./sw.js"
                )
                .catch(
                    error => {

                        console.error(
                            "Service Worker:",
                            error
                        );

                    }
                );

        }
    );

}


/* =========================
   INICIALIZAÇÃO
========================= */

updatePlayground();

startQuiz();