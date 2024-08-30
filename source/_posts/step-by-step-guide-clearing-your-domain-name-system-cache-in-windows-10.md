---
title: "Step-by-Step Guide: Clearing Your Domain Name System Cache in Windows 10"
date: 2024-08-29T20:43:47.258Z
updated: 2024-08-30T20:43:47.258Z
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
<a href="https://appsumo.8odi.net/c/5597632/2075471/7443" target="_top" id="2075471"><img src="//a.impactradius-go.com/display-ad/7443-2075471" border="0" alt="" width="1200" height="600"/></a><img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2075471/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  What Does the DNS Cache Do? 

 A [Domain Network System (DNS) server](https://instagram-clips.techidaily.com/new-2024-approved-revealing-the-top-10-hidden-story-supporters/) is what translates familiar domain names like howtogeek.com into the IP addresses computers use to connect with each other. When a program tries to connect to a domain name like google.com or facebook.com, your computer queries a DNS server on the internet to get the corresponding numerical IP address. To save time, Windows 10 stores a copy of the information it gets from DNS servers locally on your PC. This is called the DNS cache.

 Your PC's DNS cache can save time, but if something goes wrong with it, it can cause connection errors. The DNS cache can become corrupted, where the information relating IP addresses to domain names is lost due to a glitch. The cache can also become outdated, meaning that either the domain name or the IP address of the site you're trying to reach has changed since the cache was last updated. The DNS cache can also be poisoned, where it is [given incorrect information by DNS servers](https://vimeo-videos.techidaily.com/new-in-2024-premium-downloader-suite-for-vimeo-content/). DNS cache poisoning can be accidental, but it can also be used maliciously to steal login credentials or other sensitive data.

 The DNS cache affects all internet traffic on your PC, so if you're having trouble with only one program or a single website, the problem probably isn't your DNS cache. If you can't reach a specific website, you can use a tool like [IsItDownRightNow](https://www.isitdownrightnow.com/) to check the website's status. If a single application isn't able to connect to the internet, try [checking your firewall settings](https://screen-mirror.techidaily.com/in-2024-how-to-cast-apple-iphone-7-to-chromecast-drfone-by-drfone-ios/).

<!-- affiliate ads begin -->

<!-- affiliate ads end -->
##  Flushing Your DNS Cache

 The DNS cache is not stored as a file on your PC, it is stored in system memory. System memory gets cleared every time your computer powers off, which is part of the reason [why restarting your computer fixes so many problems](https://android-pokemon-go.techidaily.com/in-2024-all-you-need-to-know-about-mega-greninja-for-motorola-moto-g13-drfone-by-drfone-virtual-android/). It also means the simplest way to flush your DNS cache is to restart your PC.

 If you want to manually flush your DNS cache on Windows 10, you can use Command Prompt or Windows PowerShell. Some commands must be "[Run as administrator](https://android-location.techidaily.com/in-2024-10-fake-gps-location-apps-on-android-of-your-samsung-galaxy-xcover-6-pro-tactical-edition-drfone-by-drfone-virtual/)," but it doesn't matter in this case.

 To launch Command Prompt, click the start button, type "cmd" or "command prompt" into the search bar on the Start menu, and then hit Enter.

![Running Command Prompt from the Start Menu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-command-prompt.png) 

<!-- affiliate ads begin -->
<a href="https://secure.2checkout.com/order/checkout.php?PRODS=37540879&QTY=1&AFFILIATE=108875&CART=1"><img src="https://paperscan.orpalis.com/img/content/You_prefer_to_use.png" border="0">PaperScan Professional： PaperScan Scanner Software is a powerful TWAIN & WIA scanning application centered on one idea: making document acquisition an unparalleled easy task for anyone.</a>
<!-- affiliate ads end -->
 Alternatively, you can use Windows PowerShell. Click the Start button, type "powershell" into the search bar in the Start menu, and hit Enter.

![Enter "PowerShell" in the Start Menu search.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-powershell.png) 

<!-- affiliate ads begin -->
<a href="https://atezr.pxf.io/c/5597632/2018605/18496" target="_top" id="2018605"><img src="//a.impactradius-go.com/display-ad/18496-2018605" border="0" alt="" width="798" height="807"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/2018605/18496" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 With either Command Prompt or Windows PowerShell opened, enter the following command:

        `ipconfig /flushdns`
    
 If the DNS cache was flushed, you should see the "Successfully flushed the DNS Resolver Cache" message. You can now close the window.

 If you're using PowerShell 5 (which is still default on Windows 10) your Window will be blue instead of black. 

![The DNS Cache has been flushed successfully in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/flush-dns-powershell.png) 

<!-- affiliate ads begin -->
<a href="https://versadesk.pxf.io/c/5597632/1892107/21290" target="_top" id="1892107"><img src="//a.impactradius-go.com/display-ad/21290-1892107" border="0" alt="" width="1200" height="628"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/1892107/21290" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
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
<li><a href="https://facebook-video-share.techidaily.com/new-2024-approved-elevate-your-content-strategies-for-youtube-success/"><u>[New] 2024 Approved  Elevate Your Content  Strategies for YouTube Success</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/new-strategic-tips-to-enhance-your-gmeet-ppt-presentations-on-mobilelaptop/"><u>[New] Strategic Tips to Enhance Your GMeet PPT Presentations on Mobile/Laptop</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-portable-audio-choices-decoded/"><u>[New] Top Portable Audio Choices Decoded</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-transform-your-photographic-vision-with-iphone-burst-shooting/"><u>[New] Transform Your Photographic Vision with iPhone Burst Shooting</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-uhd-precision-converter-clearer-sharper-visuals/"><u>[New] UHD Precision Converter  Clearer, Sharper Visuals</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unleash-creative-potential-with-a-comprehensive-guide-to-ps-background-removal/"><u>[New] Unleash Creative Potential with a Comprehensive Guide to PS Background Removal</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-full-potential-in-depth-review-of-lgs-monitor-tech/"><u>[New] Unlocking Full Potential  In-Depth Review of LG's Monitor Tech</u></a></li>
<li><a href="https://instagram-clips.techidaily.com/updated-in-2024-elevate-brand-presence-effective-instagram-video-marketing-techniques/"><u>[Updated] In 2024, Elevate Brand Presence  Effective Instagram Video Marketing Techniques</u></a></li>
<li><a href="https://twitter-videos.techidaily.com/updated-seamless-sync-tweets-as-videos-on-whatsapp-for-2024/"><u>[Updated] Seamless Sync  Tweets as Videos on WhatsApp for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-swift-techniques-for-shifting-iphone-media-to-pc/"><u>[Updated] Swift Techniques for Shifting iPhone Media to PC</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-photographic-edge-cutting-edge-editing-strategies/"><u>[Updated] The Photographic Edge  Cutting-Edge Editing Strategies</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-tips-for-finding-christian-choir-songs-online-and-personalizing-them/"><u>[Updated] Tips for Finding Christian Choir Songs Online & Personalizing Them</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-ranked-animation-set-for-typography/"><u>[Updated] Top-Ranked Animation Set for Typography</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-ranked-pixel-perfection-appweb-software/"><u>[Updated] Top-Ranked Pixel Perfection App/Web Software</u></a></li>
<li><a href="https://tiktok-videos.techidaily.com/updated-transform-ordinary-pictures-into-viral-masterpieces-on-tiktok-for-2024/"><u>[Updated] Transform Ordinary Pictures Into Viral Masterpieces on TikTok for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-traverse-costs-watch-anywhere-gratis-video-player-pcmac/"><u>[Updated] Traverse Costs, Watch Anywhere - Gratis VIDEO Player (PC/Mac)</u></a></li>
<li><a href="https://fox-glue.techidaily.com/2024-approved-crafting-a-winning-live-broadcast-essentials-and-strategies/"><u>2024 Approved  Crafting a Winning Live Broadcast  Essentials and Strategies</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-swift-soundphone-tools-for-rapid-tracks/"><u>2024 Approved  Swift Soundphone Tools for Rapid Tracks</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-complete-rundown-on-dji-inspire-2/"><u>2024 Approved  The Complete Rundown on DJI Inspire 2</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-fast-lane-olympic-highlights-in-short-track-speed-skating/"><u>2024 Approved  The Fast Lane  Olympic Highlights in Short-Track Speed Skating</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-smart-buyers-guide-to-drones-crucial-info-upfront/"><u>2024 Approved  The Smart Buyer's Guide to Drones  Crucial Info Upfront</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-tips-for-keeping-your-iphones-memories-in-order-and-backed-up-on-icloud/"><u>2024 Approved  Top Tips for Keeping Your iPhone's Memories in Order and Backed Up on iCloud</u></a></li>
<li><a href="https://activate-lock.techidaily.com/3-effective-ways-to-bypass-activation-lock-on-apple-iphone-11-pro-max-by-drfone-ios/"><u>3 Effective Ways to Bypass Activation Lock on Apple iPhone 11 Pro Max</u></a></li>
<li><a href="https://program-issues.techidaily.com/disco-elysium-for-pc-now-running-smoothly-a-guide-through-the-fixed-compatibility-issues/"><u>Disco Elysium for PC Now Running Smoothly: A Guide Through the Fixed Compatibility Issues</u></a></li>
<li><a href="https://change-location.techidaily.com/how-to-fix-android-app-not-installed-error-on-huawei-nova-y91-quickly-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>How to Fix Android App Not Installed Error on Huawei Nova Y91 Quickly? | Dr.fone</u></a></li>
<li><a href="https://ios-unlock.techidaily.com/how-to-unlock-iphone-6s-plus-with-a-mask-on-by-drfone-ios/"><u>How to Unlock iPhone 6s Plus with a Mask On</u></a></li>
<li><a href="https://android-location.techidaily.com/in-2024-for-people-wanting-to-mock-gps-on-infinix-note-30i-devices-drfone-by-drfone-virtual/"><u>In 2024, For People Wanting to Mock GPS on Infinix Note 30i Devices | Dr.fone</u></a></li>
<li><a href="https://iphone-unlock.techidaily.com/in-2024-how-to-unlock-a-found-iphone-13-drfone-by-drfone-ios/"><u>In 2024, How To Unlock A Found iPhone 13? | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-power-of-consistency-steps-to-increase-youtube-views-and-subscriptions/"><u>In 2024, The Power of Consistency  Steps to Increase YouTube Views and Subscriptions</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-thinkers-arena-premier-gk-quiz-vids/"><u>In 2024, Thinkers’ Arena  Premier GK Quiz Vids</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-auditory-interface-win/"><u>In 2024, Ultimate Auditory Interface, WIN</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-gear-for-gopro-lenses/"><u>In 2024, Ultimate Gear for GoPro Lenses</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-guide-to-the-lg-bp350-visual-experience/"><u>In 2024, Ultimate Guide to the LG BP350 Visual Experience</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-powerpoints-voice-command-capabilities-step-by-step/"><u>In 2024, Unveiling PowerPoint's Voice Command Capabilities Step by Step</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-the-cutting-edge-cost-free-platforms-for-professional-video-editing/"><u>In 2024, Unveiling The Cutting-Edge, Cost-Free Platforms for Professional Video Editing</u></a></li>
<li><a href="https://some-skills.techidaily.com/leading-brands-for-budget-friendly-high-definition-projectors-for-2024/"><u>Leading Brands for Budget-Friendly, High-Definition Projectors for 2024</u></a></li>
<li><a href="https://instagram-video-recordings.techidaily.com/perfecting-your-snap-zoom-levels-unveiled-in-insta-stories-for-2024/"><u>Perfecting Your Snap  Zoom Levels Unveiled in Insta Stories for 2024</u></a></li>
<li><a href="https://data-safeguard.techidaily.com/revive-your-memories-with-top-iphone-snapshot-restoration-applications/"><u>Revive Your Memories with Top iPhone Snapshot Restoration Applications</u></a></li>
<li><a href="https://some-skills.techidaily.com/strategies-for-winning-on-spotifys-ad-platform-for-2024/"><u>Strategies for Winning on Spotify's Ad Platform for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/tactics-to-maximize-engagement-with-every-reddit-post-for-2024/"><u>Tactics to Maximize Engagement with Every Reddit Post for 2024</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/the-best-ispoofer-alternative-to-try-on-infinix-zero-30-5g-drfone-by-drfone-virtual-android/"><u>The Best iSpoofer Alternative to Try On Infinix Zero 30 5G | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-insiders-guide-to-crafting-insta-tones-for-2024/"><u>The Insider's Guide to Crafting Insta Tones for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-rise-of-new-titans-against-vlc-for-2024/"><u>The Rise of New Titans Against VLC for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-guide-to-blending-multiple-exposures-into-a-single-hdr-in-lightroom-for-2024/"><u>The Ultimate Guide to Blending Multiple Exposures Into a Single HDR in Lightroom for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/timing-duration-for-a-20mb-high-definition-video-for-2024/"><u>Timing Duration for a 20Mb High-Definition Video for 2024</u></a></li>
<li><a href="https://driver-error.techidaily.com/troubleshooting-steps-fixing-code-1-incorrect-device-configuration/"><u>Troubleshooting Steps: Fixing Code 1 - Incorrect Device Configuration</u></a></li>
<li><a href="https://some-skills.techidaily.com/unleash-your-vision-the-premier-6-for-artists-nfts-for-2024/"><u>Unleash Your Vision  The Premier 6 for Artists' NFTs for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unlock-the-secrets-to-enthralling-unboxing-content-on-insta-for-2024/"><u>Unlock the Secrets to Enthralling Unboxing Content on Insta for 2024</u></a></li>
</ul></div>
