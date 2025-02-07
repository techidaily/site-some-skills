---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2025-02-05T20:00:04.409Z
updated: 2025-02-07T20:35:53.862Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/2077f1c448ea137a042adda99cddc314210e831040b4d1625093a313f8396691.JPG
---

## Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/bofw6eJA7Bg?si=HM2gKZGH4L1otw3e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/RAnyQ0uj9Yg?si=Es4_ulcdM_-LuDcq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZblaBc-v2vs?si=CKW1gJwXQT2vZJYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/AQn0MYjIfyI?si=rIdjT-qMRpjpJXXa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://facebook-record-videos.techidaily.com/new-best-channel-discoveries-in-asmr-for-2024/"><u>[New] Best Channel Discoveries in ASMR for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-tapping-into-community-spirit-a-guide-to-thriving-fb-gifting-campaigns/"><u>[New] Tapping Into Community Spirit A Guide to Thriving FB Gifting Campaigns</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-powerdirector-guide/"><u>[New] Ultimate PowerDirector Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-venturing-into-video-production-top-5-mac-videographers/"><u>[New] Venturing Into Video Production? Top 5 Mac Videographers</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-quick-and-painless-podcast-go-live-technique/"><u>[Updated] The Quick and Painless Podcast Go Live Technique</u></a></li>
<li><a href="https://snapchat-videos.techidaily.com/2024-approved-the-ultimate-checklist-seamless-conversion-of-phone-photos-to-snapchat/"><u>2024 Approved The Ultimate Checklist Seamless Conversion of Phone Photos to Snapchat</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-transformative-notetaking-the-mematic-way/"><u>2024 Approved Transformative Notetaking The Mematic Way</u></a></li>
<li><a href="https://games-able.techidaily.com/exclusive-labor-day-deal-grab-your-nintendo-switch-oled-for-just-60-at-walmart-insider-tips-from-zdnet/"><u>Exclusive Labor Day Deal: Grab Your Nintendo Switch OLED for Just $60 at Walmart - Insider Tips From ZDNet</u></a></li>
<li><a href="https://fox-search.techidaily.com/how-to-record-your-conversations-on-whatsapp-compatible-solutions-for-iosandroid-devices/"><u>How to Record Your Conversations on WhatsApp: Compatible Solutions for iOS/Android Devices</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-delete-gmail-account-withwithout-password-on-infinix-hot-30i-by-drfone-android/"><u>In 2024, Delete Gmail Account With/Without Password On Infinix Hot 30i</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-bypass-android-lock-screen-using-emergency-call-on-xiaomi-redmi-13c-5g-by-drfone-android/"><u>In 2024, How to Bypass Android Lock Screen Using Emergency Call On Xiaomi Redmi 13C 5G?</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-syma-x5c-exploration-top-choice-for-novice-aerial-enthusiasts/"><u>In 2024, Syma X5C Exploration Top Choice for Novice Aerial Enthusiasts</u></a></li>
<li><a href="https://hardware-tips.techidaily.com/step-by-step-guide-accessing-and-understanding-your-android-devices-notification-log/"><u>Step-by-Step Guide: Accessing and Understanding Your Android Device's Notification Log</u></a></li>
<li><a href="https://win-able.techidaily.com/warframe-performance-tuned-bid-farewell-to-frustrating-game-freezes/"><u>Warframe Performance Tuned - Bid Farewell to Frustrating Game Freezes</u></a></li>
</ul></div>

