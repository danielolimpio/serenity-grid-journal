
# Hub de Glossário Premium — A Arte do Yoga

Vou construir um Glossário completo em português, integrado ao blog, com URLs `/glossario/o-que-e-[termo]`, arquitetura escalável, SEO técnico completo e design premium alinhado ao layout Zenyoga atual.

## 1. Escopo de conteúdo

Corpus inicial de **60 verbetes** cobrindo os pilares do blog (Prática, Filosofia, Bem-Estar, Ayurveda, Meditação, Programas). Exemplos: Yoga, Asana, Pranayama, Chakra, Mantra, Mudra, Dharma, Karma, Samadhi, Ahimsa, Ayurveda, Dosha, Vata, Pitta, Kapha, Prana, Kundalini, Vinyasa, Hatha, Ashtanga, Iyengar, Bhakti, Jnana, Namaste, Om, Surya Namaskar, Savasana, Mudra, Bandha, Nadi, Ida, Pingala, Sushumna, Yamas, Niyamas, Samsara, Moksha, Guru, Sadhana, Sattva, Rajas, Tamas, Meditação, Mindfulness, Zen, Yoga Nidra, Reiki, Mantra japa, Trataka, Yin Yoga, Kriya, Satsang, Puja, Tapas, Svadhyaya, Ishvara Pranidhana, Samkhya, Vedanta, Upanishads, Bhagavad Gita, Patanjali.

Cada verbete tem: categoria, sinônimos, termos relacionados, tempo de leitura, data de publicação/atualização, autor.

## 2. Arquitetura técnica

Projeto é **100% estático** (regra do memory). Portanto:

- Fonte única: `src/data/glossary/terms.ts` (dados dos 60 verbetes tipados).
- Rotas SPA (React Router) para preview: `/glossario`, `/glossario/o-que-e-:slug`.
- **Geração estática** via script `scripts/generate-glossary.ts` executado no `predev`/`prebuild`, criando:
  - `public/glossario/index.html` (hub)
  - `public/glossario/o-que-e-<slug>/index.html` (verbete)
  - Entradas no `public/sitemap.xml`
- Atualiza `scripts/generate-sitemap.ts` existente (se houver) ou o `public/sitemap.xml` diretamente.
- Usa o mesmo `public/static-styles.css` + estilos específicos do glossário.

## 3. Página Hub `/glossario` (Landing Premium Plus)

- Hero contemplativo com título, subtítulo e busca instantânea (client-side, JS puro nos HTMLs estáticos, React no SPA).
- Índice **A–Z fixo lateral** (desktop) / barra horizontal sticky (mobile).
- Grid de cards de verbetes com filtros por categoria (chips).
- Blocos: Termos em Destaque, Mais Pesquisados, Recentes, Categorias Relacionadas.
- Breadcrumbs, JSON-LD `WebSite` + `CollectionPage` + `BreadcrumbList`.

## 4. Página do Verbete `/glossario/o-que-e-<slug>`

Estrutura HTML5 semântica (`<article>` / `<section>` / `<aside>`):

1. Breadcrumbs (Início › Glossário › [Categoria] › Termo)
2. **H1**: apenas o termo
3. Meta: categoria badge, tempo de leitura, atualização, autor
4. **H2**: "O que é [Termo]?" → parágrafo de 40–60 palavras (definição objetiva, otimizada para Featured Snippet/AI Overview) marcado com `data-speakable`
5. Resumo Rápido (callout)
6. Definição Completa
7. Como Funciona
8. Exemplo Prático
9. Por que isso é importante
10. Principais Vantagens (lista com ícones)
11. Possíveis Desvantagens (quando aplicável)
12. Erros Comuns
13. Curiosidades
14. FAQ (accordions, JSON-LD `FAQPage`)
15. Termos Relacionados (cards)
16. Leitura Recomendada / Artigos do blog
17. Referências
18. Footer do artigo: Autor, Datas, Compartilhar, Copiar link, Imprimir
19. Navegação Anterior / Próximo

JSON-LD combinado: `DefinedTerm`, `DefinedTermSet`, `Article`, `BreadcrumbList`, `FAQPage`, `WebPage`, `Speakable`, `Organization`, `Person`, `ImageObject`.

## 5. SEO técnico

- `<title>` e `<meta description>` únicos por verbete (padrão: "O que é [Termo]? Significado, Origem e Prática | A Arte do Yoga").
- Canonical self-referencing, Open Graph, Twitter Card, `robots: index,follow`.
- Sitemap.xml atualizado com todos os 60 + hub.
- Internal linking: função utilitária que varre artigos e substitui a primeira ocorrência de cada termo por link para o verbete (implementada no componente de renderização de artigos + documentada para posts estáticos).
- Paginação SEO-friendly com `rel=prev/next` quando ultrapassar 30 verbetes/página.

## 6. Design (alinhado ao layout Zenyoga)

Cores: coral, navy, lavender, blush já no design system. Tipografia: Plus Jakarta Sans (display) + Inter (body). Elementos: cards com bordas suaves, sombras, badges coral, ícones lucide, accordions shadcn, callouts com barra lateral coral. Totalmente responsivo, WCAG AA.

## 7. Rodapé

Adiciona item **"Glossário"** na navegação do `Footer.tsx` apontando para `/glossario`.

## 8. Estrutura de arquivos

```text
src/
  data/glossary/
    terms.ts              # 60 verbetes com todos os campos
    categories.ts
    utils.ts              # slugify, related, search, autolink
  components/glossary/
    GlossaryHero.tsx
    GlossarySearch.tsx
    AlphabetIndex.tsx
    CategoryFilter.tsx
    TermCard.tsx
    TermArticle.tsx       # layout do verbete (usado no SPA)
    FaqAccordion.tsx
    ShareBar.tsx
    RelatedTerms.tsx
    PrevNextNav.tsx
    Breadcrumbs.tsx
  pages/
    GlossaryIndex.tsx
    GlossaryTerm.tsx
scripts/
  generate-glossary.ts    # gera public/glossario/**/*.html + injeta sitemap
public/
  glossario/index.html    # gerado
  glossario/o-que-e-*/index.html  # gerados
```

Rotas adicionadas em `src/App.tsx`.

## 9. Entrega em fases dentro deste turno

1. Dados dos 60 verbetes + utilitários.
2. Componentes React + páginas SPA.
3. Script gerador estático + hook nos npm scripts.
4. Atualização do sitemap, footer, robots e link building.
5. Verificação de build + amostra de HTML gerado.

Se aprovado, começo imediatamente pela camada de dados e sigo a lista acima sem novas perguntas.
