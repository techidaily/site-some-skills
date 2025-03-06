---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2025-03-02T22:30:59.106Z
updated: 2025-03-06T02:47:21.006Z
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

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

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
<li><a href="https://some-skills.techidaily.com/new-tips-for-reducing-vr-induced-symptoms/"><u>[New] Tips for Reducing VR-Induced Symptoms</u></a></li>
<li><a href="https://twitter-videos.techidaily.com/new-twitters-video-standards-focus-on-aspect-ratios/"><u>[New] Twitter's Video Standards Focus on Aspect Ratios</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-plugins-list-after-effects-edition/"><u>[New] Ultimate Plugins List After Effects Edition</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unveiling-windows-11-a-compreayer-to-master-video-editing-techniques/"><u>[New] Unveiling Windows 11 A Compreayer to Master Video Editing Techniques</u></a></li>
<li><a href="https://fox-links.techidaily.com/2024-approved-expertly-edit-your-imagery-with-top-androidios-montage-apps/"><u>2024 Approved Expertly Edit Your Imagery with Top Android/iOS Montage Apps</u></a></li>
<li><a href="https://youtube-zero.techidaily.com/approved-infusing-vitality-into-text-an-animated-adventure/"><u>2024 Approved Infusing Vitality Into Text An Animated Adventure</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-sound-guide-for-your-android-devices-customization/"><u>2024 Approved The Ultimate Sound Guide for Your Android Device's Customization</u></a></li>
<li><a href="https://mondly-stories.techidaily.com/from-novice-to-scholar-top-language-examination-guides/"><u>From Novice to Scholar: Top Language Examination Guides</u></a></li>
<li><a href="https://tech-haven.techidaily.com/get-the-most-from-your-fitness-journey-with-effective-chatgpt-interaction-techniques-for-exercise-enthusiasts/"><u>Get the Most From Your Fitness Journey with Effective ChatGPT Interaction Techniques for Exercise Enthusiasts</u></a></li>
<li><a href="https://program-issues.techidaily.com/how-to-resolve-alienware-command-center-not-responding-error-messages/"><u>How to Resolve 'Alienware Command Center Not Responding' Error Messages</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-public-domain-paintings-insights-and-links/"><u>In 2024, Unveiling Public Domain Paintings Insights & Links</u></a></li>
<li><a href="https://facebook.techidaily.com/insta-interruption-the-strategy-behind-urging-a-social-media-vacation/"><u>Insta-Interruption: The Strategy Behind Urging a Social Media Vacation</u></a></li>
<li><a href="https://win-guides.techidaily.com/step-by-step-tutorial-on-saving-instagram-tv-shows-for-later-enjoyment-without-internet-access/"><u>Step-by-Step Tutorial on Saving Instagram TV Shows for Later Enjoyment Without Internet Access</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-authoritative-handbook-on-selecting-impactful-podcast-monikers-plus-examples-for-2024/"><u>The Authoritative Handbook on Selecting Impactful Podcast Monikers, Plus Examples for 2024</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/ultimate-guide-to-get-the-meltan-box-pokemon-go-for-oneplus-nord-ce-3-5g-drfone-by-drfone-virtual-android/"><u>Ultimate guide to get the meltan box pokemon go For OnePlus Nord CE 3 5G | Dr.fone</u></a></li>
</ul></div>

