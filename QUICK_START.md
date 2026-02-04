# 🎨 Heritage & Culture Portal - Quick Start

## ⚡ Get Running in 2 Minutes

```bash
cd "c:\Users\Kunal\OneDrive\Desktop\Self\Hackathon"
npm install
npm run dev
```

Open **http://localhost:5173** → Ready to explore!

---

## 📂 What You Got

✅ **9 Complete Pages**
- Home (hero, carousel, stats)
- Heritage Sites (interactive map + modals)
- Festivals & Traditions (calendar with countdowns)
- Art & Crafts (gallery with lightbox)
- Cuisine (recipe explorer with search)
- Languages & Literature (interactive scripts)
- About (mission, preservation stats)
- Contact (validated form + map placeholder)
- Explore (virtual tours placeholder)
- 404 (custom not-found page)

✅ **Key Features**
- 🌍 React Router v6 multi-page SPA
- 🗺️ React Leaflet interactive maps
- 🎨 Tailwind CSS with earth tones + gold
- ✨ Framer Motion animations
- 🌙 Dark/Light mode with localStorage
- 🌐 English + Hindi (i18next)
- 📱 Mobile-first responsive
- 🔍 Form validation with React Hook Form
- 💾 Global state with Zustand
- 🛠️ ESLint + Prettier configured
- 📦 PWA-ready (service worker + manifest)

---

## 📁 File Structure at a Glance

```
src/
├── pages/          → All 9 pages (lazy-loaded)
├── components/     → Navbar, Footer, DarkModeToggle
├── shared/         → Carousel, Modal
├── store/          → Zustand state (dark mode, filters)
├── data/           → heritage.json (heritage sites)
├── styles/         → Main CSS with Tailwind
├── i18n.js         → Translation config
├── App.jsx         → Router + layout
└── main.jsx        → Entry point

public/
├── manifest.json   → PWA manifest
├── sw.js           → Service worker
└── assets/         → Images, icons

Config Files
├── vite.config.js      → Build config
├── tailwind.config.cjs → Colors, fonts
├── postcss.config.cjs  → CSS plugins
├── .eslintrc.cjs       → Linting rules
└── package.json        → Dependencies
```

---

## 🎯 Common Tasks

### Run Development Server (Auto-reload)
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview  # Test production build
```

### Check Code Quality
```bash
npm run lint     # Check for errors
npm run format   # Auto-fix formatting
```

### Add a New Page
1. Create `src/pages/MyPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   const MyPage = lazy(() => import('./pages/MyPage'))
   <Route path="/mypage" element={<MyPage/>} />
   ```
3. Add NavLink in `src/components/Navbar.jsx`

### Customize Colors
Edit `src/styles/main.css`:
```css
--earth: #7A5C3A;  /* Brown */
--sand: #F4EBD9;   /* Cream */
--gold: #C09A4B;   /* Gold */
```

Also update `tailwind.config.cjs` colors.

### Add More Heritage Sites
Edit `src/data/heritage.json`:
```json
[
  { "id": 1, "name": "Taj Mahal", "lat": 27.1751, "lng": 78.0421, "desc": "..." },
  { "id": 2, "name": "Your Site", "lat": 0.0, "lng": 0.0, "desc": "..." }
]
```

### Change Language Strings
Edit `src/i18n.js`:
```javascript
en: { translation: { home: 'Home', ... } },
hi: { translation: { home: 'मुख पृष्ठ', ... } }
```

---

## 🚀 Deployment (Choose One)

### **Vercel** (5 seconds)
```bash
npm install -g vercel
vercel
```
Auto-deploys on git push!

### **Netlify** (2 minutes)
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### **GitHub Pages** (if you fork it)
```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## ⚙️ Tech Stack

| Tech | Purpose | Version |
|------|---------|---------|
| React | UI Framework | 18.2.0 |
| Vite | Build Tool | 5.1.0 |
| Tailwind CSS | Styling | 3.4.1 |
| React Router | Navigation | 6.20.0 |
| React Leaflet | Maps | 4.2.0 |
| Framer Motion | Animations | 10.16.0 |
| Zustand | State | 4.4.0 |
| i18next | Translations | 23.7.0 |
| React Hook Form | Forms | 7.48.0 |

---

## 🎨 Color Palette

```
Earth Brown:  #7A5C3A (Primary)
Sand Cream:   #F4EBD9 (Background)
Gold Accent:  #C09A4B (Highlights)
```

Used throughout for a cultural heritage aesthetic.

---

## 📱 Responsive Breakpoints (Tailwind)

- **Mobile**: 0px (default)
- **Tablet**: `md:` (768px)
- **Desktop**: `lg:` (1024px)

All components use mobile-first approach.

---

## 🧪 Testing

### Manual Testing
1. Run `npm run dev`
2. Test all 9 pages
3. Toggle dark mode (localStorage persists)
4. Change language (EN ↔ HI)
5. Check mobile view (DevTools → Toggle Device Toolbar)

### Build Testing
```bash
npm run build
npm run preview  # Open http://localhost:4173
```

### Performance
- Lazy-loads pages (code splitting)
- Efficient Tailwind CSS tree-shaking
- Service worker caching for offline

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 in use | `npm run dev -- --port 5174` |
| Modules not found | `rm -r node_modules && npm install` |
| Map not showing | Check `/public/assets/` for Leaflet icons |
| Dark mode not persisting | Enable localStorage in browser |
| i18n strings not showing | Check `src/i18n.js` has your language |

---

## 📚 Documentation Files

1. **README.md** - Full project overview + features
2. **SETUP_GUIDE.md** - Detailed setup & deployment
3. **THIS FILE** - Quick reference

---

## 🎓 Next Steps

1. ✅ Run `npm install && npm run dev`
2. 🌐 Explore all pages
3. 🎨 Customize colors and fonts
4. 📍 Replace heritage.json with your sites
5. 🚀 Deploy to Vercel/Netlify

---

## 💡 Pro Tips

- Use `Ctrl+Shift+R` to hard-refresh during development
- Check browser DevTools Console for warnings
- Lighthouse audit: `npm run build` → open dist/index.html
- Enable PWA: Can be installed on mobile (Menu → Install App)

---

## 🔐 Security Notes

- ✅ Form validation on client (add server-side too!)
- ✅ No hardcoded secrets (use `.env`)
- ✅ Sanitize user input before displaying
- ✅ Set proper CORS headers on backend

---

## 📞 Need Help?

1. Check existing pages in `src/pages/` for examples
2. Review component patterns in `src/components/`
3. Check Tailwind docs: https://tailwindcss.com
4. React docs: https://react.dev

---

**Your Heritage Portal is ready! Happy coding! 🎉**

*Built with React 18 • Vite • Tailwind CSS • ❤️*
