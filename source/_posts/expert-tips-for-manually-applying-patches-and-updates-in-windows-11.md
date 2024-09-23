---
title: Expert Tips for Manually Applying Patches and Updates in Windows 11
date: 2024-09-21T04:38:15.495Z
updated: 2024-09-22T17:15:21.060Z
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

##  If Your Updates Failed, Clear the Downloaded Updates First

 Before using alternate update methods, [remove the downloaded update files](https://techno-recovery.techidaily.com/troubleshooting-guide-what-to-do-when-your-amazon-firestick-remote-fails/) to prevent any potential issues. The alternate methods will re-download the required update files anyway, so you won’t lose anything.

 To clear the Windows Update cache, launch Run by pressing Windows+R. Type the following in the box and press Enter or select "OK."

        `services.msc`
    
!['services.msc' typed in Run.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/1-open-services-window.jpg) 

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

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135371/19272" target="_top" id="2135371">
  <img src="//a.impactradius-go.com/display-ad/19272-2135371" border="0" alt="https://techidaily.com" width="320" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135371/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  From Windows Settings

 One way to force updates to install is by using the Settings app. Here, you can choose whether to install the available updates or only specific ones.

 To use this method, launch Settings by pressing Windows+i. At the bottom of the left sidebar, choose "Windows Update."

!['Windows Update' highlighted in Settings.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/5-windows-update-settings.jpg) 

 On the right pane, click "Download & Install All" to download and install the available updates. To only download and install specific updates, click the button next to those updates.

!['Download & Install All' highlighted on the Windows Update screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/6-download-install-all-windows-updates.jpg) 

 Wait while Windows obtains and installs the selected updates, then [reboot your Windows 11 PC](https://screen-video-capture.techidaily.com/updated-in-2024-addressing-mute-problems-in-obs-live-recording/).

##  From Microsoft Update Catalog

[Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Home.aspx) is a site where you can find and download any Windows update you want. This allows you to manually download an update and then install that update on your PC—all without using the Windows Update feature.

 To use this method, find the name of the update you want to download. You can find this information on the Settings > Windows Update page. The update names usually start with _KB_.

![Multiple updates highlighted on the Windows Update screen.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/7-find-windows-update-name.jpg) 

 Then, launch a web browser and head to the [Microsoft Update Catalog site](https://www.catalog.update.microsoft.com/Home.aspx). Select the site’s search box, type the update name you noted, and press Enter or select "Search."

![An update name typed in the search box on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/8-find-windows-update.jpg) 

<!-- affiliate ads begin -->
<span id="1938141">
					<video width="576" height="240" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1938141.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1938141">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1938141.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:360px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1938141%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1938141/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 On the following screen, find the exact update and click "Download" next to that update.

!['Download' highlighted for an update on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/9-choose-windows-update.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135364/19272" target="_top" id="2135364">
  <img src="//a.impactradius-go.com/display-ad/19272-2135364" border="0" alt="https://techidaily.com" width="120" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135364/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 In the open window, click the update name to begin downloading the update to your PC. The download can take anywhere from a few seconds to several minutes, depending on the update size and your internet connection speed.

![An update name highlighted on the Microsoft Update Catalog site.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/10-download-windows-update.jpg) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1925565/19272" target="_top" id="1925565">
  <img src="//a.impactradius-go.com/display-ad/19272-1925565" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1925565/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 After downloading the update, run the update file and follow the on-screen instructions. The file will extract the update files and install the update on your system.

##  Using Command Prompt

 Command Prompt offers a command that you can use to install an already-downloaded update on your PC. This is a great method to use when your update fails to install via the graphical user interface (GUI).

 To use this method, head over to the [Microsoft Update Catalog site](https://www.catalog.update.microsoft.com/Home.aspx). Select the search box, type the update name, and press Enter or select "Search."

 Find the update to download on the list and click "Download" next to the update. In the open window, select the update name to save the update to your computer.

 After successfully downloading the update, [open Command Prompt](https://screen-mirror.techidaily.com/how-to-screen-mirroring-xiaomi-14-ultra-drfone-by-drfone-android/). Do this by pressing the Windows key, typing **Command Prompt**, and selecting "Run as Administrator."

!['Run as Administrator' highlighted for Command Prompt.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/11-launch-cmd-as-admin.jpg) 

<!-- affiliate ads begin -->
<a href="https://ursime.pxf.io/c/5597632/2136545/16384" target="_top" id="2136545">
  <img src="//a.impactradius-go.com/display-ad/16384-2136545" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ursime.pxf.io/i/5597632/2136545/16384" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

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

 In PowerShell, type the following command (called a [cmdlet](https://extra-guidance.techidaily.com/new-prophotomaster-the-ai-enhanced-editing-edge/)) and press Enter. This cmdlet installs the Windows Update module to allow you to manage Windows updates from PowerShell.

        `Install-Module PSWindowsUpdate`
    
![The cmdlet to install the Windows Update module typed in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/14-install-windows-update-module-powershell.jpg) 

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
<li><a href="https://facebook-video-footage.techidaily.com/new-extract-and-save-youtube-gallery-files-for-2024/"><u>[New] Extract and Save YouTube Gallery Files for 2024</u></a></li>
<li><a href="https://fox-hovers.techidaily.com/updated-leading-websites-to-discover-glossy-gold-letter-effects/"><u>[Updated] Leading Websites to Discover Glossy Gold Letter Effects</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/updated-mastering-soundscapes-the-ultimate-guide-to-iphoneipad-podcast-downloads/"><u>[Updated] Mastering Soundscapes The Ultimate Guide to iPhone/iPad Podcast Downloads</u></a></li>
<li><a href="https://some-skills.techidaily.com/access-a-multitude-of-ai-powered-conversational-agents-directly-from-your-personal-computer-using-our-innovative-application/"><u>Access a Multitude of AI-Powered Conversational Agents Directly From Your Personal Computer Using Our Innovative Application</u></a></li>
<li><a href="https://some-skills.techidaily.com/boost-productivity-fast-efficiently-start-programs-via-keyboard-triggers-on-windows-11/"><u>Boost Productivity Fast: Efficiently Start Programs via Keyboard Triggers on Windows 11</u></a></li>
<li><a href="https://some-skills.techidaily.com/boost-your-gameplay-the-best-3-software-solutions-for-real-time-pc-gaming-stats-analysis/"><u>Boost Your Gameplay: The Best 3 Software Solutions for Real-Time PC Gaming Stats Analysis</u></a></li>
<li><a href="https://some-skills.techidaily.com/boosting-focus-using-windows-grokas-pomodoro-timer-in-windows-11-a-pros-and-cons-review/"><u>Boosting Focus Using Windows Grokas Pomodoro Timer in Windows 11 – A Pros and Cons Review</u></a></li>
<li><a href="https://some-skills.techidaily.com/bridging-operating-systems-a-comprehensive-guide-to-using-ubuntu-software-on-your-windows-11-machine/"><u>Bridging Operating Systems: A Comprehensive Guide to Using Ubuntu Software on Your Windows 11 Machine</u></a></li>
<li><a href="https://some-skills.techidaily.com/complete-reinstallation-tutorial-for-nvidia-and-amd-graphics-drivers-from-scratch/"><u>Complete Reinstallation Tutorial for NVIDIA & AMD Graphics Drivers From Scratch</u></a></li>
<li><a href="https://unlock-android.techidaily.com/downloading-samfw-frp-tool-30-for-itel-a70-by-drfone-android/"><u>Downloading SamFw FRP Tool 3.0 for Itel A70</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/in-2024-ways-to-find-unlocking-codes-for-infinix-gt-10-pro-phones-by-drfone-android/"><u>In 2024, Ways To Find Unlocking Codes For Infinix GT 10 Pro Phones</u></a></li>
<li><a href="https://sound-issues.techidaily.com/quick-fix-for-silent-mics-restoring-functionality-to-your-steelseries-arctis-7-audio/"><u>Quick Fix for Silent Mics: Restoring Functionality to Your SteelSeries Arctis 7 Audio</u></a></li>
<li><a href="https://buynow-tips.techidaily.com/ultimate-guide-to-the-2020-lenovo-tab-m1n-stunning-hd-display-without-breaking-the-bank/"><u>Ultimate Guide to the 2020 Lenovo Tab M1n: Stunning HD Display Without Breaking the Bank</u></a></li>
</ul></div>

