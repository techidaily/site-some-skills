---
title: "Securing Your System: A Step-by-Step Guide to Locking a Windows 10 PC via Command Line"
date: 2024-11-06T00:05:19.319Z
updated: 2024-11-11T04:45:09.361Z
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
<a href="https://appsumo.8odi.net/c/5597632/2123740/7443" target="_top" id="2123740">
  <img src="//a.impactradius-go.com/display-ad/7443-2123740" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2123740/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Lock Your Windows 10 PC Using Command Prompt

 First, [open the Command Prompt](https://android-frp.techidaily.com/in-2024-step-by-step-tutorial-how-to-bypass-oppo-a78-frp-by-drfone-android/) on your PC by opening the Start menu, typing “cmd” in the Windows Search bar, and then selecting “Command Prompt” from the search results.

![Click the Start button, search for 'cmd,' then open 'Command Prompt.'](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-launch-cmd.png) 

<!-- affiliate ads begin -->
<a href="https://25home.pxf.io/c/5597632/2148634/16836" target="_top" id="2148634">
  <img src="//a.impactradius-go.com/display-ad/16836-2148634" border="0" alt="https://techidaily.com" width="80" height="31"/>
</a>
<img height="0" width="0" src="https://25home.pxf.io/i/5597632/2148634/16836" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Command Prompt will now open. Here, run this command to lock your Windows 10 PC.

Rundll32.exe user32.dll,LockWorkStation

![Locking your PC with Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-lock-pc-command-prompt.png) 

 Once executed, your PC will be locked. You'll have to sign back in with your PIN, password, or whatever sign-in method you usually use.

<!-- affiliate ads begin -->
<a href="https://laganoo.pxf.io/c/5597632/1528689/16446" target="_top" id="1528689">
  <img src="//a.impactradius-go.com/display-ad/16446-1528689" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://laganoo.pxf.io/i/5597632/1528689/16446" style="position:absolute;visibility:hidden;" border="0" />
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

<!-- affiliate ads begin -->
<a href="https://imp.i357552.net/c/5597632/1030129/11832" target="_top" id="1030129">
  <img src="//a.impactradius-go.com/display-ad/11832-1030129" border="0" alt="https://techidaily.com" width="720" height="90"/>
</a>
<img height="0" width="0" src="https://imp.i357552.net/i/5597632/1030129/11832" style="position:absolute;visibility:hidden;" border="0" />
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
<li><a href="https://some-skills.techidaily.com/new-the-art-of-words-on-the-screen-crafting-clear-concise-dialogue/"><u>[New] The Art of Words on the Screen Crafting Clear, Concise Dialogue</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-spectrum-enhanced-by-blades-newest-quad-hd-cameras/"><u>[New] The Spectrum Enhanced by Blade's Newest Quad-HD Cameras</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-5-gaming-monitors-to-perfect-ps5-and-xbox-experience/"><u>[New] Top 5 Gaming Monitors to Perfect PS5 and Xbox Experience</u></a></li>
<li><a href="https://digital-screen-recording.techidaily.com/updated-in-2024-freeze-frame-perfection-the-best-9-apps-to-record-and-save-animation-on-pc/"><u>[Updated] In 2024, Freeze Frame Perfection The Best 9 Apps to Record and Save Animation on PC</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-top-30-for-timeless-telephone-chimes/"><u>[Updated] The Top 30 for Timeless Telephone Chimes</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/2024-approved-prime-soundstage-narratives-for-radio/"><u>2024 Approved Prime Soundstage Narratives for Radio</u></a></li>
<li><a href="https://win-net.techidaily.com/creacion-libre-de-particion-efi-duplicada-en-windows-versiones-11-8-y-7/"><u>Creación Libre De Partición EFI Duplicada en Windows (Versiones 11, 8 Y 7)</u></a></li>
<li><a href="https://solve-popular.techidaily.com/get-abbyy-textgrabber-free-new-on-the-fly-translating-capabilities-for-android-devices/"><u>Get ABBYY TextGrabber Free: New On-the-Fly Translating Capabilities for Android Devices</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/how-to-use-allshare-cast-to-turn-on-screen-mirroring-on-samsung-galaxy-z-flip-5-drfone-by-drfone-android/"><u>How To Use Allshare Cast To Turn On Screen Mirroring On Samsung Galaxy Z Flip 5 | Dr.fone</u></a></li>
<li><a href="https://fox-info.techidaily.com/in-2024-igniting-interest-from-day-one-with-impactful-audio-starts/"><u>In 2024, Igniting Interest From Day One with Impactful Audio Starts</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-top-8-live-video-enhancers-for-online-broadcasts/"><u>In 2024, Top 8 Live Video Enhancers for Online Broadcasts</u></a></li>
<li><a href="https://easy-unlock-android.techidaily.com/mastering-android-device-manager-the-ultimate-guide-to-unlocking-your-realme-c55-device-by-drfone-android/"><u>Mastering Android Device Manager The Ultimate Guide to Unlocking Your Realme C55 Device</u></a></li>
<li><a href="https://article-posts.techidaily.com/perfecting-your-photos-utilizing-psxs-erase-feature/"><u>Perfecting Your Photos Utilizing PSX's Erase Feature</u></a></li>
<li><a href="https://iphone-transfer.techidaily.com/solved-how-to-transfer-from-apple-iphone-15-pro-max-to-iphone-15-drfone-by-drfone-transfer-from-ios/"><u>Solved How To Transfer From Apple iPhone 15 Pro Max to iPhone 15 | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/syncing-sonata-to-still-images-in-the-cyberrealm-for-2024/"><u>Syncing Sonata to Still Images in the Cyberrealm for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-artisans-touch-skillfully-applying-face-centric-motion-blur-using-picsart-for-2024/"><u>The Artisan’s Touch Skillfully Applying Face-Centric Motion Blur Using Picsart for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/trending-pictures-life-stories-uncovered-for-2024/"><u>Trending Pictures Life Stories Uncovered for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unlocking-advanced-ar-visualization-techniques-using-custom-luts-for-2024/"><u>Unlocking Advanced AR Visualization Techniques Using Custom LUTs for 2024</u></a></li>
<li><a href="https://novels-ebooks.techidaily.com/138570619-9781440141133-who-is-chak-mol/"><u>Who Is Chak Mol? | Free Book</u></a></li>
</ul></div>

