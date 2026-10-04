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

// Both accounts deliberately contain the same 12 posts. The order is different and
// several captions have tiny punctuation differences. Nothing here directly says
// which account is genuine.
const base: Post[] = [
  {id:'01',caption:'rain on the window again.',date:'SEP 21, 2026',time:'18:42',image:'window',likes:148,filename:'DSC_1842.jpg',hash:'9f2a7c1d'},
  {id:'02',caption:'found a quiet corner downtown.',date:'SEP 18, 2026',time:'16:08',image:'cafe',likes:212,filename:'IMG_1608.jpg',hash:'4bd81a20'},
  {id:'03',caption:'same book, different ending.',date:'SEP 12, 2026',time:'21:11',image:'book',likes:179,filename:'DSC_2111.jpg',hash:'7e4a19bc'},
  {id:'04',caption:'late walk. no destination.',date:'SEP 07, 2026',time:'20:03',image:'walk',likes:201,filename:'IMG_2003.jpg',hash:'31d6c8aa'},
  {id:'05',caption:'sunday light.',date:'SEP 01, 2026',time:'09:14',image:'light',likes:126,filename:'DSC_0914.jpg',hash:'a0c55f72'},
  {id:'06',caption:'coffee before everything else.',date:'AUG 27, 2026',time:'08:06',image:'coffee',likes:167,filename:'IMG_0806.jpg',hash:'c91e0d44'},
  {id:'07',caption:'a little blue in the afternoon.',date:'AUG 19, 2026',time:'14:22',image:'blue',likes:191,filename:'DSC_1422.jpg',hash:'d42b7e91'},
  {id:'08',caption:'keep the ticket.',date:'AUG 11, 2026',time:'17:40',image:'ticket',likes:104,filename:'IMG_1740.jpg',hash:'e8a1140b'},
  {id:'09',caption:'somewhere between here and home.',date:'AUG 03, 2026',time:'19:27',image:'walk',likes:156,filename:'DSC_1927.jpg',hash:'55bc1d2e'},
  {id:'10',caption:'no need to name the place.',date:'JUL 26, 2026',time:'22:04',image:'cafe',likes:133,filename:'IMG_2204.jpg',hash:'0ab4c7f8'},
  {id:'11',caption:'the city gets quiet eventually.',date:'JUL 19, 2026',time:'23:16',image:'window',likes:187,filename:'DSC_2316.jpg',hash:'6c19a0de'},
  {id:'12',caption:'kept the receipt.',date:'JUL 11, 2026',time:'17:38',image:'ticket',likes:119,filename:'IMG_1738.jpg',hash:'b7e23d41'},
]

export const postsA: Post[] = [base[0],base[1],base[2],base[3],base[4],base[5],base[6],base[7],base[8],base[9],base[10],base[11]]
export const postsB: Post[] = [base[1],base[0],base[7],base[2],base[10],base[4],base[8],base[6],base[11],base[3],base[5],base[9]]

export const facebookPosts = [
  {date:'Sep 21',text:'rain on the window again.',time:'18:42'},
  {date:'Sep 18',text:'found a quiet corner downtown.',time:'16:08'},
  {date:'Sep 12',text:'same book, different ending.',time:'21:11'},
  {date:'Aug 11',text:'keep the ticket.',time:'17:40'},
  {date:'Jul 19',text:'the city gets quiet eventually.',time:'23:16'},
]

export const xPosts = [
  {handle:'@lisa.morrow',date:'Sep 21, 2026',time:'18:42',text:'rain on the window again.'},
  {handle:'@lisa.morrow',date:'Sep 18, 2026',time:'16:08',text:'found a quiet corner downtown.'},
  {handle:'@lisa.morrow',date:'Sep 12, 2026',time:'21:11',text:'same book, different ending.'},
  {handle:'@lisa.morrow',date:'Aug 27, 2026',time:'08:06',text:'coffee before everything else.'},
  {handle:'@lisa.morrow_official',date:'Sep 21, 2026',time:'18:42',text:'rain on the window again.'},
  {handle:'@lisa.morrow_official',date:'Sep 18, 2026',time:'16:08',text:'found a quiet corner downtown.'},
  {handle:'@lisa.morrow_official',date:'Sep 12, 2026',time:'21:11',text:'same book, different ending.'},
  {handle:'@lisa.morrow_official',date:'Aug 27, 2026',time:'08:06',text:'coffee before everything else.'},
  {handle:'@archive_notes',date:'Sep 22, 2026',time:'00:14',text:'a repost is not provenance. Check the earliest independent trace.'},
  {handle:'@northstar_labs',date:'Sep 20, 2026',time:'12:02',text:'Welcome to the autumn cohort.'},
]

export const terminalData = {
  whois: {
    'lisa.morrow': `Handle: lisa.morrow\nRegistry: fictional-social\nCreated: 2024-03-17 11:22 UTC\nAliases: lisamorrow, lisa_m\nLinked domain: northstar-labs.test\nStatus: active`,
    'lisa.morrow_official': `Handle: lisa.morrow_official\nRegistry: fictional-social\nCreated: 2024-03-19 09:41 UTC\nAliases: lisa.morrow.official\nLinked domain: northstar-labs.test\nStatus: active`,
  },
  sherlock: {
    'lisa.morrow': `lisa.morrow\n  [+] instagram.local/@lisa.morrow\n  [+] facebook.local/lisa.morrow\n  [+] x.local/lisa.morrow\n  [+] northstar-labs.test/team/lisa-morrow`,
    'lisa.morrow_official': `lisa.morrow_official\n  [+] instagram.local/@lisa.morrow_official\n  [+] facebook.local/profile.php?id=lm2041\n  [+] x.local/lisa.morrow_official\n  [+] northstar-labs.test/team/lisa-morrow`,
  },
}

export const mailboxes = {
  'lisa.morrow@northstar-labs.test': {
    exists:true,
    body:`Hi,\n\nThanks for checking. I can confirm that I have used the handle @lisa.morrow since joining Northstar Labs.\n\n— Lisa`,
  },
  'lisa.morrow@northstar-lab.test': {
    exists:false,
    body:`Delivery Status Notification\n\nAddress not found\n\nlisa.morrow@northstar-lab.test does not exist on this mail system.`,
  }
}



export const hints = [
`THE FIRST THREAD\n\nA thread has been pulled.\n\nPull it once, and the first knot disappears.\nPull it again, and another one follows.\n\nWhat you read here will not wait for you.\n\nDo not trust what repeats.\nDo not trust what looks older.\nDo not trust what looks more complete.\n\nFind the loose thread.`,

`HINT 02\n\nTwo shadows are walking the same road.\n\nSame words.\nSame pictures.\nSame moments.\n\nBut a shadow cannot cast another shadow.\n\nDo not decide which one is real by counting what they share.\n\nSearch for the thing that could not have been copied.`,

`HINT 03\n\nThe mirror has been shuffled.\n\nThe first face you see is not necessarily the first face that spoke.\n\nMatch the photographs by their scars:\ncaption,\ndate,\ntime.\n\nThen leave Instagram.\n\nA trail repeated across three streets is still one trail.`,

`HINT 04\n\nPopularity is noise.\nAge is noise.\nRepetition is noise.\n\nAsk the terminal questions the profiles cannot answer themselves.\n\nWho registered the name?\nWhere has the name appeared?\nWhat did the archive remember?\nWhat does the file remember?\n\nDo not trust one answer.\n\nMake the traces agree.`,

`HINT 05\n\nYou have followed the footprints far enough.\n\nNow look at the introductions.\n\nBoth shadows left a door through which they can supposedly be reached.\n\nDo not choose the door that looks more convincing.\n\nKnock on BOTH.\n\nThe answer is not in the message.\n\nIt is in what happens when the message tries to arrive.`,

`FINAL HINT\n\nMaybe you're missing something...\n\nGuess what your mail does when you accidentally misspell the Gmail ID? can you find theirs . \n\nflag : owasp{<what told you the person was fake >}`
]