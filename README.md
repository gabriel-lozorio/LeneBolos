# LeneBolos

Landing page para catálogo de bolos artesanais.

## Tecnologias

- React 18
- Vite
- CSS

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build para produção

```bash
npm run build
```

## Estrutura de pastas

```
public/
├── logo.png          # Logo da marca
├── hero.jpeg         # Foto principal
├── sobre.jpeg        # Foto da seção Sobre
└── bolos/            # Fotos dos bolos (1.jpeg até 10.jpeg)

src/
├── components/       # Componentes React
├── App.jsx           # Componente principal
├── main.jsx          # Entry point
└── index.css         # Estilos globais
```

## Configurações

### WhatsApp
O número do WhatsApp está configurado nos componentes:
- `src/components/Hero.jsx`
- `src/components/Catalog.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`

### Bolos
Para adicionar/remover bolos, edite o array em `src/components/Catalog.jsx`.
Use `ativo: false` para ocultar um bolo sem removê-lo.

## Contato

WhatsApp: (27) 99975-3620
