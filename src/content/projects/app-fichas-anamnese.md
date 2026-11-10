---
title: App de fichas de anamnese (PWA)
tagline: Do papel para um app instalável, com assinatura e PDF
problem: >-
  Fichas de anamnese de limpeza de pele e manicure eram preenchidas à mão:
  difíceis de buscar, sem histórico por visita e sem registro de consentimento
  para dados sensíveis de saúde.
solution: >-
  PWA em React + Supabase para celular e tablet, com agenda, cadastro de
  clientes, anamnese editável por serviço, termo de consentimento (LGPD) com
  assinatura na tela, histórico de atendimentos com fotos antes/depois,
  exportação da ficha em PDF e trava por PIN. Acesso por papéis (RLS) no banco.
result: >-
  Ficha digital completa por cliente, consentimento registrado antes de salvar
  e PDF pronto para imprimir ou enviar no WhatsApp.
stack:
  - React
  - Vite
  - Supabase
  - PWA
  - jsPDF
order: 3
featured: false
period: '11/2026'
repo: "https://github.com/joaoPCarv4lho/app_fichas"
demo: "https://anamnese-fichas.vercel.app"
cover: null
coverAlt: null
confidential: false
---

Projeto para uma profissional de estética. Principais decisões: modelo de
permissões no banco (RLS, exclusão só para admin), consentimento obrigatório
para salvar a anamnese e fichas definidas em schema, fáceis de editar sem mexer
nos componentes.
