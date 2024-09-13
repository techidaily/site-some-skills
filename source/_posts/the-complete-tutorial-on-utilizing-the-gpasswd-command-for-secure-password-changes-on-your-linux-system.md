---
title: The Complete Tutorial on Utilizing the Gpasswd Command for Secure Password Changes on Your Linux System
date: 2024-09-11T09:30:24.370Z
updated: 2024-09-13T02:51:46.025Z
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

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2136613/26400" target="_top" id="2136613">
  <img src="//a.impactradius-go.com/display-ad/26400-2136613" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2136613/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  What Makes the gpasswd Command Useful

 The gpasswd command lets you administer groups on Linux. Group passwords don't get used a lot in part because of the security risk they pose: multiple people sharing a password increases the opportunity for accidental or malicious exposure. Any member of the group can add or remove members, controlling the group access, which could easily get out of hand.

 There are a few ways to overcome this problem. You can avoid using group passwords when possible and use alternative mechanisms such as sudoers or access control lists. You can also limit access to the group passwords using privilege control so that only authorized members can do any operations.

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
<a href="https://unicoeye.pxf.io/c/5597632/2134228/18498" target="_top" id="2134228">
  <img src="//a.impactradius-go.com/display-ad/18498-2134228" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://unicoeye.pxf.io/i/5597632/2134228/18498" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 You can use any other name than "demogroup". To confirm if the group creation was successful, display all groups using:

cat /etc/group

![The Linux terminal showing a list of all groups in the system](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/2-7.png) 

<!-- affiliate ads begin -->
<a href="https://bluettius.sjv.io/c/5597632/2139109/17108" target="_top" id="2139109">
  <img src="//a.impactradius-go.com/display-ad/17108-2139109" border="0" alt="https://techidaily.com" width="320" height="90"/>
</a>
<img height="0" width="0" src="https://bluettius.sjv.io/i/5597632/2139109/17108" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 You can see the new group on the list. Now let's create a password for the group. To do that, use:

sudo gpasswd demogroup

 You'll be asked to enter your user password first (since you used sudo). Then you'll be asked to enter a new password for the group. After entering the new password, you need to re-enter it to confirm the password.

![The Linux terminal displaying the process of setting a new password for a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/3-7.png) 

 Now if I try to log into this group, the system will ask for a password. That's because I'm not a member of the group. To log into the group, run:

newgrp demogroup

![The Linux terminal showing the process of logging into a group in Linux using the newgrp command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/4-4.png) 

<!-- affiliate ads begin -->
<a href="https://unicoeye.pxf.io/c/5597632/2134492/18498" target="_top" id="2134492">
  <img src="//a.impactradius-go.com/display-ad/18498-2134492" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://unicoeye.pxf.io/i/5597632/2134492/18498" style="position:absolute;visibility:hidden;" border="0" />
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

<!-- affiliate ads begin -->
<span id="1975562">
					<video width="128" height="480" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1975562.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1975562">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1975562.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:80px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1975562%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1975562/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 You can confirm whether the member was added or not. For that, use the below command:

getent group demogroup

![The Linux terminal shows the current members of the group named demogroup](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/6-7.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2118313/7443" target="_top" id="2118313">
  <img src="//a.impactradius-go.com/display-ad/7443-2118313" border="0" alt="https://techidaily.com" width="600" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2118313/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 As you can see, I've successfully added myself to the group using gpasswd. For adding multiple users, you'll need to issue separate commands for each, like this:

sudo gpasswd -a user1 group

    
                    sudo gpasswd -a user2 group
                    

##  Removing a User From a Group

 If you want to delete a user from a specific group, you have the -d option for that. Much like the command for adding, simply provide the username and then the group name to the command, like this:

sudo gpasswd -d user group

 So if I want to remove myself from "demogroup", this is the command I need to run:

sudo gpasswd -d zunaid demogroup

![The Linux terminal showing how to remove a user from a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/7-6.png) 

<!-- affiliate ads begin -->
<a href="https://wigfever.sjv.io/c/5597632/2014859/22899" target="_top" id="2014859">
  <img src="//a.impactradius-go.com/display-ad/22899-2014859" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://wigfever.sjv.io/i/5597632/2014859/22899" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Again, you can confirm if the user was removed successfully by [listing the group members](https://hardware-updates.techidaily.com/comprehensive-guide-downloading-and-installing-canon-ip1-10-drivers-on-windows-windows-111087/) with this command:

getent group demogroup

 You may need to restart your device or re-login into your session for the changes to take effect. To remove multiple users from a group, use the same repeated command technique as when adding.

sudo gpasswd -d user1 group

    
                    sudo gpasswd -d user2 group
                    

##  Setting the List of Group Members

 The gpasswd command allows you to replace the current members of the group with members you want to add. In other words, you can empty the group and then add as many new members as you want with a single command. The -M flag serves that purpose. So for example, currently there are user1 and user2 in a group. You want to remove them and add user3 and user4\. To do this, run:

sudo gpasswd -M user2,user3 demogroup

![The Linux terminal showing the process of setting the list of members of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/11-3.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2115935/19272" target="_top" id="2115935">
  <img src="//a.impactradius-go.com/display-ad/19272-2115935" border="0" alt="https://techidaily.com" width="392" height="72"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2115935/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Now if you check the members list of the group, you should see that the previous members are not there. Instead, you'll find the new members.

getent group demogroup

![The Linux terminal displaying the current the members of a group in Linux after setting the members list using gpasswd](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/12-2.png) 

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2137203/26400" target="_top" id="2137203">
  <img src="//a.impactradius-go.com/display-ad/26400-2137203" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2137203/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Promoting a User as the Group Administrator

 You can grant someone administrative privileges of a group using the -A flag. Simply pass the name of the member and the group of which you want to make him the administrator. See the command below:

sudo gpasswd -A zunaid demogroup

 This gives the user "zunaid" administrative privileges in the group called "demogroup".

![The Linux terminal showcasing how to make a user the administrator of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/8-4.png) 

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2137205/26400" target="_top" id="2137205">
  <img src="//a.impactradius-go.com/display-ad/26400-2137205" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2137205/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 This doesn't give any output to the terminal. However, you can see the list of administrators of the group to confirm if the operation was successful. Do that with this command:

sudo cat /etc/gshadow

![The Linux terminal displaying the the administrators of every group in Linux](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/9-3.png) 

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
<li><a href="https://discord-videos.techidaily.com/new-in-2024-unlock-a-vast-collection-of-animated-emojis-top-8-free-sources/"><u>[New] In 2024, Unlock a Vast Collection of Animated Emojis Top 8 FREE Sources</u></a></li>
<li><a href="https://instagram-video-recordings.techidaily.com/updated-burst-into-action-the-art-of-engaging-instagram-boomers/"><u>[Updated] Burst Into Action The Art of Engaging Instagram Boomers</u></a></li>
<li><a href="https://facebook-video-footage.techidaily.com/updated-leading-10-decibel-leveler-apps-for-all-os/"><u>[Updated] Leading 10 Decibel Leveler Apps for All OS</u></a></li>
<li><a href="https://some-approaches.techidaily.com/1-effortless-techniques-to-download-high-quality-audio-from-youtube/"><u>1. Effortless Techniques to Download High-Quality Audio From YouTube</u></a></li>
<li><a href="https://screen-recording.techidaily.com/how-to-record-lectures-on-mac-for-2024/"><u>How to Record Lectures on Mac for 2024</u></a></li>
<li><a href="https://sound-tweaking.techidaily.com/new-top-6-online-audio-archives-for-high-quality-whoosh-sounds-for-2024/"><u>New Top 6 Online Audio Archives for High-Quality Whoosh Sounds for 2024</u></a></li>
<li><a href="https://buynow-tips.techidaily.com/professional-comparisons-leading-document-and-image-scanner-picks-of-2024/"><u>Professional Comparisons: Leading Document and Image Scanner Picks of 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/step-by-step-guide-to-substituting-characters-with-line-breaks-using-notepadplusplus/"><u>Step-by-Step Guide to Substituting Characters with Line Breaks Using Notepad++</u></a></li>
<li><a href="https://media-tips.techidaily.com/step-by-step-guide-maintaining-high-quality-audio-in-mp3-editing-on-any-device/"><u>Step-by-Step Guide: Maintaining High-Quality Audio in MP3 Editing on Any Device</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-top-picks-from-how-to-geeks-prestigious-ces-2024-honors/"><u>The Top Picks From How-To Geek’s Prestigious CES 2024 Honors</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-list-of-7-indispensable-software-for-windows-users-explained/"><u>The Ultimate List of 7 Indispensable Software for Windows Users Explained</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/top-4-ways-for-apple-iphone-6-to-mac-mirroring-drfone-by-drfone-ios/"><u>Top 4 Ways for Apple iPhone 6 to Mac Mirroring | Dr.fone</u></a></li>
</ul></div>

