---
title: "Predictive Magic with Linux: Unlocking Fortune-Telling Scripts in Terminal"
date: 2024-11-15T19:42:49.066Z
updated: 2024-11-20T03:32:55.511Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://thmb.techidaily.com/10904fe0da235375b0e6b719e293bea0266e1856f2ee595facf2cbaa2815c2e6.jpg
---

## Predictive Magic with Linux: Unlocking Fortune-Telling Scripts in Terminal

### Key Takeaways

* You can use the "fortune" command to view random quotes, jokes, or advice right in your terminal.
* Additionally, you can customize your fortune's database by creating your own fortune file.
* For additional fun, you could pipe a fortune with cowsay, or display a random fortune every time you launch your terminal.

 Ever thought your terminal could be a source of daily wisdom or humor? It's true! With the fortune command, you can receive a random quote, joke, or piece of advice every time you execute it. Whether you're working or enjoying a break, a short fortune can lift your mood and encourage new ideas.

##  What Is the fortune Command?

 The fortune command is a classic tool, with roots tracing back to the 1980s when it was bundled with [Unix](https://vimeo-videos.techidaily.com/2024-approved-elevate-your-visuals-music-integration-for-vimeo-films/). This command's primary purpose is to display a random quote, proverb, or humorous saying each time you run it. It is your digital fortune cookie that offers a slice of wisdom or a chuckle whenever you need it.

 Why add fortunes to your terminal? It’s just for fun! You can use them in your system's message of the day. Personally, I find the fortune command handy when I need some quick text to test [regular expressions](https://extra-lessons.techidaily.com/top-10-after-effects-text-presets/) in the terminal.

 To use fortune, you first need to make sure it's already present in your system. The [original version of fortune](https://en.wikipedia.org/wiki/Fortune%5F%28Unix%29) was created for a Unix-like operating system called NetBSD. However, if you're using Linux, you can't use that original version directly. Instead, you have to use a modified version called [fortune-mod](https://github.com/shlomif/fortune-mod).

 So, when you're installing fortune on a Linux system, you're actually installing the fortune-mod package. This version has been adapted specifically to work on Linux.

 On all major Linux systems, you can install fortune via default package manager. For example, on Ubuntu or Debian, run:

sudo apt install fortune-mod

 To get it on Fedora and other RPM-based systems, run:

sudo dnf install fortune-mod

 For Arch Linux, run this:

sudo pacman -S fortune-mod

 Once installed, all you need to do is type fortune into the terminal, hit enter, and wait for the magic to happen.

fortune

![Running fortune command in Linux terminal.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-command.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2123750/7443" target="_top" id="2123750">
  <img src="//a.impactradius-go.com/display-ad/7443-2123750" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2123750/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  fortune Options

 When you run a fortune without any arguments, it randomly selects an epigram from the fortune's database. However, it also comes with several options that let you enhance your experience. Let's check out some of them:

| **Option**    | **Description**                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \-a           | This option includes both offensive and inoffensive fortunes.                                                                                           |
| \-s           | This option tells fortune to only display short quotes. (less than 160 characters)                                                                      |
| \-I           | Serves up the long ones (more than 160 characters)                                                                                                      |
| \-c           | Display the cookie file from which the fortune was selected.                                                                                            |
| \-f           | Print a list of files that will be searched, without actually printing a fortune.                                                                       |
| \-e           | Using this option gives all files an equal shot. By default, longer files have a higher chance of being selected.                                       |
| \-i           | Ignore the case when matching patterns with -m.                                                                                                         |
| \-m <pattern> | Use this to search for fortunes that match a particular keyword. For example, if you want to see fortunes about love, you can type **fortune -m love**. |
| \-n <pattern> | Set the maximum length for a fortune to be considered short. The default is 160 characters. Anything longer fortune will classify as "long."            |

 Furthermore, fortune allows you to choose from different categories, such as, if you're a fan of literature or riddles, you can instruct fortune to only show quotes from those categories.

fortune literature

 You can also combine multiple options together, such as if you want a short, offensive quote from the literature category, run this:

fortune -s -o literature

<!-- affiliate ads begin -->
<a href="https://laganoo.pxf.io/c/5597632/1528693/16446" target="_top" id="1528693">
  <img src="//a.impactradius-go.com/display-ad/16446-1528693" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://laganoo.pxf.io/i/5597632/1528693/16446" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Create Your Own fortune File

 What if I told you that you could create your own fortunes? That's right, it's a straightforward process. All you need is to create your custom fortune file and make it compatible with the fortune command's requirements. In this way, you're not bound to the predefined messages.

 To try it out, simply open your terminal and create a plain text document using your [favorite text editor](https://screen-video-capture.techidaily.com/free-software-showdown-the-leading-10-audio-capture-utilities-for-2024/).

nano funny

 Next, start adding your fortunes and make sure that each fortune is separated by a line with a percent sign % on it.

![Adding fortunes text to a plain text file using nano text editor in Linux terminal.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/adding-fortunes-saying.png) 

 Once your file is ready, you need to convert it to a format that fortune can use. You can do this with the strfile command, which generates the necessary "funny.dat" file for the fortune command:

strfile -c % funny funny.dat

![Converting plain text file to fortune supported file using strfile command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/file-conversoin-strfile.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2068439/7443" target="_top" id="2068439">
  <img src="//a.impactradius-go.com/display-ad/7443-2068439" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2068439/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Now, [move both files to the directory](https://some-knowledge.techidaily.com/in-2024-immersive-innovations-the-distinct-worlds-of-mr-ar-and-vr/) where fortune looks for its data. This location can vary, but it often looks like "/usr/share/games/fortunes/" or "/usr/local/share/games/fortunes/".

sudo cp funny* /usr/share/games/fortunes/

 You can verify the movement by running this command:

fortune -f

![Listing all fortune source files using the -f option of fortune command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-listing.png) 

 The percentage here gives you a rough idea of how much of the total database size is taken up by a particular file.

 Finally, you can use the fortune command to get fortunes from your customs file.

fortune funny

![Displaying random saying from your newly created fortune file.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fotune-command-custom.png) 

 Every time you run the command, one of your hand-crafted fortunes will appear.

<!-- affiliate ads begin -->
<span id="1983575">
					<video width="576" height="240" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1983575.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1983575">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1983575.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:360px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1983575%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1983575/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Combine fortune and cowsay for Extra Fun

 If you think the fortune command is cool, wait until you see it combined with cowsay. This fun command displays an [ASCII art](https://games-able.techidaily.com/exclusive-portable-power-stations-for-gaming/) cow in your terminal that says whatever you input. There's no need for arguments—just provide some text, and you're good to go.

 You can get cowsay from your default package manager such as on Ubuntu or Debian, use apt:

sudo apt install cowsay

 Now, let's [pipe](https://review-topics.techidaily.com/how-to-transfer-whatsapp-from-iphone-11-pro-to-other-iphone-11-pro-devices-drfone-by-drfone-transfer-whatsapp-from-ios-transfer-whatsapp-from-ios/) fortune output with cowasy to produce something very funny and interesting.

fortune | cowsay

![Piping fortune output to cowsay command to display random saying along with ASCII art.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-cowsay.png) 

 Check it out! You've got a cow dispensing wisdom right there in your terminal. Just what you always wanted!

 But wait—there's more! You can also change the character delivering your fortune. For example, use **\-f** followed by the character's name to pick any other ASCII creature:

fortune | cowsay -f tux

![Tux displays random statements using fortune and cowsay commands.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-cowsay-tux.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2118306/7443" target="_top" id="2118306">
  <img src="//a.impactradius-go.com/display-ad/7443-2118306" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2118306/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 You can also make your tux [colorful by piping the lolcat command](https://youtube-tips.techidaily.com/n-2024-accelerate-yt-growth-strategies-for-1kplus-subscribers/).

fortune | cowsay -f tux | lolcat

![Making the ouptut of fortune and cowsay colorful using the lolcat command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/cowsay-linux-lolcat-1.png) 

##  View Fortune on Terminal Startup

 Want to see a friendly dose of wisdom every time you open a bash terminal? If yes, then you need to add a fortune command to the end of your [\~/.bashrc file](https://phone-solutions.techidaily.com/3-easy-solutions-to-hard-reset-nokia-xr21-drfone-by-drfone-reset-android-reset-android/).

 The first thing you need to do is to edit your shell configuration file. For [bash shell](https://blog-min.techidaily.com/how-to-repair-iphone-6-system-drfone-by-drfone-ios-system-repair-ios-system-repair/), the configuration file is likely \~/.bashrc, and for [zsh](https://on-screen-recording.techidaily.com/2023s-elite-web-based-recording-devices-for-2024/), it's \~/.zshrc. I'm using bash, so let's open it with:

nano ~/.bashrc

 Next, scroll to the bottom of the file and add the following line:

fortune | cowsay

![Adding fortune command along with cowsay to the end of bashrc file.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-cowsay-bashrc-file.png) 

 This will ensure that every time you open your terminal, you'll see a fortune delivered by a cow.

 After saving changes, press Ctrl+X to exit the editor. To see the changes happen, you can either [restart your terminal](https://data-wizards.techidaily.com/formatting-your-macs-storage-simplified-an-instructional-video/) or execute:

source ~/.bashrc

 Now, every time you launch your terminal, you'll be greeted with a delightful fortune.

![Random fortune appearing on a Linux terminal after being launched.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/terminal-fortune-begin.png) 

 If you want to use different ASCII art creatures, such as tux, just replace the **cowsay** command in the \~/.bashrc file with the **cowsay -f tux** command.

![Adding new fortune command with tux ASCII art to the end of bashrc file.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/terminal-fortune-tux.png) 

<!-- affiliate ads begin -->
<span id="1983471">
					<video width="576" height="240" style="cursor:pointer"
           poster="//a.impactradius-go.com/display-clicktoplayimage/1983471.png"
           onclick="if(!this.playClicked){this.play();this.setAttribute('controls',true);this.playClicked=true;}">
	   <source src="//a.impactradius-go.com/display-ad/22993-1983471">
	   <img src="//a.impactradius-go.com/display-clicktoplayimage/1983471.png" style="border: none; height: 100%; width: 100%; object-fit: contain">
	</video>
	<div style="width:360px;text-align:center"><a href="javascript:window.open(decodeURIComponent('https%3A%2F%2Fhomestyler.sjv.io%2Fc%2F5597632%2F1983471%2F22993'), '_blank');void(0);">Click here</a></div>
</span>
<img height="0" width="0" src="https://imp.pxf.io/i/5597632/1983471/22993" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Use Fortune for Testing

 Beyond its entertainment or enlightening uses, the fortune command has a few hidden applications. For example, you can often use it to generate random text files that are very useful for testing scripts and various commands.

 Let's redirect fortune output to a file:

fortune > file1

 To view the content of the file, run:

cat file1

![Viewing the file using the cat command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/viewing-file-with-cat.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2144273/7443" target="_top" id="2144273">
  <img src="//a.impactradius-go.com/display-ad/7443-2144273" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2144273/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 If you want to append multiple fortunes to the same file, you can do so in a loop.

        `for i in {1..10};  
do fortune >> file1;  
done`
    
 Another clever use for fortune is [generating random numbers](https://tech-hub.techidaily.com/mastering-the-art-of-influence-crafting-convincing-requests-with-chatgpt/). By using the [wc command](https://iphone-unlock.techidaily.com/in-2024-unlock-iphone-se-2020-without-passcode-easily-drfone-by-drfone-ios/) with the **\-c** option, you can count the characters in each fortune:

fortune | wc -c

##  Create a Random Picker Game

 You can also use fortune to randomize data for other purposes. Say you have a list of friends, coworkers, or contest participants—just put their names into a file and let fortune pick a winner. To accomplish this, you'll need to make your own fortune file, as explained above.

---

 There are several [fun Linux commands](https://fox-friendly.techidaily.com/updated-2024-approved-podcastpathfinder-charting-new-courses/) that can brighten your day, much like the classic fortune command. Some that I find particularly amusing is the [fake Linux hacking commands](https://instagram-video-files.techidaily.com/updated-in-2024-perfecting-highlight-covers-an-in-depth-insta-photography-guide/).

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
<li><a href="https://facebook-video-share.techidaily.com/new-bespoke-urls-for-youtube-channels-an-easy-way-for-2024/"><u>[New] Bespoke URLs for YouTube Channels An Easy Way for 2024</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/new-filmmaking-for-social-media-imovie-tips-for-crafting-square-content-for-2024/"><u>[New] Filmmaking for Social Media IMovie Tips for Crafting Square Content for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-superb-culmination-for-vr-journeys/"><u>[New] Superb Culmination for VR Journeys</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-supreme-five-optimal-dvd-software-for-sierra-os/"><u>[New] Supreme Five Optimal Dvd Software for Sierra OS</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unwind-and-learn-your-guide-to-podcasting-multitasking/"><u>[New] Unwind and Learn Your Guide to Podcasting Multitasking</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-navigating-the-nuances-zoom-and-youtube-live-streaming-explored/"><u>2024 Approved Navigating the Nuances Zoom and YouTube Live Streaming Explored</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-underwater-worlds-unseen-pro-tips-for-capturing-vivid-gopro-footage-underwater/"><u>2024 Approved Underwater Worlds Unseen Pro Tips for Capturing Vivid GoPro Footage Underwater</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unveiling-the-top-text-styling-portals-for-creatives/"><u>2024 Approved Unveiling the Top Text Styling Portals for Creatives</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/best-practices-for-drone-cinematography-for-2024/"><u>Best Practices for Drone Cinematography for 2024</u></a></li>
<li><a href="https://techtrends.techidaily.com/from-confusion-to-clarity-a-comprehensive-guide-on-tackling-device-start-up-code-10-problems/"><u>From Confusion to Clarity: A Comprehensive Guide on Tackling Device Start-Up Code 10 Problems</u></a></li>
<li><a href="https://techidaily.com/how-do-i-reset-my-honor-magic-6-lite-phone-without-technical-knowledge-drfone-by-drfone-reset-android-reset-android/"><u>How do I reset my Honor Magic 6 Lite Phone without technical knowledge? | Dr.fone</u></a></li>
<li><a href="https://location-social.techidaily.com/in-2024-how-to-change-location-on-facebook-dating-for-your-nubia-red-magic-8s-proplus-drfone-by-drfone-virtual-android/"><u>In 2024, How to Change Location On Facebook Dating for your Nubia Red Magic 8S Pro+ | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-anglers-arsenal-prime-piscine-recorders/"><u>In 2024, The Angler’s Arsenal Prime Piscine Recorders</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-art-of-creating-smooth-audio-cuts/"><u>In 2024, The Art of Creating Smooth Audio Cuts</u></a></li>
<li><a href="https://win11.techidaily.com/maximize-your-windows-11-efficiency-with-these-5-reliability-checks/"><u>Maximize Your Windows 11 Efficiency with These 5 Reliability Checks</u></a></li>
<li><a href="https://some-skills.techidaily.com/time-honored-treasures-free-of-restrictions-for-2024/"><u>Time-Honored Treasures, Free of Restrictions for 2024</u></a></li>
<li><a href="https://hardware-help.techidaily.com/top-recommended-macbook-usb-c-chargers-under-70-shop-today-at-amazonzdnet-review/"><u>Top Recommended MacBook USB-C Chargers Under $70 - Shop Today at Amazon![ZDNet Review]</u></a></li>
<li><a href="https://win-forum.techidaily.com/ultimate-tricks-for-force-quitting-frozen-windows-software-via-revouninstaller/"><u>Ultimate Tricks for Force Quitting Frozen Windows Software via RevoUninstaller</u></a></li>
<li><a href="https://remote-screen-capture.techidaily.com/ultimate-zoom-audio-capture-techniques/"><u>Ultimate ZOOM Audio Capture Techniques</u></a></li>
</ul></div>

