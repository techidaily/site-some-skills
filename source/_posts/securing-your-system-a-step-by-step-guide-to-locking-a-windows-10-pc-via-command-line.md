---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-12-07T01:50:02.075Z
updated: 2024-12-13T21:33:04.965Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/2077f1c448ea137a042adda99cddc314210e831040b4d1625093a313f8396691.JPG
---

## Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/tPgf_wSdhS8?si=BHoH1ryaxmwk-8FV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Quick Links

* [Lock Your Windows 10 PC Using Command Prompt](https://vp-tips.techidaily.com/new-audiovisual-adaptability-in-free-fire-for-2024/)
* [Set the Lock Screen Timeout Setting Using Command Prompt](https://eaxpv-info.techidaily.com/new-finding-a-different-way-to-naming-your-channel-with-filmora-for-2024/)

### Key Takeaways

* To lock your Windows PC using Command Prompt, run "**Rundll32.exe user32.dll,LockWorkStation"** in the Command Prompt
* To set the lock screen timeout, run "**powercfg.exe /SETACVALUEINDEX SCHEME\_CURRENT SUB\_VIDEO VIDEOCONLOCK <time>"** in Command Prompt as Admin
* Activate the lock screen timeout setting by running "**powercfg.exe /SETACTIVE SCHEME\_CURRENT"** after you set the timeout.

 One of the first rules of cyber security is to always lock your PC before stepping away. While it may not be the quickest way to lock your Windows 10 PC, you can do it using the Command Prompt.

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/vFQCEZiYA08?si=xjIu5IAy77RlHWii" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/rdNq2Sp031s?si=3FcJa3dQLraUDHKv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/BR4gsW-J7as?si=9a56UDKZKhREZnwz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 With Command Prompt open, run this command.

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK <time>

 Replace `<time>` with your desired amount of time in seconds. That means if you want to time out the lock screen after two minutes, you’d enter this command:

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 120

![Change the timeout to 120.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-changing-timeout-to-120.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/LaGNHfAT92w?si=bvHo1iYK2JBIPtRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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
<li><a href="https://some-skills.techidaily.com/new-tis-the-season-for-laughs-the-goofy-vhs-special/"><u>[New] 'Tis the Season for Laughs 'The Goofy' VHS Special</u></a></li>
<li><a href="https://facebook-video-content.techidaily.com/new-facebook-video-vanishing-act-heres-how-to-perform-the-counter-with-12-steps/"><u>[New] Facebook Video Vanishing Act? Here's How to Perform the Counter with 12 Steps</u></a></li>
<li><a href="https://youtube-tips.techidaily.com/n-2024-started-streaming-learn-obs-for-youtube-now/"><u>[New] In 2024, Started Streaming? Learn OBS for Youtube Now</u></a></li>
<li><a href="https://facebook-videos.techidaily.com/new-streamline-broadcasting-going-from-xbox-to-fb-live-for-2024/"><u>[New] Streamline Broadcasting Going From Xbox to FB Live for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-3-strategies-for-enhanced-zoom-video-conversion-techniques/"><u>[New] Top 3 Strategies for Enhanced Zoom Video Conversion Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlock-your-podcast-potential-advanced-techniques-for-idevice-audio-recording/"><u>[New] Unlock Your Podcast Potential Advanced Techniques for iDevice Audio Recording</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unveil-the-potential-of-vfx-animated-text-for-free/"><u>[New] Unveil the Potential of VFX Animated Text for Free</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-highest-rated-20-public-domain-pubg-combos/"><u>[Updated] Highest-Rated 20 Public Domain PUBG Combos</u></a></li>
<li><a href="https://fox-helps.techidaily.com/updated-in-2024-yi-cameras-edge-in-cinematic-quality-4k-capture/"><u>[Updated] In 2024, Yi Camera's Edge in Cinematic Quality 4K Capture</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-pioneers-guide-to-vr-terminology/"><u>[Updated] The Pioneer's Guide to VR Terminology</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-ultimate-software-guide-to-gamers-broadcast/"><u>[Updated] Ultimate Software Guide to Gamers' Broadcast</u></a></li>
<li><a href="https://unlock-android.techidaily.com/6-proven-ways-to-unlock-honor-phone-when-you-forget-the-password-by-drfone-android/"><u>6 Proven Ways to Unlock Honor Phone When You Forget the Password</u></a></li>
<li><a href="https://win-ratings.techidaily.com/complete-step-by-step-tutorial-setting-up-full-recovery-mode-in-sql-server-databases/"><u>Complete Step-by-Step Tutorial: Setting Up Full Recovery Mode in SQL Server Databases</u></a></li>
<li><a href="https://hardware-updates.techidaily.com/quick-fixes-for-elgato-hd6-groovers-driver-troubles-an-experts-methods-uncovered/"><u>Quick Fixes for Elgato HD6 Groovers Driver Troubles – An Expert's Methods Uncovered</u></a></li>
<li><a href="https://unlock-android.techidaily.com/the-ultimate-guide-to-honor-magic-vs-2-pattern-lock-screen-everything-you-need-to-know-by-drfone-android/"><u>The Ultimate Guide to Honor Magic Vs 2 Pattern Lock Screen Everything You Need to Know</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-the-secrets-of-adobe-cloud-and-alternative-storage-solutions-for-2024/"><u>Unveiling the Secrets of Adobe Cloud & Alternative Storage Solutions for 2024</u></a></li>
<li><a href="https://extra-hints.techidaily.com/your-ultimate-guide-to-choosing-vr-headsets-opt-for-easy-steps-with-mobile-or-connected-devices/"><u>Your Ultimate Guide to Choosing VR Headsets Opt for Easy Steps with Mobile or Connected Devices?</u></a></li>
</ul></div>

