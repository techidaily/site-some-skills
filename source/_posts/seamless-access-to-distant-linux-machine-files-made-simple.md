---
title: Seamless Access to Distant Linux Machine Files Made Simple
date: 2024-09-03T10:46:55.902Z
updated: 2024-09-04T10:46:55.902Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/a-hand-holding-a-cloud-with-the-linux-mascot-inside-it-surrounded-by-several-file-icons.jpg
---

## Seamless Access to Distant Linux Machine Files Made Simple

### Key Takeaways

* SSHFS lets you browse remote Linux files on your local computer effortlessly.
* SSHFS securely mounts remote files as a local branch of your directory tree.
* SSHFS is ideal for file-level work, especially on headless systems like a Raspberry Pi.

 SSHFS lets you browse files on remote Linux PCs as smoothly as if they were on your local computer. It’s a quick and simple way to interact with headless systems like Raspberry Pi.

##  What is SSHFS?

 SSHFS gets its name from _S_ecure _SH_ell and _F_ile _S_ystem.

 Regular SSH lets you connect to remote computers from a terminal window. Your commands are executed on the remote computer.

 SSHFS is different. SSHFS mounts a remote file system on your local computer. The mounted file system appears as a normal branch of your local file system’s directory tree. You access the remote files just like any other file on your computer. You can browse through the directories and files using the cd command or a file browser.

 Working with the files uses the applications on your local computer, not the remote computer. For example, editing a file uses your local editor. In fact, you’ve got access to all of your local applications, and can use them as you wish on the remote files.

 SSHFS isn’t really suited to executing programs located on the remote computer. Launching an executable from the mounted file system probably won’t work well, as it will try to run on your local computer. That’s the sort of stuff best suited to a regular SSH connection. But, for working with remote files, SSHFS can't be beat.

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1997648/19272" target="_top" id="1997648">
  <img src="//a.impactradius-go.com/display-ad/19272-1997648" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1997648/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Installing SSHFS

 To use SSHFS, SSH must already be working on the remote computer. We’ve covered how to set up SSH elsewhere. We recommend [using SSH keys instead of passwords](https://youtube-tips.techidaily.com/n-2024-laughter-labyr-writes-making-memorable-parodies/).

 If you haven’t set up SSH keys, you’ll be prompted for the password of the remote computer when you mount the file system. We’ll use passwords in our examples, so you can see when the prompts appear.

 If SSHFS isn’t already installed on your local computer, installing it is easy.

 On Ubuntu you need to type:

        `sudo apt install sshfs`
    
![Installing SSHFS on Ubuntu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/1-1.png) 

<!-- affiliate ads begin -->
<iframe id="iframe_1834903" src="//a.impactradius-go.com/gen-ad-code/5597632/1834903/16836" width="728" height="90" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
<!-- affiliate ads end -->
 Fedora users need to type:

        `sudo dnf install sshfs`
    
![Installing SSHFS on Fedora.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/2-2.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2049364/7443" target="_top" id="2049364">
  <img src="//a.impactradius-go.com/display-ad/7443-2049364" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2049364/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 On Manjaro, you’ll use pacman:

        `sudo pacman -S sshfs`
    
![Installing SSHFS on Manjaro.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/3-1.png) 

 You can test that SSHFS is installed and responding, by asking for its version number.

        `sshfs --version`
    
![Using the --version option to discover the version of SSHFS.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/4-1.png) 

##  Making a Remote Connection

 We need to create a directory to act as the _mount point_. It’s where the remote file system will be grafted onto your directory tree.

 I’m going to be connecting to a RaspberryPi that runs network scans for me, so I’m going to call my directory netscan. You could create the mount point in your home directory, but I’m going to drop it in /media/dave/, the default location for mount points in Ubuntu. You should use your own username instead of "dave."

 On other distributions, the default location might be /run/media/ or /mnt. Ultimately, you can create your mount point anywhere you like.

        `sudo mkdir /media/dave/netscan/`
    
![Creating the mount point directory.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/5-1.png) 

 Let’s take a look at our new directory.

        `ls -hl /media/dave`
    
![Using ls to check the attributes of the mount point directory.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/6-1.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2030370/7443" target="_top" id="2030370">
  <img src="//a.impactradius-go.com/display-ad/7443-2030370" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2030370/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 Our directory has been created, and it is owned by root. That won’t matter though, we’ll have [read and write permissions](https://ios-unlock.techidaily.com/3-easy-ways-to-factory-reset-a-locked-iphone-13-pro-without-itunes-by-drfone-ios/) on the mounted file system.

 The SSHFS command is long-ish, but fairly simple when you break it down.

        `sudo sshfs -o allow_other,default_permissions dave@net-scan.lan: /media/dave/netscan/`
    
![Mounting the remote file system on the local mount point.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/7-1.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2030375/7443" target="_top" id="2030375">
  <img src="//a.impactradius-go.com/display-ad/7443-2030375" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2030375/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 The command consists of:

* **sudo**: We’re using sudo because our mount point is owned by root.
* **sshfs**: Let’s us mount a remote file system.
* **\-o**: The -o (mount options) option is followed by allow\_other and default\_permissions. These are required to let us interact with the mounted file system.
* **dave@net-scan.lan**: We need to provide the username of an account on the remote computer, and the network name or IP address of the remote computer. This is the same information you need to provide for a regular SSH connection.
* **":"**: A trailing colon separates the network address from an optional path. The path points to the location within the remote computer that’ll used as the root of the mounted file system. By leaving the path empty, we tell SSHFS to use the home directory of the user account. But you could point this to your remote Documents directory, for example.
* **/media/dave/netscan/**: The mount point we want the remote file system to be mounted on. This must already exist.

 We’re prompted for _your_ password because you’ve used the sudo command. We’re then asked for the password for the account on the _remote computer_.

 The first time you connect, you’ll probably be asked a yes/no question about whether you want to trust the remote computer and have its details added to your list of known SSH hosts. Answer yes to this.

##  Accessing Files in the Terminal Window

 When you make a normal SSH connection, your command prompt changes to the command prompt of the machine you’ve connected to. That doesn’t happen when you mount a file system with SSHFS.

 The only way you can tell something has happened is if you try to access the mounted file system by navigating into the mount point directory, and looking around.

        `cd /media/dave/netscan/  
ls`
    
![Listing the contents of the remote file system in a terminal window.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/8-1.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1884002/19272" target="_top" id="1884002">
  <img src="//a.impactradius-go.com/display-ad/19272-1884002" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1884002/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 We can see the home directory of the user account on the remote computer. Any changes you make here are made on the remote drive. Any edits or deletions will affect the remote computer.

 We ought to be able to create a new file.

        `touch new-file.txt  
ls -hl new-file.txt`
    
![Creating a file in the remote file system and checking its attributes.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/9-1.png) 

 Our file is created, and we’re the owner of it. There was no need to use sudo.

 We can navigate the mounted file system using cd, and we can copy files using the cp command. This effectively transfers files between the remote device and your local computer.

        `cd report  
ls  
cp * /home/dave/Downloads/  
ls /home/dave/Downloads/`
    
![Copying files from the remote file system to the local file system.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/10-1.png) 

##  Accessing Files in a File Browser

 Because the mounted file system looks and behaves like any other part of your file system’s directory tree, you can use your file browser to navigate it too.

 The mounted file system will show up as a mounted volume. Clicking the name of the mount point takes you straight to the remote files.

![Accessing the remote file system in a file browser.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/11-1.png) 

 Double-clicking a file opens the application associated with that file type. These actions are carried out by applications on your local computer.

![Editing a file in the remote file system with a local editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/12-1.png) 

<!-- affiliate ads begin -->
<iframe id="iframe_2135472" src="//a.impactradius-go.com/gen-ad-code/5597632/2135472/18498" width="728" height="90" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
<!-- affiliate ads end -->
 If you edit a document, for example, your default local editor is launched.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2075462/7443" target="_top" id="2075462">
  <img src="//a.impactradius-go.com/display-ad/7443-2075462" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2075462/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Breaking the Connection

 To break the connection and unmount the remote file system, we use the umount command. Note there’s no “n” before the “m” in the umount command.

        `sudo umount /media/dave/netscan`
    
![Unmounting the remote file system.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/13-1.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1972684/19272" target="_top" id="1972684">
  <img src="//a.impactradius-go.com/display-ad/19272-1972684" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1972684/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  The Far Away, Up Close

 Having easy and direct access to files on remote computers simplifies maintenance and other tasks.

 Being able to use your local applications on the remote files lets you harness the power of your full-size computer when working with devices like the RaspberryPi. For example, you can run gcc on your local machine, to compile source files on the remote machine.

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
<li><a href="https://screen-recording.techidaily.com/new-2024-approved-the-ultimate-guide-to-zdsoft-video-recording/"><u>[New] 2024 Approved  The Ultimate Guide to ZDSoft Video Recording</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/new-chilly-celebrations-beijings-olympic-ice-showcase-2022/"><u>[New] Chilly Celebrations  Beijing's Olympic Ice Showcase, 2022</u></a></li>
<li><a href="https://video-screen-grab.techidaily.com/new-in-2024-warriors-echoes-celebrating-ghost-of-tsushima-analogues/"><u>[New] In 2024, Warrior's Echoes  Celebrating Ghost of Tsushima Analogues</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-summit-elite-production-space-25/"><u>[New] Summit Elite Production Space 25</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-essential-guide-free-and-trusted-vlc-downloads-for-mac-os-x/"><u>[New] The Essential Guide  Free & Trusted VLC Downloads for Mac OS X</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-insiders-look-at-configuring-a-powerful-zoom-room/"><u>[New] The Insider's Look at Configuring a Powerful Zoom Room</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-revolution-of-perception-in-augmented-realms/"><u>[New] The Revolution of Perception in Augmented Realms</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-total-kinetic-analysis-exploration/"><u>[New] Total Kinetic Analysis Exploration</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ustream-showcase-plus-similar-video-sites/"><u>[New] Ustream Showcase + Similar Video Sites</u></a></li>
<li><a href="https://win-answers.techidaily.com/solved-war-thunder-keeps-crashing-2024-tips/"><u>[Solved] War Thunder Keeps Crashing | 2024 Tips</u></a></li>
<li><a href="https://facebook-video-share.techidaily.com/updated-2024-approved-best-9-free-youtube-logo-makers/"><u>[Updated] 2024 Approved  Best 9 Free YouTube Logo Makers</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-superior-audio-modification-software-with-enchanting-features/"><u>[Updated] Superior Audio Modification Software with Enchanting Features</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unveiling-drone-excellence-the-q500-experience/"><u>[Updated] Unveiling Drone Excellence  The Q500 Experience</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-navigating-subtitle-files-like-a-pro-in-macos/"><u>2024 Approved  Navigating Subtitle Files Like a Pro in macOS</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-complete-guide-to-mastering-polarrs-image-precision/"><u>2024 Approved  The Complete Guide to Mastering Polarr's Image Precision</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-essential-guide-to-choosing-video-aspect-ratios/"><u>2024 Approved  The Essential Guide to Choosing Video Aspect Ratios</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-uncover-roblox-hidden-treasures-with-zoom-techniques/"><u>2024 Approved  Uncover Roblox Hidden Treasures with Zoom Techniques</u></a></li>
<li><a href="https://tech-renaissance.techidaily.com/how-to-successfully-reset-your-computer-despite-errors/"><u>How to Successfully Reset Your Computer Despite Errors</u></a></li>
<li><a href="https://android-transfer.techidaily.com/how-to-transfer-photos-from-honor-90-lite-to-samsung-galaxy-s21-ultra-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>How to Transfer Photos From Honor 90 Lite to Samsung Galaxy S21 Ultra | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-complete-blueprint-for-optimizing-data-in-adobes-cloud-realm/"><u>In 2024, The Complete Blueprint for Optimizing Data in Adobe's Cloud Realm</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-ultimate-guide-to-close-up-mastery-on-roblox/"><u>In 2024, The Ultimate Guide to Close-Up Mastery on Roblox</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-utilizing-zoom-to-upgrade-tiktok-video-aesthetics/"><u>In 2024, Utilizing Zoom to Upgrade TikTok Video Aesthetics</u></a></li>
<li><a href="https://extra-resources.techidaily.com/master-tips-securing-audio-for-unboxing-vids/"><u>Master Tips  Securing Audio for Unboxing Vids</u></a></li>
<li><a href="https://some-skills.techidaily.com/strategic-unveiling-the-box-of-opportunity-for-2024/"><u>Strategic Unveiling  The Box of Opportunity for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/survey-unique-categories-in-visual-media-equipment-for-2024/"><u>Survey  Unique Categories in Visual Media Equipment for 2024</u></a></li>
<li><a href="https://driver-error.techidaily.com/system-recourse-and-resource-conflicts/"><u>System Recourse and Resource Conflicts</u></a></li>
<li><a href="https://some-skills.techidaily.com/telegram-for-newcomers-how-to-make-your-advertising-stand-out-for-2024/"><u>Telegram for Newcomers  How to Make Your Advertising Stand Out for 2024</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/the-art-of-crossfade-audio-seamless-integration-in-logic-x/"><u>The Art of Crossfade Audio  Seamless Integration in Logic X</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-guide-to-basic-hdr-imaging-for-2024/"><u>The Ultimate Guide to Basic HDR Imaging for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unlocking-the-full-potential-of-high-dynamic-range-photos-using-lightroom-for-2024/"><u>Unlocking the Full Potential of High Dynamic Range Photos Using Lightroom for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-the-best-storytelling-schools-1-8-guide-for-2024/"><u>Unveiling the Best Storytelling Schools - #1-#8 Guide for 2024</u></a></li>
</ul></div>
