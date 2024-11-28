---
title: Seamless Access to Distant Linux Machine Files Made Simple
date: 2024-11-23T21:01:12.981Z
updated: 2024-11-28T21:52:56.612Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/a-hand-holding-a-cloud-with-the-linux-mascot-inside-it-surrounded-by-several-file-icons.jpg
---

## Seamless Access to Distant Linux Machine Files Made Simple

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/Xa2_mFu-obA?si=_xDGF1pv-dnuaDOr&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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

 You can test that SSHFS is installed and responding, by asking for its version number.

        `sshfs --version`
    
![Using the --version option to discover the version of SSHFS.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/4-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/U6lCtLUeROA?si=se6OFuis9JpcTGJf&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Making a Remote Connection

 We need to create a directory to act as the _mount point_. It’s where the remote file system will be grafted onto your directory tree.

 I’m going to be connecting to a RaspberryPi that runs network scans for me, so I’m going to call my directory netscan. You could create the mount point in your home directory, but I’m going to drop it in /media/dave/, the default location for mount points in Ubuntu. You should use your own username instead of "dave."

 On other distributions, the default location might be /run/media/ or /mnt. Ultimately, you can create your mount point anywhere you like.

        `sudo mkdir /media/dave/netscan/`
    
![Creating the mount point directory.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/5-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/eu4vwlZcMvM?si=4vEczfVU4BUUFP-t&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Let’s take a look at our new directory.

        `ls -hl /media/dave`
    
![Using ls to check the attributes of the mount point directory.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/6-1.png) 

 Our directory has been created, and it is owned by root. That won’t matter though, we’ll have [read and write permissions](https://ios-unlock.techidaily.com/3-easy-ways-to-factory-reset-a-locked-iphone-13-pro-without-itunes-by-drfone-ios/) on the mounted file system.

 The SSHFS command is long-ish, but fairly simple when you break it down.

        `sudo sshfs -o allow_other,default_permissions dave@net-scan.lan: /media/dave/netscan/`
    
![Mounting the remote file system on the local mount point.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/7-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/4DJKH1uY7P0?si=tCG66XVlbwSKoATj&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

 We can see the home directory of the user account on the remote computer. Any changes you make here are made on the remote drive. Any edits or deletions will affect the remote computer.

 We ought to be able to create a new file.

        `touch new-file.txt  
ls -hl new-file.txt`
    
![Creating a file in the remote file system and checking its attributes.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/9-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/gkdZ3A1mock?si=2zeR5GtTU2VujM_w&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Our file is created, and we’re the owner of it. There was no need to use sudo.

 We can navigate the mounted file system using cd, and we can copy files using the cp command. This effectively transfers files between the remote device and your local computer.

        `cd report  
ls  
cp * /home/dave/Downloads/  
ls /home/dave/Downloads/`
    
![Copying files from the remote file system to the local file system.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/10-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/FLO5dwmJAVs?si=1OYH8rv8aPaMsCiU&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/vQbNyknjJJ8?si=RGVIEWLdPbvRC_r6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://facebook-video-recording.techidaily.com/new-boosting-connectivity-with-creative-fb-slideshow-ideas-for-2024/"><u>[New] Boosting Connectivity with Creative FB Slideshow Ideas for 2024</u></a></li>
<li><a href="https://article-posts.techidaily.com/new-superior-webcams-for-professional-podcasting/"><u>[New] Superior Webcams for Professional Podcasting</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-editors-playbook-for-social-media-stardom/"><u>[New] The Editor's Playbook for Social Media Stardom</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/new-ultimate-adventures-galore-the-best-games-unveiled/"><u>[New] Ultimate Adventures Galore – The Best Games Unveiled</u></a></li>
<li><a href="https://article-posts.techidaily.com/updated-gimp-ultimate-editing-course-review/"><u>[Updated] GIMP Ultimate Editing Course Review</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-filmmakers-guide-to-professional-gopro-cinematography/"><u>[Updated] The Filmmaker’s Guide to Professional Gopro Cinematography</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-prime-cut-film-highlights/"><u>2024 Approved Prime Cut Film Highlights</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unleash-your-creative-potential-with-zooms-step-by-step-filter-guide/"><u>2024 Approved Unleash Your Creative Potential with Zoom's Step-by-Step Filter Guide</u></a></li>
<li><a href="https://some-approaches.techidaily.com/descargue-la-herramienta-online-de-conversion-gratuita-para-cambiar-imagenes-pbm-a-formatos-bmp-con-eficiencia-movavi/"><u>Descargue La Herramienta Online De Conversión Gratuita Para Cambiar Imágenes PBM a Formatos BMP Con Eficiencia - Movavi</u></a></li>
<li><a href="https://sound-issues.techidaily.com/effortless-troubleshooting-repair-your-razer-microphone-with-simple-solutions/"><u>Effortless Troubleshooting: Repair Your Razer Microphone with Simple Solutions</u></a></li>
<li><a href="https://some-techniques.techidaily.com/in-2024-explore-top-5-non-samsung-360-cameras-today/"><u>In 2024, Explore Top 5 Non-Samsung 360 Cameras Today</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-mp3-from-pinterest-video-files-with-these-steps/"><u>In 2024, Unlocking MP3 From Pinterest Video Files with These Steps</u></a></li>
<li><a href="https://technical-tips.techidaily.com/maximizing-your-education-how-to-claim-the-dell-student-price-advantage/"><u>Maximizing Your Education: How To Claim the Dell Student Price Advantage</u></a></li>
<li><a href="https://mondly-stories.techidaily.com/sociable-by-nature-unlocking-the-power-of-french-greetings/"><u>Sociable by Nature: Unlocking the Power of French Greetings</u></a></li>
<li><a href="https://some-skills.techidaily.com/streamline-your-video-workflow-youtube-to-mpeg-essentials-for-2024/"><u>Streamline Your Video Workflow YouTube-to-MPEG Essentials for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-essential-list-7-leading-generators-for-nft-artworks-for-2024/"><u>The Essential List 7 Leading Generators for NFT Artworks for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-full-breakdown-of-toolwizs-image-processing-for-2024/"><u>The Full Breakdown of Toolwiz's Image Processing for 2024</u></a></li>
</ul></div>

