---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-11-16T18:08:07.815Z
updated: 2024-11-19T17:26:35.178Z
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
<a href="https://appsumo.8odi.net/c/5597632/2037359/7443" target="_top" id="2037359">
  <img src="//a.impactradius-go.com/display-ad/7443-2037359" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2037359/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1915870/19272" target="_top" id="1915870">
  <img src="//a.impactradius-go.com/display-ad/19272-1915870" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1915870/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

<!-- affiliate ads begin -->
<a href="https://electronicx.pxf.io/c/5597632/1166360/14483" target="_top" id="1166360">
  <img src="//a.impactradius-go.com/display-ad/14483-1166360" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://electronicx.pxf.io/i/5597632/1166360/14483" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2049369/7443" target="_top" id="2049369">
  <img src="//a.impactradius-go.com/display-ad/7443-2049369" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2049369/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

 With Command Prompt open, run this command.

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK <time>

 Replace `<time>` with your desired amount of time in seconds. That means if you want to time out the lock screen after two minutes, you’d enter this command:

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 120

![Change the timeout to 120.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-changing-timeout-to-120.png) 

 This command sets the lock screen timeout setting for your PC if it’s plugged in to a power source. To set the lock screen timeout setting for your PC if it’s running on battery, change`/SETACVALUEINDEX` to`/SETDCVALUEINDEX` and run the command as normal.

 Next, run this command:

powercfg.exe /SETACTIVE SCHEME_CURRENT

![Apply the setting to the currently active scheme.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/5-set-active.png) 

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
<li><a href="https://youtube-clips.techidaily.com/new-5-next-level-editors-to-transcend-the-standard-youtube-videos/"><u>[New] 5 Next-Level Editors to Transcend the Standard Youtube Videos</u></a></li>
<li><a href="https://facebook-videos.techidaily.com/new-in-2024-enhanced-video-clarity-on-iphone-and-android-platforms/"><u>[New] In 2024, Enhanced Video Clarity on iPhone & Android Platforms</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/new-in-2024-secrets-to-compelling-presentations-ppt-on-mobile-and-desktop-gmeet/"><u>[New] In 2024, Secrets to Compelling Presentations PPT on Mobile & Desktop GMeet</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/new-premiere-pro-solutions-to-perfect-iphone-hd-video-exposure-balance/"><u>[New] Premiere Pro Solutions to Perfect iPhone HD Video Exposure Balance</u></a></li>
<li><a href="https://screen-capture.techidaily.com/updated-in-2024-fastest-video-recorder-clear-latency-free-action/"><u>[Updated] In 2024, Fastest Video Recorder Clear, Latency-Free Action</u></a></li>
<li><a href="https://ai-vdieo-software.techidaily.com/craft-unique-invites-with-these-top-video-maker-apps/"><u>Craft Unique Invites with These Top Video Maker Apps</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/forgot-iphone-15-plus-password-here-are-the-best-solutions-stellar-by-stellar-data-recovery-ios-iphone-data-recovery/"><u>Forgot iPhone 15 Plus Password? – Here are the Best Solutions | Stellar</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-rescue-lost-pictures-from-oppo-a78-by-fonelab-android-recover-pictures/"><u>How to Rescue Lost Pictures from Oppo A78?</u></a></li>
<li><a href="https://ai-vdieo-software.techidaily.com/in-2024-animate-on-the-move-best-3d-animation-apps-for-android-iphone-and-ipad/"><u>In 2024, Animate on the Move Best 3D Animation Apps for Android, iPhone, and iPad</u></a></li>
<li><a href="https://some-skills.techidaily.com/qualcomm-unveils-groundbreaking-arm-powered-windows-desktop-computing/"><u>Qualcomm Unveils Groundbreaking ARM-Powered Windows Desktop Computing</u></a></li>
<li><a href="https://some-skills.techidaily.com/resolving-javascript-bugs-a-step-by-step-guide-for-discord-users/"><u>Resolving JavaScript Bugs: A Step-by-Step Guide for Discord Users</u></a></li>
<li><a href="https://some-skills.techidaily.com/securing-a-no-cost-copy-of-microsofts-latest-os-a-guide-to-windows-11/"><u>Securing a No-Cost Copy of Microsoft's Latest OS: A Guide to Windows 11</u></a></li>
<li><a href="https://some-skills.techidaily.com/step-by-step-guide-launching-google-chrome-via-command-line-in-windows-11/"><u>Step-by-Step Guide: Launching Google Chrome via Command Line in Windows 11</u></a></li>
<li><a href="https://some-skills.techidaily.com/step-by-step-guide-personalizing-your-windows-11-taskbar/"><u>Step-by-Step Guide: Personalizing Your Windows 11 Taskbar</u></a></li>
<li><a href="https://some-skills.techidaily.com/step-by-step-instructions-for-resetting-microsoft-onedrive-on-windows-10-to-resolve-data-synchronization-errors/"><u>Step-by-Step Instructions for Resetting Microsoft OneDrive on Windows 10 to Resolve Data Synchronization Errors</u></a></li>
<li><a href="https://some-skills.techidaily.com/temporary-halt-of-the-windows-11-memory-restoration-capability-announced-by-microsoft/"><u>Temporary Halt of the Windows 11 Memory Restoration Capability Announced by Microsoft</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-8-essential-factors-to-consider-when-purchasing-a-pre-owned-windows-laptop/"><u>Top 8 Essential Factors to Consider When Purchasing a Pre-Owned Windows Laptop</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-8-solutions-for-when-your-laptop-wont-charge-despite-being-connected/"><u>Top 8 Solutions for When Your Laptop Won't Charge Despite Being Connected</u></a></li>
<li><a href="https://tech-renaissance.techidaily.com/unlocking-the-secrets-behind-wi-fi-calls-your-ultimate-faq/"><u>Unlocking the Secrets Behind Wi-Fi Calls - Your Ultimate FAQ</u></a></li>
</ul></div>

