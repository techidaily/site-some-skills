---
title: "Ultimate Tutorial: Enabling Specific Ports in Windows Firewall Settings"
date: 2024-12-03T16:48:28.656Z
updated: 2024-12-07T16:20:41.933Z
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/odDOPrPjRYY?si=7QHzdUkTPNkHJiVj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Key Takeaways

* Firewalls block unsolicited traffic from the internet by default, but you may need to open a port to allow specific traffic through for programs like game servers.
* To open a port on Windows 10, search for "Windows Firewall" and go to "Windows Defender Firewall." Click on "Advanced Settings" and create a new inbound rule for the specific port number.
* You can choose when the rule applies (domain, private, public) and give it a name and description. If needed, you can disable the rule or repeat the steps to open ports for different programs.

 Firewalls are there to protect you from threats on the internet (both traffic from the internet and from local applications trying to gain access when they shouldn't). Sometimes, though, you'll want to allow otherwise restricted traffic through your firewall. To do so, you'll have to open a port.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/uV3vm805eX0?si=YSPcsFxBcJmoxLsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

 On the Rule Type page, select the "Port" option and then click "Next."

![Select "Port," then hit "Next."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/5-port-click-next.png) 

 On the next screen, you'll have to choose whether the port you're opening uses the Transmission Control Protocol (TCP) or User Datagram Protocol (UDP). Unfortunately, we can't tell you specifically which to use because different apps use different protocols. Port numbers can range from 0-65535, with ports up to 1023 being reserved for privileged services. You can find an unofficial list of (most) TCP/UDP ports on [the Wikipedia page](https://en.wikipedia.org/wiki/List%5Fof%5FTCP%5Fand%5FUDP%5Fport%5Fnumbers), and you can also search for the app you're using. If you can't determine the specific protocol to use for your app, you can create two new inbound rules — one for TCP and one for UDP.

 Select the "Specific Local Ports" option and then type the port number into the field provided. If you're opening more than one port, you can separate them by commas. If you need to open a range of ports, use a hyphen (-).

 Click "Next" when you're done.

![Select the port you want to forward. Do not open "All local ports."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/6-specify-ports.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/xg3PHS_Ee80?si=fE_iGIqHjKvWFIN3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 On the next page, click "Allow the Connection" and then click "Next."

![/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png) 

 For this guide, we'll be using the "Allow the Connection" option, as we trust the connection for which we're creating a rule. If you want a little more piece of mind, the "Allow the connection if it is secure" rule uses [Internet Protocol security (IPsec)](https://www.howtogeek.com/211329/which-is-the-best-vpn-protocol-pptp-vs.-openvpn-vs.-l2tpipsec-vs.-sstp/) to authenticate the connection. You can try that option, but many apps do not support it. If you try the more secure option and it doesn't work, you can always come back and change to the less secure one.

 Next, choose when the rule applies and click "Next." You can choose one or all of the following:

* **Domain:** When a PC is connected to a domain controller that Windows can authenticate access to the domain.
* **Private:** When a PC is connected to a private network, like a home network or a network that you trust.
* **Public:** When a PC is connected to an open network, like a cafe, airport, or library where anyone can join, and the security is unknown to you.

![Choose which networks the rule applies to.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/8-choose-relevant.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/9Jfq2Wx1Bcs?si=YQrYpTy0g4aV5QaO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 In the final window, give your new rule a name and an optional, more detailed description. Click "Finish" when you're done.

![Enter a rule name and description.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/9-click-finish-after-entering-description.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/MHafwnWSEQk?si=rejNVNpJZH2SqNLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://fox-blue.techidaily.com/new-in-2024-inexpensive-quality-camera-solutions/"><u>[New] In 2024, Inexpensive Quality Camera Solutions</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-guide-to-text-preset-mastery/"><u>[New] The Ultimate Guide to Text Preset Mastery</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unseen-wonders-in-vlcs-arsenal-of-features/"><u>[Updated] Unseen Wonders in VLC's Arsenal of Features</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unleashing-creativity-with-pexels-finding-fabulous-images/"><u>2024 Approved Unleashing Creativity with Pexels Finding Fabulous Images</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unleashing-humor-the-kapwing-meme-builder-way/"><u>2024 Approved Unleashing Humor The Kapwing Meme Builder Way</u></a></li>
<li><a href="https://win-premium.techidaily.com/discover-the-best-no-cost-replacements-for-windows-11-in-this-detailed-overview/"><u>Discover the Best No-Cost Replacements for Windows 11 in This Detailed Overview</u></a></li>
<li><a href="https://win-answers.techidaily.com/high-definition-photography-on-the-latest-ipod-touch-with-up-to-960-x/"><u>High-Definition Photography on the Latest iPod Touch with Up to 960 X 지원</u></a></li>
<li><a href="https://vp-tips.techidaily.com/in-2024-step-by-step-mastery-how-to-design-your-vr-alter-egos-efficiently/"><u>In 2024, Step-by-Step Mastery How to Design Your VR Alter Egos Efficiently</u></a></li>
<li><a href="https://hardware-updates.techidaily.com/microsoft-surface-pro-8-huge-discounts-this-cyber-monday-save-600-post-black-friday-2022-tech-news/"><u>Microsoft Surface Pro 8 Huge Discounts This Cyber Monday - Save $600 Post-Black Friday 2022 | Tech News</u></a></li>
</ul></div>

