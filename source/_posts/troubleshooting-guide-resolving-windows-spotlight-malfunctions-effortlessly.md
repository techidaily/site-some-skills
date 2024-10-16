---
title: "Troubleshooting Guide: Resolving Windows Spotlight Malfunctions Effortlessly"
date: 2024-10-09T08:28:12.585Z
updated: 2024-10-16T10:27:33.176Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/865974c7bb05387b6277d30c79ecdc49aad19ee23c97d33e5069a1776373f52c.jpg
---

## Troubleshooting Guide: Resolving Windows Spotlight Malfunctions Effortlessly

### Quick Links

* [Preliminary Fixes](https://fox-glue.techidaily.com/new-in-2024-merge-music-and-graphics-in-ppt/)
* [Turn Windows Spotlight Off and On](https://extra-information.techidaily.com/exploring-excellence-2024s-leading-camera-lenses-ranked-1-10/)
* [Re-register the Windows Spotlight Service](https://techidaily.com/the-way-to-get-back-lost-music-from-vivo-x-fold-2-by-fonelab-android-recover-music/)
* [Reset Windows Spotlight Settings](https://facebook-record-videos.techidaily.com/updated-cutting-edge-professional-guide-to-youtube-editing-for-2024/)
* [Delete Existing Windows Spotlight Assets](https://blog-min.techidaily.com/how-to-restore-deleted-y78-5g-pictures-an-easy-method-explained-by-fonelab-android-recover-pictures/)
* [Disable Metered Connection](https://fake-location.techidaily.com/in-2024-can-life360-track-or-see-text-messages-what-can-you-do-with-life360-on-samsung-galaxy-m14-5g-drfone-by-drfone-virtual-android/)
* [Enable Background Apps (Windows 10)](https://www.howtogeek.com/windows-spotlight-not-working-fixes/#enable-background-apps-windows-10)
* [Disable Your Antivirus Program](https://article-helps.techidaily.com/digitizing-memories-from-stillness-to-movement-for-2024/)
* [Perform a Network Reset](https://windows11.techidaily.com/preventing-self-lock-in-windows-os/)

 When Windows Spotlight stops working, your computer's lock screen or desktop background gets stuck on the same image. Here, we show you how to fix this problem, so you can enjoy Spotlight's high-quality photos again.

 Windows Spotlight can take 24 hours to cycle a new image, so be patient after applying any of these fixes.

<!-- affiliate ads begin -->
<a href="https://arkmc.pxf.io/c/5597632/352557/5172" target="_top" id="352557">
  <img src="//a.impactradius-go.com/display-ad/5172-352557" border="0" alt="https://techidaily.com" width="720" height="90"/>
</a>
<img height="0" width="0" src="https://arkmc.pxf.io/i/5597632/352557/5172" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Preliminary Fixes

 The first thing to do when Windows Spotlight is stuck is to [check if your internet is working](https://article-posts.techidaily.com/pioneering-medical-messaging-in-digital-advertising/). Without it, Spotlight can't download new images.

 If your internet connection is fine, try [updating your Windows computer](https://howto.techidaily.com/fix-unfortunately-settings-has-stopped-on-realme-v30-quickly-drfone-by-drfone-fix-android-problems-fix-android-problems/), as it may contain a patch for any Spotlight bugs. Conversely, if you think a recently installed update caused the issue, [uninstall the Windows update](https://hardware-help.techidaily.com/download-updated-wireless-network-adapter-driver-for-windows-versions-win11-win10-win8-win7/) to reverse the changes.

<!-- affiliate ads begin -->
<a href="https://25home.pxf.io/c/5597632/2148644/16836" target="_top" id="2148644">
  <img src="//a.impactradius-go.com/display-ad/16836-2148644" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://25home.pxf.io/i/5597632/2148644/16836" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Turn Windows Spotlight Off and On

 The age-old advice of turning something off and on may sound silly, but it often works. It's no different here—try disabling and re-enabling Windows Spotlight.

 On Windows 11, go to Settings > Personalization. Since you can use Spotlight for both the lock screen and desktop background, choose the "Background" or "Lock Screen" option as needed.

![Windows 11 Settings showing the Personalization options.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-showing-the-personalization-options.png) 

 Click the "Personalize Your Background/Lock Screen" dropdown and select "Picture" to turn it off.

![Windows 11 Settings showing the Personalization options for lock screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-showing-the-personalization-options-for-lock-screen.png) 

 On Windows 10, go to Settings > Personalization > Lock Screen. Click the "Background" dropdown, and choose "Picture."

![Windows 10 settings app showing the Windows Spotlight personalization option.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-the-windows-spotlight-personalization-option.png) 

 After that, restart your computer and [set your background and lock screen to Windows Spotlight](https://video-capture.techidaily.com/updated-capturing-perfection-a-deep-dive-into-apeaksofts-technology-for-2024/) again.

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2126492/26400" target="_top" id="2126492">
  <img src="//a.impactradius-go.com/display-ad/26400-2126492" border="0" alt="https://techidaily.com" width="640" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2126492/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Re-register the Windows Spotlight Service

 Windows Spotlight may stop working if the Windows Content Delivery Manager (WCDM) component, responsible for downloading new images and content from Microsoft servers, is damaged or misconfigured. To fix this, you can re-register the component using Windows PowerShell.

 Press the Windows key, type "PowerShell," then right-click "Windows PowerShell," and choose "Run as Administrator." In the "User Account Control" prompt, select "Yes."

![Running Windows PowerShell as administrator from Windows Search.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-running-windows-powershell-as-administrator-from-windows-search.jpg) 

 Type the following command in the PowerShell window and press Enter:

        `Get-AppxPackage -allusers *ContentDeliveryManager* | foreach {Add-AppxPackage "$($_.InstallLocation)\appxmanifest.xml" -DisableDevelopmentMode -register }`
    
![Windows 10 PowerShell console running a command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-powershell-console-running-a-command.png) 

 Wait while PowerShell re-registers the Windows Content Delivery Manager component. If you see an error, restart your computer and try again.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2111982/7443" target="_top" id="2111982">
  <img src="//a.impactradius-go.com/display-ad/7443-2111982" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2111982/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Reset Windows Spotlight Settings

 You can reset Windows Spotlight to its default settings to fix data corruption issues. To perform a reset, rename two files (roaming.lock and settings.dat) in the Windows Content Delivery Manager folder.

 Press Win+E to open File Explorer. Then, copy/paste the following path into the address bar and press Enter:

        `%USERPROFILE%/AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\Settings`
    
 To rename the file, select "settings.dat," and press F2 (or Fn+F2) on your keyboard to highlight the file name. Then type "settings.dat.bak" as the new name and press Enter.

![Windows 10 desktop showing two File Explorer sessions in side-by-side comparison.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-desktop-showing-two-file-explorer-sessions-in-side-by-side-comparision.png) 

 Next, repeat the steps for the "roaming.lock" file, renaming it to "roaming.lock.bak". Once done, restart your computer.

##  Delete Existing Windows Spotlight Assets

 If the locally stored Windows Spotlight images are damaged, you can delete them to prompt Windows to download new images.

 Open File Explorer, copy and paste the following path into the address bar, and press Enter:

        `%USERPROFILE%/AppData\Local\Packages\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\LocalState\Assets`
    
 Press Ctrl+A to select all, then click "Delete" to remove the files.

![Windows 11 File Explorer showing deleting of Windows Spotlight asset files.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-file-explorer-showing-deleting-of-windows-spotlight-asset-files.png) 

 Once done, restart your computer.

##  Disable Metered Connection

 If you're on a metered connection, it limits background services' data usage. As such, Windows Spotlight won't work. To resolve this, turn off the metered connection for your network.

 On Windows 11, open the Settings app and select "Network & Internet." For an Ethernet connection, click "Ethernet."

![Windows 11 Settings app showing the Network & internet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-network-internet-screen-1.png) 

 Ensure the "Metered Connection" switch is set to "Off."

![Windows 11 Settings app showing metered connection turned off for Ethernet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-turned-off-metered-connection-for-ethernet-screen.png) 

 To manage your wireless network, go to Wi-Fi > Manage Known Networks.

![Windows 11 Settings app showing the Wi-Fi network screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-wi-fi-network-screen.png) 

 Then, select your Wi-Fi network and turn off "Metered Connection."

 On Windows 10, go to Settings > Network & Internet > Status. Under your "Ethernet" or "Wi-Fi" network, click "Properties."

![Windows 10 Settings app showing the Network & internet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-network-internet-screen.png) 

<!-- affiliate ads begin -->
<a href="https://bluettius.sjv.io/c/5597632/2139109/17108" target="_top" id="2139109">
  <img src="//a.impactradius-go.com/display-ad/17108-2139109" border="0" alt="https://techidaily.com" width="320" height="90"/>
</a>
<img height="0" width="0" src="https://bluettius.sjv.io/i/5597632/2139109/17108" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Under "Metered Connections," toggle the "Set as Metered Connection" switch to turn it off.

![Windows 10 Settings app showing the metered connection for Ethernet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-110-settings-app-showing-turned-off-metered-connection-for-ethernet-screen.png) 

##  Enable Background Apps (Windows 10)

 This is only applicable if you're using Windows 10\. If you're using Windows 11, skip this step.

 Ensure that your system allows apps to run in the background, as Spotlight needs this to function.

 Navigate to Settings > Privacy > Background Apps. Under "Background Apps," make sure the "Let Apps Run in the Background" option is turned on.

![Windows 10 Settings App showing the Background apps configuration screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-background-apps-configuration-screen-1.png) 

 Restart your computer to apply the changes.

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1948895/19272" target="_top" id="1948895">
  <img src="//a.impactradius-go.com/display-ad/19272-1948895" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1948895/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Disable Your Antivirus Program

 If you're using [third-party antivirus software](https://facebook-video-recording.techidaily.com/in-2024-access-high-res-fb-media-files/) rather than Microsoft Defender, it might mistakenly flag and block Windows Spotlight-related processes as a security threat. Consider temporarily turning it off to see if that's causing the problem (or add Windows Spotlight as an exception, if possible.)

![Windows 11 desktop showing the quit option for the Malwarebytes program in system tray.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-desktop-showing-quit-option-for-the-malwareabytes-program-in-system-tray.png) 

 You can likely turn off your antivirus from the system tray. To do this, right-click the antivirus app icon in the system tray and choose "Quit", "Shut Down Protection", or similar. Alternatively, turn it off through the antivirus' app interface.

##  Perform a Network Reset

 Your network may be incorrectly configured, meaning Spotlight can't pull the latest images. In this situation, perform a network reset to restore all your network settings to their defaults.

 On Windows 11, go to Settings > Network & Internet > Advanced Network Settings.

![Windows 11 Settings app showing the Advanced network settings option.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-the-advanced-network-settings-option.png) 

 Under "More Settings," select "Network Reset."

![Windows 11 Settings app showing the Network reset option under Advanced network settings.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-the-network-reset-option-under-advanced-network-settings.png) 

 Finally, click "Reset Now" and choose "Yes" to confirm the action.

![Windows 11 Settings app showing the Network reset option.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-the-network-reset-option.png) 

 On Windows 10, go to Settings > Network & Internet > Status. Under "Advanced Network Settings," select "Network Reset."

![Windows 10 Settings app showing the Network reset option screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-the-network-reset-option-screen.png) 

<!-- affiliate ads begin -->
<a href="https://unicoeye.pxf.io/c/5597632/2134235/18498" target="_top" id="2134235">
  <img src="//a.impactradius-go.com/display-ad/18498-2134235" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://unicoeye.pxf.io/i/5597632/2134235/18498" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Click "Reset Now" and choose "Yes" to confirm the action.

![Windows 10 Settings app showing the reset now option screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-the-reset-now-option-screen.png) 

<!-- affiliate ads begin -->
<a href="https://imp.i357552.net/c/5597632/1030380/11832" target="_top" id="1030380">
  <img src="//a.impactradius-go.com/display-ad/11832-1030380" border="0" alt="https://techidaily.com" width="720" height="90"/>
</a>
<img height="0" width="0" src="https://imp.i357552.net/i/5597632/1030380/11832" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 After the restart, Windows will walk you through setting up your network.

---

 By trying each of these tips in turn, Windows Spotlight should be working again, so you can enjoy visually stunning images to start your day, along with interesting facts and tips on your lock screen.

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
<li><a href="https://twitter-videos.techidaily.com/new-viral-video-voyage-twitters-compiled-top-10-tiktoks-for-2024/"><u>[New] Viral Video Voyage Twitter's Compiled Top 10 TikToks for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-streamline-your-multi-tasking-pip-settings-in-safari/"><u>[Updated] Streamline Your Multi-Tasking PIP Settings in Safari</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-tricks-for-non-engagement-with-edgenuity-video-content/"><u>2024 Approved Tricks for Non-Engagement with Edgenuity Video Content</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/achieving-flawless-fb-live-via-zoom-streaming-for-2024/"><u>Achieving Flawless FB Live via Zoom Streaming for 2024</u></a></li>
<li><a href="https://extra-resources.techidaily.com/are-apples-new-processors-revolutionizing-editing-tech-in-2024/"><u>Are Apple's New Processors Revolutionizing Editing Tech, In 2024</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-how-to-track-whatsapp-messages-on-honor-magic5-ultimate-without-them-knowing-drfone-by-drfone-virtual-android/"><u>In 2024, How to Track WhatsApp Messages on Honor Magic5 Ultimate Without Them Knowing? | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-text-and-title-effect-types-in-after-effects/"><u>In 2024, Text and Title Effect Types in After Effects</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-evolution-of-hd-tech-a-look-at-hp-envy-27/"><u>In 2024, The Evolution of HD Tech - A Look at HP Envy 27</u></a></li>
<li><a href="https://some-guidance.techidaily.com/in-2024-understanding-transient-suppression-via-audacity/"><u>In 2024, Understanding Transient Suppression via Audacity</u></a></li>
<li><a href="https://some-knowledge.techidaily.com/nyt-connection-insights-and-solutions-june-10th-edition-question-365/"><u>NYT Connection Insights & Solutions - June 10Th Edition, Question #365</u></a></li>
<li><a href="https://win-amazing.techidaily.com/sony-vaio-driver-setup-and-download-for-windows-systems-step-by-step-tutorial/"><u>Sony VAIO Driver Setup and Download for Windows Systems - Step-by-Step Tutorial</u></a></li>
<li><a href="https://tech-recovery.techidaily.com/successfully-recover-your-money-the-ultimate-steam-game-refund-procedure-explained/"><u>Successfully Recover Your Money – The Ultimate Steam Game Refund Procedure Explained</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-key-to-staying-put-mastering-6-viewer-friendly-genres-for-2024/"><u>The Key to Staying Put Mastering 6 Viewer-Friendly Genres for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/ultimate-photoshop-pro-with-ai-intelligence-for-2024/"><u>Ultimate Photoshop Pro with AI Intelligence for 2024</u></a></li>
<li><a href="https://desktop-recording.techidaily.com/unveiling-the-art-of-quiet-video-capture-methods-for-2024/"><u>Unveiling the Art of Quiet Video Capture Methods for 2024</u></a></li>
</ul></div>

