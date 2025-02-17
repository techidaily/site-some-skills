---
title: "Ultimate Tutorial: Enabling Specific Ports in Windows Firewall Settings"
date: 2025-02-15T05:38:14.763Z
updated: 2025-02-17T01:57:32.315Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/iPCr_bxZjMQ?si=ubOsoq5umPEXL9xL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/XA_wP7rS9ww?si=LarMG3sEHAhSoL6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 On the next screen, you'll have to choose whether the port you're opening uses the Transmission Control Protocol (TCP) or User Datagram Protocol (UDP). Unfortunately, we can't tell you specifically which to use because different apps use different protocols. Port numbers can range from 0-65535, with ports up to 1023 being reserved for privileged services. You can find an unofficial list of (most) TCP/UDP ports on [the Wikipedia page](https://en.wikipedia.org/wiki/List%5Fof%5FTCP%5Fand%5FUDP%5Fport%5Fnumbers), and you can also search for the app you're using. If you can't determine the specific protocol to use for your app, you can create two new inbound rules — one for TCP and one for UDP.

 Select the "Specific Local Ports" option and then type the port number into the field provided. If you're opening more than one port, you can separate them by commas. If you need to open a range of ports, use a hyphen (-).

 Click "Next" when you're done.

![Select the port you want to forward. Do not open "All local ports."](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/6-specify-ports.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/OFDHJnZLwTA?si=WThcb2h76AnZDzcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 On the next page, click "Allow the Connection" and then click "Next."

![/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2018/11/2018-11-10_12h22_57.png) 

 For this guide, we'll be using the "Allow the Connection" option, as we trust the connection for which we're creating a rule. If you want a little more piece of mind, the "Allow the connection if it is secure" rule uses [Internet Protocol security (IPsec)](https://www.howtogeek.com/211329/which-is-the-best-vpn-protocol-pptp-vs.-openvpn-vs.-l2tpipsec-vs.-sstp/) to authenticate the connection. You can try that option, but many apps do not support it. If you try the more secure option and it doesn't work, you can always come back and change to the less secure one.

 Next, choose when the rule applies and click "Next." You can choose one or all of the following:

* **Domain:** When a PC is connected to a domain controller that Windows can authenticate access to the domain.
* **Private:** When a PC is connected to a private network, like a home network or a network that you trust.
* **Public:** When a PC is connected to an open network, like a cafe, airport, or library where anyone can join, and the security is unknown to you.

![Choose which networks the rule applies to.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/8-choose-relevant.png) 

 In the final window, give your new rule a name and an optional, more detailed description. Click "Finish" when you're done.

![Enter a rule name and description.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/9-click-finish-after-entering-description.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/e4Nt2xXXtmE?si=CtKwFry4b0AJXnaN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 If you want to disable the rule at any point, locate it in the list of Inbound or Outbound Rules, right-click it, and then click "Disable Rule."

![Right-click the rule to disable it without removing it.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/10-disable-the-rule.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/QRaEdFMU-Xc?si=OjaiTvlogJy5wHhN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<li><a href="https://instagram-videos.techidaily.com/new-2024-approved-expert-tips-to-download-and-save-instagram-media-from-your-computer/"><u>[New] 2024 Approved Expert Tips to Download and Save Instagram Media From Your Computer</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-the-full-potential-of-zoom-on-your-google-meet-calls/"><u>[New] Unlocking the Full Potential of Zoom on Your Google Meet Calls</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/updated-luminous-android-videography-techniques/"><u>[Updated] Luminous Android Videography Techniques</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/updated-maximize-creativity-top-10-secrets-from-canva-pros/"><u>[Updated] Maximize Creativity - Top 10 Secrets From Canva Pros</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-streamlined-creativity-the-most-popular-8-mobile-apps-for-edits/"><u>[Updated] Streamlined Creativity The Most Popular 8 Mobile Apps for Edits</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-art-of-iphone-photography-top-10-visual-arrangement-tips/"><u>[Updated] The Art of iPhone Photography Top 10 Visual Arrangement Tips</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unpacking-the-sequencing-of-a-20mb-file/"><u>[Updated] Unpacking the Sequencing of a 20MB File</u></a></li>
<li><a href="https://fox-cloud.techidaily.com/updated-whats-new-with-windows-11/"><u>[Updated] What's New with Windows 11?</u></a></li>
<li><a href="https://buynow-info.techidaily.com/experience-unmatched-quality-with-the-new-apple-tv-4k-review-and-deep-dive/"><u>Experience Unmatched Quality with the New Apple TV 4K - Review & Deep Dive</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-10-easy-to-use-frp-bypass-tools-for-unlocking-google-accounts-on-honor-play-40c-by-drfone-android/"><u>In 2024, 10 Easy-to-Use FRP Bypass Tools for Unlocking Google Accounts On Honor Play 40C</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-basics-of-slug-lines-explained/"><u>In 2024, The Basics of Slug Lines Explained</u></a></li>
<li><a href="https://snapchat-videos.techidaily.com/in-2024-the-compreenas-for-snapchat-success-stories/"><u>In 2024, The Compreenas for SnapChat Success Stories</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-ultimate-guide-to-iphone-ringtones-refinement/"><u>In 2024, The Ultimate Guide to iPhone Ringtones Refinement</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-todays-drone-usage-tomorrows-revolutionary-pathways/"><u>In 2024, Today's Drone Usage, Tomorrow's Revolutionary Pathways</u></a></li>
<li><a href="https://smart-video-editing.techidaily.com/new-master-video-editing-on-mac-with-mkvtoolnix-a-step-by-step-guide-2023/"><u>New Master Video Editing on Mac with MKVtoolnix A Step-by-Step Guide 2023</u></a></li>
<li><a href="https://data-wizards.techidaily.com/simplify-movie-file-fixes-with-stellar-expertise/"><u>Simplify Movie File Fixes with Stellar Expertise</u></a></li>
<li><a href="https://some-skills.techidaily.com/superb-alter-ego-voice-tools-for-aspiring-vtubers-for-2024/"><u>Superb Alter-Ego Voice Tools For Aspiring VTubers for 2024</u></a></li>
<li><a href="https://youtube-videos.techidaily.com/the-complete-youtube-traffic-and-monetization-guidebook/"><u>The Complete Youtube Traffic & Monetization Guidebook</u></a></li>
<li><a href="https://some-skills.techidaily.com/unlocking-the-power-of-imagery-in-podcast-art-for-2024/"><u>Unlocking the Power of Imagery in Podcast Art for 2024</u></a></li>
</ul></div>

