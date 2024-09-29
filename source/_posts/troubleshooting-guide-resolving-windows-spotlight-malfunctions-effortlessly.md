---
title: "Troubleshooting Guide: Resolving Windows Spotlight Malfunctions Effortlessly"
date: 2024-09-20T03:55:21.011Z
updated: 2024-09-22T23:42:18.199Z
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

##  Preliminary Fixes

 The first thing to do when Windows Spotlight is stuck is to [check if your internet is working](https://article-posts.techidaily.com/pioneering-medical-messaging-in-digital-advertising/). Without it, Spotlight can't download new images.

 If your internet connection is fine, try [updating your Windows computer](https://howto.techidaily.com/fix-unfortunately-settings-has-stopped-on-realme-v30-quickly-drfone-by-drfone-fix-android-problems-fix-android-problems/), as it may contain a patch for any Spotlight bugs. Conversely, if you think a recently installed update caused the issue, [uninstall the Windows update](https://hardware-help.techidaily.com/download-updated-wireless-network-adapter-driver-for-windows-versions-win11-win10-win8-win7/) to reverse the changes.

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
<span id="1834903">
					<video width="864" height="1536" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1834903.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/16836-1834903">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1834903.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:540px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2F25home.pxf.io%2Fc%2F5597632%2F1834903%2F16836'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1834903/16836" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

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

##  Disable Metered Connection

 If you're on a metered connection, it limits background services' data usage. As such, Windows Spotlight won't work. To resolve this, turn off the metered connection for your network.

 On Windows 11, open the Settings app and select "Network & Internet." For an Ethernet connection, click "Ethernet."

![Windows 11 Settings app showing the Network & internet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-network-internet-screen-1.png) 

 Ensure the "Metered Connection" switch is set to "Off."

![Windows 11 Settings app showing metered connection turned off for Ethernet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-turned-off-metered-connection-for-ethernet-screen.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2137395/7443" target="_top" id="2137395">
  <img src="//a.impactradius-go.com/display-ad/7443-2137395" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2137395/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 To manage your wireless network, go to Wi-Fi > Manage Known Networks.

![Windows 11 Settings app showing the Wi-Fi network screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-11-settings-app-showing-wi-fi-network-screen.png) 

 Then, select your Wi-Fi network and turn off "Metered Connection."

 On Windows 10, go to Settings > Network & Internet > Status. Under your "Ethernet" or "Wi-Fi" network, click "Properties."

![Windows 10 Settings app showing the Network & internet screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-network-internet-screen.png) 

<!-- affiliate ads begin -->
<a href="https://bluettide.pxf.io/c/5597632/2141683/17092" target="_top" id="2141683">
  <img src="//a.impactradius-go.com/display-ad/17092-2141683" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://bluettide.pxf.io/i/5597632/2141683/17092" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

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

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2151873/7443" target="_top" id="2151873">
  <img src="//a.impactradius-go.com/display-ad/7443-2151873" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2151873/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

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

 Click "Reset Now" and choose "Yes" to confirm the action.

![Windows 10 Settings app showing the reset now option screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/windows-10-settings-app-showing-the-reset-now-option-screen.png) 

<!-- affiliate ads begin -->
<a href="https://bluettius.sjv.io/c/5597632/2139113/17108" target="_top" id="2139113">
  <img src="//a.impactradius-go.com/display-ad/17108-2139113" border="0" alt="https://techidaily.com" width="320" height="90"/>
</a>
<img height="0" width="0" src="https://bluettius.sjv.io/i/5597632/2139113/17108" style="position:absolute;visibility:hidden;" border="0" />
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



