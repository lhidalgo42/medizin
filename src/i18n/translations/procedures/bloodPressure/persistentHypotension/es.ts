export default {
  title: 'Hipotensión Persistente',
  branches: {
    fever: {
      title: 'Fiebre/Escalofríos/Parámetros inflamatorios elevados',
      actions: [
        'Continuar resucitación con volumen en bolos de 250-500 ml',
        '(30 ml/kg total o según prueba de elevación EEI)',
        'Si la hipotensión persiste, iniciar norepinefrina',
        'Evaluar si se requieren nuevos bolos de SF/SR',
        'Completar objetivos de Shock Séptico:',
        '- Hemodinamia I y II',
        '- Antibióticos de amplio espectro temprano',
        '- Solicitar Lactato'
      ]
    },
    ventilation: {
      title: 'Alteración en la ventilación',
      steps: [
        'Probabilidad de TEP',
        'Resucitación con volumen cautelosa',
        'Iniciar norepinefrina',
        'Alertar al residente de UCI para ecocardiograma a la cabecera',
        'AngioTAC torácico',
        'Ingurgitación yugular',
        'Murmullo pulmonar presente',
        'Taponamiento cardíaco',
        'Alertar al Residente de UCI'
      ]
    },
    cardiac: {
      title: 'Dolor torácico/Pulso irregular/Monitor con arritmia',
      conditions: {
        tachyarrhythmia: 'Taquiarritmia',
        bradyarrhythmia: 'Bradiarritmia',
        process: [
          'ECG',
          'IAM',
          'Shock Cardiogénico',
          'Iniciar norepinefrina'
        ]
      }
    },
    bleeding: {
      title: '¿Pérdida evidente/Sangrado?',
      checks: [
        'Examen rectal: ¿Melena/rectorragia?',
        '¿Cirugía reciente?',
        '¿Biopsias recientes?'
      ],
      actions: [
        'Resucitación con volumen en bolos de 250-1000 ml (según edad)',
        'Solicitar Grupo/RH Celldyn/INR/TTPK',
        'Considerar transfusión GR',
        '* 1er Hcto no siempre confiable',
        'Revertir anticoagulación y transfundir plaquetas si es necesario',
        'Considerar AngioTAC para buscar sangrado no evidente'
      ]
    }
  }
};