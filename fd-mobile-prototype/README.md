# fd-mobile-prototype

Standalone React prototype for FD+ Mobile v1.

## Commands

```bash
pnpm run build
pnpm run serve
```

Open `http://127.0.0.1:5177/index.html`.

## Notes

- This is a static prototype, not a production mobile client.
- The app keeps the mobile v1 scope to conversational image/video generation, results, works, reuse, and generation record visibility.
- Flow charts are intentionally excluded from this app project.
- Config options are driven by the selected model type:
  - Image model: batch, resolution, aspect ratio
  - Video model: output count, resolution, aspect ratio, duration
- The composer is shared across home, second floor, and design page; recommendation-template entry points are intentionally removed from this version.

## Build Output

`pnpm run build` writes bundled assets to `dist/assets/`.
