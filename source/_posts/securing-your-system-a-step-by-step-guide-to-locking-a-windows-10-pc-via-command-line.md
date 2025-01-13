---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2025-01-11T19:49:40.099Z
updated: 2025-01-13T17:31:50.647Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/2077f1c448ea137a042adda99cddc314210e831040b4d1625093a313f8396691.JPG
---

## Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/jjGL9wFdlbo?si=Vb1JgZqRXNc03UGG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Quick Links

* [Lock Your Windows 10 PC Using Command Prompt](https://vp-tips.techidaily.com/new-audiovisual-adaptability-in-free-fire-for-2024/)
* [Set the Lock Screen Timeout Setting Using Command Prompt](https://eaxpv-info.techidaily.com/new-finding-a-different-way-to-naming-your-channel-with-filmora-for-2024/)

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/tkpBmccvJ_Q?si=J7ellPL1G1l8Axi_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/2ipTu54inBo?si=gRegjvtVq5gm_PHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/zXUt81WsQpI?si=W3DKIAsa2-qbGadJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/QPAKth3O_5c?si=3YDfzJAZMDp1gFRz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://desktop-recording.techidaily.com/new-2024-approved-quickscreencapture-mastery-for-everyday-use/"><u>[New] 2024 Approved QuickScreenCapture Mastery for Everyday Use</u></a></li>
<li><a href="https://discord-videos.techidaily.com/new-in-2024-deleting-a-discord-server-desktop-and-mobile-guide/"><u>[New] In 2024, Deleting a Discord Server Desktop & Mobile Guide</u></a></li>
<li><a href="https://screen-activity-recording.techidaily.com/new-unlocking-vidmas-secrets-to-superior-screen-recording-for-2024/"><u>[New] Unlocking Vidma’s Secrets to Superior Screen Recording for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-blueprint-to-establishing-an-online-review-community-for-toys/"><u>[Updated] The Blueprint to Establishing an Online Review Community for Toys</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-insiders-pathway-to-effective-auditory-notes/"><u>[Updated] The Insider’s Pathway to Effective Auditory Notes</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-ultimate-mobile-and-web-photo-booster-at-no-cost/"><u>[Updated] Ultimate Mobile & Web Photo Booster at No Cost</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-tutorial-triumph-a-step-towards-a-million-view-goal/"><u>2024 Approved Tutorial Triumph A Step Towards a Million View Goal</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-ultimate-guide-to-mastering-final-cut-pro-essentials/"><u>2024 Approved Ultimate Guide to Mastering Final Cut Pro Essentials</u></a></li>
<li><a href="https://driver-download.techidaily.com/effortless-installation-free-qualcomm-atheros-ar938x-driver-download-available-now/"><u>Effortless Installation: Free Qualcomm Atheros AR938X Driver Download Available Now!</u></a></li>
<li><a href="https://ios-unlock.techidaily.com/in-2024-how-to-bypass-apple-iphone-15-pro-max-passcode-easily-video-inside-by-drfone-ios/"><u>In 2024, How to Bypass Apple iPhone 15 Pro Max Passcode Easily Video Inside</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-swift-solution-for-effortless-srt-to-text-txt-transform/"><u>In 2024, The Swift Solution for Effortless SRT to Text (TXT) Transform</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/in-2024-top-10-samsung-galaxy-a05-android-sim-unlock-apk-by-drfone-android/"><u>In 2024, Top 10 Samsung Galaxy A05 Android SIM Unlock APK</u></a></li>
<li><a href="https://hardware-help.techidaily.com/save-big-with-these-3-superior-under-1k-laptop-bargains-at-costco-amazon-and-dell-during-cyber-monday-2022-zdnet/"><u>Save Big with These 3 Superior Under $1K Laptop Bargains at Costco, Amazon & Dell During Cyber Monday 2022 - ZDNet</u></a></li>
<li><a href="https://win-webster.techidaily.com/step-by-step-instruction-how-to-enhance-your-samsung-notebook-pro-with-an-ssd-upgrade/"><u>Step-by-Step Instruction: How to Enhance Your Samsung Notebook Pro with an SSD Upgrade</u></a></li>
<li><a href="https://fox-glue.techidaily.com/troubleshooting-iphone-x-regaining-access-via-facial-id-for-2024/"><u>Troubleshooting iPhone X Regaining Access via Facial ID for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-your-images-true-self-a-canva-step-by-step-for-2024/"><u>Unveiling Your Image’s True Self A Canva Step-by-Step for 2024</u></a></li>
</ul></div>

