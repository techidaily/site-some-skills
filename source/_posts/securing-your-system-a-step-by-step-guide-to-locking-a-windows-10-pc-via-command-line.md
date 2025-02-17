---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2025-02-13T21:20:14.632Z
updated: 2025-02-17T00:47:18.487Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/2077f1c448ea137a042adda99cddc314210e831040b4d1625093a313f8396691.JPG
---

## Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/_dOmuXhsV6Y?si=aT6vgPbDx4ajjvdr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Quick Links

* [Lock Your Windows 10 PC Using Command Prompt](https://vp-tips.techidaily.com/new-audiovisual-adaptability-in-free-fire-for-2024/)
* [Set the Lock Screen Timeout Setting Using Command Prompt](https://eaxpv-info.techidaily.com/new-finding-a-different-way-to-naming-your-channel-with-filmora-for-2024/)

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/hZsnjxeSh1U?si=hZIfzQPDNX5KtOCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Key Takeaways

* To lock your Windows PC using Command Prompt, run "**Rundll32.exe user32.dll,LockWorkStation"** in the Command Prompt
* To set the lock screen timeout, run "**powercfg.exe /SETACVALUEINDEX SCHEME\_CURRENT SUB\_VIDEO VIDEOCONLOCK <time>"** in Command Prompt as Admin
* Activate the lock screen timeout setting by running "**powercfg.exe /SETACTIVE SCHEME\_CURRENT"** after you set the timeout.

 One of the first rules of cyber security is to always lock your PC before stepping away. While it may not be the quickest way to lock your Windows 10 PC, you can do it using the Command Prompt.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/P6Wfzj6YNDM?si=WRZQD9zCdQ1_tW1b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/odDOPrPjRYY?si=7QHzdUkTPNkHJiVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/mK1lEBRm_1w?si=FSaM0OKO0XBCgjtT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://article-posts.techidaily.com/new-in-2024-pro-tips-to-amplify-your-canva-designs/"><u>[New] In 2024, Pro Tips to Amplify Your Canva Designs</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/updated-2024-approved-unlocking-user-preferences-with-instagrams-real-time-feedback/"><u>[Updated] 2024 Approved Unlocking User Preferences with Instagram's Real-Time Feedback</u></a></li>
<li><a href="https://youtube-blog.techidaily.com/ed-in-2024-profit-strategies-for-beauty-streams/"><u>[Updated] In 2024, Profit Strategies for Beauty Streams</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/2024-approved-freedomframe-studios-the-future-of-free-game-snapshots/"><u>2024 Approved FreedomFrame Studios The Future of Free Game Snapshots</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-strategies-for-streaming-fb-live-on-zoom-platform/"><u>2024 Approved Strategies for Streaming FB Live on Zoom Platform</u></a></li>
<li><a href="https://howto.techidaily.com/7-fixes-for-unfortunately-phone-has-stopped-on-realme-c67-4g-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>7 Fixes for Unfortunately, Phone Has Stopped on Realme C67 4G | Dr.fone</u></a></li>
<li><a href="https://tech-recovery.techidaily.com/decoding-the-phenomenon-of-online-memes/"><u>Decoding the Phenomenon of Online Memes</u></a></li>
<li><a href="https://win-dash.techidaily.com/free-download-ultimate-intel-usb-30-driver-package-for-windows-10-systems/"><u>Free Download: Ultimate Intel USB 3.0 Driver Package for Windows 10 Systems</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-how-to-bypass-google-frp-lock-on-vivo-t2-5g-devices-by-drfone-android/"><u>In 2024, How to Bypass Google FRP Lock on Vivo T2 5G Devices</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-how-to-detect-and-remove-spyware-on-xiaomi-redmi-12-drfone-by-drfone-virtual-android/"><u>In 2024, How to Detect and Remove Spyware on Xiaomi Redmi 12? | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-fresh-film-enthusiasts-primer-on-visual-quality/"><u>In 2024, The Fresh Film Enthusiast’s Primer on Visual Quality</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-roadmap-to-instagram-star-status-9-must-do-tactics/"><u>In 2024, The Roadmap to Instagram Star Status 9 Must-Do Tactics</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-the-full-potential-of-canvas-image-tools/"><u>In 2024, Unlocking the Full Potential of Canva's Image Tools</u></a></li>
<li><a href="https://some-skills.techidaily.com/strategies-and-techniques-in-documentary-scriptwriting-for-2024/"><u>Strategies and Techniques in Documentary Scriptwriting for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-compre-writters-manual-for-great-documentary-storytelling-for-2024/"><u>The Compre Writter's Manual for Great Documentary Storytelling for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-kinemaster-way-to-enthralling-transitions-for-2024/"><u>The Kinemaster Way to Enthralling Transitions for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-youtubes-hidden-gems-the-comment-space-for-2024/"><u>Unveiling YouTube's Hidden Gems The Comment Space for 2024</u></a></li>
</ul></div>

