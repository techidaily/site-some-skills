---
title: "Simplifying Your Experience: The Ever-Evolving User-Friendliness of the Windows Subsystem for Linux"
date: 2024-09-17T00:06:45.610Z
updated: 2024-09-23T02:13:03.748Z
tags:
  - deals
categories:
  - tech
thumbnail: https://thmb.techidaily.com/e29e93d35845e0087f7b9052aff9cbe637121c31e79b4423801c6a206d9b7bce.jpg
---

## Simplifying Your Experience: The Ever-Evolving User-Friendliness of the Windows Subsystem for Linux

It's been a week since the BUILD conference ended, but Microsoft has one last announcement up its sleeve. The Windows Subsystem for Linux (WSL) is gaining some new features, and it will soon offer a dedicated GUI for more convenient settings adjustments.

 Two features that were introduced in the [WSL September 2023 update](https://devblogs.microsoft.com/commandline/windows-subsystem-for-linux-september-2023-update/)—autoMemoryReclaim and dnsTunneling—are now transitioning from experimental status to default, stable settings. The autoMemoryReclaim feature aims to free unused RAM from the clutches of [WSL](https://extra-guidance.techidaily.com/2024-approved-quick-tips-to-master-free-countdown-functions/), which may improve system performance while running memory-hogging applications on some systems. And, as the name implies, dnsTunneling improves WSL's network compatibility by enabling DNS tunneling by default.

![A screenshot of the upcoming WSL Settings GUI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/53.jpg) 

Microsoft

 This update also introduces an experimental automatic disk space reclaim setting that you can enable using _– wsl --manage --set-sparse <true/false>_. And Microsoft is taking this opportunity to remind users that the experimental mirrored networking mode, which debuted in the September 2023 update, can be enabled with _– wslconfig setting of networkingMode=mirrored_. Other experimental features introduced in the September 2023 update, such as sparseVhd, were promoted to default settings earlier this year.

 More interestingly, Microsoft is preparing to launch a WSL Settings GUI app. This saves you the trouble of manually editing the contents of the .wslconfig file or fiddling in the command line when adjusting things like memory or disk usage. Any changes made to the .wslconfig file will be immediately reflected in the WSL Settings GUI app, so you can continue doing things the old-fashioned way, if that's what you'd prefer.

 Microsoft has also announced that WSL will support the Dev Home app's new Environments feature, which makes it easier to manage and launch operating systems for development purposes. The [work in progress source code](https://github.com/WhitewaterFoundry/DevHomeWSLExtension) is currently available on GitHub. For enterprise customers, Microsoft Defender for Endpoint’s WSL 2 support is now generally available. [WSL management via Intune](https://learn.microsoft.com/en-us/windows/wsl/enterprise#configure-recommended-settings-with-intune) is also rolling out as a public preview, and Microsoft Entra Id is coming to WSL later this year.

 You can read more about the new WSL update at Microsoft's [Command Line blog](https://devblogs.microsoft.com/commandline/whats-new-in-the-windows-subsystem-for-linux-in-may-2024/). Note that you can report technical issues at the [WSL GitHub repo](https://github.com/microsoft/wsl).

 Source: [Microsoft](https://devblogs.microsoft.com/commandline/whats-new-in-the-windows-subsystem-for-linux-in-may-2024/)

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



<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2100533/7443" target="_top" id="2100533">
  <img src="//a.impactradius-go.com/display-ad/7443-2100533" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2100533/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

