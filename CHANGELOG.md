# Changelog

## fd-mobile-v0.2.3 - 2026-05-28

- Deepened the second-floor mobile interaction layout to better match the provided reference: larger carousel cards, lower visual center, shared composer, and tighter bottom spacing.
- Unified the logged-in page backgrounds with the login-page purple-blue gradient across home, second floor, design, mine, works, details, and generation records.
- Fixed desktop gesture direction so dragging down from home enters the second floor and dragging up from the second floor returns home.
- Removed the second-floor search/tutorial icon entry points and kept the second floor focused on category, preview, and composer interaction.
- Refreshed the single-file `standalone.html` artifact with inline CSS and JavaScript.

## fd-mobile-v0.2.2 - 2026-05-28

- Changed home category rail taps to jump into the second-floor category view after selecting the category.
- Made the login/register button match the phone input width.
- Moved the login button and agreement row lower, and centered the agreement copy.

## fd-mobile-v0.2.1 - 2026-05-28

- Fixed the design page composer so it stays pinned at the bottom top layer while only the result feed scrolls underneath it.
- Added bottom padding to the result feed so generated result cards do not sit behind the fixed composer.

## fd-mobile-v0.2.0 - 2026-05-28

- Removed the home recommendation-template floor and the official-template page/entry.
- Kept the home works gallery as a masonry-style reuse surface; tapping a work fills the composer with reference content and prompt.
- Changed the second-floor category area into an upward, shared-composer experience without a separate title/back header.
- Changed continuous conversation from a text pill into a switch control.
- Removed selection boxes and check marks from config options; selected rows now rely on row color and text state.
- Changed generation submit flow to enter the design page directly and show a new running result until it completes.
- Made the design page use a top back action and bottom floating composer, without bottom navigation.
- Changed works batch management to reveal a delete/download action row below filters, and kept the batch button fixed above the nav.
- Renamed deduction management to generation records, added 7-day/30-day point stats, and gave failed tasks a distinct failed status.
- Removed stale generation drawer, recommendation-template, and deduction-management copy from the visible prototype.

## fd-mobile-v0.1.0 - 2026-05-27

- Added the independent `fd-mobile-prototype` React mobile app prototype.
- Covered the mobile v1 scope: logged-out intro, login/register, onboarding, home, template expansion, design result stream, works, official templates, image/video detail, mine, deduction management, and key bottom sheets/dialogs.
- Refined mobile details based on the overseas HTML prototype without importing overseas-only business scope.
- Updated result detail pages with compact generation parameter tables.
- Updated config bottom sheets to use mobile list-style selectors.
- Added model-driven config logic: image models show only image settings, video models show only video settings.
- Lightened buttons, chips, filters, template actions, and batch actions.
- Confirmed flow chart content is not part of the app UI.
