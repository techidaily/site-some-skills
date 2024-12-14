---
title: "Step-by-Step Guide: Clearing Your Domain Name System Cache in Windows 10"
date: 2024-12-10T17:16:44.350Z
updated: 2024-12-13T17:57:53.125Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/154068358b5a51a99b1a55712b63fc787a6b810efb43227d04a8381bc3392428.jpg
---

## Step-by-Step Guide: Clearing Your Domain Name System Cache in Windows 10

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/RAnyQ0uj9Yg?si=Es4_ulcdM_-LuDcq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Quick Links

* [What Does the DNS Cache Do?](https://screen-video-capture.techidaily.com/new-2024-approved-simplified-game-recording-setups-for-stardew-villagers/)
* [Flushing Your DNS Cache](https://facebook-video-share.techidaily.com/updated-swipe-right-on-creativity-youtubes-top-techniques-for-greenscreens/)

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/LlYIdWQc-jw?si=ZQ5809CbQGEar0vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Key Takeaways

* The DNS cache stores information that translates domain names into IP addresses, saving time when you connect to websites.
* Flushing your PC's DNS cache can help fix internet connection issues caused by corrupted, outdated, or poisoned cache.
* To flush your DNS Cache, run "ipconfig /flushdns" in Command Prompt or PowerShell, or just restart your PC.

 A problem with your PC's DNS cache can result in trouble connecting to the internet. If you've tried the usual tricks [like clearing your browser cache and cookies](https://howto.techidaily.com/top-10-fixes-for-phone-keep-disconnecting-from-wi-fi-on-huawei-nova-y71-drfone-by-drfone-fix-android-problems-fix-android-problems/), flushing Windows 10's DNS may fix your problem.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/e4Nt2xXXtmE?si=CtKwFry4b0AJXnaN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  What Does the DNS Cache Do? 

 A [Domain Network System (DNS) server](https://instagram-clips.techidaily.com/new-2024-approved-revealing-the-top-10-hidden-story-supporters/) is what translates familiar domain names like howtogeek.com into the IP addresses computers use to connect with each other. When a program tries to connect to a domain name like google.com or facebook.com, your computer queries a DNS server on the internet to get the corresponding numerical IP address. To save time, Windows 10 stores a copy of the information it gets from DNS servers locally on your PC. This is called the DNS cache.

 Your PC's DNS cache can save time, but if something goes wrong with it, it can cause connection errors. The DNS cache can become corrupted, where the information relating IP addresses to domain names is lost due to a glitch. The cache can also become outdated, meaning that either the domain name or the IP address of the site you're trying to reach has changed since the cache was last updated. The DNS cache can also be poisoned, where it is [given incorrect information by DNS servers](https://vimeo-videos.techidaily.com/new-in-2024-premium-downloader-suite-for-vimeo-content/). DNS cache poisoning can be accidental, but it can also be used maliciously to steal login credentials or other sensitive data.

 The DNS cache affects all internet traffic on your PC, so if you're having trouble with only one program or a single website, the problem probably isn't your DNS cache. If you can't reach a specific website, you can use a tool like [IsItDownRightNow](https://www.isitdownrightnow.com/) to check the website's status. If a single application isn't able to connect to the internet, try [checking your firewall settings](https://screen-mirror.techidaily.com/in-2024-how-to-cast-apple-iphone-7-to-chromecast-drfone-by-drfone-ios/).

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/Zgwn5kVI5V4?si=1j6j4OuSSndFieXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Flushing Your DNS Cache

 The DNS cache is not stored as a file on your PC, it is stored in system memory. System memory gets cleared every time your computer powers off, which is part of the reason [why restarting your computer fixes so many problems](https://android-pokemon-go.techidaily.com/in-2024-all-you-need-to-know-about-mega-greninja-for-motorola-moto-g13-drfone-by-drfone-virtual-android/). It also means the simplest way to flush your DNS cache is to restart your PC.

 If you want to manually flush your DNS cache on Windows 10, you can use Command Prompt or Windows PowerShell. Some commands must be "[Run as administrator](https://android-location.techidaily.com/in-2024-10-fake-gps-location-apps-on-android-of-your-samsung-galaxy-xcover-6-pro-tactical-edition-drfone-by-drfone-virtual/)," but it doesn't matter in this case.

 To launch Command Prompt, click the start button, type "cmd" or "command prompt" into the search bar on the Start menu, and then hit Enter.

![Running Command Prompt from the Start Menu.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-command-prompt.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/58KlTPHv8dU?si=7ICagyNgrao7OkVO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Alternatively, you can use Windows PowerShell. Click the Start button, type "powershell" into the search bar in the Start menu, and hit Enter.

![Enter "PowerShell" in the Start Menu search.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/run-powershell.png) 

 With either Command Prompt or Windows PowerShell opened, enter the following command:

        `ipconfig /flushdns`
    
 If the DNS cache was flushed, you should see the "Successfully flushed the DNS Resolver Cache" message. You can now close the window.

 If you're using PowerShell 5 (which is still default on Windows 10) your Window will be blue instead of black. 

![The DNS Cache has been flushed successfully in PowerShell.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/flush-dns-powershell.png) 

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
<li><a href="https://extra-approaches.techidaily.com/new-smooth-soundscape-fading-techniques-with-lumafusion/"><u>[New] Smooth Soundscape Fading Techniques with Lumafusion</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-mac-dvd-authorization-handbook/"><u>[New] The Ultimate Mac DVD Authorization Handbook</u></a></li>
<li><a href="https://desktop-recording.techidaily.com/updated-2024-approved-exploring-10-innovative-affordable-video-call-apps-iosandroid/"><u>[Updated] 2024 Approved Exploring 10 Innovative, Affordable Video Call Apps - iOS/Android</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-building-blocks-of-graphic-animation/"><u>[Updated] The Building Blocks of Graphic Animation</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unveiling-the-mystery-writing-hooks-for-vlogger-scripts/"><u>[Updated] Unveiling the Mystery Writing Hooks for Vlogger Scripts</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-to-show-or-not-to-display-off-facebook-activities/"><u>2024 Approved To Show or Not to Display Off-Facebook Activities</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-upward-perspectives-capturing-landscapes-from-your-phone/"><u>2024 Approved Upward Perspectives Capturing Landscapes From Your Phone</u></a></li>
<li><a href="https://win-howtos.techidaily.com/decode-and-defuse-msmpengineexes-greedy-cpu-behavior-in-windows-10-detailed-steps-to-resolve/"><u>Decode and Defuse MsMpEngine.exe's Greedy CPU Behavior in Windows 10 - Detailed Steps to Resolve</u></a></li>
<li><a href="https://some-techniques.techidaily.com/explore-10-websites-for-unlicensed-gaming-tunes-for-2024/"><u>Explore 10 Websites for Unlicensed Gaming Tunes for 2024</u></a></li>
<li><a href="https://location-social.techidaily.com/in-2024-how-to-fake-snapchat-location-without-jailbreak-on-realme-narzo-60-pro-5g-drfone-by-drfone-virtual-android/"><u>In 2024, How to Fake Snapchat Location without Jailbreak On Realme Narzo 60 Pro 5G | Dr.fone</u></a></li>
<li><a href="https://some-techniques.techidaily.com/in-2024-illuminate-focus-through-the-use-of-leading-lines-in-iphone-photography/"><u>In 2024, Illuminate Focus Through the Use of Leading Lines in iPhone Photography</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/in-2024-tutorial-to-change-xiaomi-redmi-note-12-5g-imei-without-root-a-comprehensive-guide-by-drfone-android/"><u>In 2024, Tutorial to Change Xiaomi Redmi Note 12 5G IMEI without Root A Comprehensive Guide</u></a></li>
<li><a href="https://tech-revival.techidaily.com/unleashing-creative-possibsilities-in-board-games-and-art-with-my-gpt-by-leveraging-chatgpt-bots/"><u>Unleashing Creative Possibsilities in Board Games & Art with My GPT by Leveraging ChatGPT Bots</u></a></li>
<li><a href="https://instagram-videos.techidaily.com/vibing-with-visuals-merging-music-and-imagery-on-ig/"><u>Vibing with Visuals Merging Music and Imagery on IG</u></a></li>
</ul></div>

