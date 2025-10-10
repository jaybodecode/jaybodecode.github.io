import{M as x,N as s,O as o,P as g}from"#entry";const f={Malware:"malware.png","Threat Actor":"threat-actor.png",Vulnerability:"vulnerability.png","Data Breach":"data-breach.png","Threat Briefing":"threat-briefing.png",Ransomware:"ransomware.png",Phishing:"phishing.png","Supply Chain Attack":"supply-chain.png","Zero-Day Exploit":"zero-day.png",Cyberattack:"cyberattack.png",Campaign:"campaign.png","Insider Threat":"insider-threat.png","IoT Security":"iot-security.png","Cloud Security":"cloud-security.png","Network Security":"network-security.png","Endpoint Security":"endpoint-security.png","Incident Response":"incident-response.png","Compliance and Regulation":"compliance.png","Emerging Threats":"emerging-threats.png","Cybersecurity Awareness":"cybersecurity-awareness.png","Digital Forensics":"digital-forensics.png","Cryptocurrency and Blockchain":"cryptocurrency.png","AI and Machine Learning in Security":"ai-security.png","Mobile Security":"mobile-security.png","Web Application Security":"web-security.png","Industrial Control Systems (ICS)":"ics-security.png",Other:"other.png"};function c(l){return f[l]||f.Other}const R=()=>{const a=x().public.staticExport===!0,d=async(e,t,r="featured")=>{if(!t)return null;try{if(a)return`/images/articles/${e}/${r}/${t}`;const n=s(),i=`images/articles/${e}/${r}/${t}`,y=o(n,i);return await g(y)}catch(n){return console.error("Error getting image URL:",n),null}},h=(e,t,r="featured")=>`/images/articles/${e}/${r}/${t}`,u=async e=>{if(!e)return null;try{if(a)return`/images/categories/${c(e)}`;const t=s(),n=`images/categories/${c(e)}`,i=o(t,n);return await g(i)}catch(t){return console.error("Error getting category image URL:",t),null}},b=e=>`/images/categories/${c(e)}`,w=async e=>{const t=p(e);if(t){const n=await d(e.articleId,t,"featured");if(n)return n}const r=e?.display?.category;if(r){const n=await u(r);if(n)return n}return m(1200,630)},I=(e=1200,t=630)=>{const r=`
      <svg width="${e}" height="${t}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(59,130,246);stop-opacity:0.5" />
            <stop offset="100%" style="stop-color:rgb(37,99,235);stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <rect width="${e}" height="${t}" fill="url(#grad)" />
        <text x="50%" y="50%" 
              font-family="Arial, sans-serif" 
              font-size="24" 
              fill="white" 
              text-anchor="middle" 
              dominant-baseline="middle"
              opacity="0.7">
          No Image
        </text>
      </svg>
    `.trim();return`data:image/svg+xml;base64,${btoa(r)}`},m=(e=1200,t=630)=>{const r=`
      <svg width="${e}" height="${t}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(220,38,38);stop-opacity:0.7" />
            <stop offset="100%" style="stop-color:rgb(153,27,27);stop-opacity:0.9" />
          </linearGradient>
        </defs>
        <rect width="${e}" height="${t}" fill="url(#cyber-grad)" />
        <text x="50%" y="45%" 
              font-family="Arial, sans-serif" 
              font-size="32" 
              font-weight="bold"
              fill="white" 
              text-anchor="middle" 
              dominant-baseline="middle">
          🛡️
        </text>
        <text x="50%" y="60%" 
              font-family="Arial, sans-serif" 
              font-size="18" 
              fill="white" 
              text-anchor="middle" 
              dominant-baseline="middle"
              opacity="0.8">
          Cyber Security Advisory
        </text>
      </svg>
    `.trim();return`data:image/svg+xml,${encodeURIComponent(r)}`},$=e=>!!e?.media?.featuredImage?.id,p=e=>e?.media?.featuredImage?.id;return{getImageUrl:d,getStaticImageUrl:h,getCategoryImageUrl:u,getStaticCategoryImageUrl:b,getArticleImageUrl:w,getBrandingImageUrl:async e=>{try{if(a)return`/images/branding/${e}`;const t=s(),r=`images/branding/${e}`,n=o(t,r);return await g(n)}catch(t){return console.error("Error getting branding image URL:",t),null}},getStaticBrandingImageUrl:e=>`/images/branding/${e}`,getPlaceholderUrl:I,getCyberPlaceholderUrl:m,hasFeaturedImage:$,getFeaturedImageId:p,getFeaturedImageAlt:e=>e?.media?.featuredImage?.alt||e?.headline||"Article image",isStaticExport:a}};export{R as u};
