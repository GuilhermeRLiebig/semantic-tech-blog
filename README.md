# Semantic.dev

Plataforma educacional interativa desenvolvida para estudar **HTML Semântico** e fundamentos modernos de desenvolvimento Front-End.

O projeto surgiu inicialmente a partir de uma atividade acadêmica simples e foi progressivamente transformado em uma aplicação educacional utilizando HTML, CSS, JavaScript, Git e GitHub.

## 🌐 Demo

**https://guilhermerliebig.github.io/semantic-tech-blog/**

---

## 🚀 Sobre o projeto

O **Semantic.dev** busca transformar o estudo de HTML semântico em uma experiência prática.

Além do conteúdo teórico, a plataforma permite explorar elementos HTML, visualizar exemplos, editar código em tempo real, analisar automaticamente a qualidade semântica de uma estrutura e testar conhecimentos através de um quiz.

O projeto foi desenvolvido sem frameworks.

---

## 💻 Playground HTML

O projeto possui um laboratório integrado onde o usuário pode escrever HTML e visualizar o resultado imediatamente.

O Playground possui:

- Preview em tempo real
- Editor HTML
- Templates prontos
- Autosave com LocalStorage
- Contagem de linhas
- Contagem de caracteres
- Copiar código
- Restaurar template
- Download do código como arquivo `.html`
- Atalho `Ctrl + Enter`
- Preview isolado utilizando `iframe`

---

## 🧠 Semantic Score

O código criado no Playground é analisado automaticamente.

O sistema gera uma pontuação de **0 a 100** considerando critérios como:

- Uso correto de `<main>`
- Uso de `<header>`
- Navegação com `<nav>`
- Conteúdo independente com `<article>`
- Seções com `<section>`
- Uso de `<figure>` e `<figcaption>`
- Rodapé com `<footer>`
- Texto alternativo em imagens
- Presença adequada de `<h1>`
- Conteúdo complementar com `<aside>`

Essa análise é realizada diretamente no navegador utilizando `DOMParser`.

---

## 🎯 Quiz

A plataforma também possui um quiz interativo sobre HTML semântico.

Recursos:

- 8 questões
- Ordem aleatória
- Correção instantânea
- Explicação após cada resposta
- Pontuação
- Barra de progresso
- Melhor pontuação salva no navegador
- Possibilidade de refazer o desafio

---

## 📱 Progressive Web App

O projeto possui recursos de **PWA**.

Isso inclui:

- Web App Manifest
- Service Worker
- Cache de recursos locais
- Funcionamento offline após carregamento
- Possibilidade de instalação em navegadores compatíveis
- Ícone próprio da aplicação

---

## ✨ Outras funcionalidades

- Tema claro e escuro
- Preferência de tema salva
- Layout responsivo
- Menu mobile
- Navegação suave
- Destaque da seção atual
- Barra de progresso da página
- Botão para voltar ao topo
- Explorador interativo de tags
- Botões para copiar código
- Animações com Intersection Observer
- Suporte a `prefers-reduced-motion`
- Atributos de acessibilidade

---

## 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Git
- GitHub
- GitHub Pages
- Web App Manifest
- Service Worker

---

## 🧩 APIs e recursos Web utilizados

- DOM API
- LocalStorage
- Clipboard API
- Intersection Observer API
- DOMParser
- Blob API
- URL API
- Service Worker API
- Web App Manifest
- iframe `srcdoc`

---

## 📚 Conceitos praticados

### HTML

- HTML Semântico
- `header`
- `nav`
- `main`
- `article`
- `section`
- `figure`
- `figcaption`
- `aside`
- `footer`
- Meta tags
- ARIA
- Acessibilidade

### CSS

- CSS Variables
- Flexbox
- Grid
- Media Queries
- Responsividade
- Pseudo-elementos
- Transições
- Estados `hover`
- Estados `focus`
- `clamp()`
- `backdrop-filter`
- `conic-gradient`
- `prefers-reduced-motion`

### JavaScript

- DOM
- Eventos
- Arrays
- Objetos
- Funções
- Template Strings
- LocalStorage
- Clipboard API
- Intersection Observer
- DOMParser
- Blob
- Download dinâmico de arquivos
- Controle de estado
- Debounce
- Manipulação dinâmica de elementos
- Embaralhamento de arrays

---

## 📂 Estrutura do projeto

```text
atividade-html/
├── css/
│   └── style.css
│
├── docs/
│   └── atividade-original.html
│
├── img/
│   ├── html-semantico.jpg
│   └── icon.svg
│
├── js/
│   └── script.js
│
├── index.html
├── manifest.webmanifest
├── sw.js
└── README.md
```

---

## 🎓 Origem

A versão inicial foi desenvolvida para uma atividade acadêmica sobre HTML Semântico.

O exercício utilizava elementos como:

```html
<header>
    <h1>Meu Blog de Tecnologia</h1>
</header>

<main>

    <article>

        <h2>
            O que é HTML Semântico?
        </h2>

        <figure>
            ...
        </figure>

    </article>

</main>

<footer>
    ...
</footer>
```

A atividade original permanece disponível em:

```text
docs/atividade-original.html
```

Isso permite observar a evolução do projeto desde a primeira implementação.

---

## ▶️ Executando localmente

Clone:

```bash
git clone https://github.com/GuilhermeRLiebig/semantic-tech-blog.git
```

Entre na pasta:

```bash
cd semantic-tech-blog
```

Abra utilizando Live Server no VS Code.

---

## 🌍 Deploy

O projeto utiliza GitHub Pages:

**https://guilhermerliebig.github.io/semantic-tech-blog/**

---

## 👨‍💻 Autor

**Guilherme Liebig**

Estudante de Ciência da Computação.

GitHub: **GuilhermeRLiebig**