---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-09-19T18:36:42.545Z
updated: 2024-09-23T06:39:16.198Z
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

<!-- affiliate ads begin -->
<a href="https://malaysia-healthcare-travel-council.pxf.io/c/5597632/1557743/17382" target="_top" id="1557743">
  <img src="//a.impactradius-go.com/display-ad/17382-1557743" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://malaysia-healthcare-travel-council.pxf.io/i/5597632/1557743/17382" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Set the Lock Screen Timeout Setting Using Command Prompt

 Once you’ve locked your PC, the lock screen will generally be displayed for a certain amount of time before it time outs. You can set the amount of time that needs to pass before timing out using the Command Prompt.

 To do this, you’ll need to [open Command Prompt as an admin](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do so by typing “cmd” in the Windows Search bar and then right-clicking “Command Prompt” from the results. Next, select “Run As Administrator” from the menu that appears.

![Launching Command Prompt as admin.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-launch-cmd.png) 

<!-- affiliate ads begin -->
<a href="https://unicoeye.pxf.io/c/5597632/2134493/18498" target="_top" id="2134493">
  <img src="//a.impactradius-go.com/display-ad/18498-2134493" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://unicoeye.pxf.io/i/5597632/2134493/18498" style="position:absolute;visibility:hidden;" border="0" />
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
<li><a href="https://youtube-help.techidaily.com/new-rapid-training-image-transformation-for-dynamic-youtube-desktop-thumbnails/"><u>[New] Rapid Training Image Transformation for Dynamic YouTube Desktop Thumbnails</u></a></li>
<li><a href="https://some-skills.techidaily.com/12-quick-methods-to-access-windows-10-file-explorer/"><u>12 Quick Methods to Access Windows 10 File Explorer</u></a></li>
<li><a href="https://fox-links.techidaily.com/2024-approved-calculated-viewing-time-for-a-standard-20mb-film/"><u>2024 Approved Calculated Viewing Time for a Standard 20Mb Film</u></a></li>
<li><a href="https://fox-info.techidaily.com/2024-approved-how-to-quickly-stream-spotify-audio-with-integrity/"><u>2024 Approved How to Quickly Stream Spotify Audio with Integrity</u></a></li>
<li><a href="https://youtube-stream.techidaily.com/2024-approved-the-ultimate-calculus-of-cashflow-from-creativity-measuring-your-youtube-earnings-and-impact/"><u>2024 Approved The Ultimate Calculus of Cashflow From Creativity Measuring Your YouTube Earnings and Impact</u></a></li>
<li><a href="https://some-skills.techidaily.com/access-a-multitude-of-ai-powered-conversational-agents-directly-from-your-personal-computer-using-our-innovative-application/"><u>Access a Multitude of AI-Powered Conversational Agents Directly From Your Personal Computer Using Our Innovative Application</u></a></li>
<li><a href="https://some-skills.techidaily.com/boost-productivity-fast-efficiently-start-programs-via-keyboard-triggers-on-windows-11/"><u>Boost Productivity Fast: Efficiently Start Programs via Keyboard Triggers on Windows 11</u></a></li>
<li><a href="https://some-skills.techidaily.com/boost-your-gameplay-the-best-3-software-solutions-for-real-time-pc-gaming-stats-analysis/"><u>Boost Your Gameplay: The Best 3 Software Solutions for Real-Time PC Gaming Stats Analysis</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-remove-forgotten-pin-of-your-xiaomi-13t-by-drfone-android/"><u>How to Remove Forgotten PIN Of Your Xiaomi 13T</u></a></li>
<li><a href="https://data-safeguard.techidaily.com/mac-users-essential-skills-how-to-safeguard-access-and-recover-hard-drive-data-informative-video-series/"><u>Mac Users' Essential Skills: How to Safeguard, Access, and Recover Hard Drive Data – Informative Video Series</u></a></li>
<li><a href="https://driver-download.techidaily.com/troubleshooting-synaptics-driver-problems-in-windows-11-a-complete-guide/"><u>Troubleshooting Synaptics Driver Problems in Windows 11 – A Complete Guide</u></a></li>
</ul></div>

