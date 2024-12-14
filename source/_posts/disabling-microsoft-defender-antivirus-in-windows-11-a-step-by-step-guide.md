---
title: "Disabling Microsoft Defender Antivirus in Windows 11: A Step-by-Step Guide"
date: 2024-12-10T03:46:09.840Z
updated: 2024-12-13T22:58:19.842Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://thmb.techidaily.com/7d0feaf90637aa15b789896b9b4144f8ee9d0a1514b5ec2518db335a12809dc5.jpg
---

## Disabling Microsoft Defender Antivirus in Windows 11: A Step-by-Step Guide

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/uSfA74aeYeA?si=HdJSMdeS7HVtS6-j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/iLlpdv0cz_k?si=HwTdnMmeVJXm4GPV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  When Should You Permanently Disable Microsoft Defender Antivirus 

 Microsoft Defender Antivirus provides various protection features, including real-time protection, cloud-delivered protection, network protection, and more. When you disable Microsoft Defender, you lose access to all these protections, leaving your computer at risk.

 Generally, you should avoid disabling Microsoft Defender Antivirus. However, if the need arises—for example, when you need to install an application that Defender is blocking—you can [temporarily turn it off](https://tech-renaissance.techidaily.com/what-is-the-difference-between-an-ipad-and-a-tablet/). To do so, [turn off Real-time protection](https://desktop-recording.techidaily.com/new-record-gameplay-in-samsung-galaxy-phones-for-2024/) in the Windows Security app, install the application, and then re-enable Real-time protection.

![Real-time Protection toggle disabled in the Windows Security app.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/real-time-protection-toggle-disabled-in-the-windows-security-app.jpg) 

 Additionally, if you intend to permanently disable Defender Antivirus to install a third-party security application, you must reconsider your choice. This is because when you install a compatible [non-Microsoft antivirus program](https://video-capture.techidaily.com/2024-approved-nvidia-game-capturer-simple-gaming-sessions/), Microsoft Defender antivirus will automatically disable itself. Compatible non-Microsoft antivirus programs are those that do not cause any issues when installed alongside Windows Defender.

 Luckily, there are numerous [antivirus programs](https://facebook-video-recording.techidaily.com/in-2024-access-high-res-fb-media-files/) that are compatible with Microsoft. To verify compatibility, you should check the antivirus program’s user manual or inquire with the seller.

 However, if you wish to install a security program that is not compatible with Microsoft, you will need to disable Microsoft Defender Antivirus permanently.

 Now that you know when you should and should not permanently disable Microsoft Defender, let’s check out how you can permanently disable Microsoft Defender on Windows 11.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/2En1CHbiYwA?si=jZKzTr9EIT2ShjGK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Turn Off Real-Time Protection and Tamper Protection in the Windows Security App

 Unlike temporarily disabling Microsoft Defender Antivirus, permanently disabling it isn’t straightforward. First, you’ll need to disable Real-time and Tamper Protection in the Windows Security app.

 Disabling Real-time protection ensures that Microsoft Defender won’t scan any files on your computer. And disabling [Tamper Protection](https://some-techniques.techidaily.com/in-2024-harnessing-funimates-downloading-prowess-quickly/) allows you to make changes to the Microsoft Defender antivirus settings on your computer, which otherwise wouldn’t be possible. To turn off these settings, open the Start menu, type **Windows Security** in the search bar, and hit Enter.

![Typing Windows Security in the Start Menu search bar.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/typing-windows-defender-in-the-start-menu-search-bar.jpg) 

 Choose "Virus & Threat Protection" from the left sidebar, then click "Manage Settings" on the right.

![Virus & Threat Protection option in the Windows Security App.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/virus-threat-protection-option-in-the-windows-security-app.jpg) 

 Turn off the “Real-Time Protection” toggle. If UAC pops up, click “Yes” to confirm your decision.

![Real-time Protection toggle in the Windows Security app.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/real-time-protection-toggle-in-the-windows-security-app.jpg) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/iPCr_bxZjMQ?si=ubOsoq5umPEXL9xL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Next, disable the “Tamper Protection” toggle. Click “Yes” when the UAC prompt appears.

![Tamper Protection toggle in the Windows Security app.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/tamper-protection-toggle-in-the-windows-security-app.jpg) 

 Once you’ve adjusted these settings in the Windows Security app, you’re all set to disable Microsoft Defender Antivirus on Windows 11 permanently.

##  Disable Microsoft Defender Using the Registry Editor

 If you have Windows 11 Home installed on your computer, you can use the Registry Editor to disable Microsoft Defender permanently.

 Editing the registry is risky, as one wrong move can make your system unstable. As a precautionary measure, be sure to [back up the registry](https://screen-recording.techidaily.com/quick-start-guide-dells-simple-screen-recording-methods-for-2024/) and [create a restore point](https://instagram-video-files.techidaily.com/updated-in-2024-multiplying-joy-sharing-a-pile-of-photos-and-videos-with-instagram/). This way, you can [restore your computer](https://article-posts.techidaily.com/in-2024-proven-methods-to-infuse-engaging-dialogue-in-videos/) to a working state in case something goes wrong.

 Open the Start menu, type **Registry Editor** in the search bar, and hit Enter. Then, in the Registry Editor, navigate to the following path:

        `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows Defender`
    
 Right-click the “Windows Defender” key in the left sidebar, hover over “New,” and choose “DWORD (32-bit) Value”.

![Windows Defender Key in the Registry Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/windows-defender-key-in-the-registry-editor.jpg) 

 Name the value “DisableAntiSpyware.” Then, double-click the “DisableAntiSpyware” value, type **1** in the “Value Data” field, and click “OK.”

![Value Data field in the Registry Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/value-data-field-in-the-registry-editor.jpg) 

 After that, [restart your computer](https://instagram-clips.techidaily.com/2024-approved-15-must-use-hashtags-for-popularity-on-instagram-feed/) for the changes to take effect. Upon restart, you’ll see that Microsoft Defender has been permanently disabled on your computer.

 To reenable Microsoft Defender Antivirus, type **0** in the “Value Data” field of the “DisableAntiSpyware” value and click “OK.” Afterward, you’ll need to enable “Real-time Protection” and “Tamper Protection” in the Windows Security app, too. 

![Enabling Windows Defender through Registry Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/enabling-windows-defender-through-registry-editor.jpg) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/JlX-G8rBs1w?si=iIhUoWAq5x3YK9rA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Disable Microsoft Defender Using the Local Group Policy Editor

 If you are a Windows 11 Pro user, you have an additional option to permanently disable Microsoft Defender. While you can use the Registry Editor for this process, as a Pro user, you also have the option to use Local Group Policy Editor.

 Press Win+R to open the Run tool. Then, type **gpedit.msc** in the search field and click “OK.”

![Gpedit.msc command in the Run tool.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/gpedit-msc-command-in-the-run-tool.jpg) 

 In the Local Group Policy Editor window, navigate to the following location:

        `Computer Configuration > Administrative Templates > Windows Components > Microsoft Defender Antivirus`
    
 Double-click the “Turn Off Microsoft Defender Antivirus” policy.

![Turn Off Microsoft Defender Antivirus policy in the Local Group Policy Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/turn-off-microsoft-defender-antivirus-policy-in-the-local-group-policy-editor.jpg) 

 In the Edit window, choose “Enabled.” Then, click “Apply” and “OK” to save the changes.

![Enabled option in the Local Group Policy Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/enabled-option-in-the-local-group-policy-editor.jpg) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/XIUatTFH0Zw?si=ZCtoBtIy18y2F5Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 That’s it! Restart your computer, and you’ll see that Microsoft Defender is disabled.

 If you want to enable Microsoft Defender in the future, set the “Turn Off Microsoft Defender Antivirus” policy to “Disable.” After that, turn on the “Real-time Protection” and “Tamper Protection” toggles in the Windows Security app."

![Disabled option in the Local Group Policy Editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/disabled-option-in-the-local-group-policy-editor.jpg) 

##  How to Check the State of Microsoft Defender on Windows 11

 Once you’ve disabled Microsoft Defender using the above method, you must check its state to confirm if it has actually been disabled. To do this, open the Start menu, type **PowerShell** in the search bar, and press Enter. Then, in the PowerShell window, type the following command and hit Enter:

        `Get-MpComputerStatus | select AMRunningMode`
    
 If you get “Not Running” as the result, then it confirms that you have disabled Microsoft Defender.

![PowerShell window showing Not Running in result.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/powershell-window-showing-not-running-in-result.jpg) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/JNxZ4Z6BVCg?si=522oz1OPSQDhNYWT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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
<li><a href="https://some-skills.techidaily.com/new-strategizing-effective-movie-sneak-peeks/"><u>[New] Strategizing Effective Movie Sneak Peeks</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-10-criteria-for-choosing-a-premier-streamer-network/"><u>[New] Top 10 Criteria for Choosing a Premier Streamer Network</u></a></li>
<li><a href="https://fox-boxes.techidaily.com/updated-2024-approved-the-quintessential-ten-hexa-flights/"><u>[Updated] 2024 Approved The Quintessential Ten Hexa-Flights</u></a></li>
<li><a href="https://twitter-videos.techidaily.com/updated-in-2024-secrets-to-effective-targeted-tweets/"><u>[Updated] In 2024, Secrets to Effective Targeted Tweets</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-complete-guide-to-itunes-podcast-upload/"><u>[Updated] The Complete Guide to iTunes Podcast Upload</u></a></li>
<li><a href="https://some-techniques.techidaily.com/2024-approved-game-masters-guide-to-4k-monitors/"><u>2024 Approved Game Masters' Guide to 4K Monitors</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-guide-to-manipulating-image-shapes/"><u>2024 Approved The Ultimate Guide to Manipulating Image Shapes</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-tips-for-efficient-macos-sierra-system-updates/"><u>2024 Approved Top Tips for Efficient macOS Sierra System Updates</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unveiling-figmas-bg-elimination-mastery/"><u>2024 Approved Unveiling Figma's BG Elimination Mastery</u></a></li>
<li><a href="https://youtube-webster.techidaily.com/fying-your-brand-the-famebit-approach-to-youtube-affiliates/"><u>Amplifying Your Brand The FameBit Approach to YouTube Affiliates</u></a></li>
<li><a href="https://youtube-help.techidaily.com/explore-the-world-of-tiny-screens-top-6-online-tools-for-free-and-complimentary-youtube-short-downloads-for-2024/"><u>Explore the World of Tiny Screens Top 6 Online Tools for Free & Complimentary YouTube Short Downloads for 2024</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-2-ways-to-monitor-vivo-y200-activity-drfone-by-drfone-virtual-android/"><u>In 2024, 2 Ways to Monitor Vivo Y200 Activity | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-drone-editors-playbook-a-comprehensive-guide/"><u>In 2024, The Drone Editor's Playbook A Comprehensive Guide</u></a></li>
<li><a href="https://extra-information.techidaily.com/power-up-your-gym-sessions-with-these-top-20-songs/"><u>Power Up Your Gym Sessions with These Top 20 Songs</u></a></li>
<li><a href="https://some-skills.techidaily.com/tailored-touch-up-top-6-apps-to-exclude-unwanted-elements-from-photos-for-2024/"><u>Tailored Touch-Up Top 6 Apps to Exclude Unwanted Elements From Photos for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-next-step-for-gopro-cameras-hero4-hero5-for-2024/"><u>The Next Step for GoPro Cameras (Hero4, Hero5) for 2024</u></a></li>
<li><a href="https://novels-ebooks.techidaily.com/210932807-9781855843271-the-second-coming-of-christ/"><u>The Second Coming of Christ | Free Book</u></a></li>
<li><a href="https://hardware-help.techidaily.com/troubleshooting-and-resolving-asus-pce-ac56-driver-challenges-in-win-10-8-and-7-a-comprehensive-fix/"><u>Troubleshooting and Resolving ASUS PCE-AC56 Driver Challenges in Win 10, 8 & 7 - A Comprehensive Fix!</u></a></li>
<li><a href="https://technical-tips.techidaily.com/unraveling-the-mystery-behind-oleaut32dll-absence-and-how-to-rectify-it/"><u>Unraveling the Mystery Behind OleAut32.dll Absence & How to Rectify It</u></a></li>
</ul></div>

