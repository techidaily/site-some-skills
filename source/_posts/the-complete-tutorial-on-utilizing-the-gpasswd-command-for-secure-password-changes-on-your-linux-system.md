---
title: The Complete Tutorial on Utilizing the Gpasswd Command for Secure Password Changes on Your Linux System
date: 2024-11-21T19:15:53.907Z
updated: 2024-11-28T22:12:41.118Z
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/0pSRlspzW-A?si=A82G3Yxwj_31cKDq&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Setting Password for a Group

 The most common use of the gpasswd command is to [set a password](https://unlock-android.techidaily.com/in-2024-best-honor-100-pattern-lock-removal-tools-remove-android-pattern-lock-without-losing-data-by-drfone-android/) for specific groups. I'll first create a group we can test it upon. Feel free to skip this if you already have a group. To create a new group on your Linux system, run:

sudo groupadd demogroup

![The Linux terminal displaying the process of creating a new group on Linux using the groupadd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/1-8.png) 

 You can use any other name than "demogroup". To confirm if the group creation was successful, display all groups using:

cat /etc/group

![The Linux terminal showing a list of all groups in the system](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/2-7.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/td3ojuzhloY?si=N_maQNiJWrJp7XZl&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 You can see the new group on the list. Now let's create a password for the group. To do that, use:

sudo gpasswd demogroup

 You'll be asked to enter your user password first (since you used sudo). Then you'll be asked to enter a new password for the group. After entering the new password, you need to re-enter it to confirm the password.

![The Linux terminal displaying the process of setting a new password for a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/3-7.png) 

 Now if I try to log into this group, the system will ask for a password. That's because I'm not a member of the group. To log into the group, run:

newgrp demogroup

![The Linux terminal showing the process of logging into a group in Linux using the newgrp command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/4-4.png) 

##  Removing Password from Group

 If you want to remove a password from a group, you can do that using the -r flag. Remove the password by passing the group name along with the flag like this:

sudo gpasswd -r demogroup

![The Linux terminal showing the process of removing the password from a a group in Linux using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/10-3.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/KKFdFHaVIJg?si=x2vLw7ty3FtHX-9T&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 If you try to log into the group now as a member, you'll be able to do so without entering the password.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/-G7cU8dYvuI?si=JaKqRcW6qq9CDvty&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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
                    

##  Setting the List of Group Members

 The gpasswd command allows you to replace the current members of the group with members you want to add. In other words, you can empty the group and then add as many new members as you want with a single command. The -M flag serves that purpose. So for example, currently there are user1 and user2 in a group. You want to remove them and add user3 and user4\. To do this, run:

sudo gpasswd -M user2,user3 demogroup

![The Linux terminal showing the process of setting the list of members of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/11-3.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/-Bov2KfWQ_Y?si=MnVczisgeJ-sGW2r&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Now if you check the members list of the group, you should see that the previous members are not there. Instead, you'll find the new members.

getent group demogroup

![The Linux terminal displaying the current the members of a group in Linux after setting the members list using gpasswd](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/12-2.png) 

##  Promoting a User as the Group Administrator

 You can grant someone administrative privileges of a group using the -A flag. Simply pass the name of the member and the group of which you want to make him the administrator. See the command below:

sudo gpasswd -A zunaid demogroup

 This gives the user "zunaid" administrative privileges in the group called "demogroup".

![The Linux terminal showcasing how to make a user the administrator of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/8-4.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/FATJWpNYmio?si=72ugPTb3vJXz6cAM&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 This doesn't give any output to the terminal. However, you can see the list of administrators of the group to confirm if the operation was successful. Do that with this command:

sudo cat /etc/gshadow

![The Linux terminal displaying the the administrators of every group in Linux](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/9-3.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/lCpzYpVPIZA?si=hNte-mPRIzjvqpRy&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/_7AYCS7zBU0?si=7R9oIpE4hyEbtk3x&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://snapchat-videos.techidaily.com/new-2024-approved-captivate-your-circle-the-art-of-sending-gifs-on-snapchat/"><u>[New] 2024 Approved Captivate Your Circle The Art of Sending Gifs on Snapchat</u></a></li>
<li><a href="https://fox-helps.techidaily.com/new-enhancing-images-with-audio-a-guide-for-2024/"><u>[New] Enhancing Images with Audio A Guide for 2024</u></a></li>
<li><a href="https://article-posts.techidaily.com/new-starting-up-in-periscope-tips-to-launch-your-wealth-journey-for-2024/"><u>[New] Starting Up in Periscope Tips to Launch Your Wealth Journey for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-excellent-videocameras-of-the-year-2024/"><u>[New] The Excellent Videocameras of the Year 2024</u></a></li>
<li><a href="https://fox-direct.techidaily.com/updated-2024-approved-achieve-peak-performance-with-win11-and-zoom-integration/"><u>[Updated] 2024 Approved Achieve Peak Performance with Win11 & Zoom Integration</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-cutting-edge-professional-cameras-a-360-overview-2023/"><u>[Updated] The Cutting-Edge Professional Cameras - A 360° Overview, 2023</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-transforming-business-with-metaverse-ideas/"><u>[Updated] Transforming Business with Metaverse Ideas</u></a></li>
<li><a href="https://youtube-sure.techidaily.com/approved-the-ultimate-guide-to-free-youtube-intros-and-templates/"><u>2024 Approved The Ultimate Guide to Free YouTube Intros & Templates</u></a></li>
<li><a href="https://review-topics.techidaily.com/4-most-known-ways-to-find-someone-on-tinder-for-honor-magic-vs-2-by-name-drfone-by-drfone-virtual-android/"><u>4 Most-Known Ways to Find Someone on Tinder For Honor Magic Vs 2 by Name | Dr.fone</u></a></li>
<li><a href="https://tech-recovery.techidaily.com/enhance-conversations-with-bots-top-6-strategies-to-improve-ai-chatbot-responses/"><u>Enhance Conversations with Bots: Top 6 Strategies to Improve AI Chatbot Responses</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-superior-app-dev-editors-top-15-selection/"><u>In 2024, Superior App Dev Editors Top 15 Selection</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-influencers-playbook-5-tips-for-building-brand-authority-through-reddit-partnerships/"><u>In 2024, The Influencer's Playbook 5 Tips for Building Brand Authority Through Reddit Partnerships</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-time-saving-tips-for-a-swift-google-photo-collage-crafting/"><u>In 2024, Time-Saving Tips for a Swift Google Photo Collage Crafting</u></a></li>
<li><a href="https://hardware-reviews.techidaily.com/mastering-modern-technology-essential-reviews-by-the-tomer/"><u>Mastering Modern Technology: Essential Reviews by The Tom'er</u></a></li>
<li><a href="https://mondly-stories.techidaily.com/unlocking-fluency-a-guide-to-self-taught-french/"><u>Unlocking Fluency: A Guide to Self-Taught French</u></a></li>
</ul></div>

