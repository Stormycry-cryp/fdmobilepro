# FD+ Mobile Prototype

FD+ Mobile Prototype is an independent React mobile interaction prototype for the FD+ v1 mobile entry point.

The prototype focuses on the closed loop of conversational generation, generated results, works management, reuse, and generation record visibility. It does not include the flow chart inside the app UI.

## Project

- App folder: `fd-mobile-prototype/`
- Runtime: React + TypeScript + esbuild bundle
- Baseline canvas: 375 x 812 mobile screen inside a phone shell
- Visual source: FD+ web visual language, refined with mobile presentation patterns from the overseas HTML prototype

## Scope

Included:

- Logged-out intro, login/register, and onboarding
- Home first screen, second-floor category expansion, and works gallery reuse
- Unified composer with upload, model, config, continuous conversation switch, and send controls
- Design result stream for image and video tasks
- Image detail and video detail
- Works gallery, mine page, and generation records
- Upload, gallery, model, config, action, and delete confirmation states

Not included:

- Flow chart as app UI
- Overseas-only business functions such as subscription management, check-in rewards, account deletion, and multi-feature overseas home modules

## Run

```bash
cd fd-mobile-prototype
pnpm install
pnpm run build
pnpm run serve
```

Then open:

```text
http://127.0.0.1:5177/index.html
```

The static `index.html` loads the built files from `dist/assets/`.

## Verification

Verified on 2026-05-27:

- `pnpm run build`
- Browser automation through login, onboarding, home, second floor, model/config drawers, generation, design result stream, image detail, works, and generation records
- Search confirmed no flow-chart code or copy remains inside `fd-mobile-prototype/`
