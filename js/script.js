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


/* =========================
   TEMA CLARO / ESCURO
========================= */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");


    const lightMode =
        document.body.classList.contains("light");


    if (lightMode) {

        localStorage.setItem(
            "theme",
            "light"
        );


        themeIcon.classList.remove(
            "fa-moon"
        );


        themeIcon.classList.add(
            "fa-sun"
        );

    } else {

        localStorage.setItem(
            "theme",
            "dark"
        );


        themeIcon.classList.remove(
            "fa-sun"
        );


        themeIcon.classList.add(
            "fa-moon"
        );

    }

});


/* =========================
   MENU MOBILE
========================= */

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");


    const menuOpen =
        nav.classList.contains("active");


    if (menuOpen) {

        menuIcon.classList.remove(
            "fa-bars"
        );


        menuIcon.classList.add(
            "fa-xmark"
        );


        menuButton.setAttribute(
            "aria-label",
            "Fechar menu de navegação"
        );

    } else {

        menuIcon.classList.remove(
            "fa-xmark"
        );


        menuIcon.classList.add(
            "fa-bars"
        );


        menuButton.setAttribute(
            "aria-label",
            "Abrir menu de navegação"
        );

    }

});


/* FECHAR MENU AO CLICAR EM UM LINK */

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");


            menuIcon.classList.remove(
                "fa-xmark"
            );


            menuIcon.classList.add(
                "fa-bars"
            );


            menuButton.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );

        });

    });


/* =========================
   VOLTAR AO TOPO
========================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================
   DADOS DAS TAGS
========================= */

const tagData = {

    header: {

        title: "<header>",

        description:
            "Representa o cabeçalho de uma página ou de uma seção.",

        usage:
            "Utilize para títulos, logotipos, introduções e elementos relacionados ao cabeçalho.",

        example:
`<header>
    <h1>Meu site</h1>
</header>`

    },


    nav: {

        title: "<nav>",

        description:
            "Representa uma área da página destinada à navegação.",

        usage:
            "É utilizada principalmente para agrupar links importantes, como menus de navegação.",

        example:
`<nav>
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
</nav>`

    },


    main: {

        title: "<main>",

        description:
            "Representa o conteúdo principal e central de uma página.",

        usage:
            "Deve conter o conteúdo diretamente relacionado ao propósito principal do documento.",

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
            "Representa um conteúdo independente que pode fazer sentido mesmo fora da página atual.",

        usage:
            "Pode ser utilizado para posts de blog, notícias, artigos, comentários ou publicações.",

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
            "Representa uma seção temática que agrupa conteúdos relacionados.",

        usage:
            "Use quando existir uma parte específica do conteúdo com um tema ou propósito próprio.",

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
            "Representa conteúdo ilustrativo relacionado ao conteúdo principal.",

        usage:
            "É utilizada para imagens, gráficos, diagramas, códigos ou outras representações que podem ter uma legenda.",

        example:
`<figure>

    <img
        src="imagem.jpg"
        alt="Exemplo"
    >

    <figcaption>
        Legenda da imagem
    </figcaption>

</figure>`

    },


    aside: {

        title: "<aside>",

        description:
            "Representa conteúdo complementar ou secundário relacionado ao conteúdo principal.",

        usage:
            "Pode ser utilizado em barras laterais, informações adicionais, curiosidades ou conteúdos relacionados.",

        example:
`<aside>

    <h3>Veja também</h3>

    <p>
        Conteúdo relacionado.
    </p>

</aside>`

    },


    footer: {

        title: "<footer>",

        description:
            "Representa o rodapé de uma página ou de uma seção.",

        usage:
            "Normalmente contém autoria, copyright, informações de contato ou links adicionais.",

        example:
`<footer>

    <p>
        © 2026 Meu Site
    </p>

</footer>`

    }

};


/* =========================
   EXPLORADOR DE TAGS
========================= */

const tagButtons =
    document.querySelectorAll(".tag-button");


const tagTitle =
    document.getElementById("tag-title");


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

    button.addEventListener("click", () => {

        tagButtons.forEach(item => {

            item.classList.remove(
                "active"
            );

        });


        button.classList.add(
            "active"
        );


        const selectedTag =
            button.dataset.tag;


        const data =
            tagData[selectedTag];


        tagTitle.textContent =
            data.title;


        tagDescription.textContent =
            data.description;


        tagUsage.textContent =
            data.usage;


        tagExample.textContent =
            data.example;

    });

});


/* =========================
   FUNÇÃO PARA COPIAR TEXTO
========================= */

async function copyText(text) {

    if (navigator.clipboard) {

        await navigator.clipboard.writeText(
            text
        );

        return;

    }


    const textarea =
        document.createElement("textarea");


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
   COPIAR EXEMPLO DA TAG
========================= */

const copyTagButton =
    document.getElementById(
        "copy-tag-code"
    );


copyTagButton.addEventListener(
    "click",

    async () => {

        try {

            await copyText(
                tagExample.textContent
            );


            copyTagButton.innerHTML =
                '<i class="fa-solid fa-check"></i> Copiado';


            setTimeout(() => {

                copyTagButton.innerHTML =
                    '<i class="fa-regular fa-copy"></i> Copiar';

            }, 1500);

        } catch (error) {

            console.error(
                "Erro ao copiar:",
                error
            );

        }

    }
);


/* =========================
   COPIAR EXEMPLO COMPLETO
========================= */

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

        try {

            await copyText(
                mainCode.textContent
            );


            copyMainButton.innerHTML =
                '<i class="fa-solid fa-check"></i> Copiado';


            setTimeout(() => {

                copyMainButton.innerHTML =
                    '<i class="fa-regular fa-copy"></i> Copiar código';

            }, 1500);

        } catch (error) {

            console.error(
                "Erro ao copiar:",
                error
            );

        }

    }
);