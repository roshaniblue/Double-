# BYTE Investigation Lab — Challenge 02: The Double (Hard Mode)

React + TypeScript + Vite + xterm.js + Lucide React. All OSINT data is fictional and local.

## Run

```bash
npm install
npm run dev
```

## Challenge design

The two Lisa accounts intentionally contain the same 12 photographs and nearly identical public lives, but the Instagram grids are reordered. Facebook and X contain additional copies/cross-references. There is no `profile-a.txt`, `profile-b.txt`, or anomaly-answer file.

The terminal simulates familiar OSINT commands against the fictional evidence set:

- `whois <handle>`
- `sherlock <handle>`
- `archive <url>`
- `curl <url>`
- `exiftool <file>`
- `grep <text> <file>`
- `sha256sum <file>`
- `cat <file>` / `ls`

After six distinct investigative command families are used, the terminal displays an OSINT checkpoint pointing investigators toward the two work contacts. This is deliberately less direct than exposing the flag in a file.

Chrome contains fictional Instagram, Facebook, X and Gmail interfaces. The two work addresses are intentionally similar. Sending the same verification request to both mailboxes produces different fictional mail outcomes. The successful mailbox plus the cross-platform source trail gives the final flag.

## Important production change

The current flag validation is local demo validation. For a real CTF, remove `DEMO_FLAG` from the client bundle and validate submissions server-side through CTFd. Keep challenge evidence on the server where possible and use the frontend only as the workstation UI.


## Gmail discovery flow
Gmail is intentionally NOT an initial browser tab. The player must click `+`, use the browser address/search field, and search/type `gmail`. The fictional browser then opens the Gmail page and adds the Gmail tab dynamically. Closing the Gmail tab returns to a blank search tab.
