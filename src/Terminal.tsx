import { useEffect, useRef } from 'react'
import { Terminal as XTerminal } from 'xterm'
import { FitAddon } from '@xterm/addon-fit'
import 'xterm/css/xterm.css'
import { terminalData } from './data'

type Props = { onOpenBrowser: (url?: string) => void }

const files: Record<string,string> = {
  'cache/media-index.txt': `# FICTIONAL MEDIA INDEX\n\nDSC_1842.jpg  sha256=9f2a7c1d  instagram:A01  instagram:B02\nIMG_1608.jpg  sha256=4bd81a20  instagram:A02  instagram:B01\nDSC_2111.jpg  sha256=7e4a19bc  instagram:A03  instagram:B04\nIMG_2003.jpg  sha256=31d6c8aa  instagram:A04  instagram:B10\nDSC_0914.jpg  sha256=a0c55f72  instagram:A05  instagram:B06\nIMG_0806.jpg  sha256=c91e0d44  instagram:A06  instagram:B11\nDSC_1422.jpg  sha256=d42b7e91  instagram:A07  instagram:B08\nIMG_1740.jpg  sha256=e8a1140b  instagram:A08  instagram:B03\nDSC_1927.jpg  sha256=55bc1d2e  instagram:A09  instagram:B07\nIMG_2204.jpg  sha256=0ab4c7f8  instagram:A10  instagram:B12\nDSC_2316.jpg  sha256=6c19a0de  instagram:A11  instagram:B05\nIMG_1738.jpg  sha256=b7e23d41  instagram:A12  instagram:B09`,
  'cache/contacts.txt': `@lisa.morrow -> lisa.morrow@northstar-labs.test\n@lisa.morrow_official -> lisa.morrow@northstar-lab.test`,
}

export default function Terminal({onOpenBrowser}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const term = new XTerminal({
      cursorBlink: true,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 13,
      theme: { background:'#071016', foreground:'#c8d8df', cursor:'#7dd3fc', green:'#6ee7b7', blue:'#7dd3fc' }
    })
    const fit = new FitAddon(); term.loadAddon(fit); term.open(ref.current); fit.fit()
    term.writeln('\x1b[36mBYTE INVESTIGATION LAB\x1b[0m — fictional OSINT shell')
    term.writeln('All network results are simulated. No real public accounts are queried.')
    term.writeln('Type \x1b[33mhelp\x1b[0m for commands.')
    const prompt = () => term.write('\r\n\x1b[36mbyte@lab\x1b[0m:\x1b[34m~\x1b[0m$ ')
    prompt()
    let buffer=''
    const used=new Set<string>()
    let checkpoint=false
    const checkpointText=()=>{
      if(used.size>=6 && !checkpoint){
        checkpoint=true
        term.writeln('\r\n\x1b[32m[OSINT CHECKPOINT]\x1b[0m Cross-platform evidence is sufficient to establish that the visible repetition is not independent provenance.')
        term.writeln('Next: compare the work contact exposed by BOTH profiles. Treat the two addresses as separate evidence.')
      }
    }
    const run=(raw:string)=>{
      const parts=raw.trim().split(/\s+/); const cmd=parts[0]||''; const arg=parts.slice(1).join(' ')
      if(!cmd){prompt();return}
      if(cmd==='help'){
        term.writeln('commands: whois <handle> | sherlock <handle> | archive <url> | curl <url> | exiftool <file> | grep <text> <file> | sha256sum <file> | cat <file> | ls | open chrome | clear')
      } else if(cmd==='ls'){
        term.writeln('cache/   media/   README.md')
      } else if(cmd==='cat'){
        term.writeln(files[arg] ?? 'cat: no such fictional file')
      } else if(cmd==='whois'){
        const h=arg.replace(/^@/,'') as keyof typeof terminalData.whois
        term.writeln(terminalData.whois[h] ?? `whois: no fictional registry record for ${arg}`); used.add('whois')
      } else if(cmd==='sherlock'){
        const h=arg.replace(/^@/,'') as keyof typeof terminalData.sherlock
        term.writeln(terminalData.sherlock[h] ?? `${arg}: no fictional matches`); used.add('sherlock')
      } else if(cmd==='archive'){
        if(arg.includes('lisa.morrow_official')) term.writeln('SNAPSHOT 2026-09-20\nURL: instagram.local/@lisa.morrow_official\nStatus 200\nMedia index: preserved\nProfile bio hash: 4c19b\nSnapshot note: content appears before the account\'s current X profile was created.')
        else if(arg.includes('lisa.morrow')) term.writeln('SNAPSHOT 2026-09-20\nURL: instagram.local/@lisa.morrow\nStatus 200\nMedia index: preserved\nProfile bio hash: 4c19b\nSnapshot note: 12 posts and the same profile photograph.')
        else term.writeln('archive: fictional snapshot not found')
        used.add('archive')
      } else if(cmd==='curl'){
        if(arg.includes('@lisa.morrow_official')) term.writeln('HTTP/1.1 200 OK\n<profile handle="lisa.morrow_official">\n<bio>books / coffee / late walks · lisa.morrow@northstar-lab.test</bio>\n<posts>12</posts>')
        else if(arg.includes('@lisa.morrow')) term.writeln('HTTP/1.1 200 OK\n<profile handle="lisa.morrow">\n<bio>books / coffee / late walks · lisa.morrow@northstar-labs.test</bio>\n<posts>12</posts>')
        else term.writeln('curl: fictional host not found')
        used.add('curl')
      } else if(cmd==='exiftool'){
        const file=arg.trim()
        const known=['IMG_1740.jpg','DSC_1422.jpg','IMG_0806.jpg','DSC_1842.jpg']
        if(known.includes(file)) term.writeln(`ExifTool Version Number : 12.90\nFile Name                : ${file}\nFile Type                : JPEG\nDate/Time Original       : 2026:08:11 17:40:00\nSoftware                 : Fictional Archive Importer\nWarning                  : social re-encoding stripped camera serial data`)
        else term.writeln(`ExifTool: ${file} is not present in the fictional media cache.`)
        used.add('exiftool')
      } else if(cmd==='grep'){
        const text=arg.split(/\s+/)[0]?.replace(/['"]/g,'')||''
        if(text.toLowerCase().includes('img_') || text.toLowerCase().includes('hash')) term.writeln(files['cache/media-index.txt'])
        else if(text.toLowerCase().includes('mail') || text.toLowerCase().includes('contact')) term.writeln(files['cache/contacts.txt'])
        else term.writeln(`grep: no matching fictional evidence for ${text}`)
        used.add('grep')
      } else if(cmd==='sha256sum'){
        if(arg==='IMG_1740.jpg') term.writeln('e8a1140b  IMG_1740.jpg')
        else term.writeln(`${arg}: fictional hash unavailable`)
        used.add('sha256sum')
      } else if(cmd==='open' && arg==='chrome'){onOpenBrowser()}
      else if(cmd==='clear'){term.clear();term.write('\x1b[2J\x1b[H')}
      else term.writeln(`command not found: ${cmd}`)
      checkpointText(); prompt()
    }
    const onData=(d:string)=>{
      if(d==='\r'){term.write('\r\n');const r=buffer;buffer='';run(r)}
      else if(d==='\u007f'){if(buffer){buffer=buffer.slice(0,-1);term.write('\b \b')}}
      else if(d>=' '&&d<='~'){buffer+=d;term.write(d)}
    }
    const disposable=term.onData(onData)
    const resize=()=>fit.fit(); window.addEventListener('resize',resize)
    return ()=>{window.removeEventListener('resize',resize);disposable.dispose();term.dispose()}
  },[onOpenBrowser])
  return <div ref={ref} className="terminal-root" />
}
