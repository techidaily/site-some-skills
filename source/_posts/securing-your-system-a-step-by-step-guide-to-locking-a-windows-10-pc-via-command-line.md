---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-09-12T22:33:45.861Z
updated: 2024-09-18T06:14:52.829Z
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
<a href="https://appsumo.8odi.net/c/5597632/2052059/7443" target="_top" id="2052059">
  <img src="//a.impactradius-go.com/display-ad/7443-2052059" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2052059/7443" style="position:absolute;visibility:hidden;" border="0" />
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
<a href="https://appsumo.8odi.net/c/5597632/2118306/7443" target="_top" id="2118306">
  <img src="//a.impactradius-go.com/display-ad/7443-2118306" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2118306/7443" style="position:absolute;visibility:hidden;" border="0" />
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
<li><a href="https://youtube-webster.techidaily.com/024-approved-igniting-creativity-in-your-channel-top-youtube-video-ideas/"><u>[New] 2024 Approved Igniting Creativity in Your Channel Top YouTube Video Ideas</u></a></li>
<li><a href="https://facebook-clips.techidaily.com/new-effortless-online-transformation-ff-vids-to-mp4-in-high-definition-for-2024/"><u>[New] Effortless Online Transformation FF Vids to MP4 in High Definition for 2024</u></a></li>
<li><a href="https://youtube-data.techidaily.com/ed-best-camera-lenses-for-youtube-for-2024/"><u>[Updated] Best Camera Lenses for YouTube for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/1-seamless-data-transition-mastering-the-art-of-using-windows-backup-for-upgrading-your-pc/"><u>1. Seamless Data Transition: Mastering the Art of Using Windows Backup for Upgrading Your PC</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/2024-approved-secretive-suggestions-for-enhanced-vlc-usage/"><u>2024 Approved Secretive Suggestions for Enhanced VLC Usage</u></a></li>
<li><a href="https://win11-tips.techidaily.com/addressing-failure-code-0x0001-on-nvidia-software/"><u>Addressing Failure Code 0X0001 on Nvidia Software</u></a></li>
<li><a href="https://some-skills.techidaily.com/connect-seamlessly-with-friends-a-guide-to-facetime-calling-from-windows/"><u>Connect Seamlessly with Friends: A Guide to Facetime Calling From Windows</u></a></li>
<li><a href="https://some-skills.techidaily.com/cost-effective-solutions-enjoy-apple-macintosh-elegance-at-a-fraction-of-the-price-with-secure-online-macbook-leasing-options/"><u>Cost-Effective Solutions: Enjoy Apple Macintosh Elegance at a Fraction of the Price with Secure Online Macbook Leasing Options</u></a></li>
<li><a href="https://extra-hints.techidaily.com/enlightening-your-iphone-experience-with-new-camera-features/"><u>Enlightening Your iPhone Experience with New Camera Features</u></a></li>
<li><a href="https://some-knowledge.techidaily.com/guida-passo-passo-alla-libera-acquisizione-del-convertitore-videoclip-freemaker-su-un-computer-apple/"><u>Guida Passo-Passo Alla Libera Acquisizione Del Convertitore Videoclip FreeMaker Su Un Computer Apple</u></a></li>
<li><a href="https://extra-resources.techidaily.com/shoppers-insight-making-an-informed-choice-on-your-next-360camera/"><u>Shopper's Insight Making an Informed Choice on Your Next 360Camera</u></a></li>
<li><a href="https://some-skills.techidaily.com/ultimate-tutorial-for-using-cut-copy-and-paste-commands-on-windows-1011-systems/"><u>Ultimate Tutorial for Using Cut, Copy & Paste Commands on Windows 10/11 Systems</u></a></li>
<li><a href="https://some-skills.techidaily.com/ultimate-tutorial-enabling-specific-ports-in-windows-firewall-settings/"><u>Ultimate Tutorial: Enabling Specific Ports in Windows Firewall Settings</u></a></li>
<li><a href="https://some-skills.techidaily.com/unleash-the-power-of-crossover-24-on-mac-and-linux-for-free-optimize-your-pc-apps-today-at-a-sale-price/"><u>Unleash the Power of CrossOver 24 on Mac & Linux for Free - Optimize Your PC Apps Today at a Sale Price</u></a></li>
<li><a href="https://some-skills.techidaily.com/windows-aesthetics-unveiled-tracing-the-lineage-of-os-desktop-imagery/"><u>Windows Aesthetics Unveiled: Tracing the Lineage of OS Desktop Imagery</u></a></li>
</ul></div>

