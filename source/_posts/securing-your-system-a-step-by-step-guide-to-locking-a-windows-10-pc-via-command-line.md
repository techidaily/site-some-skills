---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2025-02-11T04:13:13.722Z
updated: 2025-02-17T03:54:26.343Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/U6lCtLUeROA?si=se6OFuis9JpcTGJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/GFHH14XlFCk?si=2HcjQbDx5eG0ZQAt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/RBN1gYY5hUs?si=p89CMiMzeJzU0wGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/kTHQrw8e1gk?si=gTPIa7KjhSZ0Vz97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 With Command Prompt open, run this command.

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK <time>

 Replace `<time>` with your desired amount of time in seconds. That means if you want to time out the lock screen after two minutes, you’d enter this command:

powercfg.exe /SETACVALUEINDEX SCHEME_CURRENT SUB_VIDEO VIDEOCONLOCK 120

![Change the timeout to 120.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-changing-timeout-to-120.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/g6xXIR_Uh1A?si=TMXzklPEY50MUM05" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://screen-activity-recording.techidaily.com/new-2024-approved-screen-recorder-mac-with-audio/"><u>[New] 2024 Approved Screen Recorder Mac with Audio</u></a></li>
<li><a href="https://on-screen-recording.techidaily.com/new-cameraparticle-evaluation-for-2024/"><u>[New] CameraParticle Evaluation for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-heart-of-filmora-10-engaging-editing-capabilities/"><u>[New] The Heart of Filmora 10 Engaging Editing Capabilities</u></a></li>
<li><a href="https://facebook-record-videos.techidaily.com/updated-essential-tools-top-8-mirrorless-cams-for-professional-filmmakers-for-2024/"><u>[Updated] Essential Tools Top 8 Mirrorless Cams For Professional Filmmakers for 2024</u></a></li>
<li><a href="https://remote-screen-capture.techidaily.com/updated-in-2024-advanced-screen-recording-techniques-for-enhanced-productivity-in-adobe-captive/"><u>[Updated] In 2024, Advanced Screen Recording Techniques for Enhanced Productivity in Adobe Captive</u></a></li>
<li><a href="https://tiktok-video-recordings.techidaily.com/updated-make-a-buzz-on-tiktok-thematic-templates-for-viral-video-creation/"><u>[Updated] Make a Buzz on TikTok Thematic Templates for Viral Video Creation</u></a></li>
<li><a href="https://screen-sharing-recording.techidaily.com/updated-navigating-editor-options-filmora-or-democreator/"><u>[Updated] Navigating Editor Options Filmora or Democreator?</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-tailoring-humor-with-9gag-your-personal-meme-making-manual/"><u>2024 Approved Tailoring Humor with 9GAG Your Personal Meme Making Manual</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-techniques-for-ios-users-producing-and-transforming-tranquil-videos/"><u>2024 Approved Techniques for iOS Users Producing and Transforming Tranquil Videos</u></a></li>
<li><a href="https://fox-access.techidaily.com/globe-spin-technology-in-lenses-versus-depth-perception-tech/"><u>Globe-Spin Technology in Lenses versus Depth Perception Tech</u></a></li>
<li><a href="https://mondly-stories.techidaily.com/1719580999287-heres-how-to-say-chocolate-in-34-different-languages/"><u>Here’s How to Say Chocolate in 34 Different Languages</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-superior-audio-modification-software-with-enchanting-features/"><u>In 2024, Superior Audio Modification Software with Enchanting Features</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlock-serenity-with-asmr-for-uninterrupted-slumber/"><u>In 2024, Unlock Serenity with ASMR for Uninterrupted Slumber</u></a></li>
<li><a href="https://some-skills.techidaily.com/tailoring-your-windows-photos-display-filters-and-audio-options-for-2024/"><u>Tailoring Your Windows Photos Display Filters & Audio Options for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-6-gopro-helmet-harnesses-tips-and-techniques-unveiled-for-2024/"><u>Top 6 GoPro Helmet Harnesses Tips and Techniques Unveiled for 2024</u></a></li>
<li><a href="https://some-guidance.techidaily.com/transforme-dvd-em-formato-digital-com-facilidade-os-top-6-metodos-mais-eficientes-do-ano-2023/"><u>Transforme DVD Em Formato Digital Com Facilidade: Os Top 6 Métodos Mais Eficientes Do Ano 2023</u></a></li>
</ul></div>

