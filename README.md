# FD+ Mobile Prototype

FD+ Mobile Prototype is an independent React mobile interaction prototype for the FD+ v1 mobile entry point.

The prototype focuses on the closed loop of conversational generation, official templates, generated results, works management, reuse, and deduction visibility. It does not include the flow chart inside the app UI.

## Project

- App folder: `fd-mobile-prototype/`
- Runtime: React + TypeScript + esbuild bundle
- Baseline canvas: 375 x 812 mobile screen inside a phone shell
- Visual source: FD+ web visual language, refined with mobile presentation patterns from the overseas HTML prototype

## Scope

Included:

- Logged-out intro, login/register, and onboarding
- Home first screen and template expansion path
- Unified composer with upload, model, config, template, continuous conversation, and send controls
- Design result stream for image and video tasks
- Image detail and video detail
- Works gallery, official templates, mine page, and deduction management
- Upload, gallery, model, config, template, generation, action, and delete confirmation states

Not included:

- Flow chart as app UI
- Overseas-only business functions such as subscription management, check-in rewards, account deletion, and multi-feature overseas home modules

## Run

```bash
cd fd-mobile-prototype
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
- Browser automation through login, onboarding, home, model/config drawers, generation, design result stream, image detail, works, official templates, and deduction management
- Search confirmed no flow-chart code or copy remains inside `fd-mobile-prototype/`

