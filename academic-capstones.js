/* CYBERLAB 27 — Oito desafios integradores autorais (um por fase da matriz UniSatc).
 * Acrescentados ao final das unidades: nenhum índice de aula antiga é alterado. */
(function(){'use strict';
const tracks=[...window.cy25Disciplines,...window.cy26SatcCourses];
const missions=[
['requirements',1,'SWEBOK','https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics',{
 title:'Desafio integrador I · Requisitos verificáveis para um app de estudos',
 explain:'Um problema acadêmico completo começa por contexto e usuários, avança para histórias e regras de negócio, e termina em critérios de aceitação observáveis. Requisitos funcionais especificam o que o sistema faz; não funcionais delimitam segurança, tempo e acessibilidade. Rastreabilidade conecta necessidade, requisito, cenário de teste e evidência, permitindo gerir mudanças sem perder controle.',
 details:'Cenário: um aluno estuda pelo Android com internet instável. Ele deve poder começar, interromper, retomar e refazer uma aula sem perder conclusão anterior. O requisito "salvar progresso" é ambíguo: salvar o quê, quando e como verificar? Especifique identificador de aula, estado de conclusão, última tentativa e tratamento de falta de espaço. Inclua comportamento ao atualizar o PWA. Diferencie condição de aceitação do teste que demonstra a condição.',
 example:'RF-01: como aluno, quero continuar de onde parei. CA-01: ao concluir a aula A e fechar o navegador, reabrir A no mesmo domínio exibe a conclusão. RNF-01: após instalar, aulas essenciais abrem sem rede; um teste ativa modo avião para verificar.',
 question:'Qual entrega permite verificar o requisito de retomada?',
 choices:['Critério de aceitação com cenário de fechar e reabrir','Frase vaga "o app será fácil"','Somente escolha da cor da interface'],answer:0,
 task:'Monte uma mini-especificação: 3 requisitos funcionais, 2 não funcionais, 4 critérios de aceitação, um risco e uma tabela que associe cada requisito a um teste reproduzível.',
 pitfall:'Não confunda uma tecnologia específica (localStorage) com a necessidade do usuário (preservar estado); requisitos devem sobreviver à troca de implementação.',
 worked:'Passo 1: descreva a jornada do aluno e a interrupção. Passo 2: escreva RF sobre retomada, revisão e conclusão. Passo 3: explicite RNF de uso offline e integridade. Passo 4: use Dado/Quando/Então para cada critério. Passo 5: vincule cada critério a uma evidência de teste. Passo 6: registre como o progresso será exportado em backup.'
}],
['structures',2,'PYTHON','https://docs.python.org/3/library/heapq.html',{
 title:'Desafio integrador II · Agenda de revisão com fila de prioridade',
 explain:'Uma fila de prioridade escolhe o próximo item por uma chave de ordenação em vez de apenas pela inserção. Uma heap binária permite inserção e remoção do mínimo em tempo O(log n), mantendo o próximo vencimento na raiz; uma lista não ordenada pode exigir busca O(n) a cada retirada. O algoritmo de revisão também precisa de regras para empate, erro, acerto e conteúdos novos.',
 details:'Caso: 1000 aulas foram estudadas, cada uma com data prevista de revisão e número de erros. Proponha uma estrutura com prioridade por data e, em empate, maior número de erros. Simule três eventos: errar uma revisão, acertar duas vezes e importar backup. Compare a complexidade com ordenar toda a lista a cada operação. A prioridade não significa certeza de aprendizagem: há limite diário e evidência observada.',
 example:'Registros (dia, -erros, id): (2,-3,"redes"), (1,-1,"álgebra"), (2,-1,"sql"). O primeiro removido é álgebra, porque dia 1 vence antes; depois redes, por mais erros no empate do dia 2.',
 question:'Qual operação do heap mantém custo típico O(log n)?',
 choices:['Inserir um novo item na fila de prioridade','Percorrer todas as 1000 aulas para imprimir títulos','Comparar todos os pares de aulas manualmente'],answer:0,
 task:'Escreva pseudocódigo com inserir(), proximaRevisao() e registrarResultado(), faça teste com cinco aulas e calcule custo assintótico de inserir e extrair.',
 pitfall:'O heap não ordena automaticamente todos os elementos para exibição; ele garante a prioridade do topo. Mudança de prioridade pode exigir inserção nova e descarte de entradas obsoletas.',
 worked:'Passo 1: defina chave (data, -erros, id). Passo 2: insira três aulas e desenhe a prioridade. Passo 3: extraia a menor data e avance seu vencimento após o resultado. Passo 4: compare O(log n) por operação com varredura O(n). Passo 5: trate entradas obsoletas usando versão do registro. Passo 6: teste empates e datas atrasadas.'
}],
['satc_frontend',3,'MDN','https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching',{
 title:'Desafio integrador III · Front-end acessível que funciona offline',
 explain:'Um front-end confiável separa estrutura semântica, apresentação, estados e efeitos de rede. Para PWA, service worker e Cache API ajudam a fornecer arquivos essenciais offline, mas versionamento de cache precisa evitar telas inconsistentes. Acessibilidade exige foco visível, rótulos, navegação por teclado e mensagens de erro compreensíveis; contraste sozinho não basta.',
 details:'Projeto: desenhe página de matrícula em aula com lista, busca, botão de continuar e confirmação. Modele estados carregando, disponível, sem conexão, vazio e erro. Defina quais arquivos entram no cache, quando atualizar e qual comportamento preservar quando a rede cair no meio de uma ação. Aplique critérios de WCAG 2.2 relevantes à navegação e aos formulários, verificando a interface no Android.',
 example:'Teste 1: abrir o site online, instalar, ativar modo avião e reabrir a lição. Teste 2: navegar apenas pelo teclado e identificar foco. Teste 3: enviar formulário vazio e receber mensagem associada ao campo, sem depender só de cor.',
 question:'Qual combinação melhora simultaneamente offline e acessibilidade?',
 choices:['Cache versionado e controles rotulados com foco visível','Depender sempre de CDN e remover rótulos','Bloquear teclado e esconder erros do formulário'],answer:0,
 task:'Construa ou desenhe HTML semântico, cinco estados da interface, estratégia de cache versionado e uma matriz de seis testes cobrindo acessibilidade e perda de conexão.',
 pitfall:'Cache-first indiscriminado pode manter dados desatualizados; arquivos do aplicativo e informações dinâmicas precisam de estratégias diferentes e de política explícita de atualização.',
 worked:'Passo 1: faça mapa das telas e estados. Passo 2: identifique HTML semântico e associações label/input. Passo 3: escolha shell offline e nome de versão do cache. Passo 4: teste instalação e funcionamento sem rede. Passo 5: valide foco, legibilidade e mensagens. Passo 6: documente falha e correção observada.'
}],
['satc_webproject',4,'OWASP','https://owasp.org/API-Security/editions/2023/en/0x11-t10/',{
 title:'Desafio integrador IV · Sistema web com API, banco e autorização',
 explain:'Construir um sistema completo exige ligar requisito, contrato HTTP, autenticação, autorização, persistência e testes. API que aceita token válido ainda precisa verificar se aquele usuário pode acessar especificamente cada objeto. Banco de dados garante integridade por restrições e transações, enquanto o servidor precisa validar entradas e retornar códigos HTTP adequados.',
 details:'Caso: pequenos chamados de suporte. Aluno A cria chamado 12; aluno B tenta consultar /chamados/12. Mesmo autenticado, B não deve ver dados de A sem permissão explícita. Defina modelo Usuário–Chamado–Histórico, endpoints, políticas por papel, paginação e logs sem segredos. Diferencie erro de validação, não autorizado e acesso proibido. Projete teste concorrente de edição e fluxo de atualização.',
 example:'POST /chamados valida título e usuário; GET /chamados/12 verifica dono ou papel permitido antes de ler resposta. Banco usa FK de chamado para usuário e índice por dono. Teste de API recebe 403 ao tentar acessar objeto alheio, conforme política adotada.',
 question:'Qual verificação previne acesso indevido a chamado de outro usuário?',
 choices:['Autorizar o usuário no nível do objeto consultado','Bastar que qualquer token seja válido','Ocultar o botão no navegador e confiar nisso'],answer:0,
 task:'Desenhe modelo ER, quatro rotas REST, política por objeto, cinco códigos/respostas possíveis e oito testes, incluindo entrada inválida e acesso entre usuários diferentes.',
 pitfall:'Validação na interface e esconder identificadores não substituem autorização no servidor; BOLA ocorre quando a API consulta objetos por ID sem conferir a permissão do solicitante.',
 worked:'Passo 1: especifique quem pode ver e editar cada chamado. Passo 2: desenhe chaves primárias, estrangeiras e índices. Passo 3: defina rota e esquema de resposta. Passo 4: aplique autenticação e autorização por objeto. Passo 5: crie testes positivos e negativos com dois usuários. Passo 6: audite logs e rollback após falha.'
}],
['satc_projectai',5,'GOOGLE','https://developers.google.com/machine-learning/crash-course',{
 title:'Desafio integrador V · Modelo de recomendação responsável',
 explain:'Um projeto de Machine Learning deve começar por objetivo, dados e baseline simples, não por rede neural. Divisão treino/validação/teste precisa impedir vazamento temporal ou de identidade. Métricas dependem do custo de cada erro, distribuição de classes e contexto de uso. É essencial registrar consentimento, minimização dos dados e limitações antes de tomar decisões automatizadas.',
 details:'Estudo fictício: prever quais aulas precisam de revisão a partir de erros anteriores e intervalo desde o estudo. Dados de um mesmo aluno não devem se misturar inadvertidamente entre conjuntos se isso inflar a avaliação. Defina baseline por regra, modelo alternativo, precisão, recall, taxa de falso alerta e monitoramento depois do lançamento. Evite recomendar menos material aos alunos com histórico escasso.',
 example:'Se 100 revisões realmente necessárias geram 80 alertas corretos e 20 não detectadas, recall é 80%. Se houve 40 falsos alertas, precisão é 80/(80+40)=66,7%. Acurácia isolada não descreve custos de negligenciar uma revisão.',
 question:'Qual prática evita resultado artificialmente otimista na avaliação?',
 choices:['Separar conjuntos sem vazamento e comparar com baseline','Testar exclusivamente nos exemplos de treino','Usar dados pessoais ilimitados para aumentar tamanho'],answer:0,
 task:'Elabore ficha do projeto com hipótese, fonte mínima de dados, risco de privacidade, baseline, divisão treino/teste, matriz de confusão e decisão de implantação condicionada a evidência.',
 pitfall:'Predição alta em dados históricos pode falhar em alunos novos ou após mudança de comportamento; monitoramento e avaliação por subgrupos precisam acompanhar o uso real.',
 worked:'Passo 1: especifique a decisão que o modelo ajudará a tomar. Passo 2: liste atributos legítimos e remova identificadores desnecessários. Passo 3: defina baseline e partição sem vazamento. Passo 4: calcule precisão e recall a partir da matriz de confusão. Passo 5: avalie custo de falsos positivos/negativos. Passo 6: documente monitoramento e critério para desligar a recomendação.'
}],
['satc_projectui',6,'WCAG','https://www.w3.org/TR/WCAG22/',{
 title:'Desafio integrador VI · Pesquisa de UX com critérios de acessibilidade',
 explain:'Pesquisa de UX precisa de tarefas, perfis, cenários, métricas observáveis e análise de erros. Protótipos devem ser testados sem conduzir o participante ao resultado. Acessibilidade é parte do teste, incluindo foco, rotulagem, feedback multimodal e tamanho dos alvos de toque. Um estudo pequeno revela problemas, mas não permite declarar percentuais universais sobre toda população.',
 details:'Projete a jornada de encontrar uma aula, fazer exercício, usar calculadora e retomar depois. Crie duas alternativas de navegação. Faça sessões com participantes de experiências diferentes, respeitando consentimento e dados mínimos. Compare taxa de conclusão por tarefa, tempo, erros e comentários qualitativos. Planeje também uma auditoria WCAG, porque teste com usuários e avaliação por critérios são complementares.',
 example:'Cinco participantes tentam localizar Cálculo II sem instruções adicionais. Três concluem na versão A e cinco na B, mas amostra pequena não comprova superioridade estatística. Registre onde surgiram erros, proponha ajuste e repita teste.',
 question:'Qual conclusão é responsável para teste com poucos participantes?',
 choices:['Identificar problemas observados e validar melhorias em nova rodada','Provar que 100% dos usuários preferem a interface','Ignorar participantes que enfrentaram dificuldades'],answer:0,
 task:'Prepare roteiro de quatro tarefas, consentimento simples, planilha de observações, checklist de WCAG, duas versões de tela e relatório com achados, limitações e próximos testes.',
 pitfall:'Confundir opinião de um participante ou uma taxa em amostra muito pequena com verdade universal gera decisões frágeis; reporte contexto e incerteza.',
 worked:'Passo 1: escolha tarefas e critérios de êxito antes do teste. Passo 2: registre ações sem orientar o usuário. Passo 3: conte sucesso e erros por tarefa. Passo 4: anote evidências de barreira de foco e rótulos. Passo 5: priorize correções por gravidade. Passo 6: teste novamente sem prometer generalização indevida.'
}],
['satc_projectmgmt',7,'GIT','https://docs.github.com/en/actions',{
 title:'Desafio integrador VII · Entrega contínua e gestão de incidentes',
 explain:'Em projetos maduros, entregar envolve planejamento, código, revisão, testes, implantação, monitoramento e resposta a incidentes. Pipeline CI pode barrar build ou teste falho antes da produção; CD deve ter permissões, ambientes e controles adequados. Métricas de entrega precisam considerar confiabilidade e tempo de recuperação, não somente frequência de deploy.',
 details:'Cenário: uma versão do app quebra a restauração de backups no Android. O time detecta erro após deploy. Você é responsável por triagem, mitigação segura, rollback para versão conhecida, preservação de evidências e comunicação aos usuários. Diferencie corrigir causa raiz de restaurar serviço imediatamente; proponha teste de regressão que impeça recorrência. Inclua risco de cache antigo do service worker.',
 example:'Pipeline executa verificação de sintaxe, testes de backup, lint, build e revisão antes de release. Se restauração falha após deploy, suspende publicação, preserva backup, reverte artefato e registra linha do tempo e ação preventiva.',
 question:'Qual ação é prioritária quando uma versão causa perda de restauração?',
 choices:['Conter impacto, preservar dados e restaurar versão segura','Apagar logs para reduzir ruído','Continuar lançando recursos até bug desaparecer'],answer:0,
 task:'Crie plano de três sprints, quadro de riscos, pipeline de cinco etapas, checklist de rollout, fluxo de incidente P1, plano de rollback e post-mortem sem culpabilização.',
 pitfall:'Fazer rollback do código não recupera automaticamente dados alterados por migração; planeje compatibilidade de esquema, backups e recuperação testada.',
 worked:'Passo 1: classifique impacto, alcance e evidências. Passo 2: bloqueie novas versões. Passo 3: teste backup e versão anterior em ambiente seguro. Passo 4: execute rollback controlado ou mitigação. Passo 5: monitore recuperação e comunique usuários. Passo 6: registre causa raiz, testes novos, responsáveis e prazo de ação.'
}],
['satc_pfc2',8,'SWEBOK','https://www.computer.org/education/bodies-of-knowledge/software-engineering/topics',{
 title:'Desafio integrador VIII · Trabalho final reproduzível e defesa técnica',
 explain:'Um trabalho de conclusão demonstra pergunta pertinente, método justificável, implementação delimitada, resultados verificáveis, discussão crítica e referências rastreáveis. Uma aplicação demonstrável sem avaliação não comprova a hipótese proposta. A defesa precisa separar achados, limitações, ameaças à validade e possibilidades futuras, sem exagerar conclusões nem esconder falhas.',
 details:'Projeto hipotético: verificar se revisão espaçada no CYBERLAB ajuda alunos iniciantes a reter conceitos de redes em duas semanas. Especifique grupo, consentimento, intervenção, medida de acerto antes e depois, limitações de amostra e efeito de prática. Se não houver grupo de comparação ou amostra suficiente, trate resultados como exploratórios. Inclua repositório e passos de reprodução sem publicar dados pessoais.',
 example:'Pergunta: revisões em 1, 3 e 7 dias melhoram acertos após 14 dias comparadas à rotina atual? Relatório declara desenho do estudo, instrumentos, n, distribuição de resultados e vieses. A conclusão apresenta somente o que os dados permitem afirmar.',
 question:'O que torna uma conclusão de TCC cientificamente defensável?',
 choices:['Relacionar resultados à pergunta, método e limitações','Garantir eficácia sem apresentar dados','Omitir resultado que contraria hipótese'],answer:0,
 task:'Redija uma proposta de TCC com pergunta, hipótese, objetivos, metodologia, ética, métricas, plano de análise, ameaças à validade e roteiro de dez slides para defesa com evidências.',
 pitfall:'Um protótipo funcionando não equivale a comprovação de benefício educacional; experimento mal controlado ou dados incompletos exigem conclusão limitada.',
 worked:'Passo 1: formule pergunta falsificável. Passo 2: escolha variável e medida. Passo 3: documente amostra, consentimento e limitações. Passo 4: colete e analise sem esconder resultados desfavoráveis. Passo 5: publique código e instruções sem expor participantes. Passo 6: prepare defesa com método, evidências, contra-argumentos e trabalho futuro.'
}]
];
for(const [id,phase,source,reference,lesson] of missions){
 const t=tracks.find(x=>x.id===id);
 if(!t||t.satcPhase!==phase)throw Error('Desafio integrador sem matéria correspondente: '+id);
 t.stages[t.stages.length-1].lessons.push({...lesson,reference,academic:true,satc:true,capstone:true});
 const cited=t.sources||[];if(!cited.some(([,url])=>url===reference))cited.push(['Referência técnica do desafio integrador',reference]);
 t.sources=cited;
}
window.cy27Capstones=missions.map(([id,phase,,reference,lesson])=>({id,phase,reference,title:lesson.title}));
})();
