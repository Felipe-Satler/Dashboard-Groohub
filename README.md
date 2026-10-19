# Dashboard de Cases — Groohub

Painel de acompanhamento da criação e aprovação de **cases de sucesso** pelo time de Customer Success (CS). Ele reúne, em uma única tela, os indicadores que respondem à pergunta central do time: *estamos no ritmo para bater a meta do mês?*

> **Status:** protótipo de interface (front-end). Os números exibidos são dados de exemplo, definidos diretamente nos componentes, ainda sem integração com banco de dados ou API.

---

## Sumário

- [Visão geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Stack técnica](#stack-técnica)
- [Ferramentas de IA utilizadas](#ferramentas-de-ia-utilizadas)
- [Competências aplicadas](#competências-aplicadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Próximos passos](#próximos-passos)

---

## Visão geral

O dashboard foi pensado para gestores de CS que precisam enxergar rapidamente:

- quantos cases foram aprovados no período e quanto falta para a meta;
- se o time está **adiantado ou atrasado** em relação ao ritmo esperado (PACE);
- qual a projeção (forecast) de fechamento do mês;
- como cada CSM está performando individualmente.

O layout usa tema escuro, cards de KPI com cores semânticas (verde para realizado, azul para meta, amarelo para atenção, vermelho para gap) e uma barra lateral que prevê a expansão para outras áreas da plataforma de dados (Receita, Vendas, Marketing, Produto).

## Funcionalidades

| Bloco | O que mostra |
|---|---|
| **KPIs principais** | Cases aprovados, meta do período, % de atingimento e forecast total |
| **KPIs secundários** | Total no ano, cases publicados e destaques |
| **Progresso MTD** | Realizado vs. meta proporcional ao dia (month-to-date), com status "Atrasado/No ritmo" |
| **Dias úteis** | Dias passados vs. restantes no período e média de cases por dia |
| **Forecast** | Projeção total, projeção até hoje e gap para a meta |
| **Evolução de cases** | Gráfico de área (realizado) com linha tracejada do PACE da meta; alternância *Diário / Acumulado* e toggle para exibir a meta |
| **Performance por CSM** | Ranking com meta individual, cases em análise, pontos, % da meta e barra de progresso |

## Stack técnica

- **React 18** + **TypeScript**
- **Vite** (build e servidor de desenvolvimento, com SWC)
- **Tailwind CSS** com design system em variáveis HSL (`src/index.css`)
- **shadcn/ui** + **Radix UI** (componentes acessíveis)
- **Recharts** (gráficos)
- **lucide-react** (ícones)
- **React Router** e **TanStack Query** (já configurados para quando houver dados reais)
- **Vitest** + **Testing Library** e **Playwright** (estrutura de testes)
- **ESLint** (padronização de código)

## Ferramentas de IA utilizadas

Este projeto foi desenvolvido com apoio de IA generativa, usada como acelerador — não como substituta das decisões de produto e de código.

### Lovable

Plataforma de desenvolvimento assistido por IA que gera aplicações React a partir de descrições em linguagem natural. Foi usada para:

- **Montar a base do projeto** (Vite + React + TypeScript + Tailwind + shadcn/ui) já configurada;
- **Prototipar a interface** a partir da descrição dos indicadores do time de CS, iterando via prompts até chegar ao layout final;
- **Gerar o tema escuro** e a paleta de cores semânticas dos KPIs.

Vestígios dessa origem permanecem no repositório (plugin `lovable-tagger` no `vite.config.ts` e fixture de Playwright), o que é esperado em projetos gerados pela ferramenta.

### Como a IA foi aproveitada

- **Prompts orientados a negócio:** em vez de pedir "um dashboard", os prompts descreviam as métricas concretas (meta, PACE, forecast, MTD, dias úteis) e a hierarquia de importância de cada uma.
- **Iteração incremental:** a interface foi refinada em ciclos curtos — gerar, revisar, corrigir, pedir ajustes pontuais.
- **Revisão humana do resultado:** componentes foram organizados em `src/components/dashboard/`, nomes e textos foram adaptados ao vocabulário do time e a consistência visual foi conferida manualmente.

## Competências aplicadas

**Técnicas**

- Desenvolvimento front-end com React e TypeScript
- Componentização e organização de código reutilizável
- Design system com Tailwind e tokens de cor
- Visualização de dados e escolha do gráfico adequado para cada métrica
- Leitura, revisão e ajuste de código gerado por IA

**Pessoais**

- **Tradução de necessidade de negócio em produto:** entender o que o time de CS precisa acompanhar e transformar isso em indicadores claros.
- **Comunicação clara e objetiva:** a qualidade do resultado com IA depende de instruções precisas — saber explicar o que se quer é a principal habilidade nesse fluxo.
- **Pensamento crítico:** avaliar o que a IA entregou em vez de aceitar a primeira versão, identificando incoerências visuais, de dados ou de nomenclatura.
- **Autonomia e senso de priorização:** foco em entregar rápido um protótipo funcional para validar a ideia antes de investir na integração com dados reais.
- **Aprendizado contínuo:** adoção de ferramentas novas de IA no fluxo de trabalho de forma prática.
- **Atenção à experiência do usuário:** hierarquia visual, cores com significado e leitura rápida do status da meta.

## Estrutura do projeto

```
src/
├── components/
│   ├── dashboard/        # Componentes específicos do painel
│   │   ├── Sidebar.tsx         # Navegação lateral
│   │   ├── KpiCard.tsx         # Card genérico de indicador
│   │   ├── ProgressCard.tsx    # Progresso MTD e dias úteis
│   │   ├── ForecastCards.tsx   # Projeções e gap para a meta
│   │   ├── CasesChart.tsx      # Gráfico de evolução vs. PACE
│   │   └── CsmTable.tsx        # Ranking de performance por CSM
│   └── ui/               # Biblioteca de componentes shadcn/ui
├── pages/
│   ├── Index.tsx         # Página principal do dashboard
│   └── NotFound.tsx      # Página 404
├── hooks/                # Hooks utilitários
├── lib/utils.ts          # Helper de classes (cn)
├── test/                 # Configuração e exemplo de testes
├── App.tsx               # Rotas e providers
└── index.css             # Design system (variáveis de tema)
```

## Como executar

**Pré-requisitos:** Node.js 18+ e npm (ou Bun).

```bash
# Clonar o repositório
git clone https://github.com/Felipe-Satler/Dashboard-Groohub.git
cd Dashboard-Groohub

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento (http://localhost:8080)
npm run dev
```

Outros scripts disponíveis:

| Comando | Descrição |
|---|---|
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm run lint` | Executa o ESLint |
| `npm run test` | Executa os testes com Vitest |

## Próximos passos

- [ ] Integrar com fonte de dados real (ex.: Supabase) e substituir os dados de exemplo
- [ ] Calcular dinamicamente MTD, PACE, forecast e dias úteis a partir das datas do período
- [ ] Implementar o seletor de período e o botão de atualizar
- [ ] Ativar a aba **Distribuições** da tabela de CSMs
- [ ] Ajustar `index.html` (título, descrição e imagens de compartilhamento)
- [ ] Remover componentes de `ui/` que não são utilizados
- [ ] Escrever testes para os componentes do dashboard

---

Desenvolvido por **Felipe Satler**.
