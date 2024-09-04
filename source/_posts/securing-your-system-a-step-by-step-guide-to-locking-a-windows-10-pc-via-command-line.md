---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-09-03T10:46:57.845Z
updated: 2024-09-04T10:46:57.846Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/2077f1c448ea137a042adda99cddc314210e831040b4d1625093a313f8396691.JPG
---

## Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line

### Quick Links

* [Lock Your Windows 10 PC Using Command Prompt](https://vp-tips.techidaily.com/new-audiovisual-adaptability-in-free-fire-for-2024/)
* [Set the Lock Screen Timeout Setting Using Command Prompt](https://eaxpv-info.techidaily.com/new-finding-a-different-way-to-naming-your-channel-with-filmora-for-2024/)

### Key Takeaways

* To lock your Windows PC using Command Prompt, run "**Rundll32.exe user32.dll,LockWorkStation"** in the Command Prompt
* To set the lock screen timeout, run "**powercfg.exe /SETACVALUEINDEX SCHEME\_CURRENT SUB\_VIDEO VIDEOCONLOCK <time>"** in Command Prompt as Admin
* Activate the lock screen timeout setting by running "**powercfg.exe /SETACTIVE SCHEME\_CURRENT"** after you set the timeout.

 One of the first rules of cyber security is to always lock your PC before stepping away. While it may not be the quickest way to lock your Windows 10 PC, you can do it using the Command Prompt.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2068408/7443" target="_top" id="2068408">
  <img src="//a.impactradius-go.com/display-ad/7443-2068408" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2068408/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

<!-- affiliate ads begin -->
<iframe id="iframe_1976998" src="//a.impactradius-go.com/gen-ad-code/5597632/1976998/22993" width="160" height="90" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
<!-- affiliate ads end -->
 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2118315/7443" target="_top" id="2118315">
  <img src="//a.impactradius-go.com/display-ad/7443-2118315" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2118315/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1948895/19272" target="_top" id="1948895">
  <img src="//a.impactradius-go.com/display-ad/19272-1948895" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1948895/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 With Command Prompt open, run this command.

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK <time>

 Replace `<time>` with your desired amount of time in seconds. That means if you want to time out the lock screen after two minutes, you’d enter this command:

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 120

![Change the timeout to 120.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-changing-timeout-to-120.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1918666/19272" target="_top" id="1918666">
  <img src="//a.impactradius-go.com/display-ad/19272-1918666" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1918666/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 This command sets the lock screen timeout setting for your PC if it’s plugged in to a power source. To set the lock screen timeout setting for your PC if it’s running on battery, change`/SETACVALUEINDEX` to`/SETDCVALUEINDEX` and run the command as normal.

 Next, run this command:

powercfg.exe /SETACTIVE SCHEME_CURRENT

![Apply the setting to the currently active scheme.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/5-set-active.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1959778/19272" target="_top" id="1959778">
  <img src="//a.impactradius-go.com/display-ad/19272-1959778" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1959778/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 Now your [lock screen](https://driver-download.techidaily.com/1722977751917-synaptics-drivers-download-and-update-for-windows-easily/) will timeout after the set amount of time. Give it a try!

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
<li><a href="https://vimeo-videos.techidaily.com/new-2024-approved-transform-vimeo-footage-into-visual-wonders-easily/"><u>[New] 2024 Approved  Transform Vimeo Footage Into Visual Wonders Easily</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/new-in-2024-visionary-footage-advanced-camcapturing-methods/"><u>[New] In 2024, Visionary Footage  Advanced CamCapturing Methods</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-guide-to-closer-insight-in-roblox-games/"><u>[New] The Ultimate Guide to Closer Insight in Roblox Games</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-transforming-drones-into-cinematic-experiences-with-editing/"><u>[New] Transforming Drones Into Cinematic Experiences with Editing</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unrivaled-handwear-elevate-your-vr-world/"><u>[New] Unrivaled Handwear  Elevate Your VR World</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-utilize-snapchats-star-trail-effectively/"><u>[New] Utilize Snapchat's Star Trail Effectively</u></a></li>
<li><a href="https://youtube-video-recordings.techidaily.com/updated-brevity-in-action-shortening-youtube-video-content/"><u>[Updated] Brevity in Action  Shortening YouTube Video Content</u></a></li>
<li><a href="https://youtube-blog.techidaily.com/ed-in-2024-youtube-shorts-and-tiktok-which-one-is-better-for-personal-usage/"><u>[Updated] In 2024, YouTube Shorts & TikTok  Which One Is Better for Personal Usage?</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/updated-premier-cloud-storage-guide-for-enterprises/"><u>[Updated] Premier Cloud Storage Guide for Enterprises</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-fastest-methods-to-uncover-hidden-reddit-articles/"><u>[Updated] The Fastest Methods to Uncover Hidden Reddit Articles</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-ultimate-guide-to-improving-chromebook-tone-with-top-voice-extensions/"><u>[Updated] The Ultimate Guide to Improving Chromebook Tone with Top Voice Extensions</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-ultimate-shutter-showdown-best-for-slow-motion-videos/"><u>[Updated] The Ultimate Shutter Showdown  Best for Slow Motion Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-picks-for-faith-based-ringtones-online/"><u>[Updated] Top Picks for Faith-Based Ringtones Online</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-transforming-photos-into-videos-an-experts-complete-tutorial-series/"><u>[Updated] Transforming Photos Into Videos  An Expert's Complete Tutorial Series</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-tricks-for-non-engagement-with-edgenuity-video-content/"><u>[Updated] Tricks for Non-Engagement with Edgenuity Video Content</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unveiling-30-new-dimensions-in-metaverse-memes/"><u>[Updated] Unveiling 30 New Dimensions in Metaverse Memes</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unveiling-worlds-in-virtual-reality-tours/"><u>[Updated] Unveiling Worlds in Virtual Reality Tours</u></a></li>
<li><a href="https://android-location-track.techidaily.com/2-ways-to-monitor-vivo-x90s-activity-drfone-by-drfone-virtual-android/"><u>2 Ways to Monitor Vivo X90S Activity | Dr.fone</u></a></li>
<li><a href="https://extra-hints.techidaily.com/2024-approved-artists-playground-the-prime-6-platforms-for-nft-creation/"><u>2024 Approved  Artists' Playground  The Prime 6 Platforms for NFT Creation</u></a></li>
<li><a href="https://extra-skills.techidaily.com/2024-approved-premiers-choice-5-best-slow-motion-cams/"><u>2024 Approved  Premier's Choice  5 Best Slow-Motion Cams</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-supreme-suggestions-elite-ios-tone-craftsmen/"><u>2024 Approved  Supreme Suggestions  Elite iOS Tone Craftsmen</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-evaluation-of-hdr-quality-with-luminance/"><u>2024 Approved  The Evaluation of HDR Quality with Luminance</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-pinnacle-strategies-for-persuasive-client-centered-videography/"><u>2024 Approved  The Pinnacle Strategies for Persuasive Client-Centered Videography</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unveiling-the-power-of-photos-a-comprehensive-polarr-guide/"><u>2024 Approved  Unveiling the Power of Photos  A Comprehensive Polarr Guide</u></a></li>
<li><a href="https://win-amazing.techidaily.com/effortless-upgrades-finding-and-applying-the-latest-software-for-epson-xp-440-devices/"><u>Effortless Upgrades: Finding & Applying the Latest Software for Epson XP-440 Devices</u></a></li>
<li><a href="https://tech-hub.techidaily.com/exploring-chatgpt-capabilities-a-guide-to-utilizing-its-inherent-modules/"><u>Exploring ChatGPT Capabilities: A Guide to Utilizing Its Inherent Modules</u></a></li>
<li><a href="https://fox-direct.techidaily.com/hero4-black-vs-hero4-silver-for-2024/"><u>Hero4 Black Vs Hero4 Silver for 2024</u></a></li>
<li><a href="https://win11-tips.techidaily.com/how-to-remove-windows-search-illustration/"><u>How to Remove Windows Search Illustration</u></a></li>
<li><a href="https://some-skills.techidaily.com/how-to-stream-on-mixer-macos-for-2024/"><u>How to Stream on Mixer MacOS for 2024</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-show-wi-fi-password-on-infinix-smart-7-hd-by-drfone-android/"><u>In 2024, How to Show Wi-Fi Password on Infinix Smart 7 HD</u></a></li>
<li><a href="https://ios-location-track.techidaily.com/in-2024-how-to-turn-off-google-location-to-stop-tracking-you-on-apple-iphone-12-mini-drfone-by-drfone-virtual-ios/"><u>In 2024, How to Turn Off Google Location to Stop Tracking You on Apple iPhone 12 mini | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-best-of-free-and-paid-8-ranked-android-videomosaic-apps-explored/"><u>In 2024, The Best of Free & Paid  #8 Ranked Android Videomosaic Apps Explored</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-guide-to-softening-volume-levels-on-lumafusion/"><u>In 2024, The Guide to Softening Volume Levels on Lumafusion</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-transformative-role-of-luts-in-visual-artistry/"><u>In 2024, The Transformative Role of LUTs in Visual Artistry</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-transform-your-pubg-presence-with-new-sounds/"><u>In 2024, Transform Your PUBG Presence with New Sounds</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlock-optimal-video-playback-by-tuning-speed-in-snapchat/"><u>In 2024, Unlock Optimal Video Playback by Tuning Speed in Snapchat</u></a></li>
<li><a href="https://audio-editing.techidaily.com/new-incorporating-audio-into-new-and-enhanced-mkv-files-for-2024/"><u>New Incorporating Audio Into New and Enhanced MKV Files for 2024</u></a></li>
<li><a href="https://win11.techidaily.com/overcoming-writing-errors-for-files-in-windows-systems/"><u>Overcoming Writing Errors for Files in Windows Systems</u></a></li>
<li><a href="https://buynow-marvelous.techidaily.com/storage-solutions-increase-your-pcs-capacity/"><u>Storage Solutions: Increase Your PC's Capacity</u></a></li>
<li><a href="https://some-skills.techidaily.com/streamitsimple-your-first-guide-to-live-podcasting-for-2024/"><u>StreamItSimple  Your First Guide to Live Podcasting for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/streamline-the-age-update-process-on-tiktok-for-2024/"><u>Streamline the Age Update Process on TikTok for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/streamlining-avi-conversions-create-gifs-with-filmora-on-pcmac-for-2024/"><u>Streamlining AVI Conversions  Create GIFs with Filmora on PC/Mac for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-allure-vs-warnings-of-virtual-reality-worlds-for-2024/"><u>The Allure vs Warnings of Virtual Reality Worlds for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-art-and-science-of-crafting-your-ideal-podcast-naming-for-2024/"><u>The Art & Science of Crafting Your Ideal Podcast Naming for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-guide-to-toolwiz-photosapp-for-photographers-for-2024/"><u>The Ultimate Guide to Toolwiz PhotosApp for Photographers for 2024</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/travel-through-time-on-instagram-the-reverse-video-guide/"><u>Travel Through Time on Instagram  The Reverse Video Guide</u></a></li>
<li><a href="https://hardware-updates.techidaily.com/ultimate-guide-removing-unwanted-pre-installed-apps-from-your-android-device/"><u>Ultimate Guide: Removing Unwanted Pre-Installed Apps From Your Android Device</u></a></li>
<li><a href="https://techidaily.com/your-complete-guide-to-reset-nokia-g310-drfone-by-drfone-reset-android-reset-android/"><u>Your Complete Guide To Reset Nokia G310 | Dr.fone</u></a></li>
</ul></div>
