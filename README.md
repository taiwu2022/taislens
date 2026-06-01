# Tai's Lens

Personal website for photography first, with a small academic corner for notes,
projects, CV links, and publications later.

Live site target: <https://taiwu2022.github.io/taislens/>.

## Local preview

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173/>.

## Structure

- `index.html` - page content
- `styles.css` - layout and visual design
- `script.js` - tiny browser behavior

## Deployment idea

This is plain static HTML, so it can be hosted on GitHub Pages, Cloudflare Pages,
Netlify, or Vercel. Once the domain is under your control, point `taislens.com`
and `www.taislens.com` at the chosen host.
