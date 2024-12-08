---
title: Seamless Access to Distant Linux Machine Files Made Simple
date: 2024-12-04T21:10:24.891Z
updated: 2024-12-07T21:11:02.054Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/-yZKNLxj3po?si=-RbF6nCJEVlHWP-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  What is SSHFS?

 SSHFS gets its name from _S_ecure _SH_ell and _F_ile _S_ystem.

 Regular SSH lets you connect to remote computers from a terminal window. Your commands are executed on the remote computer.

 SSHFS is different. SSHFS mounts a remote file system on your local computer. The mounted file system appears as a normal branch of your local file system’s directory tree. You access the remote files just like any other file on your computer. You can browse through the directories and files using the cd command or a file browser.

 Working with the files uses the applications on your local computer, not the remote computer. For example, editing a file uses your local editor. In fact, you’ve got access to all of your local applications, and can use them as you wish on the remote files.

 SSHFS isn’t really suited to executing programs located on the remote computer. Launching an executable from the mounted file system probably won’t work well, as it will try to run on your local computer. That’s the sort of stuff best suited to a regular SSH connection. But, for working with remote files, SSHFS can't be beat.

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

 On Manjaro, you’ll use pacman:

        `sudo pacman -S sshfs`
    
![Installing SSHFS on Manjaro.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/3-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/_dOmuXhsV6Y?si=aT6vgPbDx4ajjvdr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 You can test that SSHFS is installed and responding, by asking for its version number.

        `sshfs --version`
    
![Using the --version option to discover the version of SSHFS.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/4-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/3koT_-kvbks?si=sQV7FzPiz6GYITrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/zAzTErKy6h8?si=vi5z3M9_7fW6qiAJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Our directory has been created, and it is owned by root. That won’t matter though, we’ll have [read and write permissions](https://ios-unlock.techidaily.com/3-easy-ways-to-factory-reset-a-locked-iphone-13-pro-without-itunes-by-drfone-ios/) on the mounted file system.

 The SSHFS command is long-ish, but fairly simple when you break it down.

        `sudo sshfs -o allow_other,default_permissions dave@net-scan.lan: /media/dave/netscan/`
    
![Mounting the remote file system on the local mount point.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/7-1.png) 

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
<iframe width="560" height="315" src="https://www.youtube.com/embed/Iz2LYWd8EqI?si=G_3CqFRAmeVPczjj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jng92DT1n_Y?si=EdMRoNAFi0Q6mP7G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/HaM818fFKXQ?si=ZZLA4lFSHSgCpSE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://screen-video-capture.techidaily.com/new-2024-approved-3-ways-to-record-whatsapp-call/"><u>[New] 2024 Approved 3 Ways to Record WhatsApp Call</u></a></li>
<li><a href="https://youtube-clips.techidaily.com/new-biggest-fifa-visuals-youtube-insights-graphed/"><u>[New] Biggest FIFA Visuals YouTube Insights Graphed</u></a></li>
<li><a href="https://youtube-zero.techidaily.com/eamless-sound-shift-ultimate-guide-to-video-to-audio-tools-for-2024/"><u>[New] Seamless Sound Shift Ultimate Guide to Video-to-Audio Tools for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-recorders-bible-for-clear-conversations/"><u>[New] The Ultimate Recorder's Bible for Clear Conversations</u></a></li>
<li><a href="https://youtube-videos.techidaily.com/updated-crafting-engaging-youtube-thumbnails-a-step-by-step-guide/"><u>[Updated] Crafting Engaging YouTube Thumbnails A Step-by-Step Guide</u></a></li>
<li><a href="https://facebook-videos.techidaily.com/updated-in-2024-inventory-of-facebook-video-ratios/"><u>[Updated] In 2024, Inventory of Facebook Video Ratios</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-ultimate-path-to-becoming-an-fcp-specialist/"><u>[Updated] The Ultimate Path to Becoming an FCP Specialist</u></a></li>
<li><a href="https://youtube-data.techidaily.com/approved-top-10-most-watched-youtube-videos-within-24-hours/"><u>2024 Approved Top 10 Most Watched YouTube Videos Within 24 Hours</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-transforming-augmented-reality-with-downloaded-free-luts-for-development/"><u>2024 Approved Transforming Augmented Reality with Downloaded, Free LUTs for Development</u></a></li>
<li><a href="https://hardware-updates.techidaily.com/direct-download-enhance-your-audio-setup-with-behringer-usb-interface-drivers/"><u>Direct Download: Enhance Your Audio Setup with Behringer USB Interface Drivers</u></a></li>
<li><a href="https://activate-lock.techidaily.com/in-2024-bypass-activation-lock-from-iphone-15-pro-max-4-easy-ways-by-drfone-ios/"><u>In 2024, Bypass Activation Lock From iPhone 15 Pro Max - 4 Easy Ways</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unraveling-the-excellence-a-guide-to-choosing-best-titling-talents-online/"><u>In 2024, Unraveling the Excellence A Guide To Choosing Best Titling Talents Online</u></a></li>
<li><a href="https://video-content-creator.techidaily.com/new-in-2024-cinematic-storytelling-with-fcpx-tips-and-techniques-for-stunning-videos/"><u>New In 2024, Cinematic Storytelling with FCPX Tips and Techniques for Stunning Videos</u></a></li>
</ul></div>

