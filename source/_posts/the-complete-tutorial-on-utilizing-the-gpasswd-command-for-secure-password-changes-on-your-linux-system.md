---
title: The Complete Tutorial on Utilizing the Gpasswd Command for Secure Password Changes on Your Linux System
date: 2024-10-05T21:15:37.860Z
updated: 2024-10-09T22:05:52.092Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/52849181503_9f40063e06_o-1.jpg
---

## The Complete Tutorial on Utilizing the Gpasswd Command for Secure Password Changes on Your Linux System

### Key Takeaways

* Use gpasswd to manage group members & passwords, avoiding security risks & controlling group access efficiently.
* The basic syntax is "gpasswd \[option\] \[group\]".
* Execute commands like "sudo gpasswd -a user group" to add users and "sudo gpasswd -d user group" to remove them.

 Want an easy solution to managing group members and passwords on Linux? The gpasswd command will help you do that. It's used for managing and administering the "/etc/group" and "/etc/gshadow" passwords, members, and administrators. Let's get started.

##  What Makes the gpasswd Command Useful

 The gpasswd command lets you administer groups on Linux. Group passwords don't get used a lot in part because of the security risk they pose: multiple people sharing a password increases the opportunity for accidental or malicious exposure. Any member of the group can add or remove members, controlling the group access, which could easily get out of hand.

 There are a few ways to overcome this problem. You can avoid using group passwords when possible and use alternative mechanisms such as sudoers or access control lists. You can also limit access to the group passwords using privilege control so that only authorized members can do any operations.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2094421/7443" target="_top" id="2094421">
  <img src="//a.impactradius-go.com/display-ad/7443-2094421" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2094421/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  gpasswd Command Basic Syntax and Options

 The basic syntax of the gpasswd command allows it to take two arguments: an option or flag argument and the name of the group where you'd like to run the operation. Here's how it looks:

gpasswd [option] group

 Here are the options you can use with the command:

* \-a, --add _user_ : To add a user to the named group.
* \-d, --delete _user_ : To remove a user from the named group.
* \-h, --help : Displays the instructions to use the command.
* \-R, --restrict : Sets the group password to "!" so that only group members with a password are allowed to use newgrp to join the named group.
* \-r, --remove-password : To remove the password from the named group. The group password becomes empty.
* \-A, --administrators _user_ : Sets the list of administrative users.
* \-M, --members _user_ : Sets the list of group members.
* \-Q, --root CHROOT\_DIR : Applies changes in the CHROOT\_DIR directory and uses the configuration files from the CHROOT\_DIR directory.

 We'll see how to use these options in the upcoming sections of the guide.

##  Setting Password for a Group

 The most common use of the gpasswd command is to [set a password](https://unlock-android.techidaily.com/in-2024-best-honor-100-pattern-lock-removal-tools-remove-android-pattern-lock-without-losing-data-by-drfone-android/) for specific groups. I'll first create a group we can test it upon. Feel free to skip this if you already have a group. To create a new group on your Linux system, run:

sudo groupadd demogroup

![The Linux terminal displaying the process of creating a new group on Linux using the groupadd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/1-8.png) 

<!-- affiliate ads begin -->
<a href="https://bluettius.sjv.io/c/5597632/2139122/17108" target="_top" id="2139122">
  <img src="//a.impactradius-go.com/display-ad/17108-2139122" border="0" alt="https://techidaily.com" width="468" height="60"/>
</a>
<img height="0" width="0" src="https://bluettius.sjv.io/i/5597632/2139122/17108" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 You can use any other name than "demogroup". To confirm if the group creation was successful, display all groups using:

cat /etc/group

![The Linux terminal showing a list of all groups in the system](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/2-7.png) 

 You can see the new group on the list. Now let's create a password for the group. To do that, use:

sudo gpasswd demogroup

 You'll be asked to enter your user password first (since you used sudo). Then you'll be asked to enter a new password for the group. After entering the new password, you need to re-enter it to confirm the password.

![The Linux terminal displaying the process of setting a new password for a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/3-7.png) 

 Now if I try to log into this group, the system will ask for a password. That's because I'm not a member of the group. To log into the group, run:

newgrp demogroup

![The Linux terminal showing the process of logging into a group in Linux using the newgrp command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/4-4.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2044582/7443" target="_top" id="2044582">
  <img src="//a.impactradius-go.com/display-ad/7443-2044582" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2044582/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Removing Password from Group

 If you want to remove a password from a group, you can do that using the -r flag. Remove the password by passing the group name along with the flag like this:

sudo gpasswd -r demogroup

![The Linux terminal showing the process of removing the password from a a group in Linux using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/10-3.png) 

 If you try to log into the group now as a member, you'll be able to do so without entering the password.

##  Adding a User to a Group

 The gpasswd command lets you add new members to groups. The -a option is for that purpose. The command syntax is as follows:

sudo gpasswd -a user group

 So after adding the -a option, you need to pass the member's username and then the group to which you want to add the user. For example, I want to add a user to the new group I created earlier. Here's the command for that:

sudo gpasswd -a zunaid demogroup

![The Linux terminal showing how to use the gpasswd command to add a member to a group](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/5-2.png) 

 You can confirm whether the member was added or not. For that, use the below command:

getent group demogroup

![The Linux terminal shows the current members of the group named demogroup](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/6-7.png) 

 As you can see, I've successfully added myself to the group using gpasswd. For adding multiple users, you'll need to issue separate commands for each, like this:

sudo gpasswd -a user1 group

    
                    sudo gpasswd -a user2 group
                    

##  Removing a User From a Group

 If you want to delete a user from a specific group, you have the -d option for that. Much like the command for adding, simply provide the username and then the group name to the command, like this:

sudo gpasswd -d user group

 So if I want to remove myself from "demogroup", this is the command I need to run:

sudo gpasswd -d zunaid demogroup

![The Linux terminal showing how to remove a user from a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/7-6.png) 

 Again, you can confirm if the user was removed successfully by [listing the group members](https://hardware-updates.techidaily.com/comprehensive-guide-downloading-and-installing-canon-ip1-10-drivers-on-windows-windows-111087/) with this command:

getent group demogroup

 You may need to restart your device or re-login into your session for the changes to take effect. To remove multiple users from a group, use the same repeated command technique as when adding.

sudo gpasswd -d user1 group

    
                    sudo gpasswd -d user2 group
                    

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2123749/7443" target="_top" id="2123749">
  <img src="//a.impactradius-go.com/display-ad/7443-2123749" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2123749/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Setting the List of Group Members

 The gpasswd command allows you to replace the current members of the group with members you want to add. In other words, you can empty the group and then add as many new members as you want with a single command. The -M flag serves that purpose. So for example, currently there are user1 and user2 in a group. You want to remove them and add user3 and user4\. To do this, run:

sudo gpasswd -M user2,user3 demogroup

![The Linux terminal showing the process of setting the list of members of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/11-3.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1972698/19272" target="_top" id="1972698">
  <img src="//a.impactradius-go.com/display-ad/19272-1972698" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1972698/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Now if you check the members list of the group, you should see that the previous members are not there. Instead, you'll find the new members.

getent group demogroup

![The Linux terminal displaying the current the members of a group in Linux after setting the members list using gpasswd](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/12-2.png) 

<!-- affiliate ads begin -->
<span id="1374820">
					<video width="200" height="200" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1374820.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/15852-1374820">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1374820.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:125px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fthefitville.pxf.io%2Fc%2F5597632%2F1374820%2F15852'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1374820/15852" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Promoting a User as the Group Administrator

 You can grant someone administrative privileges of a group using the -A flag. Simply pass the name of the member and the group of which you want to make him the administrator. See the command below:

sudo gpasswd -A zunaid demogroup

 This gives the user "zunaid" administrative privileges in the group called "demogroup".

![The Linux terminal showcasing how to make a user the administrator of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/8-4.png) 

 This doesn't give any output to the terminal. However, you can see the list of administrators of the group to confirm if the operation was successful. Do that with this command:

sudo cat /etc/gshadow

![The Linux terminal displaying the the administrators of every group in Linux](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/9-3.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2151865/7443" target="_top" id="2151865">
  <img src="//a.impactradius-go.com/display-ad/7443-2151865" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2151865/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  gpasswd Makes Group Management Easy

 Now you've learned how to use the gpasswd command for controlling group access on Linux. I've covered some of its most useful operations. If you want to learn more about the command, check out its [manpage](https://man7.org/linux/man-pages/man1/gpasswd.1.html) or run the **gpasswd -h** command on your terminal.

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
<li><a href="https://youtube-webster.techidaily.com/aptivate-viewers-designing-engaging-youtube-trailers-with-filmora/"><u>[New] Captivate Viewers Designing Engaging YouTube Trailers with Filmora</u></a></li>
<li><a href="https://facebook-video-files.techidaily.com/new-swipe-right-for-music-top-10-fb-vids-today/"><u>[New] Swipe Right for Music Top 10 FB Vids Today</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-art-of-pinpointing-perfect-pexels-photographs/"><u>[New] The Art of Pinpointing Perfect Pexels Photographs</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-guide-to-managing-fast-forward-functions/"><u>[New] The Ultimate Guide to Managing Fast Forward Functions</u></a></li>
<li><a href="https://facebook-record-videos.techidaily.com/updated-in-2024-best-streaming-setup-leading-livestream-hardware-and-software-guide/"><u>[Updated] In 2024, Best Streaming Setup Leading Livestream Hardware & Software Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-subtle-volume-lessening-masterclass-using-lumafusion/"><u>2024 Approved Subtle Volume Lessening Masterclass Using Lumafusion</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-photographers-toolkit-top-text-editors-for-images/"><u>2024 Approved The Photographer's Toolkit Top Text Editors for Images</u></a></li>
<li><a href="https://desktop-recording.techidaily.com/2024-approved-the-ultimate-list-of-kung-fu-video-games/"><u>2024 Approved The Ultimate List of Kung Fu Video Games</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-unlock-itel-p40-bootloader-easily-by-drfone-android/"><u>In 2024, How to Unlock Itel P40 Bootloader Easily</u></a></li>
<li><a href="https://youtube-sure.techidaily.com/24-ios-excellence-leading-apps-to-unlock-youtube-videos/"><u>In 2024, IOS Excellence Leading Apps to Unlock YouTube Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-future-of-wagering-vegas-pros-evolution-in-21/"><u>In 2024, The Future of Wagering Vegas Pro's Evolution in '21</u></a></li>
<li><a href="https://some-guidance.techidaily.com/in-2024-the-unseen-enthusiasts-blueprint-for-instagram-live-viewership/"><u>In 2024, The Unseen Enthusiast’s Blueprint for Instagram Live Viewership</u></a></li>
<li><a href="https://some-guidance.techidaily.com/in-2024-top-srt-enhancements-maximizing-performance-on-both-platforms/"><u>In 2024, Top SRT Enhancements Maximizing Performance on Both Platforms</u></a></li>
<li><a href="https://extra-support.techidaily.com/navigating-the-social-sphere-instaplustiktok-for-2024/"><u>Navigating the Social Sphere Insta+TikTok for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/thrill-seekers-challenge-hero5b-vs-hero5-session-in-action-for-2024/"><u>Thrill Seekers Challenge Hero5B Vs Hero5 Session in Action for 2024</u></a></li>
</ul></div>

