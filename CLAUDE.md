# Word Meaning Trainer — handover notes for Claude

Owner: Urch (GitHub dirtyurch-pixel). Live site: https://dirtyurch-pixel.github.io/Word-Trainer/
Claude artifact version (same app, Claude-hosted, syncs via the artifact db): https://claude.ai/artifact/UtohFmasBKm6NzwwsQ5B9a

## State at handover (17 Oct 2026)
- This upload is the final build from the first long chat: Claude artifact version 51 and the GitHub build (cache word-trainer-v32) come from the same source, src-word-trainer.html (checked byte for byte).
- Checked before handover: every view (hub, subjects, practice, flashcards, word list, grade, multiple choice, Word Master) opens with no errors at 3440, 1366 and 390 wide; the service worker registers; the voice picker shows in the Word Master lobby. All other repo files (wm-* media, icons, manifest) already matched.

## How Urch works
- Talks to Claude from a tablet or phone. Plays on a locked-down work PC (HP S340c, 3440x1440 ultrawide) in Chrome; Claude is blocked there.
- After a push, he checks on the PC with Ctrl+Shift+R. Never tell him to clear site data (it wipes progress); unregistering the service worker in DevTools is OK.
- Wants direct, plain explanations with analogies. Pushes back when something is wrong — verify, don't assume.
- When he says "don't build yet" / "let's discuss", discuss and mock up only. Build when he says build.
- Free only: no paid APIs / API keys ("not interested in the Anthropic solution").
- Image prompts and character poses he'll paste into ChatGPT go in copyable code boxes. Prompts doc: https://claude.ai/code/artifact/00064cf9-2180-4c0a-a7d5-7b8e6bfbce0e

## Files in this repo
- `src-word-trainer.html` — THE SOURCE. Single file, inline CSS + JS (script id="app-js"). Also what is published as the Claude artifact. Badge, category-icon and god images are embedded as data URIs.
- `src-build.py` — run `python3 src-build.py` in the repo root. Generates `index.html` (source + SEED_STATE + flat media paths), `sw.js` (cache version auto-bumped from the existing sw.js), `manifest.webmanifest`, `icon-192/512.png`. Needs Pillow.
- `src-seed.json` — starting progress/words/pictures for a brand-new device only.
- `wm-*.webp/jpg` (45) — Word Master characters, stage and podium (also in the artifact's published files).
- `README.md` — Urch's own, leave it.
- The source still holds older code for Arabic decks (Qur'anic / Darija, with `a??.mp3` / `i??.jpg` paths). Those media files are NOT in the repo; Arabic is planned as a separate app. Don't remove that code without asking.
- Uploading by hand (fallback): github.com/dirtyurch-pixel/Word-Trainer/upload/main in Chrome with Desktop site on; the GitHub mobile app can't upload; upload in small batches.
- Workflow: edit `src-word-trainer.html` → `python3 src-build.py` → test → commit → push to main. GitHub Pages redeploys in ~1–2 min. If the artifact should match, republish src-word-trainer.html to the artifact URL above (read it first; the media files must also be in the artifact's files).

## Testing
Playwright + Chromium (`/opt/pw-browsers/chromium`, NODE_PATH=$(npm root -g)), serve with `python3 -m http.server`. Check widths 3440, 1920, 1366, 800, 390: no console errors, no horizontal overflow.

## Words and core learning (built in earlier chats)
- ~1,087 words in 21 categories: Urch's interests (Greek history, gods and goddesses, word origins, symbolism, Freemasonry, Illuminati and secret societies, Arab history, worship and ritual, witchcraft and the occult, land and sea) plus general vocabulary and ~781 Greek-origin words from his word list. Some words came from a video transcript about gods, symbolism and cults — defined by standard meanings, not the video's claims.
- Every word has a "simple words" (explain-like-I'm-5) meaning; gods and creatures have expandable story summaries; some words have pictures.
- Practice: sets of 4 words from one category; a word counts as known only after being right twice in a row without a hint. Word→meaning and meaning→word modes, hints, use-in-a-sentence, timed review, daily goal and streak, grade page, Hear it, search online, Merriam-Webster link, own pictures (upload or paste).
- Claude version: Claude marking/coaching (artifact "sample" capability). GitHub version: no AI — exact matches auto-mark (plus free local/Datamuse checks), others self-marked. GitHub version adds backup/restore file, sync between devices through a private GitHub gist (access code with gist scope), picture finder (Wikipedia, Wikimedia Commons, Openverse, Cleveland Museum of Art), and Wiktionary dictionary definitions.
- Progress in the Claude and GitHub versions is separate; the backup file moves it between them. Urch has the GitHub version installed on his Samsung Galaxy Tab S4 and as a shortcut on his PC.

## App structure
- State `S` in localStorage "word-trainer-state": progress, custom, days, goal, topic, rev, set (h = hint flag), badges, games.mc, fc, wm. `clean()` validates. Sync (gist `syncRun`, artifact db remote merge, `mergeState`) must merge badges, games, fc (`fcMerge`) and wm (`wmMerge`) — keep that when adding state.
- Views: VIEWS = ["hub","home","practice","cards","words","grade","play","wm"]. Matrix welcome screen → hub with two slanted panels: Choose a Subject (→ home) and Word Master (→ wm). Home tab goes to hub.
- Widescreen: @media min-width 1600 (html 125%, .wrap 1560px) and 2600 (145%, 1900px); grid layouts for practice, cards, words.
- My grade: per-category grades (no grade for unstarted categories). Multiple choice game in "play" (own scoring, doesn't affect progress, right/wrong sounds).
- Badges and 21 category icons: Urch's own ChatGPT images.
- Flashcards (AnkiDroid rules, separate from main progress): FC = {steps:[1,10], relearn:[10], grad:1, easy:4, ease0:2500, minEase:1300, hardF:1.2, easyB:1.3, ahead:20, testN:20}; fcNext/fcQueue/fcPick/fcIvl. Study and Test (20 cards) modes. New cards per day setting (default 5). Typed answer centred, judged by fcJudge (sample → exact → localMark → Datamuse related, else incorrect). Points: Again 0, Hard 5, Good 10, Easy 15, +5 typed right, combo bonus. Character pop-ups fill the knew/didn't-know side boxes for 1.5 s: CHAR_TOPIC["Gods and goddesses"] = {right:[6], wrong:[6]} random no-repeat; pendingPop fallback on button press.
- Word Master (TV quiz, quizmaster Socrates): rivals WM_OPP aesop (skill .57, pass .42, speed 1.15), hypatia (.7/.3/1.05), aristotle (.85/.18/.95). Rounds: specialist 120 s, general 120 s, final 60 s on own missed words (skipped if none); rival plays first each round. Answer check Levenshtein ≤2 (≤1 for ≤4 letters); clock stops while checking; Pass button; ties → fewer passes; "I've started so I'll finish". Rival think time (4600+d*3600+rand*3000)*speed*(run>=3?.93:1)*(bad>=2?1.18:1) with nerves last 15 s — medians ≈ Aesop 8, Hypatia 12, Aristotle 17 per round. Watch or skip the rival. Poses: idle,right,wrong,sweat,angry,excited,win,lose (+Socrates ask/point/correct/no/curious/sigh/applaud/trophy). Effects, spotlight stage swap, podium. Own stats page (tiles, chart, top 10, by subject, head to head, records, weak words); Champion for beating Aristotle. Doesn't affect main progress.
- Quizmaster voice: speechSynthesis + voice picker (localStorage "wt-wm-vox" {name,rate,pitch}, `wmRank` prefers natural/online en-GB, "Google UK English Male"). Rendered by `wmVoxUI` in the lobby.

## Decisions and style (agreed with Urch)
- Look: Matrix theme throughout, consistent everywhere. Character art style = 80s/90s anime with the same Matrix look. Urch designs all characters, badges and icons himself in ChatGPT and sends them; Claude cuts out, compresses and wires them in.
- Layout: uses the ultrawide's space — spaced, organised, intuitive, not cramped. Sides are reserved for designs and pop-ups. Must still work on tablet and phone.
- Multiple choice: 10 questions, right/wrong sounds, right answer clearly visible (feedback shown above the answers so it's visible on phone). Doesn't count toward main progress.
- Flashcards: AnkiDroid buttons (Again/Hard/Good/Easy); type your answer, then flip and it's checked; separate Study and Test sections with their own scoring. Each category is meant to get its own right/wrong characters (only Gods and goddesses done: 6 good gods right, 6 bad gods wrong, not just Zeus/Hades).
- Word Master came from Urch's own sketch: TV game show. Play against the computer; contestants are famous people from their fields; 1 point per answer; Pass button; can watch the rival or skip; the rival must be human-like (not get everything right). All characters animated incl. Urch's own character (made from his reference photo): hand on head, sweat, anger, excitement, etc. Three rivals chosen by Claude. Own stats table — doesn't touch main progress.
- ChatGPT note: when Urch tried batch-generating poses, ChatGPT put all 7 poses on one sheet. The per-pose prompts are in the prompts doc.

## Open / next
- FIRST in a new chat: Urch will confirm this build works on his devices. Don't change anything until he does.
- Quizmaster voice: Urch hasn't downloaded a voice yet. Once he's confirmed the build works, he'll find a voice and upload it in chat; then wire it in (options discussed: recorded MP3 clips for the fixed lines, or a Piper neural voice model in the browser, hosted in the repo). The current speechSynthesis voice picker stays as the fallback.
- Later (he deferred): character pop-up sets for other flashcard categories; specialist Word Master rivals; speed-round game; widescreen layout for My grade; Quiz master badge and Word Master champion badge.
- He also plans a separate Arabic learning app.
