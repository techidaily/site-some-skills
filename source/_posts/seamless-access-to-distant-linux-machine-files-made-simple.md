---
title: Seamless Access to Distant Linux Machine Files Made Simple
date: 2024-10-03T22:09:54.012Z
updated: 2024-10-09T19:22:24.613Z
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

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2082529/7443" target="_top" id="2082529">
  <img src="//a.impactradius-go.com/display-ad/7443-2082529" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2082529/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  What is SSHFS?

 SSHFS gets its name from _S_ecure _SH_ell and _F_ile _S_ystem.

 Regular SSH lets you connect to remote computers from a terminal window. Your commands are executed on the remote computer.

 SSHFS is different. SSHFS mounts a remote file system on your local computer. The mounted file system appears as a normal branch of your local file system’s directory tree. You access the remote files just like any other file on your computer. You can browse through the directories and files using the cd command or a file browser.

 Working with the files uses the applications on your local computer, not the remote computer. For example, editing a file uses your local editor. In fact, you’ve got access to all of your local applications, and can use them as you wish on the remote files.

 SSHFS isn’t really suited to executing programs located on the remote computer. Launching an executable from the mounted file system probably won’t work well, as it will try to run on your local computer. That’s the sort of stuff best suited to a regular SSH connection. But, for working with remote files, SSHFS can't be beat.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2118315/7443" target="_top" id="2118315">
  <img src="//a.impactradius-go.com/display-ad/7443-2118315" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2118315/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Installing SSHFS

 To use SSHFS, SSH must already be working on the remote computer. We’ve covered how to set up SSH elsewhere. We recommend [using SSH keys instead of passwords](https://youtube-tips.techidaily.com/n-2024-laughter-labyr-writes-making-memorable-parodies/).

 If you haven’t set up SSH keys, you’ll be prompted for the password of the remote computer when you mount the file system. We’ll use passwords in our examples, so you can see when the prompts appear.

 If SSHFS isn’t already installed on your local computer, installing it is easy.

 On Ubuntu you need to type:

        `sudo apt install sshfs`
    
![Installing SSHFS on Ubuntu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/1-1.png) 

 Fedora users need to type:

        `sudo dnf install sshfs`
    
![Installing SSHFS on Fedora.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/2-2.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1925473/19272" target="_top" id="1925473">
  <img src="//a.impactradius-go.com/display-ad/19272-1925473" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1925473/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 On Manjaro, you’ll use pacman:

        `sudo pacman -S sshfs`
    
![Installing SSHFS on Manjaro.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/3-1.png) 

 You can test that SSHFS is installed and responding, by asking for its version number.

        `sshfs --version`
    
![Using the --version option to discover the version of SSHFS.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/4-1.png) 

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2123508/26400" target="_top" id="2123508">
  <img src="//a.impactradius-go.com/display-ad/26400-2123508" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2123508/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Making a Remote Connection

 We need to create a directory to act as the _mount point_. It’s where the remote file system will be grafted onto your directory tree.

 I’m going to be connecting to a RaspberryPi that runs network scans for me, so I’m going to call my directory netscan. You could create the mount point in your home directory, but I’m going to drop it in /media/dave/, the default location for mount points in Ubuntu. You should use your own username instead of "dave."

 On other distributions, the default location might be /run/media/ or /mnt. Ultimately, you can create your mount point anywhere you like.

        `sudo mkdir /media/dave/netscan/`
    
![Creating the mount point directory.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/5-1.png) 

 Let’s take a look at our new directory.

        `ls -hl /media/dave`
    
![Using ls to check the attributes of the mount point directory.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/6-1.png) 

 Our directory has been created, and it is owned by root. That won’t matter though, we’ll have [read and write permissions](https://ios-unlock.techidaily.com/3-easy-ways-to-factory-reset-a-locked-iphone-13-pro-without-itunes-by-drfone-ios/) on the mounted file system.

 The SSHFS command is long-ish, but fairly simple when you break it down.

        `sudo sshfs -o allow_other,default_permissions dave@net-scan.lan: /media/dave/netscan/`
    
![Mounting the remote file system on the local mount point.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/7-1.png) 

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2137220/26400" target="_top" id="2137220">
  <img src="//a.impactradius-go.com/display-ad/26400-2137220" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2137220/26400" style="position:absolute;visibility:hidden;" border="0" />
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
<a href="https://appsumo.8odi.net/c/5597632/2044586/7443" target="_top" id="2044586">
  <img src="//a.impactradius-go.com/display-ad/7443-2044586" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2044586/7443" style="position:absolute;visibility:hidden;" border="0" />
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

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2105876/7443" target="_top" id="2105876">
  <img src="//a.impactradius-go.com/display-ad/7443-2105876" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2105876/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Accessing Files in a File Browser

 Because the mounted file system looks and behaves like any other part of your file system’s directory tree, you can use your file browser to navigate it too.

 The mounted file system will show up as a mounted volume. Clicking the name of the mount point takes you straight to the remote files.

![Accessing the remote file system in a file browser.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/11-1.png) 

 Double-clicking a file opens the application associated with that file type. These actions are carried out by applications on your local computer.

![Editing a file in the remote file system with a local editor.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/12-1.png) 

 If you edit a document, for example, your default local editor is launched.

##  Breaking the Connection

 To break the connection and unmount the remote file system, we use the umount command. Note there’s no “n” before the “m” in the umount command.

        `sudo umount /media/dave/netscan`
    
![Unmounting the remote file system.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/13-1.png) 

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
<li><a href="https://remote-screen-capture.techidaily.com/new-in-2024-cutting-edge-ipad-voice-recording-tools-3p/"><u>[New] In 2024, Cutting-Edge iPad Voice Recording Tools 3P</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlock-smooth-video-flow-from-your-photobooth-app/"><u>[New] Unlock Smooth Video Flow From Your Photobooth App</u></a></li>
<li><a href="https://extra-skills.techidaily.com/updated-master-class-selecting-the-top-10-4k-shoulder-rigs/"><u>[Updated] Master Class Selecting the Top 10 4K Shoulder Rigs</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unlocking-the-palette-of-possibilities-with-downloadable-spark-ar-luts/"><u>[Updated] Unlocking the Palette of Possibilities with Downloadable Spark AR LUTs</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unlocking-the-secrets-pro-level-iphone-landscape-tips/"><u>[Updated] Unlocking the Secrets Pro-Level iPhone Landscape Tips</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-tempo-trackers-guide-accessible-free-tools/"><u>2024 Approved The Tempo Tracker’s Guide – Accessible, Free Tools</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-5-apps-to-stream-your-favorite-podcasts-on-iphone/"><u>2024 Approved Top 5 Apps to Stream Your Favorite Podcasts on iPhone</u></a></li>
<li><a href="https://common-error.techidaily.com/expert-advice-repairing-wacom-pen-connectivity-in-microsofts-latest-operating-systems/"><u>Expert Advice: Repairing Wacom Pen Connectivity in Microsoft's Latest Operating Systems</u></a></li>
<li><a href="https://tech-recovery.techidaily.com/identifying-inauthentic-friendship-invitations-a-guide/"><u>Identifying Inauthentic Friendship Invitations: A Guide</u></a></li>
<li><a href="https://android-unlock.techidaily.com/in-2024-how-to-remove-screen-lock-pin-on-vivo-x100-pro-like-a-pro-5-easy-ways-by-drfone-android/"><u>In 2024, How To Remove Screen Lock PIN On Vivo X100 Pro Like A Pro 5 Easy Ways</u></a></li>
<li><a href="https://youtube-docs.techidaily.com/24-shine-on-mastering-the-art-of-illumination-for-youtube-videos/"><u>In 2024, Shine On Mastering the Art of Illumination for YouTube Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-boundless-gallery-of-forgotten-artists/"><u>In 2024, The Boundless Gallery of Forgotten Artists</u></a></li>
<li><a href="https://tech-recovery.techidaily.com/maximize-visibility-the-ultimate-guide-to-apple-tv-seo-success/"><u>Maximize Visibility: The Ultimate Guide to Apple TV SEO Success</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-insiders-guide-to-finesse-and-control-on-insta-stories-for-2024/"><u>The Insider's Guide to Finesse and Control on Insta Stories for 2024</u></a></li>
<li><a href="https://buynow-help.techidaily.com/unveiling-the-amazfit-helio-ring-cost-guide-and-official-launch-details/"><u>Unveiling the Amazfit Helio Ring: Cost Guide & Official Launch Details</u></a></li>
</ul></div>

