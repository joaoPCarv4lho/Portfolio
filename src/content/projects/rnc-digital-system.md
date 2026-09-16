---
title: RNC Digital System
tagline: Plataforma corporativa de rastreabilidade de não conformidades
problem: >-
  Em uma indústria metalúrgica de grande porte, os Registros de Não Conformidade
  de peças e moldes viviam em formulários de papel: dados descentralizados,
  documentos sujeitos a extravio, rastreio manual e um intervalo longo entre a
  abertura do RNC e a análise da engenharia.
solution: >-
  Back-end em FastAPI + SQLAlchemy + PostgreSQL sobre arquitetura em camadas
  (model, schema, router, service, repository, core, utils, websocket).
  Autenticação JWT com python-jose, hash de senha com bcrypt e controle de
  acesso por papéis (Operador, Técnico, QA/Engenharia, Admin). O ciclo de vida do
  RNC — operador cria, QA analisa, técnico retrabalha, QA valida, aprova ou
  refuga — é propagado em tempo real via WebSocket. Containerizado com Docker e
  hospedado na AWS.
result: >-
  Dados centralizados e rastreabilidade ponta a ponta do ciclo de vida de cada
  registro, menos erros nas análises, decisões mais rápidas entre turnos e
  histórico confiável para auditoria.
stack:
  - Python
  - FastAPI
  - SQLAlchemy
  - PostgreSQL
  - JWT
  - bcrypt
  - WebSocket
  - Docker
  - AWS
order: 1
featured: true
period: '09/2025 — 11/2025'
repo: "https://github.com/joaoPCarv4lho/frontend_rnc_digital_system"
demo: null # PLACEHOLDER
cover: ../../assets/projects/rnc.png
coverAlt: Painel do Operador do RNC Digital System com a lista de registros de não conformidade e seus status
confidential: true
---

Projeto piloto desenvolvido para digitalizar o processo de qualidade de uma
indústria metalúrgica de grande porte. O desenho da API separa transporte
(routers), regra de negócio (services) e acesso a dados (repositories), o que
manteve o fluxo de aprovação testável mesmo com as transições de estado
crescendo ao longo do piloto.
