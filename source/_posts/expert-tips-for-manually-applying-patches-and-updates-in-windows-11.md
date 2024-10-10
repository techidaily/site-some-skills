---
title: Expert Tips for Manually Applying Patches and Updates in Windows 11
date: 2024-10-04T04:05:06.121Z
updated: 2024-10-09T16:28:08.946Z
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

<!-- affiliate ads begin -->
<span id="1982508">
					<video width="576" height="240" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1982508.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1982508">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1982508.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:360px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1982508%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1982508/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

### Key Takeaways

* First, clear the downloaded update files by stopping the Windows Update service and removing all files from the Windows Update cache folder.
* Then, use the options on the Settings > Windows Update screen to force install the available updates. Another way is to manually grab updates from Microsoft Update Catalog and install those updates.
* You can also use a command in Command Prompt or a cmdlet in PowerShell to find and install the available Windows updates.

 If automatic updates have failed to install, you have alternate ways to manually update your Windows 11 PC. We’ll show you the available methods, so you can get the latest bug fixes and possibly new features on your computer. Let’s get started.

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1902273/19272" target="_top" id="1902273">
  <img src="//a.impactradius-go.com/display-ad/19272-1902273" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1902273/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  If Your Updates Failed, Clear the Downloaded Updates First

 Before using alternate update methods, [remove the downloaded update files](https://techno-recovery.techidaily.com/troubleshooting-guide-what-to-do-when-your-amazon-firestick-remote-fails/) to prevent any potential issues. The alternate methods will re-download the required update files anyway, so you won’t lose anything.

 To clear the Windows Update cache, launch Run by pressing Windows+R. Type the following in the box and press Enter or select "OK."

        `services.msc`
    
!['services.msc' typed in Run.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/1-open-services-window.jpg) 

<!-- affiliate ads begin -->
<a href="https://jalbum-affiliate-program.sjv.io/c/5597632/1584040/17916" target="_top" id="1584040">
  <img src="//a.impactradius-go.com/display-ad/17916-1584040" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://jalbum-affiliate-program.sjv.io/i/5597632/1584040/17916" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 In the Services window, find the "Windows Update" service, then right-click the service and choose "Stop." If you don’t stop this service, Windows won’t let you clear the update cache, since the files will be "in use." 

 If the Windows Update service fails to stop, restart your PC and try again.

!['Stop' selected for the Windows Update service.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/2-stop-windows-update-service.jpg) 

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2123508/26400" target="_top" id="2123508">
  <img src="//a.impactradius-go.com/display-ad/26400-2123508" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2123508/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Keep the Services window open, as you’ll return here shortly. Open the Run dialog box again by pressing Windows+R. Type the following path in the box and press Enter. If you’ve installed Windows on a drive other than C, replace the drive letter in the path.

        `C:\Windows\SoftwareDistribution\`
    
 You’re now in the Windows Update cache folder. Select all files here by pressing Ctrl+A, right-click any of the selected files, and choose the trash can icon.

![The trash can icon selected for the Windows Update cache files.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/3-clear-windows-update-cache.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135363/19272" target="_top" id="2135363">
  <img src="//a.impactradius-go.com/display-ad/19272-2135363" border="0" alt="https://techidaily.com" width="120" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135363/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 You’ve removed all the update files. Close File Explorer, return to the Services window, right-click the "Windows Update" service, and choose "Start."

!['Start' selected for the Windows Update service.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/4-start-windows-update-service.jpg) 

 You’re set.

##  From Windows Settings

 One way to force updates to install is by using the Settings app. Here, you can choose whether to install the available updates or only specific ones.

 To use this method, launch Settings by pressing Windows+i. At the bottom of the left sidebar, choose "Windows Update."

!['Windows Update' highlighted in Settings.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/5-windows-update-settings.jpg) 

<!-- affiliate ads begin -->
<span id="1983582">
					<video width="576" height="240" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1983582.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1983582">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1983582.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:360px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1983582%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1983582/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 On the right pane, click "Download & Install All" to download and install the available updates. To only download and install specific updates, click the button next to those updates.

!['Download & Install All' highlighted on the Windows Update screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/6-download-install-all-windows-updates.jpg) 

 Wait while Windows obtains and installs the selected updates, then [reboot your Windows 11 PC](https://screen-video-capture.techidaily.com/updated-in-2024-addressing-mute-problems-in-obs-live-recording/).

##  From Microsoft Update Catalog

[Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Home.aspx) is a site where you can find and download any Windows update you want. This allows you to manually download an update and then install that update on your PC—all without using the Windows Update feature.

 To use this method, find the name of the update you want to download. You can find this information on the Settings > Windows Update page. The update names usually start with _KB_.

![Multiple updates highlighted on the Windows Update screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/7-find-windows-update-name.jpg) 

 Then, launch a web browser and head to the [Microsoft Update Catalog site](https://www.catalog.update.microsoft.com/Home.aspx). Select the site’s search box, type the update name you noted, and press Enter or select "Search."

![An update name typed in the search box on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/8-find-windows-update.jpg) 

 On the following screen, find the exact update and click "Download" next to that update.

!['Download' highlighted for an update on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/9-choose-windows-update.jpg) 

 In the open window, click the update name to begin downloading the update to your PC. The download can take anywhere from a few seconds to several minutes, depending on the update size and your internet connection speed.

![An update name highlighted on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/10-download-windows-update.jpg) 

 After downloading the update, run the update file and follow the on-screen instructions. The file will extract the update files and install the update on your system.

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

 Run the following command to check if the update was successfully installed:

        `wmic qfe list brief /format:pagele`
    
 If the update was successfully installed, [restart your PC by running the following command](https://screen-activity-recording.techidaily.com/updated-the-ultimate-guide-to-mac-based-sound-capture-in-audacity-for-2024/). This brings the new changes into effect.

 Make sure to save any unsaved work before you run the command.

        `shutdown /r /t 00`
    
 And your Windows PC is now up-to-date.

##  Using Windows PowerShell

 PowerShell allows you to find all the available updates for your PC and then download and install those updates. Unlike with Command Prompt, you don’t need to manually download the updates first.

 To use this method, open Windows Search, type **PowerShell**, and select "Run as Administrator." In the User Account Control prompt, select "Yes."

!['Run as Administrator' highlighted for PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/13-launch-powershell-as-admin.jpg) 

<!-- affiliate ads begin -->
<a href="https://unicoeye.pxf.io/c/5597632/2134495/18498" target="_top" id="2134495">
  <img src="//a.impactradius-go.com/display-ad/18498-2134495" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://unicoeye.pxf.io/i/5597632/2134495/18498" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 In PowerShell, type the following command (called a [cmdlet](https://extra-guidance.techidaily.com/new-prophotomaster-the-ai-enhanced-editing-edge/)) and press Enter. This cmdlet installs the Windows Update module to allow you to manage Windows updates from PowerShell.

        `Install-Module PSWindowsUpdate`
    
![The cmdlet to install the Windows Update module typed in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/14-install-windows-update-module-powershell.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2080328/19272" target="_top" id="2080328">
  <img src="//a.impactradius-go.com/display-ad/19272-2080328" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2080328/19272" style="position:absolute;visibility:hidden;" border="0" />
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
<li><a href="https://some-skills.techidaily.com/new-mastering-flight-a-look-at-dji-phantom-3-professional/"><u>[New] Mastering Flight A Look at DJI Phantom 3 Professional</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-synchronizing-melodies-with-inshot-clips/"><u>[New] Synchronizing Melodies with InShot Clips</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-complete-guide-to-mastering-powerdirector-software/"><u>[New] The Complete Guide to Mastering PowerDirector Software</u></a></li>
<li><a href="https://facebook-video-share.techidaily.com/new-top-11-video-recorders-that-save-money-without-sacrificing-performance/"><u>[New] Top 11 Video Recorders That Save Money Without Sacrificing Performance</u></a></li>
<li><a href="https://fox-access.techidaily.com/updated-2024-approved-best-6-video-translators-to-translate-video/"><u>[Updated] 2024 Approved Best 6 Video Translators to Translate Video</u></a></li>
<li><a href="https://vimeo-videos.techidaily.com/updated-from-large-files-to-tiny-previews-crafting-stunning-thumbnails-for-2024/"><u>[Updated] From Large Files to Tiny Previews Crafting Stunning Thumbnails for 2024</u></a></li>
<li><a href="https://video-screen-grab.techidaily.com/updated-in-2024-how-to-record-and-save-voices-on-iphone-efficiently/"><u>[Updated] In 2024, How to Record & Save Voices on iPhone Efficiently</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-superior-solutions-top-bdr-softwares-for-windows-macos/"><u>2024 Approved Superior Solutions Top BDR Softwares for Windows, macOS</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-travel-video-setup-must-have-items-checklist/"><u>2024 Approved Travel Video Setup Must-Have Items Checklist</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unveiling-the-secrets-of-av1-codec-mastery/"><u>2024 Approved Unveiling the Secrets of AV1 Codec Mastery</u></a></li>
<li><a href="https://fox-glue.techidaily.com/custom-logo-blueprints-draw-your-identity-from-free-formats/"><u>Custom Logo Blueprints Draw Your Identity From Free Formats</u></a></li>
<li><a href="https://windows11.techidaily.com/enabling-onedrive-for-direct-file-explorer-opens/"><u>Enabling OneDrive for Direct File Explorer Opens</u></a></li>
<li><a href="https://win-answers.techidaily.com/fixing-the-dark-display-issue-in-halo-infinite-simple-strategies-that-work/"><u>Fixing the Dark Display Issue in Halo Infinite: Simple Strategies That Work</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-yuneec-typhoon-h-dive-professional-takeaways/"><u>In 2024, The Yuneec Typhoon H Dive Professional Takeaways</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/in-2024-which-is-the-best-fake-gps-joystick-app-on-oppo-reno-11-pro-5g-drfone-by-drfone-virtual-android/"><u>In 2024, Which is the Best Fake GPS Joystick App On Oppo Reno 11 Pro 5G? | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-photographers-guide-to-online-image-editing-and-cropping-for-2024/"><u>The Photographer's Guide to Online Image Editing and Cropping for 2024</u></a></li>
<li><a href="https://win-solutions.techidaily.com/troubleshoot-and-correct-black-screen-error-on-your-fallout-4-game-console/"><u>Troubleshoot and Correct Black Screen Error on Your Fallout 4 Game Console</u></a></li>
</ul></div>

