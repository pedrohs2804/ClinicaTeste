// Questionários clínicos integrados — V9.61
// Textos reproduzidos dos formulários clínicos fornecidos no acervo do usuário.

const FORMS={
 NDI:{sections:[
  ['Intensidade da dor',['Posso tolerar a dor que estou sentindo sem ter que tomar analgésicos','A dor é forte, mas posso suportá-la sem analgésicos','Os analgésicos aliviam completamente a dor','Os analgésicos aliviam moderadamente a dor','Os analgésicos aliviam muito pouco a dor','Os analgésicos não afetam de forma alguma a dor e não os estou tomando']],
  ['Cuidados pessoais',['Posso me cuidar normalmente sem causar mais dor','Posso me cuidar normalmente, mas isso causa mais dor','Dói para eu me cuidar e sou lento e cuidadoso','Preciso de alguma ajuda, mas consigo realizar a maioria dos meus cuidados pessoais','Preciso de ajuda todos os dias para a maioria dos meus cuidados pessoais','Não consigo me vestir, me lavo com dificuldades e fico na cama']],
  ['Levantar objetos',['Posso levantar objetos pesados sem sentir mais dor','Posso levantar objetos pesados, mas isso causa mais dor','Não posso levantar objetos pesados do chão, mas da mesa não tem problema','Não posso levantar objetos pesados, mas objetos leves ou de peso médio não são problemas','Posso levantar somente pesos bem leves','Não posso levantar ou carregar nada']],
  ['Leitura',['Eu posso ler o quanto quiser sem dor no pescoço','Eu posso ler o quanto quiser com pequena dor no pescoço','Eu posso ler o quanto quiser com moderada dor no pescoço','Eu não posso ler o quanto quiser em função de moderada dor no pescoço','Eu não posso ler o quanto quiser em função de severa dor no pescoço','Eu não posso ler']],
  ['Dor de cabeça',['Eu não tenho dor de cabeça','Eu tenho dor de cabeça ocasional e leve','Eu tenho dor de cabeça eventual e moderada','Eu tenho dor de cabeça frequente e moderada','Eu tenho dor de cabeça frequente e severa','Eu tenho dor de cabeça o tempo todo']],
  ['Concentração',['Eu posso me concentrar plenamente quando preciso sem dificuldade','Eu posso me concentrar plenamente quando preciso com pouca dificuldade','Eu tenho dificuldade leve de me concentrar','Eu tenho moderada dificuldade de me concentrar','Eu tenho grande dificuldade em me concentrar','Eu não posso me concentrar']],
  ['Trabalho',['Eu posso trabalhar sem restrições','Só posso realizar meu trabalho usual','Tenho dificuldade em realizar meu trabalho usual','Eu não posso realizar meu trabalho usual','Eu mal posso realizar qualquer trabalho','Eu não posso trabalhar']],
  ['Dirigir',['Posso dirigir sem qualquer dor no pescoço','Posso dirigir o quanto quiser com pouca dor no pescoço','Posso dirigir o quanto quiser com moderada dor no pescoço','Não posso dirigir o quanto quiser em função de moderada dor no pescoço','Mal posso dirigir em função de severa dor no pescoço','Não posso dirigir']],
  ['Dormir',['A dor não me impede de dormir bem','Só posso dormir bem tomando os comprimidos','Mesmo quando tomo os comprimidos, só consigo dormir menos de seis horas','Mesmo quando tomo os comprimidos, só consigo dormir menos de quatro horas','Mesmo quando tomo os comprimidos, só consigo dormir menos de duas horas','A dor me impede completamente de dormir']],
  ['Recreação',['Minha vida social é normal e não causa mais dor','Minha vida social é normal, mas aumenta o grau da dor','Não posso participar de atividades mais energéticas','A dor restringe minha vida social e não saio tanto','A dor restringe minha vida social à minha casa','Não tenho vida social por causa da dor']]
 ]},
 ODI:{sections:[
  ['Intensidade da dor',['Sem dor no momento','A dor é leve nesse momento','A dor é moderada nesse momento','A dor é mais ou menos intensa nesse momento','A dor é muito forte nesse momento','A dor é a pior imaginável nesse momento']],
  ['Cuidados pessoais',['Eu posso cuidar de mim sem provocar dor extra','Posso me cuidar mas me causa dor','É doloroso me cuidar e sou lento e cuidadoso','Preciso de alguma ajuda, mas dou conta de me cuidar','Preciso de ajuda em todos os aspectos para cuidar de mim','Eu não me visto, tomo banho com dificuldade e fico na cama']],
  ['Pesos',['Posso levantar coisas pesadas sem causar dor extra','Se levantar coisas pesadas sinto dor extra','A dor me impede de levantar coisas pesadas, mas dou um jeito se estão bem posicionadas','A dor me impede de levantar coisas pesadas, mas dou um jeito de levantar coisas leves ou pouco pesadas se estiverem bem posicionadas','Só posso levantar coisas muito leves','Não posso levantar nem carregar nada']],
  ['Andar',['A dor não me impede de andar qualquer distância','A dor me impede de andar mais que 2 km','A dor me impede de andar mais que aproximadamente 1 km','A dor me impede de andar mais que poucos metros','Só posso andar com bengala ou muleta','Fico na cama a maior parte do tempo e tenho que me arrastar para o banheiro']],
  ['Sentar',['Posso sentar em qualquer tipo de cadeira pelo tempo que quiser','Posso sentar em minha cadeira favorita pelo tempo que quiser','A dor me impede de sentar por mais de 1 hora','A dor me impede de sentar por mais de meia hora','A dor me impede de sentar por mais que 10 minutos','A dor me impede de sentar']],
  ['De pé',['Posso ficar de pé pelo tempo que quiser sem dor extra','Posso ficar de pé pelo tempo que quiser, mas sinto um pouco de dor','A dor me impede de ficar de pé por mais de 1 hora','A dor me impede de ficar de pé por mais de meia hora','A dor me impede de ficar de pé por mais de 10 minutos','A dor me impede de ficar de pé']],
  ['Sono',['Meu sono não é perturbado por dor','Algumas vezes meu sono é perturbado por dor','Por causa da dor durmo menos de 6 horas','Por causa da dor durmo menos de 4 horas','Por causa da dor durmo menos de 2 horas','A dor me impede de dormir']],
  ['Vida social',['Minha vida social é normal e eu não sinto dor extra','Minha vida social é normal, mas aumenta o grau de minha dor','A dor não altera minha vida social, exceto por impedir atividades de esforço, como esportes','A dor restringiu minha vida social e eu não saio muito de casa','A dor restringiu minha vida social à minha casa','Não tenho vida social devido à minha dor']],
  ['Viagens',['Posso viajar para qualquer lugar sem dor','Posso viajar para qualquer lugar, mas sinto dor extra','A dor é ruim, mas posso viajar por 2 horas','A dor restringe minhas viagens para distâncias menores que 1 hora','A dor restringe minhas viagens para as necessárias e menores de 30 minutos','A dor me impede de viajar, exceto para ser tratado']]
 ]}
};

const WOMAC_SCALE=['Nenhuma','Pouca','Moderada','Intensa','Muito intensa'];
const WOMAC_STRUCTURE={
 pain:{label:'Dor',prompt:'Qual a intensidade da sua dor no joelho ao…',items:['Caminhar em superfície plana','Subir ou descer escadas','À noite, deitado na cama','Sentado ou deitado','Ficar em pé']},
 stiffness:{label:'Rigidez',prompt:'Qual a intensidade da rigidez do seu joelho…',items:['Logo após acordar pela manhã','Ao longo do restante do dia, após sentar, deitar ou descansar']},
 function:{label:'Função física',prompt:'Qual o grau de dificuldade que você sente ao…',items:['Descer escadas','Subir escadas','Levantar-se da posição sentada','Ficar em pé','Inclinar-se em direção ao chão','Caminhar em superfície plana','Entrar e sair do carro','Fazer compras','Colocar meias ou calças','Levantar-se da cama','Tirar meias ou calças','Ficar deitado na cama','Entrar e sair do banho','Permanecer sentado','Sentar e levantar do vaso sanitário','Realizar tarefas domésticas pesadas','Realizar tarefas domésticas leves']}
};

function checkedVal(name){const e=document.querySelector(`input[name="${name}"]:checked`);return e?e.value:null}

function visaGate(prefix,gateLabel,branches){
 const gate=`<div class="qsection"><h3>8. ${gateLabel}</h3><div class="qoptions">${branches.map(b=>
  `<label class="qoption"><input type="radio" name="${prefix}_gate" value="${b.key}" onchange="toggleVisaBranch('${prefix}')"><span>${b.branchLabel}</span></label>`).join('')}
 </div></div>`;
 const blocks=branches.map(b=>`<div class="qsection hidden" id="${prefix}_${b.key}"><h3>8${b.key.toLowerCase()}. ${b.label}</h3>${radioOptions(prefix+'_8'+b.key,b.opts,b.vals)}</div>`).join('');
 return gate+blocks;
}
function toggleVisaBranch(prefix){
 const g=checkedVal(prefix+'_gate');
 ['A','B','C'].forEach(k=>{const el=document.getElementById(prefix+'_'+k);if(el)el.classList.toggle('hidden',g!==k)});
}
function visaScore8(prefix){
 const g=checkedVal(prefix+'_gate');
 if(!g)return null;
 const v=checkedVal(prefix+'_8'+g);
 return v===null?null:Number(v);
}
function scale11(name,left,right){return `<div class="scaleAnchors"><span><strong>0</strong> = ${left||'—'}</span><span><strong>10</strong> = ${right||'—'}</span></div><div class="scale11">${Array.from({length:11},(_,i)=>`<label><input type="radio" name="${name}" value="${i}"><span>${i}</span></label>`).join('')}</div>`}
function radioOptions(name,opts,values){return `<div class="qoptions">${opts.map((o,i)=>`<label class="qoption"><input type="radio" name="${name}" value="${values?values[i]:i}"><span>${o}</span></label>`).join('')}</div>`}
function sectionForm(k){return FORMS[k].sections.map((s,i)=>`<div class="qsection"><h3>${i+1}. ${s[0]}</h3>${radioOptions(`${k}_${i}`,s[1])}</div>`).join('')}
function activity5(name){return radioOptions(name,['Atividade muito vigorosa','Atividade vigorosa','Atividade moderada','Atividade leve','Incapaz de realizar'],[4,3,2,1,0])}
function difficulty5(name){return radioOptions(name,['Sem dificuldade','Fácil','Moderado','Difícil','Incapaz'],[4,3,2,1,0])}

const IKDC_Q9=['Subir escadas','Descer escadas','Ajoelhar de frente','Agachar','Sentar com os joelhos dobrados','Levantar-se de uma cadeira','Correr para frente','Saltar e aterrissar com a perna lesionada','Frear e acelerar rapidamente'];
const ACL_Q=[
 'Você está confiante que seu desempenho esportivo está no mesmo nível de antes da lesão?',
 'Você acha que terá a mesma lesão no joelho ao praticar seu esporte?',
 'Você se sente apreensivo ao praticar seu esporte?',
 'Você está confiante que não sentirá instabilidade (falseio) no seu joelho ao praticar seu esporte?',
 'Você está confiante que pode praticar seu esporte sem qualquer preocupação com o joelho?',
 'Você se sente frustrado em ter que se preocupar com seu joelho durante sua prática esportiva?',
 'Você sente medo de lesionar novamente seu joelho durante a prática esportiva?',
 'Você está confiante que seu joelho pode se manter estável com o peso do seu corpo sobre ele?',
 'Você tem medo de acidentalmente lesionar seu joelho durante prática esportiva?',
 'Você evitou praticar sua atividade esportiva por medo de passar mais uma vez por cirurgia ou reabilitação?',
 'Você está confiante sobre sua capacidade de realizar bem sua prática esportiva?',
 'Você se sente tranquilo (relaxado) para praticar sua modalidade esportiva?'
];

function buildQuestionnaire(k){
 if(k==='NDI'||k==='ODI')return `<div class="info">Marque uma alternativa em cada seção.</div>${sectionForm(k)}`;
 if(k==='ACLRSI')return `<div class="info">Responda de acordo com o esporte e nível de atividade que praticava antes da lesão. 0 = de modo nenhum • 10 = extremamente.</div>${ACL_Q.map((q,i)=>`<div class="qsection"><h3>${i+1}. ${q}</h3>${scale11('ACL_'+i,'De modo nenhum','Extremamente')}</div>`).join('')}`;
 if(k==='IKDC')return `<div class="info">International Knee Documentation Committee — formulário subjetivo do joelho.</div>
 <div class="qsection"><h3>1. Mais alto nível de atividade física sem dor significativa no joelho</h3>${activity5('IK_1')}</div>
 <div class="qsection"><h3>2. Frequência de dor nas últimas quatro semanas</h3>${scale11('IK_2','Nunca','Constantemente')}</div>
 <div class="qsection"><h3>3. Intensidade da dor, quando presente</h3>${scale11('IK_3','Sem dor','Pior dor imaginável')}</div>
 <div class="qsection"><h3>4. Quanto o joelho esteve rígido ou inchado?</h3>${radioOptions('IK4_0',['Nem um pouco','Pouco','Moderado','Muito','Extremamente'],[4,3,2,1,0])}</div>
 <div class="qsection"><h3>5. Mais alto nível de atividade sem inchaço significativo</h3>${activity5('IK_5')}</div>
 <div class="qsection"><h3>6. O joelho já travou nas últimas quatro semanas?</h3>${radioOptions('IK_6',['Não','Sim'],[1,0])}</div>
 <div class="qsection"><h3>7. Mais alto nível de atividade sem falseio significativo</h3>${activity5('IK_7')}</div>
 <div class="qsection"><h3>8. Mais alto nível de atividade de que participa regularmente</h3>${activity5('IK_8')}</div>
 <div class="qsection"><h3>9. Quanto o joelho afeta sua habilidade?</h3>${IKDC_Q9.map((q,i)=>`<div style="margin:12px 0"><strong>${String.fromCharCode(97+i)}. ${q}</strong>${difficulty5('IK_9_'+i)}</div>`).join('')}</div>
 <div class="qsection"><h3>10. Função do joelho</h3><div class="small">Funcionalidade anterior à lesão</div>${scale11('IK_10a','Incapaz','Sem limitações')}<div class="small" style="margin-top:14px">Funcionalidade atual</div>${scale11('IK_10b','Incapaz','Sem limitações')}</div>`;
 if(k==='EVA')return `<div class="qsection"><h3>Qual é a intensidade da sua dor neste momento?</h3>${scale11('EVA_FORM','Sem dor','Pior dor imaginável')}</div>`;
 if(k==='PSFS')return `<div class="info">Informe até três atividades importantes que estejam difíceis por causa deste problema.</div>${[1,2,3].map(i=>`<div class="qsection"><h3>Atividade ${i}</h3><input id="PSFS_NAME_${i}" placeholder="Ex.: correr, agachar, subir escadas">${scale11('PSFS_SCORE_'+i,'Incapaz','Nível habitual')}</div>`).join('')}`;
 if(k==='FAAMSPORT'){
  const items=['Correr','Saltar','Apoiar no solo após saltar','Iniciar e parar subitamente','Fazer mudanças bruscas de direção','Atividades de baixo impacto','Capacidade de realizar a atividade com sua técnica normal','Capacidade de participar do seu esporte pelo tempo que gostaria'];
  const opts=['Sem dificuldade','Dificuldade leve','Dificuldade moderada','Dificuldade extrema','Incapaz de fazer','N/A'];
  const vals=[4,3,2,1,0,'NA'];
  return `<div class="info"><strong>FAAM-Sport</strong> — por causa do seu pé/tornozelo, indique quanta dificuldade você tem em cada atividade. Os itens respondidos são convertidos automaticamente para 0–100%.</div>${items.map((q,i)=>`<div class="qsection"><h3>${i+1}. ${q}</h3>${radioOptions('FAAM_'+i,opts,vals)}</div>`).join('')}<div class="qsection"><h3>Autoavaliação da função esportiva atual (opcional)</h3><input id="FAAM_GLOBAL" type="number" min="0" max="100" step="1" placeholder="0–100%"><div class="small">100% = nível funcional anterior ao problema; 0% = incapaz de realizar atividade esportiva.</div></div>`;
 }
 if(k==='CAIT'){
  const qs=[
   ['Sinto DOR no tornozelo',['Nunca','Quando pratico esportes','Quando corro em superfícies irregulares','Quando corro em superfícies planas','Quando ando em superfícies irregulares','Quando ando em superfícies planas'],[5,4,3,2,1,0]],
   ['Sinto INSTABILIDADE no tornozelo',['Nunca','Às vezes quando pratico esportes (nem sempre)','Frequentemente quando pratico esportes','Às vezes durante atividades diárias','Frequentemente durante atividades diárias'],[4,3,2,1,0]],
   ['Quando me viro BRUSCAMENTE, sinto INSTABILIDADE no tornozelo',['Nunca','Às vezes quando corro','Frequentemente quando corro','Quando ando'],[3,2,1,0]],
   ['Quando desço escadas, sinto INSTABILIDADE no tornozelo',['Nunca','Se for rapidamente','Ocasionalmente','Sempre'],[3,2,1,0]],
   ['Sinto INSTABILIDADE no tornozelo quando fico em um pé só',['Nunca','Na ponta do pé','Com o pé inteiro no chão'],[2,1,0]],
   ['Sinto INSTABILIDADE no tornozelo quando',['Nunca','Pulo de um lado para o outro numa só perna','Pulo no mesmo lugar numa só perna','Pulo com as duas pernas'],[3,2,1,0]],
   ['Sinto INSTABILIDADE no tornozelo quando',['Nunca','Corro em superfícies irregulares','Corro lentamente em superfícies irregulares','Ando em superfícies irregulares','Ando em uma superfície plana'],[4,3,2,1,0]],
   ['TIPICAMENTE, quando começo a torcer o tornozelo, consigo parar',['Imediatamente','Frequentemente','Às vezes','Nunca','Nunca torci o tornozelo'],[3,2,1,0,3]],
   ['Após um entorse TÍPICO, meu tornozelo volta ao normal',['Quase imediatamente','Em menos de um dia','Em 1 a 2 dias','Em mais de 2 dias','Nunca torci o tornozelo'],[3,2,1,0,3]]
  ];
  return `<div class="info"><strong>CAIT</strong> — assinale uma alternativa em cada questão para o tornozelo avaliado.</div><div class="qsection"><h3>Lado avaliado</h3><select id="CAIT_SIDE"><option value="Direito">Direito</option><option value="Esquerdo">Esquerdo</option></select></div>${qs.map((x,i)=>`<div class="qsection"><h3>${i+1}. ${x[0]}</h3>${radioOptions('CAIT_'+i,x[1],x[2])}</div>`).join('')}`;
 }
 if(k==='NOCICRIT'){
  const yn=['Sim','Não'];
  const positivos=[
   'Dor localizada na área da lesão/disfunção',
   'Relação clara e proporcional entre fatores de piora/melhora e o padrão mecânico/anatômico',
   'Dor intermitente e aguda com movimento/provocação mecânica (pode ser mais constante, em peso, no repouso)'
  ];
  const negativos=[
   'Dor associada a outras disestesias (formigamento, queimação, etc.)',
   'Dor noturna ou sono perturbado pela dor',
   'Posturas antálgicas ou padrões de movimento de proteção',
   'Dor descrita como queimação, choque elétrico, pontada ou similar'
  ];
  return `<div class="info"><strong>Critérios NP (Smart et al.)</strong> — checklist clínico preenchido pelo fisioterapeuta, não pelo paciente. Consenso Delphi de especialistas para reconhecimento de padrão de dor nociceptiva.</div>
  <div class="qsection"><h3>Presentes no quadro do paciente?</h3>${positivos.map((it,i)=>`<div style="margin:12px 0"><strong>${it}</strong>${radioOptions('NOCICRIT_'+i,yn,[1,0])}</div>`).join('')}</div>
  <div class="qsection"><h3>Ausentes no quadro do paciente? (responda "Sim" se de fato está ausente)</h3>${negativos.map((it,i)=>`<div style="margin:12px 0"><strong>Ausência de: ${it}</strong>${radioOptions('NOCICRIT_'+(3+i),yn,[1,0])}</div>`).join('')}</div>`;
 }
 if(k==='DN4'){
  const yn=['Sim','Não'],ynVals=[1,0];
  const interview=['Queimação','Sensação de frio dolorosa','Choque elétrico','Formigamento','Alfinetada e agulhada','Adormecimento','Coceira'];
  const exam=['Hipoestesia ao tato (sensibilidade diminuída ao toque leve)','Hipoestesia à picada (sensibilidade diminuída à picada de agulha)','A dor é provocada ou aumentada pela escovação da área'];
  return `<div class="info"><strong>DN4</strong> — questionário de rastreio de dor neuropática. As 3 últimas questões exigem exame físico realizado pelo fisioterapeuta na área dolorosa.</div>
  <div class="qsection"><h3>Entrevista — a dor tem alguma destas características?</h3>${interview.map((it,i)=>`<div style="margin:12px 0"><strong>${it}</strong>${radioOptions('DN4_'+i,yn,ynVals)}</div>`).join('')}</div>
  <div class="qsection"><h3>Exame clínico</h3>${exam.map((it,i)=>`<div style="margin:12px 0"><strong>${it}</strong>${radioOptions('DN4_'+(7+i),yn,ynVals)}</div>`).join('')}</div>`;
 }
 if(k==='CSI'){
  const scale=['Nunca','Raramente','Às vezes','Frequentemente','Sempre'],vals=[0,1,2,3,4];
  const items=['Sinto-me infeliz emocionalmente','Meus músculos doem sem motivo aparente','Sinto ansiedade','Tenho o hábito de ranger os dentes (bruxismo)','Tenho problemas relacionados a diarreia e/ou constipação','Preciso de ajuda para realizar minhas atividades diárias','Sou sensível à luz forte','Fico cansado(a) com facilidade quando faço atividade física','Sinto dor no corpo todo','Tenho dores de cabeça','Sinto desconforto na bexiga e/ou ardência ao urinar','Não durmo bem','Tenho dificuldade em me concentrar','Tenho problemas de pele como ressecamento, coceira ou manchas','O estresse piora meus sintomas físicos','Sinto-me triste ou deprimido(a)','Tenho pouca energia','Tenho tensão muscular na região do pescoço e ombros','Sinto dor na mandíbula','Alguns cheiros, como perfume, me incomodam','Preciso urinar frequentemente','Minhas pernas ficam inquietas quando tento dormir à noite','Tenho dificuldade para lembrar de coisas','Sofri um trauma na infância','Sinto dor na região pélvica'];
  return `<div class="info"><strong>CSI</strong> — Inventário de Sensibilização Central (Parte A). Indique a frequência com que cada afirmação se aplica a você atualmente.</div>
  ${items.map((it,i)=>`<div class="qsection"><h3>${i+1}. ${it}</h3>${radioOptions('CSI_'+i,scale,vals)}</div>`).join('')}`;
 }
 if(k==='WOMAC'){
  const vals=[0,1,2,3,4];let n=0;
  const block=(key,cfg)=>`<div class="qsection"><h3>${cfg.label}</h3><div class="small" style="margin-bottom:6px">${cfg.prompt}</div>${cfg.items.map(it=>{const id='WOMAC_'+(n++);return `<div style="margin:12px 0"><strong>${it}</strong>${radioOptions(id,WOMAC_SCALE,vals)}</div>`}).join('')}</div>`;
  return `<div class="info"><strong>WOMAC</strong> — considere as últimas 48 horas referentes ao joelho avaliado. Todos os 24 itens são obrigatórios. O total é convertido automaticamente para 0–100% (maior = pior).</div>
  <div class="qsection"><h3>Joelho avaliado</h3><select id="WOMAC_SIDE"><option value="Direito">Direito</option><option value="Esquerdo">Esquerdo</option><option value="Ambos">Ambos</option></select></div>
  ${block('pain',WOMAC_STRUCTURE.pain)}${block('stiffness',WOMAC_STRUCTURE.stiffness)}${block('function',WOMAC_STRUCTURE.function)}`;
 }
 if(k==='VISAP'||k==='VISAH'||k==='VISAA'){
  const cfg={
   VISAP:{titulo:'VISA-P — Tendinopatia patelar',
    q:[['Por quantos minutos você consegue ficar sentado sem dor?','0 minutos','100 minutos'],
       ['Você sente dor ao descer escadas num ritmo de marcha normal?','Dor forte ou severa','Sem dor'],
       ['Você sente dor no joelho quando o estende totalmente de forma ativa e com apoio de peso?','Dor forte ou severa','Sem dor'],
       ['Você sente dor quando faz o exercício afundo com apoio de peso total?','Dor forte ou severa','Sem dor'],
       ['Você tem problemas ao agachar?','Incapaz','Sem problemas'],
       ['Você sente dor durante ou imediatamente após saltitar 10 vezes em uma perna só?','Dor forte ou severa / Incapaz','Sem dor']],
    gate:'Por favor, complete somente uma das questões A, B ou C, conforme sua situação ao praticar esportes.',
    branches:[
     {key:'A',branchLabel:'Não sinto dor ao praticar esporte',label:'Se você não sente dor ao praticar esporte, por quanto tempo você consegue treinar/praticar?',opts:['Não consigo treinar/praticar','0–5 minutos','6–10 minutos','11–15 minutos','Mais de 15 minutos'],vals:[0,7,14,21,30]},
     {key:'B',branchLabel:'Sinto dor, mas ela não me impede de praticar',label:'Se você sente dor ao praticar esporte, mas a dor não o impede de completar a atividade, por quanto tempo você consegue treinar/praticar?',opts:['Não consigo treinar/praticar','0–5 minutos','6–10 minutos','11–15 minutos','Mais de 15 minutos'],vals:[0,4,10,14,20]},
     {key:'C',branchLabel:'Sinto dor que me impede de praticar',label:'Se você sente dor que o impede de completar o seu treinamento/prática esportiva, por quanto tempo você consegue treinar/praticar?',opts:['Não consigo treinar/praticar','0–5 minutos','6–10 minutos','11–15 minutos','Mais de 15 minutos'],vals:[0,2,5,7,10]}]},
   VISAH:{titulo:'VISA-H — Tendinopatia isquiotibial proximal',
    q:[['Por quantos minutos você consegue sentar/dirigir seu carro sem dor?','0 minutos','10 minutos'],
       ['Quanto de dor você sente durante ou imediatamente após alongar a parte de trás da coxa (joelho esticado)?','Dor forte severa','Sem dor'],
       ['Quanto de dor você sente durante ou imediatamente após uma corrida normal?','Dor forte severa','Sem dor'],
       ['Quanto de dor você sente durante ou imediatamente após uma arrancada/saída brusca (corrida rápida)?','Dor forte severa','Sem dor'],
       ['Quanto de dor você sente durante ou imediatamente após um agachamento com a perna dolorida à frente sustentando o peso corporal?','Dor forte severa / Não consigo','Sem dor'],
       ['Quanto de dor você sente durante ou imediatamente após levantar um objeto do chão mantendo o joelho esticado?','Dor forte severa','Sem dor']],
    gate:'Por favor, responda apenas a questão 8a, 8b ou 8c, conforme sua situação ao praticar esportes.',
    branches:[
     {key:'A',branchLabel:'Não sinto dor ao praticar esporte',label:'Se você não tem dor ao praticar esporte, por quanto tempo você consegue treinar/praticar?',opts:['0–20 minutos','21–40 minutos','41–60 minutos','61–90 minutos','Mais de 90 minutos'],vals:[0,7,14,21,30]},
     {key:'B',branchLabel:'Sinto dor, mas ela não me impede de concluir',label:'Se você tem dor ao praticar esporte, mas isso não te impede de concluir seu treino/prática, por quanto tempo você consegue treinar/praticar?',opts:['0–15 minutos','16–30 minutos','31–45 minutos','46–60 minutos','Mais de 60 minutos'],vals:[0,4,10,14,20]},
     {key:'C',branchLabel:'Sinto dor que me impede de concluir',label:'Se você tem dor que te impede de concluir seu treino/prática, por quanto tempo você consegue treinar/praticar?',opts:['Não consigo treinar','1–10 minutos','11–20 minutos','21–30 minutos','Mais de 30 minutos'],vals:[0,2,5,7,10]}]},
   VISAA:{titulo:'VISA-A — Tendinopatia do Aquiles',
    q:[['Quando você se levanta pela manhã, por quantos minutos sente rígida a região do tendão de Aquiles?','100 minutos','0 minutos'],
       ['Quando está preparado/aquecido, você sente dor ao alongar o tendão de Aquiles ao máximo na borda de um degrau, com os joelhos esticados?','Dor forte severa','Sem dor'],
       ['Após andar em superfície plana por 30 minutos, você sente dor no tendão nas próximas duas horas?','Dor forte severa','Sem dor'],
       ['Você sente dor descendo escadas em ritmo normal?','Dor forte severa','Sem dor'],
       ['Você sente dor durante ou imediatamente após ficar nas pontas dos pés, com uma perna só, por 10 vezes?','Dor forte severa','Sem dor'],
       ['Quantos pulos, com uma perna só, você consegue fazer sem sentir dor?','Dor forte severa','Sem dor']],
    gate:'Por favor, complete somente uma das questões A, B ou C, conforme sua situação ao praticar esportes que exigem carga no tendão de Aquiles.',
    branches:[
     {key:'A',branchLabel:'Não sinto dor nesses esportes',label:'Se você não sente dor enquanto pratica esportes que exigem carga no tendão de Aquiles, por quanto tempo consegue treinar/praticar?',opts:['Não consigo treinar/praticar','1–10 minutos','11–20 minutos','21–30 minutos','Mais de 30 minutos'],vals:[0,7,14,21,30]},
     {key:'B',branchLabel:'Sinto dor, mas ela não me impede',label:'Se você sente alguma dor, mas isso não te impede de completar seu treinamento/prática, por quanto tempo consegue treinar/praticar?',opts:['Não consigo treinar/praticar','1–10 minutos','11–20 minutos','21–30 minutos','Mais de 30 minutos'],vals:[0,4,10,14,20]},
     {key:'C',branchLabel:'Sinto dor que me impede',label:'Se você sente dor que te impede de completar seu treinamento/prática, por quanto tempo consegue treinar/praticar?',opts:['Não consigo treinar/praticar','1–10 minutos','11–20 minutos','21–30 minutos','Mais de 30 minutos'],vals:[0,2,5,7,10]}]}
  }[k];
  return `<div class="info"><strong>${cfg.titulo}</strong> — questionário de 0 a 100 pontos. Quanto mais baixo, mais grave a tendinopatia.</div>
   ${cfg.q.map((x,i)=>`<div class="qsection"><h3>${i+1}. ${x[0]}</h3>${scale11(k+'_'+i,x[1],x[2])}</div>`).join('')}
   <div class="qsection"><h3>7. Atualmente, você está praticando algum esporte ou outro tipo de atividade física?</h3>${radioOptions(k+'_7',['Não','Treinamento e/ou competição com restrições','Treinamento sem restrição, mas não competindo no mesmo nível anterior aos sintomas','Competindo no mesmo nível ou nível mais alto do que quando os sintomas começaram'],[0,4,7,10])}</div>
   ${visaGate(k,cfg.gate,cfg.branches)}`;
 }
 if(k==='VISAG'){
  const gOpts5=['Eu não realizo tarefa alguma','Eu realizo poucas tarefas','Eu realizo pouquíssimas tarefas','Eu realizo com o tempo de 30 a 60 minutos','Eu realizo por 1 hora ou mais'];
  return `<div class="info"><strong>VISA-G — Tendinopatia glútea</strong> — questionário de 0 a 100 pontos, relacionado à sua dor no quadril. Quanto mais baixo, mais grave a tendinopatia.</div>
   <div class="qsection"><h3>1. Minha dor no quadril geralmente é:</h3>${scale11('VISAG_0','Dor intensa','Sem dor')}</div>
   <div class="qsection"><h3>2. Eu consigo me deitar sobre o meu quadril doloroso</h3>${radioOptions('VISAG_1',['Eu não consigo deitar sobre o meu quadril','Por 5 a 15 minutos, depois tenho que mudar de posição','Por 15 a 30 minutos, depois tenho que mudar de posição','Por 30 minutos a 1 hora, depois tenho que mudar de posição','Por mais de 1 hora'],[0,2,5,7,10])}</div>
   <div class="qsection"><h3>3. Ao subir ou descer lance de escadas</h3>${radioOptions('VISAG_2',['Eu não consigo usar as escadas de maneira alguma por causa da dor','Subo/desço um degrau de cada vez, com apoio do corrimão, por causa da dor','Uso o corrimão devido à dor no quadril','Uso normalmente, com um pouco de dor no quadril','Uso normalmente, sem dor no quadril'],[0,2,5,7,10])}</div>
   <div class="qsection"><h3>4. Ao subir ou descer uma rampa ou ladeira</h3>${radioOptions('VISAG_3',['Eu não consigo subir ou descer devido à dor no quadril','Muita dificuldade devido à dor no quadril','Certa dificuldade devido à dor no quadril','Normalmente, com pouca dor no quadril','Normalmente, sem dor no quadril'],[0,2,5,7,10])}</div>
   <div class="qsection"><h3>5. Após ficar sentado por 30 minutos, levantar e começar a andar</h3>${radioOptions('VISAG_4',['Tenho que ficar parado por mais de 20 segundos antes de começar a andar','Tenho que ficar parado por menos de 20 segundos antes de começar a andar','Tenho que ficar parado por alguns poucos segundos antes de começar a andar','É difícil durante os passos iniciais','Não é um problema'],[0,2,5,7,10])}</div>
   <div class="qsection"><h3>6. Tarefas em casa, ao redor de casa (quintal, garagem, jardim) ou atividade parecida</h3>${radioOptions('VISAG_5',gOpts5,[0,2,5,7,10])}</div>
   <div class="qsection"><h3>7. Atualmente, você tem feito exercícios regulares, atividades físicas ou praticando esportes?</h3>${radioOptions('VISAG_6',['Não. Eu não consigo, não quero ou não tenho tempo de praticar exercícios físicos','Muito menos do que antes','Um pouco menos que antes','Sim. Eu consigo me exercitar como antes'],[0,4,7,10])}</div>
   <div class="qsection"><h3>8. Sua dor atual no quadril afeta sua capacidade de realizar atividades em que você precisa suportar o peso do seu corpo (andar, fazer compras, correr, agachar)?</h3>
    <div class="qoptions">
     <label class="qoption"><input type="radio" name="VISAG_gate" value="A" onchange="toggleVisaBranch('VISAG')"><span>Minha dor é tão intensa que me impede dessas atividades</span></label>
     <label class="qoption"><input type="radio" name="VISAG_gate" value="B" onchange="toggleVisaBranch('VISAG')"><span>Sinto dor durante essas atividades, mas ela não me impede</span></label>
     <label class="qoption"><input type="radio" name="VISAG_gate" value="C" onchange="toggleVisaBranch('VISAG')"><span>Não sinto dor nessas atividades</span></label>
    </div>
   </div>
   <div class="qsection hidden" id="VISAG_A"><h3>Seção A — quanto dessas atividades você faz por dia?</h3>${radioOptions('VISAG_8A',['Não realizo qualquer atividade a mais; só me movimento dentro de casa','Menos de 10 minutos por dia','10 a 19 minutos por dia','20 a 29 minutos por dia','Mais de 30 minutos por dia'],[0,2,5,7,10])}</div>
   <div class="qsection hidden" id="VISAG_B"><h3>Seção B — quanto dessas atividades você faz por dia?</h3>${radioOptions('VISAG_8B',['Não realizo qualquer atividade a mais; só me movimento dentro de casa','Menos de 10 minutos por dia','10 a 19 minutos por dia','20 a 29 minutos por dia','Mais de 30 minutos por dia'],[0,5,10,15,20])}</div>
   <div class="qsection hidden" id="VISAG_C"><h3>Seção C — quanto dessas atividades você faz por dia?</h3>${radioOptions('VISAG_8C',['Não realizo qualquer atividade a mais; só me movimento dentro de casa','Menos de 10 minutos por dia','10 a 19 minutos por dia','20 a 29 minutos por dia','Mais de 30 minutos por dia'],[6,12,18,24,30])}</div>`;
 }
 return '<div class="info">Formulário indisponível.</div>';
}

function openQuestionnaire(){
 const k=rInstrument.value;if(!k||!Q[k]){alert('Selecione um instrumento.');return}
 questionnaireModal.dataset.instrument=k;qFormTitle.textContent=qInfo(k).name;qFormSubtitle.textContent=qInfo(k).full;qFormBody.innerHTML=buildQuestionnaire(k);questionnaireModal.classList.remove('hidden');if(typeof startDraftTracking==='function')startDraftTracking(DRAFT_Q,'questionnaireModal',()=>({patientId:(document.getElementById('rPatient')||{}).value||currentPatient,instrument:k}))
}
function closeQuestionnaire(){if(typeof stopDraftTracking==='function')stopDraftTracking();questionnaireModal.classList.add('hidden');questionnaireModal.dataset.instrument='';qFormBody.innerHTML=''}

function calculateQuestionnaireResult(k){
 if(k==='NDI'||k==='ODI'){
  const n=FORMS[k].sections.length,vals=[];for(let i=0;i<n;i++){const v=checkedVal(`${k}_${i}`);if(v===null){alert(`Responda a seção ${i+1}.`);return null}vals.push(Number(v))}
  const raw=vals.reduce((a,b)=>a+b,0),score=raw/(n*5)*100;return{score,answers:{sections:vals,raw,source:'form'}}
 }
 if(k==='ACLRSI'){
  const vals=[],reverse=new Set([1,2,5,6,8,9]);let sum=0;for(let i=0;i<12;i++){const v=checkedVal(`ACL_${i}`);if(v===null){alert(`Responda a questão ${i+1}.`);return null}const x=Number(v);vals.push(x);sum+=reverse.has(i)?10-x:x}
  return{score:sum/120*100,answers:{responses:vals,raw:sum,source:'form'}}
 }
 if(k==='IKDC'){
  const names=['IK_1','IK_2','IK_3','IK4_0','IK_5','IK_6','IK_7','IK_8'];const v=names.map(checkedVal);if(v.some(x=>x===null)){alert('Responda as questões 1 a 8.');return null}
  const q9=[];for(let i=0;i<9;i++){const x=checkedVal(`IK_9_${i}`);if(x===null){alert('Responda todos os itens da questão 9.');return null}q9.push(Number(x))}
  const prior=checkedVal('IK_10a'),cur=checkedVal('IK_10b');if(prior===null||cur===null){alert('Responda as duas escalas da questão 10.');return null}
  const raw=Number(v[0])+(10-Number(v[1]))+(10-Number(v[2]))+Number(v[3])+Number(v[4])+Number(v[5])+Number(v[6])+Number(v[7])+q9.reduce((a,b)=>a+b,0)+Number(cur);
  return{score:raw/87*100,answers:{q1:Number(v[0]),q2:Number(v[1]),q3:Number(v[2]),q4:Number(v[3]),q5:Number(v[4]),q6:Number(v[5]),q7:Number(v[6]),q8:Number(v[7]),q9,prior:Number(prior),current:Number(cur),raw,source:'form'}}
 }
 if(k==='EVA'){const v=checkedVal('EVA_FORM');if(v===null){alert('Informe a intensidade da dor.');return null}return{score:Number(v),answers:{value:Number(v),source:'form'}}}
 if(k==='PSFS'){const items=[];for(let i=1;i<=3;i++){const name=(document.getElementById(`PSFS_NAME_${i}`)?.value||'').trim(),v=checkedVal(`PSFS_SCORE_${i}`);if(name||v!==null){if(!name||v===null){alert(`Complete nome e escore da atividade ${i}.`);return null}items.push({activity:name,score:Number(v)})}}if(!items.length){alert('Informe pelo menos uma atividade.');return null}const score=items.reduce((a,b)=>a+b.score,0)/items.length;return{score,answers:{items,source:'form'}}}
 if(k==='FAAMSPORT'){
  const vals=[];for(let i=0;i<8;i++){const v=checkedVal(`FAAM_${i}`);if(v===null){alert(`Responda a questão ${i+1} do FAAM-Sport.`);return null}vals.push(v==='NA'?null:Number(v))}
  const answered=vals.filter(v=>v!==null);if(!answered.length){alert('Responda pelo menos um item válido do FAAM-Sport.');return null}
  const raw=answered.reduce((a,b)=>a+b,0),score=raw/(answered.length*4)*100;const ge=document.getElementById('FAAM_GLOBAL'),global=ge&&ge.value!==''?Number(ge.value):null;
  return{score,answers:{responses:vals,raw,answeredItems:answered.length,globalFunction:Number.isFinite(global)?global:null,source:'form'}}
 }
 if(k==='CAIT'){
  const vals=[];for(let i=0;i<9;i++){const v=checkedVal(`CAIT_${i}`);if(v===null){alert(`Responda a questão ${i+1} do CAIT.`);return null}vals.push(Number(v))}
  const score=vals.reduce((a,b)=>a+b,0),side=document.getElementById('CAIT_SIDE')?.value||'';return{score,answers:{responses:vals,side,source:'form'}}
 }
 if(k==='NOCICRIT'){
  const vals=[];for(let i=0;i<7;i++){const v=checkedVal(`NOCICRIT_${i}`);if(v===null){alert(`Responda o item ${i+1} dos critérios de Smart et al.`);return null}vals.push(Number(v))}
  const score=vals.reduce((a,b)=>a+b,0);
  return{score,answers:{responses:vals,source:'form'}}
 }
 if(k==='DN4'){
  const vals=[];for(let i=0;i<10;i++){const v=checkedVal(`DN4_${i}`);if(v===null){alert(`Responda o item ${i+1} do DN4.`);return null}vals.push(Number(v))}
  const score=vals.reduce((a,b)=>a+b,0);
  return{score,answers:{responses:vals,source:'form'}}
 }
 if(k==='CSI'){
  const vals=[];for(let i=0;i<25;i++){const v=checkedVal(`CSI_${i}`);if(v===null){alert(`Responda o item ${i+1} do CSI.`);return null}vals.push(Number(v))}
  const score=vals.reduce((a,b)=>a+b,0);
  return{score,answers:{responses:vals,source:'form'}}
 }
 if(k==='WOMAC'){
  const vals=[];for(let i=0;i<24;i++){const v=checkedVal(`WOMAC_${i}`);if(v===null){alert(`Responda o item ${i+1} do WOMAC.`);return null}vals.push(Number(v))}
  const sum=a=>a.reduce((x,y)=>x+y,0);
  const pain=sum(vals.slice(0,5)),stiffness=sum(vals.slice(5,7)),fn=sum(vals.slice(7,24)),raw=pain+stiffness+fn;
  const pct=v=>Math.round(v*1000)/10;
  const subscales={pain:{raw:pain,max:20,pct:pct(pain/20)},stiffness:{raw:stiffness,max:8,pct:pct(stiffness/8)},function:{raw:fn,max:68,pct:pct(fn/68)}};
  const score=Math.round(raw/96*1000)/10,side=document.getElementById('WOMAC_SIDE')?.value||'';
  return{score,answers:{responses:vals,raw,subscales,side,source:'form'}}
 }
 if(k==='VISAP'||k==='VISAH'||k==='VISAA'){
  const vals=[];for(let i=0;i<6;i++){const v=checkedVal(`${k}_${i}`);if(v===null){alert(`Responda a questão ${i+1}.`);return null}vals.push(Number(v))}
  const q7=checkedVal(k+'_7');if(q7===null){alert('Responda a questão 7 (prática esportiva atual).');return null}
  const gate=checkedVal(k+'_gate');if(gate===null){alert('Selecione a situação que melhor descreve sua dor ao praticar esporte (questão 8).');return null}
  const q8=visaScore8(k);if(q8===null){alert('Complete a questão 8 com o tempo de treino/prática.');return null}
  const raw=vals.reduce((a,b)=>a+b,0)+Number(q7)+q8;
  return{score:raw,answers:{responses:vals,q7:Number(q7),gate,q8,raw,source:'form'}}
 }
 if(k==='VISAG'){
  const vals=[];for(let i=0;i<7;i++){const v=checkedVal(`VISAG_${i}`);if(v===null){alert(`Responda a questão ${i+1}.`);return null}vals.push(Number(v))}
  const gate=checkedVal('VISAG_gate');if(gate===null){alert('Selecione a situação que melhor descreve sua dor no quadril durante atividades com apoio de peso (questão 8).');return null}
  const q8=visaScore8('VISAG');if(q8===null){alert('Complete a questão 8 com o tempo de atividade por dia.');return null}
  const raw=vals.reduce((a,b)=>a+b,0)+q8;
  return{score:raw,answers:{responses:vals,gate,q8,raw,source:'form'}}
 }
 return null
}

function calculateAndSaveQuestionnaire(){
 const k=questionnaireModal.dataset.instrument,pid=rPatient.value;if(!pid){alert('Selecione um paciente.');return}
 const res=calculateQuestionnaireResult(k);if(!res)return;
 results.push({id:uid(),patientId:pid,instrument:k,date:rDate.value||today(),score:res.score,phase:rPhase.value.trim(),note:rNote.value.trim(),answers:res.answers,created:new Date().toISOString(),source:'form'});saveDB();closeQuestionnaire();currentPatient=pid;afterInstrumentSaved(pid,k)
}
