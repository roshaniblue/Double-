import { useState } from 'react'
import { Files, Folder, Trash2, Chrome, Terminal as TerminalIcon, Search, X, ChevronLeft, ChevronRight, RotateCw, ExternalLink, FileText, LockKeyhole, Facebook, Instagram, MessageCircle, Flag, Menu, Minus, Square, Mail, Twitter, Send, AlertTriangle } from 'lucide-react'
import { hints, postsA, postsB, facebookPosts, xPosts, mailboxes, type Post } from './data'
import Terminal from './Terminal'

const DEMO_FLAG='owasp{ lisa.morrow@northstar-lab.test}'
type Page='instagram'|'facebook'|'x'|'gmail'|'submit'|'search'
type Profile='a'|'b'

type WinState={min:boolean,max:boolean}

export default function App(){
 const [terminal,setTerminal]=useState<WinState>({min:false,max:false})
 const [files,setFiles]=useState<WinState>({min:false,max:false})
 const [browser,setBrowser]=useState<WinState>({min:false,max:false})
 const [page,setPage]=useState<Page>('instagram')
 const [profile,setProfile]=useState<Profile>('a')
 const [post,setPost]=useState<Post|null>(null)
 const [hintOpen,setHintOpen]=useState(false); const [hintIndex,setHintIndex]=useState(0)
 const [query,setQuery]=useState(''); const [address,setAddress]=useState('https://instagram.local/@lisa.morrow'); const [newTab,setNewTab]=useState(false)
 const [flag,setFlag]=useState(''); const [submitted,setSubmitted]=useState(false)
 const [mailTo,setMailTo]=useState(''); const [mailSubject,setMailSubject]=useState('Profile verification'); const [mailBody,setMailBody]=useState('Please confirm this account is yours.'); const [mailResult,setMailResult]=useState<string|null>(null)
 const openBrowser=(p:Page='instagram')=>{setBrowser({min:false,max:false});setPage(p);setPost(null);setNewTab(false);setAddress(p==='submit'?'submit://the-double':`https://${p}.local`) }
 const closeHint=()=>{setHintOpen(false);if(hintIndex<hints.length-1)setHintIndex(i=>i+1)}
 const submit=()=>setSubmitted(flag.trim()===DEMO_FLAG)
 const sendMail=()=>{const box=mailboxes[mailTo.trim() as keyof typeof mailboxes]; setMailResult(box?box.body:'Delivery Status Notification\n\nAddress not found\n\nThe fictional mail system has no mailbox at this address.')}
 const navAddress=(value:string)=>{
   const v=value.trim(); setAddress(v)
   if(v==='submit://the-double'){openBrowser('submit');return}
   if(v.includes('instagram.local')){setPage('instagram');setBrowser(s=>({...s,min:false}));return}
   if(v.includes('facebook.local')){setPage('facebook');setBrowser(s=>({...s,min:false}));return}
   if(v.includes('x.local')){setPage('x');setBrowser(s=>({...s,min:false}));return}
   if(/^(gmail|gmail.com|mail|mail.google.local|mail.google.com)$/i.test(v) || /\bgmail\b/i.test(v)){setPage('gmail');setNewTab(false);setBrowser(s=>({...s,min:false}));setAddress('https://mail.google.local');return}
   setQuery(v);setPage('search')
 }
 return <div className="desktop">
   <header className="topbar"><div className="top-left"><span className="apps"><Menu size={14}/> Applications</span><span>Places</span></div><div className="lab-title">BYTE INVESTIGATION LAB</div><div className="top-right"><span>OSINT · CHALLENGE 02</span><span>15:38</span></div></header>
   <main className="workspace">
    <DesktopIcon icon={<Folder/>} label="Home"/>
    <DesktopIcon icon={<Folder/>} label="File System" onClick={()=>setFiles({min:false,max:false})}/>
    <DesktopIcon icon={<Trash2/>} label="Trash"/>
    <DesktopIcon icon={<TerminalIcon/>} label="Terminal" onClick={()=>setTerminal({min:false,max:false})}/>
    <DesktopIcon icon={<Chrome/>} label="Chrome" onClick={()=>openBrowser()}/>
   </main>
   <div className="dock"><DockIcon icon={<Chrome/>} onClick={()=>openBrowser()}/><DockIcon icon={<TerminalIcon/>} onClick={()=>setTerminal({min:false,max:false})}/><DockIcon icon={<Folder/>} onClick={()=>setFiles({min:false,max:false})}/></div>

   {files.min===false && <Window title="File System" icon={<Folder/>} state={files} setState={setFiles} onClose={()=>setFiles(s=>({...s,min:true}))} className="file-window">
    <div className="file-toolbar"><ChevronLeft size={16}/><ChevronRight size={16}/><span>/home/investigator/challenge-02</span></div>
    <div className="file-body">
      <FileCard name="CASE_NOTES.txt" icon={<FileText/>} onClick={()=>alert('THE DOUBLE\n\nInvestigate the digital identities through the fictional workstation. There are no pre-supplied profile answers here.')}/>
      <FileCard name="HINT.txt" icon={<FileText/>} special onClick={()=>setHintOpen(true)}/>
      <FileCard name="evidence" icon={<Folder/>} onClick={()=>alert('Evidence is deliberately not exposed as profile-A/profile-B answer files. Use Chrome and the terminal.')}/>
      <FileCard name="README.txt" icon={<FileText/>} onClick={()=>alert('Fictional challenge environment. Terminal network commands are simulated. No real accounts are queried.')}/>
    </div>
    <div className="file-status">4 items · challenge files intentionally contain no profile solution</div>
   </Window>}

   {hintOpen && <div className="hint-modal"><div className="hint-sheet"><div className="sheet-head"><FileText size={18}/> HINT.txt <button onClick={closeHint}><X size={16}/></button></div><pre>{hints[hintIndex]}</pre><div className="sheet-footer">Hint {hintIndex+1} / {hints.length} · reopening advances and discards the previous hint</div>{hintIndex===hints.length-1&&<button className="link-button" onClick={()=>openBrowser('submit')}><ExternalLink size={15}/> open submit://the-double</button>}</div></div>}

   {terminal.min===false && <Window title="Terminal — byte@lab" icon={<TerminalIcon/>} state={terminal} setState={setTerminal} onClose={()=>setTerminal(s=>({...s,min:true}))} className="terminal-window"><Terminal onOpenBrowser={()=>openBrowser()}/></Window>}
   {browser.min===false && <Browser state={browser} setState={setBrowser} onClose={()=>setBrowser(s=>({...s,min:true}))} page={page} setPage={setPage} profile={profile} setProfile={setProfile} post={post} setPost={setPost} address={address} navAddress={navAddress} query={query} setQuery={setQuery} flag={flag} setFlag={setFlag} submitted={submitted} submit={submit} mailTo={mailTo} setMailTo={setMailTo} mailSubject={mailSubject} setMailSubject={setMailSubject} mailBody={mailBody} setMailBody={setMailBody} mailResult={mailResult} sendMail={sendMail} newTab={newTab} setNewTab={setNewTab}/>} 
 </div>
}

function DesktopIcon({icon,label,onClick}:{icon:React.ReactNode,label:string,onClick?:()=>void}){return <button className="desktop-icon" onDoubleClick={onClick} onClick={onClick}><span>{icon}</span><small>{label}</small></button>}
function DockIcon({icon,onClick}:{icon:React.ReactNode,onClick:()=>void}){return <button className="dock-icon" onClick={onClick}>{icon}</button>}
function FileCard({name,icon,onClick,special}:{name:string,icon:React.ReactNode,onClick:()=>void,special?:boolean}){return <button className={'file-card '+(special?'special':'')} onDoubleClick={onClick} onClick={onClick}><span>{icon}</span><small>{name}</small></button>}

function Window({title,icon,state,setState,onClose,children,className=''}:{title:string,icon:React.ReactNode,state:WinState,setState:(s:WinState)=>void,onClose:()=>void,children:React.ReactNode,className?:string}){
 if(state.min)return null
 return <div className={'window '+className+(state.max?' maximized':'')}><div className="window-bar"><span>{icon}{title}</span><div className="window-buttons"><button onClick={()=>setState({...state,min:true})}><Minus size={13}/></button><button onClick={()=>setState({...state,max:!state.max})}>{state.max?<Square size={12}/>:<Square size={12}/>}</button><button onClick={onClose}><X size={14}/></button></div></div>{children}</div>
}

function Browser(p:any){
 const {state,setState,onClose,page,setPage,profile,setProfile,post,setPost,address,navAddress,query,setQuery,flag,setFlag,submitted,submit,mailTo,setMailTo,mailSubject,setMailSubject,mailBody,setMailBody,mailResult,sendMail,newTab,setNewTab}=p
 const nav=(x:Page)=>{setPage(x);setPost(null);setState({...state,min:false});setQuery('');setAddress(x==='submit'?'submit://the-double':x==='gmail'?'https://mail.google.local':`https://${x}.local`)}
 const closeTab=(x:Page)=>{if(x==='gmail'){setPage('search');setQuery('');setAddress('');return} if(x==='submit'){setPage('instagram');setAddress('https://instagram.local/@lisa.morrow');return} if(x==='instagram'){setPage('facebook');setAddress('https://facebook.local');return} if(x==='facebook'){setPage('x');setAddress('https://x.local');return} if(x==='x'){setPage('instagram');setAddress('https://instagram.local/@lisa.morrow');return}}
 const tabs:[Page,string,React.ReactNode][]=[['instagram','Instagram',<Instagram size={13}/>],['facebook','Facebook',<Facebook size={13}/>],['x','X',<Twitter size={13}/>],...(page==='gmail'?[['gmail','Gmail',<Mail size={13}/>] as [Page,string,React.ReactNode]]:[]),['submit','Submit',<Flag size={13}/>]]
 return <div className={'browser-window '+(state.max?'maximized':'')}>
   <div className="browser-titlebar"><span className="chrome-mark">●</span><span>Chrome</span><div className="browser-controls"><button onClick={()=>setState({...state,min:true})}><Minus size={13}/></button><button onClick={()=>setState({...state,max:!state.max})}><Square size={12}/></button><button onClick={onClose}><X size={14}/></button></div></div>
   <div className="browser-tabs">{tabs.map(([k,n,i])=><button key={k} className={page===k?'active':''} onClick={()=>nav(k)}>{i}{n}<span className="tab-close" onClick={(e)=>{e.stopPropagation();closeTab(k)}}><X size={10}/></span></button>)}<button className="newtab" aria-label="New tab" onClick={()=>{setPage('search');setQuery('');setAddress('');setPost(null);setNewTab(true);setState({...state,min:false})}}>+</button></div>
   <form className="browser-toolbar" onSubmit={e=>{e.preventDefault();navAddress(address)}}><ChevronLeft size={17}/><ChevronRight size={17}/><RotateCw size={15}/><div className="address"><LockKeyhole size={12}/><input aria-label="Address or search" autoFocus={newTab} value={address} placeholder={newTab?'Search or enter address':'https://instagram.local/@lisa.morrow'} onChange={e=>setAddress(e.target.value)} /></div><button type="submit" className="toolbar-search" aria-label="Search"><Search size={15}/></button><Menu size={16}/></form>
   <div className="browser-content">
    {page==='instagram'&&<InstagramPage profile={profile} setProfile={setProfile} post={post} setPost={setPost}/>} 
    {page==='facebook'&&<FacebookPage profile={profile} setProfile={setProfile}/>} 
    {page==='x'&&<XPage/>}
    {page==='gmail'&&<GmailPage mailTo={mailTo} setMailTo={setMailTo} mailSubject={mailSubject} setMailSubject={setMailSubject} mailBody={mailBody} setMailBody={setMailBody} mailResult={mailResult} sendMail={sendMail} newTab={newTab} setNewTab={setNewTab}/>} 
    {page==='search'&&<SearchPage query={query} onSearch={navAddress}/>} 
    {page==='submit'&&<SubmitPage flag={flag} setFlag={setFlag} submit={submit} submitted={submitted}/>} 
   </div>
 </div>
}

function SocialHeader({handle,profile,onSwitch,email}:{handle:string,profile:Profile,onSwitch:()=>void,email:string}){return <div className="profile-head"><div className="avatar">LM</div><div className="profile-info"><h2>Lisa Morrow</h2><p>@{handle}</p><span>books · coffee · late walks · {email}</span></div><button className="switch-profile" onClick={onSwitch}>view other profile ↔</button></div>}
function InstagramPage({profile,setProfile,post,setPost}:{profile:Profile,setProfile:(x:Profile)=>void,post:Post|null,setPost:(x:Post|null)=>void}){
 const isA=profile==='a'; const posts=isA?postsA:postsB; const handle=isA?'lisa.morrow':'lisa.morrow_official'; const email=isA?'lisa.morrow@northstar-labs.test':'lisa.morrow@northstar-lab.test'
 return <div className="social-page instagram-page"><div className="social-nav"><b><Instagram size={19}/> instagram</b><div className="searchbox"><Search size={13}/> Search</div><span>⌂</span><span>♡</span><span>＋</span><span className="mini-avatar">LM</span></div><div className="profile-card"><SocialHeader handle={handle} profile={profile} onSwitch={()=>setProfile(isA?'b':'a')} email={email}/><div className="stats"><b>12</b> posts <b>1,842</b> followers <b>312</b> following</div><div className="story-row">{['LM','☕','B','✦','N'].map((x,i)=><div key={i}><span className="story">{x}</span><small>{['lisa','coffee','archive','notes','northstar'][i]}</small></div>)}</div></div><div className="compare-note"><AlertTriangle size={14}/> Both accounts intentionally share the same visible life. Grid order is not evidence of authorship.</div><div className="post-grid">{posts.map(p=><button key={p.id} className="post-tile" onClick={()=>setPost(p)}><PostArt type={p.image}/><div className="tile-time">{p.time}</div></button>)}</div>{post&&<PostModal post={post} onClose={()=>setPost(null)}/>}</div>
}
function PostArt({type}:{type:string}){const labels:Record<string,string>={window:'rain / window',cafe:'quiet corner',book:'same book',walk:'late walk',light:'sunday light',coffee:'coffee',blue:'blue afternoon',ticket:'ticket'};return <div className={'post-art art-'+type}><span>{labels[type]||type}</span></div>}
function PostModal({post,onClose}:{post:Post,onClose:()=>void}){return <div className="post-overlay"><div className="post-modal"><button className="close-modal" onClick={onClose}><X/></button><PostArt type={post.image}/><div className="post-details"><h3>{post.caption}</h3><p>{post.date} · {post.time}</p><p>{post.likes} likes</p><div className="ordinary-meta"><b>Public post</b><span>Comments: 17 · Shares: 4</span><span>Posted from Fictional Mobile</span></div></div></div></div>}

function FacebookPage({profile,setProfile}:{profile:Profile,setProfile:(x:Profile)=>void}){const a=profile==='a';const handle=a?'lisa.morrow':'lisa.morrow_official';return <div className="facebook-page"><div className="fb-header"><b>facebook</b><div className="fb-search"><Search size={13}/> Search Facebook</div><div className="fb-head-icons">⌂　◉　🔔　LM</div></div><div className="fb-layout"><aside><div className="fb-side active">👤 {handle}</div><div className="fb-side">Friends</div><div className="fb-side">Groups</div><div className="fb-side">Saved</div></aside><main><div className="fb-profile-cover"></div><div className="fb-profile-main"><div className="fb-avatar-large">LM</div><div><h1>Lisa Morrow</h1><p>@{handle}</p><span>312 friends · 4 mutual</span></div><button onClick={()=>setProfile(a?'b':'a')}>View other profile</button></div><div className="fb-tabs"><b>Posts</b><span>About</span><span>Friends</span><span>Photos</span></div><div className="fb-two-col"><div>{facebookPosts.map((x,i)=><article className="fb-post" key={i}><div className="fb-post-head"><div className="fb-small-avatar">LM</div><div><b>Lisa Morrow</b><small>{x.date} · 🌐</small></div></div><p>{x.text}</p><div className="fb-image">{x.time}</div><div className="fb-actions">Like　 Comment　 Share</div></article>)}</div><aside className="fb-info"><h3>Intro</h3><p>books · coffee · late walks</p><p>Works at <b>Northstar Labs</b></p><p>Joined Mar 2019</p><hr/><h3>Contact info</h3><p>{a?'lisa.morrow@northstar-labs.test':'lisa.morrow@northstar-lab.test'}</p></aside></div></main></div></div>}

function XPage(){return <div className="x-page"><div className="x-top"><b>𝕏</b><div className="x-search"><Search size={13}/> Search</div><span>Home</span><span>Explore</span><span>Messages</span><span>Bookmarks</span></div><div className="x-feed"><div className="x-title">For you</div>{xPosts.map((p,i)=><article className="x-post" key={i}><div className="x-avatar">LM</div><div className="x-post-body"><div><b>Lisa Morrow</b> <span>{p.handle} · {p.date}</span></div><p>{p.text}</p><small>{p.time}　♡ 12　↻ 3　♡ 48</small></div></article>)}</div></div>}

function GmailPage({mailTo,setMailTo,mailSubject,setMailSubject,mailBody,setMailBody,mailResult,sendMail}:{mailTo:string,setMailTo:(x:string)=>void,mailSubject:string,setMailSubject:(x:string)=>void,mailBody:string,setMailBody:(x:string)=>void,mailResult:string|null,sendMail:()=>void}){return <div className="gmail-page"><div className="gmail-top"><b><span className="gmail-m">M</span> Gmail</b><div className="gmail-search"><Search size={13}/> Search mail</div><span>⚙　?</span></div><div className="gmail-body"><aside className="gmail-side"><button className="compose" onClick={()=>{}}>＋ Compose</button><div className="mail-row active">Inbox <b>2</b></div><div className="mail-row">Sent</div><div className="mail-row">Drafts</div></aside><main className="compose-area"><h2>New Message</h2><label>To<input value={mailTo} onChange={e=>setMailTo(e.target.value)} placeholder="recipient@domain.test"/></label><label>Subject<input value={mailSubject} onChange={e=>setMailSubject(e.target.value)}/></label><textarea value={mailBody} onChange={e=>setMailBody(e.target.value)}/><button className="send-button" onClick={sendMail}><Send size={14}/> Send</button>{mailResult&&<div className="mail-result"><pre>{mailResult}</pre></div>}</main></div></div>}
function SearchPage({query,onSearch}:{query:string,onSearch:(value:string)=>void}){const [term,setTerm]=useState(query);const q=query.toLowerCase();const usable=q.includes('lisa')||q.includes('morrow')||q.includes('northstar');return <div className="search-page"><form className="fake-google" onSubmit={e=>{e.preventDefault();onSearch(term)}}><b>BYTE Search</b><div className="google-box"><input name="site-search" aria-label="Search fictional web" autoFocus value={term} placeholder="Search the fictional web" onChange={e=>setTerm(e.target.value)} /><button type="submit" aria-label="Search"><Search size={15}/></button></div></form>{usable?<><div className="result"><b>Instagram — Lisa Morrow</b><span>@lisa.morrow · @lisa.morrow_official</span></div><div className="result"><b>Facebook — Lisa Morrow</b><span>Two fictional public profiles</span></div><div className="result"><b>X — Lisa Morrow</b><span>Multiple fictional posts</span></div></>:<div className="empty">No fictional source available for this search.</div>}</div>}
function SubmitPage({flag,setFlag,submit,submitted}:{flag:string,setFlag:(x:string)=>void,submit:()=>void,submitted:boolean}){return <div className="submit-page"><div className="submit-card"><Flag size={30}/><p className="eyebrow">BYTE INVESTIGATION LAB · CHALLENGE 02</p><h1>THE DOUBLE</h1><p>Submit the flag recovered from the fictional evidence.</p><div className="submit-input"><input placeholder="flag{...}" value={flag} onChange={e=>setFlag(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submit()}/><button onClick={submit}>SUBMIT</button></div>{submitted&&<div className="win"><b>WOHOOO — YOU WON.</b><span>Correct. The duplicated digital life was a trap; the independent mailbox evidence broke it.</span></div>}<div className="tiny">Demo validation is local. Production: submit to CTFd server-side.</div></div></div>}
