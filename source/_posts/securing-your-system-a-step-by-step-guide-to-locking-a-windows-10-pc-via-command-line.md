---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2025-01-13T20:44:10.690Z
updated: 2025-01-19T23:59:54.483Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/2077f1c448ea137a042adda99cddc314210e831040b4d1625093a313f8396691.JPG
---

## Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/pRR3Oq03EuE?si=ZTy8-WH0AesA9zRh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Quick Links

* [Lock Your Windows 10 PC Using Command Prompt](https://vp-tips.techidaily.com/new-audiovisual-adaptability-in-free-fire-for-2024/)
* [Set the Lock Screen Timeout Setting Using Command Prompt](https://eaxpv-info.techidaily.com/new-finding-a-different-way-to-naming-your-channel-with-filmora-for-2024/)

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/620kcQ7Dw7w?si=a5ussGs5HV7sG3hF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Key Takeaways

* To lock your Windows PC using Command Prompt, run "**Rundll32.exe user32.dll,LockWorkStation"** in the Command Prompt
* To set the lock screen timeout, run "**powercfg.exe /SETACVALUEINDEX SCHEME\_CURRENT SUB\_VIDEO VIDEOCONLOCK <time>"** in Command Prompt as Admin
* Activate the lock screen timeout setting by running "**powercfg.exe /SETACTIVE SCHEME\_CURRENT"** after you set the timeout.

 One of the first rules of cyber security is to always lock your PC before stepping away. While it may not be the quickest way to lock your Windows 10 PC, you can do it using the Command Prompt.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/oySc0DiqmKc?si=8pynRzuhlq2RUPZ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/15TKQ-BOENI?si=Ri4B2AuxAdi0Bglz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/uV3vm805eX0?si=YSPcsFxBcJmoxLsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://screen-recording.techidaily.com/new-in-2024-economical-systems-optimized-by-ideal-obs-settings/"><u>[New] In 2024, Economical Systems Optimized by Ideal OBS Settings</u></a></li>
<li><a href="https://video-capture.techidaily.com/new-in-2024-spectacular-top-ten-nintendo-switch-fighter-games-max-156/"><u>[New] In 2024, Spectacular Top Ten Nintendo Switch Fighter Games (Max 156)</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-tailored-interventions/"><u>[New] Tailored Interventions</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-time-honored-treasures-free-of-restrictions/"><u>[New] Time-Honored Treasures, Free of Restrictions</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-guide-to-economical-high-performance-asmr-microphones/"><u>[New] Ultimate Guide to Economical, High-Performance ASMR Microphones</u></a></li>
<li><a href="https://some-guidance.techidaily.com/new-unlocking-potential-top-tactics-for-medical-ads-on-social-networks/"><u>[New] Unlocking Potential Top Tactics for Medical Ads on Social Networks</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unveiling-the-revised-sony-s3700-experience/"><u>[New] Unveiling the Revised Sony S3700 Experience</u></a></li>
<li><a href="https://screen-sharing-recording.techidaily.com/updated-expert-advice-for-capturing-evening-images-for-2024/"><u>[Updated] Expert Advice for Capturing Evening Images for 2024</u></a></li>
<li><a href="https://eaxpv-info.techidaily.com/updated-from-unconfident-to-impactful-embracing-youtube-blogging-for-2024/"><u>[Updated] From Unconfident to Impactful Embracing YouTube Blogging for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-leading-list-for-best-vector-resources/"><u>[Updated] The Leading List for Best Vector Resources</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-top-picks-for-hd-video-playback-on-your-android-device/"><u>[Updated] The Top Picks for HD Video Playback on Your Android Device</u></a></li>
<li><a href="https://win-premium.techidaily.com/can-i-securely-enhance-my-computer-performance-using-external-programs-insights-by-yl-computing/"><u>Can I Securely Enhance My Computer Performance Using External Programs? – Insights by YL Computing</u></a></li>
<li><a href="https://desktop-recording.techidaily.com/in-2024-convenient-options-easy-screen-recordings-for-dell-gear/"><u>In 2024, Convenient Options Easy Screen Recordings for Dell Gear</u></a></li>
<li><a href="https://youtube-stream.techidaily.com/in-2024-how-to-verify-your-youtube-account-a-simple-guide/"><u>In 2024, How to Verify Your YouTube Account - a Simple Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-time-tamed-on-film-easy-steps-for-slow-mo-video-using-photo-apps/"><u>In 2024, Time Tamed on Film Easy Steps for Slow-Mo Video Using Photo Apps</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unmatched-8-vr-equipment-companion-guide/"><u>In 2024, Unmatched 8 VR Equipment Companion Guide</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/the-ultimate-guide-to-get-the-rare-candy-on-pokemon-go-fire-red-on-tecno-spark-10-5g-drfone-by-drfone-virtual-android/"><u>The Ultimate Guide to Get the Rare Candy on Pokemon Go Fire Red On Tecno Spark 10 5G | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/total-byte-requirement-for-24-hours-of-movie-viewing-for-2024/"><u>Total Byte Requirement for 24 Hours of Movie Viewing for 2024</u></a></li>
<li><a href="https://sound-tweaking.techidaily.com/updated-in-2024-how-to-remove-audio-from-mp4/"><u>Updated In 2024, How to Remove Audio From MP4</u></a></li>
</ul></div>

