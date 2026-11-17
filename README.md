# CYBERLAB

Uma plataforma de estudos que estou construindo para reunir, em um só lugar, o que aprendo em Engenharia de Software, segurança da informação e inglês.

Comecei o projeto porque queria estudar pelo celular sem depender de várias abas, anotações soltas ou conexão constante. Ele continua em desenvolvimento — inclusive a experiência de navegação no Android.

**[Abrir o CYBERLAB no navegador](https://osacul1.github.io/Cyberlab-pwa/)**

## O que já existe

- Trilhas de cybersecurity, inglês e conteúdos de Engenharia de Software.
- Aulas e exercícios com progressão de dificuldade.
- Laboratórios, casos práticos e desafios de revisão.
- Calculadora e atividades de matemática integradas.
- Progresso e rascunhos salvos no navegador, com opção de backup.
- Instalação como PWA, com recursos disponíveis offline após o carregamento.

O conteúdo acadêmico é material de apoio ao estudo. Não substitui disciplinas, avaliações ou atividades oficiais da faculdade.

## Usar no celular

O projeto é uma aplicação estática: não exige servidor próprio nem criação de conta.

1. Abra o [CYBERLAB publicado no GitHub Pages](https://osacul1.github.io/Cyberlab-pwa/).
2. No Chrome para Android, use **Adicionar à tela inicial** ou **Instalar app**.
3. Abra o aplicativo online pelo menos uma vez para armazenar os arquivos necessários ao uso offline.

**Atenção:** os dados ficam no armazenamento do navegador. Antes de limpar dados do Chrome, trocar de celular ou reinstalar, exporte um backup pelo próprio CYBERLAB.

Para executar localmente, sirva a pasta por HTTP (por exemplo, com `python -m http.server 8000`) e abra `http://localhost:8000`. O service worker exige localhost ou HTTPS para funcionar.

## Organização

- `index.html` — interface principal e navegação.
- `manifest.webmanifest` e `sw.js` — instalação e cache do PWA.
- `software-course.js`, `faculdade.js` e arquivos `satc-*.js` — conteúdo acadêmico.
- `math-lab.js` / `math-lab.css` — atividades de matemática.
- `simlabs.js`, `cases.js` e arquivos relacionados — simulações e casos práticos.
- `LEIA-ME_INSTALACAO.md` — notas técnicas detalhadas de conteúdo, instalação e atualização.
- `AUDITORIA_GERAL_27.md` — registro da revisão da versão 27.

- `tests/*.cjs` — verificações de conteúdo, backup e regras das atividades, executadas com Node.js.

O aplicativo roda no navegador. Node.js é usado nos testes, não como servidor do CYBERLAB.

## O que estou aprendendo aqui

Este é um projeto de estudante. Estou praticando JavaScript, organização de conteúdo, persistência local e os recursos básicos de um PWA. Ainda estou aprendendo a separar melhor a interface, o conteúdo e as regras que hoje se concentram em `index.html`.

O material foi reunido e ampliado com apoio de IA. Isso não equivale a domínio dos assuntos: revisar exemplos, conferir referências e entender o código fazem parte do meu estudo. O uso dos nomes SATC/UNISATC nos arquivos indica uma referência curricular; este projeto não é oficial nem vinculado à instituição.

## Executar os testes

Com Node.js 24 ou superior, na pasta do projeto:

```bash
node --test tests/*.cjs
```

São 17 arquivos de testes. Eles verificam estruturas de aulas, respostas, cálculos, backup e recursos do PWA. O GitHub Actions executa essas verificações a cada alteração na branch principal e nas pull requests.

Esses testes não avaliam a qualidade pedagógica de todo o material nem simulam todos os gestos e comportamentos de um celular real.

## Estado do projeto

Estou priorizando três pontos:

1. Validar no Android a correção do dock inferior já incluída na versão 27.1 e resolver eventuais problemas de toque ou sobreposição.
2. Revisar conteúdo, exemplos e exercícios conforme avanço na graduação.
3. Testar melhor o modo offline, os backups e as funções de voz em aparelhos Android reais.

**Validação de interface:** a página pública e a navegação por **Trilhas** já foram verificadas em navegador de computador. A validação de toque, voz, instalação e uso offline no Samsung continua necessária.

A estrutura já tem bastante material, mas quantidade de aulas não substitui validação. Bugs e limitações podem existir; registro as revisões nos documentos técnicos do repositório.

---

**Lucas Rodrigues de Resende** · Estudante de Engenharia de Software, Criciúma/SC  
[GitHub](https://github.com/Osacul1) · [LinkedIn](https://www.linkedin.com/in/lucas-resende-404ba2320)
