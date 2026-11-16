# Auditoria geral — CYBERLAB 27.0

**Data:** 16/11/2026 · **Escopo:** versão 27.0 do PWA, sobre a base validada da versão 26.0. A auditoria estática foi executada no ambiente Node.js; não equivale à certificação da metodologia nem a teste em dispositivo real.

## Inventário conferido

- **139 aulas** do catálogo original de Cybersecurity preservadas, além de trilhas adicionais e inglês.
- **45 disciplinas acadêmicas** (12 anteriores + 33 acrescentadas na v26), alinhadas a **42 componentes** da matriz pública atual da UniSatc e 3 complementares. A trilha interdisciplinar de Engenharia de Software permanece separada.
- **297 aulas acadêmicas:** 289 anteriores e 8 desafios integradores inéditos, um em cada fase.
- **8 fases** com distribuição curricular de 5, 5, 5, 6, 5, 5, 5, 6 componentes (inclui Libras optativa e etapas de estágio/TCC como material de preparação, sem substituição de créditos).
- **35 URLs bibliográficas distintas** associadas às disciplinas; o formato foi conferido automaticamente e as fontes oficiais principais foram revisadas. Os 35 destinos não foram abertos um por um, portanto disponibilidade e pertinência individual ainda exigem curadoria contínua.
- **24 recursos** no shell do service worker, todos presentes na pasta e com versão de cache atualizada.

## Bateria de verificações

1. Sintaxe de scripts e blocos JavaScript do HTML; catálogo principal com 139 IDs exclusivos e questões válidas.
2. Estrutura de todas as aulas acadêmicas: teoria, exemplo, desafio, três alternativas distintas, gabarito válido, tarefa prática, erro comum, aprofundamento e roteiro de análise.
3. Progressão de dificuldade monotônica por etapa e acréscimo conforme fase. Recuperação ativa, critérios de autocorreção, opção de solicitar revisão e indicação persistente.
4. Exercício de fluxo automatizado em DOM simulado: seleção de disciplina, acerto de questão, redação de resposta, exibição de critérios, autoavaliação, conclusão, marcação de revisão e salvamento/reabertura de rascunho.
5. Testes de backup, restauração e rejeição de arquivo inválido; não alteramos as chaves de armazenamento das aulas antigas.
6. Comparação direta da v26 com a v27: **289 títulos mantidos nas mesmas posições** de disciplina/unidade/aula. Os novos projetos estão anexados ao final das unidades existentes.
7. Testes existentes de calculadora com teclado e símbolos, simuladores offline, projetos e aulas técnicas.
8. Integridade dos 24 caminhos de cache offline; arquivo manifest presente.

**Execução:** `for t in tests/*.cjs; do node "$t" || exit 1; done` na raiz do projeto (Node.js). O arquivo `tests/content-audit.cjs` concentra verificações de qualidade estrutural de todo conteúdo acadêmico e `tests/progressive-learning.cjs` exercita os novos fluxos.

## Revisão pedagógica — decisões tomadas

- **Fading de ajuda:** roteiros abertos no nível inicial e escondidos em `<details>` nas etapas mais difíceis. O aluno pode consultá-los livremente se travar.
- **Prática de recuperação:** questão com alternativas embaralhadas a cada abertura, resposta antes de conferir e retorno explicativo em vez de apenas certo/errado.
- **Transferência:** cada aula usa sua tarefa própria para o desafio aberto. Níveis altos exigem relatar teste e limitações, mesmo quando a pergunta de múltipla escolha é simples.
- **Revisão prioritária:** respostas marcadas pelo próprio estudante como inseguras ganham indicação visual e prioridade no botão de revisão.
- **Continuidade no Android:** voltar uma etapa, salvar rascunho ao fechar e retomar depois, mantendo toda mudança no mesmo armazenamento e backup.

Referências metodológicas: [Dunlosky et al.](https://pubmed.ncbi.nlm.nih.gov/26173288/), [Roediger & Karpicke](https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x) e [Sweller et al.](https://link.springer.com/article/10.1007/s10648-019-09465-5). As técnicas são adaptadas ao CYBERLAB; isso não demonstra automaticamente eficácia para cada aluno.

## Limites e riscos ainda existentes

1. **Respostas discursivas são autoavaliadas.** Checar tamanho e apresentar um roteiro não comprova correção matemática ou técnica. No futuro, incluir corretores determinísticos para tipos específicos (equações, código em sandbox segura, SQL em dados fictícios) e avaliações humanas quando disponíveis.
2. **Microaulas não equivalem ao curso integral da SATC.** Aulas universitárias de 60 ou 100 horas e ementas individuais requerem livros, listas extensas, projetos, professores e avaliações.
3. **Matemática avançada:** a calculadora é numérica e possui teclado de símbolos/rascunho; não há sistema algébrico simbólico confiável para integrais, matrizes ou provas formais.
4. **Android/Samsung:** não houve teste visual, de toque, instalação PWA, serviço de voz ou sincronização em aparelho físico. Tentativa local de executar Chromium foi bloqueada pelo ambiente (socket não permitido). É necessária uma rodada real quando possível.
5. **Hospedagem:** o pacote é instalável quando publicado via HTTPS, mas não foi colocado na origem já usada pelo ícone do usuário. Sem a origem atual ou acesso de publicação não é possível afirmar que o app no celular foi atualizado.
6. **Referências externas:** aulas e arquivos principais entram no cache, mas sites externos e bibliografia precisam de internet. Links podem mudar.
7. **Segurança dos dados:** progresso e respostas ficam no `localStorage` do navegador, não sincronizados entre aparelhos. Antes de mudar de origem ou limpar dados, exporte backup.

## Próximas melhorias recomendadas, fora desta entrega

- Banco autoral de problemas com múltiplas questões por aula e gabaritos matemáticos realmente resolvidos, não apenas roteiros de comparação.
- Editor de código seguro e correção determinística de exercícios de algoritmos; laboratório SQL com conjunto de dados sintético.
- Painel de lacunas por assunto e revisões por intervalos que incorporem erros em respostas livres, sem depender apenas de autoavaliação.
- Acessibilidade auditada em um aparelho real e teste de PWA instalado antes de uso diário intenso.
