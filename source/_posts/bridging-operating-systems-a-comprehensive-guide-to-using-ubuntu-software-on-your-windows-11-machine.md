---
title: "Bridging Operating Systems: A Comprehensive Guide to Using Ubuntu Software on Your Windows 11 Machine"
date: 2024-10-21T17:59:30.655Z
updated: 2024-10-27T20:11:36.976Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/7a686a1b526676a12878d5e404ff256d91c8737d5163c7ab05139a28f15cb6cd.jpg
---

## Bridging Operating Systems: A Comprehensive Guide to Using Ubuntu Software on Your Windows 11 Machine

### Key Takeaways

* Install WSL2 Kernel, activate Virtual Machine Platform, and make sure you have Admin rights before getting Ubuntu on Windows 11.
* Enable Windows Subsystem for Linux, then download and install Ubuntu for WSL via Microsoft Store to run Linux apps on Windows 11.

 Did you know using Ubuntu-exclusive apps doesn't require overwriting your operating system? Unlock the true potential of your Windows desktop by using Ubuntu apps on Windows 11, enhancing your PC experience by blending the power of Linux and Windows.

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135365/19272" target="_top" id="2135365">
  <img src="//a.impactradius-go.com/display-ad/19272-2135365" border="0" alt="https://techidaily.com" width="125" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135365/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Why Use Ubuntu Apps on Windows 11?

 Adding Ubuntu to Windows 11 enables access to a wide variety of free applications unavailable on Windows alone. These aren't just ordinary programs either; they can accomplish nearly any task on your computer, from enhancing your file management to creative projects. For example, if you're looking for a great photo management tool not found on Windows 11, you might try [Shotwell](https://shotwell-project.org/doc/html/) with WSL. Or, if you're not a fan of the email apps available on Windows, you can install the Ubuntu-native [Geary](https://wiki.gnome.org/Apps/Geary) email client. There are many great exclusive applications for Ubuntu that can level up your Windows PC.

 Furthermore, if you enjoy crafting and coding, the combination of Windows and Ubuntu significantly benefits you. It simplifies the process of working on Linux-oriented projects without the need to leave the Windows environment. This integration reduces complications and amplifies productivity, whether your pursuits involve coding for enjoyment or constructing significant projects.

 Imagine you're a developer working on a cross-platform project. Using Ubuntu apps on Windows means you can quickly and effectively test your new project on Linux and Windows with ease. Take it from me: I write programs in the Go programming language, and being able to test out my code and run it on both Ubuntu and Windows 11 seamlessly is very powerful.

##  Requirements Before You Begin

 Before you can start using Ubuntu on your Windows 11 system, a few requirements must be met to ensure a smooth process. During my testing, WSL wouldn't work until I installed the latest WSL2 Kernel package installed on Windows 11\. If you're having issues with WSL running on Windows 11 like I did, install this kernel package. It will ensure that WSL v2 operating systems run correctly. You can download and install the EXE file [directly from Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package).

 In addition to the WSL2 Kernel EXE package, you'll need to enable the "Virtual Machine Platform" feature in the "Windows Features" area of Windows 11\. WSL runs with the help of virtualization, and this feature is a requirement to get the most out of Ubuntu in Windows 11.

 Lastly, ensure you have Administrator rights on your Windows 11 system. Using WSL requires modifying Windows features, and it won't work if you don't have Administrator privileges.

##  Enabling Windows Subsystem for Linux (WSL)

 Windows Subsystem for Linux is not enabled by default on Windows 11\. You'll need to activate this feature on Windows before you can use it to run Ubuntu apps on your Windows PC.

 To start, open the Windows Start Menu on the desktop. Once it is open, type "Turn Windows Features on or off" into the search box. Launch the icon labeled "Control Panel" beneath it to access the "Add/Remove Features" area of Windows 11.

 Inside the "Windows Features" window, scroll down and locate "Windows Subsystem for Linux." After finding it, click on the empty box next to it to activate this feature. Select "OK" after making your selection.

![WSL feature being turned on in Windows 11.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/flameshot-wsl-check-box.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2087262/19272" target="_top" id="2087262">
  <img src="//a.impactradius-go.com/display-ad/19272-2087262" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2087262/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Now that the "OK" button has been selected, Windows 11 will begin setting up WSL on your system. This setup process should take a few minutes to complete. When the setup is complete, you must reboot your Windows PC. Select the "Restart now" button to reboot.

 Upon rebooting, log back into your Windows 11 desktop. Once you've logged back in, the Windows Subsystem for Linux will be enabled on Windows 11.

##  Installing Ubuntu

 Ubuntu for WSL is available for Windows 11 via the Microsoft Store, enabling the installation of Ubuntu on your system to run Linux apps within Windows 11.

 To initiate the installation of Ubuntu for WSL, open the Microsoft Store from the Windows 11 desktop. Once open, locate the "Search apps, games, movies, and more" box and click on it.

 In the search box, type "Ubuntu." Upon entering "Ubuntu," the Microsoft Store will display various versions of the Ubuntu app. Select "Ubuntu 22.04.3 LTS" using the mouse.

![The user is searching for Ubuntu WSL 22.04.3 LTS in the Microsoft Store.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/wsl-ubuntu-22.png) 

 After selecting "Ubuntu 22.04.3 LTS," you will be directed to its feature page in the Microsoft Store. Locate the "Get" button and click on it. Selecting the "Get" button will initiate the Ubuntu download for Windows 11.

 Downloading Ubuntu 22.04.3 LTS on Windows 11 should be swift, given the program's size is only about 560 MB. Once the download is complete, Ubuntu will be accessible in the Windows Start Menu.

 After Ubuntu 22.04.3 LTS has finished installing on Windows 11, access the Windows Start Menu, search for "Ubuntu 22.04.3 LTS," and launch it. Upon its first launch, Ubuntu will automatically configure itself and prepare for use.

![Ubuntu WSL is installing itself to Windows 11.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/wsl-ubuntu-is-installing.png) 

<!-- affiliate ads begin -->
<a href="https://bluettius.sjv.io/c/5597632/2139121/17108" target="_top" id="2139121">
  <img src="//a.impactradius-go.com/display-ad/17108-2139121" border="0" alt="https://techidaily.com" width="320" height="90"/>
</a>
<img height="0" width="0" src="https://bluettius.sjv.io/i/5597632/2139121/17108" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Once Ubuntu has finished its setup on Windows 11, you will see an empty terminal window, ready for you to interact with Ubuntu on your Windows 11 system.

##  Basic Configuration Tips

 Here are some basic configuration tips to improve the WSL experience on Windows 11.

<!-- affiliate ads begin -->
<a href="https://laganoo.pxf.io/c/5597632/1657400/16446" target="_top" id="1657400">
  <img src="//a.impactradius-go.com/display-ad/16446-1657400" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://laganoo.pxf.io/i/5597632/1657400/16446" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

###  Windows and Linux File System Integration

 Windows and Linux File System Integration simplifies moving files between your Ubuntu WSL setup and your Windows 11 desktop. Here's how to utilize this feature.

 To access your Ubuntu files from Windows 11, begin by opening Windows Explorer. Once opened, locate the "Linux" penguin icon in the sidebar and select it.

 Upon selecting "Linux," a folder named "Ubuntu-22.04" will appear. Right-click this folder and choose "Pin to Quick access." This action allows you to effortlessly access your Ubuntu files from Windows.

![Ubuntu WSL's file access in the Windows 11 Explorer app.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/wsl-selecting-ub.png) 

 To access Windows files from Ubuntu, navigate to the **/mnt/c** folder using the cd command. This method provides interaction with the Windows 11 **C:/** drive.

cd /mnt/c

###  Update your Ubuntu WSL app

 It is good practice to update your Ubuntu WSL app from time to time, otherwise programs will stop working. Here's how to do it on Windows 11.

 First, open up the Ubuntu app from the Windows Start Menu. Once it is open, run the apt update command to check for Ubuntu software updates.

sudo apt update

 When you've finished checking for updates, you can use the apt upgrade command to install them.

sudo apt upgrade

![Ubuntu WSL is being updated.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/wsl-installing-kdenlive.png) 

<!-- affiliate ads begin -->
<span id="1983474">
					<video width="576" height="240" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1983474.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1983474">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1983474.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:360px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1983474%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1983474/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Starting and Using Ubuntu

 Ubuntu in Windows 11 has a terminal interface with WSL. WSL is a Linux system layer that is accessible directly from Windows, rather than a Linux desktop on top of the Windows Desktop.

 Using Ubuntu means installing packages to use on Windows 11\. To start Ubuntu, search for "Ubuntu 22.04.3 LTS" in the Windows Start Menu. Once it is opened, it'll be ready to use.

 From here, you can install any app you like. To install an Ubuntu app on your Windows 11 system, start by searching for the name of the app. You can search using the apt search command. For example, to find "wireshark," do:

apt search wireshark

 Look through the search results for the program you wish to install. Then, use the "apt install programname" command. To install Wireshark, for example, it's:

sudo apt install wireshark

 When your program is installed, you can launch it directly from the terminal with the following command:

nohup program_name & disown

![Linux apps Kdenlive and Wireshark are running inside of Windows 11.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/wsl-kdenlive-and-wireshark-open.png) 

 Alternatively, applications can be started from the Windows 11 start menu.

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135363/19272" target="_top" id="2135363">
  <img src="//a.impactradius-go.com/display-ad/19272-2135363" border="0" alt="https://techidaily.com" width="120" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135363/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Integration with Windows 11

 When apps are installed through WSL, they integrate into Windows 11 quite well by installing themselves into the Windows 11 Start menu. To access your installed WSL programs from Windows 11, look through your programs. Each integrated application will have a Linux icon.

 The WSL integration with Windows 11 is quite good. However, keep in mind that not every single application is going to create a desktop icon. Sometimes, you may need to launch your Ubuntu programs directly from the terminal. You typically do this by typing its package name and hitting Enter.

##  Troubleshooting Common Setup Issues

 WSL usually installs without a hitch on Windows 11\. However, if you're having issues, there is a quick and easy fix. First, open up PowerShell in Windows 11\. Once it is open, use the update command for WSL. Updating WSL will install various patches and fixes that are sure to alleviate the issues you're experiencing.

wsl --update

 Alternatively, if updating doesn't help, consider re-installing Ubuntu WSL again by following the installation instructions in the "Setup" portion of this guide.

---

 WSL upgrades your Windows 11 experience by bringing Ubuntu apps to your desktop without the hassle of virtualization. Jump into Ubuntu and WSL to enhance the power of your Windows 11 PC and discover new possibilities in computing.

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
<li><a href="https://some-skills.techidaily.com/new-the-quick-route-to-true-profile-ages-on-tiktok/"><u>[New] The Quick Route to True Profile Ages on TikTok</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-this-video-will-get-you-100000-views-on-youtube/"><u>[New] This Video Will Get You 100000 Views on YouTube</u></a></li>
<li><a href="https://digital-screen-recording.techidaily.com/updated-dissecting-vidma-a-guide-to-screen-capturing-tech/"><u>[Updated] Dissecting Vidma A Guide to Screen Capturing Tech</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-techniques-for-downloading-converting-and-saving-vids-on-twitter-as-mp3s/"><u>[Updated] Techniques for Downloading, Converting, and Saving Vids on Twitter as MP3s</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/updated-the-screencast-lifeline-crucial-knowledge-for-success/"><u>[Updated] The Screencast Lifeline Crucial Knowledge for Success</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-ultimate-5-mobile-photo-editing-iphone-x87-background-switch/"><u>[Updated] Ultimate 5 Mobile Photo Editing IPhone X/8/7 Background Switch</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/2024-approved-capturing-itunes-media-three-recording-techniques/"><u>2024 Approved Capturing iTunes Media Three Recording Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-perfect-gopro-4k-cinematography-through-editing/"><u>2024 Approved Perfect GoPro 4K Cinematography Through Editing</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-strategies-for-finding-and-using-a-lost-iphone-x/"><u>2024 Approved Top Strategies for Finding & Using a Lost iPhone X</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-ultimate-portable-video-player-mkv-format/"><u>2024 Approved Ultimate Portable Video Player (MKV Format)</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unlock-video-brilliance-through-advanced-chroma-techniques-11-steps/"><u>2024 Approved Unlock Video Brilliance Through Advanced Chroma Techniques (11 Steps)</u></a></li>
<li><a href="https://tiktok-videos.techidaily.com/be-the-best-lifeguard-at-your-friends-tiktok-shores-for-2024/"><u>Be the Best Lifeguard at Your Friends’ TikTok Shores for 2024</u></a></li>
<li><a href="https://youtube-data.techidaily.com/-your-channels-moniker-youtube-naming-tools-and-tips/"><u>Craft Your Channel's Moniker YouTube Naming Tools and Tips</u></a></li>
<li><a href="https://hardware-help.techidaily.com/download-geforce-rtx-drivers-now-compatible-with-windows-xp-to-10/"><u>Download GeForce RTX Drivers Now: Compatible With Windows XP to 10!</u></a></li>
<li><a href="https://driver-download.techidaily.com/downloading-and-setting-up-your-epson-xp-2n5-driver-on-windows-os-versions/"><u>Downloading and Setting Up Your Epson XP-2n5 Driver on Windows OS Versions</u></a></li>
<li><a href="https://activate-lock.techidaily.com/how-to-bypass-icloud-lock-from-iphone-14-by-drfone-ios/"><u>How to Bypass iCloud Lock from iPhone 14</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/in-2024-navigating-the-world-of-laughter-how-to-create-memes-on-9gag/"><u>In 2024, Navigating the World of Laughter How to Create Memes on 9GAG</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unleash-the-full-spectrum-of-sound-best-apps-for-music-videos/"><u>In 2024, Unleash the Full Spectrum of Sound Best Apps for Music Videos</u></a></li>
<li><a href="https://howto.techidaily.com/what-to-do-when-samsung-galaxy-f34-5g-has-black-screen-of-death-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>What To Do When Samsung Galaxy F34 5G Has Black Screen of Death? | Dr.fone</u></a></li>
</ul></div>

