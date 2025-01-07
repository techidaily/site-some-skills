---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-12-30T23:42:18.285Z
updated: 2025-01-06T23:33:50.548Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/XS1nQCe95LU?si=A2dhdFkSAI61_nKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Key Takeaways

* To lock your Windows PC using Command Prompt, run "**Rundll32.exe user32.dll,LockWorkStation"** in the Command Prompt
* To set the lock screen timeout, run "**powercfg.exe /SETACVALUEINDEX SCHEME\_CURRENT SUB\_VIDEO VIDEOCONLOCK <time>"** in Command Prompt as Admin
* Activate the lock screen timeout setting by running "**powercfg.exe /SETACTIVE SCHEME\_CURRENT"** after you set the timeout.

 One of the first rules of cyber security is to always lock your PC before stepping away. While it may not be the quickest way to lock your Windows 10 PC, you can do it using the Command Prompt.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/XA_wP7rS9ww?si=LarMG3sEHAhSoL6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/GyfJUhsz_AY?si=x2HjoLX1B89oEPgZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/6nvb0775GOM?si=peBB_Mo_4zcZFuci" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/6KXVWj6Ar1M?si=Cd_jktmoN3e9OzH3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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
<li><a href="https://digital-screen-recording.techidaily.com/new-2024-approved-breaking-down-itunes-video-recording-basics/"><u>[New] 2024 Approved Breaking Down iTunes Video Recording Basics</u></a></li>
<li><a href="https://on-screen-recording.techidaily.com/new-in-2024-snap-shooting-techniques-for-zoom-calls/"><u>[New] In 2024, Snap Shooting Techniques for Zoom Calls</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-tailoring-the-spectrum-of-light-in-windows-based-video-editing/"><u>[New] Tailoring the Spectrum of Light in Windows-Based Video Editing</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-time-saving-tips-making-rapid-google-collage-photo-artwork/"><u>[New] Time-Saving Tips Making Rapid Google Collage Photo Artwork</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unearthing-the-potential-of-htc-vive-for-immersive-gaming/"><u>[New] Unearthing the Potential of HTC Vive for Immersive Gaming</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-5-online-titler-pros-unveiled/"><u>[Updated] Top 5 Online Titler Pros Unveiled</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-ultimate-software-guide-for-tempo-alteration/"><u>[Updated] Ultimate Software Guide for Tempo Alteration</u></a></li>
<li><a href="https://tech-revival.techidaily.com/1-como-reducir-el-tamano-de-un-archivo-mp3-guia-paso-a-paso-con-software-y-herramientas-en-linea/"><u>1. Cómo Reducir El Tamaño De Un Archivo MP3: Guía Paso a Paso Con Software Y Herramientas en Línea</u></a></li>
<li><a href="https://tiktok-clips.techidaily.com/2024-approved-creating-an-individualistic-tiktok-identifier/"><u>2024 Approved Creating an Individualistic TikTok Identifier</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unraveling-the-mystery-of-premium-free-photography-access/"><u>2024 Approved Unraveling the Mystery of Premium Free Photography Access</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-forgotten-the-voicemail-password-of-honor-x50i-try-these-fixes-by-drfone-android/"><u>In 2024, Forgotten The Voicemail Password Of Honor X50i? Try These Fixes</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-superior-webcams-revolutionizing-podcast-recording/"><u>In 2024, Superior Webcams Revolutionizing Podcast Recording</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/perfect-crossfading-techniques-using-audacity-for-2024/"><u>Perfect Crossfading Techniques Using Audacity for 2024</u></a></li>
<li><a href="https://extra-tips.techidaily.com/the-ultimate-list-of-picture-protection-software/"><u>The Ultimate List of Picture Protection Software</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-no-experience-guide-to-earning-on-reddit-13-strategies-inside-for-2024/"><u>The Ultimate, No-Experience Guide to Earning on Reddit - 13 Strategies Inside for 2024</u></a></li>
<li><a href="https://techtrends.techidaily.com/top-5-automation-apps-for-managing-your-pinterest-posts/"><u>Top 5 Automation Apps for Managing Your Pinterest Posts</u></a></li>
<li><a href="https://win-answers.techidaily.com/troubleshooting-the-sims-solved-graphic-hardware-issues-on-pc-and-mac/"><u>Troubleshooting The Sims ([SOLVED]) Graphic Hardware Issues on PC and Mac</u></a></li>
</ul></div>

