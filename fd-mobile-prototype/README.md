# fd-mobile-prototype

Standalone React prototype for FD+ Mobile v1.

## Commands

```bash
pnpm install
pnpm run build
pnpm run serve
```

Open `http://127.0.0.1:5177/index.html`.

## Notes

- This is a static prototype, not a production mobile client.
- The app keeps the mobile v1 scope to conversational image/video generation, official templates, results, works, reuse, and deduction visibility.
- Flow charts are intentionally excluded from this app project.
- Config options are driven by the selected model type:
  - Image model: batch, resolution, aspect ratio
  - Video model: output count, resolution, aspect ratio, duration

## Build Output

`pnpm run build` writes bundled assets to `dist/assets/`.
