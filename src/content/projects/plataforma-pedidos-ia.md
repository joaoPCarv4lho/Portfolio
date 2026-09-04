---
title: Plataforma de pedidos com WhatsApp + IA
tagline: Full-stack para lanchonete, do banco de dados ao deploy
problem: >-
  Pedidos chegavam por WhatsApp e eram anotados à mão: preço divergente entre o
  que foi combinado e o que foi cobrado, códigos de pedido repetidos em horário
  de pico e fechamento de caixa reconstruído de memória no fim do dia.
solution: >-
  Back-end em FastAPI com SQLAlchemy 2.0 async e Pydantic V2 sobre PostgreSQL. O
  modelo de dados guarda snapshot imutável de preço em cada item do pedido, e a
  geração do código de pedido usa lock pessimista para eliminar colisão sob
  concorrência. Relatórios financeiros são agendados com APScheduler. A
  integração com WhatsApp usa a Evolution API, e o agente de IA lê o cardápio ao
  vivo através de uma arquitetura de provedores LLM plugável (OpenAI, Gemini ou
  Ollama). No front, Vite + React + TypeScript + Tailwind + Zustand entregam
  cardápio mobile-first, checkout, painel Kanban de caixa e histórico financeiro.
result: >-
  Pedido, cozinha e caixa passaram a operar sobre a mesma fonte de dados, com
  histórico financeiro consistente e atendimento inicial automatizado no
  WhatsApp sem depender de um provedor de IA específico.
stack:
  - Python
  - FastAPI
  - SQLAlchemy 2.0 async
  - Pydantic V2
  - PostgreSQL
  - APScheduler
  - Evolution API
  - React
  - TypeScript
  - Tailwind CSS
  - Zustand
order: 2
featured: true
period: '07/2026 — 08/2026'
repo: null # PLACEHOLDER
demo: null # PLACEHOLDER
cover: null # PLACEHOLDER: /images/projects/pedidos.png (1200×750)
confidential: true
---

Projeto real end-to-end — modelagem, API, integração, front-end e deploy — do
qual assumi todas as camadas. O nome do cliente e repositório são omitidos por confidencialidade.
A camada de provedores LLM foi isolada atrás de uma interface própria justamente
para trocar de modelo sem tocar na lógica de atendimento.
