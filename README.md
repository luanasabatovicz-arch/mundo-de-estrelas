# Mundo de Estrelas

Pequenas atitudes, grandes conquistas, infinitos mundos.

App para famílias com crianças e adolescentes: rotina, atitudes e prêmios com um único sistema de estrelas, uma temporada ilustrada por vez (a primeira é a Vila Encantada de Natal), álbum de aventuras, desafios por idade, Cantinho da calma, devocional da noite e Calendário do Advento.

## Pastas

| Pasta | O que tem |
| --- | --- |
| `app/` | Código-fonte (Vite + TypeScript + Preact + Firebase). |
| `docs/` | O site publicado pelo GitHub Pages. `docs/assets` e `docs/index.html` são gerados pelo build. |
| `docs/content/` | Conteúdo editável sem mexer no código: temporadas, histórias, desafios, orações e **todas as imagens**. |
| `firebase/` | Bloco de regras de segurança do Firestore para colar no console. |
| `legacy/` | Cópia de segurança do Quadro de Estrelas v13 (app antigo), só para consulta. |

## Imagens

Envie cada imagem com o nome exato para a pasta indicada no guia das ilustrações. Enquanto uma imagem não existe, o app mostra o emoji da peça. Em Responsáveis → Temporada → Conferir imagens dá para ver o que já chegou.

- Vila: `docs/content/seasons/vila-natal/images/` (`fundo.png`, `capa.png`, `pecas/01-pinheiro.png` …, `marcos/m1-torre-relogio.png` …)
- Histórias da noite: `docs/content/noite/natal/01-1.jpg` … `37-3.jpg`
- Advento: `docs/content/advento/01.jpg` … `24.jpg`

## Nova temporada

Uma temporada é só conteúdo: crie `docs/content/seasons/<id>/season.json` (mesmo formato da Vila de Natal), as imagens e uma linha em `docs/content/seasons/index.json`. O núcleo do app não muda.

## Desenvolvimento

```
cd app
npm install
npm run dev      # servidor local
npm run build    # gera docs/
```

Demonstração sem conta: abra o site com `?demo=1` (os dados ficam só no navegador). Para simular outra data: `?demo=1&hoje=2026-12-24`.

## Dados

Firebase do projeto `quadro-de-estrelas-8c81a`, em caminhos novos (`families/`, `licenses/`, `contentOverrides/`). Os dados do app antigo continuam nos caminhos antigos e não são tocados.
