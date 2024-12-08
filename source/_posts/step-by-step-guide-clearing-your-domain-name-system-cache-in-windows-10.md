---
title: "Step-by-Step Guide: Clearing Your Domain Name System Cache in Windows 10"
date: 2024-12-02T18:39:03.139Z
updated: 2024-12-07T16:43:43.155Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/154068358b5a51a99b1a55712b63fc787a6b810efb43227d04a8381bc3392428.jpg
---

## Step-by-Step Guide: Clearing Your Domain Name System Cache in Windows 10

### Quick Links

* [What Does the DNS Cache Do?](https://screen-video-capture.techidaily.com/new-2024-approved-simplified-game-recording-setups-for-stardew-villagers/)
* [Flushing Your DNS Cache](https://facebook-video-share.techidaily.com/updated-swipe-right-on-creativity-youtubes-top-techniques-for-greenscreens/)

### Key Takeaways

* The DNS cache stores information that translates domain names into IP addresses, saving time when you connect to websites.
* Flushing your PC's DNS cache can help fix internet connection issues caused by corrupted, outdated, or poisoned cache.
* To flush your DNS Cache, run "ipconfig /flushdns" in Command Prompt or PowerShell, or just restart your PC.

 A problem with your PC's DNS cache can result in trouble connecting to the internet. If you've tried the usual tricks [like clearing your browser cache and cookies](https://howto.techidaily.com/top-10-fixes-for-phone-keep-disconnecting-from-wi-fi-on-huawei-nova-y71-drfone-by-drfone-fix-android-problems-fix-android-problems/), flushing Windows 10's DNS may fix your problem.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/uV3vm805eX0?si=YSPcsFxBcJmoxLsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  What Does the DNS Cache Do? 

 A [Domain Network System (DNS) server](https://instagram-clips.techidaily.com/new-2024-approved-revealing-the-top-10-hidden-story-supporters/) is what translates familiar domain names like howtogeek.com into the IP addresses computers use to connect with each other. When a program tries to connect to a domain name like google.com or facebook.com, your computer queries a DNS server on the internet to get the corresponding numerical IP address. To save time, Windows 10 stores a copy of the information it gets from DNS servers locally on your PC. This is called the DNS cache.

 Your PC's DNS cache can save time, but if something goes wrong with it, it can cause connection errors. The DNS cache can become corrupted, where the information relating IP addresses to domain names is lost due to a glitch. The cache can also become outdated, meaning that either the domain name or the IP address of the site you're trying to reach has changed since the cache was last updated. The DNS cache can also be poisoned, where it is [given incorrect information by DNS servers](https://vimeo-videos.techidaily.com/new-in-2024-premium-downloader-suite-for-vimeo-content/). DNS cache poisoning can be accidental, but it can also be used maliciously to steal login credentials or other sensitive data.

 The DNS cache affects all internet traffic on your PC, so if you're having trouble with only one program or a single website, the problem probably isn't your DNS cache. If you can't reach a specific website, you can use a tool like [IsItDownRightNow](https://www.isitdownrightnow.com/) to check the website's status. If a single application isn't able to connect to the internet, try [checking your firewall settings](https://screen-mirror.techidaily.com/in-2024-how-to-cast-apple-iphone-7-to-chromecast-drfone-by-drfone-ios/).

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/KF793jv1LIc?si=fJOogQJ2f8JUfTzZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Flushing Your DNS Cache

 The DNS cache is not stored as a file on your PC, it is stored in system memory. System memory gets cleared every time your computer powers off, which is part of the reason [why restarting your computer fixes so many problems](https://android-pokemon-go.techidaily.com/in-2024-all-you-need-to-know-about-mega-greninja-for-motorola-moto-g13-drfone-by-drfone-virtual-android/). It also means the simplest way to flush your DNS cache is to restart your PC.

 If you want to manually flush your DNS cache on Windows 10, you can use Command Prompt or Windows PowerShell. Some commands must be "[Run as administrator](https://android-location.techidaily.com/in-2024-10-fake-gps-location-apps-on-android-of-your-samsung-galaxy-xcover-6-pro-tactical-edition-drfone-by-drfone-virtual/)," but it doesn't matter in this case.

 To launch Command Prompt, click the start button, type "cmd" or "command prompt" into the search bar on the Start menu, and then hit Enter.

![Running Command Prompt from the Start Menu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-command-prompt.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/pGHmqD53gc8?si=ymgHIB6Aa7_MoUUf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Alternatively, you can use Windows PowerShell. Click the Start button, type "powershell" into the search bar in the Start menu, and hit Enter.

![Enter "PowerShell" in the Start Menu search.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-powershell.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/c1yHj02oP3w?si=mwi3FyP0p68gkBqV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 With either Command Prompt or Windows PowerShell opened, enter the following command:

        `ipconfig /flushdns`
    
 If the DNS cache was flushed, you should see the "Successfully flushed the DNS Resolver Cache" message. You can now close the window.

 If you're using PowerShell 5 (which is still default on Windows 10) your Window will be blue instead of black. 

![The DNS Cache has been flushed successfully in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/flush-dns-powershell.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/L603QXgjb3I?si=sMYHfMGy2kNPSHPt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 You can now test the websites or application you were having problems with. Is it working? If you're still experiencing problems, you'll have to try [other internet connection troubleshooting steps](https://article-posts.techidaily.com/pioneering-medical-messaging-in-digital-advertising/).

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
<li><a href="https://screen-video-capture.techidaily.com/new-exclusive-pc-sound-recording-with-x-recorder-tool/"><u>[New] Exclusive PC Sound Recording with X-Recorder Tool</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-streamline-video-content-delivery-a-curated-list-of-players/"><u>[New] Streamline Video Content Delivery A Curated List of Players</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-tricks-for-optimizing-windows-11/"><u>[New] Top Tricks for Optimizing Windows 11</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-precision-in-podcast-promotion-timelines/"><u>[Updated] Precision in Podcast Promotion Timelines</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/updated-radiant-cinematography-the-ultimate-guide-for-videographers/"><u>[Updated] Radiant Cinematography The Ultimate Guide for Videographers</u></a></li>
<li><a href="https://instagram-video-recordings.techidaily.com/2024-approved-from-sideways-to-symmetry-the-ultimate-manual-of-visual-storytelling-through-rotations-on-social-media/"><u>2024 Approved From Sideways to Symmetry The Ultimate Manual of Visual Storytelling Through Rotations on Social Media</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-streamlining-your-zoom-livestream-a-playbook-for-youtube-enthusiasts/"><u>2024 Approved Streamlining Your Zoom Livestream A Playbook for YouTube Enthusiasts</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-essential-guide-to-photo-backdrop-removal-in-picsart/"><u>2024 Approved The Essential Guide to Photo Backdrop Removal in Picsart</u></a></li>
<li><a href="https://video-screen-grab.techidaily.com/2024-approved-ultimate-guide-to-top-notch-mac-audio-recorders-a-comprehensive-list/"><u>2024 Approved Ultimate Guide to Top-Notch Mac Audio Recorders A Comprehensive List</u></a></li>
<li><a href="https://games-able.techidaily.com/engage-with-friends-and-strangers-live-xbox-content-sharing-on-discord/"><u>Engage with Friends and Strangers: Live Xbox Content Sharing on Discord</u></a></li>
<li><a href="https://iphone-location.techidaily.com/in-2024-how-to-enable-disable-and-change-safari-location-on-apple-iphone-12-drfone-by-drfone-virtual-ios/"><u>In 2024, How to Enable, Disable, and Change Safari Location on Apple iPhone 12 | Dr.fone</u></a></li>
<li><a href="https://ios-unlock.techidaily.com/in-2024-how-to-make-the-most-of-your-iphone-13-mini-lock-screen-with-notifications-by-drfone-ios/"><u>In 2024, How to Make the Most of Your iPhone 13 mini Lock Screen with Notifications?</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-thank-you-in-motion-templates-for-every-budget-level/"><u>In 2024, Thank You in Motion Templates for Every Budget Level</u></a></li>
<li><a href="https://android-location-track.techidaily.com/in-2024-top-5-car-locator-apps-for-xiaomi-redmi-k70e-drfone-by-drfone-virtual-android/"><u>In 2024, Top 5 Car Locator Apps for Xiaomi Redmi K70E | Dr.fone</u></a></li>
<li><a href="https://win-best.techidaily.com/ingyenes-fuggonyozason-konvertaloz-hasznalat-mp4-vonalarol-movavi-szelsosito-cserezoszerelo/"><u>Ingyenes Függönyozáson Konvertálóz Használat MP4-Vonaláról - Movavi Szélsősítő Cserezőszerelő</u></a></li>
<li><a href="https://some-skills.techidaily.com/streamlining-the-update-process-for-accurate-tiktok-age-details-for-2024/"><u>Streamlining the Update Process for Accurate TikTok Age Details for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/title-transformations-beyond-standard-styles-for-2024/"><u>Title Transformations Beyond Standard Styles for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/user-insights-on-vllo-for-2024/"><u>User Insights on VLLO for 2024</u></a></li>
<li><a href="https://win-howtos.techidaily.com/windows-10-users-heres-how-to-overcome-the-port-reset-failed-error-with-your-usb-device/"><u>Windows 10 Users, Here's How to Overcome the 'Port Reset Failed' Error with Your USB Device</u></a></li>
</ul></div>

