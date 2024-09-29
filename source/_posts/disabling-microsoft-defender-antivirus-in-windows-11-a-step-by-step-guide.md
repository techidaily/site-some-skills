---
title: "Disabling Microsoft Defender Antivirus in Windows 11: A Step-by-Step Guide"
date: 2024-09-27T04:21:38.521Z
updated: 2024-09-29T12:16:45.939Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://thmb.techidaily.com/7d0feaf90637aa15b789896b9b4144f8ee9d0a1514b5ec2518db335a12809dc5.jpg
---

## Disabling Microsoft Defender Antivirus in Windows 11: A Step-by-Step Guide

### Quick Links

* [When Should You Permanently Disable Microsoft Defender Antivirus](https://article-knowledge.techidaily.com/2024-approved-ultimate-guide-newest-lg-bp550-specs/)
* [Turn Off Real-Time Protection and Tamper Protection in the Windows Security App](https://android-location-track.techidaily.com/in-2024-top-10-best-spy-watches-for-your-tecno-spark-20c-drfone-by-drfone-virtual-android/)
* [Disable Microsoft Defender Using the Registry Editor](https://screen-sharing-recording.techidaily.com/new-remote-recording-mastery-a-comprehensive-approach/)
* [Disable Microsoft Defender Using the Local Group Policy Editor](https://fox-access.techidaily.com/a-compreenas-guide-to-producing-slow-motion-content-with-photos-and-internet-for-2024/)
* [How to Check the State of Microsoft Defender on Windows 11](https://screen-mirroring-recording.techidaily.com/new-broadcast-software-beyond-standard-obs/)

### Key Takeaways

* If you want to permanently disable Microsoft Defender on Windows 11, you’ll first need to disable Real-time protection and Tamper protection in the Windows Security app.
* Windows Home users can use the Registry Editor to turn off Microsoft Defender. Windows Pro users have the option to do it through either the Registry Editor or the Local Group Policy Editor.
* You can determine whether Microsoft Defender is currently disabled by running the "Get-MpComputerStatus | select AMRunningMode" command in Windows PowerShell.

 Windows built-in security app, Microsoft Defender, protects your computer from malicious agents and viruses. However, there may be situations when you want to disable it, such as when testing a third-party security app. We'll show you how to permanently disable Microsoft Defender on Windows 11.

##  When Should You Permanently Disable Microsoft Defender Antivirus 

 Microsoft Defender Antivirus provides various protection features, including real-time protection, cloud-delivered protection, network protection, and more. When you disable Microsoft Defender, you lose access to all these protections, leaving your computer at risk.

 Generally, you should avoid disabling Microsoft Defender Antivirus. However, if the need arises—for example, when you need to install an application that Defender is blocking—you can [temporarily turn it off](https://tech-renaissance.techidaily.com/what-is-the-difference-between-an-ipad-and-a-tablet/). To do so, [turn off Real-time protection](https://desktop-recording.techidaily.com/new-record-gameplay-in-samsung-galaxy-phones-for-2024/) in the Windows Security app, install the application, and then re-enable Real-time protection.

![Real-time Protection toggle disabled in the Windows Security app.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/real-time-protection-toggle-disabled-in-the-windows-security-app.jpg) 

 Additionally, if you intend to permanently disable Defender Antivirus to install a third-party security application, you must reconsider your choice. This is because when you install a compatible [non-Microsoft antivirus program](https://video-capture.techidaily.com/2024-approved-nvidia-game-capturer-simple-gaming-sessions/), Microsoft Defender antivirus will automatically disable itself. Compatible non-Microsoft antivirus programs are those that do not cause any issues when installed alongside Windows Defender.

 Luckily, there are numerous [antivirus programs](https://facebook-video-recording.techidaily.com/in-2024-access-high-res-fb-media-files/) that are compatible with Microsoft. To verify compatibility, you should check the antivirus program’s user manual or inquire with the seller.

 However, if you wish to install a security program that is not compatible with Microsoft, you will need to disable Microsoft Defender Antivirus permanently.

 Now that you know when you should and should not permanently disable Microsoft Defender, let’s check out how you can permanently disable Microsoft Defender on Windows 11.

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2130533/26400" target="_top" id="2130533">
  <img src="//a.impactradius-go.com/display-ad/26400-2130533" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2130533/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Turn Off Real-Time Protection and Tamper Protection in the Windows Security App

 Unlike temporarily disabling Microsoft Defender Antivirus, permanently disabling it isn’t straightforward. First, you’ll need to disable Real-time and Tamper Protection in the Windows Security app.

 Disabling Real-time protection ensures that Microsoft Defender won’t scan any files on your computer. And disabling [Tamper Protection](https://some-techniques.techidaily.com/in-2024-harnessing-funimates-downloading-prowess-quickly/) allows you to make changes to the Microsoft Defender antivirus settings on your computer, which otherwise wouldn’t be possible. To turn off these settings, open the Start menu, type **Windows Security** in the search bar, and hit Enter.

![Typing Windows Security in the Start Menu search bar.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/typing-windows-defender-in-the-start-menu-search-bar.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135371/19272" target="_top" id="2135371">
  <img src="//a.impactradius-go.com/display-ad/19272-2135371" border="0" alt="https://techidaily.com" width="320" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135371/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Choose "Virus & Threat Protection" from the left sidebar, then click "Manage Settings" on the right.

![Virus & Threat Protection option in the Windows Security App.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/virus-threat-protection-option-in-the-windows-security-app.jpg) 

 Turn off the “Real-Time Protection” toggle. If UAC pops up, click “Yes” to confirm your decision.

![Real-time Protection toggle in the Windows Security app.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/real-time-protection-toggle-in-the-windows-security-app.jpg) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2130873/7443" target="_top" id="2130873">
  <img src="//a.impactradius-go.com/display-ad/7443-2130873" border="0" alt="https://techidaily.com" width="600" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2130873/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Next, disable the “Tamper Protection” toggle. Click “Yes” when the UAC prompt appears.

![Tamper Protection toggle in the Windows Security app.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/tamper-protection-toggle-in-the-windows-security-app.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1896546/19272" target="_top" id="1896546">
  <img src="//a.impactradius-go.com/display-ad/19272-1896546" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1896546/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Once you’ve adjusted these settings in the Windows Security app, you’re all set to disable Microsoft Defender Antivirus on Windows 11 permanently.

##  Disable Microsoft Defender Using the Registry Editor

 If you have Windows 11 Home installed on your computer, you can use the Registry Editor to disable Microsoft Defender permanently.

 Editing the registry is risky, as one wrong move can make your system unstable. As a precautionary measure, be sure to [back up the registry](https://screen-recording.techidaily.com/quick-start-guide-dells-simple-screen-recording-methods-for-2024/) and [create a restore point](https://instagram-video-files.techidaily.com/updated-in-2024-multiplying-joy-sharing-a-pile-of-photos-and-videos-with-instagram/). This way, you can [restore your computer](https://article-posts.techidaily.com/in-2024-proven-methods-to-infuse-engaging-dialogue-in-videos/) to a working state in case something goes wrong.

 Open the Start menu, type **Registry Editor** in the search bar, and hit Enter. Then, in the Registry Editor, navigate to the following path:

        `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`
    
 Right-click the “Windows Defender” key in the left sidebar, hover over “New,” and choose “DWORD (32-bit) Value”.

![Windows Defender Key in the Registry Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/windows-defender-key-in-the-registry-editor.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2012429/19272" target="_top" id="2012429">
  <img src="//a.impactradius-go.com/display-ad/19272-2012429" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2012429/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Name the value “DisableAntiSpyware.” Then, double-click the “DisableAntiSpyware” value, type **1** in the “Value Data” field, and click “OK.”

![Value Data field in the Registry Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/value-data-field-in-the-registry-editor.jpg) 

 After that, [restart your computer](https://instagram-clips.techidaily.com/2024-approved-15-must-use-hashtags-for-popularity-on-instagram-feed/) for the changes to take effect. Upon restart, you’ll see that Microsoft Defender has been permanently disabled on your computer.

 To reenable Microsoft Defender Antivirus, type **0** in the “Value Data” field of the “DisableAntiSpyware” value and click “OK.” Afterward, you’ll need to enable “Real-time Protection” and “Tamper Protection” in the Windows Security app, too. 

![Enabling Windows Defender through Registry Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/enabling-windows-defender-through-registry-editor.jpg) 

##  Disable Microsoft Defender Using the Local Group Policy Editor

 If you are a Windows 11 Pro user, you have an additional option to permanently disable Microsoft Defender. While you can use the Registry Editor for this process, as a Pro user, you also have the option to use Local Group Policy Editor.

 Press Win+R to open the Run tool. Then, type **gpedit.msc** in the search field and click “OK.”

![Gpedit.msc command in the Run tool.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/gpedit-msc-command-in-the-run-tool.jpg) 

 In the Local Group Policy Editor window, navigate to the following location:

        `Computer Configuration > Administrative Templates > Windows Components > Microsoft Defender Antivirus`
    
 Double-click the “Turn Off Microsoft Defender Antivirus” policy.

![Turn Off Microsoft Defender Antivirus policy in the Local Group Policy Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/turn-off-microsoft-defender-antivirus-policy-in-the-local-group-policy-editor.jpg) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2151873/7443" target="_top" id="2151873">
  <img src="//a.impactradius-go.com/display-ad/7443-2151873" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2151873/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 In the Edit window, choose “Enabled.” Then, click “Apply” and “OK” to save the changes.

![Enabled option in the Local Group Policy Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/enabled-option-in-the-local-group-policy-editor.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2087239/19272" target="_top" id="2087239">
  <img src="//a.impactradius-go.com/display-ad/19272-2087239" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2087239/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 That’s it! Restart your computer, and you’ll see that Microsoft Defender is disabled.

 If you want to enable Microsoft Defender in the future, set the “Turn Off Microsoft Defender Antivirus” policy to “Disable.” After that, turn on the “Real-time Protection” and “Tamper Protection” toggles in the Windows Security app."

![Disabled option in the Local Group Policy Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/disabled-option-in-the-local-group-policy-editor.jpg) 

##  How to Check the State of Microsoft Defender on Windows 11

 Once you’ve disabled Microsoft Defender using the above method, you must check its state to confirm if it has actually been disabled. To do this, open the Start menu, type **PowerShell** in the search bar, and press Enter. Then, in the PowerShell window, type the following command and hit Enter:

        `Get-MpComputerStatus | select AMRunningMode`
    
 If you get “Not Running” as the result, then it confirms that you have disabled Microsoft Defender.

![PowerShell window showing Not Running in result.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/powershell-window-showing-not-running-in-result.jpg) 

 However, if you get “Normal” as the result, it means Microsoft Defender is still running on your computer. In this case, double-check that you followed the steps correctly.

![PowerShell window showing Normal in result.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/powershell-window-showing-normal-in-result.jpg) 

---

 Microsoft opted for the longer process to permanently disable Microsoft Defender instead of providing a one-click button to ensure computer safety. Even though it might be tempting, you really should disable it unless you absolutely need to.

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
<li><a href="https://vimeo-videos.techidaily.com/new-2024-approved-the-art-of-concluding-videos-crafting-impactful-vimeo-ends/"><u>[New] 2024 Approved The Art of Concluding Videos Crafting Impactful Vimeo Ends</u></a></li>
<li><a href="https://digital-screen-recording.techidaily.com/updated-side-by-side-display-logging/"><u>[Updated] Side-by-Side Display Logging</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-key-to-unlocking-the-best-video-production-talents/"><u>[Updated] The Key to Unlocking the Best Video Production Talents</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-path-to-success-starts-on-screen-10-must-see-films/"><u>[Updated] The Path to Success Starts on Screen 10 Must-See Films</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-hd-cameras-for-wildlife-enthusiasts/"><u>[Updated] Top HD Cameras For Wildlife Enthusiasts</u></a></li>
<li><a href="https://some-knowledge.techidaily.com/2024-approved-excellent-4k-cameras-and-their-perfect-gimbals/"><u>2024 Approved Excellent 4K Cameras & Their Perfect Gimbals</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-tutorial-transforming-images-into-engaging-gifs/"><u>2024 Approved Tutorial Transforming Images Into Engaging GIFs</u></a></li>
<li><a href="https://buynow-reviews.techidaily.com/affordable-mobvoi-ticwatch-e2-assessment-is-it-worth-the-price/"><u>Affordable Mobvoi TicWatch E2 Assessment - Is It Worth the Price?</u></a></li>
<li><a href="https://ios-location-track.techidaily.com/best-anti-tracker-software-for-apple-iphone-15-pro-drfone-by-drfone-virtual-ios/"><u>Best Anti Tracker Software For Apple iPhone 15 Pro | Dr.fone</u></a></li>
<li><a href="https://location-social.techidaily.com/in-2024-how-to-activate-and-use-life360-ghost-mode-on-nokia-c32-drfone-by-drfone-virtual-android/"><u>In 2024, How To Activate and Use Life360 Ghost Mode On Nokia C32 | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-techniques-for-correcting-motion-blur-from-drones/"><u>In 2024, Techniques for Correcting Motion Blur From Drones</u></a></li>
<li><a href="https://facebook-video-recording.techidaily.com/in-2024-uncover-and-revive-inaudible-fb-video-posts-the-ultimate-list-of-12-fixes/"><u>In 2024, Uncover & Revive Inaudible FB Video Posts – The Ultimate List of 12 Fixes</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-image-clarity-techniques-for-online-cropping/"><u>In 2024, Unlocking Image Clarity Techniques for Online Cropping</u></a></li>
<li><a href="https://some-skills.techidaily.com/synchronized-squawks-and-soarings-the-bebop-parrot-review-for-2024/"><u>Synchronized Squawks & Soarings The Bebop Parrot Review for 2024</u></a></li>
<li><a href="https://driver-install.techidaily.com/tp-link-usb-wi-fi-adapter-windows-get-it-free-today/"><u>TP Link USB Wi-Fi Adapter: Windows, Get It Free Today</u></a></li>
<li><a href="https://hardware-tips.techidaily.com/unveiling-the-latest-in-hardware-discoveries-from-toms-world-of-technology/"><u>Unveiling the Latest in Hardware - Discoveries From Tom's World of Technology</u></a></li>
</ul></div>

