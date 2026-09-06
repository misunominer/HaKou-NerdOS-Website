const i18n={
en:{navHome:"Home",navAbout:"About",navMissions:"Missions",navContact:"Contact",heroEyebrow:"OPEN-SOURCE HOME MINING SYSTEM",heroLine1:"HOME MINING.",heroLine2:"REIMAGINED.",heroTagline:"Simple. Transparent. Independent.",heroDescription:"Ha•Kou NerdOS is a home mining system designed to make monitoring and control simple, clear and accessible.",discover:"Discover NerdOS",signature:"Small Miners. Big Possibilities!",scrollDown:"Scroll Down",f1Title:"HOME MINING",f1Text:"Practical tools for home mining.",f2Title:"YOUR CONTROL",f2Text:"Clear information. Control stays with you.",f3Title:"TRANSPARENT",f3Text:"No hidden dependency between Mining and optional features.",aboutTitle1:"More than Mining.",aboutTitle2:"A smarter home system.",aboutText:"Ha•Kou NerdOS brings home-mining information and controls together in a clean, transparent interface designed for home miners.",p1:"Open Source",p2:"User Control",p3:"Practical Tools",p4:"Transparent",missionsTitle1:"Optional Missions.",missionsTitle2:"Independent by design.",missionsText:"Missions is an optional layer. Participation is your choice, and Mining continues independently whether Missions is available or not.",m1:"Optional participation",m2:"Separate from Mining",m3:"Mining keeps running without Missions",task:"Tasks",watch:"Watch",complete:"Complete",reward:"Rewards",contactTitle:"Let's build the future together.",contactText:"Questions, suggestions or partnership opportunities?",privacy:"Privacy Policy",terms:"Terms of Service"},
pt:{navHome:"Início",navAbout:"Sobre",navMissions:"Missões",navContact:"Contato",heroEyebrow:"SISTEMA OPEN-SOURCE PARA HOME MINING",heroLine1:"HOME MINING.",heroLine2:"REIMAGINADO.",heroTagline:"Simples. Transparente. Independente.",heroDescription:"Ha•Kou NerdOS é um sistema de home mining criado para tornar monitoramento e controle simples, claros e acessíveis.",discover:"Conheça o NerdOS",signature:"Pequenos mineradores. Grandes possibilidades!",scrollDown:"Role para baixo",f1Title:"HOME MINING",f1Text:"Ferramentas práticas para home mining.",f2Title:"SEU CONTROLE",f2Text:"Informação clara. O controle fica com você.",f3Title:"TRANSPARENTE",f3Text:"Nenhuma dependência oculta entre Mining e recursos opcionais.",aboutTitle1:"Mais que Mining.",aboutTitle2:"Um sistema doméstico mais inteligente.",aboutText:"Ha•Kou NerdOS reúne informações e controles de home mining em uma interface limpa e transparente criada para mineradores domésticos.",p1:"Open Source",p2:"Controle do Usuário",p3:"Ferramentas Práticas",p4:"Transparente",missionsTitle1:"Missões opcionais.",missionsTitle2:"Independentes por design.",missionsText:"Missions é uma camada opcional. Participar é sua escolha, e Mining continua independentemente de Missions estar disponível ou não.",m1:"Participação opcional",m2:"Separado do Mining",m3:"Mining continua sem Missions",task:"Tarefas",watch:"Assistir",complete:"Concluir",reward:"Recompensas",contactTitle:"Vamos construir o futuro juntos.",contactText:"Dúvidas, sugestões ou oportunidades de parceria?",privacy:"Política de Privacidade",terms:"Termos de Serviço"},
ja:{navHome:"ホーム",navAbout:"概要",navMissions:"ミッション",navContact:"お問い合わせ",heroEyebrow:"オープンソース・ホームマイニングシステム",heroLine1:"HOME MINING.",heroLine2:"REIMAGINED.",heroTagline:"シンプル。透明。独立。",heroDescription:"Ha•Kou NerdOSは、ホームマイニングの監視と操作をシンプルで分かりやすくするためのシステムです。",discover:"NerdOSを見る",signature:"小さなマイナー。大きな可能性。",scrollDown:"下へスクロール",f1Title:"ホームマイニング",f1Text:"ホームマイニングのための実用的なツール。",f2Title:"ユーザーのコントロール",f2Text:"分かりやすい情報。コントロールはユーザーの手に。",f3Title:"透明性",f3Text:"Miningとオプション機能の間に隠れた依存関係はありません。",aboutTitle1:"Miningだけではない。",aboutTitle2:"よりスマートなホームシステム。",aboutText:"Ha•Kou NerdOSは、ホームマイニングの情報と操作を、クリーンで透明なインターフェースにまとめます。",p1:"オープンソース",p2:"ユーザーコントロール",p3:"実用的なツール",p4:"透明性",missionsTitle1:"オプションのミッション。",missionsTitle2:"独立した設計。",missionsText:"Missionsはオプション機能です。参加はユーザーの選択であり、Missionsが利用できない場合でもMiningは独立して継続します。",m1:"参加は任意",m2:"Miningとは独立",m3:"MissionsなしでもMiningは継続",task:"タスク",watch:"視聴",complete:"完了",reward:"リワード",contactTitle:"次の未来を一緒に。",contactText:"ご質問、ご提案、パートナーシップについてお気軽にお問い合わせください。",privacy:"プライバシーポリシー",terms:"利用規約"}};

function setLang(lang){
  if(!i18n[lang]) lang="en";
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k=el.dataset.i18n;
    if(i18n[lang][k]) el.textContent=i18n[lang][k];
  });
  document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  try{localStorage.setItem("hakou-language",lang)}catch(e){}
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
let initial="en";try{const s=localStorage.getItem("hakou-language");if(i18n[s])initial=s}catch(e){}
setLang(initial);

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".main-nav a")];
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px",threshold:0});
sections.forEach(s=>io.observe(s));
