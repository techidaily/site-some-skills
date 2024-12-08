---
title: How to Set Up a Personal Streaming Station with Icecast on Linux
date: 2024-12-02T01:50:31.566Z
updated: 2024-12-07T17:01:15.223Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/10/52730616053_b68b4eca6b_o.png
---

## How to Set Up a Personal Streaming Station with Icecast on Linux

### Quick Links

* [Installing Icecast](https://article-posts.techidaily.com/2024-approved-supreme-five-optimal-dvd-software-for-sierra-os/)
* [Initial Configuration](https://some-techniques.techidaily.com/in-2024-gigglemaker-step-by-step-to-fun-videos/)
* [Choosing a Source Client](https://facebook-video-recording.techidaily.com/effortlessly-broadcasting-tiktok-videos-to-facebook-for-2024/)
* [Choosing a Listener Client](https://extra-resources.techidaily.com/new-augment-your-cams-with-top-accessory-picks/)
* [Additional Configuration](https://unlock-android.techidaily.com/the-ultimate-guide-to-honor-90-pro-pattern-lock-screen-everything-you-need-to-know-by-drfone-android/)
* [Promoting Your Station](https://ios-unlock.techidaily.com/how-to-bypass-apple-iphone-12-pro-passcode-easily-video-inside-by-drfone-ios/)

 Ever wanted to start your own radio station that you and your friends can enjoy? You can, with Icecast. In this article we'll create a simple online streaming radio.

 Icecast is an open-source [HTTP](https://facebook-video-share.techidaily.com/updated-2024-approved-best-10-screen-recorders-for-youtube/) / standards-based live media streaming server created by the [Xiph.org Foundation](https://xiph.org/). It's used for everything from small home radio & jukebox projects to large corporate internet radio stations, and everything in between. To start, all you'll need is a computer and a connected microphone. Icecast is available for Linux/Unix and Windows. Similar projects exist, such as [Shoutcast](https://www.shoutcast.com/), [Snapcast](https://mjaggard.github.io/snapcast/) and [AzuraCast](https://www.azuracast.com/). We're going to use Icecast here as it's the most suitable and straightforward setup process for a DIY streaming radio station.

 License requirements to run an Internet radio station vary by country. If you plan on streaming copyrighted material, you must obtain appropriate licenses from copyright authorities, and/or get explicit permission from all copyright holder(s). Please consult the laws in your country for specific requirements. For more info, check out the [the Wikipedia page on internet radio broadcasing](https://en.wikipedia.org/wiki/Internet%5Fradio%5Flicensing).

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/MPoakxUNf9o?si=S-ppSqzHzN9VrxC7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Installing Icecast

 You can download Icecast using your distribution's package manager, which is the method we'll use in this article.

 As with many software projects, if you want the most recent version of Icecast, download and build the source directly from the [official website](https://icecast.org/) or clone the public [Git repository](https://gitlab.xiph.org/xiph/icecast-server). Version 2.5 is near completion at the time of writing and has many new features, including a complete overhaul of the web UI—but is not included in distros just yet.

 For Debian based distributions, install the icecast2 package using apt:

sudo apt install icecast2

![Terminal window showing command to install Icecast onDebian](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/1-15.png) 

 For Redhat distros, use dnf to install the icecast package:

sudo dnf install icecast

![Terminal window showing command to install Icecast on Fedora](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/1-17.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/f3PFn06LijE?si=zHrmlTOzrKxXe-k4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Initial Configuration

 So you've installed Icecast. Now what? Debian distros will run a post-install script which helps you configure things. At the first dialog, hit the left arrow key to select "Yes" and then hit Enter:

![Terminal window asking if you would like to configure Icecast on Debian](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/2-8.png) 

 Since we're setting up a private radio stream, we'll enter the machine's [LAN IP](https://fake-location.techidaily.com/fake-the-location-to-get-around-the-mlb-blackouts-on-apple-iphone-14-pro-drfone-by-drfone-virtual-ios/) at the next prompt:

![Terminal window asking for your address for Icecast on Debian](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/3-8.png) 

 A source client is the program you use that streams media files (or live audio) _to the server_. The source password authenticates with Icecast to allow you to start a stream. I recommend a unique password and not the default (which is "hackme"). Maybe something like:

![Terminal window asking for a source password for Icecast on Debian](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/4-6.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/RhLjZsruC9M?si=-861oUSfrUde2Ykt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Relays are useful in larger setups for distributing listener load to multiple servers. We won't be setting up relays here, so you can enter whatever you want (but again I recommend changing the default):

![Terminal window asking for a relay password for Icecast on Debian](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/5-8.png) 

 Finally, we're asked for the admin user password. You'll use this to access Icecast's web interface admin section. Change the default to something unique:

![Terminal window asking for an admin password for Icecast on Debian](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/6-6.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/xg3PHS_Ee80?si=fE_iGIqHjKvWFIN3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Redhat distros simply return to the command prompt after installing. No big deal, we'll set things up directly in the configuration file, located at "/etc/icecast.xml". Fire up your favorite text editor and let's get to work:

![Terminal window showing the vim command to edit icecast.xml on Fedora](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/3-install-2.png) 

 The default configuration is well-thought-out for most simple installations like ours. Icecast developers recommend the best practice of changing as little as possible, and fine-tune afterwards to suit your needs.

 First, change passwords from their defaults:

![Editor with icecast icecast.xml open, showing passwords to edit](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/5-install-2.png) 

 Next, change the bind-address to your server's LAN IP address:

![Editor with icecast icecast.xml open, showing bind-address to edit](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/7-install-2.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/kTHQrw8e1gk?si=gTPIa7KjhSZ0Vz97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Save the configuration file, then restart Icecast for our changes to take effect:

![Terminal window showing the command to restart Icecast, applying new configuration](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/9-install.png) 

 Let's verify that we're up and running:

sudo systemctl status icecast.service

![Terminal window using systemctl command to verify Icecast daemon is running](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/11-install-1.png) 

 Great! Now that Icecast is up, let's get started on our source client.

##  Choosing a Source Client

 There are 3 primary components of Icecast streaming: the source client, the Icecast server, and the listener client. They are all independent of each other and can all (and many times do) operate on different machines. A source client is what actually plays your music files, or streams live audio to Icecast. Icecast then distributes that stream to listeners via the HTTP protocol. It goes a little something like this:

![Flowchart of Icecast stream](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/icecast-flow-1.png) 

ePirat / Xiph.org Foundation

 Choosing the right source client for your setup depends on many factors. Some questions you may consider when deciding will include:

* Will I stream pre-recorded sound/music files?
* Will I stream live audio from microphones and mixing consoles?
* Will I broadcast from a desktop/laptop or a mobile device (or both)?
* Do I have operating system constraints or requirements?

 There's a non-exhaustive list of source clients on the [Icecast Apps page](https://icecast.org/apps/).

 For this tutorial we'll use a feature-rich yet easy-to-use source client made by Daniel Nöthen called [Broadcast Using This Tool](https://danielnoethen.de/butt/) (BUTT for short—don't ask me whether this acronym was intentional or not!). We'll use BUTT to livestream from our microphone to Icecast. BUTT is available for Linux, macOS and Windows. You can get it from [the official download page](https://danielnoethen.de/butt/).

 Configuration is pretty straightforward. From the main window, select the "Settings" button, then on the "Main" tab, under "Server Settings", click the "Add" button. A new window pops up to configure your server.

 Choose a name for this server's config (multiple server configurations are supported) and select the "Icecast" radio button. Fill out the IP address as well as port (default port is 8000) of your Icecast server, along with your source password. Under "Icecast Mountpoint", add .OPUS to the end (Adding an extension helps some listener clients determine which codec is being used). Leave the "Icecast User" as source and "Use legacy Icecast protocol" unchecked. Click "Add" and then, under the parent window, click "Save".

![BUTT dialog window showing server settings](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/butt-1-1.png) 

 The test setup here uses non-[TLS](https://extra-skills.techidaily.com/2024-approved-inspirational-movies-for-momentum-and-self-belief/) communications on port 8000\. [Icecast fully supports SSL/TLS encryption](https://www.icecast.org/docs/icecast-2.4.1/config-file.html#ports) but [creating certs](https://sim-unlock.techidaily.com/in-2024-how-to-unlock-sim-card-on-vivo-y17s-online-without-jailbreak-by-drfone-android/) is outside the scope of this tutorial. **I highly recommend using TLS** if you decide to make your stream accessible from anywhere outside your private, local network!

 Ok, let's talk sound! Following in the spirit of F/OSS, we'll use [Opus](https://www.opus-codec.org/) (a totally open, royalty-free, highly versatile and widely supported audio codec, also created by Xiph.org) for our stream.

 From "Settings", click the "Audio" tab. Set "Samplerate" to 48000Hz (required by Opus), verify "Primary Audio Device" is where your microphone is connected and set "Streaming Codec" to Opus:

![BUTT dialog window showing audio settings](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/butt-2.png) 

 Finally, go back to the "Main" tab and click "Save":

![BUTT dialog window showing main settings and to save configuration](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/butt-3.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/Nl0Z0eth1u4?si=0eecOBNfc--51AJO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 From here you can close the "Settings" window. When you're ready, click on the "Play" button, which will start your stream. If you've configured everything correctly, you'll currently be making your server's radio stream debut!

![BUTT main window actively streaming to Icecast](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/butt-4.png) 

 Cool! Now let's log into the Icecast web UI at "http://LAN\_IP:8000/admin/" and enter "admin" for the username along with your configured Icecast admin password:

![Browser window asking for username and password to log into Icecast administration section](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/ff-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/rBnnLFJbvr4?si=LlHYrYlOBp7NLMec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Select "Mountpoint List" from the main Admin page:

![Browser window showing Icecast administration section](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/ff-2.png) 

 Copy the "M3U" hyperlink:

![Browser window showing active Icecast mountpoints](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/ff-3.png) 

 This link, minus the .M3U extension, is what you will use to listen with your web browser.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/S3Th6oa_isA?si=TTQ013BB9beUM4x6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Choosing a Listener Client

 Listener clients in general require very little configuration. Thanks to [HTML5 audio](https://en.wikipedia.org/wiki/HTML5%5Faudio), you can simply point a web browser to your new stream URL. Here's a list of [browser supported HTML5 audio encoding formats](http://en.wikipedia.org/wiki/HTML5%5Faudio#Supported%5Faudio%5Fcoding%5Fformats).

 Using a web browser, paste the stream URL you copied above into the address bar (again, removing the .M3U extension) and hit Enter.

![Browser window playing Icecast stream in HTML5 audio player](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/12/ff-4.png) 

 Do you hear your stream? That's Icecast at work.

##  Additional Configuration

 Icecast has many advanced features. Some of them are:

* Multiple simultaneous streams on a single server
* A "fallback" system which can programmatically move listeners between mountpoints
* Relay functionality, distributing your streams across multiple servers
* "URL Authentication", authenticating users against a dedicated server/database (v2.5+)
* Built-in chroot ability
* Publishing your stream in the [Icecast YP directory](https://dir.xiph.org/)
* [Shoutcast](https://en.wikipedia.org/wiki/Shoutcast) compatibility mode

 These features and more are very well explained in the [official Icecast documentation](https://www.icecast.org/docs/).

 You can also use [port forwarding](https://facebook-videos.techidaily.com/new-in-2024-converting-stored-content-into-real-time-livestreams-on-social-media/) to access your stream from outside your local network.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/S0b9szh8vEk?si=NlGzpJ6MN_SJNk5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Promoting Your Station

 Promoting really depends on the type of station you create. If it's just for fun, telling a good friend will suffice! If you want more exposure: listing in the Icecast directory, creating a quality website around it and executing a comprehensive marketing campaign on social media is a surefire way to gain some attention online.

 The most important piece of information I can give you when building your first streaming radio station is to _have fun_! The result is very rewarding and full of exciting moments that you'll treasure forever.

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
<li><a href="https://facebook-video-recording.techidaily.com/new-2024-approved-ace-your-fb-video-campaigns-with-these-powerful-tricks/"><u>[New] 2024 Approved Ace Your FB Video Campaigns with These Powerful Tricks</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-10-online-photo-editing-tools-to-unblur-photos-effectively/"><u>[New] Top 10 Online Photo Editing Tools to Unblur Photos Effectively</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-mobile-vr-experiences-the-leading-10-headsets/"><u>[New] Top Mobile VR Experiences - The Leading 10 Headsets</u></a></li>
<li><a href="https://desktop-recording.techidaily.com/updated-2024-approved-quick-tips-streamline-screen-capture-on-dell-systems/"><u>[Updated] 2024 Approved Quick Tips Streamline Screen Capture on Dell Systems</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-checklist-for-smooth-transitions/"><u>2024 Approved The Ultimate Checklist for Smooth Transitions</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unleashing-creativity-building-a-memorable-podcast-name/"><u>2024 Approved Unleashing Creativity Building a Memorable Podcast Name</u></a></li>
<li><a href="https://win-howtos.techidaily.com/clarify-your-view-fixing-fuzzy-typography-on-windows-11-systems/"><u>Clarify Your View: Fixing Fuzzy Typography on Windows 11 Systems</u></a></li>
<li><a href="https://technical-tips.techidaily.com/discover-the-leading-mac-application-tools-for-2cuary-curated-by-tech-gurus-at-zdnet/"><u>Discover the Leading Mac Application Tools for 2Cuary - Curated by Tech Gurus at ZDNet</u></a></li>
<li><a href="https://android-frp.techidaily.com/in-2024-is-gsm-flasher-adb-legit-full-review-to-bypass-your-nokia-c12-profrp-lock-by-drfone-android/"><u>In 2024, Is GSM Flasher ADB Legit? Full Review To Bypass Your Nokia C12 ProFRP Lock</u></a></li>
<li><a href="https://win-solutions.techidaily.com/stellaris-trouble-heres-how-to-diagnose-and-repair-in-game-crashing-issues/"><u>Stellaris Trouble? Here's How to Diagnose & Repair In-Game Crashing Issues</u></a></li>
</ul></div>

