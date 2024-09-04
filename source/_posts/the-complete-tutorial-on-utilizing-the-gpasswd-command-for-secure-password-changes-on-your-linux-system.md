---
title: The Complete Tutorial on Utilizing the Gpasswd Command for Secure Password Changes on Your Linux System
date: 2024-09-03T10:46:57.540Z
updated: 2024-09-04T10:46:57.540Z
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
<a href="https://aligracehair.sjv.io/c/5597632/2027195/19272" target="_top" id="2027195">
  <img src="//a.impactradius-go.com/display-ad/19272-2027195" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2027195/19272" style="position:absolute;visibility:hidden;" border="0" />
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
<a href="https://appsumo.8odi.net/c/5597632/2082539/7443" target="_top" id="2082539">
  <img src="//a.impactradius-go.com/display-ad/7443-2082539" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2082539/7443" style="position:absolute;visibility:hidden;" border="0" />
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
<a href="https://appsumo.8odi.net/c/5597632/2030395/7443" target="_top" id="2030395">
  <img src="//a.impactradius-go.com/display-ad/7443-2030395" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2030395/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
<!-- affiliate ads begin -->
<iframe id="iframe_1982457" src="//a.impactradius-go.com/gen-ad-code/5597632/1982457/22993" width="720" height="90" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
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
<a href="https://appsumo.8odi.net/c/5597632/2100527/7443" target="_top" id="2100527">
  <img src="//a.impactradius-go.com/display-ad/7443-2100527" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2100527/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 You can confirm whether the member was added or not. For that, use the below command:

getent group demogroup

![The Linux terminal shows the current members of the group named demogroup](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/6-7.png) 

 As you can see, I've successfully added myself to the group using gpasswd. For adding multiple users, you'll need to issue separate commands for each, like this:

sudo gpasswd -a user1 group

    
                    sudo gpasswd -a user2 group
                    

<!-- affiliate ads begin -->
<iframe id="iframe_1983552" src="//a.impactradius-go.com/gen-ad-code/5597632/1983552/22993" width="720" height="90" scrolling="no" frameborder="0" marginheight="0" marginwidth="0"></iframe>
<!-- affiliate ads end -->
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
<a href="https://appsumo.8odi.net/c/5597632/2049388/7443" target="_top" id="2049388">
  <img src="//a.impactradius-go.com/display-ad/7443-2049388" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2049388/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Setting the List of Group Members

 The gpasswd command allows you to replace the current members of the group with members you want to add. In other words, you can empty the group and then add as many new members as you want with a single command. The -M flag serves that purpose. So for example, currently there are user1 and user2 in a group. You want to remove them and add user3 and user4\. To do this, run:

sudo gpasswd -M user2,user3 demogroup

![The Linux terminal showing the process of setting the list of members of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/11-3.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2068440/7443" target="_top" id="2068440">
  <img src="//a.impactradius-go.com/display-ad/7443-2068440" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2068440/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
 Now if you check the members list of the group, you should see that the previous members are not there. Instead, you'll find the new members.

getent group demogroup

![The Linux terminal displaying the current the members of a group in Linux after setting the members list using gpasswd](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/12-2.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2030373/7443" target="_top" id="2030373">
  <img src="//a.impactradius-go.com/display-ad/7443-2030373" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2030373/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
##  Promoting a User as the Group Administrator

 You can grant someone administrative privileges of a group using the -A flag. Simply pass the name of the member and the group of which you want to make him the administrator. See the command below:

sudo gpasswd -A zunaid demogroup

 This gives the user "zunaid" administrative privileges in the group called "demogroup".

![The Linux terminal showcasing how to make a user the administrator of a group using the gpasswd command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/02/8-4.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1938721/19272" target="_top" id="1938721">
  <img src="//a.impactradius-go.com/display-ad/19272-1938721" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1938721/19272" style="position:absolute;visibility:hidden;" border="0" />
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
<li><a href="https://some-skills.techidaily.com/new-the-art-of-leading-lines-in-iphone-visual-storytelling/"><u>[New] The Art of Leading Lines in iPhone Visual Storytelling</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-blueprint-for-lifelong-memories-storing-vintage-photos-digitally/"><u>[New] The Blueprint for Lifelong Memories  Storing Vintage Photos Digitally</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-definitive-srt-file-generation-manual/"><u>[New] The Definitive SRT File Generation Manual</u></a></li>
<li><a href="https://fox-hovers.techidaily.com/new-the-monetary-reality-of-being-a-podcaster/"><u>[New] The Monetary Reality of Being a Podcaster</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-race-for-excellence-av1-vs-vp9-codec/"><u>[New] The Race for Excellence  AV1 Vs. VP9 Codec</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-guide-to-mastering-zoom-in-windows-10/"><u>[New] The Ultimate Guide to Mastering Zoom in Windows 10</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-online-spaces-for-youtube-traffic-increase/"><u>[New] Top Online Spaces for YouTube Traffic Increase</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-the-potential-of-onestream-live-streaming/"><u>[New] Unlocking the Potential of OneStream Live Streaming</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-vault-selection-for-top-corporate-use/"><u>[New] Vault Selection for Top Corporate Use</u></a></li>
<li><a href="https://digital-screen-recording.techidaily.com/updated-green-thumbs-united-top-10-farm-titles-for-friendly-playtime/"><u>[Updated] Green Thumbs United  Top 10 Farm Titles for Friendly Playtime</u></a></li>
<li><a href="https://snapchat-videos.techidaily.com/updated-in-2024-pixel-perfect-fun-unveiling-the-secrets-of-snapchats-filters/"><u>[Updated] In 2024, Pixel Perfect Fun  Unveiling the Secrets of Snapchat's Filters</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/updated-in-2024-secrets-to-a-flawless-ps3-gameplay-record/"><u>[Updated] In 2024, Secrets to a Flawless PS3 Gameplay Record</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-ultimate-platform-showdown-podcast-vs-youtube/"><u>[Updated] The Ultimate Platform Showdown  Podcast vs YouTube</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-5-cinematiccamera-tips-of-2024/"><u>[Updated] Top 5 Cinematic/Camera Tips Of 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-transform-canon-photos-gratuitous-fundamentals-plus-optional-lut-expansion/"><u>[Updated] Transform Canon Photos  Gratuitous Fundamentals + Optional LUT Expansion</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unravel-the-potential-of-multiple-screen-usage-in-netflix/"><u>[Updated] Unravel The Potential of Multiple Screen Usage in Netflix</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-shared-sights-untold-histories-revealed/"><u>2024 Approved  Shared Sights  Untold Histories Revealed</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-streamline-storage-solutions-the-20-finest-free-online-spaces/"><u>2024 Approved  Streamline Storage Solutions  The 20 Finest FREE Online Spaces</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-techniques-for-smooth-audio-amplification-in-lumafusion/"><u>2024 Approved  Techniques for Smooth Audio Amplification in Lumafusion</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-archivists-collection-essential-retro-visual-hacks-for-video-editors/"><u>2024 Approved  The Archivist's Collection  Essential Retro Visual Hacks for Video Editors</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-essential-guide-to-tapered-music-transitions-in-premiere-pro/"><u>2024 Approved  The Essential Guide to Tapered Music Transitions in Premiere Pro</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unleash-creativity-with-iphone-burst-photography/"><u>2024 Approved  Unleash Creativity with iPhone Burst Photography</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unlocking-skypes-full-capacity-with-effective-zoom-methods/"><u>2024 Approved  Unlocking Skype's Full Capacity with Effective Zoom Methods</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unpacking-the-sequencing-of-a-20mb-file/"><u>2024 Approved  Unpacking the Sequencing of a 20MB File</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-vanguard-20-top-anime-song-starters/"><u>2024 Approved  Vanguard 20 Top Anime Song Starters</u></a></li>
<li><a href="https://fox-friendly.techidaily.com/advanced-strategies-for-removing-background-in-figma-for-2024/"><u>Advanced Strategies for Removing Background in Figma for 2024</u></a></li>
<li><a href="https://tech-haven.techidaily.com/ais-pioneering-role-in-prompt-creation-and-its-career-sustainability/"><u>AI's Pioneering Role in Prompt Creation & Its Career Sustainability</u></a></li>
<li><a href="https://facebook-clips.techidaily.com/facebooks-approach-for-automatic-youtube-video-playback-for-2024/"><u>Facebook's Approach for Automatic YouTube Video Playback for 2024</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-retrieve-deleted-photos-on-realme-by-stellar-photo-recovery-android-mobile-photo-recover/"><u>How to Retrieve deleted photos on Realme</u></a></li>
<li><a href="https://apple-account.techidaily.com/in-2024-how-to-reset-apple-id-and-apple-password-on-iphone-13-by-drfone-ios/"><u>In 2024, How to Reset Apple ID and Apple Password On iPhone 13</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-techniques-for-stronger-video-content-with-b-clips/"><u>In 2024, Techniques for Stronger Video Content with B-Clips</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-impact-and-innovations-in-vegaspro-a-2019-review/"><u>In 2024, The Impact and Innovations in VegasPro  A 2019 Review</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-monetary-reality-of-being-a-podcaster/"><u>In 2024, The Monetary Reality of Being a Podcaster</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-ultimate-quick-access-handbook-for-rapid-srt-to-text-change/"><u>In 2024, The Ultimate, Quick-Access Handbook for Rapid SRT to Text Change</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-transitioning-artistry-in-inshot-videos/"><u>In 2024, Transitioning Artistry in Inshot Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-series-exceptional-5-slow-mo-tech/"><u>In 2024, Ultimate Series  Exceptional 5 Slow Mo Tech</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-full-photo-viewing-capabilities-win-11-edition/"><u>In 2024, Unlocking Full Photo Viewing Capabilities  Win 11 Edition</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-vivas-multimedia-potential/"><u>In 2024, Unlocking Viva's Multimedia Potential</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unrestricted-media-playback-free-on-windows-and-macos/"><u>In 2024, Unrestricted Media Playback  FREE on Windows & MacOS</u></a></li>
<li><a href="https://tech-recovery.techidaily.com/overcome-search-issues-on-windows-10-with-these-effective-tips-and-tricks/"><u>Overcome Search Issues on Windows 10 with These Effective Tips and Tricks</u></a></li>
<li><a href="https://facebook-clips.techidaily.com/quick-tips-eradicate-online-ads-from-your-feed-for-2024/"><u>Quick Tips  Eradicate Online Ads From Your Feed for 2024</u></a></li>
<li><a href="https://fake-location.techidaily.com/read-this-guide-to-find-a-reliable-alternative-to-fake-gps-on-vivo-x100-drfone-by-drfone-virtual-android/"><u>Read This Guide to Find a Reliable Alternative to Fake GPS On Vivo X100 | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/strategies-for-creating-a-positive-interview-environment-for-2024/"><u>Strategies for Creating a Positive Interview Environment for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/tailor-made-tunes-for-chrome-companions-for-2024/"><u>Tailor-Made Tunes for Chrome Companions for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-future-of-advertising-in-the-metaverse-for-2024/"><u>The Future of Advertising in the Metaverse for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-guide-converting-any-tiktok-sound-into-phone-alerts-for-2024/"><u>The Ultimate Guide  Converting Any TikTok Sound Into Phone Alerts for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/underwater-cinematography-avoiding-blur-and-grain-with-a-gopro-for-2024/"><u>Underwater Cinematography  Avoiding Blur and Grain with a GoPro for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unmatched-mobileweb-image-magnification-toolkit-for-2024/"><u>Unmatched Mobile/Web Image Magnification Toolkit for 2024</u></a></li>
</ul></div>
