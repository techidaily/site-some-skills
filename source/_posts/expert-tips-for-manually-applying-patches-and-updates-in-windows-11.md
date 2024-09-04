---
title: Expert Tips for Manually Applying Patches and Updates in Windows 11
date: 2024-09-03T10:46:56.341Z
updated: 2024-09-04T10:46:56.341Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/a-person-using-a-laptop-with-windows-11-installing-updates.jpg
---

## Expert Tips for Manually Applying Patches and Updates in Windows 11

### Quick Links

* [If Your Updates Failed, Clear the Downloaded Updates First](https://on-screen-recording.techidaily.com/new-top-tier-strategies-mastering-screens-with-adobe-captivate/)
* [From Windows Settings](https://extra-approaches.techidaily.com/new-pioneering-perspectives-on-first-moments-in-audio/)
* [From Microsoft Update Catalog](https://fox-cloud.techidaily.com/new-perfect-picture-playback-selecting-the-top-8k-panels-for-2024/)
* [Using Command Prompt](https://youtube-data.techidaily.com/ed-in-2024-famebit-alternatives-for-finding-youtube-sponsorships/)
* [Using Windows PowerShell](https://youtube-webster.techidaily.com/ed-instant-influence-youtubes-hourly-video-tops-for-2024/)

### Key Takeaways

* First, clear the downloaded update files by stopping the Windows Update service and removing all files from the Windows Update cache folder.
* Then, use the options on the Settings > Windows Update screen to force install the available updates. Another way is to manually grab updates from Microsoft Update Catalog and install those updates.
* You can also use a command in Command Prompt or a cmdlet in PowerShell to find and install the available Windows updates.

 If automatic updates have failed to install, you have alternate ways to manually update your Windows 11 PC. We’ll show you the available methods, so you can get the latest bug fixes and possibly new features on your computer. Let’s get started.

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1880960/19272" target="_top" id="1880960">
  <img src="//a.impactradius-go.com/display-ad/19272-1880960" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1880960/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  If Your Updates Failed, Clear the Downloaded Updates First

 Before using alternate update methods, [remove the downloaded update files](https://techno-recovery.techidaily.com/troubleshooting-guide-what-to-do-when-your-amazon-firestick-remote-fails/) to prevent any potential issues. The alternate methods will re-download the required update files anyway, so you won’t lose anything.

 To clear the Windows Update cache, launch Run by pressing Windows+R. Type the following in the box and press Enter or select "OK."

        `services.msc`
    
!['services.msc' typed in Run.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/1-open-services-window.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1880931/19272" target="_top" id="1880931">
  <img src="//a.impactradius-go.com/display-ad/19272-1880931" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1880931/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 In the Services window, find the "Windows Update" service, then right-click the service and choose "Stop." If you don’t stop this service, Windows won’t let you clear the update cache, since the files will be "in use." 

 If the Windows Update service fails to stop, restart your PC and try again.

!['Stop' selected for the Windows Update service.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/2-stop-windows-update-service.jpg) 

 Keep the Services window open, as you’ll return here shortly. Open the Run dialog box again by pressing Windows+R. Type the following path in the box and press Enter. If you’ve installed Windows on a drive other than C, replace the drive letter in the path.

        `C:\Windows\SoftwareDistribution\`
    
 You’re now in the Windows Update cache folder. Select all files here by pressing Ctrl+A, right-click any of the selected files, and choose the trash can icon.

![The trash can icon selected for the Windows Update cache files.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/3-clear-windows-update-cache.jpg) 

 You’ve removed all the update files. Close File Explorer, return to the Services window, right-click the "Windows Update" service, and choose "Start."

!['Start' selected for the Windows Update service.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/4-start-windows-update-service.jpg) 

 You’re set.

##  From Windows Settings

 One way to force updates to install is by using the Settings app. Here, you can choose whether to install the available updates or only specific ones.

 To use this method, launch Settings by pressing Windows+i. At the bottom of the left sidebar, choose "Windows Update."

!['Windows Update' highlighted in Settings.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/5-windows-update-settings.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2036472/19272" target="_top" id="2036472">
  <img src="//a.impactradius-go.com/display-ad/19272-2036472" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2036472/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 On the right pane, click "Download & Install All" to download and install the available updates. To only download and install specific updates, click the button next to those updates.

!['Download & Install All' highlighted on the Windows Update screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/6-download-install-all-windows-updates.jpg) 

 Wait while Windows obtains and installs the selected updates, then [reboot your Windows 11 PC](https://screen-video-capture.techidaily.com/updated-in-2024-addressing-mute-problems-in-obs-live-recording/).

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2130871/7443" target="_top" id="2130871">
  <img src="//a.impactradius-go.com/display-ad/7443-2130871" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2130871/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  From Microsoft Update Catalog

[Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Home.aspx) is a site where you can find and download any Windows update you want. This allows you to manually download an update and then install that update on your PC—all without using the Windows Update feature.

 To use this method, find the name of the update you want to download. You can find this information on the Settings > Windows Update page. The update names usually start with _KB_.

![Multiple updates highlighted on the Windows Update screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/7-find-windows-update-name.jpg) 

 Then, launch a web browser and head to the [Microsoft Update Catalog site](https://www.catalog.update.microsoft.com/Home.aspx). Select the site’s search box, type the update name you noted, and press Enter or select "Search."

![An update name typed in the search box on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/8-find-windows-update.jpg) 

 On the following screen, find the exact update and click "Download" next to that update.

!['Download' highlighted for an update on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/9-choose-windows-update.jpg) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2052060/7443" target="_top" id="2052060">
  <img src="//a.impactradius-go.com/display-ad/7443-2052060" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2052060/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 In the open window, click the update name to begin downloading the update to your PC. The download can take anywhere from a few seconds to several minutes, depending on the update size and your internet connection speed.

![An update name highlighted on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/10-download-windows-update.jpg) 

<!-- affiliate ads begin -->
<iframe id="iframe_1424533" src="//a.impactradius-go.com/gen-ad-code/5597632/1424533/16446" width="728" height="90" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
<!-- affiliate ads end -->
 After downloading the update, run the update file and follow the on-screen instructions. The file will extract the update files and install the update on your system.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2082527/7443" target="_top" id="2082527">
  <img src="//a.impactradius-go.com/display-ad/7443-2082527" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2082527/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Using Command Prompt

 Command Prompt offers a command that you can use to install an already-downloaded update on your PC. This is a great method to use when your update fails to install via the graphical user interface (GUI).

 To use this method, head over to the [Microsoft Update Catalog site](https://www.catalog.update.microsoft.com/Home.aspx). Select the search box, type the update name, and press Enter or select "Search."

 Find the update to download on the list and click "Download" next to the update. In the open window, select the update name to save the update to your computer.

 After successfully downloading the update, [open Command Prompt](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do this by pressing the Windows key, typing **Command Prompt**, and selecting "Run as Administrator."

!['Run as Administrator' highlighted for Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/11-launch-cmd-as-admin.jpg) 

 In the User Account Control prompt, select "Yes."

 In Command Prompt, type the following command replacing **UPDATE** with [the full path to the update file](https://article-posts.techidaily.com/updated-maximizing-visual-variety-with-b-roll-elements-for-2024/) you downloaded. Then, press Enter.

        `wusa UPDATE /quiet /norestart`
    
 As an example, I’ll run the following command to install an update that I’ve downloaded:

        `wusa "C:\Users\mahes\Downloads\windows11.0-kb5040527-x64_4713766dc272c376bee6d39d39a84a85bcd7f1e7.msu" /quiet /norestart`
    
![The command to install a Windows update typed in Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/12-install-windows-update-cmd.jpg) 

<!-- affiliate ads begin -->
<a href="https://laganoo.pxf.io/c/5597632/1528688/16446" target="_top" id="1528688">
  <img src="//a.impactradius-go.com/display-ad/16446-1528688" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://laganoo.pxf.io/i/5597632/1528688/16446" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 Run the following command to check if the update was successfully installed:

        `wmic qfe list brief /format:pagele`
    
 If the update was successfully installed, [restart your PC by running the following command](https://screen-activity-recording.techidaily.com/updated-the-ultimate-guide-to-mac-based-sound-capture-in-audacity-for-2024/). This brings the new changes into effect.

 Make sure to save any unsaved work before you run the command.

        `shutdown /r /t 00`
    
 And your Windows PC is now up-to-date.

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1959712/19272" target="_top" id="1959712">
  <img src="//a.impactradius-go.com/display-ad/19272-1959712" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1959712/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Using Windows PowerShell

 PowerShell allows you to find all the available updates for your PC and then download and install those updates. Unlike with Command Prompt, you don’t need to manually download the updates first.

 To use this method, open Windows Search, type **PowerShell**, and select "Run as Administrator." In the User Account Control prompt, select "Yes."

!['Run as Administrator' highlighted for PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/13-launch-powershell-as-admin.jpg) 

 In PowerShell, type the following command (called a [cmdlet](https://extra-guidance.techidaily.com/new-prophotomaster-the-ai-enhanced-editing-edge/)) and press Enter. This cmdlet installs the Windows Update module to allow you to manage Windows updates from PowerShell.

        `Install-Module PSWindowsUpdate`
    
![The cmdlet to install the Windows Update module typed in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/14-install-windows-update-module-powershell.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1902324/19272" target="_top" id="1902324">
  <img src="//a.impactradius-go.com/display-ad/19272-1902324" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1902324/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 When PowerShell prompts, type **Y** and press Enter. Then, run the following cmdlet, type **Y**, and press Enter:

        `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
    
 Next up, use the following cmdlet to launch the newly-installed module:

        `Import-Module PSWindowsUpdate`
    
 Find the available Windows updates by running the following cmdlet:

        `Get-WindowsUpdate`
    
![The cmdlet to find the latest Windows updates typed in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/15-find-windows-updates-powershell.jpg) 

 To download and install all the available updates, use the following cmdlet:

        `Install-WindowsUpdate`
    
 To download and install a specific update, use the following cmdlet. Make sure to replace _UPDATENUMBER_ with the update to install in the cmdlet.

        `Install-WindowsUpdate -KBArticleID UPDATENUMBER`
    
![The cmdlet to install a specific Windows update typed in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/16-install-windows-update-powershell.jpg) 

 PowerShell will install all or select updates (as you specified). Then, give your PC a restart to bring the changes into effect.

---

 And that’s how you overcome the automatic update issues and get the latest updates on your Windows 11 computer. Enjoy!

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
<li><a href="https://youtube-docs.techidaily.com/-practical-approach-to-creating-captivating-youtube-shorts-templates-for-2024/"><u>[New] A Practical Approach to Creating Captivating YouTube Shorts Templates for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-tooninnovate-master-review-year-2024-edition/"><u>[New] ToonInnovate Master Review - Year 2024 Edition</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-considerations-for-enhancing-your-4k-cinematic-quality/"><u>[New] Top Considerations for Enhancing Your 4K Cinematic Quality</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-understanding-the-mechanics-of-whatsapp-voice-conversations/"><u>[New] Understanding the Mechanics of WhatsApp Voice Conversations</u></a></li>
<li><a href="https://some-approaches.techidaily.com/new-unlock-the-power-of-podcasts-15-activities-that-blend-multitasking-and-growth/"><u>[New] Unlock the Power of Podcasts  15 Activities that Blend Multitasking and Growth</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unveiling-the-art-of-masterful-job-interview-execution/"><u>[New] Unveiling the Art of Masterful Job Interview Execution</u></a></li>
<li><a href="https://screen-activity-recording.techidaily.com/updated-in-2024-maximizing-play-in-apex-legends-without-cross-platform-limitations/"><u>[Updated] In 2024, Maximizing Play in Apex Legends Without Cross-Platform Limitations</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-spectrum-enhanced-by-blades-newest-quad-hd-cameras/"><u>[Updated] The Spectrum Enhanced by Blade's Newest Quad-HD Cameras</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-tips-for-optimal-frame-rate-manipulation/"><u>[Updated] Top Tips for Optimal Frame Rate Manipulation</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unlocking-hidden-details-roblox-closeup-secrets/"><u>[Updated] Unlocking Hidden Details  Roblox Closeup Secrets</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unveiling-adobes-storage-mastery-and-the-hunt-for-top-non-adobe-backup-services/"><u>[Updated] Unveiling Adobe's Storage Mastery & The Hunt for Top Non-Adobe Backup Services</u></a></li>
<li><a href="https://youtube-tips.techidaily.com/approved-leveraging-video-features-annotations-and-cards/"><u>2024 Approved  Leveraging Video Features  Annotations & Cards</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-streamline-your-media-with-top-8-convertors-1-8/"><u>2024 Approved  Streamline Your Media with Top 8 Convertors #1-8</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-prime-monitor-companion-for-gaming-on-xbox-series-x/"><u>2024 Approved  The Prime Monitor Companion for Gaming on Xbox Series X</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-tips-for-adding-personalized-audio-effects-to-windows-10-photos/"><u>2024 Approved  Tips for Adding Personalized Audio Effects to Windows 10 Photos</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-notch-tricks-to-nail-every-green-screen-shot/"><u>2024 Approved  Top-Notch Tricks to Nail Every Green Screen Shot</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-ultimate-black-battery-compatibility-with-gopro-hero5/"><u>2024 Approved  Ultimate Black Battery Compatibility with GoPro Hero5</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-uncovering-average-earnings-podcaster-edition/"><u>2024 Approved  Uncovering Average Earnings  Podcaster Edition</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unparalleled-pc-sound-control/"><u>2024 Approved  Unparalleled PC Sound Control</u></a></li>
<li><a href="https://article-posts.techidaily.com/assessing-ffmpegs-prowess-in-original-audio-extraction/"><u>Assessing FFmpeg’s Prowess in Original Audio Extraction</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-get-back-lost-contacts-from-huawei-nova-y71-by-fonelab-android-recover-contacts/"><u>How to get back lost contacts from Huawei Nova Y71.</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-retrieve-deleted-photos-on-gt-neo-5-se-by-stellar-photo-recovery-android-mobile-photo-recover/"><u>How to Retrieve deleted photos on GT Neo 5 SE</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/in-2024-all-you-need-to-know-about-mega-greninja-for-zte-blade-a73-5g-drfone-by-drfone-virtual-android/"><u>In 2024, All You Need To Know About Mega Greninja For ZTE Blade A73 5G | Dr.fone</u></a></li>
<li><a href="https://facebook-video-files.techidaily.com/in-2024-harness-the-power-of-analytics-to-rise-in-fan-counts/"><u>In 2024, Harness the Power of Analytics to Rise in Fan Counts</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-future-of-flying-games-mavic-air-vs-dji-spark-showdown/"><u>In 2024, The Future of Flying Games  Mavic Air Vs. DJI Spark Showdown</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-path-to-insta-prominence-unveiling-9-key-moves-for-fame-seekers/"><u>In 2024, The Path to Insta Prominence  Unveiling 9 Key Moves for Fame Seekers</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-ultimate-blueprint-for-flawless-srt-construction/"><u>In 2024, The Ultimate Blueprint for Flawless SRT Construction</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-through-the-viewfinder-tips-for-artistic-photo-edits/"><u>In 2024, Through the Viewfinder  Tips for Artistic Photo Edits</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-top-techniques-for-incorporating-hyperlinks-into-tiktok-profiles/"><u>In 2024, Top Techniques for Incorporating Hyperlinks Into TikTok Profiles</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-money-potential-a-beginners-guide-on-periscope/"><u>In 2024, Unlocking Money Potential  A Beginner's Guide on Periscope</u></a></li>
<li><a href="https://extra-hints.techidaily.com/interactive-media-meets-brand-partnerships-on-youtube/"><u>Interactive Media Meets Brand Partnerships on YouTube</u></a></li>
<li><a href="https://win-dash.techidaily.com/1722977430713-keep-your-msi-x470-gaming-plus-updated-download-compatible-drivers-today/"><u>Keep Your MSI X470 Gaming Plus Updated - Download Compatible Drivers Today</u></a></li>
<li><a href="https://twitter-videos.techidaily.com/mastering-twitter-videos-adhere-to-aspect-ratio-rules-for-2024/"><u>Mastering Twitter Videos  Adhere to Aspect Ratio Rules for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-art-of-amusement-master-memes-with-kapwing-for-2024/"><u>The Art of Amusement – Master Memes with Kapwing for 2024</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/the-best-of-the-best-unrivaled-business-strategy-games-guide/"><u>The Best of the Best  Unrivaled Business Strategy Games' Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-step-by-step-for-adding-a-link-in-your-tiktok-bios-for-2024/"><u>The Ultimate Step-by-Step for Adding a Link in Your TikTok Bios for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-10-live-audio-broadcast-networks-for-2024/"><u>Top 10 Live Audio Broadcast Networks for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unleash-windows-11-potential-latest-apps-and-games-for-2024/"><u>Unleash Windows 11 Potential  Latest Apps & Games for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/venturing-into-video-production-top-5-mac-videographers-for-2024/"><u>Venturing Into Video Production? Top 5 Mac Videographers for 2024</u></a></li>
</ul></div>
