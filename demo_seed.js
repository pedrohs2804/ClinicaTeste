// ============================================================
// DADOS DE DEMONSTRAÇÃO — carregados apenas na primeira vez que
// o app abre (quando o armazenamento local está vazio). Depois
// disso, tudo que for editado na demonstração persiste
// normalmente no navegador, como qualquer uso real.
//
// Para reiniciar a demonstração do zero: limpar os dados do site
// no navegador (Ajustes do site → Limpar dados) e recarregar.
// ============================================================
const DEMO_THERAPISTS = [
  { id: 'demo-t1', name: 'Camila Ortiz', active: true },
  { id: 'demo-t2', name: 'Rafael Nunes', active: true },
  { id: 'demo-t3', name: 'Beatriz Andrade', active: true }
];

const DEMO_PATIENTS = [
  { id: 'demo-p1', name: 'Ana Beatriz Souza', dx: 'Reconstrução do LCA', side: 'Direito', indexDate: '2026-01-10', age: 24, profession: '', sport: 'Futebol', doctorName: '', chiefComplaint: '', notes: '',
    assignedTherapist: 'Camila Ortiz',
    assignments: [ { q: 'IKDC', mode: 'milestones', interval: 30, milestones: [3, 6, 9] }, { q: 'ACLRSI', mode: 'milestones', interval: 30, milestones: [3, 6, 9] } ],
    createdDate: '2026-01-10', status: 'discharged', dischargeDate: '2026-10-10' },

  { id: 'demo-p2', name: 'Carlos Eduardo Lima', dx: 'Entorse de tornozelo', side: 'Esquerdo', indexDate: '2026-06-10', age: 29, profession: '', sport: 'Corrida', doctorName: '', chiefComplaint: '', notes: '',
    assignedTherapist: 'Rafael Nunes',
    assignments: [ { q: 'FAAMSPORT', mode: 'interval', interval: 21, milestones: null }, { q: 'CAIT', mode: 'interval', interval: 21, milestones: null } ],
    createdDate: '2026-06-10', status: 'active', dischargeDate: '' },

  { id: 'demo-p3', name: 'Maria Helena Ferreira', dx: 'Osteoartrite de joelho', side: 'Não se aplica', indexDate: '2026-03-01', age: 63, profession: 'Costureira', sport: '', doctorName: '', chiefComplaint: '', notes: '',
    assignedTherapist: 'Camila Ortiz',
    assignments: [ { q: 'WOMAC', mode: 'interval', interval: 30, milestones: null } ],
    createdDate: '2026-03-01', status: 'active', dischargeDate: '' },

  { id: 'demo-p4', name: 'João Pedro Almeida', dx: 'Lombalgia crônica', side: 'Não se aplica', indexDate: '2026-04-01', age: 45, profession: 'Motorista', sport: '', doctorName: '', chiefComplaint: 'Dor lombar há mais de 8 meses, sem melhora significativa com tratamentos anteriores.', notes: '',
    assignedTherapist: 'Rafael Nunes',
    assignments: [ { q: 'EVA', mode: 'interval', interval: 14, milestones: null }, { q: 'ODI', mode: 'interval', interval: 30, milestones: null } ],
    createdDate: '2026-04-01', status: 'active', dischargeDate: '' },

  { id: 'demo-p5', name: 'Sara Oliveira', dx: 'Dor cervical', side: 'Não se aplica', indexDate: '2026-05-04', age: 35, profession: 'Designer', sport: '', doctorName: '', chiefComplaint: '', notes: '',
    assignedTherapist: 'Beatriz Andrade',
    assignments: [ { q: 'NDI', mode: 'interval', interval: 30, milestones: null } ],
    createdDate: '2026-05-04', status: 'active', dischargeDate: '' },

  { id: 'demo-p6', name: 'Antonio Ribeiro', dx: 'Risco de queda — idoso', side: 'Não se aplica', indexDate: '2026-09-01', age: 78, profession: 'Aposentado', sport: '', doctorName: '', chiefComplaint: 'Encaminhado após episódio de quase-queda em casa.', notes: '',
    assignedTherapist: 'Camila Ortiz',
    assignments: [],
    createdDate: '2026-09-01', status: 'active', dischargeDate: '' },

  { id: 'demo-p7', name: 'Daniel Felipe Gonçalves', dx: 'Tendinopatia patelar', side: 'Direito', indexDate: '2026-02-15', age: 31, profession: '', sport: 'Corrida (maratonista amador)', doctorName: '', chiefComplaint: '', notes: '',
    assignedTherapist: 'Rafael Nunes',
    assignments: [ { q: 'VISAP', mode: 'interval', interval: 30, milestones: null } ],
    createdDate: '2026-02-15', status: 'active', dischargeDate: '' }
];

function _demoResult(id, patientId, instrument, date, score, note) {
  return { id, patientId, instrument, date, score, phase: '', note: note || '', answers: { source: 'demo' }, created: date + 'T10:00:00.000Z', source: 'form' };
}

const DEMO_RESULTS = [
  // Ana Beatriz — evolução completa do LCA (3, 6 e 9 meses)
  _demoResult('demo-r1', 'demo-p1', 'IKDC', '2026-04-10', 58.6, 'Reavaliação de 3 meses'),
  _demoResult('demo-r2', 'demo-p1', 'ACLRSI', '2026-04-10', 41.7, 'Reavaliação de 3 meses'),
  _demoResult('demo-r3', 'demo-p1', 'IKDC', '2026-07-10', 78.2, 'Reavaliação de 6 meses'),
  _demoResult('demo-r4', 'demo-p1', 'ACLRSI', '2026-07-10', 63.3, 'Reavaliação de 6 meses'),
  _demoResult('demo-r5', 'demo-p1', 'IKDC', '2026-10-10', 94.3, 'Bateria de alta'),
  _demoResult('demo-r6', 'demo-p1', 'ACLRSI', '2026-10-10', 85.0, 'Bateria de alta'),

  // Carlos — tornozelo, uma reavaliação aplicada, próxima já vencida (mostra alerta no painel)
  _demoResult('demo-r7', 'demo-p2', 'FAAMSPORT', '2026-06-15', 52.0, 'Avaliação inicial'),
  _demoResult('demo-r8', 'demo-p2', 'CAIT', '2026-06-15', 14, 'Avaliação inicial'),

  // Maria Helena — WOMAC evoluindo (melhora funcional)
  _demoResult('demo-r9', 'demo-p3', 'WOMAC', '2026-03-05', 61.5, 'Avaliação inicial'),
  _demoResult('demo-r10', 'demo-p3', 'WOMAC', '2026-06-05', 44.8, 'Reavaliação de 3 meses'),

  // João Pedro — dor crônica com predomínio de dor completo (DN4 + CSI + critérios de Smart)
  _demoResult('demo-r11', 'demo-p4', 'EVA', '2026-04-05', 7, 'Avaliação inicial'),
  _demoResult('demo-r12', 'demo-p4', 'ODI', '2026-04-05', 48, 'Avaliação inicial'),
  _demoResult('demo-r13', 'demo-p4', 'DN4', '2026-04-08', 1, 'Rastreio de dor — entrevista e exame clínico'),
  _demoResult('demo-r14', 'demo-p4', 'CSI', '2026-04-08', 54, 'Inventário de Sensibilização Central'),
  _demoResult('demo-r15', 'demo-p4', 'NOCICRIT', '2026-04-08', 2, 'Checklist clínico do fisioterapeuta'),

  // Sara — cervical
  _demoResult('demo-r16', 'demo-p5', 'NDI', '2026-05-06', 38, 'Avaliação inicial'),

  // Daniel — tendinopatia patelar
  _demoResult('demo-r17', 'demo-p7', 'VISAP', '2026-02-18', 62, 'Avaliação inicial'),
  _demoResult('demo-r18', 'demo-p7', 'VISAP', '2026-05-18', 81, 'Reavaliação de 3 meses')
];

function _isoGroup(rt, lt, angle, patientSide) {
  const rightMean = (rt[0] + rt[1] + rt[2]) / 3, leftMean = (lt[0] + lt[1] + lt[2]) / 3;
  const asym = Math.abs(leftMean - rightMean) / Math.max(leftMean, rightMean) * 100;
  const lsi = patientSide === 'Direito' ? (leftMean / rightMean * 100) : patientSide === 'Esquerdo' ? (rightMean / leftMean * 100) : (Math.min(leftMean, rightMean) / Math.max(leftMean, rightMean) * 100);
  return { right: rt, left: lt, rightMean, leftMean, angle, asymmetry: Math.round(asym * 10) / 10, lsi: Math.round(lsi * 10) / 10 };
}
function _hopGroup(rt, lt, patientSide) {
  const rightMean = (rt[0] + rt[1] + rt[2]) / 3, leftMean = (lt[0] + lt[1] + lt[2]) / 3;
  const asym = Math.abs(leftMean - rightMean) / Math.max(leftMean, rightMean) * 100;
  const lsi = patientSide === 'Direito' ? (leftMean / rightMean * 100) : patientSide === 'Esquerdo' ? (rightMean / leftMean * 100) : (Math.min(leftMean, rightMean) / Math.max(leftMean, rightMean) * 100);
  return { right: rt, left: lt, rightMean, leftMean, asymmetry: Math.round(asym * 10) / 10, lsi: Math.round(lsi * 10) / 10 };
}

const DEMO_PHYSICAL_TESTS = [
  // 3 meses — ainda sem hop tests (não indicado nessa fase)
  { id: 'demo-pt1', patientId: 'demo-p1', date: '2026-04-10', therapist: 'Camila Ortiz', forceUnit: 'kgf', isPreOp: false,
    isometric: { __selected: ['quadriceps', 'hamstrings'],
      quadriceps: _isoGroup([32, 33, 31], [38, 39, 37], 60, 'Direito'),
      hamstrings: _isoGroup([20, 21, 19], [23, 24, 22], 60, 'Direito') },
    hops: { __selected: [] },
    rom: { __used: true, __protocol: 'lca', __selected: ['kneeFlex', 'kneeExt'], flexion: { right: 118, left: 138, difference: 20 }, extension: { right: -3, left: 0, difference: 3 }, ybalance: { __used: false } },
    notes: '', created: '2026-04-10T10:00:00.000Z', _updatedAt: '2026-04-10T10:00:00.000Z', _syncStatus: 'synced', _syncError: '', _cloudExists: false },

  // 6 meses — resultado intermediário, ainda sem hop tests registrados nesta demo (mostra evolução gradual)
  { id: 'demo-pt2', patientId: 'demo-p1', date: '2026-07-10', therapist: 'Camila Ortiz', forceUnit: 'kgf', isPreOp: false,
    isometric: { __selected: ['quadriceps', 'hamstrings'],
      quadriceps: _isoGroup([35, 36, 34], [38, 39, 37], 60, 'Direito'),
      hamstrings: _isoGroup([22, 23, 21], [23, 24, 22], 60, 'Direito') },
    hops: { __selected: [] },
    rom: { __used: true, __protocol: 'lca', __selected: ['kneeFlex', 'kneeExt'], flexion: { right: 132, left: 139, difference: 7 }, extension: { right: 0, left: 0, difference: 0 }, ybalance: { __used: false } },
    notes: '', created: '2026-07-10T10:00:00.000Z', _updatedAt: '2026-07-10T10:00:00.000Z', _syncStatus: 'synced', _syncError: '', _cloudExists: false },

  // 9 meses — bateria de alta, com hop tests completos (single, triple, crossover)
  { id: 'demo-pt3', patientId: 'demo-p1', date: '2026-10-10', therapist: 'Camila Ortiz', forceUnit: 'kgf', isPreOp: false,
    isometric: { __selected: ['quadriceps', 'hamstrings'],
      quadriceps: _isoGroup([38, 39, 37], [39, 40, 38], 60, 'Direito'),
      hamstrings: _isoGroup([24, 25, 23], [24, 25, 23], 60, 'Direito') },
    hops: { __selected: ['single', 'triple', 'crossover'],
      single: _hopGroup([142, 145, 140], [138, 140, 136], 'Direito'),
      triple: _hopGroup([410, 415, 405], [395, 400, 392], 'Direito'),
      crossover: _hopGroup([380, 385, 378], [365, 370, 362], 'Direito') },
    rom: { __used: true, __protocol: 'lca', __selected: ['kneeFlex', 'kneeExt'], flexion: { right: 138, left: 140, difference: 2 }, extension: { right: 0, left: 0, difference: 0 }, ybalance: { __used: false } },
    notes: 'Paciente apta para retorno ao esporte — critérios de força e desempenho atingidos.', created: '2026-10-10T10:00:00.000Z', _updatedAt: '2026-10-10T10:00:00.000Z', _syncStatus: 'synced', _syncError: '', _cloudExists: false }
];

// Carrega os dados de demonstração na primeira vez que ESTA cópia da
// demonstração roda neste navegador — usando uma marcação própria
// (independente do que já possa existir salvo de outros testes locais
// no mesmo navegador, já que arquivos abertos como file:// costumam
// compartilhar o mesmo armazenamento entre si).
//
// Depois da primeira vez, os dados passam a persistir normalmente
// (edições feitas na demonstração continuam salvas ao reabrir).
//
// Pra forçar a demonstração a recarregar os 7 pacientes de novo do
// zero: no console do navegador, rode
//   localStorage.removeItem('motion_demo_seeded_v1')
// e recarregue a página.
const DEMO_SEED_MARKER = 'motion_demo_seeded_v2';
function _demoForce(key, seedArray) {
  localStorage.setItem(key, JSON.stringify(seedArray));
}
if (localStorage.getItem(DEMO_SEED_MARKER) === null) {
  _demoForce('nichioka_therapists_v1', DEMO_THERAPISTS);
  _demoForce('fio_final_patients_v1', DEMO_PATIENTS);
  _demoForce('fio_final_results_v1', DEMO_RESULTS);
  _demoForce('nichioka_physical_tests_v1', DEMO_PHYSICAL_TESTS);
  localStorage.setItem(DEMO_SEED_MARKER, '1');
}
