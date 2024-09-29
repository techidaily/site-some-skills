---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-09-26T22:30:41.316Z
updated: 2024-09-28T23:05:08.742Z
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

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2137227/26400" target="_top" id="2137227">
  <img src="//a.impactradius-go.com/display-ad/26400-2137227" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2137227/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

### Key Takeaways

* To lock your Windows PC using Command Prompt, run "**Rundll32.exe user32.dll,LockWorkStation"** in the Command Prompt
* To set the lock screen timeout, run "**powercfg.exe /SETACVALUEINDEX SCHEME\_CURRENT SUB\_VIDEO VIDEOCONLOCK <time>"** in Command Prompt as Admin
* Activate the lock screen timeout setting by running "**powercfg.exe /SETACTIVE SCHEME\_CURRENT"** after you set the timeout.

 One of the first rules of cyber security is to always lock your PC before stepping away. While it may not be the quickest way to lock your Windows 10 PC, you can do it using the Command Prompt.

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1886019/19272" target="_top" id="1886019">
  <img src="//a.impactradius-go.com/display-ad/19272-1886019" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1886019/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

 With Command Prompt open, run this command.

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK <time>

 Replace `<time>` with your desired amount of time in seconds. That means if you want to time out the lock screen after two minutes, you’d enter this command:

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 120

![Change the timeout to 120.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-changing-timeout-to-120.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2123739/7443" target="_top" id="2123739">
  <img src="//a.impactradius-go.com/display-ad/7443-2123739" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2123739/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 This command sets the lock screen timeout setting for your PC if it’s plugged in to a power source. To set the lock screen timeout setting for your PC if it’s running on battery, change`/SETACVALUEINDEX` to`/SETDCVALUEINDEX` and run the command as normal.

 Next, run this command:

powercfg.exe /SETACTIVE SCHEME_CURRENT

![Apply the setting to the currently active scheme.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/5-set-active.png) 

<!-- affiliate ads begin -->
<a href="https://malaysia-healthcare-travel-council.pxf.io/c/5597632/1576474/17382" target="_top" id="1576474">
  <img src="//a.impactradius-go.com/display-ad/17382-1576474" border="0" alt="https://techidaily.com" width="160" height="90"/>
</a>
<img height="0" width="0" src="https://malaysia-healthcare-travel-council.pxf.io/i/5597632/1576474/17382" style="position:absolute;visibility:hidden;" border="0" />
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
<li><a href="https://article-knowledge.techidaily.com/new-2024-approved-the-future-in-your-hands-lgs-vr-gaming-masterpiece/"><u>[New] 2024 Approved The Future in Your Hands LG's VR Gaming Masterpiece</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-thrifty-choices-for-virtual-reality-heads/"><u>[New] Thrifty Choices for Virtual Reality Heads</u></a></li>
<li><a href="https://some-guidance.techidaily.com/updated-luminous-language-the-secret-of-dynamic-story-titles/"><u>[Updated] Luminous Language The Secret of Dynamic Story Titles</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-ultimate-guide-to-top-12-html5-video-engines/"><u>[Updated] The Ultimate Guide to Top 12 HTML5 Video Engines</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-venture-into-virtual-laughs-top-20plus-funny-metaverse-creations/"><u>2024 Approved Venture Into Virtual Laughs Top 20+ Funny Metaverse Creations</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/3-easy-solutions-to-hard-reset-infinix-smart-7-hd-drfone-by-drfone-reset-android-reset-android/"><u>3 Easy Solutions to Hard Reset Infinix Smart 7 HD | Dr.fone</u></a></li>
<li><a href="https://location-social.techidaily.com/3-things-you-must-know-about-fake-snapchat-location-on-oneplus-11r-drfone-by-drfone-virtual-android/"><u>3 Things You Must Know about Fake Snapchat Location On OnePlus 11R | Dr.fone</u></a></li>
<li><a href="https://games-able.techidaily.com/crank-up-the-challenge-with-frustrating-fiddlers/"><u>Crank Up the Challenge with Frustrating Fiddlers</u></a></li>
<li><a href="https://screen-activity-recording.techidaily.com/cutting-edge-fullscreen-capture-programs-for-2024/"><u>Cutting-Edge Fullscreen Capture Programs for 2024</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/guide-on-how-to-erase-iphone-12-mini-devices-entirely-drfone-by-drfone-ios-full-data-eraser-ios-full-data-eraser/"><u>Guide on How To Erase iPhone 12 mini Devices Entirely | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-how-to-choose-the-background-music-for-the-trailer/"><u>In 2024, How to Choose the Background Music for the Trailer</u></a></li>
<li><a href="https://visual-screen-recording.techidaily.com/in-2024-how-to-schedule-meetings-on-zoom/"><u>In 2024, How to Schedule Meetings on Zoom?</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/in-2024-ideal-emulation-tools-to-relive-sonys-playstation-experience/"><u>In 2024, Ideal Emulation Tools to Relive Sony's PlayStation Experience</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-tips-and-tricks-for-iphone-audio-enthusiasts/"><u>In 2024, Tips and Tricks for iPhone Audio Enthusiasts</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-windows-10-key-skills-you-need/"><u>In 2024, Unlocking Windows 10 Key Skills You Need</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-essential-techniques-for-fast-forwarding-in-spotify-for-2024/"><u>The Essential Techniques for Fast-Forwarding in Spotify for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unlimited-picture-pools-the-best-10-resources-for-2024/"><u>Unlimited Picture Pools The Best 10 Resources for 2024</u></a></li>
</ul></div>

