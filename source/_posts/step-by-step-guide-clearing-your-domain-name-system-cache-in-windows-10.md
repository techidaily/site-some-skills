---
title: "Step-by-Step Guide: Clearing Your Domain Name System Cache in Windows 10"
date: 2024-10-20T01:26:59.670Z
updated: 2024-10-21T22:34:45.919Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/154068358b5a51a99b1a55712b63fc787a6b810efb43227d04a8381bc3392428.jpg
---

## Step-by-Step Guide: Clearing Your Domain Name System Cache in Windows 10

### Quick Links

* [What Does the DNS Cache Do?](https://screen-video-capture.techidaily.com/new-2024-approved-simplified-game-recording-setups-for-stardew-villagers/)
* [Flushing Your DNS Cache](https://facebook-video-share.techidaily.com/updated-swipe-right-on-creativity-youtubes-top-techniques-for-greenscreens/)

### Key Takeaways

* The DNS cache stores information that translates domain names into IP addresses, saving time when you connect to websites.
* Flushing your PC's DNS cache can help fix internet connection issues caused by corrupted, outdated, or poisoned cache.
* To flush your DNS Cache, run "ipconfig /flushdns" in Command Prompt or PowerShell, or just restart your PC.

 A problem with your PC's DNS cache can result in trouble connecting to the internet. If you've tried the usual tricks [like clearing your browser cache and cookies](https://howto.techidaily.com/top-10-fixes-for-phone-keep-disconnecting-from-wi-fi-on-huawei-nova-y71-drfone-by-drfone-fix-android-problems-fix-android-problems/), flushing Windows 10's DNS may fix your problem.

<!-- affiliate ads begin -->
<a href="https://imp.i110150.net/c/5597632/798161/11305" target="_top" id="798161">
  <img src="//a.impactradius-go.com/display-ad/11305-798161" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://imp.i110150.net/i/5597632/798161/11305" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  What Does the DNS Cache Do? 

 A [Domain Network System (DNS) server](https://instagram-clips.techidaily.com/new-2024-approved-revealing-the-top-10-hidden-story-supporters/) is what translates familiar domain names like howtogeek.com into the IP addresses computers use to connect with each other. When a program tries to connect to a domain name like google.com or facebook.com, your computer queries a DNS server on the internet to get the corresponding numerical IP address. To save time, Windows 10 stores a copy of the information it gets from DNS servers locally on your PC. This is called the DNS cache.

 Your PC's DNS cache can save time, but if something goes wrong with it, it can cause connection errors. The DNS cache can become corrupted, where the information relating IP addresses to domain names is lost due to a glitch. The cache can also become outdated, meaning that either the domain name or the IP address of the site you're trying to reach has changed since the cache was last updated. The DNS cache can also be poisoned, where it is [given incorrect information by DNS servers](https://vimeo-videos.techidaily.com/new-in-2024-premium-downloader-suite-for-vimeo-content/). DNS cache poisoning can be accidental, but it can also be used maliciously to steal login credentials or other sensitive data.

 The DNS cache affects all internet traffic on your PC, so if you're having trouble with only one program or a single website, the problem probably isn't your DNS cache. If you can't reach a specific website, you can use a tool like [IsItDownRightNow](https://www.isitdownrightnow.com/) to check the website's status. If a single application isn't able to connect to the internet, try [checking your firewall settings](https://screen-mirror.techidaily.com/in-2024-how-to-cast-apple-iphone-7-to-chromecast-drfone-by-drfone-ios/).

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2111965/7443" target="_top" id="2111965">
  <img src="//a.impactradius-go.com/display-ad/7443-2111965" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2111965/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Flushing Your DNS Cache

 The DNS cache is not stored as a file on your PC, it is stored in system memory. System memory gets cleared every time your computer powers off, which is part of the reason [why restarting your computer fixes so many problems](https://android-pokemon-go.techidaily.com/in-2024-all-you-need-to-know-about-mega-greninja-for-motorola-moto-g13-drfone-by-drfone-virtual-android/). It also means the simplest way to flush your DNS cache is to restart your PC.

 If you want to manually flush your DNS cache on Windows 10, you can use Command Prompt or Windows PowerShell. Some commands must be "[Run as administrator](https://android-location.techidaily.com/in-2024-10-fake-gps-location-apps-on-android-of-your-samsung-galaxy-xcover-6-pro-tactical-edition-drfone-by-drfone-virtual/)," but it doesn't matter in this case.

 To launch Command Prompt, click the start button, type "cmd" or "command prompt" into the search bar on the Start menu, and then hit Enter.

![Running Command Prompt from the Start Menu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-command-prompt.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2115932/19272" target="_top" id="2115932">
  <img src="//a.impactradius-go.com/display-ad/19272-2115932" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2115932/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Alternatively, you can use Windows PowerShell. Click the Start button, type "powershell" into the search bar in the Start menu, and hit Enter.

![Enter "PowerShell" in the Start Menu search.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-powershell.png) 

<!-- affiliate ads begin -->
<a href="https://laganoo.pxf.io/c/5597632/1484910/16446" target="_top" id="1484910">
  <img src="//a.impactradius-go.com/display-ad/16446-1484910" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://laganoo.pxf.io/i/5597632/1484910/16446" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 With either Command Prompt or Windows PowerShell opened, enter the following command:

        `ipconfig /flushdns`
    
 If the DNS cache was flushed, you should see the "Successfully flushed the DNS Resolver Cache" message. You can now close the window.

 If you're using PowerShell 5 (which is still default on Windows 10) your Window will be blue instead of black. 

![The DNS Cache has been flushed successfully in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/flush-dns-powershell.png) 

 You can now test the websites or application you were having problems with. Is it working? If you're still experiencing problems, you'll have to try [other internet connection troubleshooting steps](https://article-posts.techidaily.com/pioneering-medical-messaging-in-digital-advertising/).

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="1223367746"></ins>

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://digital-screen-recording.techidaily.com/new-2024-approved-expert-obs-tutorial-for-effective-skype-recording/"><u>[New] 2024 Approved Expert OBS Tutorial for Effective Skype Recording</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-strategies-to-ensure-iphone-camera-focus/"><u>[New] Strategies to Ensure iPhone Camera Focus</u></a></li>
<li><a href="https://eaxpv-info.techidaily.com/updated-2024-approved-deciphering-how-to-find-my-youtube-comments-posts/"><u>[Updated] 2024 Approved Deciphering How To Find My YouTube Comments Posts</u></a></li>
<li><a href="https://facebook-video-share.techidaily.com/updated-startups-guide-to-earnings-on-youtube-platform/"><u>[Updated] Startups' Guide to Earnings on YouTube Platform</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/2024-approved-10-photography-composition-rules-for-iphone/"><u>2024 Approved 10 Photography Composition Rules for iPhone</u></a></li>
<li><a href="https://article-knowledge.techidaily.com/2024-approved-enhancing-selfie-quality-iphone-burst-mode/"><u>2024 Approved Enhancing Selfie Quality IPhone Burst Mode</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-stunning-iphone-portraits-through-water-imagery-techniques/"><u>2024 Approved Stunning iPhone Portraits Through Water Imagery Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-subtlety-matters-fading-out-sounds-in-logic-pro/"><u>2024 Approved Subtlety Matters Fading Out Sounds in Logic Pro</u></a></li>
<li><a href="https://buynow-info.techidaily.com/budget-friendly-amazonbasics-cross-cut-paper-shredder-6-sheets-per-pass-evaluation/"><u>Budget-Friendly AmazonBasics Cross-Cut Paper Shredder - 6 Sheets Per Pass Evaluation</u></a></li>
<li><a href="https://win-studio.techidaily.com/comment-configurer-la-fonction-mirroring-pour-votre-disque-de-demarrage-dans-windows-server-2016/"><u>Comment Configurer La Fonction Mirroring Pour Votre Disque De Démarrage Dans Windows Server 2016 ?</u></a></li>
<li><a href="https://tech-renaissance.techidaily.com/critical-updates-for-macos-sonoma-version-14-the-fourth-bug-fixes-expert-advice-by-zdnet/"><u>Critical Updates for macOS Sonoma Version 14. The Fourth Bug Fixes - Expert Advice by ZDNet</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-transforming-gifs-to-stickers-comprehensive-instruction-for-messaging-apps/"><u>In 2024, Transforming GIFs to Stickers Comprehensive Instruction for Messaging Apps</u></a></li>
<li><a href="https://tech-haven.techidaily.com/unlock-opportunities-6-ways-learning-chatgpt-benefits-job-seekers-and-workers/"><u>Unlock Opportunities: 6 Ways Learning ChatGPT Benefits Job Seekers and Workers</u></a></li>
</ul></div>

