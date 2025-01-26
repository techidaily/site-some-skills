---
title: "Ultimate Tutorial: Enabling Specific Ports in Windows Firewall Settings"
date: 2025-01-21T21:10:47.129Z
updated: 2025-01-25T17:23:33.060Z
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/KdpTAZ9zonQ?si=5Nd5SPW1axA7GPuB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 If you need to open a rule for outgoing traffic, instead of clicking "Inbound Rule," you'd click "Outbound Rule." Most apps are pretty good about creating their own outbound rules when you install them, but you might occasionally run into one that cannot.

![There is also an "Outbound Rules" button too.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/4-outbound-rules.png) 

 On the Rule Type page, select the "Port" option and then click "Next."

![Select "Port," then hit "Next."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/5-port-click-next.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/P6Wfzj6YNDM?si=WRZQD9zCdQ1_tW1b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 On the next screen, you'll have to choose whether the port you're opening uses the Transmission Control Protocol (TCP) or User Datagram Protocol (UDP). Unfortunately, we can't tell you specifically which to use because different apps use different protocols. Port numbers can range from 0-65535, with ports up to 1023 being reserved for privileged services. You can find an unofficial list of (most) TCP/UDP ports on [the Wikipedia page](https://en.wikipedia.org/wiki/List%5Fof%5FTCP%5Fand%5FUDP%5Fport%5Fnumbers), and you can also search for the app you're using. If you can't determine the specific protocol to use for your app, you can create two new inbound rules — one for TCP and one for UDP.

 Select the "Specific Local Ports" option and then type the port number into the field provided. If you're opening more than one port, you can separate them by commas. If you need to open a range of ports, use a hyphen (-).

 Click "Next" when you're done.

![Select the port you want to forward. Do not open "All local ports."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/6-specify-ports.png) 

 On the next page, click "Allow the Connection" and then click "Next."

![/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/6xGqSETroqA?si=4C1GPgXi-AksR_oO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 For this guide, we'll be using the "Allow the Connection" option, as we trust the connection for which we're creating a rule. If you want a little more piece of mind, the "Allow the connection if it is secure" rule uses [Internet Protocol security (IPsec)](https://www.howtogeek.com/211329/which-is-the-best-vpn-protocol-pptp-vs.-openvpn-vs.-l2tpipsec-vs.-sstp/) to authenticate the connection. You can try that option, but many apps do not support it. If you try the more secure option and it doesn't work, you can always come back and change to the less secure one.

 Next, choose when the rule applies and click "Next." You can choose one or all of the following:

* **Domain:** When a PC is connected to a domain controller that Windows can authenticate access to the domain.
* **Private:** When a PC is connected to a private network, like a home network or a network that you trust.
* **Public:** When a PC is connected to an open network, like a cafe, airport, or library where anyone can join, and the security is unknown to you.

![Choose which networks the rule applies to.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/8-choose-relevant.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/_O8m9KphYzs?si=jITthzeyX_Kmt9X2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 In the final window, give your new rule a name and an optional, more detailed description. Click "Finish" when you're done.

![Enter a rule name and description.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/9-click-finish-after-entering-description.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/0dOfcihxjiw?si=_fkp1S1Uw0N1dp6b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 If you want to disable the rule at any point, locate it in the list of Inbound or Outbound Rules, right-click it, and then click "Disable Rule."

![Right-click the rule to disable it without removing it.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/10-disable-the-rule.png) 

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
<li><a href="https://fox-boxes.techidaily.com/new-in-2024-windows-11-video-editing-simplified-utilizing-storyremix-features/"><u>[New] In 2024, Windows 11 Video Editing Simplified Utilizing StoryRemix Features</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-strategies-for-time-loop-visual-tricks/"><u>[New] Strategies for Time-Loop Visual Tricks</u></a></li>
<li><a href="https://article-tips.techidaily.com/new-unlocking-image-clarity-techniques-for-online-cropping-for-2024/"><u>[New] Unlocking Image Clarity Techniques for Online Cropping for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unveiled-top-10-superior-gopro-housing-options/"><u>[New] Unveiled Top 10 Superior GoPro Housing Options</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unveiling-the-1-to-5-of-windows-free-screen-capture-apps/"><u>[New] Unveiling the #1 to #5 of Windows Free Screen Capture Apps</u></a></li>
<li><a href="https://youtube-blog.techidaily.com/ed-demystifying-the-world-of-youtube-shorts/"><u>[Updated] Demystifying the World of YouTube Shorts</u></a></li>
<li><a href="https://fox-http.techidaily.com/updated-in-2024-the-ultimate-path-to-perfected-morphvox-control/"><u>[Updated] In 2024, The Ultimate Path to Perfected MorphVOX Control</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unlocking-potential-in-audio-design-with-magix-fusion-x/"><u>[Updated] Unlocking Potential in Audio Design with Magix Fusion X</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-streamlining-projects-using-azures-speech-service/"><u>2024 Approved Streamlining Projects Using Azure's Speech Service</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-technology-showcase-highlights-of-the-5-best-slow-cams/"><u>2024 Approved Technology Showcase Highlights of the 5 Best Slow Cams</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-blueprint-for-a-streamlined-social-media-connection-with-linktree/"><u>2024 Approved The Blueprint for a Streamlined Social Media Connection with Linktree</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-tips-for-producing-compelling-podcast-introductions/"><u>2024 Approved Tips for Producing Compelling Podcast Introductions</u></a></li>
<li><a href="https://solve-latest.techidaily.com/abbyy-und-der-schatz-der-prozessintelligenz-erkenntnisse-aufdecken/"><u>ABBYY Und Der Schatz Der Prozessintelligenz: Erkenntnisse Aufdecken</u></a></li>
<li><a href="https://hardware-help.techidaily.com/asus-rog-zephyrus-g16-analysis-a-rollercoaster-of-performance-for-gamers/"><u>Asus ROG Zephyrus G16 Analysis: A Rollercoaster of Performance for Gamers</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/in-2024-hassle-free-ways-to-remove-frp-lock-from-xiaomi-redmi-note-12-5g-phones-withwithout-a-pc-by-drfone-android/"><u>In 2024, Hassle-Free Ways to Remove FRP Lock from Xiaomi Redmi Note 12 5G Phones with/without a PC</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/in-2024-how-to-unlock-sim-card-on-meizu-21-pro-online-without-jailbreak-by-drfone-android/"><u>In 2024, How to Unlock SIM Card on Meizu 21 Pro online without jailbreak</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-metaverse-meme-phenomenon-a-comprehensive-overview/"><u>In 2024, The Metaverse Meme Phenomenon A Comprehensive Overview</u></a></li>
<li><a href="https://win-premium.techidaily.com/step-by-step-guide-transferring-files-from-miniature-to-large-sd-cards-for-raspberry-pi-with-windows-10/"><u>Step-by-Step Guide: Transferring Files From Miniature to Large SD Cards for Raspberry Pi with Windows 10</u></a></li>
<li><a href="https://novels-ebooks.techidaily.com/1032142-9780810870277-the-a-to-z-of-witchcraft/"><u>The A to Z of Witchcraft | Free Book</u></a></li>
</ul></div>

