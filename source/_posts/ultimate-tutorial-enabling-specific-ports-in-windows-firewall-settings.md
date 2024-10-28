---
title: "Ultimate Tutorial: Enabling Specific Ports in Windows Firewall Settings"
date: 2024-10-26T22:51:17.985Z
updated: 2024-10-27T20:59:38.164Z
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
<a href="https://appsumo.8odi.net/c/5597632/2049388/7443" target="_top" id="2049388">
  <img src="//a.impactradius-go.com/display-ad/7443-2049388" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2049388/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  What Do Ports Do? 

 When a device connects to another device on a network (including the internet), it specifies a port number that lets the receiving device know how to handle the traffic. Where an [IP address](https://fake-location.techidaily.com/fake-the-location-to-get-around-the-mlb-blackouts-on-apple-iphone-14-pro-drfone-by-drfone-virtual-ios/) shows traffic how to get to a particular device on a network, the port number lets the receiving device know which program gets that traffic. By default, most unsolicited traffic from the internet is blocked by Windows Firewall. If you're running something like a game server, you might need to open a port to allow that specific kind of traffic through the firewall.

 This article shows you how to open a port on a particular PC's firewall to let traffic in. If you have a router on your network (which you likely do), you will also need to allow the same traffic through that router by [forwarding the port](https://tech-revival.techidaily.com/unlock-chatgpts-potential-with-simple-plugin-signups/) there.

<!-- affiliate ads begin -->
<span id="1983549">
					<video width="576" height="240" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1983549.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1983549">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1983549.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:360px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1983549%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1983549/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  How to Open a Port on Windows 10

 Clicking Start, type "Windows Firewall" into the search box, and then click on "Windows Defender Firewall."

![Search for "Windows Defender" in the Start menu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/1-search-windows-defender-firewall.png) 

 Once Windows Firewall opens, click on "Advanced Settings."

![Click on "Advanced Settings" on the left-hand side.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/2-click-advanced-setting.png) 

 This launches Windows Defender Firewall with Advanced Security. Click the "Inbound Rules" category on the left. In the far right pane, click the "New Rule" command.

![Click the "Inbound Rule" item, then click "New Rule."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/3-inbound-service-rules.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2094482/7443" target="_top" id="2094482">
  <img src="//a.impactradius-go.com/display-ad/7443-2094482" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2094482/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 If you need to open a rule for outgoing traffic, instead of clicking "Inbound Rule," you'd click "Outbound Rule." Most apps are pretty good about creating their own outbound rules when you install them, but you might occasionally run into one that cannot.

![There is also an "Outbound Rules" button too.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/4-outbound-rules.png) 

 On the Rule Type page, select the "Port" option and then click "Next."

![Select "Port," then hit "Next."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/5-port-click-next.png) 

 On the next screen, you'll have to choose whether the port you're opening uses the Transmission Control Protocol (TCP) or User Datagram Protocol (UDP). Unfortunately, we can't tell you specifically which to use because different apps use different protocols. Port numbers can range from 0-65535, with ports up to 1023 being reserved for privileged services. You can find an unofficial list of (most) TCP/UDP ports on [the Wikipedia page](https://en.wikipedia.org/wiki/List%5Fof%5FTCP%5Fand%5FUDP%5Fport%5Fnumbers), and you can also search for the app you're using. If you can't determine the specific protocol to use for your app, you can create two new inbound rules — one for TCP and one for UDP.

 Select the "Specific Local Ports" option and then type the port number into the field provided. If you're opening more than one port, you can separate them by commas. If you need to open a range of ports, use a hyphen (-).

 Click "Next" when you're done.

![Select the port you want to forward. Do not open "All local ports."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/6-specify-ports.png) 

 On the next page, click "Allow the Connection" and then click "Next."

![/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png) 

 For this guide, we'll be using the "Allow the Connection" option, as we trust the connection for which we're creating a rule. If you want a little more piece of mind, the "Allow the connection if it is secure" rule uses [Internet Protocol security (IPsec)](https://www.howtogeek.com/211329/which-is-the-best-vpn-protocol-pptp-vs.-openvpn-vs.-l2tpipsec-vs.-sstp/) to authenticate the connection. You can try that option, but many apps do not support it. If you try the more secure option and it doesn't work, you can always come back and change to the less secure one.

 Next, choose when the rule applies and click "Next." You can choose one or all of the following:

* **Domain:** When a PC is connected to a domain controller that Windows can authenticate access to the domain.
* **Private:** When a PC is connected to a private network, like a home network or a network that you trust.
* **Public:** When a PC is connected to an open network, like a cafe, airport, or library where anyone can join, and the security is unknown to you.

![Choose which networks the rule applies to.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/8-choose-relevant.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2130874/7443" target="_top" id="2130874">
  <img src="//a.impactradius-go.com/display-ad/7443-2130874" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2130874/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 In the final window, give your new rule a name and an optional, more detailed description. Click "Finish" when you're done.

![Enter a rule name and description.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/9-click-finish-after-entering-description.png) 

 If you want to disable the rule at any point, locate it in the list of Inbound or Outbound Rules, right-click it, and then click "Disable Rule."

![Right-click the rule to disable it without removing it.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/10-disable-the-rule.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135400/19272" target="_top" id="2135400">
  <img src="//a.impactradius-go.com/display-ad/19272-2135400" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135400/19272" style="position:absolute;visibility:hidden;" border="0" />
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
<li><a href="https://instagram-videos.techidaily.com/new-2024-approved-insta-strategies-uncovering-the-veiled-elements-of-social-media/"><u>[New] 2024 Approved Insta Strategies Uncovering the Veiled Elements of Social Media</u></a></li>
<li><a href="https://youtube-zero.techidaily.com/024-approved-prime-selection-of-7-top-rated-android-adblocking-apps/"><u>[New] 2024 Approved Prime Selection of 7 Top-Rated Android AdBlocking Apps</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-master-money-making-the-top-13-reddit-strategies-no-experience/"><u>[New] Master Money Making The Top 13 Reddit Strategies (No Experience)</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-photo-frenzy-stories-of-popularity/"><u>[New] Photo Frenzy Stories of Popularity</u></a></li>
<li><a href="https://fox-direct.techidaily.com/updated-2024-approved-parrot-prowess-in-bebop-an-in-depth-critique/"><u>[Updated] 2024 Approved Parrot Prowess in Bebop – An In-Depth Critique</u></a></li>
<li><a href="https://facebook-clips.techidaily.com/updated-unveiling-the-best-fb-movie-grabs-8-edition-for-2024/"><u>[Updated] Unveiling the Best FB Movie Grabs #8 Edition for 2024</u></a></li>
<li><a href="https://some-knowledge.techidaily.com/expert-tips-mixing-visual-filters-and-melodies-in-windows-10-photos-for-2024/"><u>Expert Tips Mixing Visual Filters & Melodies in Windows 10 Photos for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-art-of-vivid-visuals-on-your-computer-with-windows-hdr/"><u>In 2024, The Art of Vivid Visuals on Your Computer with Windows HDR</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-two-ways-to-track-my-boyfriends-infinix-note-30-vip-without-him-knowing-drfone-by-drfone-virtual-android/"><u>In 2024, Two Ways to Track My Boyfriends Infinix Note 30 VIP without Him Knowing | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-streamers-guide-to-best-free-options-across-every-system/"><u>In 2024, Ultimate Streamer's Guide to Best Free Options Across Every System</u></a></li>
<li><a href="https://some-approaches.techidaily.com/kostenlose-umwandlung-von-palregion-2-dvds-ins-modernere-videoformat/"><u>Kostenlose Umwandlung Von PAL/Region-2-DVDs Ins Modernere Videoformat</u></a></li>
<li><a href="https://driver-install.techidaily.com/new-horizons-in-gpu-maintenance-via-ddu-techniques/"><u>New Horizons in GPU Maintenance via DDU Techniques</u></a></li>
</ul></div>

