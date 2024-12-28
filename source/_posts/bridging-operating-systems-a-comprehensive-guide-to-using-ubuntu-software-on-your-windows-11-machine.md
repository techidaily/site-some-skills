---
title: "Bridging Operating Systems: A Comprehensive Guide to Using Ubuntu Software on Your Windows 11 Machine"
date: 2024-12-23T19:34:06.567Z
updated: 2024-12-28T20:37:17.917Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/iLlpdv0cz_k?si=HwTdnMmeVJXm4GPV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Why Use Ubuntu Apps on Windows 11?

 Adding Ubuntu to Windows 11 enables access to a wide variety of free applications unavailable on Windows alone. These aren't just ordinary programs either; they can accomplish nearly any task on your computer, from enhancing your file management to creative projects. For example, if you're looking for a great photo management tool not found on Windows 11, you might try [Shotwell](https://shotwell-project.org/doc/html/) with WSL. Or, if you're not a fan of the email apps available on Windows, you can install the Ubuntu-native [Geary](https://wiki.gnome.org/Apps/Geary) email client. There are many great exclusive applications for Ubuntu that can level up your Windows PC.

 Furthermore, if you enjoy crafting and coding, the combination of Windows and Ubuntu significantly benefits you. It simplifies the process of working on Linux-oriented projects without the need to leave the Windows environment. This integration reduces complications and amplifies productivity, whether your pursuits involve coding for enjoyment or constructing significant projects.

 Imagine you're a developer working on a cross-platform project. Using Ubuntu apps on Windows means you can quickly and effectively test your new project on Linux and Windows with ease. Take it from me: I write programs in the Go programming language, and being able to test out my code and run it on both Ubuntu and Windows 11 seamlessly is very powerful.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/cBCyRXC1-Tw?si=lN9P2xo0hsfyD8K6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Requirements Before You Begin

 Before you can start using Ubuntu on your Windows 11 system, a few requirements must be met to ensure a smooth process. During my testing, WSL wouldn't work until I installed the latest WSL2 Kernel package installed on Windows 11\. If you're having issues with WSL running on Windows 11 like I did, install this kernel package. It will ensure that WSL v2 operating systems run correctly. You can download and install the EXE file [directly from Microsoft](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package).

 In addition to the WSL2 Kernel EXE package, you'll need to enable the "Virtual Machine Platform" feature in the "Windows Features" area of Windows 11\. WSL runs with the help of virtualization, and this feature is a requirement to get the most out of Ubuntu in Windows 11.

 Lastly, ensure you have Administrator rights on your Windows 11 system. Using WSL requires modifying Windows features, and it won't work if you don't have Administrator privileges.

##  Enabling Windows Subsystem for Linux (WSL)

 Windows Subsystem for Linux is not enabled by default on Windows 11\. You'll need to activate this feature on Windows before you can use it to run Ubuntu apps on your Windows PC.

 To start, open the Windows Start Menu on the desktop. Once it is open, type "Turn Windows Features on or off" into the search box. Launch the icon labeled "Control Panel" beneath it to access the "Add/Remove Features" area of Windows 11.

 Inside the "Windows Features" window, scroll down and locate "Windows Subsystem for Linux." After finding it, click on the empty box next to it to activate this feature. Select "OK" after making your selection.

![WSL feature being turned on in Windows 11.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/flameshot-wsl-check-box.png) 

 Now that the "OK" button has been selected, Windows 11 will begin setting up WSL on your system. This setup process should take a few minutes to complete. When the setup is complete, you must reboot your Windows PC. Select the "Restart now" button to reboot.

 Upon rebooting, log back into your Windows 11 desktop. Once you've logged back in, the Windows Subsystem for Linux will be enabled on Windows 11.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/odDOPrPjRYY?si=7QHzdUkTPNkHJiVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Installing Ubuntu

 Ubuntu for WSL is available for Windows 11 via the Microsoft Store, enabling the installation of Ubuntu on your system to run Linux apps within Windows 11.

 To initiate the installation of Ubuntu for WSL, open the Microsoft Store from the Windows 11 desktop. Once open, locate the "Search apps, games, movies, and more" box and click on it.

 In the search box, type "Ubuntu." Upon entering "Ubuntu," the Microsoft Store will display various versions of the Ubuntu app. Select "Ubuntu 22.04.3 LTS" using the mouse.

![The user is searching for Ubuntu WSL 22.04.3 LTS in the Microsoft Store.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/wsl-ubuntu-22.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/0OxkndZbIA4?si=TWJlkTbYKsVag8-q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 After selecting "Ubuntu 22.04.3 LTS," you will be directed to its feature page in the Microsoft Store. Locate the "Get" button and click on it. Selecting the "Get" button will initiate the Ubuntu download for Windows 11.

 Downloading Ubuntu 22.04.3 LTS on Windows 11 should be swift, given the program's size is only about 560 MB. Once the download is complete, Ubuntu will be accessible in the Windows Start Menu.

 After Ubuntu 22.04.3 LTS has finished installing on Windows 11, access the Windows Start Menu, search for "Ubuntu 22.04.3 LTS," and launch it. Upon its first launch, Ubuntu will automatically configure itself and prepare for use.

![Ubuntu WSL is installing itself to Windows 11.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/03/wsl-ubuntu-is-installing.png) 

 Once Ubuntu has finished its setup on Windows 11, you will see an empty terminal window, ready for you to interact with Ubuntu on your Windows 11 system.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/oeSN3u4fO9M?si=Ua3Hzcil6u6akDgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Basic Configuration Tips

 Here are some basic configuration tips to improve the WSL experience on Windows 11.

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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/nWu29cqFjZA?si=TNZyCbPq68PQ0JIb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Alternatively, applications can be started from the Windows 11 start menu.

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
<li><a href="https://digital-screen-recording.techidaily.com/new-navigating-mac-screenshot-file-type-changes-for-2024/"><u>[New] Navigating Mac Screenshot File Type Changes for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-synopsis-of-crowd-opinions-on-vllo/"><u>[New] Synopsis of Crowd Opinions on VLLO</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-future-of-flying-games-mavic-air-vs-dji-spark-showdown/"><u>[New] The Future of Flying Games Mavic Air Vs. DJI Spark Showdown</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-guide-9-essential-360-degree-recording-techniques/"><u>[New] Ultimate Guide 9 Essential 360-Degree Recording Techniques</u></a></li>
<li><a href="https://instagram-clips.techidaily.com/updated-in-2024-adding-closed-captioning-to-instagram-live-and-igtv/"><u>[Updated] In 2024, Adding Closed Captioning to Instagram Live and IGTV</u></a></li>
<li><a href="https://facebook-clips.techidaily.com/updated-in-2024-best-facebook-practices-videographers-dilemrante/"><u>[Updated] In 2024, Best Facebook Practices Videographer's Dilemrante</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-streamlined-approach-to-add-linktree-in-tiktok-about-section/"><u>[Updated] Streamlined Approach to Add Linktree in TikTok About Section</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-instant-viral-potential-learn-kinemaster-memes/"><u>2024 Approved Instant Viral Potential Learn KineMaster Memes</u></a></li>
<li><a href="https://games-able.techidaily.com/augment-xbox-performance-with-a-secondary-laptop-display/"><u>Augment Xbox Performance with a Secondary Laptop Display</u></a></li>
<li><a href="https://tech-recovery.techidaily.com/effective-methods-to-deactivate-the-touch-functionality-of-your-pc-using-windows-11/"><u>Effective Methods to Deactivate the Touch Functionality of Your PC Using Windows 11</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-tech-showdown-exploring-facial-detection-in-iphones-vs-samsungs/"><u>In 2024, Tech Showdown Exploring Facial Detection in iPhones Vs. Samsungs</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-definitive-guide-to-using-vlc-player-in-macos/"><u>In 2024, The Definitive Guide to Using VLC Player in macOS</u></a></li>
<li><a href="https://tech-hub.techidaily.com/resolve-chatgpt-gaffes-overcoming-6-common-hurdles-with-ease/"><u>Resolve ChatGPT Gaffes: Overcoming 6 Common Hurdles with Ease</u></a></li>
<li><a href="https://youtube-data.techidaily.com/ing-your-youtubian-journey-from-launchpad-to-loot/"><u>Starting Your Youtubian Journey From Launchpad to Loot</u></a></li>
<li><a href="https://win-comparisons.techidaily.com/step-by-step-tutorial-recovering-your-computers-file-list-on-onedrive-easily/"><u>Step-by-Step Tutorial: Recovering Your Computer's File List on OneDrive Easily</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-artisans-guide-to-aesthetic-photographic-adjustments-for-2024/"><u>The Artisan's Guide to Aesthetic Photographic Adjustments for 2024</u></a></li>
<li><a href="https://android-transfer.techidaily.com/top-6-ways-to-transfer-text-messages-from-vivo-s17t-to-other-android-devices-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>Top 6 Ways to Transfer Text Messages from Vivo S17t to Other Android Devices | Dr.fone</u></a></li>
<li><a href="https://windows11.techidaily.com/understanding-the-resistance-to-windows-11s-latest-release/"><u>Understanding the Resistance to Windows 11'S Latest Release</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-the-secrets-how-to-efficiently-record-internet-radio-for-2024/"><u>Unveiling the Secrets How To Efficiently Record Internet Radio for 2024</u></a></li>
</ul></div>

