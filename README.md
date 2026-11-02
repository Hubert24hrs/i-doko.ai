# i-doko.ai

Corporate website for i-doko.ai, built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Run it locally

Requires Node.js 22 or later.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs at http://localhost:3000. In development, the contact form works without email set up: submissions succeed and no email is sent.

## Scripts

| Command             | What it does                   |
| ------------------- | ------------------------------ |
| `npm run dev`       | Starts the development server  |
| `npm run build`     | Creates a production build     |
| `npm run start`     | Runs the production build      |
| `npm run lint`      | Runs ESLint                    |
| `npm run typecheck` | Runs the TypeScript compiler   |
| `npm run format`    | Formats the code with Prettier |

## Environment variables

All are listed in `.env.example`. Never commit real values.

| Variable                       | Needed for           | Notes                                             |
| ------------------------------ | -------------------- | ------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Metadata and sitemap | The public URL of the site                        |
| `RESEND_API_KEY`               | Contact form         | From your Resend account                          |
| `CONTACT_TO_EMAIL`             | Contact form         | The inbox that receives enquiries                 |
| `CONTACT_FROM_EMAIL`           | Contact form         | Must be on a domain verified in Resend            |
| `NEXT_PUBLIC_BOOKING_URL`      | Booking embed        | Optional. A full `cal.com` or `calendly.com` URL  |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics            | Optional. Analytics stays off while this is empty |
| `SITE_LAUNCHED`                | Search indexing      | Set to `true` at launch, then redeploy            |

In production, the contact form returns an error until the three email variables are set.

## Deploy to Vercel

1. Import this GitHub repository into Vercel. It detects Next.js automatically.
2. Add the environment variables under Project Settings.
3. Deploy, then connect the domain under Project Settings, Domains.

Every page tells search engines not to index it until launch. When you're ready to appear in search, set `SITE_LAUNCHED` to `true` in Vercel and redeploy.

## Update the content

Content lives in typed files, so most updates are a single-file edit.

| What to change                                  | Where                     |
| ----------------------------------------------- | ------------------------- |
| Contact details, socials, legal name, RC number | `lib/site.ts`             |
| Services                                        | `content/services.ts`     |
| Audiences, process, values, FAQ, tech stack     | `content/company.ts`      |
| Hero console sample runs                        | `content/agent-runs.ts`   |
| Case studies                                    | `content/case-studies.ts` |
| Insights posts                                  | `content/insights.ts`     |

### Turn on hidden sections

Work, Insights and the newsletter field are built but switched off. Fields left empty in `lib/site.ts` stay hidden too, so nothing appears half-finished.

1. Add real content to `content/case-studies.ts` or `content/insights.ts`.
2. Set `work`, `insights` or `newsletter` to `true` under `features` in `lib/site.ts`.

Each section then appears in the navigation, footer and sitemap. Only add verified projects and results.

## Project structure

```
app/         Routes, metadata, API routes, fonts
components/  ui, layout, sections, forms, motion
content/     Site copy and structured content
lib/         Site config, validation, email, SEO
styles/      Global CSS and design tokens
```

## Fonts

General Sans is self-hosted from `app/fonts` and comes from [Fontshare](https://www.fontshare.com/fonts/general-sans), free under the ITF Free Font License. Geist Sans and Geist Mono come from the `geist` package.
