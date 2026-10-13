/**
 * BANCO OFICIAL DE QUEST�•ES FHCGV - CARGO 01: AUXILIAR ADMINISTRATIVO
 * 180 QUEST�•ES SELECIONADAS (30 DE CADA UMA DAS 6 DISCIPLINAS)
 * COM JUSTIFICATIVA DETALHADA PARA CADA UMA DAS ALTERNATIVAS (A, B, C, D, E)
 * ALUNA: DAYANA MAIA DE JESUS | BANCA: CONSULPLAN
 * 
 * DISTRIBUI�‡�ƒO DAS 180 QUEST�•ES:
 * 1. Conhecimentos Específicos: 30 questões (esp_01 a esp_30)
 * 2. Políticas de Saúde Pública (SUS): 30 questões (sus_01 a sus_30)
 * 3. Língua Portuguesa: 30 questões (port_01 a port_30)
 * 4. Legislação Estadual (Lei 5.810/94 e Lei 6.304/00): 30 questões (leg_01 a leg_30)
 * 5. �‰tica e Qualidade no Serviço Público: 30 questões (eti_01 a eti_30)
 * 6. Raciocínio Lógico-Matemático: 30 questões (rlm_01 a rlm_30)
 */

const BANCO_QUESTOES = [
    {
        "id":  "esp_01",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Reda��o Oficial e Fechos",
        "enunciado":  "Um Auxiliar Administrativo da FHCGV precisa redigir um of�cio ao Secret�rio de Estado de Sa�de do Par�, autoridade superior. De acordo com o Manual de Reda��o da Presid�ncia da Rep�blica (3� edi��o), o fecho correto a ser empregado �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Cordialmente,",
                                       "exp":  "Incorreto. \u0027Cordialmente\u0027 n�o � previsto como fecho oficial pelo Manual de Reda��o da Presid�ncia da Rep�blica."
                                   },
                             "B":  {
                                       "texto":  "Atenciosamente,",
                                       "exp":  "Incorreto. \u0027Atenciosamente\u0027 � reservado para autoridades de mesma hierarquia ou de hierarquia inferior."
                                   },
                             "C":  {
                                       "texto":  "Respeitosamente,",
                                       "exp":  "Correto! O fecho \u0027Respeitosamente,\u0027 � o �nico padr�o oficial para autoridades hierarquicamente superiores (incluindo Secret�rios de Estado)."
                                   },
                             "D":  {
                                       "texto":  "Com protestos de elevada estima e considera��o,",
                                       "exp":  "Incorreto. F�rmulas prolixas e rebuscadas foram completamente abolidas das normas oficiais."
                                   },
                             "E":  {
                                       "texto":  "Sauda��es Fraternas,",
                                       "exp":  "Incorreto. Trata-se de fecho coloquial ou informal, totalmente vedado no padr�o culto oficial."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "O Manual de Reda��o da Presid�ncia uniformizou todos os fechos em apenas dois: \u0027Respeitosamente,\u0027 para autoridades superiores e \u0027Atenciosamente,\u0027 para igual ou menor hierarquia."
    },
    {
        "id":  "esp_02",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Arquivologia e Teoria das Tr�s Idades",
        "enunciado":  "No Servi�o de Arquivo M�dico e Estat�stica (SAME) da FHCGV, prontu�rios de pacientes com alta h� 7 anos sem consultas recentes, aguardando prazo prescricional legal, encontram-se no:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Arquivo Corrente (1� Idade).",
                                       "exp":  "Incorreto. O arquivo corrente guarda documentos de uso frequente e tramita��o ativa no dia a dia."
                                   },
                             "B":  {
                                       "texto":  "Arquivo Intermedi�rio (2� Idade).",
                                       "exp":  "Correto! Guarda documentos de uso pouco frequente que cumprem prazo precaucional/prescricional antes do descarte ou guarda permanente."
                                   },
                             "C":  {
                                       "texto":  "Arquivo Permanente (3� Idade).",
                                       "exp":  "Incorreto. O permanente � destinado exclusivamente aos documentos de valor hist�rico, probat�rio definitivo ou cultural, inalien�veis."
                                   },
                             "D":  {
                                       "texto":  "Arquivo Morto.",
                                       "exp":  "Incorreto. O termo \u0027arquivo morto\u0027 � repudiado na arquivologia moderna e considerado conceitualmente errado."
                                   },
                             "E":  {
                                       "texto":  "Arquivo de Cust�dia Ef�mera.",
                                       "exp":  "Incorreto. Termo inexistente na teoria cl�ssica das tr�s idades (ciclo vital dos documentos)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A Teoria das Tr�s Idades classifica os documentos em: Corrente (ativo/frequente), Intermedi�rio (semi-ativo/precau��o tempor�ria) e Permanente (hist�rico/eterno)."
    },
    {
        "id":  "esp_03",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Nova Lei de Licita��es (Lei 14.133/21)",
        "enunciado":  "A FHCGV necessita contratar empresa para servi�o exclusivo de manuten��o em acelerador linear patenteado, com comprova��o formal de que n�o existe concorrente t�cnico no pa�s. A hip�tese legal � de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Dispensa de licita��o por valor.",
                                       "exp":  "Incorreto. A dispensa por valor aplica-se apenas a compras de pequeno vulto (art. 75, I e II), o que n�o � o caso de servi�os de alta tecnologia."
                                   },
                             "B":  {
                                       "texto":  "Preg�o eletr�nico obrigat�rio.",
                                       "exp":  "Incorreto. O preg�o exige competi��o e disputa de lances entre m�ltiplos fornecedores."
                                   },
                             "C":  {
                                       "texto":  "Concorr�ncia com crit�rio de t�cnica e pre�o.",
                                       "exp":  "Incorreto. N�o havendo competidores no mercado, � imposs�vel instaurar disputa licitat�ria."
                                   },
                             "D":  {
                                       "texto":  "Inexigibilidade de licita��o, pela inviabilidade de competi��o.",
                                       "exp":  "Correto! O art. 74, I da Lei 14.133/21 determina que � inexig�vel licitar quando h� inviabilidade f�tica de competi��o (fornecedor exclusivo)."
                                   },
                             "E":  {
                                       "texto":  "Concurso p�blico de projetos.",
                                       "exp":  "Incorreto. Concurso destina-se � escolha de trabalho art�stico, t�cnico ou cient�fico mediante pr�mio."
                                   }
                         },
        "correta":  "D",
        "comentarioGeral":  "Inexigibilidade = Inviabilidade de competi��o (rol exemplificativo, art. 74). Dispensa = Competi��o vi�vel, mas a lei autoriza n�o licitar (rol taxativo, art. 75)."
    },
    {
        "id":  "esp_04",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Almoxarifado e Gest�o de Estoques",
        "enunciado":  "Para evitar o vencimento de ampolas de antibi�ticos no almoxarifado hospitalar, o m�todo de movimenta��o de materiais em que os lotes mais antigos saem primeiro para as enfermarias �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "PEPS (Primeiro que Entra, Primeiro que Sai / FIFO).",
                                       "exp":  "Correto! O PEPS assegura que o produto estocado h� mais tempo seja consumido primeiro, evitando perdas por validade."
                                   },
                             "B":  {
                                       "texto":  "UEPS (�ltimo que Entra, Primeiro que Sai / LIFO).",
                                       "exp":  "Incorreto. O UEPS consome o estoque novo primeiro, o que faria os lotes antigos vencerem na prateleira (proibido na sa�de)."
                                   },
                             "C":  {
                                       "texto":  "Custo M�dio Ponderado Fixo.",
                                       "exp":  "Incorreto. O custo m�dio � m�todo cont�bil de valora��o financeira, n�o uma regra f�sica de rotatividade de estoque perec�vel."
                                   },
                             "D":  {
                                       "texto":  "Just-in-Time com estoque zero.",
                                       "exp":  "Incorreto. Hospitais de urg�ncia n�o podem operar com estoque zero sob pena de desabastecimento em cirurgias de emerg�ncia."
                                   },
                             "E":  {
                                       "texto":  "Giro de Reposi��o Posterior.",
                                       "exp":  "Incorreto. Express�o sem correla��o conceitual com normas de estocagem de produtos farmac�uticos."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "PEPS (First In, First Out) � mandat�rio para medicamentos e insumos com prazo de validade definido em farm�cias e almoxarifados hospitalares."
    },
    {
        "id":  "esp_05",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Faturamento Hospitalar do SUS",
        "enunciado":  "Ao preparar o processamento de contas de um paciente submetido a cirurgia card�aca eletiva internado na FHCGV, o instrumento padr�o emitido pelo Auxiliar Administrativo para autorizar a cobran�a ao SUS � a:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "BPA (Boletim de Produ��o Ambulatorial).",
                                       "exp":  "Incorreto. O BPA � utilizado para procedimentos ambulatoriais simples e consultas sem interna��o."
                                   },
                             "B":  {
                                       "texto":  "RAAS (Registro das A��es Ambulatoriais de Sa�de).",
                                       "exp":  "Incorreto. O RAAS atende a atendimentos psicossociais e aten��o domiciliar continuada."
                                   },
                             "C":  {
                                       "texto":  "AIH (Autoriza��o de Interna��o Hospitalar).",
                                       "exp":  "Correto! A AIH � o documento de faturamento gerador do pagamento de di�rias, cirurgias e exames de pacientes internados no SUS."
                                   },
                             "D":  {
                                       "texto":  "APAC (Autoriza��o de Procedimento de Alta Complexidade).",
                                       "exp":  "Incorreto. A APAC destina-se a procedimentos ambulatoriais especializados (como quimioterapia ou hemodi�lise sem interna��o)."
                                   },
                             "E":  {
                                       "texto":  "DAE (Documento de Arrecada��o Estadual).",
                                       "exp":  "Incorreto. O DAE � guia de recolhimento de tributos e taxas estaduais, n�o instrumento do SUS."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "AIH = Interna��o hospitalar (leitos, cirurgias, UTI). APAC = Ambulat�rio de alta complexidade (hemodi�lise, quimioterapia sem interna��o). BPA = Atendimentos ambulatoriais gerais."
    },
    {
        "id":  "esp_06",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Inform�tica: Seguran�a e Atalhos Windows",
        "enunciado":  "Ao se afastar temporariamente da recep��o do hospital por motivo de pausa, a fim de resguardar o sigilo dos prontu�rios abertos, o atalho de teclado nativo do Windows para bloquear o computador �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Tecla Windows + L",
                                       "exp":  "Correto! Win + L bloqueia instantaneamente a sess�o de usu�rio (Lock), exigindo senha para reabrir."
                                   },
                             "B":  {
                                       "texto":  "Tecla Windows + D",
                                       "exp":  "Incorreto. Win + D minimiza todas as janelas para exibir a �rea de trabalho, mas n�o bloqueia o computador."
                                   },
                             "C":  {
                                       "texto":  "Alt + F4",
                                       "exp":  "Incorreto. Alt + F4 fecha o programa em execu��o ou exibe o di�logo para desligar o Windows."
                                   },
                             "D":  {
                                       "texto":  "Ctrl + Shift + Esc",
                                       "exp":  "Incorreto. Abre o Gerenciador de Tarefas do Windows."
                                   },
                             "E":  {
                                       "texto":  "Tecla Windows + E",
                                       "exp":  "Incorreto. Win + E abre o Explorador de Arquivos do Windows."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Win + L (Lock) � a principal medida de seguran�a da informa��o f�sica em balc�es de atendimento e prontu�rios m�dicos."
    },
    {
        "id":  "esp_07",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Reda��o Oficial: Vocativos e Pronomes",
        "enunciado":  "Segundo a 3� edi��o do Manual de Reda��o da Presid�ncia da Rep�blica, qual das formas de vocativo a seguir � a �NICA correta para correspond�ncias oficiais dirigidas a autoridades p�blicas?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Dign�ssimo Juiz de Direito,",
                                       "exp":  "Incorreto. O pronome e qualificativo \u0027Dign�ssimo\u0027 (DD.) foi expressamente banido das comunica��es oficiais."
                                   },
                             "B":  {
                                       "texto":  "Ilustr�ssimo Senhor Coordenador,",
                                       "exp":  "Incorreto. O tratamento \u0027Ilustr�ssimo\u0027 (Ilmo.) tamb�m foi expressamente abolido pelo manual."
                                   },
                             "C":  {
                                       "texto":  "Senhor Diretor,",
                                       "exp":  "Correto! O vocativo padr�o oficial adotado � invariavelmente \u0027Senhor + Cargo\u0027 (ou \u0027Senhora + Cargo\u0027), seguido de v�rgula."
                                   },
                             "D":  {
                                       "texto":  "Prezado Amigo,",
                                       "exp":  "Incorreto. Linguagem excessivamente �ntima e pessoal, vedada pela impessoalidade da reda��o oficial."
                                   },
                             "E":  {
                                       "texto":  "Estimado Colega Servidor,",
                                       "exp":  "Incorreto. Foge completamente ao padr�o culto e impessoal da administra��o p�blica."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "O Manual aboliu \u0027Dign�ssimo\u0027 e \u0027Ilustr�ssimo\u0027. O padr�o moderno para vocativo � unicamente \u0027Senhor + Cargo,\u0027 ou \u0027Excelent�ssimo Senhor Presidente,\u0027 para chefes de Poder."
    },
    {
        "id":  "esp_08",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Arquivologia: M�todos de Arquivamento",
        "enunciado":  "Para organizar as pastas funcionais dos servidores administrativos da FHCGV pelo crit�rio estrito dos seus nomes completos, utiliza-se o m�todo de arquivamento:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Num�rico Cronol�gico.",
                                       "exp":  "Incorreto. Esse m�todo ordena pela data de cria��o ou protocolo sequencial do documento."
                                   },
                             "B":  {
                                       "texto":  "Alfab�tico.",
                                       "exp":  "Correto! O m�todo alfab�tico organiza fichas e pastas por ordem alfab�tica de nomes (com regras de alfabeta��o e sobrenomes)."
                                   },
                             "C":  {
                                       "texto":  "Geogr�fico.",
                                       "exp":  "Incorreto. O m�todo geogr�fico prioriza o local (Estado, cidade ou pa�s) como primeiro crit�rio de ordena��o."
                                   },
                             "D":  {
                                       "texto":  "Ideogr�fico Duplex.",
                                       "exp":  "Incorreto. M�todos ideogr�ficos ordenam por assuntos ou temas divididos em classes e subclasses."
                                   },
                             "E":  {
                                       "texto":  "Num�rico D�gito-Terminal.",
                                       "exp":  "Incorreto. Utilizado em grandes massas de n�meros onde os �ltimos d�gitos formam o crit�rio prim�rio."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "O m�todo alfab�tico � direto, simples e o mais empregado para pessoas f�sicas (como prontu�rios por nome ou pastas funcionais de RH)."
    },
    {
        "id":  "esp_09",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Gest�o de Materiais: Curva ABC",
        "enunciado":  "Na an�lise de estoque do almoxarifado hospitalar da FHCGV pela Curva ABC, os itens classificados na \u0027Classe A\u0027 caracterizam-se por:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Representarem a maioria das unidades em estoque (cerca de 80%), por�m com baixo valor financeiro.",
                                       "exp":  "Incorreto. Essa � a defini��o cl�ssica dos itens da Classe C."
                                   },
                             "B":  {
                                       "texto":  "Representarem pequeno percentual em quantidade f�sica (cerca de 20%), mas concentrarem o maior valor monet�rio total (cerca de 80%).",
                                       "exp":  "Correto! A Classe A re�ne os itens de maior valor monet�rio do hospital (pr�teses, cateteres especiais, medicamentos caros), demandando controle r�gido."
                                   },
                             "C":  {
                                       "texto":  "Serem itens obsoletos que devem ser imediatamente descartados sem baixa cont�bil.",
                                       "exp":  "Incorreto. Itens obsoletos n�o integram a categoriza��o de valor da Curva ABC."
                                   },
                             "D":  {
                                       "texto":  "Apresentarem giro de estoque nulo com toler�ncia a perdas indiscriminadas.",
                                       "exp":  "Incorreto. Os itens da classe A exigem acompanhamento di�rio com zero toler�ncia a perdas."
                                   },
                             "E":  {
                                       "texto":  "Serem itens adquiridos exclusivamente por doa��o e sem valor patrimonial registrado.",
                                       "exp":  "Incorreto. A Curva ABC � baseada estritamente no valor monet�rio de consumo e aquisi��o."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Curva ABC (Princ�pio de Pareto): Classe A = ~20% dos itens, ~80% do valor total; Classe B = intermedi�ria; Classe C = ~50% dos itens, ~5% do valor total."
    },
    {
        "id":  "esp_10",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Nova Lei de Licita��es (Lei 14.133/21)",
        "enunciado":  "Qual das op��es a seguir relaciona CORRETAMENTE as modalidades licitat�rias expressamente v�lidas sob a vig�ncia exclusiva da Lei Federal n� 14.133/2021?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Preg�o, Concorr�ncia, Concurso, Leil�o e Di�logo Competitivo.",
                                       "exp":  "Correto! S�o exatamente as 5 modalidades previstas no art. 28 da nova lei."
                                   },
                             "B":  {
                                       "texto":  "Tomada de Pre�os, Convite, Concorr�ncia e Preg�o.",
                                       "exp":  "Incorreto. Tomada de Pre�os e Convite foram extintas e n�o existem mais na Lei 14.133/21."
                                   },
                             "C":  {
                                       "texto":  "Preg�o, Carta-Convite, Concurso e Consulta pr�via.",
                                       "exp":  "Incorreto. Carta-convite foi extinta e Consulta s� existia em ag�ncias reguladoras na Lei 9.472."
                                   },
                             "D":  {
                                       "texto":  "Concorr�ncia, Tomada de Pre�os e Chamamento Social apenas.",
                                       "exp":  "Incorreto. Tomada de Pre�os foi revogada da legisla��o licitat�ria geral."
                                   },
                             "E":  {
                                       "texto":  "Leil�o Judicial, Convite Presencial e Di�logo Simples.",
                                       "exp":  "Incorreto. Nomes inexistentes e mistura com modalidades extintas."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Art. 28 da Lei 14.133/21: Preg�o, Concorr�ncia, Concurso, Leil�o e Di�logo Competitivo. N�o existe mais Convite nem Tomada de Pre�os!"
    },
    {
        "id":  "esp_11",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Inform�tica: F�rmulas do Microsoft Excel",
        "enunciado":  "Na planilha de controle de despesas de materiais da FHCGV, para somar apenas os valores do intervalo B2:B20 cujo setor correspondente na coluna A2:A20 seja igual a \u0027Cardiologia\u0027, a f�rmula correta �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "=SOMA(B2:B20)",
                                       "exp":  "Incorreto. Esta f�rmula soma todos os valores sem verificar qualquer crit�rio ou condi��o."
                                   },
                             "B":  {
                                       "texto":  "=SOMASE(A2:A20; \"Cardiologia\"; B2:B20)",
                                       "exp":  "Correto! A sintaxe da fun��o SOMASE �: (intervalo_crit�rio; crit�rio; intervalo_soma)."
                                   },
                             "C":  {
                                       "texto":  "=CONT.SE(B2:B20; \"Cardiologia\")",
                                       "exp":  "Incorreto. CONT.SE conta a quantidade de ocorr�ncias, n�o realiza soma monet�ria de valores."
                                   },
                             "D":  {
                                       "texto":  "=SE(A2:A20=\"Cardiologia\"; SOMA(B2:B20))",
                                       "exp":  "Incorreto. Sintaxe inv�lida no Excel para opera��es com intervalos m�ltiplos sem SOMASE."
                                   },
                             "E":  {
                                       "texto":  "=M�DIASE(B2:B20; \"Cardiologia\")",
                                       "exp":  "Incorreto. Calcula a m�dia aritm�tica condicional, n�o a soma total."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A fun��o SOMASE(intervalo_avalia��o; crit�rio; intervalo_a_somar) � a f�rmula condicional mais cobrada pela Consulplan em provas administrativas."
    },
    {
        "id":  "esp_12",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Constitucional: Princ�pios da Administra��o P�blica",
        "enunciado":  "O diretor da funda��o p�blica n�o pode inserir seu nome, foto ou slogan pessoal em cartazes publicit�rios das campanhas preventivas do hospital. Esse limite decorre diretamente do princ�pio constitucional da:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Publicidade estrita.",
                                       "exp":  "Incorreto. A publicidade exige transpar�ncia dos atos, mas � a impessoalidade que veda a promo��o pessoal."
                                   },
                             "B":  {
                                       "texto":  "Impessoalidade.",
                                       "exp":  "Correto! O art. 37, � 1� da CF veda expressamente nomes, s�mbolos ou imagens que caracterizem promo��o pessoal de autoridades."
                                   },
                             "C":  {
                                       "texto":  "Autotutela governamental.",
                                       "exp":  "Incorreto. Autotutela � o poder da administra��o de anular seus pr�prios atos ilegais ou revogar os inoportunos."
                                   },
                             "D":  {
                                       "texto":  "Efici�ncia financeira.",
                                       "exp":  "Incorreto. Efici�ncia diz respeito ao rendimento, celeridade e economia de recursos p�blicos."
                                   },
                             "E":  {
                                       "texto":  "Continuidade dos servi�os.",
                                       "exp":  "Incorreto. Refere-se � proibi��o de interrup��o injustificada dos servi�os p�blicos essenciais."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "O princ�pio da Impessoalidade tem duas faces: tratamento igualit�rio aos administrados e veda��o de promo��o pessoal de agentes p�blicos com verba estatal."
    },
    {
        "id":  "esp_13",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Arquivologia: Tabela de Temporalidade",
        "enunciado":  "O instrumento arquiv�stico resultante do processo de avalia��o de documentos que determina os prazos de guarda nas fases corrente e intermedi�ria e a destina��o final (elimina��o ou recolhimento) chama-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Regimento Interno de Protocolo.",
                                       "exp":  "Incorreto. O regimento define atribui��es de cargos e funcionamento da unidade f�sica."
                                   },
                             "B":  {
                                       "texto":  "Tabela de Temporalidade.",
                                       "exp":  "Correto! A Tabela de Temporalidade Documental (TTD) � o instrumento oficial que define prazos de reten��o e destina��o."
                                   },
                             "C":  {
                                       "texto":  "�ndice Onom�stico Central.",
                                       "exp":  "Incorreto. Trata-se de guia alfab�tico de nomes de pessoas f�sicas ou jur�dicas."
                                   },
                             "D":  {
                                       "texto":  "Livro de Registro de Of�cios.",
                                       "exp":  "Incorreto. � mero instrumento de controle sequencial num�rico de sa�da de expedientes."
                                   },
                             "E":  {
                                       "texto":  "Invent�rio Sum�rio de Bens.",
                                       "exp":  "Incorreto. � documento patrimonial de contabilidade para bens permanentes e m�veis."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A Tabela de Temporalidade � aprovada pela autoridade competente e � a �nica base legal para permitir o descarte seguro de pap�is p�blicos."
    },
    {
        "id":  "esp_14",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Almoxarifado: Estoque de Seguran�a",
        "enunciado":  "Em administra��o de materiais hospitalares, a quantidade adicional mantida no almoxarifado para prevenir atrasos imprevistos de fornecedores ou oscila��es de consumo inesperadas � o:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Estoque M�ximo Absoluto.",
                                       "exp":  "Incorreto. O estoque m�ximo � o limite f�sico e financeiro suportado pela capacidade do dep�sito."
                                   },
                             "B":  {
                                       "texto":  "Estoque de Seguran�a (ou Estoque M�nimo).",
                                       "exp":  "Correto! O estoque de seguran�a visa amortecer incertezas de demanda e atrasos de entrega para n�o faltar material essencial."
                                   },
                             "C":  {
                                       "texto":  "Ponto de Ruptura Volunt�ria.",
                                       "exp":  "Incorreto. Ruptura de estoque significa a falta total do item (desabastecimento), situa��o que deve ser evitada."
                                   },
                             "D":  {
                                       "texto":  "Lote Econ�mico Fracionado.",
                                       "exp":  "Incorreto. O Lote Econ�mico de Compras (LEC) busca equilibrar custo de pedido e custo de armazenagem."
                                   },
                             "E":  {
                                       "texto":  "Invent�rio Rotativo Semestral.",
                                       "exp":  "Incorreto. Invent�rio � a contagem f�sica peri�dica de confer�ncia de materiais nas estantes."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "O Estoque de Seguran�a impede a ruptura operacional. Se ele for consumido, significa que o sistema de compras atrasou ou a demanda disparou."
    },
    {
        "id":  "esp_15",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Nova Lei de Licita��es: Dispensa por Valor",
        "enunciado":  "Nos termos do art. 75 da Lei n� 14.133/2021, a contrata��o direta que ocorre para compras e outros servi�os comuns em raz�o de pequeno valor monet�rio configura:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Inexigibilidade de licita��o.",
                                       "exp":  "Incorreto. Inexigibilidade exige inviabilidade f�tica de competi��o (fornecedor exclusivo, not�ria especializa��o)."
                                   },
                             "B":  {
                                       "texto":  "Dispensa de licita��o.",
                                       "exp":  "Correto! A contrata��o por baixo valor monet�rio � caso cl�ssico e taxativo de dispensa de licita��o (art. 75, I e II)."
                                   },
                             "C":  {
                                       "texto":  "Preg�o simplificado verbal.",
                                       "exp":  "Incorreto. N�o existe modalidade verbal no poder p�blico estadual."
                                   },
                             "D":  {
                                       "texto":  "Leil�o de emerg�ncia.",
                                       "exp":  "Incorreto. Leil�o � para venda de bens p�blicos da administra��o, n�o para compras de suprimentos."
                                   },
                             "E":  {
                                       "texto":  "Concorr�ncia restrita por credenciamento.",
                                       "exp":  "Incorreto. Credenciamento � procedimento auxiliar de contrata��o, n�o dispensa por valor."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Compras de baixo valor financeiro s�o casos expressos de DISPENSA DE LICITA��O previstos no artigo 75 da Lei n� 14.133/2021."
    },
    {
        "id":  "esp_16",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Faturamento Hospitalar: Glosas",
        "enunciado":  "No setor de processamento de contas hospitalares do SUS, a recusa de pagamento de um procedimento cobrado na AIH em decorr�ncia de erro de preenchimento, diverg�ncia de laudo ou aus�ncia de assinatura m�dica � denominada:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Empenho liquidado.",
                                       "exp":  "Incorreto. Empenho � est�gio da despesa p�blica or�ament�ria onde o Estado reserva o dinheiro para pagar."
                                   },
                             "B":  {
                                       "texto":  "Glosa hospitalar.",
                                       "exp":  "Correto! Glosa � o cancelamento, recusa ou rejei��o parcial/total da fatura faturada perante o SUS ou operadoras."
                                   },
                             "C":  {
                                       "texto":  "Rateio contratual.",
                                       "exp":  "Incorreto. Rateio � divis�o de custos operacionais entre setores ou conv�nios."
                                   },
                             "D":  {
                                       "texto":  "Estorno de cau��o.",
                                       "exp":  "Incorreto. Estorno de cau��o � a devolu��o de garantia contratual depositada por licitantes."
                                   },
                             "E":  {
                                       "texto":  "Ajuste de faturamento positivo.",
                                       "exp":  "Incorreto. A glosa � um desconto/preju�zo decorrente de inconformidade detectada na auditoria."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A glosa representa perda de faturamento para o hospital. Cabe ao Auxiliar Administrativo conferir prontu�rios e guias para zerar o �ndice de glosas."
    },
    {
        "id":  "esp_17",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Inform�tica: Microsoft Word e Formata��o",
        "enunciado":  "No Microsoft Word (em portugu�s), qual � a combina��o de teclas de atalho padr�o para aplicar o estilo \u0027Negrito\u0027 no texto selecionado de uma ata de reuni�o?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Ctrl + B",
                                       "exp":  "Incorreto. No Word em portugu�s, Ctrl + B � o atalho para SALVAR o documento (Save em ingl�s usa Ctrl + S)."
                                   },
                             "B":  {
                                       "texto":  "Ctrl + N",
                                       "exp":  "Correto! No Word BR, Ctrl + N aplica o Negrito (no Word em ingl�s seria Ctrl + B - Bold)."
                                   },
                             "C":  {
                                       "texto":  "Ctrl + I",
                                       "exp":  "Incorreto. Ctrl + I aplica o estilo It�lico."
                                   },
                             "D":  {
                                       "texto":  "Ctrl + S",
                                       "exp":  "Incorreto. No Word BR, Ctrl + S aplica o Sublinhado."
                                   },
                             "E":  {
                                       "texto":  "Ctrl + U",
                                       "exp":  "Incorreto. N�o � atalho padr�o de formata��o no Word BR (em ingl�s seria Underline)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Pegadinha cl�ssica de banca em Word Portugu�s: Ctrl + N = Negrito; Ctrl + S = Sublinhado; Ctrl + B = Salvar!"
    },
    {
        "id":  "esp_18",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Rela��es Humanas e Resolu��o de Conflitos",
        "enunciado":  "Durante um plant�o tenso, um acompanhante irritado exige atendimento imediato na recep��o. A conduta do Auxiliar Administrativo alinhada � excel�ncia em rela��es humanas �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Responder de forma r�spida, afirmando que n�o � obrigado a tolerar desrespeito de ningu�m.",
                                       "exp":  "Incorreto. Rea��o agressiva inflama o conflito e fere os princ�pios �ticos do servi�o p�blico."
                                   },
                             "B":  {
                                       "texto":  "Praticar escuta ativa com urbanidade, manter o autocontrole e explicar com clareza o protocolo de acolhimento e triagem.",
                                       "exp":  "Correto! A postura profissional emp�tica acolhe a ang�stia do cidad�o e orienta conforme os fluxos institucionais do hospital."
                                   },
                             "C":  {
                                       "texto":  "Ignorar o cidad�o e virar as costas fingindo estar ao telefone at� que a pessoa se acalme.",
                                       "exp":  "Incorreto. O desprezo ao usu�rio agrava o estresse e gera infra��o disciplinar por des�dia."
                                   },
                             "D":  {
                                       "texto":  "Chamar imediatamente a escolta policial armada sem antes ouvir a solicita��o do usu�rio.",
                                       "exp":  "Incorreto. Medida desproporcional para o in�cio de uma demanda leg�tima de informa��o."
                                   },
                             "E":  {
                                       "texto":  "Prometer que o m�dico atender� antes de todos, mesmo sem vaga, apenas para se livrar da situa��o.",
                                       "exp":  "Incorreto. Viola a impessoalidade e cria expectativa falsa que prejudicar� a equipe cl�nica."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A urbanidade, comunicabilidade e empatia s�o compet�ncias avaliadas no edital para o atendimento humanizado no SUS."
    },
    {
        "id":  "esp_19",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Arquivologia: Conserva��o e Preserva��o",
        "enunciado":  "O conjunto de medidas preventivas destinadas a desacelerar a degrada��o f�sica dos suportes documentais em papel (como controle de umidade, temperatura e higieniza��o) denomina-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Restaura��o documental compuls�ria.",
                                       "exp":  "Incorreto. A restaura��o � medida curativa posterior sobre documento j� danificado, n�o preven��o."
                                   },
                             "B":  {
                                       "texto":  "Conserva��o preventiva.",
                                       "exp":  "Correto! A conserva��o compreende a manuten��o do ambiente est�vel (luz, umidade, pragas) para evitar a deteriora��o do acervo."
                                   },
                             "C":  {
                                       "texto":  "Desinfesta��o por calor extremo.",
                                       "exp":  "Incorreto. Calor excessivo destr�i a celulose do papel e quebra as fibras do documento."
                                   },
                             "D":  {
                                       "texto":  "Expurgo arquiv�stico imediato.",
                                       "exp":  "Incorreto. Expurgo refere-se � elimina��o f�sica ou descarte de materiais inserv�veis."
                                   },
                             "E":  {
                                       "texto":  "Microfilmagem de elimina��o sum�ria.",
                                       "exp":  "Incorreto. Microfilmagem � processo de reprodu��o por imagem �tica, n�o conserva��o f�sica do suporte."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Conserva��o = Preven��o cont�nua no ambiente. Preserva��o = Estrat�gia global. Restaura��o = Reparo ap�s o estrago."
    },
    {
        "id":  "esp_20",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Reda��o Oficial: Pronomes de Tratamento",
        "enunciado":  "Ao endere�ar um of�cio ao Governador do Estado do Par�, no envelope e no endere�amento formal, o pronome de tratamento e o vocativo corretos s�o, respectivamente:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A Sua Excel�ncia o Senhor / Excelent�ssimo Senhor Governador,",
                                       "exp":  "Correto! Para chefes de Poder Executivo estadual utiliza-se \u0027A Sua Excel�ncia\u0027 no endere�amento e \u0027Excelent�ssimo Senhor + Cargo,\u0027 no vocativo."
                                   },
                             "B":  {
                                       "texto":  "A Sua Senhoria / Ilustr�ssimo Governador,",
                                       "exp":  "Incorreto. Sua Senhoria n�o � aplic�vel a chefes de Poder Executivo e Ilustr�ssimo foi abolido."
                                   },
                             "C":  {
                                       "texto":  "Ao Mui Digno Governador / Vener�vel Senhor,",
                                       "exp":  "Incorreto. Termos arcaicos e incompat�veis com a sobriedade da administra��o p�blica."
                                   },
                             "D":  {
                                       "texto":  "A Sua Magnific�ncia / Magn�fico Governador,",
                                       "exp":  "Incorreto. Magnific�ncia � exclusivo para Reitores de Universidades."
                                   },
                             "E":  {
                                       "texto":  "A Vossa Emin�ncia / Eminent�ssimo Governador,",
                                       "exp":  "Incorreto. Emin�ncia � privativo de Cardeais da Igreja Cat�lica."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "O vocativo \u0027Excelent�ssimo Senhor\u0027 � reservado aos Chefes dos Poderes Executivo, Legislativo e Judici�rio (Presidente, Governadores, Prefeitos, Presidentes de Casas Legislativas e Tribunais)."
    },
    {
        "id":  "esp_21",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Almoxarifado: Recebimento e Confer�ncia",
        "enunciado":  "Ao descarregar um caminh�o de soros fisiol�gicos no almoxarifado, o Auxiliar Administrativo deve realizar a \u0027confer�ncia quantitativa\u0027 e a \u0027confer�ncia qualitativa\u0027. Esta �ltima consiste em:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Contar apenas a quantidade de caixas recebidas e assinar o canhoto sem abrir.",
                                       "exp":  "Incorreto. Essa � apenas a confer�ncia cega preliminar de volumes."
                                   },
                             "B":  {
                                       "texto":  "Verificar a integridade das embalagens, prazos de validade, n�mero do lote e conformidade das especifica��es t�cnicas com a nota fiscal e o empenho.",
                                       "exp":  "Correto! A confer�ncia qualitativa inspeciona o estado f�sico, especifica��es t�cnicas, registros sanit�rios da Anvisa e validade dos produtos."
                                   },
                             "C":  {
                                       "texto":  "Pagar o fornecedor com cheque nominal antes de descarregar a carga.",
                                       "exp":  "Incorreto. O pagamento � ato posterior da tesouraria ap�s a liquida��o formal da despesa."
                                   },
                             "D":  {
                                       "texto":  "Enviar a carga diretamente � enfermaria sem confer�ncia pr�via.",
                                       "exp":  "Incorreto. Descumpre o controle interno e coloca em risco a seguran�a do paciente."
                                   },
                             "E":  {
                                       "texto":  "Calcular o imposto de renda da transportadora.",
                                       "exp":  "Incorreto. Fun��o alheia ao setor de recep��o e almoxarifado de insumos."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Recebimento no almoxarifado tem duas etapas essenciais: quantitativa (contagem de unidades) e qualitativa (inspe��o de qualidade, integridade e validade)."
    },
    {
        "id":  "esp_22",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Nova Lei de Licita��es: Crit�rios de Julgamento",
        "enunciado":  "Na modalidade Preg�o, prevista na Lei n� 14.133/2021, o julgamento das propostas poder� utilizar EXCLUSIVAMENTE os seguintes crit�rios:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Menor pre�o ou maior desconto.",
                                       "exp":  "Correto! O preg�o adota obrigatoriamente o crit�rio de menor pre�o ou maior desconto (art. 34 da Lei 14.133/21)."
                                   },
                             "B":  {
                                       "texto":  "Melhor t�cnica ou conte�do art�stico.",
                                       "exp":  "Incorreto. Conte�do art�stico � crit�rio da modalidade Concurso."
                                   },
                             "C":  {
                                       "texto":  "Maior retorno econ�mico ou t�cnica e pre�o combinados.",
                                       "exp":  "Incorreto. Maior retorno econ�mico aplica-se a contratos de efici�ncia em concorr�ncia."
                                   },
                             "D":  {
                                       "texto":  "Maior lance fechado presencial.",
                                       "exp":  "Incorreto. Maior lance � o crit�rio privativo da modalidade Leil�o."
                                   },
                             "E":  {
                                       "texto":  "Menor custo de deprecia��o temporal.",
                                       "exp":  "Incorreto. N�o � crit�rio aut�nomo previsto para preg�o."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "No preg�o (bens e servi�os comuns), s� se admite julgamento por MENOR PRE�O ou MAIOR DESCONTO!"
    },
    {
        "id":  "esp_23",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Prontu�rio M�dico: Guarda e Sigilo (CFM)",
        "enunciado":  "De acordo com as resolu��es do Conselho Federal de Medicina (CFM) e a legisla��o brasileira, o prontu�rio m�dico em suporte de papel deve ser mantido em arquivo pelo prazo m�nimo de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "5 (cinco) anos ap�s o �ltimo registro.",
                                       "exp":  "Incorreto. Prazo insuficiente perante as normas deontol�gicas m�dicas."
                                   },
                             "B":  {
                                       "texto":  "10 (dez) anos a contar da data de nascimento.",
                                       "exp":  "Incorreto. A contagem corre a partir do �ltimo atendimento/registro."
                                   },
                             "C":  {
                                       "texto":  "20 (vinte) anos a partir do �ltimo registro do paciente.",
                                       "exp":  "Correto! O CFM estabelece a guarda obrigat�ria do prontu�rio em papel por no m�nimo 20 anos a partir do �ltimo atendimento."
                                   },
                             "D":  {
                                       "texto":  "1 (um) ano, ap�s o qual deve ser incinerado.",
                                       "exp":  "Incorreto. A elimina��o antes do prazo legal constitui grave il�cito administrativo e �tico."
                                   },
                             "E":  {
                                       "texto":  "50 (cinquenta) anos incondicionalmente para qualquer tipo de documento.",
                                       "exp":  "Incorreto. O prazo padr�o de suporte de papel estabelecido pelo CFM � de 20 anos."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Resolu��o CFM n� 1.821/2007: Prontu�rios em papel devem ser guardados por 20 anos a partir do �ltimo registro. Se forem digitalizados sob certificado ICP-Brasil, o papel pode ser eliminado."
    },
    {
        "id":  "esp_24",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Inform�tica: Conceitos de Internet e Nuvem",
        "enunciado":  "Em rela��o ao armazenamento em nuvem (Cloud Storage) utilizado para backups de relat�rios administrativos na FHCGV, � correto afirmar que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Os arquivos ficam salvos apenas na placa-m�e do computador local onde foram digitados.",
                                       "exp":  "Incorreto. Isso seria armazenamento estritamente local (HD ou SSD)."
                                   },
                             "B":  {
                                       "texto":  "Permite acesso aos dados a partir de qualquer dispositivo conectado � internet mediante credenciais autorizadas, garantindo redund�ncia e recupera��o em desastres.",
                                       "exp":  "Correto! A nuvem oferece disponibilidade remota, seguran�a de replica��o e acessibilidade cont�nua."
                                   },
                             "C":  {
                                       "texto":  "O armazenamento em nuvem dispensa qualquer tipo de autentica��o ou login para os usu�rios externos.",
                                       "exp":  "Incorreto. Exige r�gido controle de autentica��o e permiss�es de acesso por seguran�a."
                                   },
                             "D":  {
                                       "texto":  "Funciona exclusivamente sem qualquer conex�o com a internet.",
                                       "exp":  "Incorreto. A internet � a base obrigat�ria para sincroniza��o de servi�os de cloud."
                                   },
                             "E":  {
                                       "texto":  "Impede que m�ltiplos servidores editem simultaneamente planilhas compartilhadas.",
                                       "exp":  "Incorreto. Uma das maiores vantagens da nuvem � justamente a edi��o colaborativa simult�nea."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Armazenamento em nuvem garante disponibilidade, sincroniza��o em tempo real e c�pias de seguran�a (backup offsite) vitais para hospitais."
    },
    {
        "id":  "esp_25",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Arquivologia: Opera��es de Protocolo",
        "enunciado":  "Quando um documento oficial chega ao setor de protocolo do hospital, a a��o de colocar nele um n�mero sequencial, data e carimbo identificador para formalizar o in�cio de sua tramita��o chama-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Expurgo arquiv�stico.",
                                       "exp":  "Incorreto. Expurgo � a elimina��o ou queima de pap�is prescritos."
                                   },
                             "B":  {
                                       "texto":  "Registro e Autua��o.",
                                       "exp":  "Correto! Registrar e autuar � abrir a ficha do documento, atribuir n�mero �nico e vincul�-lo ao sistema de tramita��o."
                                   },
                             "C":  {
                                       "texto":  "Restaura��o de suporte.",
                                       "exp":  "Incorreto. Restaura��o � reparo f�sico de folhas rasgadas ou atacadas por fungos."
                                   },
                             "D":  {
                                       "texto":  "Desclassifica��o sigilosa.",
                                       "exp":  "Incorreto. � a perda do grau de sigilo (secreto, reservado) ap�s decorrido o prazo legal."
                                   },
                             "E":  {
                                       "texto":  "Microfilmagem de seguran�a.",
                                       "exp":  "Incorreto. Processo fotogr�fico de reprodu��o documental."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "As atividades do Protocolo s�o: Recebimento, Registro/Autua��o, Classifica��o, Distribui��o, Tramita��o e Expedi��o."
    },
    {
        "id":  "esp_26",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Reda��o Oficial: Partes do Of�cio",
        "enunciado":  "No padr�o of�cio, o par�grafo introdut�rio que apresenta o objetivo da comunica��o deve primar por qual caracter�stica?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Extensa sauda��o pessoal agradecendo favores passados.",
                                       "exp":  "Incorreto. O manual veda agradecimentos de favores e bajula��es pessoais."
                                   },
                             "B":  {
                                       "texto":  "Objetividade e concis�o, indicando logo o motivo da manifesta��o ou o expediente de refer�ncia.",
                                       "exp":  "Correto! O primeiro par�grafo do of�cio deve ir direto ao assunto: \u0027Comunico a Vossa Senhoria...\u0027, \u0027Encaminho a Vossa Excel�ncia...\u0027."
                                   },
                             "C":  {
                                       "texto":  "Uso de cita��es liter�rias e met�foras po�ticas para enriquecer a linguagem.",
                                       "exp":  "Incorreto. Reda��o oficial n�o admite linguagem po�tica nem figuras de estilo."
                                   },
                             "D":  {
                                       "texto":  "Relato minucioso da vida profissional do redator da pe�a.",
                                       "exp":  "Incorreto. Fere o princ�pio b�sico da impessoalidade."
                                   },
                             "E":  {
                                       "texto":  "Oculta��o do assunto principal at� o �ltimo par�grafo do texto.",
                                       "exp":  "Incorreto. O assunto deve ser evidente desde a ementa e o primeiro per�odo da mensagem."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Clareza e concis�o no par�grafo de abertura evitam que o leitor da administra��o perca tempo tentando descobrir o prop�sito do documento."
    },
    {
        "id":  "esp_27",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Almoxarifado: Invent�rio F�sico",
        "enunciado":  "O levantamento peri�dico e minucioso realizado para comparar a quantidade f�sica de materiais existentes nas prateleiras com as quantidades registradas no sistema informatizado chama-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Ponto de pedido autom�tico.",
                                       "exp":  "Incorreto. Ponto de pedido � o n�vel de estoque que dispara uma nova compra."
                                   },
                             "B":  {
                                       "texto":  "Invent�rio f�sico (ou levantamento de estoque).",
                                       "exp":  "Correto! O invent�rio f�sico apura discrep�ncias, desvios, quebras ou produtos vencidos nas prateleiras."
                                   },
                             "C":  {
                                       "texto":  "Estoque em tr�nsito.",
                                       "exp":  "Incorreto. Estoque em tr�nsito � o material j� faturado que est� a caminho no caminh�o do fornecedor."
                                   },
                             "D":  {
                                       "texto":  "Margem de seguran�a cont�bil.",
                                       "exp":  "Incorreto. Termo de finan�as corporativas, n�o opera��o f�sica de dep�sito."
                                   },
                             "E":  {
                                       "texto":  "Giro de ativo imobilizado.",
                                       "exp":  "Incorreto. Indicador financeiro de retorno de ativos fixos."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Invent�rios f�sicos podem ser rotativos (feitos por amostragem di�ria/semanal) ou anuais/peri�dicos (gerais de balan�o)."
    },
    {
        "id":  "esp_28",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Nova Lei de Licita��es: Inexigibilidade de Not�ria Especializa��o",
        "enunciado":  "A contrata��o direta sem licita��o de renomado jurista para emitir parecer t�cnico singular em defesa judicial de alta complexidade da FHCGV fundamenta-se em:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Inexigibilidade de licita��o, por not�ria especializa��o de profissional de natureza singular.",
                                       "exp":  "Correto! O art. 74, III da Lei 14.133/21 autoriza a inexigibilidade para servi�os t�cnicos especializados de natureza predominantemente intelectual com profissional de not�ria especializa��o."
                                   },
                             "B":  {
                                       "texto":  "Dispensa de licita��o por calamidade financeira.",
                                       "exp":  "Incorreto. Calamidade tem outros requisitos e n�o se confunde com contrata��o de parecerista not�rio."
                                   },
                             "C":  {
                                       "texto":  "Preg�o obrigat�rio com menor pre�o por hora trabalhada.",
                                       "exp":  "Incorreto. O preg�o � vedado para servi�os t�cnicos especializados predominantemente intelectuais (art. 29, par�grafo �nico)."
                                   },
                             "D":  {
                                       "texto":  "Concorr�ncia com sorteio p�blico entre os advogados inscritos.",
                                       "exp":  "Incorreto. O direito administrativo veda sorteio como crit�rio de sele��o t�cnica."
                                   },
                             "E":  {
                                       "texto":  "Contrato verbal t�cito de cavalheiros.",
                                       "exp":  "Incorreto. Contratos verbais s�o nulos de pleno direito no servi�o p�blico, salvo pequenas compras at� limites �nfimos de pronto pagamento."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Servi�o t�cnico especializado + Natureza singular + Profissional ou empresa de not�ria especializa��o = Inexigibilidade (Art. 74, III da Lei 14.133/21)."
    },
    {
        "id":  "esp_29",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Faturamento Hospitalar: APAC",
        "enunciado":  "Pacientes portadores de insufici�ncia renal cr�nica atendidos na unidade de hemodi�lise do Hospital Gaspar Vianna realizam sess�es semanais em regime ambulatorial cont�nuo. As cobran�as desses procedimentos ao SUS exigem:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "AIH de interna��o cir�rgica de urg�ncia.",
                                       "exp":  "Incorreto. AIH � para pacientes que ocupam leito de interna��o hospitalar."
                                   },
                             "B":  {
                                       "texto":  "APAC (Autoriza��o de Procedimento de Alta Complexidade).",
                                       "exp":  "Correto! A hemodi�lise ambulatorial � procedimento cr�nico e de alta complexidade faturado via APAC."
                                   },
                             "C":  {
                                       "texto":  "Recibo de despesa extraordin�ria em dinheiro.",
                                       "exp":  "Incorreto. � expressamente vedada qualquer cobran�a pecuni�ria direta do paciente no �mbito do SUS."
                                   },
                             "D":  {
                                       "texto":  "Boleto banc�rio de ressarcimento privado.",
                                       "exp":  "Incorreto. O atendimento � 100% p�blico e gratuito ao cidad�o financiado pelo fundo de sa�de."
                                   },
                             "E":  {
                                       "texto":  "Ficha de protocolo sem registro no Datasus.",
                                       "exp":  "Incorreto. Todos os procedimentos do SUS exigem alimenta��o formal nos sistemas oficiais (SIA/SUS)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Tratamentos ambulatoriais de alto custo e alta complexidade (hemodi�lise, quimioterapia, pr�teses ambulat�rias) s�o faturados via APAC no SIA/SUS."
    },
    {
        "id":  "esp_30",
        "disciplina":  "especificos",
        "materia_nome":  "Conhecimentos Espec�ficos",
        "topico":  "Inform�tica: Planilhas e Gr�ficos",
        "enunciado":  "Para demonstrar visualmente em uma apresenta��o da diretoria da FHCGV a evolu��o mensal das despesas de consumo ao longo dos 12 meses do ano anterior, o tipo de gr�fico mais adequado e recomendado no Excel � o:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Gr�fico de Linhas (ou Linhas com Marcadores).",
                                       "exp":  "Correto! O gr�fico de linhas � o modelo ideal para mostrar evolu��o cont�nua de vari�veis ao longo do tempo (s�ries temporais)."
                                   },
                             "B":  {
                                       "texto":  "Gr�fico de Pizza 3D com 50 fatias.",
                                       "exp":  "Incorreto. Gr�fico de pizza � p�ssimo para s�ries temporais e fica ileg�vel com mais de 5 a 7 categorias."
                                   },
                             "C":  {
                                       "texto":  "Gr�fico de Dispers�o sem eixos num�ricos.",
                                       "exp":  "Incorreto. Serve para correla��o entre vari�veis cient�ficas quantitativas, n�o para cronologia de despesas."
                                   },
                             "D":  {
                                       "texto":  "Gr�fico de Radar polar.",
                                       "exp":  "Incorreto. Usado para comparar compet�ncias multivariadas (ex: perfis de RH), n�o fluxo temporal financeiro."
                                   },
                             "E":  {
                                       "texto":  "Gr�fico de Funil decrescente.",
                                       "exp":  "Incorreto. Usado para taxas de convers�o de etapas sucessivas (funil de vendas/processo)."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Tempo e evolu��o mensal/anual = Gr�fico de Linha ou Gr�fico de Colunas. Partes de um todo (percentuais) = Gr�fico de Pizza ou Rosca."
    },
    {
        "id":  "sus_01",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Constitui��o Federal: Artigo 196",
        "enunciado":  "Nos exatos termos do artigo 196 da Constitui��o Federal de 1988, a sa�de � definida formalmente como:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Direito exclusivo dos cidad�os contribuintes da seguridade social.",
                                       "exp":  "Incorreto. Esse era o modelo excludente pr�-1988 (INAMPS). A CF tornou a sa�de universal."
                                   },
                             "B":  {
                                       "texto":  "Direito de todos e dever do Estado, garantido mediante pol�ticas sociais e econ�micas.",
                                       "exp":  "Correto! Texto literal do caput do art. 196 da Constitui��o Federal de 1988."
                                   },
                             "C":  {
                                       "texto":  "Servi�o prioritariamente privado, subsidiado em car�ter excepcional pelo poder p�blico.",
                                       "exp":  "Incorreto. O Estado tem o dever prec�puo de prestar e garantir as a��es de sa�de p�blica."
                                   },
                             "D":  {
                                       "texto":  "Benef�cio concedido aos indiv�duos em situa��o de extrema miserabilidade comprovada.",
                                       "exp":  "Incorreto. N�o se exige prova de car�ncia financeira para ser atendido no SUS."
                                   },
                             "E":  {
                                       "texto":  "Dever da fam�lia, cabendo ao Estado agir apenas na aus�ncia de respons�veis civis.",
                                       "exp":  "Incorreto. A responsabilidade do Estado � prim�ria, solid�ria e cogente."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Art. 196 da CF/88: \u0027A sa�de � direito de todos e dever do Estado, garantido mediante pol�ticas sociais e econ�micas que visem � redu��o do risco de doen�a e de outros agravos e ao acesso universal e igualit�rio �s a��es e servi�os para sua promo��o, prote��o e recupera��o.\u0027"
    },
    {
        "id":  "sus_02",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Constitui��o Federal: Artigo 198 (Diretrizes)",
        "enunciado":  "O artigo 198 da Constitui��o Federal estabelece as diretrizes que organizam o Sistema �nico de Sa�de. Assinale a alternativa que traz uma dessas diretrizes constitucionais expressas:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Centraliza��o das decis�es na autoridade federal com comando �nico no Minist�rio da Sa�de.",
                                       "exp":  "Incorreto. A diretriz � exatamente a Descentraliza��o, com dire��o �nica em cada esfera de governo."
                                   },
                             "B":  {
                                       "texto":  "Atendimento integral, com prioridade para as atividades preventivas, sem preju�zo dos servi�os assistenciais.",
                                       "exp":  "Correto! Diretriz expressa no art. 198, inciso II da Constitui��o Federal."
                                   },
                             "C":  {
                                       "texto":  "Prioridade absoluta de investimentos para a rede privada lucrativa em detrimento das unidades estatais.",
                                       "exp":  "Incorreto. A iniciativa privada s� participa de forma complementar, com prefer�ncia �s filantr�picas."
                                   },
                             "D":  {
                                       "texto":  "Exclus�o dos usu�rios na fiscaliza��o dos recursos da sa�de para evitar politiza��o.",
                                       "exp":  "Incorreto. A participa��o da comunidade � diretriz expressa no inciso III do art. 198."
                                   },
                             "E":  {
                                       "texto":  "Cobran�a de taxas de interna��o para procedimentos de alta complexidade em cardiologia.",
                                       "exp":  "Incorreto. O SUS � universal e gratuito, sendo inconstitucional qualquer cobran�a ao usu�rio."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "As 3 diretrizes do art. 198 da CF s�o: 1) Descentraliza��o, com dire��o �nica em cada esfera; 2) Atendimento integral, priorizando a preven��o sem descuidar da assist�ncia; 3) Participa��o da comunidade."
    },
    {
        "id":  "sus_03",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Constitui��o Federal: Artigo 199 (Iniciativa Privada)",
        "enunciado":  "Sobre a atua��o de institui��es privadas no Sistema �nico de Sa�de, conforme o art. 199 da CF/88, � expressamente CORRETO afirmar:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A iniciativa privada atua em regime de exclusividade na aten��o terci�ria de alta complexidade.",
                                       "exp":  "Incorreto. A rede p�blica � a base; o privado atua em car�ter meramente complementar."
                                   },
                             "B":  {
                                       "texto":  "As institui��es privadas poder�o participar de forma complementar do SUS, mediante contrato de direito p�blico ou conv�nio, tendo prefer�ncia as entidades filantr�picas e as sem fins lucrativos.",
                                       "exp":  "Correto! Texto literal do art. 199, � 1� da Constitui��o Federal de 1988."
                                   },
                             "C":  {
                                       "texto":  "� permitido destinar aux�lios e subven��es or�ament�rias p�blicas a empresas privadas com fins lucrativos.",
                                       "exp":  "Incorreto. O � 2� do art. 199 veda expressamente aux�lios e subven��es a institui��es com fins lucrativos."
                                   },
                             "D":  {
                                       "texto":  "A comercializa��o de sangue e seus derivados � livre para livre com�rcio no mercado interno.",
                                       "exp":  "Incorreto. O � 4� do art. 199 pro�be terminantemente todo tipo de comercializa��o de �rg�os, tecidos e subst�ncias humanas."
                                   },
                             "E":  {
                                       "texto":  "O capital estrangeiro tem permiss�o ampla e irrestrita sem depender de autoriza��o em lei espec�fica.",
                                       "exp":  "Incorreto. A participa��o de capital estrangeiro � vedada, salvo nos casos expressamente previstos em lei."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A regra de ouro da iniciativa privada no SUS: car�ter complementar + contrato/conv�nio p�blico + prefer�ncia para entidades filantr�picas e sem fins lucrativos."
    },
    {
        "id":  "sus_04",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Lei 8.080/1990: Princ�pios Doutrin�rios",
        "enunciado":  "O princ�pio que orienta o SUS a tratar desigualmente os desiguais, direcionando mais recursos e aten��o �s pessoas em situa��o de maior vulnerabilidade e desvantagem social, �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Universalidade plena.",
                                       "exp":  "Incorreto. Universalidade significa acesso garantido para todas as pessoas sem discrimina��o."
                                   },
                             "B":  {
                                       "texto":  "Equidade.",
                                       "exp":  "Correto! Equidade � a justi�a social distributiva: reconhecer as diferen�as de cada popula��o e dar mais apoio a quem mais precisa."
                                   },
                             "C":  {
                                       "texto":  "Descentraliza��o administrativa.",
                                       "exp":  "Incorreto. Princ�pio organizativo referente � distribui��o de poder e compet�ncias entre entes federados."
                                   },
                             "D":  {
                                       "texto":  "Hierarquiza��o territorial.",
                                       "exp":  "Incorreto. Organiza��o dos servi�os em n�veis crescentes de complexidade t�cnica."
                                   },
                             "E":  {
                                       "texto":  "Integralidade seletiva.",
                                       "exp":  "Incorreto. A integralidade n�o � seletiva, � completa em todos os n�veis de aten��o � sa�de."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Igualdade formal trata todos do mesmo jeito. A Equidade entende as desigualdades e oferece suporte diferenciado aos mais vulner�veis."
    },
    {
        "id":  "sus_05",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Lei 8.080/1990: Campo de Atua��o do SUS",
        "enunciado":  "De acordo com o art. 6� da Lei Org�nica da Sa�de (Lei n� 8.080/1990), est�o inclu�das no campo de atua��o do Sistema �nico de Sa�de, EXCETO:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A execu��o de a��es de vigil�ncia sanit�ria e de vigil�ncia epidemiol�gica.",
                                       "exp":  "Incorreto. Est�o expressamente inclu�das no art. 6�, inciso I da lei."
                                   },
                             "B":  {
                                       "texto":  "A execu��o de a��es de sa�de do trabalhador.",
                                       "exp":  "Incorreto. Faz parte expressa do campo de atua��o do SUS no art. 6�."
                                   },
                             "C":  {
                                       "texto":  "A fiscaliza��o e inspe��o de alimentos, �gua e bebidas para consumo humano.",
                                       "exp":  "Incorreto. Compete ao SUS conforme o art. 6�, inciso VI."
                                   },
                             "D":  {
                                       "texto":  "A fixa��o discricion�ria dos pre�os de mensalidades de planos de sa�de privados de operadoras multinacionais.",
                                       "exp":  "Correto! Esta n�o � fun��o direta do SUS no art. 6� da Lei 8.080/90, pertencendo � regula��o setorial de ag�ncia pr�pria (ANS/Lei 9.656)."
                                   },
                             "E":  {
                                       "texto":  "A formula��o da pol�tica de medicamentos, equipamentos, imunobiol�gicos e outros insumos de interesse para a sa�de.",
                                       "exp":  "Incorreto. Expressamente inclu�do no art. 6�, inciso V da lei."
                                   }
                         },
        "correta":  "D",
        "comentarioGeral":  "O art. 6� detalha o amplo campo de atua��o do SUS: vigil�ncia sanit�ria, epidemiol�gica, sa�de do trabalhador, assist�ncia terap�utica integral, saneamento e sangue."
    },
    {
        "id":  "sus_06",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Lei 8.142/1990: Controle Social e Confer�ncias",
        "enunciado":  "A Confer�ncia de Sa�de, como inst�ncia colegiada de participa��o popular regulada pela Lei Federal n� 8.142/1990, re�ne-se ordinariamente com qual periodicidade?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Anualmente, sempre no in�cio do exerc�cio or�ament�rio.",
                                       "exp":  "Incorreto. Reuni�es anuais s�o rotina de outros �rg�os; a confer�ncia � quadrienal."
                                   },
                             "B":  {
                                       "texto":  "A cada 2 (dois) anos, convocada exclusivamente pelo Minist�rio P�blico.",
                                       "exp":  "Incorreto. O prazo legal n�o � bienal e a convoca��o prim�ria cabe ao Poder Executivo."
                                   },
                             "C":  {
                                       "texto":  "A cada 4 (quatro) anos, para avaliar a situa��o de sa�de e propor diretrizes para as pol�ticas p�blicas.",
                                       "exp":  "Correto! O art. 1�, � 1� da Lei 8.142/90 fixa reuni�es a cada 4 anos com representa��o dos v�rios segmentos sociais."
                                   },
                             "D":  {
                                       "texto":  "A cada 5 (cinco) anos, coincidindo com o censo do IBGE.",
                                       "exp":  "Incorreto. O ciclo da Confer�ncia de Sa�de � rigorosamente a cada 4 anos."
                                   },
                             "E":  {
                                       "texto":  "Sem periodicidade fixa, reunindo-se unicamente em casos de pandemia ou calamidade p�blica.",
                                       "exp":  "Incorreto. A confer�ncia tem car�ter ordin�rio peri�dico e obrigat�rio."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Confer�ncia de Sa�de: a cada 4 anos (avalia e prop�e diretrizes). Conselho de Sa�de: permanente e deliberativo (fiscaliza e controla a execu��o cont�nua, inclusive gastos!)."
    },
    {
        "id":  "sus_07",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Lei 8.142/1990: Composi��o Parit�ria dos Conselhos",
        "enunciado":  "Nos Conselhos de Sa�de em �mbito municipal, estadual e nacional, a representa��o dos Usu�rios do SUS deve corresponder a qual percentual do total de membros titulares?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "25% (um quarto dos assentos).",
                                       "exp":  "Incorreto. 25% � a cota destinada aos profissionais de sa�de, e outros 25% aos gestores e prestadores."
                                   },
                             "B":  {
                                       "texto":  "50% (metade dos membros, assegurando a paridade com todos os demais segmentos somados).",
                                       "exp":  "Correto! O art. 1�, � 2� da Lei 8.142 e a Resolu��o CNS n� 453/12 exigem paridade: 50% s�o usu�rios!"
                                   },
                             "C":  {
                                       "texto":  "30% (percentual m�nimo id�ntico �s cotas p�blicas).",
                                       "exp":  "Incorreto. O percentual legal do controle social no SUS � expressamente 50%."
                                   },
                             "D":  {
                                       "texto":  "100% de cidad�os leigos sem presen�a de gestores de governo.",
                                       "exp":  "Incorreto. O conselho � tripartite e re�ne usu�rios, trabalhadores e gestores."
                                   },
                             "E":  {
                                       "texto":  "70% de servidores p�blicos e 30% de pacientes.",
                                       "exp":  "Incorreto. Os usu�rios det�m a maioria parit�ria de exatamente 50% dos assentos."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Composi��o Parit�ria dos Conselhos de Sa�de: 50% Usu�rios; 25% Trabalhadores da Sa�de; 25% Gestores Governamentais e Prestadores de Servi�o conveniados."
    },
    {
        "id":  "sus_08",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Lei 8.142/1990: Repasse de Recursos",
        "enunciado":  "Para receberem os recursos regulares e autom�ticos (fundo a fundo) do Minist�rio da Sa�de para o custeio dos servi�os, os Estados e Munic�pios devem contar obrigatoriamente com:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Conselho de Sa�de, Fundo de Sa�de e Plano de Sa�de aprovado.",
                                       "exp":  "Correto! O art. 4� da Lei 8.142/90 exige esses instrumentos essenciais para o repasse fundo a fundo."
                                   },
                             "B":  {
                                       "texto":  "Super�vit financeiro prim�rio comprovado no ano anterior.",
                                       "exp":  "Incorreto. O repasse da sa�de n�o depende de super�vit financeiro fiscal."
                                   },
                             "C":  {
                                       "texto":  "Hospital terci�rio com cirurgia card�aca instalado no pr�prio territ�rio.",
                                       "exp":  "Incorreto. A grande maioria dos munic�pios conta apenas com aten��o b�sica."
                                   },
                             "D":  {
                                       "texto":  "Assinatura de conv�nio exclusivo com bancos particulares internacionais.",
                                       "exp":  "Incorreto. Os fundos de sa�de operam em contas p�blicas oficiais."
                                   },
                             "E":  {
                                       "texto":  "Terceiriza��o integral da rede b�sica para cooperativas m�dicas privadas.",
                                       "exp":  "Incorreto. O modelo priorit�rio do SUS � de gest�o e execu��o p�blicas."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Requisitos do Art. 4� da Lei 8.142: 1) Fundo de Sa�de; 2) Conselho de Sa�de; 3) Plano de Sa�de; 4) Relat�rios de gest�o; 5) Contrapartida de recursos; 6) Comiss�o de plano de carreira."
    },
    {
        "id":  "sus_09",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Decreto 7.508/2011: Regi�o de Sa�de",
        "enunciado":  "Nos termos do Decreto Federal n� 7.508/2011, para ser institu�da formalmente, a Regi�o de Sa�de deve conter, no m�nimo, a��es e servi�os de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Aten��o prim�ria, urg�ncia e emerg�ncia, aten��o psicossocial, aten��o ambulatorial especializada e hospitalar, e vigil�ncia em sa�de.",
                                       "exp":  "Correto! O art. 5� do Decreto 7.508/11 lista cumulativamente esses 5 servi�os m�nimos obrigat�rios."
                                   },
                             "B":  {
                                       "texto":  "Cirurgia rob�tica e transplantes de m�ltiplos �rg�os em cada munic�pio lim�trofe.",
                                       "exp":  "Incorreto. A alta complexidade especializada distribui-se em centros de refer�ncia regionais."
                                   },
                             "C":  {
                                       "texto":  "Apenas pronto-socorro e farm�cia b�sica de manipula��o.",
                                       "exp":  "Incorreto. � exigida uma rede completa integrando aten��o prim�ria, psicossocial e hospitalar."
                                   },
                             "D":  {
                                       "texto":  "Laborat�rios particulares de gen�tica forense e per�cia criminal.",
                                       "exp":  "Incorreto. N�o comp�em os servi�os m�nimos de sa�de regional p�blica."
                                   },
                             "E":  {
                                       "texto":  "Hospital militar de fronteira e leitos de isolamento biol�gico n�vel 4.",
                                       "exp":  "Incorreto. Requisitos sem correla��o com a organiza��o territorial padr�o do SUS."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Os 5 servi�os m�nimos de uma Regi�o de Sa�de (Art. 5� Dec. 7.508): I - aten��o prim�ria; II - urg�ncia/emerg�ncia; III - aten��o psicossocial; IV - aten��o ambulatorial especializada e hospitalar; V - vigil�ncia em sa�de."
    },
    {
        "id":  "sus_10",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Decreto 7.508/2011: RENAME e Acesso a Medicamentos",
        "enunciado":  "A Rela��o Nacional de Medicamentos Essenciais (RENAME), institu�da no Decreto n� 7.508/2011, tem por finalidade prec�pua:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Proibir a prescri��o de rem�dios gen�ricos pelos m�dicos dos hospitais estaduais.",
                                       "exp":  "Incorreto. O SUS prioriza expressamente os medicamentos gen�ricos por economicidade."
                                   },
                             "B":  {
                                       "texto":  "Compreender a sele��o de medicamentos e produtos indicados para atender aos agravos mais prevalentes na popula��o, orientando a dispensa��o p�blica no SUS.",
                                       "exp":  "Correto! A RENAME padroniza o elenco de f�rmacos garantidos pelo sistema com base na evid�ncia cl�nica e epidemiologia."
                                   },
                             "C":  {
                                       "texto":  "Determinar os pre�os m�ximos de venda de medicamentos em farm�cias comerciais privadas.",
                                       "exp":  "Incorreto. A regula��o de pre�os comerciais compete � CMED (C�mara de Medicamentos da Anvisa)."
                                   },
                             "D":  {
                                       "texto":  "Listar apenas os rem�dios importados de uso experimental sem registro na Anvisa.",
                                       "exp":  "Incorreto. Medicamentos sem registro na Anvisa s�o de regra vedados de incorpora��o ordin�ria no SUS."
                                   },
                             "E":  {
                                       "texto":  "Criar monop�lio de produ��o de vacinas exclusivo para laborat�rios estrangeiros.",
                                       "exp":  "Incorreto. O SUS estimula o complexo econ�mico-industrial nacional de sa�de (Fiocruz, Butantan)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "RENAME = Medicamentos essenciais. RENASES = A��es e servi�os ofertados pelo SUS. Ambas s�o atualizadas periodicamente pelo Minist�rio da Sa�de."
    },
    {
        "id":  "sus_11",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Decreto 7.508/2011: COAP",
        "enunciado":  "O Contrato Organizativo da A��o P�blica da Sa�de (COAP) � definido pelo Decreto n� 7.508/2011 como um instrumento de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Venda de patrim�nio imobili�rio de hospitais p�blicos para investidores imobili�rios.",
                                       "exp":  "Incorreto. O COAP trata de pactua��o cooperativa do SUS, n�o de aliena��o de patrim�nio."
                                   },
                             "B":  {
                                       "texto":  "Acordo de colabora��o firmado entre entes federativos para organizar e integrar as a��es e servi�os na Regi�o de Sa�de, definindo responsabilidades, indicadores e metas.",
                                       "exp":  "Correto! Texto conceitual do art. 2�, inciso II e arts. 33 a 41 do Decreto 7.508/11."
                                   },
                             "C":  {
                                       "texto":  "Cobran�a extrajudicial de d�vidas ativas de usu�rios inadimplentes com o fundo de sa�de.",
                                       "exp":  "Incorreto. O SUS n�o cobra mensalidades dos cidad�os."
                                   },
                             "D":  {
                                       "texto":  "Contrata��o direta sem licita��o de planos de sa�de para os servidores estatut�rios.",
                                       "exp":  "Incorreto. N�o tem rela��o com planos privados de servidores."
                                   },
                             "E":  {
                                       "texto":  "Extin��o sum�ria dos Conselhos Municipais de Sa�de que apresentarem parecer desfavor�vel.",
                                       "exp":  "Incorreto. Os conselhos participam da fiscaliza��o do cumprimento das metas do COAP."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "O COAP firma o compromisso solid�rio entre Munic�pios, Estado e Uni�o em uma mesma Regi�o de Sa�de para ningu�m \u0027jogar a culpa no outro\u0027."
    },
    {
        "id":  "sus_12",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Pol�tica Nacional de Aten��o B�sica (PNAB)",
        "enunciado":  "De acordo com a Portaria de Consolida��o n� 2/2017 (Anexo XXII - PNAB), a Aten��o B�sica (ou Aten��o Prim�ria) � caracterizada como:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A porta de entrada preferencial e o centro ordenador das Redes de Aten��o � Sa�de (RAS).",
                                       "exp":  "Correto! A Aten��o B�sica � a principal porta de entrada e a coordenadora do cuidado do usu�rio na rede."
                                   },
                             "B":  {
                                       "texto":  "Um n�vel secund�rio de atendimento ao qual o cidad�o s� tem acesso ap�s passar pela UTI.",
                                       "exp":  "Incorreto. A aten��o prim�ria � a base do sistema, anterior � m�dia e alta complexidade hospitalar."
                                   },
                             "C":  {
                                       "texto":  "Servi�o exclusivo para realiza��o de bi�psias e cirurgias card�acas de t�rax aberto.",
                                       "exp":  "Incorreto. Esses procedimentos pertencem � alta complexidade terci�ria."
                                   },
                             "D":  {
                                       "texto":  "Unidade de interna��o para pacientes terminais sem possibilidade de cura.",
                                       "exp":  "Incorreto. A aten��o b�sica atua na promo��o, preven��o, diagn�stico precoce e tratamento de agravos comuns."
                                   },
                             "E":  {
                                       "texto":  "Setor administrativo central localizado exclusivamente em Bras�lia.",
                                       "exp":  "Incorreto. A aten��o b�sica atua descentralizada nos bairros e comunidades de todo o Brasil."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Aten��o B�sica (UBS/ESF): Porta de entrada preferencial, ordenadora da rede e coordenadora do cuidado do cidad�o no SUS."
    },
    {
        "id":  "sus_13",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Estrat�gia Sa�de da Fam�lia (ESF)",
        "enunciado":  "No modelo da Aten��o B�sica preconizado pelo Minist�rio da Sa�de, a Estrat�gia Sa�de da Fam�lia (ESF) � considerada:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Uma medida provis�ria voltada unicamente para a distribui��o de leite em p� nas periferias.",
                                       "exp":  "Incorreto. � a estrat�gia priorit�ria e estruturante para expans�o e consolida��o da aten��o b�sica."
                                   },
                             "B":  {
                                       "texto":  "A estrat�gia priorit�ria para a expans�o e consolida��o da Aten��o B�sica no Brasil, atuando com equipe multiprofissional sobre um territ�rio adscrito.",
                                       "exp":  "Correto! A ESF atua com m�dico, enfermeiro, t�cnicos e ACS vinculados a fam�lias e territ�rios definidos."
                                   },
                             "C":  {
                                       "texto":  "Um plano de previd�ncia complementar fechada restrito aos profissionais de enfermagem.",
                                       "exp":  "Incorreto. N�o � plano de previd�ncia, � pol�tica p�blica de aten��o � sa�de."
                                   },
                             "D":  {
                                       "texto":  "Um servi�o pago mediante coparticipa��o de consultas particulares domiciliares.",
                                       "exp":  "Incorreto. O atendimento da equipe de Sa�de da Fam�lia � inteiramente gratuito."
                                   },
                             "E":  {
                                       "texto":  "Programa tempor�rio extinto e substitu�do por consultas virtuais n�o presenciais.",
                                       "exp":  "Incorreto. A ESF � modelo consagrado e permanente de sa�de coletiva no Brasil."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A equipe de Sa�de da Fam�lia (eSF) cria v�nculo de longo prazo com a comunidade, conhecendo o hist�rico de sa�de de cada fam�lia do territ�rio."
    },
    {
        "id":  "sus_14",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Agentes Comunit�rios de Sa�de (PACS/ACS)",
        "enunciado":  "O Agente Comunit�rio de Sa�de (ACS) desempenha papel estrat�gico na integra��o entre a comunidade e a equipe de sa�de por meio de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Realiza��o de cirurgias ambulatoriais e prescri��o de psicotr�picos sob supervis�o farmac�utica.",
                                       "exp":  "Incorreto. O ACS n�o prescreve medicamentos nem realiza procedimentos invasivos privativos de m�dicos."
                                   },
                             "B":  {
                                       "texto":  "Visitas domiciliares peri�dicas, cadastramento familiar, busca ativa de faltosos a vacinas e identifica��o de riscos no territ�rio.",
                                       "exp":  "Correto! O ACS � a ponte comunit�ria fundamental, mapeando as condi��es de vida e sa�de dos moradores."
                                   },
                             "C":  {
                                       "texto":  "Fiscaliza��o tribut�ria de estabelecimentos comerciais do bairro para recolhimento de impostos.",
                                       "exp":  "Incorreto. Fun��o exclusiva de fiscais de tributos da fazenda p�blica."
                                   },
                             "D":  {
                                       "texto":  "Seguran�a armada das instala��es f�sicas da Unidade B�sica de Sa�de.",
                                       "exp":  "Incorreto. O agente n�o atua em vigil�ncia patrimonial."
                                   },
                             "E":  {
                                       "texto":  "Auditoria cont�bil dos contratos de compras do hospital de cl�nicas.",
                                       "exp":  "Incorreto. Atribui��o de �rg�os de controle interno e auditores do SUS."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "O ACS deve residir na pr�pria comunidade em que atua, permitindo conhecimento �ntimo da realidade social e das necessidades da popula��o local."
    },
    {
        "id":  "sus_15",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Vigil�ncia em Sa�de: Vigil�ncia Sanit�ria",
        "enunciado":  "A Lei n� 8.080/1990 (art. 6�, � 1�) define a Vigil�ncia Sanit�ria como o conjunto de a��es capaz de eliminar, diminuir ou prevenir riscos � sa�de e de intervir nos problemas sanit�rios decorrentes do meio ambiente, da produ��o e circula��o de bens e da presta��o de servi�os. S�o objetos t�picos da vigil�ncia sanit�ria:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Controle de qualidade da �gua pot�vel, fiscaliza��o de medicamentos, alimentos comercializados e higiene de cl�nicas hospitalares.",
                                       "exp":  "Correto! A vigil�ncia sanit�ria inspeciona produtos, insumos, servi�os e ambientes com impacto na sa�de humana."
                                   },
                             "B":  {
                                       "texto":  "Julgamento criminal de homic�dios culposos ocorridos no tr�nsito urbano.",
                                       "exp":  "Incorreto. Compet�ncia exclusiva do Poder Judici�rio e da Pol�cia Civil."
                                   },
                             "C":  {
                                       "texto":  "Investiga��o militar de espionagem cibern�tica internacional.",
                                       "exp":  "Incorreto. Compet�ncia de intelig�ncia de estado (ABIN/For�as Armadas)."
                                   },
                             "D":  {
                                       "texto":  "Fixa��o das taxas de juros do Banco Central do Brasil.",
                                       "exp":  "Incorreto. Atribui��o do Comit� de Pol�tica Monet�ria (COPOM)."
                                   },
                             "E":  {
                                       "texto":  "Controle de frequ�ncia de alunos em escolas prim�rias do munic�pio.",
                                       "exp":  "Incorreto. Compet�ncia da �rea de educa��o escolar."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Vigil�ncia Sanit�ria (VISA): atua sobre produtos (alimentos, cosm�ticos, medicamentos), servi�os (hospitais, consult�rios, sal�es) e ambientes (�gua, res�duos)."
    },
    {
        "id":  "sus_16",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Vigil�ncia Epidemiol�gica",
        "enunciado":  "A Vigil�ncia Epidemiol�gica � definida na Lei Org�nica da Sa�de como um conjunto de a��es que proporciona o conhecimento, a detec��o ou preven��o de qualquer mudan�a nos fatores determinantes e condicionantes de sa�de individual ou coletiva. Sua principal finalidade �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Recomendar e adotar as medidas de preven��o e controle das doen�as ou agravos transmiss�veis e cr�nicos.",
                                       "exp":  "Correto! Texto literal do art. 6�, � 2� da Lei 8.080/90. Monitora surtos, epidemias, casos de dengue, tuberculose, etc."
                                   },
                             "B":  {
                                       "texto":  "Cobrar multas de tr�nsito dos motoristas que trafegam em faixas exclusivas.",
                                       "exp":  "Incorreto. Fun��o de �rg�os de tr�nsito como Detran/Semob."
                                   },
                             "C":  {
                                       "texto":  "Produzir laudos de per�cia cont�bil para fal�ncia de ind�strias farmac�uticas.",
                                       "exp":  "Incorreto. Compet�ncia de peritos da justi�a do trabalho ou fal�ncias."
                                   },
                             "D":  {
                                       "texto":  "Vender dados cadastrais de pacientes para campanhas de marketing publicit�rio.",
                                       "exp":  "Incorreto. Conduta il�cita vedada pela LGPD e pelos princ�pios do SUS."
                                   },
                             "E":  {
                                       "texto":  "Exigir pagamento antecipado de vacinas obrigat�rias em postos de sa�de.",
                                       "exp":  "Incorreto. As vacinas do Programa Nacional de Imuniza��es (PNI) s�o 100% gratuitas."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "A vigil�ncia epidemiol�gica analisa dados estat�sticos e notifica��es compuls�rias para agir rapidamente no bloqueio de epidemias e surtos."
    },
    {
        "id":  "sus_17",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Compet�ncias da Dire��o Estadual do SUS",
        "enunciado":  "Nos termos do art. 17 da Lei n� 8.080/1990, compete � dire��o estadual do Sistema �nico de Sa�de (SESPA no Estado do Par�):",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Promover a descentraliza��o para os Munic�pios dos servi�os e das a��es de sa�de, bem como coordenar e executar em car�ter suplementar as a��es de sa�de.",
                                       "exp":  "Correto! O Estado apoia os munic�pios t�cnica e financeiramente e executa servi�os de refer�ncia regional/alta complexidade (como o Hospital Gaspar Vianna)."
                                   },
                             "B":  {
                                       "texto":  "Executar com exclusividade toda a vacina��o de rotina sem participa��o dos munic�pios.",
                                       "exp":  "Incorreto. A execu��o direta da aten��o b�sica � fun��o primordial dos Munic�pios (art. 18)."
                                   },
                             "C":  {
                                       "texto":  "Definir as fronteiras geopol�ticas internacionais da Amaz�nia Legal.",
                                       "exp":  "Incorreto. Compet�ncia do Governo Federal e do Minist�rio das Rela��es Exteriores."
                                   },
                             "D":  {
                                       "texto":  "Nomear os secret�rios municipais de sa�de de todas as prefeituras paraenses.",
                                       "exp":  "Incorreto. O secret�rio municipal � de livre nomea��o pelo Prefeito de cada cidade."
                                   },
                             "E":  {
                                       "texto":  "Revogar leis federais aprovadas pelo Congresso Nacional.",
                                       "exp":  "Incorreto. O Estado n�o tem compet�ncia legislativa para revogar lei federal da Uni�o."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Compet�ncia do Estado no SUS: Coordenar a rede estadual, apoiar tecnicamente os munic�pios e gerenciar servi�os de refer�ncia regional de alta complexidade."
    },
    {
        "id":  "sus_18",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Compet�ncias da Dire��o Municipal do SUS",
        "enunciado":  "Conforme preceitua o artigo 18 da Lei Federal n� 8.080/1990, a esfera priorit�ria para a execu��o direta da maioria dos servi�os p�blicos de sa�de e aten��o prim�ria �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O Munic�pio (Dire��o Municipal do SUS).",
                                       "exp":  "Correto! O munic�pio � o executor prim�rio das a��es de sa�de, por estar mais pr�ximo do cotidiano do cidad�o."
                                   },
                             "B":  {
                                       "texto":  "A Uni�o, centralizando os m�dicos em hospitais federais em Bras�lia.",
                                       "exp":  "Incorreto. A Uni�o formula diretrizes e financia, mas a execu��o direta � descentralizada."
                                   },
                             "C":  {
                                       "texto":  "A Organiza��o Mundial da Sa�de diretamente da Su��a.",
                                       "exp":  "Incorreto. A OMS emite recomenda��es internacionais t�cnicas, n�o executa servi�os no Brasil."
                                   },
                             "D":  {
                                       "texto":  "Os cons�rcios de seguros privados norte-americanos.",
                                       "exp":  "Incorreto. O SUS � p�blico e estatal."
                                   },
                             "E":  {
                                       "texto":  "Apenas as For�as Armadas em miss�es de fronteira.",
                                       "exp":  "Incorreto. As For�as Armadas prestam apoio pontual em locais remotos, mas o gestor � o munic�pio."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Diretriz da municipaliza��o: O munic�pio � o principal prestador dos servi�os b�sicos de sa�de, cabendo ao Estado o suporte e a alta complexidade."
    },
    {
        "id":  "sus_19",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Determinantes Sociais da Sa�de (Lei 8.080)",
        "enunciado":  "O art. 3� da Lei n� 8.080/1990 expressa que a sa�de tem como fatores determinantes e condicionantes, entre outros:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A alimenta��o, a moradia, o saneamento b�sico, o meio ambiente, o trabalho, a renda, a educa��o, a atividade f�sica, o transporte e o lazer.",
                                       "exp":  "Correto! O conceito ampliado de sa�de compreende as condi��es integrais de dignidade da vida humana."
                                   },
                             "B":  {
                                       "texto":  "Apenas o perfil gen�tico heredit�rio, sendo irrelevantes as condi��es de saneamento e esgoto.",
                                       "exp":  "Incorreto. O meio ambiente e o saneamento s�o determinantes diretos de endemias e infec��es."
                                   },
                             "C":  {
                                       "texto":  "Exclusivamente a quantidade de hospitais particulares constru�dos no centro da capital.",
                                       "exp":  "Incorreto. A oferta hospitalar curativa � apenas um dos fatores de assist�ncia m�dica."
                                   },
                             "D":  {
                                       "texto":  "A ades�o obrigat�ria a planos de previd�ncia privada fechada de bancos estatais.",
                                       "exp":  "Incorreto. Fator financeiro previdenci�rio sem rela��o com o conceito da Lei 8.080."
                                   },
                             "E":  {
                                       "texto":  "A compra particular de antibi�ticos sem receita m�dica nas farm�cias de manipula��o.",
                                       "exp":  "Incorreto. O uso indiscriminado de antibi�ticos gera resist�ncia e agrava os riscos em sa�de."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Sa�de n�o � apenas \u0027aus�ncia de doen�a\u0027! Sa�de resulta de saneamento, �gua tratada, renda, moradia digna, alimenta��o e educa��o de qualidade."
    },
    {
        "id":  "sus_20",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "HumanizaSUS (PNH)",
        "enunciado":  "A Pol�tica Nacional de Humaniza��o (HumanizaSUS), lan�ada pelo Minist�rio da Sa�de em 2003, adota como uma de suas diretrizes centrais nos hospitais p�blicos:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O Acolhimento com classifica��o de risco e a valoriza��o do trabalho dos profissionais de sa�de.",
                                       "exp":  "Correto! Acolher com base na gravidade cl�nica (e n�o por ordem de chegada simples) e valorizar trabalhadores e usu�rios � o n�cleo da PNH."
                                   },
                             "B":  {
                                       "texto":  "A proibi��o de acompanhantes mesmo para crian�as, gestantes e idosos internados.",
                                       "exp":  "Incorreto. A PNH estimula a visita aberta e garante por lei o direito a acompanhantes."
                                   },
                             "C":  {
                                       "texto":  "A elimina��o de ouvidorias e caixas de sugest�es para evitar reclama��es dos pacientes.",
                                       "exp":  "Incorreto. A PNH fomenta a gest�o participativa e a escuta qualificada dos usu�rios."
                                   },
                             "D":  {
                                       "texto":  "A cobran�a de ingressos para parentes que visitam pacientes em leitos de enfermaria.",
                                       "exp":  "Incorreto. O acesso hospitalar p�blico � inteiramente gratuito."
                                   },
                             "E":  {
                                       "texto":  "A separa��o de alas hospitalares por n�vel de renda e poder aquisitivo do usu�rio.",
                                       "exp":  "Incorreto. O SUS veda terminantemente discrimina��es por condi��o econ�mica ou social."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Pilares do HumanizaSUS: Acolhimento, Gest�o Participativa (cogest�o), Ambi�ncia humanizada, Cl�nica Ampliada e Valoriza��o do Trabalhador."
    },
    {
        "id":  "sus_21",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Financiamento do SUS (Emenda Constitucional 29)",
        "enunciado":  "A Constitui��o Federal estabelece que os entes federativos devem vincular percentuais m�nimos de suas receitas de impostos para a aplica��o em a��es e servi�os p�blicos de sa�de. Para os Estados e Munic�pios, esses percentuais m�nimos s�o, respectivamente:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "12% para os Estados e 15% para os Munic�pios.",
                                       "exp":  "Correto! Conforme a Lei Complementar n� 141/2012 (decorrente da EC 29), os Estados aplicam no m�nimo 12% e os Munic�pios no m�nimo 15%."
                                   },
                             "B":  {
                                       "texto":  "5% para os Estados e 5% para os Munic�pios.",
                                       "exp":  "Incorreto. Percentual muito inferior ao piso constitucional obrigat�rio."
                                   },
                             "C":  {
                                       "texto":  "25% para os Estados e 25% para os Munic�pios.",
                                       "exp":  "Incorreto. 25% � o percentual constitucional m�nimo exigido para a Educa��o (art. 212 da CF), n�o para a sa�de."
                                   },
                             "D":  {
                                       "texto":  "50% para todos os entes federados sem distin��o regional.",
                                       "exp":  "Incorreto. Inviabilizaria a manuten��o das demais �reas como seguran�a e infraestrutura."
                                   },
                             "E":  {
                                       "texto":  "Valor discricion�rio definido anualmente sem qualquer piso obrigat�rio em lei.",
                                       "exp":  "Incorreto. O piso � constitucionalmente vinculado e o descumprimento gera rejei��o de contas e interven��o."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Macete de Prova: EDUCA��O = 25% para Estados e Munic�pios. SA�DE = 12% para os Estados e 15% para os Munic�pios!"
    },
    {
        "id":  "sus_22",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Comiss�es Intergestores: CIT e CIB",
        "enunciado":  "No �mbito estadual, o espa�o permanente de negocia��o, pactua��o e decis�o consensual entre a Secretaria de Estado de Sa�de (SESPA) e as Secretarias Municipais de Sa�de (COSEMS) � a:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "CIB (Comiss�o Intergestores Bipartite).",
                                       "exp":  "Correto! A CIB re�ne gestores estaduais e municipais para pactuar o funcionamento do SUS em �mbito estadual."
                                   },
                             "B":  {
                                       "texto":  "CIT (Comiss�o Intergestores Tripartite).",
                                       "exp":  "Incorreto. A CIT atua no plano nacional e re�ne Uni�o (Minist�rio da Sa�de), Estados (CONASS) e Munic�pios (CONASEMS)."
                                   },
                             "C":  {
                                       "texto":  "CPI da Sa�de P�blica.",
                                       "exp":  "Incorreto. CPI � comiss�o parlamentar de inqu�rito do Poder Legislativo para investigar il�citos."
                                   },
                             "D":  {
                                       "texto":  "C�mara de Arbitragem Internacional.",
                                       "exp":  "Incorreto. N�o comp�e a estrutura institucional do SUS."
                                   },
                             "E":  {
                                       "texto":  "Junta Comercial do Estado do Par�.",
                                       "exp":  "Incorreto. �rg�o de registro mercantil de empresas, alheio � gest�o da sa�de."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "CIB = Bipartite (Estado + Munic�pios). CIT = Tripartite (Uni�o + Estados + Munic�pios). S�o foros de pactua��o t�cnica e financeira da gest�o do SUS."
    },
    {
        "id":  "sus_23",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Princ�pio da Descentraliza��o",
        "enunciado":  "O princ�pio organizativo do SUS que redistribui o poder de decis�o e os recursos financeiros para o ente federativo mais pr�ximo da popula��o (com dire��o �nica em cada esfera de governo) denomina-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Concentra��o tecnocr�tica.",
                                       "exp":  "Incorreto. Concentra��o � o oposto da descentraliza��o democr�tica."
                                   },
                             "B":  {
                                       "texto":  "Descentraliza��o pol�tico-administrativa.",
                                       "exp":  "Correto! A descentraliza��o aproxima a gest�o do usu�rio, conferindo autonomia a estados e munic�pios."
                                   },
                             "C":  {
                                       "texto":  "Segrega��o comunit�ria.",
                                       "exp":  "Incorreto. Termo preconceituoso e incompat�vel com o direito social."
                                   },
                             "D":  {
                                       "texto":  "Centraliza��o ministerial.",
                                       "exp":  "Incorreto. A CF rejeitou o modelo centralizador do antigo INAMPS pr�-1988."
                                   },
                             "E":  {
                                       "texto":  "Delega��o discricion�ria revog�vel.",
                                       "exp":  "Incorreto. A descentraliza��o do SUS � mandamento constitucional obrigat�rio, n�o mera concess�o."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Descentraliza��o com dire��o �nica em cada esfera: Minist�rio da Sa�de (Uni�o), Secretaria de Estado de Sa�de (Estado) e Secretaria Municipal de Sa�de (Munic�pio)."
    },
    {
        "id":  "sus_24",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Decreto 7.508/2011: Mapa da Sa�de",
        "enunciado":  "De acordo com o Decreto Federal n� 7.508/2011, o \u0027Mapa da Sa�de\u0027 � conceituado como:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Descri��o geogr�fica da distribui��o de leitos particulares destinados a turismo internacional.",
                                       "exp":  "Incorreto. N�o tem rela��o com turismo m�dico privado."
                                   },
                             "B":  {
                                       "texto":  "Descri��o geogr�fica da distribui��o de recursos humanos e de a��es e servi�os de sa�de ofertados pelo SUS e pela iniciativa privada, considerando-se a capacidade instalada e as necessidades de sa�de.",
                                       "exp":  "Correto! O Mapa da Sa�de identifica os vazios assistenciais e orienta onde construir novos servi�os na Regi�o."
                                   },
                             "C":  {
                                       "texto":  "Guia tur�stico com indica��es de restaurantes naturais e praias de Bel�m.",
                                       "exp":  "Incorreto. Conceito absurdo e incorreto."
                                   },
                             "D":  {
                                       "texto":  "Planta baixa arquitet�nica da sala de cirurgia card�aca da FHCGV.",
                                       "exp":  "Incorreto. Planta de engenharia hospitalar n�o se confunde com o Mapa da Sa�de."
                                   },
                             "E":  {
                                       "texto":  "Carta de navega��o fluvial exclusiva para a Marinha do Brasil.",
                                       "exp":  "Incorreto. Documento de tr�fego aquavi�rio, sem rela��o com a sa�de p�blica."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "O Mapa da Sa�de (art. 2�, III do Dec. 7.508/11) orienta o planejamento regional, mostrando exatamente onde faltam hospitais, m�dicos e ambulat�rios."
    },
    {
        "id":  "sus_25",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Redes de Aten��o � Sa�de (RAS)",
        "enunciado":  "As Redes de Aten��o � Sa�de (RAS) s�o arranjos organizativos de a��es e servi�os de sa�de de diferentes densidades tecnol�gicas, integrados por meio de sistemas de apoio t�cnico, log�stico e de gest�o. O objetivo principal da RAS �:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Superar a fragmenta��o do cuidado e garantir a integralidade da aten��o cont�nua ao paciente.",
                                       "exp":  "Correto! A RAS conecta o postinho, a UPA e o hospital terci�rio (como o Gaspar Vianna) de forma fluida."
                                   },
                             "B":  {
                                       "texto":  "Isolar os pacientes com doen�as mentais em asilos fechados sem contato comunit�rio.",
                                       "exp":  "Incorreto. A Rede de Aten��o Psicossocial (RAPS) busca a reinser��o social e a desinstitucionaliza��o."
                                   },
                             "C":  {
                                       "texto":  "Reduzir o atendimento ao p�blico em 90% para cortar gastos p�blicos.",
                                       "exp":  "Incorreto. O objetivo � ampliar o acesso e melhorar a resolutividade do atendimento."
                                   },
                             "D":  {
                                       "texto":  "Substituir m�dicos e enfermeiros por aplicativos virtuais pagos.",
                                       "exp":  "Incorreto. A tecnologia apoia a equipe, mas o atendimento em sa�de � centrado nas pessoas."
                                   },
                             "E":  {
                                       "texto":  "Cobrar ingressos de entrada em hospitais p�blicos estaduais.",
                                       "exp":  "Incorreto. O SUS � gratuito e universal."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "A RAS substitui o modelo antigo onde cada hospital trabalhava como uma \u0027ilha isolada\u0027, criando uma rede integrada de aten��o cont�nua."
    },
    {
        "id":  "sus_26",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Protocolo de Manchester e Triagem",
        "enunciado":  "Nos servi�os de urg�ncia e emerg�ncia hospitalar, a sistem�tica de triagem que classifica os pacientes por cores de acordo com a gravidade cl�nica (vermelho: emerg�ncia imediata; amarelo: urgente; verde: pouco urgente; azul: n�o urgente) denomina-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Sistema de Classifica��o de Risco de Manchester.",
                                       "exp":  "Correto! O Protocolo de Manchester � amplamente adotado no SUS para priorizar o atendimento pela gravidade e risco de morte."
                                   },
                             "B":  {
                                       "texto":  "Sorteio aleat�rio por ordem de matr�cula escolar.",
                                       "exp":  "Incorreto. Atendimento de urg�ncia n�o pode ser realizado por sorteio."
                                   },
                             "C":  {
                                       "texto":  "Triagem por poder financeiro declarat�rio.",
                                       "exp":  "Incorreto. Totalmente vedado e discriminat�rio."
                                   },
                             "D":  {
                                       "texto":  "Escala de Glasgow para sele��o de compras de almoxarifado.",
                                       "exp":  "Incorreto. A escala de Glasgow mede o n�vel de consci�ncia neurol�gica do indiv�duo, n�o materiais."
                                   },
                             "E":  {
                                       "texto":  "Fila cronol�gica simples por chegada sem crit�rio de gravidade.",
                                       "exp":  "Incorreto. A fila simples � perigosa porque um paciente infartando morreria esperando quem chegou antes com gripe."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "A classifica��o de risco substitui a ordem de chegada pura pela gravidade cl�nica do paciente, garantindo que o risco de vida seja atendido no primeiro segundo."
    },
    {
        "id":  "sus_27",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Doa��o e Transplante de �rg�os (Lei 9.434/97)",
        "enunciado":  "O Hospital de Cl�nicas Gaspar Vianna � refer�ncia no Par� em nefrologia e transplantes renais. No Brasil, de acordo com a legisla��o vigente, a doa��o de �rg�os e tecidos ap�s a morte encef�lica depende de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Autoriza��o expressa de c�njuge ou parente de maior idade at� o segundo grau.",
                                       "exp":  "Correto! A legisla��o brasileira vigente adota o consentimento familiar: a fam�lia autoriza a doa��o."
                                   },
                             "B":  {
                                       "texto":  "Doa��o presumida obrigat�ria autom�tica sem qualquer consulta � fam�lia.",
                                       "exp":  "Incorreto. O modelo de doa��o presumida foi revogado h� anos no Brasil."
                                   },
                             "C":  {
                                       "texto":  "Pagamento pr�vio de recompensa financeira aos familiares do doador.",
                                       "exp":  "Incorreto. A compra e venda de �rg�os humanos � crime federal grav�ssimo (art. 199, � 4� da CF)."
                                   },
                             "D":  {
                                       "texto":  "Vontade expressa do m�dico legista independentemente dos parentes.",
                                       "exp":  "Incorreto. O legista n�o tem o poder de doar �rg�os sem concord�ncia dos familiares legais."
                                   },
                             "E":  {
                                       "texto":  "Autoriza��o formal de juiz de direito em audi�ncia p�blica com jurados.",
                                       "exp":  "Incorreto. N�o se exige processo judicial para a doa��o com consentimento da fam�lia."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "No Brasil, a doa��o de �rg�os p�s-morte depende exclusivamente da autoriza��o da fam�lia (c�njuge ou parentes at� 2� grau). Por isso, quem quer doar deve avisar sua fam�lia em vida!"
    },
    {
        "id":  "sus_28",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Sa�de Mental no SUS e Reforma Psiqui�trica (Lei 10.216/01)",
        "enunciado":  "Sendo a FHCGV refer�ncia estadual em assist�ncia psiqui�trica no Par�, a Lei Federal n� 10.216/2001 (Lei da Reforma Psiqui�trica) estabelece que o tratamento da pessoa com transtorno mental deve ser realizado prioritariamente em:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Ambiente comunit�rio e em servi�os de base territorial (como CAPS e resid�ncias terap�uticas), visando � sua reinser��o social.",
                                       "exp":  "Correto! O modelo asilar de interna��o perp�tua foi superado em prol da rede aberta e humanizada de aten��o psicossocial."
                                   },
                             "B":  {
                                       "texto":  "Hosp�cios isolados em �reas rurais com interna��o perp�tua e perda dos direitos civis.",
                                       "exp":  "Incorreto. A reforma baniu o modelo manicomial excludente."
                                   },
                             "C":  {
                                       "texto":  "Pres�dios de seguran�a m�xima e col�nias penais.",
                                       "exp":  "Incorreto. Transtorno mental � quest�o de sa�de p�blica, n�o mat�ria de execu��o penal de seguran�a."
                                   },
                             "D":  {
                                       "texto":  "Leitos particulares de hospitais no exterior financiados com dinheiro p�blico.",
                                       "exp":  "Incorreto. O cuidado deve ser prestado no territ�rio do usu�rio pela rede do SUS."
                                   },
                             "E":  {
                                       "texto":  "Isolamento total sem contato com a fam�lia ou amigos.",
                                       "exp":  "Incorreto. A manuten��o dos la�os familiares e sociais � diretriz expressa da lei."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "A Lei 10.216/2001 redirecionou o modelo assistencial em sa�de mental no Brasil: prioriza servi�os abertos e comunit�rios (CAPS), reservando a interna��o apenas para crises agudas graves."
    },
    {
        "id":  "sus_29",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Subsistema de Sa�de Ind�gena (Lei 9.836/99)",
        "enunciado":  "O Subsistema de Aten��o � Sa�de Ind�gena, integrado ao SUS, foi estruturado para atender �s popula��es tradicionais e povos origin�rios por meio de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "DSEI (Distritos Sanit�rios Especiais Ind�genas), respeitando as especificidades culturais, lingu�sticas e epidemiol�gicas de cada etnia.",
                                       "exp":  "Correto! Os DSEIs organizam a aten��o b�sica nas aldeias de forma descentralizada e intercultural."
                                   },
                             "B":  {
                                       "texto":  "Obriga��o de ren�ncia �s l�nguas maternas e costumes tradicionais para ter acesso a rem�dios.",
                                       "exp":  "Incorreto. O SUS respeita e valoriza a medicina tradicional e a diversidade cultural ind�gena."
                                   },
                             "C":  {
                                       "texto":  "Cobran�a de consultas em barras de ouro garimpadas.",
                                       "exp":  "Incorreto. O atendimento � gratuito, p�blico e universal."
                                   },
                             "D":  {
                                       "texto":  "Exclus�o total das aldeias de qualquer campanha de vacina��o do SUS.",
                                       "exp":  "Incorreto. Os povos ind�genas constituem grupo priorit�rio nos planos nacionais de vacina��o."
                                   },
                             "E":  {
                                       "texto":  "Atendimento unicamente por m�dicos militares estrangeiros sem tradutores comunit�rios.",
                                       "exp":  "Incorreto. Atuam equipes multidisciplinares e Agentes Ind�genas de Sa�de (AIS) locais."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "A Sa�de Ind�gena � gerida no plano federal pela SESAI e opera por meio de 34 Distritos Sanit�rios Especiais Ind�genas (DSEIs) em todo o Brasil."
    },
    {
        "id":  "sus_30",
        "disciplina":  "sus",
        "materia_nome":  "Pol�ticas de Sa�de P�blica (SUS)",
        "topico":  "Sistemas de Informa��o em Sa�de (DATASUS)",
        "enunciado":  "No Minist�rio da Sa�de, o sistema informatizado oficial utilizado para registrar as notifica��es compuls�rias de doen�as transmiss�veis e agravos epidemiol�gicos (como dengue, tuberculose, covid-19 e hansen�ase) � o:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "SINAN (Sistema de Informa��o de Agravos de Notifica��o).",
                                       "exp":  "Correto! O SINAN � alimentado principalmente pela notifica��o compuls�ria de doen�as para subsidiar a vigil�ncia epidemiol�gica."
                                   },
                             "B":  {
                                       "texto":  "SISU (Sistema de Sele��o Unificada universit�ria).",
                                       "exp":  "Incorreto. O SISU seleciona estudantes para vagas em universidades federais pelo ENEM."
                                   },
                             "C":  {
                                       "texto":  "CAD�NICO (Cadastro �nico de Programas Sociais).",
                                       "exp":  "Incorreto. O Cad�nico identifica fam�lias de baixa renda para benef�cios sociais como o Bolsa Fam�lia."
                                   },
                             "D":  {
                                       "texto":  "RENACH (Registro Nacional de Carteiras de Habilita��o).",
                                       "exp":  "Incorreto. Sistema do tr�nsito para motoristas e CNHs."
                                   },
                             "E":  {
                                       "texto":  "SPED (Sistema P�blico de Escritura��o Digital).",
                                       "exp":  "Incorreto. Sistema da Receita Federal para notas fiscais e contabilidade de empresas."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Principais sistemas do SUS: SINAN (doen�as de notifica��o), SIM (mortalidade), SINASC (nascidos vivos), SIH/SUS (interna��es) e SIA/SUS (ambulat�rio)."
    },
    {
        "id":  "port_01",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Compreensão e Interpretação de Texto",
        "enunciado":  "Considere o trecho: \u0027A humanização hospitalar não é mero protocolo de cortesia, mas sim um compromisso ético com a dignidade do paciente em sua maior fragilidade.\u0027 A partir da leitura do texto, infere-se corretamente que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A humanização substitui as técnicas médicas formais na recuperação clínica.",
                                       "exp":  "Incorreto. O texto não afirma que a humanização substitui as técnicas médicas, mas que confere dignidade ética ao cuidado."
                                   },
                             "B":  {
                                       "texto":  "O acolhimento digno ao paciente decorre de um dever ético essencial, e não de uma simples formalidade.",
                                       "exp":  "Correto! O texto contrapõe \u0027mero protocolo de cortesia\u0027 ao \u0027compromisso ético com a dignidade\u0027, reforçando sua essência moral indispensável."
                                   },
                             "C":  {
                                       "texto":  "A cortesia é desnecessária em hospitais públicos de grande complexidade.",
                                       "exp":  "Incorreto. O texto não diz que a cortesia é inútil, mas que a humanização vai além de uma simples etiqueta superficial."
                                   },
                             "D":  {
                                       "texto":  "A fragilidade do paciente decorre exclusivamente da burocracia dos protocolos de atendimento.",
                                       "exp":  "Incorreto. A fragilidade é inerente à condição de enfermidade e vulnerabilidade do paciente, não decorrência de protocolos."
                                   },
                             "E":  {
                                       "texto":  "Protocolos formais são prejudiciais ao tratamento de saúde humanizado.",
                                       "exp":  "Incorreto. O trecho não qualifica os protocolos como prejudiciais, apenas afirma que a humanização não se reduz a eles."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A interpretação textual exige ater-se estritamente aos limites do sentido veiculado: a humanização ultrapassa a formalidade e consubstancia um compromisso ético."
    },
    {
        "id":  "port_02",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Sentido Denotativo e Conotativo",
        "enunciado":  "Assinale a alternativa em que a palavra destacada foi empregada em sentido CONOTATIVO (figurado):",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O médico operou o coração do paciente na sala cirúrgica.",
                                       "exp":  "Incorreto. \u0027Coração\u0027 refere-se ao órgão anatômico em sentido literal/denotativo."
                                   },
                             "B":  {
                                       "texto":  "O almoxarifado recebeu as caixas de medicamentos lacradas.",
                                       "exp":  "Incorreto. \u0027Caixas\u0027 está empregado no sentido denotativo real do objeto de papelão/armazenamento."
                                   },
                             "C":  {
                                       "texto":  "A paciência e o acolhimento da recepcionista curaram as feridas invisíveis daquela família angustiada.",
                                       "exp":  "Correto! \u0027Feridas invisíveis\u0027 é uma metáfora poética e figurada para dor emocional, configurando sentido conotativo."
                                   },
                             "D":  {
                                       "texto":  "O processo físico foi arquivado na pasta de número 304.",
                                       "exp":  "Incorreto. Sentido próprio, denotativo e direto de arquivamento documental."
                                   },
                             "E":  {
                                       "texto":  "O laboratório aferiu a pressão arterial de trinta servidores.",
                                       "exp":  "Incorreto. \u0027Pressão arterial\u0027 é termo técnico em sentido estritamente literal/denotativo."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Denotação é o sentido real, literal, de dicionário (D de Dicionário). Conotação é o sentido figurado, poético, metafórico (C de Criatividade)."
    },
    {
        "id":  "port_03",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Figuras de Linguagem",
        "enunciado":  "Na frase: \u0027Para não assustar os familiares no plantão, a equipe comunicou com delicadeza que o enfermo descansou para sempre\u0027, identifica-se a figura de linguagem denominada:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Eufemismo.",
                                       "exp":  "Correto! \u0027Descansou para sempre\u0027 suaviza uma notícia desagradável e dolorosa (o falecimento/morte), conceito exato de eufemismo."
                                   },
                             "B":  {
                                       "texto":  "Hipérbole.",
                                       "exp":  "Incorreto. Hipérbole é o exagero intencional (ex.: \u0027morri de chorar\u0027)."
                                   },
                             "C":  {
                                       "texto":  "Pleonasmo.",
                                       "exp":  "Incorreto. Pleonasmo é a repetição enfática de uma mesma ideia (ex.: \u0027subir para cima\u0027)."
                                   },
                             "D":  {
                                       "texto":  "Ironia.",
                                       "exp":  "Incorreto. Ironia consiste em dizer o oposto do que se pensa em tom de sátira ou zombaria."
                                   },
                             "E":  {
                                       "texto":  "Prosopopeia.",
                                       "exp":  "Incorreto. Prosopopeia (personificação) atribui ações humanas a seres inanimados ou animais."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Eufemismo busca atenuar, abrandar expressões cruéis, chocantes ou desagradáveis, muito frequente em contextos de perdas e luto."
    },
    {
        "id":  "port_04",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Coesão Textual e Pronomes Anafóricos",
        "enunciado":  "Em: \u0027O diretor elogiou a servidora Dayana e o técnico Marcos; este pela pontualidade nos relatórios e aquela pela dedicação ao atendimento\u0027, os pronomes destacados exercem coesão:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Catafórica, pois antecipam termos que ainda serão mencionados no parágrafo seguinte.",
                                       "exp":  "Incorreto. Catáfora projeta para a frente. No caso, os termos já foram ditos anteriormente."
                                   },
                             "B":  {
                                       "texto":  "Anafórica distributiva, retomando \u0027este\u0027 o termo mais próximo (Marcos) e \u0027aquela\u0027 o mais distante (Dayana).",
                                       "exp":  "Correto! Na retomada de dois termos já citados, \u0027este\u0027 refere-se ao último citado (mais próximo) e \u0027aquele/aquela\u0027 ao primeiro citado (mais distante)."
                                   },
                             "C":  {
                                       "texto":  "Exofórica, pois apontam para pessoas externas que não pertencem ao texto.",
                                       "exp":  "Incorreto. A referência exofórica (dêitica) aponta para fora do texto. Aqui a referência é puramente interna (endofórica)."
                                   },
                             "D":  {
                                       "texto":  "Pleonástica, pois repetem os nomes dos envolvidos sem necessidade funcional.",
                                       "exp":  "Incorreto. O pronome evita a repetição deselegante dos nomes próprios, conferindo progressão e clareza."
                                   },
                             "E":  {
                                       "texto":  "Invertida e incorreta, já que \u0027este\u0027 deveria obrigatoriamente retomar o primeiro elemento citado.",
                                       "exp":  "Incorreto. Pela norma culta, \u0027este\u0027 retoma o elemento imediatamente anterior (mais próximo), não o primeiro."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Regra clássica da norma culta: para retomar dois elementos anteriores, usa-se \u0027este/esta\u0027 para o termo mais próximo (último) e \u0027aquele/aquela\u0027 para o mais afastado (primeiro)."
    },
    {
        "id":  "port_05",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Conjunções Coordenativas Adversativas",
        "enunciado":  "Na oração: \u0027O hospital recebeu novos computadores para a recepção, CONTUDO a equipe ainda aguarda a instalação da rede lógica\u0027, o conectivo destacado exprime ideia de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Conclusão, podendo ser substituído sem alteração de sentido por \u0027portanto\u0027.",
                                       "exp":  "Incorreto. \u0027Contudo\u0027 não indica conclusão ou dedução lógica."
                                   },
                             "B":  {
                                       "texto":  "Oposição ou adversidade, podendo ser substituído por \u0027todavia\u0027 ou \u0027no entanto\u0027.",
                                       "exp":  "Correto! \u0027Contudo\u0027, \u0027todavia\u0027, \u0027no entanto\u0027, \u0027entretanto\u0027 e \u0027porém\u0027 são conjunções coordenativas adversativas que estabelecem contraste/oposição."
                                   },
                             "C":  {
                                       "texto":  "Explicação, sendo equivalente semântico de \u0027porque\u0027 e \u0027pois\u0027.",
                                       "exp":  "Incorreto. Não introduz justificativa ou causa."
                                   },
                             "D":  {
                                       "texto":  "Alternância, equivalendo à expressão \u0027ora... ora\u0027.",
                                       "exp":  "Incorreto. Não há alternância ou escolha entre opções excludentes."
                                   },
                             "E":  {
                                       "texto":  "Adição simples de pensamentos compatíveis.",
                                       "exp":  "Incorreto. Se fosse adição, usaria conectivos aditivos como \u0027e\u0027, \u0027nem\u0027, \u0027bem como\u0027."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Conjunções adversativas ligam orações de sentidos opostos: mas, porém, contudo, todavia, entretanto, no entanto, não obstante."
    },
    {
        "id":  "port_06",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Conjunções Subordinativas Causais",
        "enunciado":  "Assinale a oração em que a conjunção \u0027COMO\u0027 expressa valor semântico de CAUSA:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Como os prontuários estavam desorganizados, o atendimento da triagem sofreu atraso.",
                                       "exp":  "Correto! \u0027Como\u0027 no início da frase com sentido de \u0027já que\u0027 / \u0027visto que\u0027 é conjunção subordinativa causal (a causa do atraso foi a desorganização)."
                                   },
                             "B":  {
                                       "texto":  "Dayana organizou as pastas de arquivos como o diretor havia instruído no manual.",
                                       "exp":  "Incorreto. Aqui \u0027como\u0027 equivale a \u0027conforme\u0027 / \u0027segundo\u0027, indicando conformidade."
                                   },
                             "C":  {
                                       "texto":  "O Auxiliar Administrativo correu pelo corredor como um atleta velocista.",
                                       "exp":  "Incorreto. Aqui \u0027como\u0027 introduz uma oração comparativa."
                                   },
                             "D":  {
                                       "texto":  "Ninguém sabia como resolver a falha do sistema elétrico.",
                                       "exp":  "Incorreto. \u0027Como\u0027 atua como advérbio interrogativo indireto de modo."
                                   },
                             "E":  {
                                       "texto":  "Tanto o médico como o enfermeiro assinaram a prescrição conjunta.",
                                       "exp":  "Incorreto. \u0027Tanto... como\u0027 atua como estrutura correlativa de adição."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Dica de ouro Consulplan: \u0027Como\u0027 anteposto à oração principal equivale a \u0027já que\u0027 / \u0027visto que\u0027 e sempre expressa ideia de CAUSA."
    },
    {
        "id":  "port_07",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Conjunções Subordinativas Concessivas",
        "enunciado":  "A oração subordinada concessiva expressa um fato que poderia impedir a realização da oração principal, mas não impede. Identifique a alternativa que contém conjunção CONCESSIVA:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O processo foi deferido assim que a documentação completa chegou ao setor.",
                                       "exp":  "Incorreto. \u0027Assim que\u0027 é conjunção temporal (indica tempo imediato)."
                                   },
                             "B":  {
                                       "texto":  "Embora o volume de trabalho fosse elevado, a servidora Dayana manteve a gentileza e o rigor técnico.",
                                       "exp":  "Correto! \u0027Embora\u0027 é a conjunção concessiva por excelência (outras: conquanto, ainda que, mesmo que, posto que)."
                                   },
                             "C":  {
                                       "texto":  "Caso haja novos leitos disponíveis, informaremos a central de regulação.",
                                       "exp":  "Incorreto. \u0027Caso\u0027 é conjunção condicional."
                                   },
                             "D":  {
                                       "texto":  "O relatório ficou tão extenso que exigiu encadernação especial.",
                                       "exp":  "Incorreto. \u0027Tão... que\u0027 expressa consequência (consecutiva)."
                                   },
                             "E":  {
                                       "texto":  "A diretoria convocou reunião a fim de que os problemas fossem solucionados.",
                                       "exp":  "Incorreto. \u0027A fim de que\u0027 expressa finalidade (final)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "As conjunções concessivas (embora, conquanto, ainda que, se bem que, mesmo que) introduzem uma quebra de expectativa sem anular o fato principal."
    },
    {
        "id":  "port_08",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Tipologia Textual",
        "enunciado":  "Um documento de Manual de Procedimento Operacional Padrão (POP) que detalha ordens passo a passo com verbos no imperativo (\u0027higienize as mãos, confira a etiqueta, insira a ficha\u0027) classifica-se como:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Texto narrativo, pois conta uma história com enredo cronológico fictício.",
                                       "exp":  "Incorreto. Textos narrativos contam histórias com personagens, tempo, espaço e conflito."
                                   },
                             "B":  {
                                       "texto":  "Texto dissertativo-argumentativo, pois defende uma tese com base em argumentos teóricos.",
                                       "exp":  "Incorreto. O dissertativo defende ponto de vista com dados e persuasão (como a redação do concurso)."
                                   },
                             "C":  {
                                       "texto":  "Texto injuntivo ou instrucional, pois tem a finalidade de instruir, prescrever e orientar uma ação do leitor.",
                                       "exp":  "Correto! Textos injuntivos ensinam a realizar tarefas passo a passo (manuais, receitas, bulas, regulamentos) com verbos no imperativo ou infinitivo."
                                   },
                             "D":  {
                                       "texto":  "Texto descritivo puro, pois traça um retrato estático de um ser ou ambiente.",
                                       "exp":  "Incorreto. O descritivo retrata características sensoriais estáticas sem orientar procedimentos."
                                   },
                             "E":  {
                                       "texto":  "Texto lírico-expressivo, centrado na emissão poética de sentimentos subjetivos.",
                                       "exp":  "Incorreto. O gênero lírico expressa sentimentos em versos poéticos, incompatível com normas hospitalares."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Texto injuntivo (instrucional) guia condutas: receitas, editais, manuais e POPs hospitalares são exemplos clássicos cobrados em prova."
    },
    {
        "id":  "port_09",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Homônimos: Seção, Sessão e Cessão",
        "enunciado":  "Preencha corretamente as lacunas: \u0027Na ___ da tarde, a diretoria aprovou a ___ de materiais permanentes para a ___ de faturamento.\u0027",
        "alternativas":  {
                             "A":  {
                                       "texto":  "sessão / cessão / seção",
                                       "exp":  "Correto! Sessão = reunião/período de tempo; Cessão = ato de ceder/transferir; Seção (ou secção) = setor, divisão, departamento."
                                   },
                             "B":  {
                                       "texto":  "seção / sessão / cessão",
                                       "exp":  "Incorreto. Seção não é reunião, sessão não é doação e cessão não é departamento."
                                   },
                             "C":  {
                                       "texto":  "cessão / seção / sessão",
                                       "exp":  "Incorreto. Cessão da tarde não tem sentido temporal de reunião."
                                   },
                             "D":  {
                                       "texto":  "sessão / seção / cessão",
                                       "exp":  "Incorreto. O segundo termo refere-se ao ato de ceder (cessão com C), e o terceiro à divisão departamental (seção com S)."
                                   },
                             "E":  {
                                       "texto":  "seção / cessão / sessão",
                                       "exp":  "Incorreto. Confunde todas as três acepções ortográficas homófonas."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Macete definitivo: Sessão (com 3 \u0027esses\u0027) = tempo/reunião de cinema/plenária. Cessão (com C) = ato de ceder algo. Seção (com ç) = setor, repartição ou corte."
    },
    {
        "id":  "port_10",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Parônimos: Ratificar vs Retificar",
        "enunciado":  "O Auxiliar Administrativo verificou um erro de digitação na data do relatório e precisou corrigir a falha. Em seguida, a diretoria confirmou e validou a versão corrigida. Os verbos adequados para essas duas ações são, respectivamente:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Ratificar (corrigir) e Retificar (validar).",
                                       "exp":  "Incorreto. O significado está invertido."
                                   },
                             "B":  {
                                       "texto":  "Retificar (corrigir) e Ratificar (confirmar/validar).",
                                       "exp":  "Correto! Retificar vem de \u0027reto\u0027, consertar, emendar; Ratificar vem de \u0027rato\u0027, validar, confirmar formalmente."
                                   },
                             "C":  {
                                       "texto":  "Retificar e Retificar.",
                                       "exp":  "Incorreto. A segunda ação não foi de correção, mas de confirmação."
                                   },
                             "D":  {
                                       "texto":  "Ratificar e Ratificar.",
                                       "exp":  "Incorreto. A primeira ação corrigiu o erro material, portanto foi uma retificação."
                                   },
                             "E":  {
                                       "texto":  "Reivindicar e Rescindir.",
                                       "exp":  "Incorreto. Vocábulos com significados jurídicos inteiramente distintos (pleitear e anular contrato)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Mnemônico infalível: Retificar tem \u0027E\u0027 de emendar/corrigir. Ratificar tem \u0027A\u0027 de apoiar/afirmar/confirmar."
    },
    {
        "id":  "port_11",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Pronomes Demonstrativos no Tempo e Espaço",
        "enunciado":  "Quanto ao uso dos pronomes demonstrativos conforme a norma culta, assinale a opção correta:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Este ano em que estamos (2026) exige foco total nos estudos da Dayana.\u0027",
                                       "exp":  "Correto! \u0027Este/esta/isto\u0027 indica o tempo presente em que se fala (o ano atual: 2026) ou o que está fisicamente próximo de quem fala."
                                   },
                             "B":  {
                                       "texto":  "\u0027Esse ano de 2026 em que vivemos hoje é de muitas vitórias.\u0027",
                                       "exp":  "Incorreto. \u0027Esse\u0027 refere-se ao tempo passado recente ou futuro próximo, não ao presente imediato."
                                   },
                             "C":  {
                                       "texto":  "\u0027Aquele documento que está em minhas mãos precisa de assinatura imediata.\u0027",
                                       "exp":  "Incorreto. Se está nas mãos de quem fala, o correto é \u0027este documento\u0027."
                                   },
                             "D":  {
                                       "texto":  "\u0027O ofício que você segura aí em suas mãos deve ser este.\u0027",
                                       "exp":  "Incorreto. Objeto próximo ao interlocutor (com quem se fala) exige \u0027esse\u0027, e não \u0027este\u0027."
                                   },
                             "E":  {
                                       "texto":  "\u0027Isto que você acabou de dizer lá fora foi muito deselegante.\u0027",
                                       "exp":  "Incorreto. Fato dito pelo interlocutor exige \u0027isso\u0027, e não \u0027isto\u0027."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Demonstrativos no espaço e tempo: \u0027Este\u0027 = perto de mim (emissor) / presente atual. \u0027Esse\u0027 = perto de você (receptor) / passado recente. \u0027Aquele\u0027 = longe dos dois / passado remoto."
    },
    {
        "id":  "port_12",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Pronomes de Tratamento e Concordância Gramatical",
        "enunciado":  "Ao redigir um documento oficial dirigido a uma Secretária de Estado com o pronome \u0027Vossa Excelência\u0027, a concordância verbal e pronominal deve ser feita rigorosamente em:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Segunda pessoa do singular (tu), por se tratar de tratamento formal direto.",
                                       "exp":  "Incorreto. Pronomes de tratamento nunca concordam em 2ª pessoa do singular (tu)."
                                   },
                             "B":  {
                                       "texto":  "Segunda pessoa do plural (vós), em virtude do pronome \u0027Vossa\u0027.",
                                       "exp":  "Incorreto. Embora comecem por \u0027Vossa\u0027, os pronomes de tratamento exigem verbos e pronomes em 3ª pessoa."
                                   },
                             "C":  {
                                       "texto":  "Terceira pessoa (ele/ela), embora se refira diretamente à pessoa com quem se fala.",
                                       "exp":  "Correto! Regra absoluta da gramática e da redação oficial: todo pronome de tratamento concorda com o verbo e pronomes na 3ª pessoa (ex.: \u0027Vossa Excelência designou seus assessores\u0027)."
                                   },
                             "D":  {
                                       "texto":  "Primeira pessoa do plural (nós), demonstrando cordialidade coletiva.",
                                       "exp":  "Incorreto. A 1ª pessoa plural mudaria o sujeito para quem está falando."
                                   },
                             "E":  {
                                       "texto":  "Gênero masculino obrigatoriamente, independentemente do sexo da autoridade.",
                                       "exp":  "Incorreto. A concordância de gênero dos adjetivos faz-se com o sexo da pessoa a quem se refere (ex.: \u0027Vossa Excelência está atenta\u0027)."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Atenção: Pronomes de tratamento exigem verbo e pronomes possessivos SEMPRE na 3ª pessoa (\u0027seu\u0027, \u0027sua\u0027, \u0027ele\u0027, \u0027ela\u0027), e o adjetivo concorda com o sexo da pessoa real."
    },
    {
        "id":  "port_13",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Colocação Pronominal: Próclise",
        "enunciado":  "A colocação do pronome oblíquo átono antes do verbo (próclise) é OBRIGAT�“RIA na seguinte situação:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Entregou-se o relatório ao diretor sem ressalvas.\u0027",
                                       "exp":  "Incorreto. No início absoluto de período é proibido iniciar com pronome oblíquo átono, sendo a ênclise obrigatória."
                                   },
                             "B":  {
                                       "texto":  "\u0027Não se admitirão atrasos injustificados no protocolo do hospital.\u0027",
                                       "exp":  "Correto! A palavra de sentido negativo (\u0027Não\u0027) é palavra atrativa obrigatória que exige a próclise (\u0027não se admitirão\u0027)."
                                   },
                             "C":  {
                                       "texto":  "\u0027Os servidores apresentaram-se pontualmente para o serviço.\u0027",
                                       "exp":  "Incorreto. Não há palavra atrativa obrigatória antes do verbo; a ênclise é perfeitamente legítima."
                                   },
                             "D":  {
                                       "texto":  "\u0027Realizar-se-á o concurso da FHCGV no mês de dezembro.\u0027",
                                       "exp":  "Incorreto. Verbo no futuro do presente no início da oração exige mesóclise (\u0027Realizar-se-á\u0027)."
                                   },
                             "E":  {
                                       "texto":  "\u0027Aguardando a resposta, retirou-se o auxiliar da sala.\u0027",
                                       "exp":  "Incorreto. Após pausa assinalada por vírgula, a próclise não é mandatória."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Fatores de atração da próclise: palavras negativas (não, nunca, jamais), pronomes relativos (que, quem), pronomes indefinidos e conjunções subordinativas."
    },
    {
        "id":  "port_14",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Concordância Verbal: Verbo Haver Impessoal",
        "enunciado":  "O verbo HAVER, quando empregado com o significado de \u0027existir\u0027, \u0027ocorrer\u0027 ou indicando tempo decorrido, é impessoal e deve permanecer no singular. Assinale a frase que respeita essa regra:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Haviam muitos pacientes na fila de atendimento da emergência.",
                                       "exp":  "Incorreto. \u0027Haver\u0027 no sentido de existir é impessoal: o correto é \u0027Havia muitos pacientes\u0027."
                                   },
                             "B":  {
                                       "texto":  "Haverão de ocorrer novas nomeações para o concurso público.",
                                       "exp":  "Incorreto. Em locuções com sentido existencial, o verbo auxiliar também fica no singular: \u0027Haverá de ocorrer\u0027."
                                   },
                             "C":  {
                                       "texto":  "Havia cerca de cinquenta formulários pendentes de assinatura.",
                                       "exp":  "Correto! \u0027Havia\u0027 no singular com sentido de \u0027existiam cerca de cinquenta formulários\u0027, obedecendo estritamente à impessoalidade."
                                   },
                             "D":  {
                                       "texto":  "Devem haver mais vagas no próximo certame da fundação.",
                                       "exp":  "Incorreto. Em locuções com haver impessoal, o verbo \u0027dever\u0027 fica no singular: \u0027Deve haver mais vagas\u0027."
                                   },
                             "E":  {
                                       "texto":  "Houveram vários imprevistos na tramitação do processo administrativo.",
                                       "exp":  "Incorreto. O verbo deve ficar no singular: \u0027Houve vários imprevistos\u0027."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Haver (existir/acontecer) N�ƒO tem sujeito e N�ƒO vai para o plural! \u0027Havia problemas\u0027, \u0027Houve acidentes\u0027, \u0027Vai haver festas\u0027."
    },
    {
        "id":  "port_15",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Concordância Verbal: Verbo Fazer com Tempo",
        "enunciado":  "O verbo FAZER, indicando tempo cronológico transcorrido ou fenômeno meteorológico, é impessoal e não flexiona para o plural. A alternativa gramaticalmente CORRETA é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Fazem dez anos que o Hospital Gaspar Vianna passou por ampliação.",
                                       "exp":  "Incorreto. Tempo decorrido: o correto é \u0027Faz dez anos\u0027."
                                   },
                             "B":  {
                                       "texto":  "Faz dois meses que a candidata Dayana iniciou sua rotina diária de simulados.",
                                       "exp":  "Correto! \u0027Faz dois meses\u0027 mantém-se no singular por indicar tempo decorrido."
                                   },
                             "C":  {
                                       "texto":  "Vão fazer três semanas que o edital foi republicado.",
                                       "exp":  "Incorreto. Na locução verbal com fazer impessoal, o auxiliar não flexiona: \u0027Vai fazer três semanas\u0027."
                                   },
                             "D":  {
                                       "texto":  "Fazem verões muito quentes na cidade de Belém durante o ano.",
                                       "exp":  "Incorreto. Fenômeno climático: o correto é \u0027Faz verões muito quentes\u0027."
                                   },
                             "E":  {
                                       "texto":  "Deverão fazer cinco dias que a remessa foi despachada.",
                                       "exp":  "Incorreto. O auxiliar fica no singular: \u0027Deverá fazer cinco dias\u0027."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Fazer com ideia de tempo decorrido NUNCA vai para o plural: \u0027Faz 10 anos\u0027, \u0027Faz 2 meses\u0027, \u0027Vai fazer 5 dias\u0027."
    },
    {
        "id":  "port_16",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Concordância Verbal: Voz Passiva Sintética",
        "enunciado":  "Quando o pronome \u0027se\u0027 atua como partícula apassivadora acompanhando verbo transitivo direto, o verbo concorda com o sujeito paciente. Indique a alternativa correta:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Organizou-se as novas pastas de prontuários médicos.",
                                       "exp":  "Incorreto. O sujeito paciente é \u0027as novas pastas\u0027 (plural), portanto o verbo deve ir ao plural: \u0027Organizaram-se as novas pastas\u0027."
                                   },
                             "B":  {
                                       "texto":  "Organizaram-se as novas pastas de prontuários médicos.",
                                       "exp":  "Correto! Voz passiva sintética: \u0027as novas pastas\u0027 é o sujeito paciente plural que faz o verbo ir para a 3ª pessoa do plural."
                                   },
                             "C":  {
                                       "texto":  "Expede-se certidões e comprovantes na recepção central.",
                                       "exp":  "Incorreto. O sujeito é \u0027certidões e comprovantes\u0027 (plural), exigindo \u0027Expedem-se\u0027."
                                   },
                             "D":  {
                                       "texto":  "Comenta-se as novas diretrizes do hospital.",
                                       "exp":  "Incorreto. Sujeito \u0027as novas diretrizes\u0027 exige \u0027Comentam-se as novas diretrizes\u0027."
                                   },
                             "E":  {
                                       "texto":  "Analisa-se minuciosamente todos os recursos impetrados.",
                                       "exp":  "Incorreto. Sujeito \u0027todos os recursos impetrados\u0027 exige \u0027Analisam-se\u0027."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "VTD + SE = Voz Passiva Sintética. O termo seguinte é o SUJEITO e com ele o verbo concorda: \u0027Vende-se casa\u0027 vs \u0027Vendem-se casas\u0027."
    },
    {
        "id":  "port_17",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Concordância Verbal: Índice de Indeterminação do Sujeito",
        "enunciado":  "Quando o verbo é transitivo indireto (VTI), intransitivo ou de ligação seguido de preposição e do pronome \u0027se\u0027, trata-se de índice de indeterminação do sujeito e o verbo permanece NO SINGULAR. Assinale o exemplo correto:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Precisam-se de novos técnicos no ambulatório da fundação.",
                                       "exp":  "Incorreto. \u0027Precisar\u0027 é VTI com preposição \u0027de\u0027; com o \u0027se\u0027 vira sujeito indeterminado e fica no singular: \u0027Precisa-se de novos técnicos\u0027."
                                   },
                             "B":  {
                                       "texto":  "Precisa-se de novos técnicos no ambulatório da fundação.",
                                       "exp":  "Correto! Verbo transitivo indireto + SE + termo preposicionado: sujeito indeterminado, verbo obrigatoriamente no singular."
                                   },
                             "C":  {
                                       "texto":  "Tratam-se de assuntos de extrema relevância institucional.",
                                       "exp":  "Incorreto. \u0027Tratar de\u0027 é VTI: o correto é \u0027Trata-se de assuntos\u0027."
                                   },
                             "D":  {
                                       "texto":  "Confiam-se em servidores qualificados e éticos.",
                                       "exp":  "Incorreto. \u0027Confiar em\u0027 é VTI: o correto é \u0027Confia-se em servidores\u0027."
                                   },
                             "E":  {
                                       "texto":  "Apelam-se para medidas de contenção de despesas.",
                                       "exp":  "Incorreto. \u0027Apelar para\u0027 é VTI: o correto é \u0027Apela-se para medidas\u0027."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "VTI + preposição + SE = Sujeito Indeterminado. O verbo NUNCA vai para o plural: \u0027Precisa-se de\u0027, \u0027Trata-se de\u0027, \u0027Necessita-se de\u0027."
    },
    {
        "id":  "port_18",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Concordância Verbal: Expressões Partitivas",
        "enunciado":  "Com expressões partitivas no sujeito (\u0027a maioria de\u0027, \u0027grande parte de\u0027, \u0027a metade de\u0027) seguidas de substantivo no plural, a norma culta prescreve que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A concordância é obrigatória apenas no singular com a palavra núcleo da expressão.",
                                       "exp":  "Incorreto. A concordância atrativa com o especificador no plural também é plenamente aceita."
                                   },
                             "B":  {
                                       "texto":  "A concordância é facultativa: pode concordar no singular com o núcleo (\u0027a maioria aprovou\u0027) ou no plural com o especificador (\u0027dos servidores aprovaram\u0027).",
                                       "exp":  "Correto! Trata-se de dupla possibilidade estilística amplamente admitida pelas bancas de concurso."
                                   },
                             "C":  {
                                       "texto":  "A concordância no singular é um erro crasso e proibido.",
                                       "exp":  "Incorreto. A concordância com o núcleo \u0027maioria\u0027 (singular) é a regra lógica primordial."
                                   },
                             "D":  {
                                       "texto":  "O verbo deve ficar obrigatoriamente no particípio passado.",
                                       "exp":  "Incorreto. O verbo conjuga-se no modo e tempo da oração."
                                   },
                             "E":  {
                                       "texto":  "A oração torna-se sem sujeito por falta de determinação do quantitativo.",
                                       "exp":  "Incorreto. O sujeito existe e é determinado."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Expressão partitiva + plural: concordância facultativa. Exemplo: \u0027A maioria dos servidores compareceu\u0027 OU \u0027A maioria dos servidores compareceram\u0027."
    },
    {
        "id":  "port_19",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Concordância Nominal: Palavras Especiais",
        "enunciado":  "Assinale a alternativa que apresenta ERRO de concordância nominal de acordo com a norma padrão:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "As cópias dos relatórios seguem anexas ao ofício encaminhado.",
                                       "exp":  "Correto gramaticalmente. O adjetivo \u0027anexo\u0027 concorda em gênero e número com o substantivo a que se refere (\u0027cópias anexas\u0027)."
                                   },
                             "B":  {
                                       "texto":  "Ela mesma redigiu o despacho e agradeceu com um \u0027muito obrigada\u0027.",
                                       "exp":  "Correto gramaticalmente. Mulher usa \u0027mesma\u0027 e \u0027obrigada\u0027."
                                   },
                             "C":  {
                                       "texto":  "A servidora estava meia cansada após o intenso plantão de atendimento.",
                                       "exp":  "Incorreto! \u0027Meio\u0027 com sentido de \u0027um pouco\u0027 é advérbio e, como tal, é palavra invariável: o correto é \u0027estava MEIO cansada\u0027."
                                   },
                             "D":  {
                                       "texto":  "Os servidores apresentaram bastantes justificativas convincentes para a chefia.",
                                       "exp":  "Correto gramaticalmente. \u0027Bastantes\u0027 funcionando como pronome adjetivo (= muitas) varia no plural."
                                   },
                             "E":  {
                                       "texto":  "Remeto em anexo os demonstrativos financeiros deste trimestre.",
                                       "exp":  "Correto gramaticalmente. A locução prepositiva \u0027em anexo\u0027 é invariável."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "\u0027Meio\u0027 modificando adjetivo significa \u0027mais ou menos/um pouco\u0027: é advérbio invariável! Não existe \u0027meia cansada\u0027 ou \u0027meia triste\u0027."
    },
    {
        "id":  "port_20",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Concordância Nominal: �‰ Proibido / �‰ Necessário",
        "enunciado":  "Em relação às expressões \u0027é proibido\u0027, \u0027é necessário\u0027 e \u0027é permitido\u0027, assinale a frase redigida de forma CORRETA:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "�‰ proibida entrada de pessoas estranhas sem autorização.",
                                       "exp":  "Incorreto. Como o substantivo \u0027entrada\u0027 não tem artigo determinante antes dele, a expressão fica no masculino neutro: \u0027�‰ proibido entrada\u0027."
                                   },
                             "B":  {
                                       "texto":  "�‰ proibida A entrada de pessoas estranhas sem autorização.",
                                       "exp":  "Correto! Quando o substantivo feminino é precedido de artigo definido (\u0027A entrada\u0027), o adjetivo concorda: \u0027�‰ proibidA a entrada\u0027."
                                   },
                             "C":  {
                                       "texto":  "�‰ necessário paciência para lidar com processos burocráticos.",
                                       "exp":  "Correto gramaticalmente também (sem artigo = masculino neutro), mas vejamos qual a melhor opção."
                                   },
                             "D":  {
                                       "texto":  "�‰ permitida circulação de pacientes desacompanhados na UTI.",
                                       "exp":  "Incorreto. Sem artigo, deve ser \u0027�‰ permitido circulação\u0027."
                                   },
                             "E":  {
                                       "texto":  "A paciência é necessário para os momentos de crise no serviço.",
                                       "exp":  "Incorreto. Havendo o artigo \u0027A paciência\u0027, deve ser \u0027é necessária\u0027."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Com artigo definido = CONCORDA: \u0027�‰ proibidA A entrada\u0027. Sem artigo definido = N�ƒO CONCORDA: \u0027�‰ proibidO entrada\u0027."
    },
    {
        "id":  "port_21",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Semântica e Classes Gramaticais: Bastante vs Bastantes",
        "enunciado":  "A palavra \u0027bastante\u0027 admite flexão de número (\u0027bastantes\u0027) quando atua como pronome indefinido adjetivo (equivalendo a \u0027muitos/muitas\u0027). Em qual alternativa o uso de \u0027bastantes\u0027 está CORRETO?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Os candidatos estavam bastantes confiantes no dia da prova.",
                                       "exp":  "Incorreto. Aqui modifica um adjetivo (\u0027confiantes\u0027), funcionando como advérbio de intensidade (= muito), logo é invariável: \u0027bastante confiantes\u0027."
                                   },
                             "B":  {
                                       "texto":  "Havia bastantes motivos para comemorar a aprovação da Dayana Maia.",
                                       "exp":  "Correto! Modifica o substantivo \u0027motivos\u0027 e equivale a \u0027muitos motivos\u0027, flexionando no plural."
                                   },
                             "C":  {
                                       "texto":  "Elas falaram bastantes durante a conferência de saúde pública.",
                                       "exp":  "Incorreto. Modifica o verbo \u0027falar\u0027, atuando como advérbio de intensidade invariável: \u0027falaram bastante\u0027."
                                   },
                             "D":  {
                                       "texto":  "As enfermeiras ficaram bastantes preocupadas com o quadro respiratório.",
                                       "exp":  "Incorreto. Modifica o adjetivo \u0027preocupadas\u0027, devendo ficar no singular: \u0027bastante preocupadas\u0027."
                                   },
                             "E":  {
                                       "texto":  "Choveu bastantes na região metropolitana de Belém nesta madrugada.",
                                       "exp":  "Incorreto. Modifica o verbo, sendo advérbio invariável."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Teste de substituição prático: troque por \u0027muito(s)\u0027. Se virar \u0027muitos/muitas\u0027, use \u0027bastantes\u0027. Se ficar \u0027muito\u0027, use \u0027bastante\u0027."
    },
    {
        "id":  "port_22",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Regência Verbal: Verbo Assistir",
        "enunciado":  "O verbo ASSISTIR, quando empregado no sentido de \u0027presenciar, ver, ser espectador\u0027, rege a preposição \u0027a\u0027 (transitivo indireto). Assinale a frase que atende a essa exigência:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O médico assistiu o paciente com dedicação e humanidade.",
                                       "exp":  "Incorreto quanto ao sentido proposto. Aqui significa \u0027prestar assistência/ajudar\u0027, regendo sem preposição (VTD)."
                                   },
                             "B":  {
                                       "texto":  "A equipe assistiu ao treinamento de segurança do trabalho no auditório.",
                                       "exp":  "Correto! Sentido de ver/presenciar: exige a preposição \u0027a\u0027 (\u0027assistiu AO treinamento\u0027)."
                                   },
                             "C":  {
                                       "texto":  "Os servidores assistiram o vídeo institucional com atenção.",
                                       "exp":  "Incorreto. No sentido de assistir a vídeo/filme, a norma culta exige \u0027assistiram AO vídeo\u0027."
                                   },
                             "D":  {
                                       "texto":  "Esse direito assiste aos cidadãos que pagam tributos.",
                                       "exp":  "Incorreto quanto ao enunciado. Aqui significa \u0027caber/pertencer a alguém\u0027."
                                   },
                             "E":  {
                                       "texto":  "O auxiliar assistiu o doente até a chegada da ambulância de suporte.",
                                       "exp":  "Incorreto. Significa socorrer/prestar socorro (transitivo direto)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Assistir: 1. Ver/presenciar = exige \u0027A\u0027 (\u0027assistir AO jogo/treinamento\u0027). 2. Socorrer/ajudar = VTD sem preposição (\u0027assistir o enfermo\u0027). 3. Caber/pertencer = exige \u0027A\u0027."
    },
    {
        "id":  "port_23",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Regência Verbal: Verbo Aspirar",
        "enunciado":  "O verbo ASPIRAR, quando utilizado no sentido de \u0027almejar, pretender, desejar como meta\u0027, é transitivo indireto e exige a preposição \u0027a\u0027. Indique a oração correta:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Dayana aspira a vaga de Auxiliar Administrativo na Fundação Gaspar Vianna.",
                                       "exp":  "Incorreto. Falta a preposição \u0027a\u0027. O correto seria \u0027aspira �€ vaga\u0027."
                                   },
                             "B":  {
                                       "texto":  "Dayana aspira à aprovação no concurso com mérito e disciplina.",
                                       "exp":  "Correto! \u0027Aspirar\u0027 a algo exige a preposição \u0027a\u0027. Preposição \u0027a\u0027 + artigo \u0027a\u0027 = crase obrigatória: \u0027aspira �€ aprovação\u0027."
                                   },
                             "C":  {
                                       "texto":  "A faxineira aspirou ao pó dos tapetes do gabinete.",
                                       "exp":  "Incorreto. No sentido de sorver/inalar ar ou pó, é VTD sem preposição: \u0027aspirou o pó\u0027."
                                   },
                             "D":  {
                                       "texto":  "Os concursados aspiram os melhores cargos da administração estadual.",
                                       "exp":  "Incorreto. No sentido de almejar, falta a preposição: \u0027aspiram AOS melhores cargos\u0027."
                                   },
                             "E":  {
                                       "texto":  "Ele aspira em conseguir estabilidade no serviço público do Pará.",
                                       "exp":  "Incorreto. A regência exige a preposição \u0027a\u0027, e não \u0027em\u0027."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Aspirar ar/perfume/pó = direto (\u0027aspirar o ar\u0027). Aspirar cargo/sucesso (almejar) = indireto com \u0027A\u0027 (\u0027aspirar AO cargo / �€ posse\u0027)."
    },
    {
        "id":  "port_24",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Regência Verbal: Verbo Visar",
        "enunciado":  "O verbo VISAR, no sentido de \u0027ter como objetivo ou finalidade\u0027, rege preposição \u0027a\u0027. Assinale a frase que atende a essa regência:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "As novas rotinas do hospital visam a melhoria contínua da atenção ao usuário.",
                                       "exp":  "Incorreto. Falta o acento grave indicativo de crase: \u0027visam �€ melhoria\u0027."
                                   },
                             "B":  {
                                       "texto":  "O projeto institucional visa ao aprimoramento dos serviços hospitalares.",
                                       "exp":  "Correto! Visar com sentido de objetivar exige a preposição \u0027a\u0027 (\u0027visa AO aprimoramento\u0027)."
                                   },
                             "C":  {
                                       "texto":  "O gerente visou o passaporte e o documento de identidade.",
                                       "exp":  "Incorreto quanto ao foco da questão. No sentido de assinar/pôr visto, é VTD."
                                   },
                             "D":  {
                                       "texto":  "O atirador visou o alvo com precisão cirúrgica.",
                                       "exp":  "Incorreto. No sentido de mirar, é VTD sem preposição."
                                   },
                             "E":  {
                                       "texto":  "As portarias visam beneficiar diretamente os pacientes crônicos.",
                                       "exp":  "Incorreto para a pergunta, pois seguido de verbo não há preposição explícita."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Visar: 1. Mirar ou pôr visto = VTD (\u0027visar o cheque/o alvo\u0027). 2. Ter como meta/objetivo = VTI com \u0027A\u0027 (\u0027visar AO sucesso\u0027)."
    },
    {
        "id":  "port_25",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Regência Verbal: Verbos Ir e Chegar",
        "enunciado":  "De acordo com a norma culta, os verbos que indicam movimento e deslocamento a um destino (como \u0027ir\u0027 e \u0027chegar\u0027) regem a preposição:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Em\u0027, como em \u0027Chegamos no hospital com vinte minutos de antecedência\u0027.",
                                       "exp":  "Incorreto. O uso da preposição \u0027em\u0027 com verbos de movimento é comum na linguagem coloquial, mas reprovado na norma culta."
                                   },
                             "B":  {
                                       "texto":  "\u0027A\u0027, como em \u0027Chegamos ao hospital com vinte minutos de antecedência\u0027.",
                                       "exp":  "Correto! Verbos de movimento (ir, chegar, retornar) exigem a preposição \u0027a\u0027: \u0027chegar A algum lugar\u0027."
                                   },
                             "C":  {
                                       "texto":  "\u0027Para\u0027, obrigatoriamente em qualquer situação de deslocamento diário.",
                                       "exp":  "Incorreto. \u0027Para\u0027 indica destino definitivo ou de longa permanência."
                                   },
                             "D":  {
                                       "texto":  "\u0027De\u0027, indicando origem no lugar em que se chega.",
                                       "exp":  "Incorreto. \u0027De\u0027 indica proveniência/saída, não chegada."
                                   },
                             "E":  {
                                       "texto":  "Nenhuma preposição, pois são verbos transitivos diretos.",
                                       "exp":  "Incorreto. São verbos intransitivos que exigem adjunto adverbial de lugar regido de preposição."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Cuidado com o vício da fala: não se diz \u0027cheguei no hospital\u0027, mas sim \u0027cheguei AO hospital\u0027. Quem vai, vai A algum lugar."
    },
    {
        "id":  "port_26",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Regência Verbal: Verbo Preferir",
        "enunciado":  "O verbo PREFERIR é bitransitivo: quem prefere, prefere uma coisa A outra. �‰ proibido pela norma culta o uso de \u0027do que\u0027 ou de termos intensificadores (\u0027mais\u0027, \u0027mil vezes\u0027). Assinale a frase correta:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Dayana prefere mais estudar à noite do que pela manhã.",
                                       "exp":  "Incorreto. São erros comuns o reforço \u0027mais\u0027 e a expressão comparativa \u0027do que\u0027."
                                   },
                             "B":  {
                                       "texto":  "Dayana prefere mil vezes a aprovação do que a reprovação.",
                                       "exp":  "Incorreto. Intensificador \u0027mil vezes\u0027 e \u0027do que\u0027 são vetados na norma padrão."
                                   },
                             "C":  {
                                       "texto":  "A candidata prefere a estabilidade do serviço público à insegurança da iniciativa privada.",
                                       "exp":  "Correto! \u0027Prefere X (objeto direto) A Y (objeto indireto com crase porque se refere a palavra feminina com artigo)\u0027."
                                   },
                             "D":  {
                                       "texto":  "Preferimos antes o diálogo do que a imposição autoritária.",
                                       "exp":  "Incorreto. \u0027Antes\u0027 e \u0027do que\u0027 violam a regência clássica do verbo preferir."
                                   },
                             "E":  {
                                       "texto":  "Prefiro estudar direito do que matemática e estatística.",
                                       "exp":  "Incorreto. O correto seria \u0027Prefiro estudar direito A matemática\u0027."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Fórmula do verbo Preferir: Prefere [algo] A [outro]. Nunca use \u0027mais\u0027, \u0027antes\u0027 ou \u0027do que\u0027!"
    },
    {
        "id":  "port_27",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Crase: Casos Proibidos",
        "enunciado":  "O acento grave indicativo de crase é TOTALMENTE PROIBIDO na seguinte frase:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O paciente retornou à consulta agendada pelo médico titular.",
                                       "exp":  "Incorreto. Aqui a crase é obrigatória (\u0027retornou A + A consulta\u0027)."
                                   },
                             "B":  {
                                       "texto":  "O Auxiliar Administrativo começou a organizar as fichas cadastrais do arquivo.",
                                       "exp":  "Correto! �‰ terminantemente PROIBIDO usar crase antes de verbos (\u0027começou a organizar\u0027)."
                                   },
                             "C":  {
                                       "texto":  "Entregamos as requisições de exames à enfermeira-chefe do plantão.",
                                       "exp":  "Incorreto. Crase obrigatória diante de palavra feminina especificada com artigo."
                                   },
                             "D":  {
                                       "texto":  "As ambulâncias chegaram pontualmente às três horas da madrugada.",
                                       "exp":  "Incorreto. Crase obrigatória em indicação de horas exatas (\u0027às 15 horas\u0027)."
                                   },
                             "E":  {
                                       "texto":  "A direção reuniu-se à tarde para deliberar sobre a escala natalina.",
                                       "exp":  "Incorreto. Crase obrigatória em locução adverbial feminina de tempo (\u0027à tarde\u0027, \u0027à noite\u0027)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Crase antes de VERBO = ERRO FATAL! Nunca ocorre crase antes de verbo, palavra masculina, pronomes pessoais e palavras repetidas (\u0027frente a frente\u0027)."
    },
    {
        "id":  "port_28",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Crase: Casos Obrigatórios",
        "enunciado":  "Assinale a frase em que o uso do acento indicador de crase é OBRIGAT�“RIO:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Fui a pé até a farmácia central do hospital.",
                                       "exp":  "Incorreto. \u0027A pé\u0027 é expressão masculina, sem crase."
                                   },
                             "B":  {
                                       "texto":  "O motorista conduziu a viatura a uma velocidade prudente.",
                                       "exp":  "Incorreto. Diante do artigo indefinido \u0027uma\u0027 não há crase."
                                   },
                             "C":  {
                                       "texto":  "O plantão médico terá início às 19h com a passagem de leitos.",
                                       "exp":  "Correto! A indicação de horas exatas e determinadas exige obrigatoriamente o acento grave indicativo de crase (\u0027às 19h\u0027)."
                                   },
                             "D":  {
                                       "texto":  "Ela não revelou o segredo a ninguém daquela equipe.",
                                       "exp":  "Incorreto. \u0027Ninguém\u0027 é pronome indefinido, sem crase."
                                   },
                             "E":  {
                                       "texto":  "Os servidores ficaram cara a cara durante o debate interno.",
                                       "exp":  "Incorreto. Expressões de palavras repetidas não admitem crase."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Horas exatas (\u0027às 8h\u0027, \u0027às 19h30\u0027) e locuções adverbiais femininas (\u0027à tarde\u0027, \u0027à noite\u0027, \u0027à esquerda\u0027, \u0027às claras\u0027) sempre levam crase!"
    },
    {
        "id":  "port_29",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Crase: Casos Facultativos",
        "enunciado":  "O uso do acento indicativo de crase é FACULTATIVO (pode ser usado ou dispensado sem incorreção) em:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Enviei o comunicado à Maria / Enviei o comunicado a Maria.",
                                       "exp":  "Correto! Diante de nomes próprios femininos, o uso do artigo é facultativo, tornando a ocorrência de crase também facultativa."
                                   },
                             "B":  {
                                       "texto":  "Assistimos à cirurgia de emergência.",
                                       "exp":  "Incorreto. Crase estritamente obrigatória por regência verbal e presença de artigo definido."
                                   },
                             "C":  {
                                       "texto":  "O servidor solicitou dispensa a diretora de recursos humanos.",
                                       "exp":  "Incorreto. Falta a crase obrigatória (\u0027solicitou dispensa �€ diretora\u0027)."
                                   },
                             "D":  {
                                       "texto":  "Dirigiu-se a cavalo ao posto avançado de saúde.",
                                       "exp":  "Incorreto. Antes de palavra masculina a crase é terminantemente proibida."
                                   },
                             "E":  {
                                       "texto":  "Ficamos frente a frente com os membros da comissão de avaliação.",
                                       "exp":  "Incorreto. Entre palavras repetidas a crase é proibida."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Mnemônico dos casos facultativos de crase: \u0027N@T@\u0027 -\u003e Nome próprio feminino, Até (preposição) e Tua/minha/sua (pronome possessivo feminino singular)."
    },
    {
        "id":  "port_30",
        "disciplina":  "portugues",
        "materia_nome":  "Língua Portuguesa",
        "topico":  "Pontuação: Emprego Proibido da Vírgula",
        "enunciado":  "De acordo com os preceitos de sintaxe e pontuação da língua padrão, é TERMINANTEMENTE PROIBIDO empregar a vírgula para separar:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O sujeito de seu respectivo predicado.",
                                       "exp":  "Correto! Jamais se separa o sujeito do predicado por vírgula (ex.: \u0027A servidora Dayana [SEM VÍRGULA] protocolou o ofício\u0027)."
                                   },
                             "B":  {
                                       "texto":  "Orações coordenadas adversativas introduzidas por \u0027mas\u0027.",
                                       "exp":  "Incorreto. A vírgula antes de \u0027mas\u0027 e conjunções adversativas é obrigatória."
                                   },
                             "C":  {
                                       "texto":  "Elementos de mesma função sintática dispostos em enumeração.",
                                       "exp":  "Incorreto. A vírgula é obrigatória para separar elementos enumerados."
                                   },
                             "D":  {
                                       "texto":  "O vocativo no início ou no meio da frase.",
                                       "exp":  "Incorreto. O vocativo deve vir sempre isolado por vírgula(s)."
                                   },
                             "E":  {
                                       "texto":  "O aposto explicativo intercalado no período.",
                                       "exp":  "Incorreto. O aposto explicativo deve vir isolado entre vírgulas."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Regra número 1 da pontuação: NUNCA separe por vírgula o Sujeito do Verbo nem o Verbo de seus Complementos (Objeto Direto e Indireto)!"
    },
    {
        "id":  "leg_01",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - �‚mbito de Aplicação do RJU",
        "enunciado":  "A Lei Estadual nº 5.810/1994 institui o Regime Jurídico �šnico dos servidores públicos civis do Estado do Pará. O seu regime aplica-se obrigatoriamente aos servidores de quais entidades estaduais?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Apenas aos servidores dos órgãos da Administração Direta do Poder Executivo.",
                                       "exp":  "Incorreto. Aplica-se aos três Poderes e também a autarquias e fundações públicas."
                                   },
                             "B":  {
                                       "texto":  "Da Administração Direta, das Autarquias e das Fundações Públicas dos Poderes Executivo, Legislativo e Judiciário.",
                                       "exp":  "Correto! Conforme o art. 1º da Lei 5.810/94, o estatuto abrange os servidores civis da Administração Direta, Autarquias e Fundações Públicas de todos os Poderes do Estado do Pará."
                                   },
                             "C":  {
                                       "texto":  "Exclusivamente aos empregados das Sociedades de Economia Mista estaduais, como o Banpará.",
                                       "exp":  "Incorreto. Empregados de empresas públicas e sociedades de economia mista são regidos pela CLT (celetistas)."
                                   },
                             "D":  {
                                       "texto":  "Aos policiais militares e bombeiros militares estaduais.",
                                       "exp":  "Incorreto. Os militares estaduais possuem estatuto militar próprio e normas específicas."
                                   },
                             "E":  {
                                       "texto":  "Apenas aos ocupantes de cargos em comissão de livre nomeação e exoneração.",
                                       "exp":  "Incorreto. Aplica-se precipuamente aos cargos de provimento efetivo e, no que couber, aos comissionados."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Art. 1º da Lei 5.810/94: o RJU rege os servidores públicos civis da Administração Direta, Autarquias e Fundações Públicas do Estado do Pará."
    },
    {
        "id":  "leg_02",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Provimento Originário",
        "enunciado":  "No Regime Jurídico �šnico do Pará (Lei 5.810/94), a investidura em cargo público ocorre com a posse, mas o provimento originário dá-se por meio de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Promoção funcional.",
                                       "exp":  "Incorreto. A promoção é forma de provimento derivado, pressupondo vínculo anterior na carreira."
                                   },
                             "B":  {
                                       "texto":  "Nomeação.",
                                       "exp":  "Correto! A nomeação é a �šNICA forma de provimento originário (inicial) prevista na Lei 5.810/94 e na Constituição."
                                   },
                             "C":  {
                                       "texto":  "Reintegração.",
                                       "exp":  "Incorreto. Reintegração é provimento derivado do servidor demitido ilegalmente."
                                   },
                             "D":  {
                                       "texto":  "Readaptação.",
                                       "exp":  "Incorreto. Readaptação é provimento derivado por limitação de capacidade física/mental."
                                   },
                             "E":  {
                                       "texto":  "Reversão.",
                                       "exp":  "Incorreto. Reversão é provimento derivado do aposentado que retorna à atividade."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Provimento originário = Nomeação (abre o vínculo pela primeira vez). Todas as demais (promoção, reintegração, reversão, readaptação, recondução) são derivadas."
    },
    {
        "id":  "leg_03",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Validade do Concurso Público",
        "enunciado":  "Nos termos do art. 13 da Lei Estadual nº 5.810/1994 e do art. 37, III da Constituição Federal, o prazo de validade do concurso público será de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Até 1 ano, improrrogável.",
                                       "exp":  "Incorreto. O prazo máximo legal é de até 2 anos."
                                   },
                             "B":  {
                                       "texto":  "Até 2 anos, podendo ser prorrogado uma única vez, por igual período.",
                                       "exp":  "Correto! Prazo constitucional e estatutário clássico: validade de até 2 anos, prorrogável uma vez por igual período a critério da administração."
                                   },
                             "C":  {
                                       "texto":  "Exatamente 4 anos obrigatórios e sem necessidade de prorrogação.",
                                       "exp":  "Incorreto. Não existe prazo inicial direto de 4 anos."
                                   },
                             "D":  {
                                       "texto":  "Até 5 anos, prorrogável por quantas vezes a autoridade julgar conveniente.",
                                       "exp":  "Incorreto. A prorrogação só pode ocorrer uma única vez e o prazo inicial é no máximo de 2 anos."
                                   },
                             "E":  {
                                       "texto":  "Prazo indeterminado enquanto houver candidatos aprovados no cadastro de reserva.",
                                       "exp":  "Incorreto. O concurso com validade indeterminada é vedado pela Constituição."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Validade do concurso: até 2 anos, prorrogável uma vez por igual período (regra áurea do subitem 14 e da CF/88)."
    },
    {
        "id":  "leg_04",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Prazos de Posse e Exercício",
        "enunciado":  "Após a publicação do ato de nomeação no Diário Oficial do Estado do Pará (DOE), o candidato aprovado tem o prazo legal para tomar POSSE de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "15 (quinze) dias improrrogáveis.",
                                       "exp":  "Incorreto. O prazo para a posse é de 30 dias."
                                   },
                             "B":  {
                                       "texto":  "30 (trinta) dias, contados da publicação oficial, prorrogáveis por mais 15 dias a requerimento justificado.",
                                       "exp":  "Correto! Conforme o art. 19 da Lei 5.810/94, a posse verificar-se-á no prazo de até 30 dias contados da publicação do ato de provimento, prorrogável por mais 15 dias."
                                   },
                             "C":  {
                                       "texto":  "5 (cinco) dias úteis após os exames médicos.",
                                       "exp":  "Incorreto. Prazo muito exíguo e sem previsão na lei paraense."
                                   },
                             "D":  {
                                       "texto":  "60 (sessenta) dias corridos automaticamente concedidos.",
                                       "exp":  "Incorreto. O prazo é de 30 dias prorrogável por 15."
                                   },
                             "E":  {
                                       "texto":  "90 (noventa) dias a contar da homologação do concurso.",
                                       "exp":  "Incorreto. A contagem inicia-se com a nomeação no DOE, e não com a homologação."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Prazos clássicos RJU Pará (Lei 5.810/94): Nomeação -\u003e Posse: 30 dias (prorrogável por +15 dias). Posse -\u003e Exercício: até 15 dias."
    },
    {
        "id":  "leg_05",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Estágio Probatório e Fatores de Avaliação",
        "enunciado":  "Ao entrar em exercício em cargo de provimento efetivo, a servidora Dayana cumprirá estágio probatório de 3 (três) anos. Dentre os fatores avaliados no estágio probatório segundo a Lei 5.810/94, N�ƒO se inclui:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Assiduidade e pontualidade.",
                                       "exp":  "Incorreto como resposta, pois a assiduidade e a pontualidade S�ƒO expressamente avaliadas."
                                   },
                             "B":  {
                                       "texto":  "Disciplina e capacidade de iniciativa.",
                                       "exp":  "Incorreto como resposta, pois disciplina e iniciativa S�ƒO fatores avaliados."
                                   },
                             "C":  {
                                       "texto":  "Produtividade e responsabilidade.",
                                       "exp":  "Incorreto como resposta, pois produtividade e responsabilidade S�ƒO fatores de avaliação estatutária."
                                   },
                             "D":  {
                                       "texto":  "Filiação político-partidária e adesão ideológica à gestão do governo.",
                                       "exp":  "Correto! �‰ vedado qualquer critério político-partidário ou ideológico; a avaliação de desempenho é estritamente técnica, ética e funcional."
                                   },
                             "E":  {
                                       "texto":  "Eficiência e idoneidade moral.",
                                       "exp":  "Incorreto como resposta, pois integram os requisitos essenciais de aptidão funcional."
                                   }
                         },
        "correta":  "D",
        "comentarioGeral":  "Fatores do Estágio Probatório: assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade. Nenhum vínculo político é exigido!"
    },
    {
        "id":  "leg_06",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 e CF/88 - Estabilidade Funcional",
        "enunciado":  "De acordo com o art. 41 da CF/88 (redação dada pela EC nº 19/98) e a Lei Estadual nº 5.810/1994, são estáveis após quanto tempo de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "1 (um) ano.",
                                       "exp":  "Incorreto. Prazo inexistente no regime constitucional atual."
                                   },
                             "B":  {
                                       "texto":  "2 (dois) anos.",
                                       "exp":  "Incorreto. Dois anos era a redação original de 1988, revogada pela Emenda Constitucional nº 19/98."
                                   },
                             "C":  {
                                       "texto":  "3 (três) anos, condicionada à prévia aprovação em avaliação especial de desempenho.",
                                       "exp":  "Correto! O servidor adquire estabilidade após 3 anos de efetivo exercício, exigindo-se obrigatoriamente a aprovação em avaliação especial de desempenho."
                                   },
                             "D":  {
                                       "texto":  "5 (cinco) anos ininterruptos sem licenças.",
                                       "exp":  "Incorreto. O prazo constitucional de estabilidade é de 3 anos."
                                   },
                             "E":  {
                                       "texto":  "10 (dez) anos de serviço público contínuo.",
                                       "exp":  "Incorreto. Confunde com o antigo requisito de estabilidade excepcional do art. 19 do ADCT."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Requisitos da Estabilidade: 1) Nomeação em cargo efetivo por concurso público; 2) 3 anos de efetivo exercício; 3) Avaliação especial de desempenho por comissão instituída."
    },
    {
        "id":  "leg_07",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Reintegração",
        "enunciado":  "A reintegração é o reingresso do servidor no cargo anteriormente ocupado, decorrente de invalidação de sua demissão por decisão administrativa ou judicial. Nos termos da Lei 5.810/94, a reintegração ocorrerá:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Sem qualquer direito a ressarcimento dos vencimentos do período de afastamento.",
                                       "exp":  "Incorreto. A reintegração é SEMPRE com ressarcimento integral de todas as vantagens devidas."
                                   },
                             "B":  {
                                       "texto":  "Com ressarcimento de todas as vantagens e direitos inerentes ao cargo que deixou de receber.",
                                       "exp":  "Correto! A reintegração restaura o status quo ante com pagamento integral retroativo dos vencimentos e contagem de tempo de serviço."
                                   },
                             "C":  {
                                       "texto":  "Com perda imediata da estabilidade anteriormente conquistada.",
                                       "exp":  "Incorreto. A estabilidade do servidor permanece hígida."
                                   },
                             "D":  {
                                       "texto":  "Exclusivamente em cargo de hierarquia inferior ao que ocupava.",
                                       "exp":  "Incorreto. O servidor retorna ao mesmo cargo que ocupava (ou ao resultante de transformação)."
                                   },
                             "E":  {
                                       "texto":  "Apenas se o cargo ainda estiver desocupado, sendo exonerado caso haja outro titular.",
                                       "exp":  "Incorreto. Se o cargo estiver ocupado, o eventual ocupante é reconduzido, aproveitado ou posto em disponibilidade, e o reintegrado assume o cargo."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Macete: Reintegração = Reparação do Erro. Demissão anulada gera volta ao cargo COM RESSARCIMENTO INTEGRAL de tudo o que deixou de ganhar!"
    },
    {
        "id":  "leg_08",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Reversão",
        "enunciado":  "O retorno à atividade funcional do servidor que se encontrava aposentado por incapacidade permanente (invalidez), após junta médica oficial atestar que cessaram os motivos da incapacidade, denomina-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Readaptação.",
                                       "exp":  "Incorreto. Readaptação é mudança para cargo compatível com nova limitação física do servidor em atividade."
                                   },
                             "B":  {
                                       "texto":  "Reversão.",
                                       "exp":  "Correto! \u0027Reversão é o retorno do aposentado ao serviço ativo\u0027 (art. 35 da Lei 5.810/94)."
                                   },
                             "C":  {
                                       "texto":  "Recondução.",
                                       "exp":  "Incorreto. Recondução é o retorno do servidor estável ao cargo anteriormente ocupado."
                                   },
                             "D":  {
                                       "texto":  "Reintegração.",
                                       "exp":  "Incorreto. Reintegração decorre de invalidação judicial/administrativa de demissão."
                                   },
                             "E":  {
                                       "texto":  "Aproveitamento.",
                                       "exp":  "Incorreto. Aproveitamento é o retorno do servidor que estava em disponibilidade."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Mnemônico: Reversão = Retorno do Velhinho / Retorno do Aposentado (a junta médica atesta que ele sarou e ele reverte à ativa)."
    },
    {
        "id":  "leg_09",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Readaptação",
        "enunciado":  "Um servidor que sofreu redução parcial em sua capacidade física ou mental, atestada por perícia médica oficial, sendo investido em outro cargo com atribuições e responsabilidades compatíveis com sua limitação, passará por:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Exoneração por perda de aptidão funcional.",
                                       "exp":  "Incorreto. A lei veda a exoneração arbitrária e garante a adaptação a novas funções."
                                   },
                             "B":  {
                                       "texto":  "Readaptação.",
                                       "exp":  "Correto! Art. 37 da Lei 5.810/94: \u0027Readaptação é a investidura do servidor em cargo de atribuições e responsabilidades compatíveis com a limitação que tenha sofrido em sua capacidade física ou mental\u0027."
                                   },
                             "C":  {
                                       "texto":  "Demissão a bem do serviço público.",
                                       "exp":  "Incorreto. Demissão é punição para faltas graves, nunca para adoecimento."
                                   },
                             "D":  {
                                       "texto":  "Aposentadoria compulsória aos 75 anos de idade.",
                                       "exp":  "Incorreto. Aposentadoria compulsória ocorre por limite de idade, e não por limitação temporária ou parcial."
                                   },
                             "E":  {
                                       "texto":  "Suspensão temporária sem remuneração.",
                                       "exp":  "Incorreto. O servidor continua trabalhando e recebendo seus proventos regulares."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Readaptação: o servidor em atividade sofre uma limitação física ou mental e é readaptado em cargo compatível sem redução de vencimentos."
    },
    {
        "id":  "leg_10",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Recondução",
        "enunciado":  "A recondução é o retorno do servidor estável ao cargo anteriormente ocupado. Conforme a Lei 5.810/94, a recondução decorrerá de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Inabilitação em estágio probatório relativo a outro cargo público ou reintegração do anterior ocupante.",
                                       "exp":  "Correto! Se o servidor estável presta novo concurso e não passa no estágio probatório do novo cargo, ou se o antigo titular do cargo é reintegrado, ele é reconduzido ao seu cargo de origem."
                                   },
                             "B":  {
                                       "texto":  "Vontade unilateral do chefe imediato sem motivação expressa.",
                                       "exp":  "Incorreto. A recondução é vinculada às hipóteses estritas da lei e da CF."
                                   },
                             "C":  {
                                       "texto":  "Punição disciplinar por reincidência em faltas leves.",
                                       "exp":  "Incorreto. A recondução não é sanção disciplinar."
                                   },
                             "D":  {
                                       "texto":  "Cessação dos efeitos de uma licença médica não remunerada.",
                                       "exp":  "Incorreto. O término de licença é simples reassunção do exercício do mesmo cargo."
                                   },
                             "E":  {
                                       "texto":  "Ato discricionário do Governador do Estado.",
                                       "exp":  "Incorreto. �‰ direito subjetivo do servidor estável amparado pelo ordenamento."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Recondução = Retorno do estável ao cargo anterior: por reprovação no estágio do novo cargo OU pela reintegração do antigo dono da vaga."
    },
    {
        "id":  "leg_11",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Disponibilidade e Aproveitamento",
        "enunciado":  "Extinto o cargo público ou declarada a sua desnecessidade pelo Estado do Pará, o servidor estável ficará:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Automaticamente demitido sem direito a qualquer indenização.",
                                       "exp":  "Incorreto. A estabilidade impede a perda sumária do vínculo por mera extinção do cargo."
                                   },
                             "B":  {
                                       "texto":  "Em disponibilidade remunerada proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo.",
                                       "exp":  "Correto! Art. 40 da Lei 5.810/94 e art. 41, § 3º da CF: fica em disponibilidade com remuneração proporcional ao tempo de serviço até o aproveitamento."
                                   },
                             "C":  {
                                       "texto":  "Obrigado a prestar novo concurso público em 30 dias.",
                                       "exp":  "Incorreto. O servidor já é estável; cabe à administração aproveitá-lo."
                                   },
                             "D":  {
                                       "texto":  "Em licença sem vencimentos por tempo indeterminado.",
                                       "exp":  "Incorreto. A disponibilidade é remunerada pelo Estado."
                                   },
                             "E":  {
                                       "texto":  "Rebaixado de classe funcional sem direito a recurso.",
                                       "exp":  "Incorreto. Viola a estabilidade financeira e a vedação ao retrocesso funcional."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Cargo extinto? O estável vai para a DISPONIBILIDADE (remunerada proporcionalmente) até ser APROVEITADO em cargo afim."
    },
    {
        "id":  "leg_12",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Vacância do Cargo Público",
        "enunciado":  "Vacância é o ato pelo qual o cargo público fica vago, desocupado. Constituem formas de vacância previstas no RJU do Pará, EXCETO:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Exoneração.",
                                       "exp":  "Incorreto como resposta, pois a exoneração (a pedido ou de ofício) gera vacância do cargo."
                                   },
                             "B":  {
                                       "texto":  "Demissão e Falecimento.",
                                       "exp":  "Incorreto como resposta, pois ambas desocupam o cargo e geram vacância."
                                   },
                             "C":  {
                                       "texto":  "Aposentadoria e Posse em outro cargo inacumulável.",
                                       "exp":  "Incorreto como resposta, pois ambas esvaziam a titularidade e geram vacância."
                                   },
                             "D":  {
                                       "texto":  "Promoção e Readaptação.",
                                       "exp":  "Incorreto como resposta, pois ao subir de classe ou readaptar-se o cargo de origem torna-se vago."
                                   },
                             "E":  {
                                       "texto":  "Remoção de setor a pedido do servidor.",
                                       "exp":  "Correto! A remoção é mero deslocamento do servidor no âmbito do mesmo quadro, mantendo-se ocupado o seu mesmo cargo público (não gera vacância de cargo)."
                                   }
                         },
        "correta":  "E",
        "comentarioGeral":  "Pegadinha clássica: Remoção, redistribuição e cessão N�ƒO são formas de vacância de cargo! O servidor continua no seu cargo, apenas muda de local."
    },
    {
        "id":  "leg_13",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Vencimento vs Remuneração",
        "enunciado":  "De acordo com os conceitos estabelecidos na Lei 5.810/94, diferenciam-se \u0027Vencimento\u0027 e \u0027Remuneração\u0027. �‰ correto afirmar que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Vencimento e remuneração são sinônimos perfeitos sem qualquer distinção técnica.",
                                       "exp":  "Incorreto. Há nítida distinção conceitual e jurídica entre os dois termos."
                                   },
                             "B":  {
                                       "texto":  "Vencimento é a retribuição pecuniária básica fixada em lei; já a Remuneração é o vencimento acrescido das vantagens permanentes.",
                                       "exp":  "Correto! Vencimento básico (no singular) é o valor fixado em lei para o padrão do cargo. Remuneração é o vencimento somado a gratificações e adicionais permanentes."
                                   },
                             "C":  {
                                       "texto":  "A remuneração pode ser inferior ao salário mínimo nacional legalmente fixado.",
                                       "exp":  "Incorreto. A Constituição veda expressamente remuneração total inferior ao salário mínimo."
                                   },
                             "D":  {
                                       "texto":  "O vencimento básico pode ser reduzido discricionariamente por portaria da diretoria da fundação.",
                                       "exp":  "Incorreto. O vencimento goza do princípio constitucional da irredutibilidade."
                                   },
                             "E":  {
                                       "texto":  "A remuneração básica é calculada sobre as diárias de viagens eventuais.",
                                       "exp":  "Incorreto. Diárias são verbas indenizatórias esporádicas e não integram a remuneração ordinária."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Diferença vital: Vencimento = valor básico da tabela da lei. Remuneração = vencimento básico + adicionais e gratificações (o contracheque total)."
    },
    {
        "id":  "leg_14",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Adicionais de Insalubridade e Periculosidade",
        "enunciado":  "Sobre os adicionais devidos aos servidores que executam atividades em condições penosas, insalubres ou perigosas no âmbito do Estado do Pará, a legislação estabelece que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O servidor pode acumular integralmente os adicionais de insalubridade e periculosidade sobre a mesma jornada.",
                                       "exp":  "Incorreto. �‰ vedada a cumulação dos dois adicionais; o servidor deve optar por um deles."
                                   },
                             "B":  {
                                       "texto":  "O servidor que fizer jus aos adicionais de insalubridade e de periculosidade deverá optar por um deles.",
                                       "exp":  "Correto! Regra expressa da Lei 5.810/94 e da legislação administrativa geral: veda-se o recebimento cumulativo, cabendo a opção pelo mais vantajoso."
                                   },
                             "C":  {
                                       "texto":  "O adicional de insalubridade é concedido de forma definitiva e vitalícia, mesmo após cessar o contato com o risco.",
                                       "exp":  "Incorreto. �‰ vantagem propter laborem: cessando o risco ou risco eliminado por EPI, cessa o pagamento."
                                   },
                             "D":  {
                                       "texto":  "A servidora gestante é obrigada a continuar em setor de alto risco radiológico sem remanejamento.",
                                       "exp":  "Incorreto. A gestante ou lactante deve ser imediatamente afastada das áreas de insalubridade e periculosidade."
                                   },
                             "E":  {
                                       "texto":  "O adicional incide sobre todas as gratificações de chefia recebidas pelo servidor.",
                                       "exp":  "Incorreto. �‰ calculado sobre a base legal fixada no estatuto, sem efeito cascata."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Insalubridade x Periculosidade: N�ƒO se acumulam! O servidor escolhe um dos dois. Além disso, cessou a exposição ao perigo/agente, o adicional é cortado."
    },
    {
        "id":  "leg_15",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Direito a Férias",
        "enunciado":  "Conforme a Lei Estadual nº 5.810/1994, o servidor público estadual adquire direito a 30 (trinta) dias consecutivos de férias após cada período de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "6 (seis) meses de efetivo exercício, podendo acumular até cinco períodos.",
                                       "exp":  "Incorreto. O período aquisitivo é de 12 meses."
                                   },
                             "B":  {
                                       "texto":  "12 (doze) meses de efetivo exercício, sendo proibida a acumulação de mais de 2 (dois) períodos.",
                                       "exp":  "Correto! Exige-se 12 meses de efetivo exercício para o primeiro período aquisitivo e a lei veda expressamente acumular mais de 2 períodos."
                                   },
                             "C":  {
                                       "texto":  "24 (vinte e quatro) meses contínuos sem faltas justificadas.",
                                       "exp":  "Incorreto. As férias são anuais (12 meses)."
                                   },
                             "D":  {
                                       "texto":  "Qualquer prazo fixado pelo sindicato dos servidores da saúde.",
                                       "exp":  "Incorreto. O direito a férias é regido por lei de ordem pública estatutária."
                                   },
                             "E":  {
                                       "texto":  "18 meses, com pagamento de gratificação apenas no término do usufruto.",
                                       "exp":  "Incorreto. O terço constitucional de férias é pago antecipadamente."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Férias no RJU Pará: 30 dias após 12 meses de efetivo exercício. �‰ vedada a acumulação por mais de dois anos consecutivos (máximo 2 períodos acumulados por necessidade de serviço)."
    },
    {
        "id":  "leg_16",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Licença Maternidade e Paternidade",
        "enunciado":  "No âmbito dos servidores públicos estaduais do Pará, a servidora gestante tem direito à licença-maternidade remunerada pelo período de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "90 (noventa) dias corridos.",
                                       "exp":  "Incorreto. Prazo desatualizado e inferior à CLT."
                                   },
                             "B":  {
                                       "texto":  "120 (cento e vinte) dias, vedada qualquer prorrogação.",
                                       "exp":  "Incorreto. No Estado do Pará a prorrogação para 180 dias é regulamentada para as servidoras públicas."
                                   },
                             "C":  {
                                       "texto":  "180 (cento e oitenta) dias consecutivos, sem prejuízo da remuneração e da carreira.",
                                       "exp":  "Correto! O Estado do Pará aderiu ao Programa Cidadã garantindo 180 dias (6 meses) de licença-maternidade às suas servidoras públicas."
                                   },
                             "D":  {
                                       "texto":  "365 (trezentos e sessenta e cinco) dias integrais.",
                                       "exp":  "Incorreto. Não existe licença de um ano completo."
                                   },
                             "E":  {
                                       "texto":  "60 (sessenta) dias prorrogáveis apenas se houver gêmeos.",
                                       "exp":  "Incorreto. A garantia de 180 dias é geral para o parto ou adoção."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Licença à gestante no serviço público estadual do Pará: 180 dias consecutivos sem prejuízo do vencimento integral e vantagens."
    },
    {
        "id":  "leg_17",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Licença Prêmio por Assiduidade",
        "enunciado":  "A licença-prêmio por assiduidade, benefício previsto na Lei Estadual nº 5.810/1994 concedido ao servidor que não sofrer penalidades disciplinares graves nem faltas injustificadas, confere o direito a:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "1 mês de folga a cada 1 ano trabalhado.",
                                       "exp":  "Incorreto. A proporção é de 3 meses a cada quinquênio (5 anos)."
                                   },
                             "B":  {
                                       "texto":  "3 (três) meses de afastamento remunerado a cada quinquênio (5 anos) de efetivo exercício.",
                                       "exp":  "Correto! Conforme o art. 98 da Lei 5.810/94, após cada quinquênio ininterrupto de efetivo serviço prestado ao Estado, o servidor tem direito a 3 meses de licença-prêmio com remuneração integral."
                                   },
                             "C":  {
                                       "texto":  "Aposentadoria imediata independente de tempo de contribuição previdenciária.",
                                       "exp":  "Incorreto. Licença-prêmio não é causa de aposentadoria imediata."
                                   },
                             "D":  {
                                       "texto":  "Dispensa perpétua do cumprimento de horas extraordinárias.",
                                       "exp":  "Incorreto. Não guarda relação com banco de horas."
                                   },
                             "E":  {
                                       "texto":  "15 dias de descanso a cada semestre letivo.",
                                       "exp":  "Incorreto. O período aquisitivo é de 5 anos (quinquênio)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Licença-prêmio no Pará (Lei 5.810/94): 3 meses de repouso remunerado a cada 5 anos (quinquênio) de efetivo exercício sem faltas desabonadoras."
    },
    {
        "id":  "leg_18",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Licença para Tratar de Interesses Particulares",
        "enunciado":  "Sobre a Licença para Tratar de Interesses Particulares (LIP) prevista na Lei Estadual nº 5.810/1994, é CORRETO afirmar que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Pode ser concedida a servidor que ainda esteja cumprindo o estágio probatório.",
                                       "exp":  "Incorreto. Exige-se que o servidor já seja ESTÁVEL no cargo."
                                   },
                             "B":  {
                                       "texto":  "O servidor continuará recebendo sua remuneração integral depositada pelo Estado.",
                                       "exp":  "Incorreto. A licença para tratar de interesses particulares é estritamente SEM REMUNERA�‡�ƒO."
                                   },
                             "C":  {
                                       "texto":  "�‰ concedida a critério da administração (ato discricionário), pelo prazo de até 3 anos consecutivos, sem remuneração.",
                                       "exp":  "Correto! Exige estabilidade, não tem remuneração, prazo máximo de até 3 anos e fica condicionada à conveniência e interesse da administração."
                                   },
                             "D":  {
                                       "texto":  "�‰ direito potestativo incondicional que a chefia não pode negar em hipótese alguma.",
                                       "exp":  "Incorreto. �‰ ato discricionário da administração, que pode indeferir se houver carência de pessoal."
                                   },
                             "E":  {
                                       "texto":  "O tempo de afastamento é computado para fins de aposentadoria por tempo de serviço.",
                                       "exp":  "Incorreto. Como não há trabalho nem recolhimento automático estatal, não conta tempo sem a contribuição própria facultativa."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "LIP (Licença para Tratar de Interesses Particulares): 1. Apenas para servidor estável. 2. Sem remuneração. 3. Prazo de até 3 anos. 4. A critério da administração (discricionária)."
    },
    {
        "id":  "leg_19",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Concessões por Casamento e Luto",
        "enunciado":  "Sem qualquer prejuízo de sua remuneração, o servidor público estadual do Pará pode ausentar-se do serviço por até 8 (oito) dias consecutivos em razão de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Mudança de domicílio residencial no mesmo bairro.",
                                       "exp":  "Incorreto. Mudança de residência tem prazo menor ou dispensa de 1 a 2 dias dependendo de regulamento."
                                   },
                             "B":  {
                                       "texto":  "Casamento (gala) e falecimento de cônjuge, companheiro, pais, madrasta ou padrasto, filhos, enteados, menor sob guarda e irmãos (luto/nojo).",
                                       "exp":  "Correto! Art. 83 da Lei 5.810/94: o servidor pode ausentar-se por até 8 dias consecutivos por motivo de casamento ou de falecimento de familiares diretos."
                                   },
                             "C":  {
                                       "texto":  "Alistamento eleitoral e doação voluntária de sangue.",
                                       "exp":  "Incorreto. Alistamento (até 2 dias) e doação de sangue (1 dia a cada ano)."
                                   },
                             "D":  {
                                       "texto":  "Conclusão de curso de pós-graduação lato sensu.",
                                       "exp":  "Incorreto. Não há afastamento automático remunerado de 8 dias para formatura."
                                   },
                             "E":  {
                                       "texto":  "Participação em viagens recreativas de feriado prolongado.",
                                       "exp":  "Incorreto. Totalmente incabível na legislação."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Prazos do RJU Pará: Casamento (licença gala) = até 8 dias. Luto (falecimento de pais, cônjuge, filhos, irmãos) = até 8 dias."
    },
    {
        "id":  "leg_20",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Constituição Federal e Lei 5.810/94 - Acumulação de Cargos",
        "enunciado":  "A regra geral é a proibição de acumulação remunerada de cargos públicos. No entanto, o art. 37, XVI da CF/88 e a Lei 5.810/94 autorizam a acumulação remunerada de DOIS cargos quando houver compatibilidade de horários exclusivamente nos seguintes casos, EXCETO:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A de dois cargos de professor.",
                                       "exp":  "Incorreto como resposta, pois a acumulação de 2 cargos de professor é expressamente PERMITIDA."
                                   },
                             "B":  {
                                       "texto":  "A de um cargo de professor com outro técnico ou científico.",
                                       "exp":  "Incorreto como resposta, pois 1 de professor + 1 técnico/científico é expressamente PERMITIDA."
                                   },
                             "C":  {
                                       "texto":  "A de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.",
                                       "exp":  "Incorreto como resposta, pois 2 cargos de profissionais de saúde é expressamente PERMITIDA."
                                   },
                             "D":  {
                                       "texto":  "A de dois cargos puramente administrativos de nível médio ou fundamental.",
                                       "exp":  "Correto! �‰ TERMINANTEMENTE PROIBIDA a acumulação de dois cargos de Auxiliar Administrativo ou técnico-administrativos gerais."
                                   },
                             "E":  {
                                       "texto":  "A percepção simultânea de proventos de aposentadoria de cargo acumulável na ativa.",
                                       "exp":  "Incorreto como resposta, pois proventos de cargos legitimamente acumuláveis na ativa podem ser mantidos."
                                   }
                         },
        "correta":  "D",
        "comentarioGeral":  "Cargos acumuláveis permitidos (com compatibilidade de horário): 1) 2 de professor; 2) 1 de professor + 1 técnico/científico; 3) 2 de profissionais da saúde regulamentada. Cargos meramente administrativos N�ƒO se acumulam!"
    },
    {
        "id":  "leg_21",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Deveres do Servidor Público",
        "enunciado":  "Dentre os deveres funcionais expressos no art. 177 da Lei Estadual nº 5.810/1994 que regem o comportamento da servidora Dayana Maia na FHCGV, destaca-se:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Cumprir ordens superiores mesmo quando manifestamente ilegais ou criminosas.",
                                       "exp":  "Incorreto. O dever é cumprir as ordens superiores, EXCETO quando manifestamente ilegais."
                                   },
                             "B":  {
                                       "texto":  "Exercer com zelo e dedicação as atribuições do cargo, ser leal às instituições e guardar sigilo sobre assuntos da repartição.",
                                       "exp":  "Correto! Zelo, lealdade institucional, assiduidade, urbanidade e sigilo funcional são deveres basilares previstos no art. 177."
                                   },
                             "C":  {
                                       "texto":  "Divulgar na internet dados cadastrais de pacientes sem consentimento formal.",
                                       "exp":  "Incorreto. Violação grave ao sigilo profissional e à intimidade."
                                   },
                             "D":  {
                                       "texto":  "Recusar-se a prestar informações aos cidadãos quando o setor estiver atarefado.",
                                       "exp":  "Incorreto. O atendimento e a prestação tempestiva de informações são obrigatórios."
                                   },
                             "E":  {
                                       "texto":  "Delegar a terceiros estranhos ao hospital a responsabilidade pelos seus relatórios e chaves de arquivos.",
                                       "exp":  "Incorreto. Trata-se de conduta proibida e passível de sanção disciplinar."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Art. 177: São deveres do servidor o zelo, assiduidade, pontualidade, obediência a ordens legais, lealdade e guarda de sigilo."
    },
    {
        "id":  "leg_22",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Proibições aos Servidores",
        "enunciado":  "Nos termos do art. 178 da Lei Estadual nº 5.810/1994, ao servidor público estadual é TERMINANTEMENTE PROIBIDO:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Representar contra ilegalidade, omissão ou abuso de poder cometido por superiores hierárquicos.",
                                       "exp":  "Incorreto. Representar contra ilegalidade é um DEVER do servidor, e não proibição."
                                   },
                             "B":  {
                                       "texto":  "Valer-se de sua função para lograr proveito pessoal ou de outrem, em detrimento da dignidade da função pública.",
                                       "exp":  "Correto! �‰ vedado utilizar o cargo ou facilidades do serviço em benefício próprio ou de terceiros."
                                   },
                             "C":  {
                                       "texto":  "Participar de comissões sindicais fora do horário de expediente.",
                                       "exp":  "Incorreto. A livre associação sindical é garantia constitucional."
                                   },
                             "D":  {
                                       "texto":  "Pedir esclarecimentos formais sobre o cálculo de suas gratificações legais.",
                                       "exp":  "Incorreto. O servidor tem direito de petição aos órgãos públicos."
                                   },
                             "E":  {
                                       "texto":  "Utilizar equipamento de proteção individual durante o atendimento em enfermarias.",
                                       "exp":  "Incorreto. O uso de EPI é obrigatório por normas de biossegurança."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Proibições do art. 178: valer-se do cargo para proveito próprio, receber propina, praticar comércio no órgão, ausentar-se sem permissão."
    },
    {
        "id":  "leg_23",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Responsabilidade e Independência das Instâncias",
        "enunciado":  "O servidor responde civil, penal e administrativamente pelo exercício irregular de suas atribuições. Conforme a Lei 5.810/94 e a jurisprudência consolidada:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "As sanções civis, penais e disciplinares não podem cumular-se sob hipótese alguma.",
                                       "exp":  "Incorreto. As esferas são independentes e as sanções podem cumular-se perfeitamente."
                                   },
                             "B":  {
                                       "texto":  "As cominações civis, penais e disciplinares poderão cumular-se, sendo independentes entre si.",
                                       "exp":  "Correto! Art. 189 da Lei 5.810/94: o servidor pode sofrer processo disciplinar, ação penal e ação civil de ressarcimento de forma simultânea e autônoma."
                                   },
                             "C":  {
                                       "texto":  "A absolvição penal por falta de provas anula automaticamente a demissão administrativa.",
                                       "exp":  "Incorreto. Falta de provas na esfera penal não vincula a esfera administrativa (apenas a comprovação de inexistência do fato ou negativa de autoria vinculam)."
                                   },
                             "D":  {
                                       "texto":  "A responsabilidade civil decorre unicamente de dolo, sendo isenta em casos de negligência ou culpa.",
                                       "exp":  "Incorreto. A responsabilidade civil do servidor perante o Estado em ação regressiva decorre de dolo OU culpa."
                                   },
                             "E":  {
                                       "texto":  "O Estado não pode cobrar do servidor os danos que este causar a terceiros no hospital.",
                                       "exp":  "Incorreto. O Estado responde objetivamente perante o cidadão e tem direito de regresso contra o servidor culpado."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Independência das esferas: civil, penal e administrativa correm de forma independente e cumulativa!"
    },
    {
        "id":  "leg_24",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Penalidades Disciplinares",
        "enunciado":  "São penalidades disciplinares expressamente previstas no art. 192 da Lei Estadual nº 5.810/1994:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Prisão administrativa e trabalhos forçados no almoxarifado.",
                                       "exp":  "Incorreto. Penas corporais ou de prisão administrativa são vedadas pela Constituição de 1988."
                                   },
                             "B":  {
                                       "texto":  "Repreensão, suspensão, demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão.",
                                       "exp":  "Correto! Rol taxativo das penalidades disciplinares estatutárias da Lei 5.810/94."
                                   },
                             "C":  {
                                       "texto":  "Multa de trânsito funcional e perda do direito de voto em eleições.",
                                       "exp":  "Incorreto. Não guardam nenhuma relação com o regime disciplinar estatutário."
                                   },
                             "D":  {
                                       "texto":  "Apenas repreensão verbal sem anotação nos assentamentos funcionais.",
                                       "exp":  "Incorreto. A repreensão é sempre aplicada por escrito e averbada na ficha funcional."
                                   },
                             "E":  {
                                       "texto":  "Transferência compulsória do servidor para outro município distante como castigo.",
                                       "exp":  "Incorreto. A remoção não pode ser utilizada como instrumento de punição disfarçada."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Penalidades disciplinares Lei 5.810/94: I - repreensão; II - suspensão; III - demissão; IV - cassação de aposentadoria ou disponibilidade; V - destituição de cargo em comissão."
    },
    {
        "id":  "leg_25",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Suspensão Disciplinar",
        "enunciado":  "A penalidade de suspensão no Regime Jurídico �šnico do Pará é aplicada em caso de reincidência em faltas punidas com repreensão ou violação de proibições que não tipifiquem demissão. O prazo máximo legal da suspensão é de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "15 (quinze) dias.",
                                       "exp":  "Incorreto. Prazo inferior ao teto estatutário."
                                   },
                             "B":  {
                                       "texto":  "30 (trinta) dias.",
                                       "exp":  "Incorreto. Trinta dias é o prazo de advertência/suspensão de alguns outros estatutos, não o teto do Pará."
                                   },
                             "C":  {
                                       "texto":  "90 (noventa) dias.",
                                       "exp":  "Correto! Art. 195 da Lei 5.810/94: a suspensão será aplicada por escrito e não excederá a 90 (noventa) dias."
                                   },
                             "D":  {
                                       "texto":  "180 (cento e oitenta) dias.",
                                       "exp":  "Incorreto. Não há suspensão de 180 dias prevista para infrações ordinárias."
                                   },
                             "E":  {
                                       "texto":  "1 ano com perda da remuneração de metade dos meses.",
                                       "exp":  "Incorreto. Prazo inexistente na legislação paraense."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Art. 195: A suspensão não excederá a 90 dias e acarreta a perda da remuneração dos dias de afastamento (podendo ser convertida em multa de 50% por conveniência de serviço)."
    },
    {
        "id":  "leg_26",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Abandono de Cargo e Inassiduidade Habitual",
        "enunciado":  "A pena de demissão será obrigatoriamente aplicada ao servidor nos casos de abandono de cargo ou de inassiduidade habitual. Configura-se ABANDONO DE CARGO na Lei 5.810/94:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A ausência intencional do servidor ao serviço por mais de 30 (trinta) dias consecutivos.",
                                       "exp":  "Correto! Art. 197, I da Lei 5.810/94: configura abandono de cargo a ausência intencional e injustificada por mais de 30 dias consecutivos."
                                   },
                             "B":  {
                                       "texto":  "A falta justificada por atestado médico durante 15 dias corridos.",
                                       "exp":  "Incorreto. Falta amparada por atestado médico é licença regular para saúde."
                                   },
                             "C":  {
                                       "texto":  "Atrasar-se 10 minutos para o plantão por duas vezes na semana.",
                                       "exp":  "Incorreto. Trata-se de pontualidade a ser corrigida na chefia, longe de configurar abandono de cargo."
                                   },
                             "D":  {
                                       "texto":  "Faltar 20 dias intercalados ao longo de um ano civil.",
                                       "exp":  "Incorreto. Inassiduidade habitual exige 60 dias interpolados no período de 12 meses."
                                   },
                             "E":  {
                                       "texto":  "Recusar-se a realizar horas extras não remuneradas aos domingos.",
                                       "exp":  "Incorreto. Não caracteriza infração e sim direito funcional."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Regra de ouro: Abandono de Cargo = ausência intencional por mais de 30 dias CONSECUTIVOS. Inassiduidade Habitual = falta ao serviço por 60 dias INTERPOLADOS no ano."
    },
    {
        "id":  "leg_27",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei 5.810/94 - Prescrição da Ação Disciplinar",
        "enunciado":  "A ação disciplinar prescreve em prazos determinados, contados da data em que o fato se tornou conhecido pela autoridade competente. Conforme a Lei 5.810/94, prescreve em 5 (cinco) anos a falta punível com:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Repreensão por falta leve.",
                                       "exp":  "Incorreto. Falta punível com repreensão prescreve em 180 dias."
                                   },
                             "B":  {
                                       "texto":  "Suspensão disciplinar de até 90 dias.",
                                       "exp":  "Incorreto. Falta punível com suspensão prescreve em 2 anos."
                                   },
                             "C":  {
                                       "texto":  "Demissão, cassação de aposentadoria ou de disponibilidade e destituição de cargo em comissão.",
                                       "exp":  "Correto! As infrações graves sujeitas a demissão prescrevem em 5 anos a contar do conhecimento do fato pela autoridade."
                                   },
                             "D":  {
                                       "texto":  "Advertência verbal do chefe de seção.",
                                       "exp":  "Incorreto. Advertência prescreve no prazo mais exíguo."
                                   },
                             "E":  {
                                       "texto":  "Nenhuma falta prescreve, sendo as ações disciplinares perpétuas e imprescritíveis.",
                                       "exp":  "Incorreto. A prescrição visa resguardar a segurança jurídica."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Prazos de Prescrição Disciplinar no RJU Pará: Demissão / Cassação = 5 ANOS; Suspensão = 2 ANOS; Repreensão = 180 DIAS."
    },
    {
        "id":  "leg_28",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei Estadual nº 6.304/2000 - Criação e Natureza da FHCGV",
        "enunciado":  "A Lei Estadual nº 6.304, de 6 de julho de 2000, dispõe sobre a Fundação Pública Estadual Hospital de Clínicas Gaspar Vianna (FHCGV). Quanto à sua natureza jurídica, a FHCGV é uma:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Empresa pública exploradora de atividade econômica lucrativa.",
                                       "exp":  "Incorreto. Hospitais públicos estaduais não visam lucro e não são empresas comerciais."
                                   },
                             "B":  {
                                       "texto":  "Fundação pública estadual de direito público, dotada de autonomia administrativa, financeira e patrimonial, vinculada à Secretaria de Estado de Saúde Pública (SESPA).",
                                       "exp":  "Correto! Conforme os arts. 1º e 2º da Lei 6.304/2000, a FHCGV é fundação pública estadual integrante da Administração Indireta, com autonomia gerencial e tutelada pela SESPA."
                                   },
                             "C":  {
                                       "texto":  "Organização não governamental internacional de caráter privado.",
                                       "exp":  "Incorreto. Trata-se de órgão/entidade estatal pública integrante da estrutura do Governo do Pará."
                                   },
                             "D":  {
                                       "texto":  "Sociedade de economia mista com capital aberto na bolsa de valores.",
                                       "exp":  "Incorreto. A fundação não possui ações cotadas nem capital privado."
                                   },
                             "E":  {
                                       "texto":  "Repartição sem qualquer autonomia, subordinada diretamente ao Ministério da Fazenda.",
                                       "exp":  "Incorreto. Possui personalidade jurídica própria estadual."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Lei 6.304/2000: A FHCGV é fundação pública integrante da Administração Indireta do Estado do Pará, vinculada à SESPA para fins de controle e supervisão ministerial."
    },
    {
        "id":  "leg_29",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei Estadual nº 6.304/2000 - Finalidades e Especialidades do Hospital",
        "enunciado":  "Conforme a Lei Estadual nº 6.304/2000, a Fundação Hospital de Clínicas Gaspar Vianna tem como finalidade primordial a prestação de assistência médico-hospitalar pública terciária de referência nas seguintes áreas específicas:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Exclusivamente cirurgia plástica estética e estética dentária.",
                                       "exp":  "Incorreto. O foco institucional é em saúde pública de alta complexidade."
                                   },
                             "B":  {
                                       "texto":  "Cardiologia, Nefrologia e Psiquiatria/Saúde Mental, além do ensino e pesquisa em saúde.",
                                       "exp":  "Correto! O Hospital Gaspar Vianna é a grande referência hospitalar do Pará nas áreas de Cardiologia, Nefrologia/Transplantes e Psiquiatria, atuando ainda como hospital de ensino."
                                   },
                             "C":  {
                                       "texto":  "Medicina veterinária e controle de zoonoses urbanas.",
                                       "exp":  "Incorreto. Destinado exclusivamente à saúde humana e hospitalar."
                                   },
                             "D":  {
                                       "texto":  "Apenas atendimento primário em postos volantes de vacinação fluvial.",
                                       "exp":  "Incorreto. A FHCGV é hospital de alta e média complexidade especializada."
                                   },
                             "E":  {
                                       "texto":  "Produção de imunobiológicos e vacinas em escala industrial fabril.",
                                       "exp":  "Incorreto. Trata-se de assistência clínico-hospitalar e ambulatorial terciária."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Pilares assistenciais da FHCGV (Gaspar Vianna): Cardiologia (alta complexidade cardíaca), Nefrologia (hemodiálise/rins) e Psiquiatria (saúde mental), somados a Ensino e Pesquisa."
    },
    {
        "id":  "leg_30",
        "disciplina":  "legislacao",
        "materia_nome":  "Legislação do Estado do Pará",
        "topico":  "Lei Estadual nº 6.304/2000 e Lei 9.341/2021 - Regime de Pessoal da FHCGV",
        "enunciado":  "O regime jurídico do pessoal admitido na Fundação Pública Estadual Hospital de Clínicas Gaspar Vianna (FHCGV) mediante o presente Concurso Público C-223 é o:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Regime celetista (CLT), com recolhimento de FGTS e aviso prévio indenizado.",
                                       "exp":  "Incorreto. A fundação de direito público adota o regime estatutário para seus servidores concursados."
                                   },
                             "B":  {
                                       "texto":  "Regime Jurídico �šnico Estatutário dos Servidores Públicos Civis do Estado do Pará (Lei Estadual nº 5.810/1994).",
                                       "exp":  "Correto! O Edital nº 01/SEPLAD-FHCGV e a Lei 6.304/2000 consagram o regime estatutário (Lei 5.810/94), assegurando estabilidade funcional após 3 anos."
                                   },
                             "C":  {
                                       "texto":  "Contrato temporário de prestação de serviços renovável anualmente.",
                                       "exp":  "Incorreto. Trata-se de provimento de cargos de carreira efetiva por concurso público."
                                   },
                             "D":  {
                                       "texto":  "Regime de pessoa jurídica terceirizada sem vínculo com o Estado.",
                                       "exp":  "Incorreto. A nomeação é diretamente em cargo público estadual de provimento efetivo."
                                   },
                             "E":  {
                                       "texto":  "Regime militar da reserva hospitalar.",
                                       "exp":  "Incorreto. Trata-se de servidores públicos civis."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Todos os aprovados no Concurso FHCGV serão regidos pelo Estatuto dos Servidores Públicos Civis do Pará (Lei 5.810/94), usufruindo de estabilidade e de todos os direitos estatutários!"
    },
    {
        "id":  "eti_01",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Conceitos Fundamentais: �‰tica vs Moral",
        "enunciado":  "A distinção teórica entre �‰tica e Moral é tema recorrente em concursos da banca Consulplan. Sobre esses conceitos, assinale a proposição filosoficamente CORRETA:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Moral é a ciência teórica e universal; �‰tica é o conjunto passageiro de regras de uma tribo específica.",
                                       "exp":  "Incorreto. A definição está invertida: a �‰tica é a reflexão teórica/filosófica e a Moral refere-se aos costumes de uma sociedade."
                                   },
                             "B":  {
                                       "texto":  "�‰tica é a reflexão crítica e filosófica sobre os princípios que orientam as ações humanas; Moral é o conjunto de costumes, normas e valores práticos vigentes em determinada sociedade.",
                                       "exp":  "Correto! �‰tica vem do grego \u0027ethos\u0027 (caráter, reflexão teórica e universal); Moral vem do latim \u0027mos/moris\u0027 (costume, convenção prática, histórica e cultural)."
                                   },
                             "C":  {
                                       "texto":  "�‰tica e Moral são termos rigorosamente sinônimos e não admitem diferenciação epistemológica.",
                                       "exp":  "Incorreto. Embora no senso comum sejam usados de forma parecida, na teoria ética e no concurso a distinção é mandatória."
                                   },
                             "D":  {
                                       "texto":  "A moral é imutável em qualquer tempo e lugar, enquanto a ética muda todo ano com a legislação.",
                                       "exp":  "Incorreto. A moral é histórica e evolui conforme a cultura e a época; a ética busca princípios universais."
                                   },
                             "E":  {
                                       "texto":  "O agente público só precisa respeitar a lei, sendo a ética e a moral irrelevantes para a administração pública.",
                                       "exp":  "Incorreto. O art. 37 da CF consagra a Moralidade como princípio expresso da administração."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "�‰tica = Teórica, reflexiva, permanente e universal (por que fazer?). Moral = Prática, comportamental, histórica e cultural (o que fazer?)."
    },
    {
        "id":  "eti_02",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "A �‰tica, os Valores e a Lei",
        "enunciado":  "Um célebre aforismo jurídico de Paulo (jurisconsulto romano) ensina: \u0027Non omne quod licet honestum est\u0027 (Nem tudo o que é lícito é honesto). No contexto da Administração Pública, esse princípio significa que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A obediência à letra fria da lei é suficiente para garantir a conduta ética do servidor.",
                                       "exp":  "Incorreto. O servidor pode agir conforme a letra fria da lei e, ainda assim, violar a moralidade e a honestidade."
                                   },
                             "B":  {
                                       "texto":  "A conduta do servidor público deve aliar a legalidade à moralidade, buscando não apenas o que é formalmente permitido, mas o que é moralmente correto e justo para o interesse coletivo.",
                                       "exp":  "Correto! A moralidade administrativa exige que o agente público pondere a honestidade, a lealdade e a finalidade pública, não se limitando à mera legalidade aparente."
                                   },
                             "C":  {
                                       "texto":  "A lei deve ser descumprida sempre que o servidor discordar de suas determinações.",
                                       "exp":  "Incorreto. O servidor não pode descumprir a lei válida; a ética complementa e qualifica a legalidade, não a abole."
                                   },
                             "D":  {
                                       "texto":  "Valores éticos só se aplicam à vida privada e domiciliar do cidadão.",
                                       "exp":  "Incorreto. A ética no serviço público é ainda mais exigente, pois gere a coisa pública (res publica)."
                                   },
                             "E":  {
                                       "texto":  "A honestidade é dispensável quando a repartição atinge suas metas de arrecadação.",
                                       "exp":  "Incorreto. A probidade é indispensável em qualquer circunstância."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Moralidade Administrativa: o ato do servidor não precisa apenas ser legal; ele deve ser também HONESTO, PROBO, LEAL e voltado ao bem comum."
    },
    {
        "id":  "eti_03",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Princípios Constitucionais da Administração (Art. 37, CF)",
        "enunciado":  "A Administração Pública direta e indireta de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios obedecerá aos princípios expressos no caput do art. 37 da Constituição Federal, sintetizados no célebre mnemônico LIMPE. Esses princípios são:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Lealdade, Interesse, Modéstia, Probidade e Eficácia.",
                                       "exp":  "Incorreto. Esses termos não correspondem à redação constitucional do caput do art. 37."
                                   },
                             "B":  {
                                       "texto":  "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.",
                                       "exp":  "Correto! LIMPE: L (Legalidade), I (Impessoalidade), M (Moralidade), P (Publicidade) e E (Eficiência - incluída pela EC 19/98)."
                                   },
                             "C":  {
                                       "texto":  "Liberdade, Igualdade, Mediação, Ponderação e Equidade.",
                                       "exp":  "Incorreto. São princípios gerais do Direito, mas não os cinco pilares expressos do art. 37."
                                   },
                             "D":  {
                                       "texto":  "Legitimidade, Isonomia, Motivação, Pontualidade e Exação.",
                                       "exp":  "Incorreto. São princípios administrativos importantes, mas não compõem a sigla LIMPE do caput."
                                   },
                             "E":  {
                                       "texto":  "Legalidade, Intolerância, Monopólio, Parcialidade e Estabilidade.",
                                       "exp":  "Incorreto. Apresenta termos antagônicos à democracia (intolerância, parcialidade)."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Mnemônico obrigatório: L-I-M-P-E = Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Decorar para acertar em segundos!"
    },
    {
        "id":  "eti_04",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Princípio da Impessoalidade e Atendimento no Hospital",
        "enunciado":  "Na recepção do Hospital Gaspar Vianna, uma paciente que é vizinha da servidora pede para ter sua ficha de consulta adiantada na frente dos demais usuários que aguardam na fila há duas horas. A postura ética e legal exigida da servidora fundamenta-se no princípio da:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Impessoalidade, que veda favorecimentos, privilégios ou preferências pessoais com recursos e serviços públicos.",
                                       "exp":  "Correto! O princípio da impessoalidade veda privilégios a amigos/parentes e perseguições a desafetos: todos os cidadãos devem ser tratados com igualdade e critérios objetivos (como a ordem de chegada ou prioridade legal/médica)."
                                   },
                             "B":  {
                                       "texto":  "Publicidade, que autoriza a divulgação dos dados da vizinha para os outros pacientes.",
                                       "exp":  "Incorreto. Divulgar dados íntimos violaria o sigilo e a privacidade."
                                   },
                             "C":  {
                                       "texto":  "Eficiência, que autoriza furar a fila caso o atendimento seja realizado em menos de um minuto.",
                                       "exp":  "Incorreto. A eficiência jamais legitima o desrespeito à legalidade e à isonomia."
                                   },
                             "D":  {
                                       "texto":  "Camaradagem seletiva, orientada pelo acolhimento prioritário de conhecidos.",
                                       "exp":  "Incorreto. Conduta ilícita, contrária à moralidade e à probidade administrativa."
                                   },
                             "E":  {
                                       "texto":  "Autonomia privada, já que no guichê a servidora decide conforme sua vontade individual.",
                                       "exp":  "Incorreto. No serviço público o agente atua sob regime de indisponibilidade do interesse público."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Impessoalidade = Tratamento isonômico sem favoritismos nem discriminações. Nenhum interesse particular se sobrepõe à regra pública."
    },
    {
        "id":  "eti_05",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Conflito de Interesses e Recebimento de Vantagens",
        "enunciado":  "Um representante comercial de fornecedores de insumos hospitalares oferece a um servidor do setor de suprimentos um pacote de viagens de lazer com tudo pago, em troca de agilidade na emissão de atestados de recebimento. Nessa situação, o servidor público deve:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Aceitar o convite, desde que viaje apenas durante suas férias regulamentares.",
                                       "exp":  "Incorreto. O recebimento de benefício em razão da função configura ato grave de improbidade e corrupção passiva."
                                   },
                             "B":  {
                                       "texto":  "Recusar terminantemente a oferta, registrar a ocorrência e comunicar formalmente à chefia e aos órgãos de integridade/ouvidoria.",
                                       "exp":  "Correto! O recebimento de vantagens pessoais indevidas configura crime contra a administração pública e improbidade; o servidor ético recusa e denuncia o fato."
                                   },
                             "C":  {
                                       "texto":  "Aceitar o pacote e transferir as passagens para seu parente para evitar vínculo direto.",
                                       "exp":  "Incorreto. A fraude mediante interposta pessoa permanece como ato ilícito e imoral."
                                   },
                             "D":  {
                                       "texto":  "Negociar a troca da viagem por materiais de escritório para o setor.",
                                       "exp":  "Incorreto. As doações e compras públicas devem seguir a Lei 14.133/21 com procedimento formal."
                                   },
                             "E":  {
                                       "texto":  "Aceitar a viagem se o fornecedor prometer entregar os materiais no prazo.",
                                       "exp":  "Incorreto. A agilização de atos funcionais em troca de favores pessoais é terminantemente vedada."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "�‰tica profissional: é expressamente vedado ao servidor público solicitar, exigir ou aceitar qualquer tipo de ajuda financeira, gratificação, presente ou vantagem indevida."
    },
    {
        "id":  "eti_06",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Diferença entre Brinde e Presente",
        "enunciado":  "No âmbito das normas de ética no serviço público, estabelece-se clara distinção entre \u0027brinde\u0027 institucional e \u0027presente\u0027. �‰ considerado brinde admitido (sem caracterizar vantagem indevida):",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Um notebook de última geração doado a um único servidor após a assinatura do contrato.",
                                       "exp":  "Incorreto. Trata-se de bem de alto valor comercial com nítida configuração de presente/propina."
                                   },
                             "B":  {
                                       "texto":  "Itens de valor módico e caráter puramente promocional (caneta, calendário, bloco de notas com logotipo da empresa), distribuídos indistintamente em evento aberto.",
                                       "exp":  "Correto! Brindes de propaganda institucional de valor ínfimo (como canetas, agendas simples, cordões de crachá) sem exclusividade são admitidos pelas comissões de ética."
                                   },
                             "C":  {
                                       "texto":  "Uma quantia em dinheiro de pequeno montante em envelope lacrado.",
                                       "exp":  "Incorreto. Qualquer valor monetário é expressamente proibido."
                                   },
                             "D":  {
                                       "texto":  "Um jantar privativo de alto luxo oferecido ao presidente da comissão de licitação.",
                                       "exp":  "Incorreto. Constitui evidente conflito de interesse e favorecimento imoral."
                                   },
                             "E":  {
                                       "texto":  "Um smartphone topo de linha cedido em regime de comodato pessoal.",
                                       "exp":  "Incorreto. Equipamento particular de uso funcional não pode ser aceito de fornecedor concorrente."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Brinde x Presente: Brinde = valor módico (ex.: até R$ 100,00), com logomarca institucional, distribuído a todos em eventos. Presente particular para o agente = PROIBIDO!"
    },
    {
        "id":  "eti_07",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Sigilo Funcional e Prontuários Médicos",
        "enunciado":  "No exercício de suas funções na administração hospitalar da FHCGV, a servidora Dayana tem acesso rotineiro a dados clínicos e prontuários médicos de pacientes. Sobre o sigilo funcional e a proteção dessas informações, é dever ético da servidora:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Comentar os diagnósticos de pacientes famosos com seus colegas de trabalho na hora do almoço.",
                                       "exp":  "Incorreto. Violação frontal do segredo profissional e do direito constitucional à intimidade."
                                   },
                             "B":  {
                                       "texto":  "Guardar absoluto sigilo profissional, acessando e utilizando prontuários estritamente para o cumprimento de suas atribuições legais e em conformidade com a LGPD e o Código de �‰tica.",
                                       "exp":  "Correto! Os dados de saúde são sensíveis (LGPD art. 5º, II); o dever de sigilo funcional é indeclinável e a quebra injustificada acarreta punição administrativa e criminal."
                                   },
                             "C":  {
                                       "texto":  "Tirar foto da ficha médica com o celular e enviar em grupo de mensagens para esclarecer dúvidas informais.",
                                       "exp":  "Incorreto. Conduta ilícita gravíssima contra a privacidade dos usuários do hospital."
                                   },
                             "D":  {
                                       "texto":  "Permitir que vizinhos e conhecidos consultem o histórico de exames de terceiros sem autorização formal.",
                                       "exp":  "Incorreto. O prontuário pertence ao paciente e sua guarda é de custódia institucional protegida."
                                   },
                             "E":  {
                                       "texto":  "Publicar estatísticas com os nomes reais dos pacientes em redes sociais para alertar a comunidade.",
                                       "exp":  "Incorreto. Dados epidemiológicos públicos devem ser sempre anonimizados, sem jamais expor os pacientes."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Dados de saúde são DADOS SENSÍVEIS! O sigilo funcional protege a intimidade do cidadão e a confiança na instituição pública de saúde."
    },
    {
        "id":  "eti_08",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Assédio Moral no Trabalho",
        "enunciado":  "O assédio moral no ambiente corporativo e público caracteriza-se como uma das maiores agressões à dignidade e integridade humana do servidor. Configura-se tipicamente como assédio moral:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A exigência do cumprimento pontual do horário de trabalho e das metas rotineiras de atendimento previstas em edital.",
                                       "exp":  "Incorreto. Cobrança de deveres funcionais legais nos limites da razoabilidade é exercício regular do poder diretivo."
                                   },
                             "B":  {
                                       "texto":  "A conduta abusiva reiterada, verbal ou não verbal, que degrade o ambiente de trabalho, humilhe, desqualifique ou isole o servidor, atingindo sua autoestima e saúde psicológica.",
                                       "exp":  "Correto! A repetição de condutas hostis, isolamento proposital, piadas vexatórias e desqualificação contínua caracterizam o assédio moral no trabalho."
                                   },
                             "C":  {
                                       "texto":  "Um elogio público feito pela diretoria a um servidor que solucionou um problema complexo.",
                                       "exp":  "Incorreto. Elogio fundamentado é mecanismo positivo de motivação."
                                   },
                             "D":  {
                                       "texto":  "A aplicação motivada de repreensão formal após apuração regular em sindicância com contraditório.",
                                       "exp":  "Incorreto. A aplicação de penalidade legítima após devido processo é dever administrativo."
                                   },
                             "E":  {
                                       "texto":  "A designação de trabalho em equipe para elaboração do relatório anual do setor.",
                                       "exp":  "Incorreto. Trabalho colaborativo integra as atribuições ordinárias."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Assédio Moral = Conduta abusiva, frequente e reiterada que atenta contra a dignidade, saúde mental e integridade física/psíquica do trabalhador."
    },
    {
        "id":  "eti_09",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "�‰tica e Responsabilidade Social na Saúde",
        "enunciado":  "A responsabilidade social das instituições públicas de saúde hospitalar manifesta-se através de práticas sustentáveis e éticas com a comunidade. Constitui exemplo de responsabilidade social:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O descarte indiscriminado de lixo hospitalar perfurocortante em lixões urbanos comuns.",
                                       "exp":  "Incorreto. Crime ambiental gravíssimo com risco biológico à sociedade."
                                   },
                             "B":  {
                                       "texto":  "O gerenciamento correto de resíduos de serviços de saúde (PGRSS), a promoção de campanhas de saúde preventiva e a garantia de acessibilidade física a pessoas com deficiência.",
                                       "exp":  "Correto! Responsabilidade social hospitalar envolve gestão de resíduos, inclusão de pessoas com deficiência, sustentabilidade ecológica e prevenção comunitária."
                                   },
                             "C":  {
                                       "texto":  "A cobrança de taxas extras de estacionamento de ambulâncias de municípios do interior.",
                                       "exp":  "Incorreto. Atitude predatória e contrária aos princípios do SUS."
                                   },
                             "D":  {
                                       "texto":  "A queima clandestina de recipientes plásticos nos fundos do hospital.",
                                       "exp":  "Incorreto. Violação de normas sanitárias e ambientais."
                                   },
                             "E":  {
                                       "texto":  "A restrição deliberada do atendimento a cidadãos que não residam na capital.",
                                       "exp":  "Incorreto. Fere o princípio constitucional da universalidade e territorialidade do SUS."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Responsabilidade Social: compromisso do órgão público com o meio ambiente (PGRSS), com a comunidade (prevenção) e com a dignidade de todos (acessibilidade)."
    },
    {
        "id":  "eti_10",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Qualidade no Atendimento: Comunicabilidade e Linguagem",
        "enunciado":  "Ao orientar um usuário simples e idoso na triagem da FHCGV, a postura de COMUNICABILIDADE eficiente e cidadã exige que o servidor:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Utilize jargões médicos e termos jurídicos complexos para demonstrar superioridade técnica.",
                                       "exp":  "Incorreto. O rebuscamento linguístico gera ruído, intimidação e exclusão do usuário."
                                   },
                             "B":  {
                                       "texto":  "Utilize linguagem clara, simples, acessível e empática, certificando-se de que o cidadão realmente compreendeu a orientação fornecida.",
                                       "exp":  "Correto! Comunicabilidade no serviço público é a arte de fazer-se entender com clareza, eliminando barreiras e acolhendo as dificuldades do cidadão."
                                   },
                             "C":  {
                                       "texto":  "Fale em tom de reprovação caso o paciente peça para repetir a instrução.",
                                       "exp":  "Incorreto. A paciência e a tolerância são virtudes essenciais da qualidade no atendimento."
                                   },
                             "D":  {
                                       "texto":  "Apenas aponte o dedo para a placa na parede sem emitir nenhuma palavra explicativa.",
                                       "exp":  "Incorreto. Descaso e descortesia graves no atendimento ao usuário."
                                   },
                             "E":  {
                                       "texto":  "Encaminhe o cidadão para outro setor aleatório para encerrar rapidamente o atendimento.",
                                       "exp":  "Incorreto. Prática antiética de \u0027jogo de empurra\u0027 que degrada a imagem do serviço público."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Comunicação Cidadã: simplicidade, clareza e empatia. Evite o \u0027juridiquês\u0027 e o \u0027mediquês\u0027; certifique-se com gentileza de que o cidadão entendeu!"
    },
    {
        "id":  "eti_11",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Cortesia, Urbanidade e Presteza",
        "enunciado":  "Cortesia e urbanidade são atributos essenciais do servidor público no atendimento aos cidadãos. Esses atributos manifestam-se na prática por meio de:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Tratamento respeitoso, educação no tom de voz, escuta atenciosa e disposição sincera para ajudar a solucionar a demanda do usuário.",
                                       "exp":  "Correto! Urbanidade é a civilidade e polidez nas relações humanas; cortesia é o respeito afável e atencioso com todos."
                                   },
                             "B":  {
                                       "texto":  "Ignorar a presença do usuário enquanto responde mensagens particulares em aplicativo móvel.",
                                       "exp":  "Incorreto. Desrespeito flagrante e conduta reprovável no guichê de atendimento."
                                   },
                             "C":  {
                                       "texto":  "Tratar com desdém pessoas que demonstram nervosismo na recepção.",
                                       "exp":  "Incorreto. O usuário em ambiente hospitalar quase sempre está sob forte carga emocional e necessita de calma e acolhimento."
                                   },
                             "D":  {
                                       "texto":  "Exigir presentes ou agrados como condição para responder com educação.",
                                       "exp":  "Incorreto. Viola a moralidade e configura ilícito funcional."
                                   },
                             "E":  {
                                       "texto":  "Interromper bruscamente a fala do cidadão para demonstrar que o expediente está quase no fim.",
                                       "exp":  "Incorreto. A urbanidade impõe ouvir atentamente e orientar com serenidade."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Urbanidade e cortesia: educação, respeito, cordialidade e espírito de servir. O cidadão é o titular da coisa pública e merece o melhor acolhimento."
    },
    {
        "id":  "eti_12",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Apresentação Pessoal e Identificação Funcional",
        "enunciado":  "A correta identificação funcional por meio de crachá visível e a apresentação pessoal adequada do servidor nas dependências do hospital representam:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Mera vaidade estética sem impacto na segurança ou na qualidade dos serviços.",
                                       "exp":  "Incorreto. A identificação é medida de segurança e transparência pública indispensável."
                                   },
                             "B":  {
                                       "texto":  "Garantia de transparência, segurança para os pacientes e postura profissional que transmite confiabilidade e responsabilidade institucional.",
                                       "exp":  "Correto! O crachá com nome e cargo permite que o usuário saiba com quem está lidando, previne a circulação de impostores e reforça o profissionalismo institucional."
                                   },
                             "C":  {
                                       "texto":  "Obrigação imposta unicamente aos médicos e diretores da fundação.",
                                       "exp":  "Incorreto. O crachá e a identificação funcional aplicam-se a todos os servidores, contratados e terceirizados."
                                   },
                             "D":  {
                                       "texto":  "Violação do direito à privacidade individual do servidor público.",
                                       "exp":  "Incorreto. O princípio da publicidade e a transparência funcional respaldam a identificação do agente público em serviço."
                                   },
                             "E":  {
                                       "texto":  "Exigência dispensável caso o servidor trabalhe na mesma sala há mais de cinco anos.",
                                       "exp":  "Incorreto. O uso da identificação é contínuo e obrigatório durante todo o expediente."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Crachá e identificação visível = Transparência, segurança e respeito ao cidadão. No serviço público, a atuação não é anônima!"
    },
    {
        "id":  "eti_13",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Eficiência, Eficácia e Efetividade",
        "enunciado":  "Na teoria da administração pública e gestão da qualidade, os conceitos de Eficiência, Eficácia e Efetividade possuem significados distintos. Assinale a correlação CORRETA:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Eficiência diz respeito ao atingimento de metas; Eficácia diz respeito ao custo financeiro mínimo.",
                                       "exp":  "Incorreto. A definição está invertida."
                                   },
                             "B":  {
                                       "texto":  "Eficiência refere-se ao método e uso ótimo dos recursos (fazer certo com menor desperdício); Eficácia refere-se ao alcance dos objetivos (atingir a meta); Efetividade refere-se ao impacto real positivo na vida dos cidadãos.",
                                       "exp":  "Correto! Tríade clássica da administração: Eficiência = processos e custos (meios); Eficácia = resultados e metas (fins); Efetividade = transformação social e impacto positivo real (efeito)."
                                   },
                             "C":  {
                                       "texto":  "Efetividade significa realizar o atendimento de forma apressada para bater recorde de quantidade.",
                                       "exp":  "Incorreto. Efetividade é a transformação social real (ex.: diminuir as complicações cardíacas dos pacientes)."
                                   },
                             "D":  {
                                       "texto":  "Eficiência e Eficácia são conceitos obsoletos substituídos pelo princípio da discricionariedade.",
                                       "exp":  "Incorreto. O princípio da eficiência é mandamento constitucional expresso (art. 37)."
                                   },
                             "E":  {
                                       "texto":  "Basta ser eficaz, não importando a quantidade de desperdício de dinheiro público nos processos.",
                                       "exp":  "Incorreto. O administrador público tem o dever de zelo com os recursos da sociedade."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Eficiência = foco nos MEIOS (economia, método, sem desperdício). Eficácia = foco nos RESULTADOS (bater a meta). Efetividade = foco no IMPACTO (melhoria real na vida das pessoas)."
    },
    {
        "id":  "eti_14",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Discrição e Conduta com Pacientes Vulneráveis",
        "enunciado":  "No ambiente hospitalar, chegam frequentemente pacientes fragilizados por perdas, diagnósticos graves ou vulnerabilidade socioeconômica extrema. A atitude de DISCRE�‡�ƒO e CONDUTA �‰TICA recomendada ao Auxiliar Administrativo consiste em:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Fazer comentários em voz alta para que todos no saguão fiquem cientes da situação do paciente.",
                                       "exp":  "Incorreto. Conduta invasiva e violadora da dignidade humana."
                                   },
                             "B":  {
                                       "texto":  "Manter postura reservada, sóbria, respeitando o momento de dor do paciente e de seus familiares, sem expressões de curiosidade mórbida ou exposição desnecessária.",
                                       "exp":  "Correto! A discrição protege o recato do usuário, resguarda sua dor e assegura um atendimento digno e profissional."
                                   },
                             "C":  {
                                       "texto":  "Fotografar o estado de desespero dos familiares para comprovar a superlotação do hospital.",
                                       "exp":  "Incorreto. Atitude totalmente antiética e passível de processo disciplinar."
                                   },
                             "D":  {
                                       "texto":  "Ignorar o paciente para não se envolver emocionalmente com os problemas alheios.",
                                       "exp":  "Incorreto. Discrição não é indiferença ou frieza desumana; é respeito com sensibilidade e presteza."
                                   },
                             "E":  {
                                       "texto":  "Questionar a religião ou os valores da família diante do sofrimento.",
                                       "exp":  "Incorreto. O servidor deve abster-se de julgamentos morais particulares."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Discrição = postura sóbria, respeitosa e ética. Nunca exponha as vulnerabilidades do paciente nem faça comentários fúteis sobre sua dor."
    },
    {
        "id":  "eti_15",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Tolerância e Resolução Pacífica de Conflitos na Recepção",
        "enunciado":  "Um acompanhante muito exaltado aborda o guichê de atendimento reclamando asperamente da espera. O servidor que demonstra inteligência emocional e tolerância deve:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Responder no mesmo tom agressivo para impor autoridade na repartição.",
                                       "exp":  "Incorreto. Retribuir a agressividade escala o conflito e desrespeita a ética do serviço público."
                                   },
                             "B":  {
                                       "texto":  "Escutar atenciosamente sem interromper de imediato, manter a calma e o tom de voz sereno, demonstrar compreensão pela angústia da pessoa e explicar de forma clara os fluxos e providências que estão sendo adotadas.",
                                       "exp":  "Correto! A escuta ativa, o desarmamento de tensões e a firmeza educada (comunicação não violenta) são ferramentas cruciais de inteligência interpessoal."
                                   },
                             "C":  {
                                       "texto":  "Virar as costas e deixar o acompanhante falando sozinho no balcão.",
                                       "exp":  "Incorreto. O abandono do usuário configura descortesia e omissão no atendimento."
                                   },
                             "D":  {
                                       "texto":  "Ameaçar cancelar o atendimento médico do paciente em represália à reclamação.",
                                       "exp":  "Incorreto. Abuso de poder inaceitável e passível de demissão a bem do serviço público."
                                   },
                             "E":  {
                                       "texto":  "Rir da situação e chamar outros colegas para zombar do usuário.",
                                       "exp":  "Incorreto. Conduta vexatória e manifestamente ilícita."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Inteligência emocional no atendimento: não tome a agressividade como algo pessoal. Ouça, mantenha a calma, acolha a angústia e explique com clareza as soluções."
    },
    {
        "id":  "eti_16",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Acolhimento com Classificação de Risco (PNH)",
        "enunciado":  "A Política Nacional de Humanização (HumanizaSUS) preconiza o \u0027Acolhimento\u0027 como diretriz ética e operacional essencial nos serviços de saúde. O acolhimento:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "�‰ uma triagem burocrática realizada apenas por seguranças na portaria do hospital.",
                                       "exp":  "Incorreto. Acolhimento é atitude ética e clínica multiprofissional, não mera triagem policialesca."
                                   },
                             "B":  {
                                       "texto":  "�‰ um processo contínuo de escuta, responsabilização e vínculo que envolve toda a equipe de saúde desde a chegada do usuário, priorizando o atendimento pela gravidade clínica (classificação de risco) e não por privilégios.",
                                       "exp":  "Correto! O acolhimento é postura ética de recepção ao cidadão, articulando escuta sensível com critérios clínicos objetivos de classificação de risco."
                                   },
                             "C":  {
                                       "texto":  "Exige que apenas os médicos escutem as demandas do usuário, sendo proibida a participação da equipe administrativa.",
                                       "exp":  "Incorreto. Toda a equipe (inclusive o corpo administrativo da recepção) participa do acolhimento."
                                   },
                             "D":  {
                                       "texto":  "Consiste em distribuir lanches na sala de espera sem qualquer avaliação de saúde.",
                                       "exp":  "Incorreto. Acolhimento não se reduz a doação de alimentos."
                                   },
                             "E":  {
                                       "texto":  "Aplica-se unicamente aos pacientes particulares conveniados.",
                                       "exp":  "Incorreto. O HumanizaSUS é política pública integral do Sistema �šnico de Saúde."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Acolhimento na PNH: atitude ética de inclusão e escuta qualificada que perpassa todos os trabalhadores do hospital, da portaria ao leito de UTI."
    },
    {
        "id":  "eti_17",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Dimensões da Qualidade em Serviços (Parasuraman e Zeithaml)",
        "enunciado":  "No modelo SERVQUAL de gestão da qualidade em prestação de serviços (Parasuraman, Zeithaml e Berry), a dimensão que reflete o cuidado individualizado, a atenção personalizada e a capacidade de colocar-se no lugar do cliente é denominada:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Tangibilidade.",
                                       "exp":  "Incorreto. Tangibilidade refere-se às instalações físicas, equipamentos, limpeza e aparência dos funcionários."
                                   },
                             "B":  {
                                       "texto":  "Confiabilidade.",
                                       "exp":  "Incorreto. Confiabilidade é a capacidade de prestar o serviço prometido de modo seguro e exato."
                                   },
                             "C":  {
                                       "texto":  "Empatia.",
                                       "exp":  "Correto! A empatia no modelo de qualidade representa o atendimento personalizado, a sensibilidade às necessidades específicas e o cuidado caloroso com o usuário."
                                   },
                             "D":  {
                                       "texto":  "Presteza.",
                                       "exp":  "Incorreto. Presteza (responsividade) é a disposição para ajudar prontamente e fornecer serviços rápidos."
                                   },
                             "E":  {
                                       "texto":  "Segurança.",
                                       "exp":  "Incorreto. Segurança é o conhecimento, a cortesia e a habilidade dos funcionários em inspirar confiança e certeza."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "As 5 dimensões da qualidade em serviços: 1. Tangibilidade (aparência física); 2. Confiabilidade (fazer o que prometeu); 3. Presteza/Responsividade (rapidez); 4. Segurança (confiança técnica); 5. Empatia (atenção individualizada e humana)."
    },
    {
        "id":  "eti_18",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Fatores Determinantes da Qualidade em Serviços Hospitalares",
        "enunciado":  "Em um hospital público de alta complexidade como o Gaspar Vianna, a percepção de qualidade pelo usuário N�ƒO é influenciada apenas pelo procedimento cirúrgico, mas por uma cadeia de fatores determinantes. Assinale o fator primordial para a qualidade administrativa percebida:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A pontualidade, clareza das orientações recebidas e rapidez na localização de prontuários e agendamentos.",
                                       "exp":  "Correto! Na área administrativa, o tempo de espera reduzido, a precisão das informações e a facilidade nos fluxos constroem a base da qualidade do serviço."
                                   },
                             "B":  {
                                       "texto":  "O envio de panfletos com propagandas eleitorais junto com o receituário médico.",
                                       "exp":  "Incorreto. Prática ilegal e vedada no serviço público."
                                   },
                             "C":  {
                                       "texto":  "O bloqueio total de canais de ouvidoria para não gerar estatísticas negativas.",
                                       "exp":  "Incorreto. A ouvidoria transparente é essencial para o aprimoramento da qualidade."
                                   },
                             "D":  {
                                       "texto":  "A imposição de filas sob sol e chuva como teste de paciência do usuário.",
                                       "exp":  "Incorreto. Total desrespeito às condições mínimas de dignidade e conforto."
                                   },
                             "E":  {
                                       "texto":  "A constante substituição de procedimentos operacionais por decisões improvisadas.",
                                       "exp":  "Incorreto. A falta de padronização gera erros e queda brusca na qualidade."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Qualidade no atendimento hospitalar é sistêmica: vai desde a cordialidade na portaria até a rapidez no agendamento e entrega de exames."
    },
    {
        "id":  "eti_19",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Cliente Interno e Fornecedor Interno",
        "enunciado":  "Na gestão moderna da qualidade, cada setor de uma organização atua simultaneamente como cliente e fornecedor de outros setores internos. Em um hospital, quando o setor de Almoxarifado entrega pontualmente seringas e medicamentos conferidos para o Posto de Enfermagem, a Enfermagem atua como:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Cliente externo do hospital.",
                                       "exp":  "Incorreto. Cliente externo é o paciente ou a sociedade usuária do serviço final."
                                   },
                             "B":  {
                                       "texto":  "Cliente interno do Almoxarifado.",
                                       "exp":  "Correto! O posto de enfermagem recebe o produto do trabalho do almoxarifado dentro da organização, atuando como seu cliente interno."
                                   },
                             "C":  {
                                       "texto":  "Fornecedora externa de matérias-primas farmacêuticas.",
                                       "exp":  "Incorreto. O fornecedor externo é a empresa que vendeu as seringas ao hospital."
                                   },
                             "D":  {
                                       "texto":  "�“rgão regulador independente da fundação.",
                                       "exp":  "Incorreto. �‰ um departamento assistencial interno."
                                   },
                             "E":  {
                                       "texto":  "Auditores fiscais da Receita Estadual.",
                                       "exp":  "Incorreto. Não guarda qualquer relação conceitual."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Cadeia Cliente-Fornecedor Interno: Para que o cliente externo (paciente) seja bem atendido, os setores internos devem se tratar mutuamente com excelência, qualidade e rapidez!"
    },
    {
        "id":  "eti_20",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Normatização Técnica e POP (Procedimento Operacional Padrão)",
        "enunciado":  "A adoção de Procedimentos Operacionais Padrão (POPs) e normas técnicas na administração hospitalar visa prioritariamente:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Eliminar a criatividade dos funcionários tornando o trabalho totalmente mecânico e desumano.",
                                       "exp":  "Incorreto. O objetivo não é engessar o ser humano, mas sim evitar falhas críticas e desvios de processo."
                                   },
                             "B":  {
                                       "texto":  "Padronizar rotinas, garantir a segurança dos processos, minimizar erros operacionais e assegurar que as atividades sejam executadas com o mesmo nível de qualidade, independentemente de quem esteja no plantão.",
                                       "exp":  "Correto! O POP uniformiza as ações, garante previsibilidade, rastreabilidade e reduz sensivelmente a ocorrência de erros graves."
                                   },
                             "C":  {
                                       "texto":  "Aumentar a burocracia para justificar a contratação de novos cargos comissionados.",
                                       "exp":  "Incorreto. O POP visa otimizar e racionalizar o serviço, não burocratizar inutilmente."
                                   },
                             "D":  {
                                       "texto":  "Impedir que novos servidores tenham acesso às informações de trabalho.",
                                       "exp":  "Incorreto. Ao contrário: o POP facilita enormemente o treinamento e integração de novos servidores."
                                   },
                             "E":  {
                                       "texto":  "Substituir a legislação vigente por resoluções privadas dos diretores.",
                                       "exp":  "Incorreto. O POP deve sempre respeitar a legislação superior e normas técnicas sanitárias."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "POP (Procedimento Operacional Padrão): instrumento indispensável da qualidade para garantir que uma tarefa seja feita com a mesma segurança e rigor por qualquer servidor da equipe."
    },
    {
        "id":  "eti_21",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Comunicação Interpessoal: O Estilo Assertivo",
        "enunciado":  "No relacionamento interpessoal e trabalho em equipe, a COMUNICA�‡�ƒO ASSERTIVA distingue-se da agressiva e da passiva porque:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "A comunicação assertiva impõe a vontade pessoal através de intimidação e gritos para não ser contestada.",
                                       "exp":  "Incorreto. Esse é o comportamento agressivo."
                                   },
                             "B":  {
                                       "texto":  "A comunicação assertiva cala-se diante de injustiças para evitar desagradar aos colegas de trabalho.",
                                       "exp":  "Incorreto. Esse é o comportamento passivo (ou submisso)."
                                   },
                             "C":  {
                                       "texto":  "A comunicação assertiva expressa sentimentos, opiniões e direitos de forma clara, direta, firme e respeitosa, sem agredir o interlocutor nem violar os seus direitos.",
                                       "exp":  "Correto! Assertividade é o equilíbrio perfeito: defende o ponto de vista com honestidade e firmeza, respeitando a dignidade e a opinião alheia."
                                   },
                             "D":  {
                                       "texto":  "A comunicação assertiva utiliza sarcasmo e piadas indiretas para desestabilizar o oponente.",
                                       "exp":  "Incorreto. Essa é a postura passivo-agressiva."
                                   },
                             "E":  {
                                       "texto":  "A comunicação assertiva só pode ser exercida por servidores com mais de 20 anos de carreira.",
                                       "exp":  "Incorreto. �‰ habilidade comportamental acessível a qualquer profissional."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Estilos de comunicação: Passivo (engole sapo), Agressivo (cospe fogo) e ASSERTIVO (conversa com clareza, firmeza, respeito e empatia)."
    },
    {
        "id":  "eti_22",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Empatia e Escuta Ativa",
        "enunciado":  "A habilidade de \u0027escuta ativa\u0027 em conjunto com a \u0027empatia\u0027 no ambiente de trabalho hospitalar manifesta-se quando o profissional:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Escuta fingindo atenção enquanto pensa no que vai responder para rebater o interlocutor.",
                                       "exp":  "Incorreto. Essa é uma escuta seletiva defensiva, sem empatia real."
                                   },
                             "B":  {
                                       "texto":  "Presta atenção genuína às palavras, gestos e emoções da outra pessoa, suspendendo julgamentos precipitados e buscando compreender verdadeiramente a perspectiva do outro antes de emitir um juízo ou resposta.",
                                       "exp":  "Correto! Escuta ativa e empatia exigem presença plena, ausência de preconceitos e esforço sincero para enxergar o mundo sob a perspectiva do outro."
                                   },
                             "C":  {
                                       "texto":  "Assume todas as culpas da instituição sem procurar as causas dos problemas.",
                                       "exp":  "Incorreto. Empatia não se confunde com conformismo ingênuo."
                                   },
                             "D":  {
                                       "texto":  "Interrompe cada frase da conversa com conselhos pessoais baseados em sua vida íntima.",
                                       "exp":  "Incorreto. A escuta ativa centra-se na experiência do outro, não em exibicionismo pessoal."
                                   },
                             "E":  {
                                       "texto":  "Grava as conversas dos colegas escondido para utilizar em chantagens futuras.",
                                       "exp":  "Incorreto. Conduta manifestamente ilícita e desleal."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Escuta Ativa = Ouvir para compreender (e não apenas para responder). Empatia = Capacidade de calçar os sapatos do outro e sentir sua dor."
    },
    {
        "id":  "eti_23",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Comportamento Receptivo vs Comportamento Defensivo",
        "enunciado":  "Ao receber uma sugestão de melhoria ou um feedback construtivo da chefia sobre uma falha na organização do arquivo, um servidor apresenta COMPORTAMENTO RECEPTIVO quando:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Reage com ironia, apontando que outros servidores cometem erros muito maiores.",
                                       "exp":  "Incorreto. Demonstração típica de comportamento defensivo e imaturo."
                                   },
                             "B":  {
                                       "texto":  "Ouve com abertura de espírito, analisa criticamente a oportunidade de aprimorar seu desempenho, agradece a orientação e busca implementar as correções necessárias.",
                                       "exp":  "Correto! O comportamento receptivo aceita o diálogo, enxerga o feedback como oportunidade de crescimento e atua com maturidade emocional."
                                   },
                             "C":  {
                                       "texto":  "Assume postura de vítima, acusando a chefia de perseguição sem qualquer fundamento fático.",
                                       "exp":  "Incorreto. Expressão nítida de postura defensiva disfuncional."
                                   },
                             "D":  {
                                       "texto":  "Recusa-se a assinar qualquer documento e abandona a repartição no meio da tarde.",
                                       "exp":  "Incorreto. Infração disciplinar sujeita a penalidade."
                                   },
                             "E":  {
                                       "texto":  "Concorda na hora mas decide sabotar os relatórios no dia seguinte.",
                                       "exp":  "Incorreto. Falsidade e má-fé funcionais inaceitáveis."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Receptivo vs Defensivo: Receptivo = acolhe o feedback, reflete e melhora. Defensivo = justifica-se, ataca os outros, fecha-se e não evolui."
    },
    {
        "id":  "eti_24",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Feedback Construtivo e Desenvolvimento da Equipe",
        "enunciado":  "Para que um feedback entre servidores de uma equipe hospitalar seja verdadeiramente construtivo e promova o desenvolvimento profissional, ele deve ser:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Feito na frente de todos os pacientes e acompanhantes para constranger o servidor faltoso.",
                                       "exp":  "Incorreto. Elogia-se em público e corrige-se em particular; o constrangimento público fere a dignidade e a lei."
                                   },
                             "B":  {
                                       "texto":  "Específico, focado em fatos e comportamentos observáveis (e não em rótulos pessoais), tempestivo e acompanhado de sugestões práticas para melhoria.",
                                       "exp":  "Correto! O bom feedback é descritivo, não ataca a personalidade da pessoa, aborda o fato recente com clareza e aponta caminhos de solução."
                                   },
                             "C":  {
                                       "texto":  "Genérico, vago e emitido seis meses após o acontecimento do erro.",
                                       "exp":  "Incorreto. Feedback extemporâneo perde a utilidade e gera ressentimento."
                                   },
                             "D":  {
                                       "texto":  "Centrado em ofensas e desqualificação da capacidade cognitiva do colega.",
                                       "exp":  "Incorreto. Configura assédio moral e violência verbal."
                                   },
                             "E":  {
                                       "texto":  "Transmitido exclusivamente por bilhetes anônimos colados no espelho do banheiro.",
                                       "exp":  "Incorreto. O feedback exige transparência, respeito e maturidade ética direta."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Regra áurea do Feedback: Foco no COMPORTAMENTO (fato observável), nunca na pessoa (rótulo). Faça em particular, com empatia e foco no futuro!"
    },
    {
        "id":  "eti_25",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Gestão de Conflitos: Abordagem Colaborativa (Ganha-Ganha)",
        "enunciado":  "No modelo de gestão de conflitos de Thomas-Kilmann, a abordagem que busca atender plenamente aos interesses de ambas as partes divergentes, estimulando a cooperação mútua para criar uma solução integradora e inovadora, é denominada:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Competição (Ganha-Perde).",
                                       "exp":  "Incorreto. Na competição uma parte impõe sua vontade às custas da outra."
                                   },
                             "B":  {
                                       "texto":  "Acomodação (Perde-Ganha).",
                                       "exp":  "Incorreto. Na acomodação uma parte abre mão de suas necessidades para agradar a outra."
                                   },
                             "C":  {
                                       "texto":  "Colaboração (Ganha-Ganha).",
                                       "exp":  "Correto! A colaboração une alto grau de assertividade e alto grau de cooperação, buscando soluções em que todos ganham e o serviço público sai fortalecido."
                                   },
                             "D":  {
                                       "texto":  "Evitação (Perde-Perde).",
                                       "exp":  "Incorreto. Na evitação o conflito é ignorado e varrido para debaixo do tapete."
                                   },
                             "E":  {
                                       "texto":  "Subserviência cega.",
                                       "exp":  "Incorreto. Não é uma abordagem técnica do modelo de Thomas-Kilmann."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Estilos de Conflito (Thomas-Kilmann): Competição (Ganha-Perde), Acomodação (Perde-Ganha), Evitação (Fuga), Concessão/Compromisso (Meio-termo) e COLABORA�‡�ƒO (Ganha-Ganha)."
    },
    {
        "id":  "eti_26",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Motivação e Clima Organizacional",
        "enunciado":  "O clima organizacional reflete a percepção coletiva dos trabalhadores sobre o ambiente de trabalho e as relações humanas na instituição. Um clima organizacional positivo no hospital contribui diretamente para:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "O aumento do absenteísmo (faltas) e o crescimento de erros de medicação.",
                                       "exp":  "Incorreto. Clima positivo reduz drasticamente faltas e erros operacionais."
                                   },
                             "B":  {
                                       "texto":  "Maior engajamento da equipe, redução do estresse, menor rotatividade e atendimento mais humanizado e resolutivo aos usuários do SUS.",
                                       "exp":  "Correto! Servidores motivados e respeitados trabalham com dedicação e tratam os pacientes com muito mais empatia e presteza."
                                   },
                             "C":  {
                                       "texto":  "A dispensa de auditorias financeiras e o cancelamento do inventário de bens.",
                                       "exp":  "Incorreto. O clima positivo não anula os controles de gestão e legalidade."
                                   },
                             "D":  {
                                       "texto":  "A extinção definitiva dos cargos de nível superior no hospital.",
                                       "exp":  "Incorreto. Incompatível com o funcionamento de uma instituição hospitalar de ensino."
                                   },
                             "E":  {
                                       "texto":  "A autorização para faltar às terças e quintas-feiras sem justificativa.",
                                       "exp":  "Incorreto. Clima positivo anda de mãos dadas com a responsabilidade e assiduidade."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Clima organizacional saudável = servidores felizes, motivados e cooperativos, refletindo diretamente na humanização e segurança do paciente."
    },
    {
        "id":  "eti_27",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Liderança Servidora e Trabalho Multiprofissional",
        "enunciado":  "Em um ambiente hospitalar de alta complexidade onde convivem médicos, enfermeiros, psicólogos, assistentes sociais e auxiliares administrativos, o modelo de LIDERAN�‡A mais condizente com a ética pública e o trabalho multiprofissional é a liderança:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Autocrática, onde o líder impõe decisões pelo medo e centraliza todas as informações.",
                                       "exp":  "Incorreto. A autocracia gera desmotivação, silêncio prejudicial e desunião da equipe."
                                   },
                             "B":  {
                                       "texto":  "Servidora e participativa, na qual o líder atua como facilitador, valoriza o conhecimento de cada membro da equipe, estimula a autonomia responsável e coloca o foco no serviço ao bem comum.",
                                       "exp":  "Correto! O líder servidor apoia a equipe, remove obstáculos e promove a sinergia multiprofissional para que o objetivo coletivo de salvar vidas seja atingido."
                                   },
                             "C":  {
                                       "texto":  "Liberal (laissez-faire) negligente, onde cada um faz o que quer sem qualquer orientação ou acompanhamento.",
                                       "exp":  "Incorreto. Em ambiente hospitalar a falta de liderança gera anarquia e riscos fatais aos pacientes."
                                   },
                             "D":  {
                                       "texto":  "Tirânica e punitiva, baseada em represálias diárias aos mais jovens.",
                                       "exp":  "Incorreto. Viola a dignidade do trabalho e os princípios éticos."
                                   },
                             "E":  {
                                       "texto":  "Centralizada na desconfiança mútua entre os setores assistenciais e administrativos.",
                                       "exp":  "Incorreto. A fragmentação é o maior obstáculo para a eficiência hospitalar."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Liderança Servidora: o líder lidera pelo exemplo, serve aos seus liderados com empatia e constrói um ambiente de cooperação mútua."
    },
    {
        "id":  "eti_28",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Transparência e Lei de Acesso à Informação (Lei 12.527/11)",
        "enunciado":  "A Lei Federal nº 12.527/2011 (Lei de Acesso à Informação - LAI) consagra a publicidade como preceito geral e o sigilo como exceção. Em relação ao atendimento aos cidadãos que solicitam dados públicos da FHCGV, é dever do servidor:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Exigir que o cidadão justifique o motivo particular pelo qual deseja consultar os dados antes de fornecer qualquer resposta.",
                                       "exp":  "Incorreto. O art. 10, § 3º da LAI veda expressamente exigir os motivos da solicitação de informações de interesse público."
                                   },
                             "B":  {
                                       "texto":  "Atender com presteza, fornecendo as informações de interesse público de forma transparente, compreensível e tempestiva, ressalvadas apenas as informações legalmente protegidas por sigilo ou dados pessoais sensíveis.",
                                       "exp":  "Correto! Princípio da transparência pública: a regra é o acesso amplo e facilitado ao cidadão, protegendo-se apenas dados sensíveis e segredos de Estado previstos em lei."
                                   },
                             "C":  {
                                       "texto":  "Negar todas as informações financeiras e de contratos sob a alegação genérica de \u0027segredo institucional\u0027.",
                                       "exp":  "Incorreto. Receitas, despesas, contratos e salários são matérias de transparência ativa obrigatória."
                                   },
                             "D":  {
                                       "texto":  "Cobrar uma taxa em dinheiro em benefício próprio pelo fornecimento de relatórios.",
                                       "exp":  "Incorreto. A busca de informações é gratuita, admitindo-se cobrar apenas o custo das cópias físicas se solicitado."
                                   },
                             "E":  {
                                       "texto":  "Destruir os documentos solicitados para evitar auditorias externas dos órgãos de controle.",
                                       "exp":  "Incorreto. Crime contra a administração pública e ato de improbidade."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Lei de Acesso à Informação (LAI): A publicidade é a REGRA; o sigilo é a EXCE�‡�ƒO! Nunca exija que o cidadão justifique por que quer uma informação pública."
    },
    {
        "id":  "eti_29",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Atendimento Prioritário e Respeito à Diversidade",
        "enunciado":  "De acordo com a Lei Federal nº 10.048/2000 e o Estatuto da Pessoa com Deficiência, no atendimento em repartições e hospitais públicos têm direito à prioridade legal de atendimento presencial:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Pessoas com deficiência, idosos a partir de 60 anos (com prioridade especial acima de 80 anos), gestantes, lactantes, pessoas com crianças de colo e obesos, além de pessoas com transtorno do espectro autista.",
                                       "exp":  "Correto! Rol consagrado nas leis federais e estaduais de garantia e inclusão no atendimento ao público."
                                   },
                             "B":  {
                                       "texto":  "Apenas servidores públicos estaduais e seus familiares imediatos.",
                                       "exp":  "Incorreto. Criar privilégios para servidores em detrimento de vulneráveis viola a impessoalidade e a moralidade."
                                   },
                             "C":  {
                                       "texto":  "Pessoas com maior poder aquisitivo que pagarem pela prioridade na recepção.",
                                       "exp":  "Incorreto. A prioridade é legal e protetiva, sendo vedada qualquer comercialização no SUS."
                                   },
                             "D":  {
                                       "texto":  "Exclusivamente atletas profissionais e policiais militares fardados.",
                                       "exp":  "Incorreto. Não compõem o rol de prioridades prioritárias da Lei 10.048/00."
                                   },
                             "E":  {
                                       "texto":  "Apenas pessoas que apresentarem recomendação por escrito de autoridades políticas locais.",
                                       "exp":  "Incorreto. Prática repugnante de clientelismo e improbidade."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Prioridade Legal: Pessoas com Deficiência, Idosos (60+ e superprioridade 80+), Gestantes, Lactantes, Crianças de colo, Obesos e Autistas (TEA - Lei Berenice Piana)."
    },
    {
        "id":  "eti_30",
        "disciplina":  "etica",
        "materia_nome":  "�‰tica e Qualidade no Serviço Público",
        "topico":  "Uso Consciente dos Recursos Públicos e Sustentabilidade",
        "enunciado":  "O dever ético do servidor público abrange zelar pela economia e pelo patrimônio público, combatendo ativamente o desperdício de insumos. Essa conduta ética manifesta-se no cotidiano administrativo da servidora Dayana ao:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Imprimir documentos desnecessários em apenas um lado da folha e deixar as luzes e computadores ligados durante o fim de semana.",
                                       "exp":  "Incorreto. Comportamento antiecológico e de desperdício inaceitável de recursos públicos."
                                   },
                             "B":  {
                                       "texto":  "Racionalizar impressões, incentivar o uso do processo eletrônico, evitar desperdício de papel, copos plásticos e energia elétrica, conservando os equipamentos da fundação como patrimônio de toda a sociedade.",
                                       "exp":  "Correto! O servidor gerencia bens custeados pelos tributos de todos os cidadãos; a sustentabilidade, a economia e o zelo com os materiais são deveres éticos essenciais."
                                   },
                             "C":  {
                                       "texto":  "Levar resmas de papel e canetas do hospital para utilizar em seu domicílio particular.",
                                       "exp":  "Incorreto. Apropriação indébita de bem público (peculato-furto)."
                                   },
                             "D":  {
                                       "texto":  "Esconder caixas de formulários no armário até que percam a validade.",
                                       "exp":  "Incorreto. Causa dano material e prejuízo financeiro ao erário."
                                   },
                             "E":  {
                                       "texto":  "Descartar toners e cartuchos de tinta no lixo comum sem reciclagem apropriada.",
                                       "exp":  "Incorreto. Causa contaminação química do solo e desrespeita a responsabilidade ambiental."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Zelo e Sustentabilidade: O recurso público vem do suor dos impostos pagos pelo povo. Economizar água, energia e insumos é DEVER �‰TICO de todo servidor!"
    },
    {
        "id":  "rlm_01",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Conceito de Proposição Lógica",
        "enunciado":  "Na lógica proposicional, uma proposição é uma sentença declarativa à qual se pode atribuir um único valor lógico: ou Verdadeiro (V) ou Falso (F), sem ambiguidade. Assinale a alternativa que apresenta uma PROPOSI�‡�ƒO L�“GICA VÁLIDA:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Que dia maravilhoso para realizar a prova em Belém!\u0027",
                                       "exp":  "Incorreto. Frases exclamativas expressam emoção/sentimento e não possuem valor de verdadeiro ou falso."
                                   },
                             "B":  {
                                       "texto":  "\u0027Você já revisou as matérias de conhecimentos específicos hoje?\u0027",
                                       "exp":  "Incorreto. Frases interrogativas são perguntas e não podem ser julgadas como V ou F."
                                   },
                             "C":  {
                                       "texto":  "\u0027Dayana Maia foi aprovada em 1º lugar no concurso da FHCGV.\u0027",
                                       "exp":  "Correto! �‰ uma sentença declarativa, possui sujeito e predicado com verbo, e pode ser valorada objetivamente como Verdadeira ou Falsa."
                                   },
                             "D":  {
                                       "texto":  "\u0027Organize imediatamente todas as pastas do almoxarifado!\u0027",
                                       "exp":  "Incorreto. Frases imperativas são ordens e não admitem valoração lógica de V ou F."
                                   },
                             "E":  {
                                       "texto":  "\u0027x + 5 = 12\u0027",
                                       "exp":  "Incorreto. Trata-se de uma sentença aberta, pois sem o valor da variável \u0027x\u0027 é impossível determinar se é V ou F."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "N�ƒO são proposições: Frases interrogativas (?), exclamativas (!), imperativas (ordens), sentenças abertas (variáveis sem valor) e paradoxos."
    },
    {
        "id":  "rlm_02",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Conectivo Conjunção (E / ^)",
        "enunciado":  "Considere a proposição composta: \u0027Dayana estuda com disciplina E ela conquista a aprovação no concurso\u0027. Para que essa proposição conjuntiva (P ^ Q) seja considerada VERDADEIRA, é necessário que:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Pelo menos uma das proposições simples seja verdadeira.",
                                       "exp":  "Incorreto. Pelo menos uma ser verdadeira é a regra da disjunção inclusiva (OU), não da conjunção (E)."
                                   },
                             "B":  {
                                       "texto":  "Ambas as proposições simples (\u0027Dayana estuda\u0027 e \u0027ela conquista a aprovação\u0027) sejam rigorosamente verdadeiras.",
                                       "exp":  "Correto! Na tabela-verdade do conectivo \u0027E\u0027 (conjunção), a proposição composta só é VERDADEIRA se TODAS as parcelas forem verdadeiras (V ^ V = V)."
                                   },
                             "C":  {
                                       "texto":  "A primeira seja verdadeira e a segunda seja falsa.",
                                       "exp":  "Incorreto. V ^ F resulta em FALSO."
                                   },
                             "D":  {
                                       "texto":  "Ambas sejam falsas simultaneamente.",
                                       "exp":  "Incorreto. F ^ F resulta em FALSO."
                                   },
                             "E":  {
                                       "texto":  "A segunda proposição anule a primeira por contradição.",
                                       "exp":  "Incorreto. Não há anulação em conjunção."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Tabela-verdade da Conjunção (E / ^): Só é VERDADE quando TODAS forem verdades (V e V = V). Qualquer falsidade contamina e torna tudo falso."
    },
    {
        "id":  "rlm_03",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Conectivo Disjunção Inclusiva (OU / v)",
        "enunciado":  "A proposição composta \u0027O servidor Dayana está de plantão OU o servidor Marcos está de folga\u0027 (P v Q) será FALSA unicamente quando:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Ambas as proposições simples forem falsas.",
                                       "exp":  "Correto! Na tabela-verdade do \u0027OU\u0027 inclusivo (v), a proposição composta só resulta em FALSO quando TODAS as partes forem falsas (F v F = F)."
                                   },
                             "B":  {
                                       "texto":  "Ambas as proposições simples forem verdadeiras.",
                                       "exp":  "Incorreto. V v V resulta em VERDADEIRO."
                                   },
                             "C":  {
                                       "texto":  "A primeira for verdadeira e a segunda for falsa.",
                                       "exp":  "Incorreto. V v F resulta em VERDADEIRO."
                                   },
                             "D":  {
                                       "texto":  "A primeira for falsa e a segunda for verdadeira.",
                                       "exp":  "Incorreto. F v V resulta em VERDADEIRO."
                                   },
                             "E":  {
                                       "texto":  "Houver uma condicional implícita na oração.",
                                       "exp":  "Incorreto. O conectivo é puramente a disjunção inclusiva."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Tabela-verdade do OU (Disjunção inclusiva): Basta UMA verdade para que tudo seja verdade! Só é FALSA se ambas forem falsas (F ou F = F)."
    },
    {
        "id":  "rlm_04",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Conectivo Condicional (Se... então / -\u003e)",
        "enunciado":  "Na tabela-verdade da proposição condicional \u0027Se chover em Belém, então o trânsito da Almirante Barroso ficará lento\u0027 (P -\u003e Q), a proposição composta só será FALSA na seguinte hipótese:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Se chover (P é Verdadeiro) e o trânsito N�ƒO ficar lento (Q é Falso).",
                                       "exp":  "Correto! O famoso caso da \u0027Vera Fischer é Falsa\u0027: na condicional (P -\u003e Q), o único caso que resulta em Falso é V -\u003e F = F."
                                   },
                             "B":  {
                                       "texto":  "Se chover (V) e o trânsito ficar lento (V).",
                                       "exp":  "Incorreto. V -\u003e V resulta em VERDADEIRO."
                                   },
                             "C":  {
                                       "texto":  "Se não chover (F) e o trânsito ficar lento (V).",
                                       "exp":  "Incorreto. F -\u003e V resulta em VERDADEIRO."
                                   },
                             "D":  {
                                       "texto":  "Se não chover (F) e o trânsito não ficar lento (F).",
                                       "exp":  "Incorreto. F -\u003e F resulta em VERDADEIRO."
                                   },
                             "E":  {
                                       "texto":  "Em todas as hipóteses possíveis de valoração.",
                                       "exp":  "Incorreto. A condicional tem 3 casos verdadeiros e apenas 1 falso."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Macete definitivo da Condicional (Se... então): V -\u003e F = F (Vera Fischer é Falsa!). Em todos os outros casos (V-\u003eV, F-\u003eV, F-\u003eF), o resultado é VERDADEIRO!"
    },
    {
        "id":  "rlm_05",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Tautologia, Contradição e Contingência",
        "enunciado":  "Uma proposição composta cuja tabela-verdade resulta sempre em VERDADEIRO (V) em todas as suas linhas, independentemente dos valores lógicos das proposições simples que a compõem, é classificada como:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Contradição.",
                                       "exp":  "Incorreto. Contradição é aquela que resulta sempre em FALSO em todas as linhas."
                                   },
                             "B":  {
                                       "texto":  "Tautologia.",
                                       "exp":  "Correto! Tautologia é uma proposição que é 100% verdadeira em todas as combinações lógicas possíveis (ex.: \u0027P v ~P\u0027 - chove ou não chove)."
                                   },
                             "C":  {
                                       "texto":  "Contingência.",
                                       "exp":  "Incorreto. Contingência é a proposição que apresenta pelo menos um V e pelo menos um F na tabela-verdade."
                                   },
                             "D":  {
                                       "texto":  "Silogismo nulo.",
                                       "exp":  "Incorreto. Termo sem definição formal na lógica proposicional clássica."
                                   },
                             "E":  {
                                       "texto":  "Paradoxo de Russell.",
                                       "exp":  "Incorreto. Paradoxo não admite valoração lógica consistente."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Tautologia = SEMPRE VERDADEIRA (100% V). Contradição = SEMPRE FALSA (100% F). Contingência = Mista (tem V e tem F)."
    },
    {
        "id":  "rlm_06",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Equivalência Lógica da Condicional: Contrapositiva",
        "enunciado":  "A proposição: \u0027Se Dayana estuda todo dia, então ela é aprovada no concurso da FHCGV\u0027 (P -\u003e Q) é logicamente EQUIVALENTE à sua contrapositiva, expressa por:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Se Dayana não estuda todo dia, então ela não é aprovada\u0027.",
                                       "exp":  "Incorreto. Essa é a proposição inversa (~P -\u003e ~Q), que N�ƒO é equivalente à condicional original."
                                   },
                             "B":  {
                                       "texto":  "\u0027Se Dayana não é aprovada no concurso da FHCGV, então ela não estuda todo dia\u0027.",
                                       "exp":  "Correto! A regra da contrapositiva: inverte-se a ordem das proposições e negam-se ambas (~Q -\u003e ~P). Essa equivalência é 100% válida!"
                                   },
                             "C":  {
                                       "texto":  "\u0027Se Dayana é aprovada, então ela estuda todo dia\u0027.",
                                       "exp":  "Incorreto. Essa é a recíproca (Q -\u003e P), que não possui equivalência lógica necessária."
                                   },
                             "D":  {
                                       "texto":  "\u0027Dayana estuda todo dia e não é aprovada\u0027.",
                                       "exp":  "Incorreto. Essa é a NEGA�‡�ƒO da condicional, e não sua equivalência."
                                   },
                             "E":  {
                                       "texto":  "\u0027Dayana é aprovada se e somente se não estudar todo dia\u0027.",
                                       "exp":  "Incorreto. Transforma em bicondicional com sentidos invertidos."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Equivalência nº 1 da Condicional (Contrapositiva): \u0027Se P, então Q\u0027 \u003c=\u003e \u0027Se N�ƒO Q, então N�ƒO P\u0027 (Cruza e nega tudo!)."
    },
    {
        "id":  "rlm_07",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Equivalência Lógica da Condicional: Regra NeOuMa",
        "enunciado":  "Outra importante equivalência lógica da condicional \u0027Se P, então Q\u0027 é transformar a condicional em uma disjunção (OU), pela regra \u0027Nega a primeira OU Mantém a segunda\u0027 (~P v Q). Assim, a equivalência de \u0027Se o processo foi assinado, então o pagamento foi liberado\u0027 é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027O processo não foi assinado OU o pagamento foi liberado\u0027.",
                                       "exp":  "Correto! Aplicação direta da regra: Nega a 1ª (\u0027O processo não foi assinado\u0027) + OU + Mantém a 2ª (\u0027o pagamento foi liberado\u0027)."
                                   },
                             "B":  {
                                       "texto":  "\u0027O processo foi assinado E o pagamento não foi liberado\u0027.",
                                       "exp":  "Incorreto. Essa é a negação da condicional, não a equivalência."
                                   },
                             "C":  {
                                       "texto":  "\u0027O processo não foi assinado E o pagamento foi liberado\u0027.",
                                       "exp":  "Incorreto. O conectivo deve ser o \u0027OU\u0027, e não o \u0027E\u0027."
                                   },
                             "D":  {
                                       "texto":  "\u0027Se o pagamento foi liberado, então o processo foi assinado\u0027.",
                                       "exp":  "Incorreto. Simples inversão recíproca não garante equivalência lógica."
                                   },
                             "E":  {
                                       "texto":  "\u0027Nem o processo foi assinado nem o pagamento liberado\u0027.",
                                       "exp":  "Incorreto. Conectivo de negação conjunta."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Equivalência nº 2 da Condicional (Regra do Neymar / NeOuMa): P -\u003e Q \u003c=\u003e ~P v Q (Nega a primeira, coloca OU, Mantém a segunda)."
    },
    {
        "id":  "rlm_08",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Negação da Condicional (Regra do MAN�‰)",
        "enunciado":  "Para negar uma proposição condicional do tipo \u0027Se P, então Q\u0027, aplica-se a consagrada regra do MAN�‰: Mantém a primeira E Nega a segunda [P ^ ~Q]. Logo, a negação lógica de \u0027Se o paciente tem febre, então ele toma o medicamento\u0027 é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Se o paciente não tem febre, então ele não toma o medicamento\u0027.",
                                       "exp":  "Incorreto. Não se nega condicional mantendo o conectivo \u0027Se... então\u0027."
                                   },
                             "B":  {
                                       "texto":  "\u0027O paciente tem febre E ele N�ƒO toma o medicamento\u0027.",
                                       "exp":  "Correto! Regra do MAN�‰: MANT�‰M a 1ª (\u0027O paciente tem febre\u0027) + conectivo \u0027E\u0027 + NEGA a 2ª (\u0027ele N�ƒO toma o medicamento\u0027)."
                                   },
                             "C":  {
                                       "texto":  "\u0027O paciente não tem febre OU ele toma o medicamento\u0027.",
                                       "exp":  "Incorreto. Essa é a equivalência lógica (~P v Q), não a negação."
                                   },
                             "D":  {
                                       "texto":  "\u0027O paciente não tem febre e toma o medicamento\u0027.",
                                       "exp":  "Incorreto. Negou a primeira em vez de mantê-la."
                                   },
                             "E":  {
                                       "texto":  "\u0027O paciente sempre toma medicamento mesmo sem febre\u0027.",
                                       "exp":  "Incorreto. Frase vaga sem correspondência formal de negação."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A negação de \u0027Se P, então Q\u0027 NUNCA tem \u0027Se... então\u0027! Regra do MAN�‰: Mantém a primeira E Nega a segunda (P ^ ~Q)."
    },
    {
        "id":  "rlm_09",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Leis de De Morgan: Negação da Conjunção (E)",
        "enunciado":  "Pela 1ª Lei de De Morgan, para negar uma proposição composta ligada pelo conectivo \u0027E\u0027 [~(P ^ Q)], deve-se negar ambas as proposições simples e trocar o \u0027E\u0027 pelo \u0027OU\u0027 [~P v ~Q]. Portanto, a negação de \u0027Carlos é auxiliar administrativo E Beatriz é enfermeira\u0027 é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Carlos não é auxiliar administrativo E Beatriz não é enfermeira\u0027.",
                                       "exp":  "Incorreto. Manteve o conectivo \u0027E\u0027. A negação exige a troca pelo \u0027OU\u0027."
                                   },
                             "B":  {
                                       "texto":  "\u0027Carlos não é auxiliar administrativo OU Beatriz não é enfermeira\u0027.",
                                       "exp":  "Correto! Aplicação pura de De Morgan: nega a primeira, troca \u0027E\u0027 por \u0027OU\u0027, e nega a segunda."
                                   },
                             "C":  {
                                       "texto":  "\u0027Carlos é auxiliar administrativo se e somente se Beatriz for enfermeira\u0027.",
                                       "exp":  "Incorreto. Transformou em bicondicional sem fundamento."
                                   },
                             "D":  {
                                       "texto":  "\u0027Carlos e Beatriz exercem a mesma função hospitalar\u0027.",
                                       "exp":  "Incorreto. Afirmação sem relação com a regra lógica formal."
                                   },
                             "E":  {
                                       "texto":  "\u0027Se Carlos não é auxiliar, então Beatriz é enfermeira\u0027.",
                                       "exp":  "Incorreto. Transformou indevidamente em condicional."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "De Morgan 1: Negação de (P e Q) = (~P ou ~Q). Nega tudo e troca o \u0027E\u0027 pelo \u0027OU\u0027!"
    },
    {
        "id":  "rlm_10",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Leis de De Morgan: Negação da Disjunção (OU)",
        "enunciado":  "Pela 2ª Lei de De Morgan, a negação da disjunção inclusiva [~(P v Q)] consiste em negar ambas as proposições e substituir o conectivo \u0027OU\u0027 pelo \u0027E\u0027 [~P ^ ~Q]. Sendo assim, a negação de \u0027Hoje é feriado OU haverá atendimento ambulatorial\u0027 é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Hoje N�ƒO é feriado E N�ƒO haverá atendimento ambulatorial\u0027.",
                                       "exp":  "Correto! Nega a primeira (\u0027Hoje não é feriado\u0027), troca o \u0027OU\u0027 por \u0027E\u0027, e nega a segunda (\u0027não haverá atendimento ambulatorial\u0027)."
                                   },
                             "B":  {
                                       "texto":  "\u0027Hoje não é feriado OU não haverá atendimento ambulatorial\u0027.",
                                       "exp":  "Incorreto. Deixou o \u0027OU\u0027 inalterado."
                                   },
                             "C":  {
                                       "texto":  "\u0027Se hoje não for feriado, haverá atendimento\u0027.",
                                       "exp":  "Incorreto. Essa é uma equivalência da condicional, não a negação."
                                   },
                             "D":  {
                                       "texto":  "\u0027Hoje é feriado e haverá atendimento ambulatorial\u0027.",
                                       "exp":  "Incorreto. Apenas trocou o conectivo sem negar as proposições."
                                   },
                             "E":  {
                                       "texto":  "\u0027Ou hoje é feriado ou haverá atendimento ambulatorial\u0027.",
                                       "exp":  "Incorreto. Transformou em disjunção exclusiva."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "De Morgan 2: Negação de (P ou Q) = (~P e ~Q). Nega tudo e troca o \u0027OU\u0027 pelo \u0027E\u0027!"
    },
    {
        "id":  "rlm_11",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Quantificadores Lógicos: Negação de \u0027TODO\u0027",
        "enunciado":  "A proposição categórica \u0027Todo servidor público da fundação é pontual\u0027 utiliza o quantificador universal afirmativo. A NEGA�‡�ƒO lógica dessa afirmação é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Nenhum servidor público da fundação é pontual\u0027.",
                                       "exp":  "Incorreto. Erro clássico de concurso: o oposto/contrário de \u0027Todo\u0027 N�ƒO é \u0027Nenhum\u0027!"
                                   },
                             "B":  {
                                       "texto":  "\u0027Pelo menos um servidor público da fundação N�ƒO é pontual\u0027 (ou \u0027Existe algum servidor que não é pontual\u0027).",
                                       "exp":  "Correto! Para quebrar a regra de que \u0027Todo A é B\u0027, basta que exista UM �šNICO elemento que não seja (Regra do PEA: Pelo menos um / Existe / Algum ... N�ƒO é)."
                                   },
                             "C":  {
                                       "texto":  "\u0027Todos os servidores públicos são impontuais\u0027.",
                                       "exp":  "Incorreto. Equivalente a \u0027nenhum é pontual\u0027, não é a negação lógica."
                                   },
                             "D":  {
                                       "texto":  "\u0027A pontualidade é facultativa aos servidores\u0027.",
                                       "exp":  "Incorreto. Sentença administrativa subjetiva sem rigor lógico formal."
                                   },
                             "E":  {
                                       "texto":  "\u0027A maioria dos servidores é pontual\u0027.",
                                       "exp":  "Incorreto. \u0027Maioria\u0027 não nega a universalidade absoluta."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "CUIDADO: A negação de TODO N�ƒO é NENHUM! A negação de TODO é: Pelo menos um N�ƒO / Algum N�ƒO / Existe um que N�ƒO (Regra do PEA + N�ƒO)."
    },
    {
        "id":  "rlm_12",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Quantificadores Lógicos: Negação de \u0027NENHUM\u0027",
        "enunciado":  "A negação lógica da proposição \u0027Nenhum leito da enfermaria está desocupado\u0027 é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "\u0027Todos os leitos da enfermaria estão desocupados\u0027.",
                                       "exp":  "Incorreto. O contrário de nenhum não é todos."
                                   },
                             "B":  {
                                       "texto":  "\u0027Existe pelo menos um leito da enfermaria que está desocupado\u0027 (ou \u0027Algum leito está desocupado\u0027).",
                                       "exp":  "Correto! Para derrubar a afirmação de que \u0027nenhum está desocupado\u0027, basta encontrar apenas UM leito desocupado (Algum / Pelo menos um / Existe)."
                                   },
                             "C":  {
                                       "texto":  "\u0027Nenhum leito da enfermaria está ocupado\u0027.",
                                       "exp":  "Incorreto. Troca indevida de termos sem lógica formal."
                                   },
                             "D":  {
                                       "texto":  "\u0027Apenas a metade dos leitos está desocupada\u0027.",
                                       "exp":  "Incorreto. Não se pode fixar fração numérica específica."
                                   },
                             "E":  {
                                       "texto":  "\u0027Todos os leitos estão em manutenção predial\u0027.",
                                       "exp":  "Incorreto. Proposição alheia à estrutura de negação."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A negação de NENHUM é: ALGUM / PELO MENOS UM / EXISTE (sem a palavra \u0027não\u0027). Basta um existir para que \u0027nenhum\u0027 seja mentira!"
    },
    {
        "id":  "rlm_13",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Argumentos Lógicos e Silogismo",
        "enunciado":  "Considere as seguintes premissas verdadeiras: 1) Todo Auxiliar Administrativo da FHCGV utiliza o sistema eletrônico; 2) Dayana Maia é Auxiliar Administrativo da FHCGV. A conclusão logicamente VÁLIDA e necessária que se deduz dessas premissas é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Dayana Maia utiliza o sistema eletrônico.",
                                       "exp":  "Correto! Trata-se de silogismo dedutivo categórico válido (Modus Ponens): se todo elemento do conjunto A pertence a B, e Dayana pertence a A, Dayana pertence obrigatoriamente a B."
                                   },
                             "B":  {
                                       "texto":  "Dayana Maia não sabe utilizar o sistema eletrônico.",
                                       "exp":  "Incorreto. Contradiz diretamente as premissas."
                                   },
                             "C":  {
                                       "texto":  "Apenas os auxiliares administrativos têm acesso ao sistema eletrônico.",
                                       "exp":  "Incorreto. As premissas não afirmam exclusividade (outros cargos também podem utilizar)."
                                   },
                             "D":  {
                                       "texto":  "Nenhum outro servidor utiliza o sistema eletrônico.",
                                       "exp":  "Incorreto. Generalização indevida não contida nas premissas."
                                   },
                             "E":  {
                                       "texto":  "Dayana Maia prefere utilizar relatórios em papel.",
                                       "exp":  "Incorreto. Não há essa informação nas premissas."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Dedução Lógica (Silogismo Categórico): Premissa Maior (Todo A é B) + Premissa Menor (X é A) =\u003e Conclusão infalível: X é B."
    },
    {
        "id":  "rlm_14",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Problemas de Verdades e Mentiras",
        "enunciado":  "Três servidores (Ana, Bruno e Carlos) foram interrogados sobre quem assinou um formulário com erro. Sabe-se que APENAS UM deles disse a verdade e que apenas um cometeu o erro. Eles declararam: Ana disse: \u0027Bruno cometeu o erro\u0027; Bruno disse: \u0027Carlos cometeu o erro\u0027; Carlos disse: \u0027Bruno está mentindo\u0027. Quem disse a verdade e quem cometeu o erro?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Carlos disse a verdade e Ana cometeu o erro.",
                                       "exp":  "Correto! Bruno e Carlos fazem declarações contraditórias (\u0027Carlos cometeu o erro\u0027 vs \u0027Bruno está mentindo\u0027). Logo, um dos dois fala a verdade e o outro mente. Como apenas UM fala a verdade, Ana obrigatoriamente mente (\u0027Bruno cometeu o erro\u0027 é falso, logo Bruno não errou). Se Bruno mente, Carlos não errou. Portanto, o culpado pelo erro foi Ana, e Carlos disse a verdade!"
                                   },
                             "B":  {
                                       "texto":  "Ana disse a verdade e Bruno cometeu o erro.",
                                       "exp":  "Incorreto. Se Ana falasse a verdade, Carlos também estaria falando a verdade (duas verdades, violando o enunciado de que apenas um diz a verdade)."
                                   },
                             "C":  {
                                       "texto":  "Bruno disse a verdade e Carlos cometeu o erro.",
                                       "exp":  "Incorreto. Se Bruno fala a verdade, Ana mentiu e Carlos mentiu, mas Carlos dizer que Bruno mente seria coerente com ser falso. Todavia, a análise das declarações opostas impõe a solução única em A."
                                   },
                             "D":  {
                                       "texto":  "Todos os três servidores disseram a verdade.",
                                       "exp":  "Incorreto. O enunciado fixou que exatamente um diz a verdade."
                                   },
                             "E":  {
                                       "texto":  "Não é possível determinar com as informações dadas.",
                                       "exp":  "Incorreto. A contradição entre Bruno e Carlos resolve o enigma com exatidão."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Problemas de Verdades e Mentiras: procure sempre duas afirmações CONTRADIT�“RIAS! Se Bruno e Carlos se contradizem, a única verdade está entre eles. Logo, Ana mente com certeza!"
    },
    {
        "id":  "rlm_15",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Associação Lógica de Pessoas e Cargos",
        "enunciado":  "Três candidatas (Dayana, Fernanda e Juliana) prestaram concurso para cargos diferentes: uma para Auxiliar Administrativo, outra para Enfermeira e outra para Assistente Social (não necessariamente nessa ordem). Sabe-se que: 1) Dayana não é Enfermeira; 2) Juliana não é Enfermeira e não é Auxiliar Administrativo. Qual é o cargo da Dayana?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "Enfermeira.",
                                       "exp":  "Incorreto. A premissa 1 afirma textualmente que Dayana N�ƒO é Enfermeira."
                                   },
                             "B":  {
                                       "texto":  "Assistente Social.",
                                       "exp":  "Incorreto. Como Juliana não é Enfermeira nem Auxiliar, Juliana é a Assistente Social. Logo Dayana não pode ser Assistente Social."
                                   },
                             "C":  {
                                       "texto":  "Auxiliar Administrativo.",
                                       "exp":  "Correto! Juliana não é Enfermeira nem Auxiliar, logo Juliana é Assistente Social. Sobraram Dayana e Fernanda. Como Dayana não é Enfermeira, Dayana só pode ser a Auxiliar Administrativo (e Fernanda é a Enfermeira)!"
                                   },
                             "D":  {
                                       "texto":  "Médica cardiologista.",
                                       "exp":  "Incorreto. Cargo não citado no universo do problema."
                                   },
                             "E":  {
                                       "texto":  "Técnica em Radiologia.",
                                       "exp":  "Incorreto. Cargo alheio ao enunciado."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Tabela de Associação Lógica: 1) Juliana não é Enf nem Aux =\u003e Juliana = Assistente Social. 2) Dayana não é Enf =\u003e Dayana = Auxiliar Administrativo. Rápido e infalível!"
    },
    {
        "id":  "rlm_16",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Sequência Lógica Numérica",
        "enunciado":  "Observe a sequência numérica lógica: 2, 5, 11, 23, 47, ... O próximo termo que mantém o mesmo padrão de formação é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "84.",
                                       "exp":  "Incorreto. Cálculo não condiz com a regra da sequência."
                                   },
                             "B":  {
                                       "texto":  "95.",
                                       "exp":  "Correto! O padrão é: cada termo é o dobro do anterior mais 1 (termo �— 2 + 1): 2�—2+1=5; 5�—2+1=11; 11�—2+1=23; 23�—2+1=47; logo, 47�—2 + 1 = 94 + 1 = 95!"
                                   },
                             "C":  {
                                       "texto":  "96.",
                                       "exp":  "Incorreto. Erro de soma (+2 em vez de +1)."
                                   },
                             "D":  {
                                       "texto":  "102.",
                                       "exp":  "Incorreto. Fora da progressão multiplicativa."
                                   },
                             "E":  {
                                       "texto":  "72.",
                                       "exp":  "Incorreto. Valor muito baixo para o crescimento geométrico da sequência."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Padrão da sequência: dobro mais um (�—2 + 1) ou sequência das diferenças dobrando (+3, +6, +12, +24, +48). 47 + 48 = 95!"
    },
    {
        "id":  "rlm_17",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Sequência Lógica de Letras",
        "enunciado":  "Considere a sequência de letras do alfabeto oficial de 26 letras: B, D, G, K, P, ... Mantendo o padrão lógico do intervalo entre as letras, a próxima letra da sequência é:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "T.",
                                       "exp":  "Incorreto. Intervalo menor que o padrão crescente."
                                   },
                             "B":  {
                                       "texto":  "U.",
                                       "exp":  "Incorreto. Equivale a saltar 4 posições."
                                   },
                             "C":  {
                                       "texto":  "V.",
                                       "exp":  "Correto! Posições no alfabeto: B (2), D (4) -\u003e pula 1 (+2); G (7) -\u003e pula 2 (+3); K (11) -\u003e pula 3 (+4); P (16) -\u003e pula 4 (+5); próximo deve pular 5 letras (+6): 16 + 6 = 22ª letra = V!"
                                   },
                             "D":  {
                                       "texto":  "S.",
                                       "exp":  "Incorreto. Posição 19, cálculo incorreto."
                                   },
                             "E":  {
                                       "texto":  "Z.",
                                       "exp":  "Incorreto. Posição final do alfabeto."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Posições no alfabeto: B(2), D(4), G(7), K(11), P(16). As diferenças são: +2, +3, +4, +5... A próxima diferença é +6 =\u003e 16 + 6 = 22 =\u003e Letra V!"
    },
    {
        "id":  "rlm_18",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Princípio da Regressão ou Reversão",
        "enunciado":  "Um servidor do protocolo recebeu uma quantidade X de processos. Pela manhã, ele despachou a metade do total e mais 4 processos. �€ tarde, ele despachou a metade do que restou e mais 2 processos. No final do dia, restou apenas 1 processo em sua mesa. Qual era a quantidade inicial X de processos?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "18.",
                                       "exp":  "Incorreto. Com 18: manhã despacha 9+4=13, sobram 5. Tarde despacha 2,5+2=4,5, sobra 0,5."
                                   },
                             "B":  {
                                       "texto":  "20.",
                                       "exp":  "Correto! Pelo Princípio da Reversão (de trás para frente com operações inversas): Restou 1. Antes de despachar 2, tinha 1 + 2 = 3. Esse 3 era a metade restante da tarde, logo antes tinha 3 �— 2 = 6 processos. Na manhã, antes de despachar 4, tinha 6 + 4 = 10. Esse 10 era a metade do total inicial, logo o total inicial era 10 �— 2 = 20 processos!"
                                   },
                             "C":  {
                                       "texto":  "24.",
                                       "exp":  "Incorreto. 24 -\u003e metade+4 = 16 (sobram 8) -\u003e metade+2 = 6 (sobram 2, e não 1)."
                                   },
                             "D":  {
                                       "texto":  "16.",
                                       "exp":  "Incorreto. 16 -\u003e 8+4=12 (sobram 4) -\u003e 2+2=4 (sobra 0)."
                                   },
                             "E":  {
                                       "texto":  "30.",
                                       "exp":  "Incorreto. Total excessivo."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Princípio da Reversão (caminho inverso): Comece do fim! Restou 1 -\u003e soma 2 = 3 -\u003e dobra = 6 -\u003e soma 4 = 10 -\u003e dobra = 20! Verificação: 20 -\u003e metade (10) + 4 = 14 despachados, restam 6 -\u003e metade (3) + 2 = 5 despachados, resta 1!"
    },
    {
        "id":  "rlm_19",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Conjuntos e Diagrama de Venn (2 Conjuntos)",
        "enunciado":  "Em um setor hospitalar com 80 servidores, uma pesquisa revelou que 50 utilizam o sistema eletrônico de ponto, 45 utilizam o sistema informatizado de faturamento e 25 servidores utilizam AMBOS os sistemas. Quantos servidores desse setor N�ƒO utilizam nenhum desses dois sistemas?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "5.",
                                       "exp":  "Incorreto. Cálculo com erro de soma."
                                   },
                             "B":  {
                                       "texto":  "10.",
                                       "exp":  "Correto! Pela fórmula da união de conjuntos: n(A u B) = n(A) + n(B) - n(A n B) = 50 + 45 - 25 = 70 servidores utilizam pelo menos um sistema. Como o total é de 80 servidores: 80 - 70 = 10 servidores não utilizam nenhum dos dois!"
                                   },
                             "C":  {
                                       "texto":  "15.",
                                       "exp":  "Incorreto. Erro de subtração."
                                   },
                             "D":  {
                                       "texto":  "20.",
                                       "exp":  "Incorreto. Se somar sem subtrair a interseção."
                                   },
                             "E":  {
                                       "texto":  "25.",
                                       "exp":  "Incorreto. Corresponde à interseção e não aos que estão fora."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Fórmula de Venn: Total que usa = A + B - Ambos = 50 + 45 - 25 = 70. Fora dos conjuntos = Total Geral - 70 = 80 - 70 = 10 servidores!"
    },
    {
        "id":  "rlm_20",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Conjuntos e Diagrama de Venn (3 Conjuntos)",
        "enunciado":  "Em uma triagem médica de 100 pacientes com sintomas respiratórios: 60 têm febre, 50 têm tosse e 40 têm dor de garganta. Além disso, 25 têm febre e tosse, 20 têm febre e dor de garganta, 15 têm tosse e dor de garganta, e 10 pacientes apresentam OS TR�ŠS sintomas simultaneamente. Quantos pacientes N�ƒO apresentam nenhum desses três sintomas?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "0 (todos têm pelo menos um sintoma).",
                                       "exp":  "Correto! Fórmula da união de 3 conjuntos: n(A u B u C) = (A + B + C) - (duplas) + (trio) = (60 + 50 + 40) - (25 + 20 + 15) + 10 = 150 - 60 + 10 = 100 pacientes. Como o total entrevistado foi de exatamente 100 pacientes, 100 - 100 = 0 pacientes sem sintomas!"
                                   },
                             "B":  {
                                       "texto":  "5.",
                                       "exp":  "Incorreto. A união perfaz exatamente 100."
                                   },
                             "C":  {
                                       "texto":  "10.",
                                       "exp":  "Incorreto. 10 é o número que possui os 3 sintomas."
                                   },
                             "D":  {
                                       "texto":  "15.",
                                       "exp":  "Incorreto. Erro no balanceamento das subtrações."
                                   },
                             "E":  {
                                       "texto":  "20.",
                                       "exp":  "Incorreto. Valor sem suporte no cálculo de Venn."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Fórmula dos 3 Conjuntos: União = (Soma dos 3) - (Soma das 3 duplas) + (Interseção tripla) = 150 - 60 + 10 = 100. Todos os 100 pacientes têm algum sintoma!"
    },
    {
        "id":  "rlm_21",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Razão e Proporção: Divisão Diretamente Proporcional",
        "enunciado":  "Uma gratificação especial de R$ 3.600,00 será dividida entre dois servidores em partes DIRETAMENTE PROPORCIONAIS ao tempo de serviço de cada um no hospital. Dayana tem 4 anos de serviço e Pedro tem 2 anos de serviço. Qual valor Dayana receberá?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "R$ 1.200,00.",
                                       "exp":  "Incorreto. R$ 1.200,00 é o valor destinado a Pedro."
                                   },
                             "B":  {
                                       "texto":  "R$ 1.800,00.",
                                       "exp":  "Incorreto. Divisão igualitária ignorando a proporção dos anos."
                                   },
                             "C":  {
                                       "texto":  "R$ 2.400,00.",
                                       "exp":  "Correto! Soma das partes proporcionais: 4 + 2 = 6 partes. Valor de cada parte (constante k): 3.600 / 6 = R$ 600,00. Dayana tem 4 anos: 4 �— 600 = R$ 2.400,00 (e Pedro: 2 �— 600 = R$ 1.200,00)!"
                                   },
                             "D":  {
                                       "texto":  "R$ 2.800,00.",
                                       "exp":  "Incorreto. Erro de proporcionalidade."
                                   },
                             "E":  {
                                       "texto":  "R$ 3.000,00.",
                                       "exp":  "Incorreto. Não respeita a razão 4 para 2."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Divisão proporcional: Ache a constante K! K = Total / Soma dos fatores = 3.600 / (4+2) = 600. Parte de Dayana = 4 �— 600 = R$ 2.400,00."
    },
    {
        "id":  "rlm_22",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Razão e Proporção: Divisão Inversamente Proporcional",
        "enunciado":  "Um prêmio de R$ 1.800,00 foi distribuído entre dois auxiliares em partes INVERSAMENTE PROPORCIONAIS ao número de faltas injustificadas no semestre: Lucas teve 2 faltas e Carla teve 4 faltas. Quanto recebeu Lucas (o que teve menos faltas)?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "R$ 600,00.",
                                       "exp":  "Incorreto. R$ 600,00 é o valor pago a Carla, que teve mais faltas."
                                   },
                             "B":  {
                                       "texto":  "R$ 900,00.",
                                       "exp":  "Incorreto. Divisão em partes iguais."
                                   },
                             "C":  {
                                       "texto":  "R$ 1.200,00.",
                                       "exp":  "Correto! Divisão inversamente proporcional a 2 e 4 é diretamente proporcional aos inversos: 1/2 e 1/4. Multiplicando por 4 para tirar a fração: 2 partes e 1 parte (total 3 partes). Constante k: 1.800 / 3 = 600. Lucas (inverso de 2): 2 �— 600 = R$ 1.200,00!"
                                   },
                             "D":  {
                                       "texto":  "R$ 1.400,00.",
                                       "exp":  "Incorreto. Proporção inadequada."
                                   },
                             "E":  {
                                       "texto":  "R$ 1.500,00.",
                                       "exp":  "Incorreto. Valor incompatível."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Inversamente proporcional: quem tem menos faltas GANHA MAIS! Lucas teve metade das faltas de Carla, logo ganha o dobro de Carla (R$ 1.200 vs R$ 600)."
    },
    {
        "id":  "rlm_23",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Regra de Três Simples Direta",
        "enunciado":  "No arquivo do hospital, uma impressora térmica imprime 150 etiquetas de prontuários em 6 minutos. Mantendo essa mesma velocidade de impressão contínua, quanto tempo essa máquina levará para imprimir 450 etiquetas?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "12 minutos.",
                                       "exp":  "Incorreto. 12 minutos imprimiriam 300 etiquetas."
                                   },
                             "B":  {
                                       "texto":  "15 minutos.",
                                       "exp":  "Incorreto. Cálculo inexato."
                                   },
                             "C":  {
                                       "texto":  "18 minutos.",
                                       "exp":  "Correto! Grandezas diretamente proporcionais (mais etiquetas = mais tempo): 150/6 = 450/T =\u003e 150T = 450 �— 6 = 2.700 =\u003e T = 2.700 / 150 = 18 minutos (ou triplicou as etiquetas de 150 para 450, triplica o tempo de 6 para 18 minutos)!"
                                   },
                             "D":  {
                                       "texto":  "24 minutos.",
                                       "exp":  "Incorreto. Tempo superior ao proporcional."
                                   },
                             "E":  {
                                       "texto":  "30 minutos.",
                                       "exp":  "Incorreto. Equivaleria a 5 vezes o tempo inicial."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Regra de três simples direta: se triplicou a quantidade de etiquetas (150 �— 3 = 450), o tempo gasto também triplica: 6 min �— 3 = 18 minutos!"
    },
    {
        "id":  "rlm_24",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Regra de Três Simples Inversa",
        "enunciado":  "Três auxiliares administrativos, trabalhando com a mesma eficiência, organizam todo o arquivo corrente de um setor em 12 horas. Se a equipe receber o reforço de mais 3 auxiliares com o mesmo ritmo de trabalho (totalizando 6 servidores), em quantas horas organizarão o mesmo arquivo?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "24 horas.",
                                       "exp":  "Incorreto. Aumentar servidores diminui o tempo, não aumenta."
                                   },
                             "B":  {
                                       "texto":  "6 horas.",
                                       "exp":  "Correto! Grandezas INVERSAMENTE proporcionais (mais servidores = menos tempo): Servidores �— Horas = Constante. 3 �— 12 = 36. Com 6 servidores: 6 �— H = 36 =\u003e H = 36 / 6 = 6 horas (dobrou o número de pessoas de 3 para 6, o tempo cai pela metade de 12 para 6 horas)!"
                                   },
                             "C":  {
                                       "texto":  "4 horas.",
                                       "exp":  "Incorreto. Tempo equivalente a 9 servidores."
                                   },
                             "D":  {
                                       "texto":  "8 horas.",
                                       "exp":  "Incorreto. Não respeita a proporcionalidade inversa de dobrar os trabalhadores."
                                   },
                             "E":  {
                                       "texto":  "10 horas.",
                                       "exp":  "Incorreto. Queda desproporcional."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Regra de três inversa: Se o número de funcionários dobra (de 3 para 6), o tempo cai pela METADE: 12 horas / 2 = 6 horas!"
    },
    {
        "id":  "rlm_25",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Regra de Três Composta",
        "enunciado":  "Em um hospital, 4 digitadores, trabalhando 6 horas por dia, digitam 240 fichas de internação em 5 dias. Quantas fichas de internação serão digitadas por 6 digitadores, trabalhando 8 horas por dia, durante 10 dias?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "480 fichas.",
                                       "exp":  "Incorreto. Muito abaixo da proporção."
                                   },
                             "B":  {
                                       "texto":  "720 fichas.",
                                       "exp":  "Incorreto. Cálculo parcial."
                                   },
                             "C":  {
                                       "texto":  "960 fichas.",
                                       "exp":  "Correto! Método do Processo e Produto: Produto = Fichas. Processo = Digitadores �— Horas �— Dias. (4 �— 6 �— 5) / 240 = (6 �— 8 �— 10) / X =\u003e 120 / 240 = 480 / X =\u003e 1/2 = 480/X =\u003e X = 480 �— 2 = 960 fichas!"
                                   },
                             "D":  {
                                       "texto":  "1.200 fichas.",
                                       "exp":  "Incorreto. Valor acima da taxa horária de trabalho."
                                   },
                             "E":  {
                                       "texto":  "800 fichas.",
                                       "exp":  "Incorreto. Erro de simplificação."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Método do Processo/Produto: [Trabalhadores �— Horas �— Dias] / Produto = constante! (4�—6�—5)/240 = (6�—8�—10)/X =\u003e 120/240 = 480/X =\u003e X = 960 fichas!"
    },
    {
        "id":  "rlm_26",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Princípio Fundamental da Contagem (PFC)",
        "enunciado":  "Para criar a senha de acesso ao sistema de prontuários da FHCGV, a servidora Dayana deve escolher uma combinação de 3 letras distintas seguidas de 2 algarismos distintos. Considerando o alfabeto de 26 letras e os 10 algarismos (0 a 9), o número total de senhas possíveis é calculado por:",
        "alternativas":  {
                             "A":  {
                                       "texto":  "26 �— 25 �— 24 �— 10 �— 9",
                                       "exp":  "Correto! Princípio Multiplicativo: 1ª letra (26 opções), 2ª letra distinta (25), 3ª letra distinta (24), 1º dígito (10) e 2º dígito distinto (9). Multiplicando todas as etapas independentes."
                                   },
                             "B":  {
                                       "texto":  "26 + 25 + 24 + 10 + 9",
                                       "exp":  "Incorreto. Não se somam as etapas na formação de senhas com múltiplos caracteres (regra da soma é apenas para escolhas excludentes)."
                                   },
                             "C":  {
                                       "texto":  "26³ �— 10²",
                                       "exp":  "Incorreto. Essa seria a fórmula se os caracteres pudessem ser REPETIDOS. O enunciado exigiu letras e algarismos distintos."
                                   },
                             "D":  {
                                       "texto":  "26! / 10!",
                                       "exp":  "Incorreto. Expressão fatorial sem cabimento conceitual."
                                   },
                             "E":  {
                                       "texto":  "26 �— 3 + 10 �— 2",
                                       "exp":  "Incorreto. Erro crasso de contagem."
                                   }
                         },
        "correta":  "A",
        "comentarioGeral":  "Princípio Multiplicativo: Se são caracteres DISTINTOS, as opções diminuem a cada posição: 26 �— 25 �— 24 letras �— 10 �— 9 dígitos = 1.404.000 senhas!"
    },
    {
        "id":  "rlm_27",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Análise Combinatória: Combinação Simples",
        "enunciado":  "A direção da fundação precisa formar uma comissão de avaliação composta por 3 servidores. Se há 8 servidores disponíveis para compor essa comissão, de quantas maneiras distintas essa comissão pode ser escolhida?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "24.",
                                       "exp":  "Incorreto. 8 �— 3 = 24 não reflete agrupamento de comissões."
                                   },
                             "B":  {
                                       "texto":  "56.",
                                       "exp":  "Correto! Em comissões a ordem dos membros N�ƒO importa (Ana, Beto e Carla é a mesma comissão que Beto, Carla e Ana), logo usamos Combinação Simples: C(8, 3) = (8 �— 7 �— 6) / (3 �— 2 �— 1) = 336 / 6 = 56 maneiras distintas!"
                                   },
                             "C":  {
                                       "texto":  "336.",
                                       "exp":  "Incorreto. 336 seria Arranjo Simples, caso a ordem dos cargos importasse (ex.: Presidente, Secretário e Vogal)."
                                   },
                             "D":  {
                                       "texto":  "112.",
                                       "exp":  "Incorreto. Divisão por 3 em vez de 3! (fatorial de 3)."
                                   },
                             "E":  {
                                       "texto":  "512.",
                                       "exp":  "Incorreto. Corresponde a 8³."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "A ordem importa? N�ƒO (é comissão/grupo) =\u003e COMBINA�‡�ƒO: C(8,3) = (8�—7�—6)/(3�—2�—1) = 56. Se a ordem importasse (presidente, tesoureiro) seria Arranjo (336)."
    },
    {
        "id":  "rlm_28",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Probabilidade Simples",
        "enunciado":  "Em uma urna do setor de recursos humanos há 20 envelopes com processos numerados de 1 a 20. Se um envelope for sorteado ao acaso, qual é a probabilidade de o número sorteado ser um número PRIMO?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "25% (1/4).",
                                       "exp":  "Incorreto. Há mais números primos de 1 a 20."
                                   },
                             "B":  {
                                       "texto":  "40% (8/20 = 2/5).",
                                       "exp":  "Correto! Os números primos entre 1 e 20 são: 2, 3, 5, 7, 11, 13, 17 e 19 (total de 8 números favoráveis). Espaço amostral total = 20 números. Probabilidade = 8 / 20 = 4 / 10 = 40% (ou 2/5)!"
                                   },
                             "C":  {
                                       "texto":  "45% (9/20).",
                                       "exp":  "Incorreto. O número 1 N�ƒO é primo (tem apenas 1 divisor)."
                                   },
                             "D":  {
                                       "texto":  "50% (10/20).",
                                       "exp":  "Incorreto. 10 seriam os números pares, não os primos."
                                   },
                             "E":  {
                                       "texto":  "30% (6/20).",
                                       "exp":  "Incorreto. Esqueceu de contabilizar alguns números primos."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Probabilidade = Casos Favoráveis / Casos Possíveis. Primos de 1 a 20: {2, 3, 5, 7, 11, 13, 17, 19} = 8 números. P = 8/20 = 40%!"
    },
    {
        "id":  "rlm_29",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Progressão Aritmética (PA)",
        "enunciado":  "A quantidade de atendimentos diários em uma nova unidade de atendimento ambulatorial cresceu em Progressão Aritmética (PA): no 1º dia foram atendidos 15 pacientes, no 2º dia 19 pacientes, no 3º dia 23 pacientes, e assim sucessivamente. Quantos pacientes serão atendidos no 10º dia?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "47.",
                                       "exp":  "Incorreto. Erro na aplicação da razão."
                                   },
                             "B":  {
                                       "texto":  "51.",
                                       "exp":  "Correto! Fórmula do termo geral da PA: an = a1 + (n - 1) �— r. Primeiro termo (a1) = 15; razão (r) = 19 - 15 = 4; termo desejado (n) = 10. a10 = 15 + (10 - 1) �— 4 = 15 + 9 �— 4 = 15 + 36 = 51 pacientes!"
                                   },
                             "C":  {
                                       "texto":  "55.",
                                       "exp":  "Incorreto. Multiplicou por 10 em vez de (n-1 = 9)."
                                   },
                             "D":  {
                                       "texto":  "45.",
                                       "exp":  "Incorreto. Valor subestimado."
                                   },
                             "E":  {
                                       "texto":  "60.",
                                       "exp":  "Incorreto. Cálculo sem suporte na progressão."
                                   }
                         },
        "correta":  "B",
        "comentarioGeral":  "Termo geral da PA: an = a1 + (n - 1) �— r =\u003e a10 = 15 + (9 �— 4) = 15 + 36 = 51 pacientes no 10º dia!"
    },
    {
        "id":  "rlm_30",
        "disciplina":  "rlm",
        "materia_nome":  "Raciocínio Lógico-Matemático",
        "topico":  "Progressão Geométrica (PG)",
        "enunciado":  "Em um estudo microbiológico no laboratório da FHCGV, uma colônia de bactérias duplica de tamanho a cada hora (Progressão Geométrica com razão q = 2). Se às 8h da manhã havia 50 bactérias, quantas bactérias haverá às 14h da tarde do mesmo dia?",
        "alternativas":  {
                             "A":  {
                                       "texto":  "300 bactérias.",
                                       "exp":  "Incorreto. 300 seria crescimento linear aritmético simples (50 �— 6)."
                                   },
                             "B":  {
                                       "texto":  "1.600 bactérias.",
                                       "exp":  "Incorreto. Corresponde a 5 horas de duplicação."
                                   },
                             "C":  {
                                       "texto":  "3.200 bactérias.",
                                       "exp":  "Correto! De 8h às 14h transcorreram 6 horas (logo a colônia duplicou 6 vezes). Fórmula da PG: an = a1 �— q^(n-1), ou simplesmente 50 �— 2^6. Como 2^6 = 64, temos: 50 �— 64 = 3.200 bactérias!"
                                   },
                             "D":  {
                                       "texto":  "6.400 bactérias.",
                                       "exp":  "Incorreto. Corresponde a 7 horas de crescimento."
                                   },
                             "E":  {
                                       "texto":  "12.800 bactérias.",
                                       "exp":  "Incorreto. Corresponde a 8 horas."
                                   }
                         },
        "correta":  "C",
        "comentarioGeral":  "Crescimento Exponencial / PG: Transcorreram 6 horas. Duplica 6 vezes: 50 �— 2^6 = 50 �— 64 = 3.200 bactérias!"
    }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BANCO_QUESTOES;
}