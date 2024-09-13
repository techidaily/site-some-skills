---
title: Resolving Compatibility Errors in Windows 11 on Aging CPU Architecture
date: 2024-09-11T09:56:28.195Z
updated: 2024-09-12T19:05:14.101Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/08/windows-11-2.jpg
---

## Resolving Compatibility Errors in Windows 11 on Aging CPU Architecture

The official system requirements for Windows 11 are much higher than Windows 10, but workarounds exist to install the operating system on older PCs. However, some of those older PCs can no longer use Windows 11 due to a CPU instruction update.

 Microsoft started testing Windows 11 builds back in February that required the POPCNT CPU instruction for some system functions. It was unclear at the time if the change was intentional or accidental, but the newer Windows 11 Build 26080 won’t even boot up if the processor doesn’t support POPCNT. Instead, Windows 11 gets stuck in a reboot loop. Microsoft declined to comment on the change when asked by _The Register_.

 The POPCNT CPU instruction is part of the SSE4.2 instruction set. Intel added it with the first generation of Core i5 and Core i7 processors (the [Nehalem architecture](https://en.wikipedia.org/wiki/Nehalem%5F%28microarchitecture%29)) in 2008\. AMD added the SSE4.2 instruction set to its [Bulldozer processors](https://en.wikipedia.org/wiki/Bulldozer%5F%28microarchitecture%29) in 2013—the POPCNT instruction was supported in earlier AMD CPUs, but only under the incomplete SSE4a instruction set, which Windows 11 doesn't appear to support. There’s no workaround for missing CPU instructions.

 Microsoft’s official system requirements for Windows 11 already included an eight-generation Intel Core CPU or later, or a second-generation Ryzen processor or later, as well as [other PC features like TPM 2.0](https://ai-video-apps.techidaily.com/new-mkv-file-trimming-made-simple-top-3-mac-apps-for-2024/). This change only affects people who bypassed those official requirements on computers with incredibly old processors. If you have a PC just outside of the official requirements, such as a first-gen Ryzen laptop or a desktop with a seventh-generation Intel CPU, you’re still fine for now.

 Even though those older CPUs were never supposed to run Windows 11 in the first place, it’s still an annoying change. Microsoft will [end support for Windows 10](https://remote-screen-capture.techidaily.com/new-in-2024-screenflow-unleashed-the-ultimate-macos-experience/) in October 2025, unless you pay for continued software support—we [still don’t know how much that will cost](https://hardware-tips.techidaily.com/unlocking-innovations-in-computers-and-electronics-on-toms-hardware/). If you have a PC with an older CPU, you’ll have to revert back to Windows 10, or try your luck with another operating system. However, some applications and games don’t work without that CPU instruction either, [such as Apex Legends](https://steamcommunity.com/app/1172470/discussions/0/3001047413708016057/).

 The next major release of Windows could arrive as early as this year, likely named Windows 12, and could have even higher system requirements than Windows 11\. However, all of the processors that lack support for POPCNT were already officially unsupported, and many of those PCs are likely still running earlier versions of Windows anyway.

 Source: Bob Pony on Twitter/X ([1](https://twitter.com/TheBobPony/status/1758023533064565076), [2](https://twitter.com/TheBobPony/status/1781922187252797805)), [The Register](https://www.theregister.com/2024/04/23/windows%5F11%5Fcpu%5Frequirements/)

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
<li><a href="https://youtube-zero.techidaily.com/ed-2024-approved-calculating-youtube-profits-instantly/"><u>[Updated] 2024 Approved Calculating YouTube Profits Instantly</u></a></li>
<li><a href="https://vp-tips.techidaily.com/access-endless-films-on-the-go-with-the-movie-box-downloads-for-your-apple-devices/"><u>Access Endless Films on the Go with The Movie Box Downloads for Your Apple Devices!</u></a></li>
<li><a href="https://extra-resources.techidaily.com/hdr-camera-mastery-essential-buying-tips/"><u>HDR Camera Mastery Essential Buying Tips</u></a></li>
<li><a href="https://article-tips.techidaily.com/mastering-mobile-captions-ios-and-androids-leading-helpers-for-2024/"><u>Mastering Mobile Captions IOS & Android's Leading Helpers for 2024</u></a></li>
<li><a href="https://facebook.techidaily.com/metas-updated-privacy-practices-a-comprehensive-review/"><u>Meta's Updated Privacy Practices: A Comprehensive Review</u></a></li>
<li><a href="https://some-skills.techidaily.com/preventative-tips-for-a-smooth-electric-vehicle-charging-experience/"><u>Preventative Tips for a Smooth Electric Vehicle Charging Experience</u></a></li>
<li><a href="https://some-skills.techidaily.com/rectified-previously-encountered-errors-while-generating-replies-on-chatgpt-no-longer-apply/"><u>Rectified: Previously Encountered Errors While Generating Replies on ChatGPT No Longer Apply</u></a></li>
<li><a href="https://some-skills.techidaily.com/revamped-features-on-the-horizon-for-google-bard-a-strategic-improvement-overview/"><u>Revamped Features on the Horizon for Google Bard - A Strategic Improvement Overview</u></a></li>
<li><a href="https://some-skills.techidaily.com/safeguard-your-privacy-from-machine-mayhem-by-embracing-open-source-linux-solutions/"><u>Safeguard Your Privacy From Machine Mayhem by Embracing Open Source Linux Solutions</u></a></li>
</ul></div>

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2115934/19272" target="_top" id="2115934">
  <img src="//a.impactradius-go.com/display-ad/19272-2115934" border="0" alt="https://techidaily.com" width="336" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2115934/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

