# CYBERLAB 27.0 — Aulas progressivas, oito projetos integradores e revisão geral

**Atualização de 16/11/2026.** Sobre a versão 26.0, o CYBERLAB agora contém **297 aulas acadêmicas em 45 disciplinas**, incluindo **8 novos desafios integradores** distribuídos pelas 8 fases da matriz pública de Engenharia de Software da UniSatc. As **289 aulas anteriores mantêm o mesmo identificador (disciplina, etapa e índice)**; os 8 desafios foram acrescentados ao final de etapas existentes para preservar progresso e backups antigos. As 139 aulas centrais de Cybersecurity, inglês e outras trilhas continuam presentes. As 297 aulas são de apoio à faculdade, não substituem carga horária, avaliações, estágio ou TCC oficiais.

### Dificuldade que realmente progride

| Nível | O que o aluno faz | Tipo de apoio |
| --- | --- | --- |
| 🟢 1 · Fundamentos | Lê explicação, observa exemplo e responde com justificativa | Roteiro aberto e treino guiado |
| 🔵 2 · Aplicação | Resolve um caso com o próprio raciocínio e compara critérios | Roteiro opcional, resposta escrita de 22 caracteres ou mais |
| 🟣 3 · Análise | Justifica decisão, identifica erro, propõe teste | Menos dicas e resposta escrita de 42 caracteres ou mais |
| 🔴 4 · Projeto | Define hipótese, solução, teste, risco e limitações | Caso aberto com critérios; resposta de 70 caracteres ou mais |

A dificuldade progride conforme **unidade e fase**: unidades avançadas exigem mais argumentação, e as fases finais começam com maior nível. O aluno responde **antes de revelar os critérios de análise**, depois marca sinceramente se conseguiu justificar ou se precisa revisar. Quem marca revisão vê a aula sinalizada e pode retomá-la com prioridade. A posição das alternativas é embaralhada entre sessões e o feedback explica conceito, exemplo e erro frequente. Nenhum limite de corações ou de tentativas foi introduzido.

**Celular e continuidade:** há botões para voltar na etapa e sair da aula. Rascunhos não concluídos são salvos localmente e recuperados ao reabrir a mesma lição. O texto escrito e a indicação de revisão fazem parte do backup. Não há modelo de IA avaliando automaticamente respostas abertas: o limite de caracteres apenas incentiva elaboração e não prova que o raciocínio está correto.

**Oito projetos de integração:** (1) especificação e rastreabilidade de requisitos; (2) escalonador de revisão com heap; (3) front-end offline e acessível; (4) sistema web com autorização por objeto; (5) recomendação por ML com avaliação e privacidade; (6) pesquisa de UX com acessibilidade; (7) implantação, incidentes e rollback; (8) pesquisa e defesa de trabalho final. Cada projeto inclui situação, teoria, exemplo, questão, desafio aberto, armadilhas, roteiro de resolução e referência técnica.

### Método e referências

- Sequência universitária: [UniSatc — Matriz 2 / Engenharia de Software](https://unisatc.com.br/graduacao/engenharia-de-software/).
- Estrutura de estudo e práticas de teste: [Dunlosky et al., *Improving Students' Learning With Effective Learning Techniques*](https://pubmed.ncbi.nlm.nih.gov/26173288/) e [Roediger & Karpicke, *Test-Enhanced Learning*](https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x).
- Redução gradual de exemplos resolvidos: [Sweller et al., *Cognitive Architecture and Instructional Design: 20 Years Later*](https://link.springer.com/article/10.1007/s10648-019-09465-5).
- Material técnico dos integradores: [Python heapq](https://docs.python.org/3/library/heapq.html), [MDN PWA e cache](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching), [OWASP API Top 10](https://owasp.org/API-Security/editions/2023/en/0x11-t10/), [Google ML Crash Course](https://developers.google.com/machine-learning/crash-course), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [GitHub Actions](https://docs.github.com/en/actions) e SWEBOK/IEEE. Conteúdo explicativo e exercícios são autorais; materiais privados não foram copiados.

### Instalar e atualizar

O service worker usa `cyberlab-pwa-27-0-v1` e adiciona `learning-progressive.js` e `academic-capstones.js` ao pacote offline. **Ter o ZIP não atualiza automaticamente o PWA instalado no Samsung**: a pasta inteira precisa ser publicada no **mesmo endereço HTTPS**. Antes de publicar, exporte o backup completo. Ao abrir online o app no endereço original, o novo service worker poderá atualizar os arquivos offline; o navegador pode precisar ser fechado e reaberto. Se trocar de domínio, será necessário importar o backup no novo site.

### Auditoria

Foram executados os testes automáticos da pasta `tests/` e uma auditoria adicional de conteúdo, progressão, projetos, referências, arquivos offline e fluxo de rascunho/autocorreção. Também foi comparada a estrutura das 289 aulas anteriores com a versão 26.0, garantindo que os índices anteriores não mudaram. Veja `AUDITORIA_GERAL_27.md`. A instalação real em Samsung, voz e interações táteis **não foram testadas**, e esta entrega ainda **não foi publicada no endereço do PWA atual**.

---

# CYBERLAB 26.0 — Bacharelado UniSatc em 8 fases e 289 aulas acadêmicas (histórico)

**Atualização principal (16/11/2026):** a seção Faculdade agora está organizada em **8 fases**, seguindo a [matriz curricular 2 e as ementas públicas de Engenharia de Software da UniSatc](https://unisatc.com.br/graduacao/engenharia-de-software/). Há 42 componentes correspondentes à grade, incluindo a optativa de Libras, estágio e projetos finais em formato de **orientação de estudos**; o app não concede créditos nem substitui atividades oficiais da instituição. Foram incluídas **33 disciplinas independentes**, 165 microaulas autorais novas e mais 60 aulas para aprofundar as 12 matérias existentes. O total acadêmico dessas 45 trilhas é **289 aulas**; a trilha interdisciplinar de Engenharia de Software com 16 aulas também continua disponível em Complementares. Todos os cursos anteriores permanecem no catálogo.

**Cobertura por fase** (em ordem de estudo):

1. **Padawan:** Álgebra, Engenharia de Requisitos, Jornada Universitária, Práticas de Engenharia, Programação para Engenharia.
2. **Stormtrooper:** Banco de Dados I, Cálculo I, Estatística, Estruturas de Dados, Gestão de Produtos.
3. **Han Solo:** Banco de Dados II, Cálculo II, Criatividade e Inovação, Estatística Aplicada, Front-end.
4. **R2D2:** Arquitetura de Software, Back-end, Desenvolvimento de Jogos, Libras (optativa), Machine Learning, Projeto Integrador: Sistema Web.
5. **Yoda:** Engenharia de Dados, Projeto Integrador: Inteligência Artificial, QA e Testes, Soluções Mobile, UX Design.
6. **Luke Skywalker:** Arquitetura da Informação, Automação de Testes, Design Patterns, Projeto Integrador: UX/UI, Redes de Computadores.
7. **Darth Vader:** Clean Code, Cloud Computing, DevOps, Projeto Final I, Projeto Integrador: Gestão de Projetos.
8. **Mestre Jedi:** Desenvolvimento Sustentável, Engenharia Econômica, Estágio (preparação), Ética e Direitos Humanos, Projeto Final II, Relacionamento e Comportamento Empresarial.

**O que se aprende:** cada aula apresenta teoria, explicação aprofundada, exemplo contextualizado, roteiro de análise, questão com três alternativas e feedback, erro frequente e atividade prática reflexiva. As 64 aulas antigas da Faculdade também receberam aprofundamentos onde faltavam, sem alterar IDs de progresso. O percurso funciona no Android, com três unidades por disciplina, módulos curtos e biblioteca com matriz oficial e materiais públicos complementares. As trilhas extra de Matemática Discreta, Lógica/Algoritmos e UML/Modelagem foram preservadas como complementares. A calculadora por toque também está disponível em Cálculo II, Estatística Aplicada e Engenharia Econômica.

**Fontes e autoria:** os tópicos foram comparados à matriz pública da UniSatc e apoiados em SWEBOK/IEEE, OpenStax, MDN, documentação Python/PostgreSQL, Scrum Guide, OWASP e outros materiais abertos conforme a disciplina. Esta é uma produção educacional **autoral e independente**; não reproduz aulas, apostilas ou cursos fechados. Planos de ensino e bibliografias de cada professor podem variar: confronte-os com o material disponibilizado na sua turma.

**Limite pedagógico:** as 289 aulas são blocos de estudo estruturados, **não o equivalente integral às milhares de horas de um bacharelado**. Alguns exercícios são orientados e precisam que você resolva e confira em uma fonte ou com o professor; a interface não corrige respostas discursivas ou demonstrações matemáticas automaticamente. Para chegar a nível profissional, complemente com livros, projetos, exercícios extensos e avaliações reais.

**Instalação e atualização do PWA:** agora o cache é `cyberlab-pwa-26-0-v1` e inclui os cinco scripts `satc-*.js`. **O ZIP não atualiza sozinho o ícone já instalado no Samsung.** Publique toda a pasta na **mesma origem e caminho HTTPS** do CYBERLAB existente; depois abra o app online uma vez para atualizar o service worker e disponibilizar os arquivos offline. Exporte um backup antes de atualizar; as chaves locais e os IDs das aulas antigas foram preservados. Se você publicar em outro domínio, importe o backup na nova origem, pois `localStorage` não cruza domínios.

**Verificação:** rode `for teste in tests/*.cjs; do node "$teste" || break; done` na pasta publicada/descompactada. Foram verificadas contagens, unicidade, questões, bibliografia, scripts e cache PWA com testes Node. **Não foi validada a instalação real nem a experiência tátil no Android Samsung**, e nenhum site existente foi publicado automaticamente nesta entrega.

---

# CYBERLAB 25.0 — Faculdade organizada por matérias (registro histórico)

Esta versão divide os estudos superiores em **12 matérias independentes**, com progresso próprio: Álgebra e Álgebra Linear; Matemática Discreta; Cálculo; Estatística e Probabilidade; Lógica e Algoritmos; Programação do Zero; Engenharia de Requisitos; UML e Modelagem; Banco de Dados; Estruturas de Dados; Testes e Qualidade; Arquitetura de Software. A trilha interdisciplinar de Engenharia de Software da v24 continua disponível. O menu separa a seção **🎓 Faculdade** das demais trilhas.

São **64 novas microaulas autorais**, com conceito, exemplo, pergunta corrigida com explicação, erro frequente, prática de aplicação e campo de reflexão. As **18 aulas iniciais** de Álgebra, Programação e Requisitos têm ainda blocos extras com teoria e resolução passo a passo. Cada disciplina possui três unidades (fundamentos, aplicações e consolidação). A seção final de cada aula apresenta uma pequena biblioteca própria, com 2–3 fontes públicas de universidades e documentação oficial; em alguns casos há **ementas públicas** de Alura e Coursera como referência de estrutura, sem reproduzir conteúdo pago. Também é possível consultar cursos da Hotmart por suas ementas abertas, mas o material interno pago não foi acessado nem copiado.

**Escopo honesto:** esta é uma base inicial organizada para estudar continuamente. Ainda **não substitui a bibliografia, a carga horária, a resolução extensa de exercícios nem as avaliações de uma graduação**, e as 46 aulas fora das três matérias prioritárias têm menor profundidade que as 18 expandidas. É um ponto de partida que pode crescer sem recomeçar o progresso. Para estudar com o programa exato da sua faculdade, compare os assuntos com a matriz curricular e os planos de ensino oficiais.

Bibliografia de referência: [ACM/IEEE/AAAI CS2023](https://csed.acm.org/), [SWEBOK v4 — IEEE Computer Society](https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics), [MIT OpenCourseWare](https://ocw.mit.edu/), [OpenStax](https://openstax.org/), [Python Docs](https://docs.python.org/pt-br/3/tutorial/index.html), [PostgreSQL Docs](https://www.postgresql.org/docs/current/tutorial.html), [OMG UML](https://www.omg.org/spec/UML/), [ISTQB](https://istqb.org/) e [Coursera Software Engineering — ementa](https://www.coursera.org/specializations/software-engineering/).

**PWA / Android:** `faculdade.js` e `faculdade-deep.js` entram no cache da versão `cyberlab-pwa-25-0-v1`. O progresso local anterior mantém os mesmos identificadores e chaves, mas faça um backup antes de atualizar. Para receber essa atualização no ícone já instalado, os arquivos precisam ser publicados **na mesma origem HTTPS** do PWA anterior. Baixar o ZIP sozinho não atualiza a instalação remota. Referências externas precisam de internet, embora o conteúdo das aulas esteja no pacote offline. Testes Node foram executados; instalação, voz e toque em aparelho Samsung ainda exigem verificação real.

**Laboratório matemático integrado:** nas aulas de Álgebra, Matemática Discreta, Cálculo e Estatística (e na trilha antiga de Matemática), há uma calculadora com **teclado próprio para toque**, operações, parênteses, potências, raiz, fatorial, porcentagem, π, e, trigonometria, logaritmos e valor absoluto. Permite **resolver equações lineares em x** com conferência, desenhar **gráficos numéricos de f(x)** e inserir símbolos (∑, ∫, ∈, ≤, ≥, Δ) num rascunho que pode ser copiado para a reflexão. É um interpretador local, sem `eval` e sem internet. Não resolve derivadas, integrais e demonstrações simbolicamente. `math-lab.js` e `math-lab.css` também estão no cache offline do PWA.

# CYBERLAB 24.0 — Curso de Engenharia de Software

Nova trilha dedicada ao curso superior de Engenharia de Software: **16 microaulas em quatro etapas**, cobrindo fundamentos, requisitos, modelagem, arquitetura, banco de dados, Git, testes, segurança, métodos ágeis e um projeto guiado de gerenciador de tarefas. Cada microaula tem explicação, exemplo, questão comentada, reflexão por modo e possibilidade de refazer. O material é autoral e orientado pelas áreas do SWEBOK e pelo Scrum Guide (fontes públicas), sem copiar cursos privados.

A trilha aparece em **Escolha seu caminho → Engenharia de Software**. Utiliza a mesma chave `cyberlab_expansion_v1`, com identificadores novos `swe:etapa:aula`; não altera ou reordena as trilhas anteriores. O catálogo passa de 104 para 120 aulas adicionais. Backup local e cache PWA incluem a trilha. O curso oferece um caminho introdutório/intermediário, não uma equivalência completa à graduação.

**Atualização no celular:** a pasta precisa ser publicada na mesma origem HTTPS do PWA instalado para preservar o acesso ao progresso local. Esta versão ainda não foi implantada na hospedagem do usuário; autorização da Vercel ou identificação do endereço atual permanece pendente. Testes automatizados verificam estrutura e dados, mas o Samsung ainda exige validação manual.

# CYBERLAB 23.0 — Desafios progressivos

Novidade: seis **casos simulados com três decisões cada (18 decisões no total)**. Os assuntos avançam de suporte de rede para Linux, autorização de aplicações, triagem SOC, segurança cloud e projeto final. O caso seguinte é liberado após concluir o anterior; aprovação exige 2 de 3 acertos, mas as tentativas são ilimitadas. Cada pergunta fornece feedback com justificativa, e uma missão concluída continua disponível para repetição.

Os resultados ficam em `cyberlab_simlab_v1.cases`, uma extensão compatível com o objeto local já exportado no backup completo. Conclusões anteriores dos seis simuladores não são alteradas. A validação da restauração aceita backups antigos sem `cases` e confere os campos de resultados novos.

Os desafios são educativos e usam apenas dados fictícios, sem executar comandos, ataques ou chamadas de rede. Os arquivos `cases.js` e `cases.css` entram no cache PWA offline. Testes automatizados não substituem validação manual de toque, instalação e persistência no Samsung.

# CYBERLAB 22.0 — Jornada principal aprofundada

Esta versão acrescenta **62 explicações complementares individuais** às aulas 69–130, abrangendo carreira, SOC, Cloud, GRC, DevSecOps, investigação forense e projetos. Em cada aula há conceito contextualizado, exemplo concreto e erro comum. Com as versões 19 e 21, as 131 aulas principais (índices 0–130) têm conteúdo complementar específico; os 8 desafios bônus mantêm as missões e o método transversal.

As 62 aulas desta atualização preservam seus exercícios originais e não adicionam uma nova questão pontuada. As outras 69 mantêm as questões adicionais anteriores. As 104 aulas adicionais e inglês continuam incluídos.

**Laboratórios:** adicionados dois cenários offline de decisão — triagem de alerta SOC e privilégio mínimo IAM — aos quatro simuladores anteriores (agora 6). Os resultados são salvos na mesma chave `cyberlab_simlab_v1`, e a validação do backup aceita os novos identificadores sem perder as conclusões antigas.

IDs, ordem e armazenamento local não foram alterados. Cache PWA atualizado para incluir `deep-advanced.js`. Testes automatizados verificam os catálogos, dados e estrutura de backup; instalação e voz no Samsung exigem validação manual. Exportar backup antes de atualizar continua recomendado.

# CYBERLAB 21.0 — Trilhas técnicas aprofundadas

Foram acrescentados **50 complementos autorais individuais**, cobrindo os índices originais 19–68 (Linux, programação, Cybersecurity, AppSec e Pentest). Cada um possui explicação própria, exemplo contextualizado, erro comum e uma questão com feedback. Com as 19 aulas aprofundadas na v19, são **69 aulas da jornada principal com material complementar específico**, além dos blocos de raciocínio já presentes nas demais.

Os complementos não alteram a ordem das 139 aulas originais nem as chaves de progresso e backup. O cálculo da aprovação continua incluindo todas as questões exibidas; as aulas podem ser refeitas após a conclusão. `deep-skills.js` está no cache offline.

Execute os testes da pasta `tests` usando Node.js. Os testes estruturais não equivalem a uma validação visual no Samsung; voz e sincronização seguem com as limitações das versões anteriores. Os exemplos de segurança só devem ser praticados em sistemas próprios ou expressamente autorizados.

# CYBERLAB 20.0 — Aprofundamento transversal

Todas as **139 aulas do catálogo principal de Cybersecurity** passam a exibir um bloco de raciocínio guiado, com resposta fundamentada na própria explicação da aula, análise de alternativas e pergunta para aplicar o conceito em outro cenário. As 19 aulas iniciais mantêm adicionalmente explicações autorais mais aprofundadas, exemplos resolvidos e questões extras.

As **104 aulas das trilhas adicionais** agora têm uma quinta etapa de aprofundamento: revisitar a justificativa, comparar respostas incorretas e transferir o exemplo para a prática. Inglês: treino opcional de reconstrução escrita da primeira frase de cada unidade, comparação literal com modelo e áudio. Aceita tentativas ilimitadas e não afeta a avaliação oficial.

**Transparência:** isto expande a metodologia interativa em todo o catálogo, mas não significa que cada uma das 139 + 104 aulas tenha recebido um novo capítulo autoral individual; o conteúdo aprofundado personalizado continua concentrado nas 19 aulas de Internet e Redes. Não há corretor de escrita por IA nem sincronização na nuvem.

Os IDs, sequência das aulas, notas anteriores, chaves locais e formato de backup continuam preservados. Faça uma exportação JSON antes de atualizar. Use HTTPS para instalar e cachear como PWA. Testes automatizados em `tests/`; interação real no Android ainda não validada.

# CYBERLAB 19.0 — Fundamentos aprofundados

Atualização sobre a versão 18.0, com **19 aulas iniciais de Internet e Redes aprofundadas**. Cada uma recebeu explicação original adicional, exemplo resolvido, erro comum e questão de aplicação com feedback. O arquivo `deep-lessons.js` concentra esse material e é incluído no cache PWA para consulta offline.

O motor de avaliações agora calcula o percentual com **todas** as questões exibidas (incluindo as novas), evitando resultados superiores a 100% e garantindo o critério de aprovação de 70%. Aulas e índices antigos não foram removidos ou reorganizados, nem as chaves de progresso/backup foram trocadas.

Fontes públicas de referência para conferir conceitos: MDN Web Docs (HTTP e cookies) e Cloudflare Learning Center (DNS); explicações e exercícios são autorais. Conteúdo de cursos privados não foi acessado nem copiado.

Validação: `node tests/deep-lessons.cjs` e os demais testes da pasta `tests`. Ainda requer teste manual de interação, instalação e atualização do PWA no Samsung; sem sincronização em nuvem. Antes de trocar de endereço de hospedagem, exporte o backup completo na versão atual.

# CYBERLAB 13 — Academia multidisciplinar

Abra `index.html` no PC. Em **Escolha seu caminho**, use a pesquisa para encontrar trilhas.

**Novidades:** seis trilhas adicionais (Python, JavaScript/TypeScript, Java, Linux, Segurança Defensiva e Finanças), 36 microaulas autorais, busca de trilhas e exigência de resposta correta para concluir novas aulas.

**Progresso:** mantém as chaves de armazenamento da versão 12; exporte backup completo antes de trocar de origem.

**PWA:** publique a pasta inteira via HTTPS (ex.: GitHub Pages) para instalar pelo Chrome e usar o cache offline. Abrir o HTML via `file://` não ativa o service worker.

**Limitações:** conteúdo introdutório/intermediário em expansão, sem certificação, correção automática de texto aberto ou sincronização em nuvem. Teste no dispositivo antes de depender do backup.


## Versão 13.1 — Menu lateral
Menu agrupado em Aprender, Praticar, Ferramentas de estudo e Dados e segurança. Acesso rápido a Início, Explorar trilhas e Continuar aula. Nenhuma chave de progresso foi alterada.
# CYBERLAB 14.0 — Grande atualização

Esta versão parte do CYBERLAB 13.1. Não altera as chaves de progresso existentes.

Novidades:
- Barra de navegação rápida (Início, Trilhas, Aula, Busca e Menu) no computador e Android.
- Busca global por título e tema: Cybersecurity, Inglês, Programação e trilhas adicionais.
- Plano diário sugerido de 15 minutos, dividido em três sessões de cinco minutos.
- Remoção de atalho duplicado que aparecia fora da organização do menu.
- Cache PWA renomeado para atualizar a instalação anterior ao abrir a nova versão online.

Importante: antes de mudar o endereço de hospedagem, exporte o **backup completo** no menu. O progresso local é associado à origem do site e não é sincronizado automaticamente entre dispositivos. A voz depende do suporte e das permissões do navegador; reconhecimento pode exigir conexão.

# CYBERLAB 14.1 — Correções e proteção do progresso

Esta versão atualiza o CYBERLAB 14.0 sem apagar nem reordenar as aulas existentes.

- O catálogo desta versão tem **139 aulas de Cybersecurity** (131 declaradas e 8 bônus geradas), distribuídas em 14 fases. Não removemos as aulas extras para não alterar os índices usados por backups anteriores.
- O backup completo agora é formato versão 9 e inclui um mapa de identificadores de aulas, permitindo remapear conclusões caso o catálogo seja reorganizado em uma versão futura. Backups antigos continuam aceitos com os índices originais.
- A importação rejeita arquivos sem dados reconhecidos e conjuntos de conclusões que não possam ser mapeados, sem sobrescrever os dados atuais.
- Aulas novas de inglês registram tempo visível aproximado até a primeira conclusão, em vez de adicionar 15 minutos automaticamente. Minutos já salvos em versões antigas **não são recalculados**.
- Manifest e cache PWA atualizados para 14.1.

**Antes de atualizar:** no app antigo, abra Dados e segurança → Backup e progresso e exporte seu JSON. O armazenamento local pertence ao endereço de origem: abrir o HTML por outro endereço não migra o progresso automaticamente. Para instalar como PWA, sirva os arquivos via HTTPS (ou localhost para testes), não pelo arquivo HTML aberto diretamente no Chrome.

**Limites dos testes:** sintaxe e estrutura dos catálogos verificadas automaticamente. Fluxos reais de instalação Android, voz, restauração e interface precisam ser confirmados no navegador.

# CYBERLAB 14.2 — Estabilidade e testes reproduzíveis

- Corrigido o rastreamento do tempo de inglês: a contagem pausa ao sair da tela da aula ou minimizar a página.
- Incluído o arquivo `tests/regression.cjs`, que verifica sintaxe JavaScript, presença das funções dos botões, estrutura dos exercícios e arquivos PWA.
- Incluído `tests/backup.cjs` para testar exportação, restauração e rejeição de um backup incompatível em armazenamento simulado. Execute ambos com Node.js no PC, se desejar reproduzir a validação.
- Versão da instalação e cache atualizados. O catálogo de 139 aulas existentes continua na mesma ordem.
- Não há sincronização em nuvem. Faça backup no menu antes de mudar de endereço/hospedagem.
- Não foram realizados testes em Samsung nem testes completos de interação no navegador nesta execução.

# CYBERLAB 15.0 — Aprendizado interativo

Novidades:
- Aulas de Cybersecurity: objetivo explícito, ligação com situações práticas, missão guiada, resumo e flashcard antes das perguntas.
- Aulas adicionais (Espanhol, Python, IA, Redes, Linux e outras): contextualização por área, explicações e exemplos mais visíveis, feedback fundamentado e botão para avançar à próxima aula.
- Inglês: a opção selecionada não aparece mais como correta antes da correção; a avaliação revela o gabarito e oferece explicações.
- Navegação: ir à próxima aula na mesma etapa sem retornar ao mapa, preservando a possibilidade de repetir uma aula concluída.
- IDs de aulas e dados de progresso mantidos; nenhum conteúdo anterior foi removido ou reordenado.

Limites: a qualidade e profundidade das aulas ainda variam conforme o conteúdo original; as atividades novas ampliam o ensino sem inventar uma certificação ou avaliação automática de texto livre. A voz e a instalação no Samsung exigem testes reais no dispositivo.

# CYBERLAB 16.0 — Metodologia ativa

Este pacote amplia a v15.0 aplicando conceitos de ensino observados em páginas públicas de Duolingo, Mimo, Alura, Hotmart Club e Moodle. O método é uma implementação independente do CYBERLAB, sem copiar aulas ou recursos privados dessas empresas.

- **Aprender:** objetivo, explicação e exemplo contextual da aula.
- **Praticar:** desafios com feedback e tentativas ilimitadas.
- **Aplicar:** missão prática e reflexão escrita, sem avaliação automática do texto livre.
- **Relembrar:** nova fila de revisão por desempenho: erros voltam no mesmo dia; acertos passam para 1, 3, 7, 14 e 30 dias conforme a sequência.
- **Evoluir:** o painel inicial mostra tópicos praticados, revisões disponíveis e tópicos consolidados por acertos sucessivos.
- Corrigida a seleção de questões da revisão inteligente para considerar a lista real de aulas concluídas.
- Progresso antigo preservado. A fila de revisão usa a chave adicional `cyberlab_method_v1`, incluída na exportação/restauração de backup completo. A conclusão de aulas antigas não é apagada nem recalculada.

Referências públicas utilizadas (método, não conteúdo):
- https://blog.duolingo.com/duolingo-teaching-method/
- https://blog.duolingo.com/spaced-repetition-for-learning/
- https://mimo.org/learn-to-code
- https://www.alura.com.br/artigos/conheca-as-carreiras-da-alura
- https://blog.hotmart.com/pt-br/blog/hotmart-club
- https://docs.moodle.org/39/en/Lesson_activity

Limitações: intervalos de revisão são heurísticas simples, não previsão científica personalizada; o app não possui tutor de IA conectado nem sincronização entre dispositivos. Compatibilidade de voz, PWA e fluxos visuais precisam ser conferidos em Android.

# CYBERLAB 17.0 — Projetos guiados

Adicionados **14 projetos originais**, um por etapa da trilha principal de Cybersecurity, disponíveis em "Menu → Praticar → Projetos guiados". Cada projeto possui situação simulada, objetivo, quatro tarefas orientadas, exemplo de entrega, dicas e campo de relatório pessoal.

- Checklists e rascunhos salvam no navegador; a conclusão exige as quatro tarefas marcadas e um relatório de ao menos 60 caracteres.
- A conclusão registrada pode ser refeita sem perder a conquista anterior.
- A nova chave `cyberlab_projects_v1` está incluída no backup completo e possui validação de importação.
- Os desafios não se conectam a sistemas reais, não executam ferramentas de exploração nem avaliam automaticamente a qualidade do texto. São roteiros educacionais para ambientes próprios ou autorizados.
- A ordem e as conclusões das 139 aulas originais do catálogo atual não foram alteradas. O PWA continua sem sincronização em nuvem.

# CYBERLAB 18.0 — Laboratórios e competências

Novidades incluídas no pacote:

- Terminal Linux **simulado** com navegação em diretórios fictícios e comandos seguros, sem shell real.
- Simulador HTTP de API que ensina os estados 200, 201, 401, 404 e 405, sem requisições externas.
- Comparador de consultas SQL por concatenação e parametrização, sem banco de dados real.
- Calculadora IPv4/CIDR com feedback e missão de identificação de sub-rede.
- Matriz de competências: progresso por etapa, projetos registrados, inglês e quatro simuladores.
- Estudos de caso por área dentro do fluxo das aulas principais, sem alterar a ordem ou o conteúdo-base das 139 aulas.
- Nova chave de dados `cyberlab_simlab_v1`, incluída no backup completo e validada na importação.

**Aviso:** simuladores educativos são diferentes de ambientes de execução reais. Conclusões e porcentagens indicam atividades registradas, não certificação de conhecimento. O CYBERLAB continua sem sincronização automática em nuvem. Voz e instalação PWA no Samsung precisam de testes no dispositivo.

Validação: `node tests/regression.cjs`, `node tests/backup.cjs`, `node tests/methodology.cjs`, `node tests/projects.cjs` e `node tests/simlabs.cjs`.

