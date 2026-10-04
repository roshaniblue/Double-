export type Post = {
  id: string
  caption: string
  date: string
  time: string
  image: string
  likes: number
  filename: string
  hash: string
  location?: string
}

// Both accounts deliberately contain the same 12 posts.
// The order is different and several captions have tiny punctuation differences.
// Nothing here directly says which account is genuine.

const base: Post[] = [
  {
    id: '01',
    caption: 'rain on the window again.',
    date: 'SEP 21, 2026',
    time: '18:42',
    image: 'window',
    likes: 148,
    filename: 'rainwindow.jpg',
    hash: '9f2a7c1d',
  },
  {
    id: '02',
    caption: 'found a quiet corner downtown.',
    date: 'SEP 18, 2026',
    time: '16:08',
    image: 'cafe',
    likes: 212,
    filename: 'cafe.jpg',
    hash: '4bd81a20',
  },
  {
    id: '03',
    caption: 'same book, different ending.',
    date: 'SEP 12, 2026',
    time: '21:11',
    image: 'book',
    likes: 179,
    filename: 'book.jpg',
    hash: '7e4a19bc',
  },
  {
    id: '04',
    caption: 'late walk. no destination.',
    date: 'SEP 07, 2026',
    time: '20:03',
    image: 'walk',
    likes: 201,
    filename: 'walk1.jpg',
    hash: '31d6c8aa',
  },
  {
    id: '05',
    caption: 'sunday light.',
    date: 'SEP 01, 2026',
    time: '09:14',
    image: 'light',
    likes: 126,
    filename: 'Light.jpg',
    hash: 'a0c55f72',
  },
  {
    id: '06',
    caption: 'coffee before everything else.',
    date: 'AUG 27, 2026',
    time: '08:06',
    image: 'coffee',
    likes: 167,
    filename: 'coffee.jpg',
    hash: 'c91e0d44',
  },
  {
    id: '07',
    caption: 'a little blue in the afternoon.',
    date: 'AUG 19, 2026',
    time: '14:22',
    image: 'blue',
    likes: 191,
    filename: 'blue.jpg',
    hash: 'd42b7e91',
  },
  {
    id: '08',
    caption: 'keep the ticket.',
    date: 'AUG 11, 2026',
    time: '17:40',
    image: 'ticket',
    likes: 104,
    filename: 'ticket.jpg',
    hash: 'e8a1140b',
  },
  {
    id: '09',
    caption: 'somewhere between here and home.',
    date: 'AUG 03, 2026',
    time: '19:27',
    image: 'walk',
    likes: 156,
    filename: 'walk2.jpg',
    hash: '55bc1d2e',
  },
  {
    id: '10',
    caption: 'no need to name the place.',
    date: 'JUL 26, 2026',
    time: '22:04',
    image: 'cafe',
    likes: 133,
    filename: 'cafe2.jpg',
    hash: '0ab4c7f8',
  },
  {
    id: '11',
    caption: 'the city gets quiet eventually.',
    date: 'JUL 19, 2026',
    time: '23:16',
    image: 'window',
    likes: 187,
    filename: 'window.jpg',
    hash: '6c19a0de',
  },
  {
    id: '12',
    caption: 'kept the receipt.',
    date: 'JUL 11, 2026',
    time: '17:38',
    image: 'ticket',
    likes: 119,
    filename: 'Receipts.jpg',
    hash: 'b7e23d41',
  },
]

export const postsA: Post[] = [
  base[0],
  base[1],
  base[2],
  base[3],
  base[4],
  base[5],
  base[6],
  base[7],
  base[8],
  base[9],
  base[10],
  base[11],
]

export const postsB: Post[] = [
  base[1],
  base[0],
  base[7],
  base[2],
  base[10],
  base[4],
  base[8],
  base[6],
  base[11],
  base[3],
  base[5],
  base[9],
]

export const facebookPosts = [
  {
    date: 'Sep 21',
    text: 'rain on the window again.',
    time: '18:42',
    image: 'window.jpg',
  },
  {
    date: 'Sep 18',
    text: 'found a quiet corner downtown.',
    time: '16:08',
    image: 'cafe.jpg',
  },
  {
    date: 'Sep 12',
    text: 'same book, different ending.',
    time: '21:11',
    image: 'book.jpg',
  },
  {
    date: 'Aug 11',
    text: 'keep the ticket.',
    time: '17:40',
    image: 'ticket.jpg',
  },
  {
    date: 'Jul 19',
    text: 'the city gets quiet eventually.',
    time: '23:16',
    image: 'window.jpg',
  },
]

export const xPosts = [
  {
    handle: '@lisa.morrow',
    date: 'Sep 21, 2026',
    time: '18:42',
    text: 'rain on the window again.',
  },
  {
    handle: '@lisa.morrow',
    date: 'Sep 18, 2026',
    time: '16:08',
    text: 'found a quiet corner downtown.',
  },
  {
    handle: '@lisa.morrow',
    date: 'Sep 12, 2026',
    time: '21:11',
    text: 'same book, different ending.',
  },
  {
    handle: '@lisa.morrow',
    date: 'Aug 27, 2026',
    time: '08:06',
    text: 'coffee before everything else.',
  },
  {
    handle: '@lisa.morrow_official',
    date: 'Sep 21, 2026',
    time: '18:42',
    text: 'rain on the window again.',
  },
  {
    handle: '@lisa.morrow_official',
    date: 'Sep 18, 2026',
    time: '16:08',
    text: 'found a quiet corner downtown.',
  },
  {
    handle: '@lisa.morrow_official',
    date: 'Sep 12, 2026',
    time: '21:11',
    text: 'same book, different ending.',
  },
  {
    handle: '@lisa.morrow_official',
    date: 'Aug 27, 2026',
    time: '08:06',
    text: 'coffee before everything else.',
  },
  {
    handle: '@archive_notes',
    date: 'Sep 22, 2026',
    time: '00:14',
    text: 'a repost is not provenance. Check the earliest independent trace.',
  },
  {
    handle: '@northstar_labs',
    date: 'Sep 20, 2026',
    time: '12:02',
    text: 'Welcome to the autumn cohort.',
  },
]

export const terminalData = {
  whois: {
    'lisa.morrow': `Handle: lisa.morrow
Registry: fictional-social
Created: 2024-03-17 11:22 UTC
Aliases: lisamorrow, lisa_m
Linked domain: northstar-labs.test
Status: active`,

    'lisa.morrow_official': `Handle: lisa.morrow_official
Registry: fictional-social
Created: 2024-03-19 09:41 UTC
Aliases: lisa.morrow.official
Linked domain: northstar-labs.test
Status: active`,
  },

  sherlock: {
    'lisa.morrow': `lisa.morrow
  [+] instagram.local/@lisa.morrow
  [+] facebook.local/lisa.morrow
  [+] x.local/lisa.morrow
  [+] northstar-labs.test/team/lisa-morrow`,

    'lisa.morrow_official': `lisa.morrow_official
  [+] instagram.local/@lisa.morrow_official
  [+] facebook.local/profile.php?id=lm2041
  [+] x.local/lisa.morrow_official
  [+] northstar-labs.test/team/lisa-morrow`,
  },
}

export const mailboxes = {
  'lisa.morrow@northstar-labs.test': {
    exists: true,
    body: `Hi,

Thanks for checking. I can confirm that I have used the handle @lisa.morrow since joining Northstar Labs.

— Lisa`,
  },

  'lisa.morrow@northstar-lab.test': {
    exists: false,
    body: `Delivery Status Notification

Address not found

lisa.morrow@northstar-lab.test does not exist on this mail system.`,
  },
}

export const hints = [
  `READ THIS FIRST

This is a fictional investigation workstation.
Opening HINT.txt again advances the file to the next hint and permanently hides the previous one.

Do not use this as a walkthrough. The challenge is designed to be solved from the workstation, browser and terminal.`,

  `HINT 02

You are looking at duplicated digital lives. Do not decide which account is real from post count, account age, follower count, or the number of matching photographs.

The useful evidence is the evidence that was not copied.`,

  `HINT 03

The Instagram feeds are intentionally reordered. Compare the same photographs by caption, date and time instead of comparing grid position. Then cross-check the same material on Facebook and X.`,

  `HINT 04

Look at provenance, not popularity. Use the terminal to query the fictional registry, search for the handles, inspect archived copies and compare media records. You should need several independent checks before you trust a conclusion.`,

  `HINT 05

When you have finished the cross-platform OSINT work, inspect the work contact shown in BOTH bios. The next step requires communicating with both addresses rather than choosing one from appearance alone.`,

  `FINAL HINT

Open Gmail in the fictional browser and send the same short verification request to both work addresses. One mailbox will answer; the other will return a delivery failure. That failure is the final independent clue.

Then open submit://the-double and submit the flag you recovered.`,
]