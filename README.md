# employee-onboarding

gamified employee onboarding platform with 3d experiences and multilingual support

## setup

```bash
npm install
npm run dev
```

open http://localhost:5173

## what's inside

- react + vite for the ui
- babylon.js for 3d stuff
- phaser for the games
- tailwind for styling
- i18next for translations (en, hi, etc)
- docuseal for document signing

## commands

```bash
npm run dev      # start dev server
npm run build    # build for production
npm run preview  # preview production build
npm run lint     # check code
```

## project structure

```
src/
  components/    # ui components
  pages/         # main pages
  locales/       # translation files
  i18n.js        # i18n config
public/
  assets/        # images, 3d models, game assets
```

## adding translations

create a new json file in `src/locales/` and add it to `i18n.js`

## notes

- tailwind config already set up
- keep 3d models optimized
- game assets go in public/assets/game-assets/

that's it