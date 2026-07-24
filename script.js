document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const galleries={
dacap:{images:["assets/DACAP/1.jpeg","assets/DACAP/2.jpeg","assets/DACAP/3.jpeg"],captions:["Home dashboard — quick access to IoT reports, account and device connection.","VTSNET-VHF server details form — site, IP address and serial number entry.","Auto-generated maintenance report ready for export as PDF."]},
vessel:{images:["assets/Vessel/detection-results.png"],captions:["Detection results — vessel pairs flagged for meeting within a configurable distance, time window and speed limit."],repo:"https://github.com/Awanis1402/vessel-meeting-app"},
sts:{images:["assets/STS/dashboard.png"],captions:["Illegal anchoring analysis view — replaces checking and comparing each team member's Excel report one by one with a single filterable dashboard."],repo:"https://github.com/Awanis1402/dashboard-sts"},
mas:{images:["assets/MAS/flight-listings.png"],captions:["Flight listings screen — browse routes and available flights before booking."],repo:"https://github.com/akmalarifarifin/MasAirlineBookingManagementSystem"}
};
let currentGallery=null,currentIndex=0;
const lightbox=document.getElementById('lightbox'),lbImg=document.getElementById('lightboxImg'),lbCaption=document.getElementById('lightboxCaption'),lbCount=document.getElementById('lightboxCount'),lbRepo=document.getElementById('lightboxRepo'),lbPrev=document.getElementById('lightboxPrev'),lbNext=document.getElementById('lightboxNext');
function openGallery(name,index=0){currentGallery=name;currentIndex=index;updateLightbox();lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')}
function updateLightbox(){const g=galleries[currentGallery];lbImg.src=g.images[currentIndex];lbImg.alt=g.captions[currentIndex];lbCaption.textContent=g.captions[currentIndex];lbCount.textContent=g.images.length>1?(currentIndex+1)+' / '+g.images.length:'';const multi=g.images.length>1;lbPrev.hidden=!multi;lbNext.hidden=!multi;if(g.repo){lbRepo.href=g.repo;lbRepo.hidden=false}else{lbRepo.hidden=true}}
function step(dir){const g=galleries[currentGallery];currentIndex=(currentIndex+dir+g.images.length)%g.images.length;updateLightbox()}
document.querySelectorAll('[data-gallery]').forEach(el=>{const open=()=>openGallery(el.dataset.gallery);el.addEventListener('click',open);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})});
document.getElementById('lightboxClose').addEventListener('click',closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click',()=>step(-1));
document.getElementById('lightboxNext').addEventListener('click',()=>step(1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(!lightbox.classList.contains('open'))return;if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
