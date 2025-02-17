---
title: "Ultimate Tutorial: Enabling Specific Ports in Windows Firewall Settings"
date: 2025-02-10T23:21:18.672Z
updated: 2025-02-17T01:06:18.143Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/96d460ad778074a93b63a308714d13a6fb98bd643d60a66bb372b318524a5b70.jpg
---

## Ultimate Tutorial: Enabling Specific Ports in Windows Firewall Settings

### Quick Links

* [What Do Ports Do?](https://easy-unlock-android.techidaily.com/unlock-your-nokia-105-classic-phone-with-ease-the-3-best-lock-screen-removal-tools-by-drfone-android/)
* [How to Open a Port on Windows 10](https://extra-support.techidaily.com/prime-choices-of-drones-up-for-grabs-for-2024/)

### Key Takeaways

* Firewalls block unsolicited traffic from the internet by default, but you may need to open a port to allow specific traffic through for programs like game servers.
* To open a port on Windows 10, search for "Windows Firewall" and go to "Windows Defender Firewall." Click on "Advanced Settings" and create a new inbound rule for the specific port number.
* You can choose when the rule applies (domain, private, public) and give it a name and description. If needed, you can disable the rule or repeat the steps to open ports for different programs.

 Firewalls are there to protect you from threats on the internet (both traffic from the internet and from local applications trying to gain access when they shouldn't). Sometimes, though, you'll want to allow otherwise restricted traffic through your firewall. To do so, you'll have to open a port.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/c1yHj02oP3w?si=mwi3FyP0p68gkBqV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  What Do Ports Do? 

 When a device connects to another device on a network (including the internet), it specifies a port number that lets the receiving device know how to handle the traffic. Where an [IP address](https://fake-location.techidaily.com/fake-the-location-to-get-around-the-mlb-blackouts-on-apple-iphone-14-pro-drfone-by-drfone-virtual-ios/) shows traffic how to get to a particular device on a network, the port number lets the receiving device know which program gets that traffic. By default, most unsolicited traffic from the internet is blocked by Windows Firewall. If you're running something like a game server, you might need to open a port to allow that specific kind of traffic through the firewall.

 This article shows you how to open a port on a particular PC's firewall to let traffic in. If you have a router on your network (which you likely do), you will also need to allow the same traffic through that router by [forwarding the port](https://tech-revival.techidaily.com/unlock-chatgpts-potential-with-simple-plugin-signups/) there.

##  How to Open a Port on Windows 10

 Clicking Start, type "Windows Firewall" into the search box, and then click on "Windows Defender Firewall."

![Search for "Windows Defender" in the Start menu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/1-search-windows-defender-firewall.png) 

 Once Windows Firewall opens, click on "Advanced Settings."

![Click on "Advanced Settings" on the left-hand side.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/2-click-advanced-setting.png) 

 This launches Windows Defender Firewall with Advanced Security. Click the "Inbound Rules" category on the left. In the far right pane, click the "New Rule" command.

![Click the "Inbound Rule" item, then click "New Rule."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/3-inbound-service-rules.png) 

 If you need to open a rule for outgoing traffic, instead of clicking "Inbound Rule," you'd click "Outbound Rule." Most apps are pretty good about creating their own outbound rules when you install them, but you might occasionally run into one that cannot.

![There is also an "Outbound Rules" button too.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/4-outbound-rules.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/9ECz3oZ8NrQ?si=86vkwkDJo9HQXpzt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 On the Rule Type page, select the "Port" option and then click "Next."

![Select "Port," then hit "Next."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/5-port-click-next.png) 

 On the next screen, you'll have to choose whether the port you're opening uses the Transmission Control Protocol (TCP) or User Datagram Protocol (UDP). Unfortunately, we can't tell you specifically which to use because different apps use different protocols. Port numbers can range from 0-65535, with ports up to 1023 being reserved for privileged services. You can find an unofficial list of (most) TCP/UDP ports on [the Wikipedia page](https://en.wikipedia.org/wiki/List%5Fof%5FTCP%5Fand%5FUDP%5Fport%5Fnumbers), and you can also search for the app you're using. If you can't determine the specific protocol to use for your app, you can create two new inbound rules — one for TCP and one for UDP.

 Select the "Specific Local Ports" option and then type the port number into the field provided. If you're opening more than one port, you can separate them by commas. If you need to open a range of ports, use a hyphen (-).

 Click "Next" when you're done.

![Select the port you want to forward. Do not open "All local ports."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/6-specify-ports.png) 

 On the next page, click "Allow the Connection" and then click "Next."

![/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/j5gTm5KxtQ0?si=onF1rBS2nEM5nLGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 For this guide, we'll be using the "Allow the Connection" option, as we trust the connection for which we're creating a rule. If you want a little more piece of mind, the "Allow the connection if it is secure" rule uses [Internet Protocol security (IPsec)](https://www.howtogeek.com/211329/which-is-the-best-vpn-protocol-pptp-vs.-openvpn-vs.-l2tpipsec-vs.-sstp/) to authenticate the connection. You can try that option, but many apps do not support it. If you try the more secure option and it doesn't work, you can always come back and change to the less secure one.

 Next, choose when the rule applies and click "Next." You can choose one or all of the following:

* **Domain:** When a PC is connected to a domain controller that Windows can authenticate access to the domain.
* **Private:** When a PC is connected to a private network, like a home network or a network that you trust.
* **Public:** When a PC is connected to an open network, like a cafe, airport, or library where anyone can join, and the security is unknown to you.

![Choose which networks the rule applies to.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/8-choose-relevant.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/omWG4u39lmE?si=yk1AEo_gzDpGjYbl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 In the final window, give your new rule a name and an optional, more detailed description. Click "Finish" when you're done.

![Enter a rule name and description.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/9-click-finish-after-entering-description.png) 

 If you want to disable the rule at any point, locate it in the list of Inbound or Outbound Rules, right-click it, and then click "Disable Rule."

![Right-click the rule to disable it without removing it.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/10-disable-the-rule.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/W5aJC8okA8s?si=L2rnYAp-gmGlLQSf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 That's all there is to it. If you need to open any other ports for a different program or with a different rule, repeat the steps above using a different set of ports to open.

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
<li><a href="https://facebook-video-footage.techidaily.com/new-2024-approved-broadcast-perfection-recommended-tech-and-apps-for-youtubers/"><u>[New] 2024 Approved Broadcast Perfection Recommended Tech and Apps for YouTubers</u></a></li>
<li><a href="https://screen-capture.techidaily.com/new-2024-approved-understanding-zooms-participant-clusters/"><u>[New] 2024 Approved Understanding Zoom's Participant Clusters</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-definitive-srt-file-generation-manual/"><u>[New] The Definitive SRT File Generation Manual</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-race-for-excellence-av1-vs-vp9-codec/"><u>[New] The Race for Excellence AV1 Vs. VP9 Codec</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-transforming-photographs-into-stunning-collaborative-art/"><u>[New] Transforming Photographs Into Stunning Collaborative Art</u></a></li>
<li><a href="https://youtube-tips.techidaily.com/nveiling-top-asmr-for-iphone-users/"><u>[New] Unveiling Top ASMR for iPhone Users</u></a></li>
<li><a href="https://fox-info.techidaily.com/updated-add-videos-to-youtube-playlist/"><u>[Updated] Add Videos to YouTube Playlist</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-essentials-of-narrowing-virtual-room-spaces/"><u>[Updated] The Essentials of Narrowing Virtual Room Spaces</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-5-cinematiccamera-tips-of-2024/"><u>[Updated] Top 5 Cinematic/Camera Tips Of 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-list-empowering-cinematic-experiences/"><u>2024 Approved The Ultimate List Empowering Cinematic Experiences</u></a></li>
<li><a href="https://article-files.techidaily.com/2024-approved-unveiling-the-best-21-hdmi-screens-side-by-side-review/"><u>2024 Approved Unveiling the Best 2.1 HDMI Screens Side-By-Side Review</u></a></li>
<li><a href="https://common-error.techidaily.com/apex-legends-resolving-the-simple-cheating-detector-glitch/"><u>Apex Legends - Resolving the Simple Cheating Detector Glitch</u></a></li>
<li><a href="https://graphic-issues.techidaily.com/bypass-game-lag-in-anthem/"><u>Bypass Game Lag in Anthem</u></a></li>
<li><a href="https://driver-download.techidaily.com/easy-installation-tutorial-updating-your-epson-wf-3520-printer-drivers-on-windows-devices/"><u>Easy Installation Tutorial: Updating Your Epson WF 3520 Printer Drivers on Windows Devices</u></a></li>
<li><a href="https://youtube-sure.techidaily.com/ring-the-art-of-youtube-brand-creation-best-names-for-vloggers-and-filmmakers-limit-to-156-characters-for-2024/"><u>Mastering the Art of YouTube Brand Creation Best Names for Vloggers & Filmmakers (Limit to 156 Characters) for 2024</u></a></li>
<li><a href="https://win-workspace.techidaily.com/recognizing-signs-identifying-faulty-ram-symptoms-with-expert-advice-from-yl-computing/"><u>Recognizing Signs: Identifying Faulty RAM Symptoms with Expert Advice From YL Computing</u></a></li>
<li><a href="https://some-skills.techidaily.com/subtitle-making-from-compressed-file-extraction-for-2024/"><u>Subtitle Making From Compressed File Extraction for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-guide-converting-any-tiktok-sound-into-phone-alerts-for-2024/"><u>The Ultimate Guide Converting Any TikTok Sound Into Phone Alerts for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unravel-the-potential-of-multiple-screen-usage-in-netflix-for-2024/"><u>Unravel The Potential of Multiple Screen Usage in Netflix for 2024</u></a></li>
</ul></div>

