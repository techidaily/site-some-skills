---
title: "Troubleshooting Guide: Resolving Windows Spotlight Malfunctions Effortlessly"
date: 2025-01-11T22:33:40.391Z
updated: 2025-01-13T19:43:31.978Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/XA_wP7rS9ww?si=LarMG3sEHAhSoL6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Preliminary Fixes

 The first thing to do when Windows Spotlight is stuck is to [check if your internet is working](https://article-posts.techidaily.com/pioneering-medical-messaging-in-digital-advertising/). Without it, Spotlight can't download new images.

 If your internet connection is fine, try [updating your Windows computer](https://howto.techidaily.com/fix-unfortunately-settings-has-stopped-on-realme-v30-quickly-drfone-by-drfone-fix-android-problems-fix-android-problems/), as it may contain a patch for any Spotlight bugs. Conversely, if you think a recently installed update caused the issue, [uninstall the Windows update](https://hardware-help.techidaily.com/download-updated-wireless-network-adapter-driver-for-windows-versions-win11-win10-win8-win7/) to reverse the changes.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/PNw3Lb26wFA?si=5NR1XRVSp41EQYMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Turn Windows Spotlight Off and On

 The age-old advice of turning something off and on may sound silly, but it often works. It's no different here—try disabling and re-enabling Windows Spotlight.

 On Windows 11, go to Settings > Personalization. Since you can use Spotlight for both the lock screen and desktop background, choose the "Background" or "Lock Screen" option as needed.

![Windows 11 Settings showing the Personalization options.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-showing-the-personalization-options.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/lxv4NM-89CU?si=Uj5rOkhrwZ_6QIuW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Click the "Personalize Your Background/Lock Screen" dropdown and select "Picture" to turn it off.

![Windows 11 Settings showing the Personalization options for lock screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-showing-the-personalization-options-for-lock-screen.png) 

 On Windows 10, go to Settings > Personalization > Lock Screen. Click the "Background" dropdown, and choose "Picture."

![Windows 10 settings app showing the Windows Spotlight personalization option.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-the-windows-spotlight-personalization-option.png) 

 After that, restart your computer and [set your background and lock screen to Windows Spotlight](https://video-capture.techidaily.com/updated-capturing-perfection-a-deep-dive-into-apeaksofts-technology-for-2024/) again.

##  Re-register the Windows Spotlight Service

 Windows Spotlight may stop working if the Windows Content Delivery Manager (WCDM) component, responsible for downloading new images and content from Microsoft servers, is damaged or misconfigured. To fix this, you can re-register the component using Windows PowerShell.

 Press the Windows key, type "PowerShell," then right-click "Windows PowerShell," and choose "Run as Administrator." In the "User Account Control" prompt, select "Yes."

![Running Windows PowerShell as administrator from Windows Search.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-running-windows-powershell-as-administrator-from-windows-search.jpg) 

 Type the following command in the PowerShell window and press Enter:

        `Get-AppxPackage -allusers *ContentDeliveryManager* | foreach {Add-AppxPackage "$($_.InstallLocation)\appxmanifest.xml" -DisableDevelopmentMode -register }`
    
![Windows 10 PowerShell console running a command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-powershell-console-running-a-command.png) 

 Wait while PowerShell re-registers the Windows Content Delivery Manager component. If you see an error, restart your computer and try again.

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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/-0Ww1YIIUe4?si=cQ-Gkh9UCJABuPZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Disable Metered Connection

 If you're on a metered connection, it limits background services' data usage. As such, Windows Spotlight won't work. To resolve this, turn off the metered connection for your network.

 On Windows 11, open the Settings app and select "Network & Internet." For an Ethernet connection, click "Ethernet."

![Windows 11 Settings app showing the Network & internet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-network-internet-screen-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/S3Th6oa_isA?si=TTQ013BB9beUM4x6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Ensure the "Metered Connection" switch is set to "Off."

![Windows 11 Settings app showing metered connection turned off for Ethernet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-turned-off-metered-connection-for-ethernet-screen.png) 

 To manage your wireless network, go to Wi-Fi > Manage Known Networks.

![Windows 11 Settings app showing the Wi-Fi network screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-wi-fi-network-screen.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/AcAYRX0cwwA?si=DxqWU39vqksZbe1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Then, select your Wi-Fi network and turn off "Metered Connection."

 On Windows 10, go to Settings > Network & Internet > Status. Under your "Ethernet" or "Wi-Fi" network, click "Properties."

![Windows 10 Settings app showing the Network & internet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-network-internet-screen.png) 

 Under "Metered Connections," toggle the "Set as Metered Connection" switch to turn it off.

![Windows 10 Settings app showing the metered connection for Ethernet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-110-settings-app-showing-turned-off-metered-connection-for-ethernet-screen.png) 

##  Enable Background Apps (Windows 10)

 This is only applicable if you're using Windows 10\. If you're using Windows 11, skip this step.

 Ensure that your system allows apps to run in the background, as Spotlight needs this to function.

 Navigate to Settings > Privacy > Background Apps. Under "Background Apps," make sure the "Let Apps Run in the Background" option is turned on.

![Windows 10 Settings App showing the Background apps configuration screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-background-apps-configuration-screen-1.png) 

 Restart your computer to apply the changes.

##  Disable Your Antivirus Program

 If you're using [third-party antivirus software](https://facebook-video-recording.techidaily.com/in-2024-access-high-res-fb-media-files/) rather than Microsoft Defender, it might mistakenly flag and block Windows Spotlight-related processes as a security threat. Consider temporarily turning it off to see if that's causing the problem (or add Windows Spotlight as an exception, if possible.)

![Windows 11 desktop showing the quit option for the Malwarebytes program in system tray.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-desktop-showing-quit-option-for-the-malwareabytes-program-in-system-tray.png) 

 You can likely turn off your antivirus from the system tray. To do this, right-click the antivirus app icon in the system tray and choose "Quit", "Shut Down Protection", or similar. Alternatively, turn it off through the antivirus' app interface.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/jnITUsxMz5s?si=ohwRVH6eWhVnC6Xf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Perform a Network Reset

 Your network may be incorrectly configured, meaning Spotlight can't pull the latest images. In this situation, perform a network reset to restore all your network settings to their defaults.

 On Windows 11, go to Settings > Network & Internet > Advanced Network Settings.

![Windows 11 Settings app showing the Advanced network settings option.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-the-advanced-network-settings-option.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/Iz2LYWd8EqI?si=G_3CqFRAmeVPczjj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Under "More Settings," select "Network Reset."

![Windows 11 Settings app showing the Network reset option under Advanced network settings.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-the-network-reset-option-under-advanced-network-settings.png) 

 Finally, click "Reset Now" and choose "Yes" to confirm the action.

![Windows 11 Settings app showing the Network reset option.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-the-network-reset-option.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/U6lCtLUeROA?si=se6OFuis9JpcTGJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 On Windows 10, go to Settings > Network & Internet > Status. Under "Advanced Network Settings," select "Network Reset."

![Windows 10 Settings app showing the Network reset option screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-the-network-reset-option-screen.png) 

 Click "Reset Now" and choose "Yes" to confirm the action.

![Windows 10 Settings app showing the reset now option screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-the-reset-now-option-screen.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/oySc0DiqmKc?si=8pynRzuhlq2RUPZ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://youtube-webster.techidaily.com/-simplified-steps-for-sequential-youtube-video-viewing-free-for-2024/"><u>[New] 5 Simplified Steps for Sequential YouTube Video Viewing (Free) for 2024</u></a></li>
<li><a href="https://screen-activity-recording.techidaily.com/new-full-application-review-with-az-video-loggers/"><u>[New] Full Application Review with AZ Video Loggers</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-art-of-iphone-photography-shadow-techniques/"><u>[New] The Art of iPhone Photography Shadow Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-15-gadget-unboxers-your-ultimate-2024-guide/"><u>[New] Top 15 Gadget Unboxers Your Ultimate 2024 Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-the-secrets-of-swelling-youtube-supporters/"><u>[New] Unlocking the Secrets of Swelling YouTube Supporters</u></a></li>
<li><a href="https://facebook-video-share.techidaily.com/updated-a-comprehensive-guide-to-use-youtube-movie-maker/"><u>[Updated] A Comprehensive Guide to Use YouTube Movie Maker</u></a></li>
<li><a href="https://facebook-video-footage.techidaily.com/updated-expert-tips-for-crafting-top-notch-video-hashtags/"><u>[Updated] Expert Tips for Crafting Top-Notch Video Hashtags</u></a></li>
<li><a href="https://youtube-sure.techidaily.com/ed-in-2024-navigating-netizen-networks-examining-your-and-competing-channels/"><u>[Updated] In 2024, Navigating Netizen Networks Examining Your and Competing Channels</u></a></li>
<li><a href="https://screen-sharing-recording.techidaily.com/updated-in-2024-real-time-screen-replay-on-chrome-pcs/"><u>[Updated] In 2024, Real-Time Screen Replay on Chrome PCs</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-art-of-blending-audio-and-visuals-in-a-trailer/"><u>[Updated] The Art of Blending Audio and Visuals in a Trailer</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-quick-video-wins-essential-ideas-for-vloggers/"><u>2024 Approved Quick Video Wins Essential Ideas for Vloggers</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-surprise-uncovered-secrets-to-take-your-window-11-experience-up-a-notch/"><u>2024 Approved Surprise! Uncovered Secrets to Take Your WINDOW 11 Experience Up a Notch</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-symphony-in-softness-playback-reduction-guide/"><u>2024 Approved Symphony in Softness Playback Reduction Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unlocking-windows-high-dynamic-range-potential/"><u>2024 Approved Unlocking Windows' High Dynamic Range Potential</u></a></li>
<li><a href="https://facebook-video-recording.techidaily.com/core-components-for-transformative-facebook-advertisements-for-2024/"><u>Core Components for Transformative Facebook Advertisements for 2024</u></a></li>
<li><a href="https://discover-cloud.techidaily.com/guia-completa-para-realizar-una-copia-de-seguridad-y-reparacion-del-sistema-en-windows-7/"><u>Guía Completa Para Realizar Una Copia De Seguridad Y Reparación Del Sistema en Windows 7</u></a></li>
<li><a href="https://tech-savvy.techidaily.com/reimagining-content-craft-with-chatgpt/"><u>Reimagining Content Craft with ChatGPT</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/top-10-airplay-apps-in-poco-m6-pro-4g-for-streaming-drfone-by-drfone-android/"><u>Top 10 AirPlay Apps in Poco M6 Pro 4G for Streaming | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-youtubes-finest-story-sages-and-weavers-in-23-for-2024/"><u>Unveiling YouTube's Finest Story Sages and Weavers in '23 for 2024</u></a></li>
</ul></div>

