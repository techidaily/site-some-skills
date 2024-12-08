---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-12-02T00:59:30.468Z
updated: 2024-12-07T22:33:10.578Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/NC0rdKEQ98o?si=HYgqC8CxF_WTO5if" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/W5aJC8okA8s?si=L2rnYAp-gmGlLQSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/hZsnjxeSh1U?si=hZIfzQPDNX5KtOCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 With Command Prompt open, run this command.

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK <time>

 Replace `<time>` with your desired amount of time in seconds. That means if you want to time out the lock screen after two minutes, you’d enter this command:

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 120

![Change the timeout to 120.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-changing-timeout-to-120.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/QPAKth3O_5c?si=3YDfzJAZMDp1gFRz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 This command sets the lock screen timeout setting for your PC if it’s plugged in to a power source. To set the lock screen timeout setting for your PC if it’s running on battery, change`/SETACVALUEINDEX` to`/SETDCVALUEINDEX` and run the command as normal.

 Next, run this command:

powercfg.exe /SETACTIVE SCHEME_CURRENT

![Apply the setting to the currently active scheme.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/5-set-active.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/vEYkX2NJgZw?si=IaHqlqJcYipwUOht" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://tiktok-video-files.techidaily.com/new-secrets-to-successful-tiktok-videos-via-mac-or-pc/"><u>[New] Secrets to Successful TikTok Videos via MAC or PC</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-trailblazing-the-mobile-app-landscape/"><u>[New] Trailblazing the Mobile App Landscape</u></a></li>
<li><a href="https://some-knowledge.techidaily.com/updated-honored-advisors-elite-iphone-audio-experts/"><u>[Updated] Honored Advisors Elite iPhone Audio Experts</u></a></li>
<li><a href="https://digital-screen-recording.techidaily.com/updated-mastering-ps4-the-ultimate-guide-to-capturing-your-games/"><u>[Updated] Mastering PS4 The Ultimate Guide to Capturing Your Games</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-perfect-blend-of-relaxation-and-growth-podcast-multi-tasking-tips/"><u>[Updated] The Perfect Blend of Relaxation and Growth Podcast Multi-Tasking Tips</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-no-experience-guide-to-earning-on-reddit-13-strategies-inside/"><u>2024 Approved The Ultimate, No-Experience Guide to Earning on Reddit - 13 Strategies Inside</u></a></li>
<li><a href="https://extra-tips.techidaily.com/astounding-vlogs-start-here-easy-to-create-projects-for-2024/"><u>Astounding Vlogs Start Here Easy-to-Create Projects for 2024</u></a></li>
<li><a href="https://win-howtos.techidaily.com/expert-solutions-for-when-your-file-explorer-freezes-on-windows-11/"><u>Expert Solutions for When Your File Explorer Freezes on Windows 11</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-art-of-words-on-the-screen-crafting-clear-concise-dialogue/"><u>In 2024, The Art of Words on the Screen Crafting Clear, Concise Dialogue</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-premier-ranking-of-outstanding-stop-motion-films/"><u>In 2024, The Premier Ranking of Outstanding Stop-Motion Films</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-ultimate-checklist-for-selecting-prime-streaming-services-of-cricket/"><u>In 2024, The Ultimate Checklist for Selecting Prime Streaming Services of Cricket</u></a></li>
<li><a href="https://audio-shaping.techidaily.com/in-2024-ultimate-selection-of-voice-customization-mobile-apps/"><u>In 2024, Ultimate Selection of Voice Customization Mobile Apps</u></a></li>
<li><a href="https://driver-install.techidaily.com/maximizing-sound-quality-with-upgraded-nvidia-audio-for-win11/"><u>Maximizing Sound Quality with Upgraded NVIDIA Audio for Win11</u></a></li>
</ul></div>

