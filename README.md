# Abduqodir Fotih — Portfolio

Personal portfolio of **Abduqodir Fotih**, FullStack developer and 3rd-year student at PDP University.

![Preview](https://abduqodir-fotih.uz/opengraph-image)

## Features

- Three languages (UZ / RU / EN), remembered between visits
- Interactive terminal — try `help`, `skills`, `projects` or `sudo hire-me`
- Contact form that delivers messages straight to Telegram
- Sticky navbar with active section and scroll progress
- Generated Open Graph image, sitemap, robots.txt and JSON-LD for SEO
- Custom terminal-style 404 page
- Respects `prefers-reduced-motion`

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · lucide-react

## Getting started

```bash
npm install --legacy-peer-deps
cp .env.example .env.local   # fill in Telegram bot settings
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Name | Description |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `TELEGRAM_CHAT_ID` | Chat that receives contact-form messages |

Without them the contact form falls back to opening a prefilled email.

## Contacts

- GitHub: [AbduqodirFotih](https://github.com/AbduqodirFotih)
- Telegram: [@Abduqodir_Fotih](https://t.me/Abduqodir_Fotih)
- Instagram: [@Abduqodir_Fotih](https://www.instagram.com/Abduqodir_Fotih)
