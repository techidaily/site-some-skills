---
title: "Predictive Magic with Linux: Unlocking Fortune-Telling Scripts in Terminal"
date: 2025-02-11T22:14:47.374Z
updated: 2025-02-17T06:21:10.451Z
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/QPAKth3O_5c?si=3YDfzJAZMDp1gFRz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/620kcQ7Dw7w?si=a5ussGs5HV7sG3hF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Now, [move both files to the directory](https://some-knowledge.techidaily.com/in-2024-immersive-innovations-the-distinct-worlds-of-mr-ar-and-vr/) where fortune looks for its data. This location can vary, but it often looks like "/usr/share/games/fortunes/" or "/usr/local/share/games/fortunes/".

sudo cp funny* /usr/share/games/fortunes/

 You can verify the movement by running this command:

fortune -f

![Listing all fortune source files using the -f option of fortune command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-listing.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/kTHQrw8e1gk?si=gTPIa7KjhSZ0Vz97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 The percentage here gives you a rough idea of how much of the total database size is taken up by a particular file.

 Finally, you can use the fortune command to get fortunes from your customs file.

fortune funny

![Displaying random saying from your newly created fortune file.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fotune-command-custom.png) 

 Every time you run the command, one of your hand-crafted fortunes will appear.

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/4DJKH1uY7P0?si=tCG66XVlbwSKoATj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Combine fortune and cowsay for Extra Fun

 If you think the fortune command is cool, wait until you see it combined with cowsay. This fun command displays an [ASCII art](https://games-able.techidaily.com/exclusive-portable-power-stations-for-gaming/) cow in your terminal that says whatever you input. There's no need for arguments—just provide some text, and you're good to go.

 You can get cowsay from your default package manager such as on Ubuntu or Debian, use apt:

sudo apt install cowsay

 Now, let's [pipe](https://review-topics.techidaily.com/how-to-transfer-whatsapp-from-iphone-11-pro-to-other-iphone-11-pro-devices-drfone-by-drfone-transfer-whatsapp-from-ios-transfer-whatsapp-from-ios/) fortune output with cowasy to produce something very funny and interesting.

fortune | cowsay

![Piping fortune output to cowsay command to display random saying along with ASCII art.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-cowsay.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/465CTOm8om0?si=63RxowNMCFA4fPUa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Check it out! You've got a cow dispensing wisdom right there in your terminal. Just what you always wanted!

 But wait—there's more! You can also change the character delivering your fortune. For example, use **\-f** followed by the character's name to pick any other ASCII creature:

fortune | cowsay -f tux

![Tux displays random statements using fortune and cowsay commands.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/fortune-cowsay-tux.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/zAzTErKy6h8?si=vi5z3M9_7fW6qiAJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
<iframe width="560" height="315" src="https://www.youtube.com/embed/o-sRtqHdEYY?si=NMTMQVxJsUaoguqh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

##  Use Fortune for Testing

 Beyond its entertainment or enlightening uses, the fortune command has a few hidden applications. For example, you can often use it to generate random text files that are very useful for testing scripts and various commands.

 Let's redirect fortune output to a file:

fortune > file1

 To view the content of the file, run:

cat file1

![Viewing the file using the cat command.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/08/viewing-file-with-cat.png) 

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
<li><a href="https://vp-tips.techidaily.com/new-2024-approved-advanced-3d-text-techniques-in-ai/"><u>[New] 2024 Approved Advanced 3D Text Techniques in AI</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/new-in-2024-the-essential-guide-to-using-zdsoft-vision/"><u>[New] In 2024, The Essential Guide to Using ZDSoft Vision</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-revolutionizing-home-cinema-latest-on-samsungs-ubd-k850u/"><u>[New] Revolutionizing Home Cinema Latest on Samsung’s UBD-K850U</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unveiling-the-top-gopro-models-max-vs-hero-11/"><u>[Updated] Unveiling the Top GoPro Models Max Vs. Hero 11</u></a></li>
<li><a href="https://desktop-recording.techidaily.com/boost-communication-how-to-use-google-hangouts-on-mobile/"><u>Boost Communication How to Use Google Hangouts on Mobile</u></a></li>
<li><a href="https://facebook.techidaily.com/dismantling-digital-dominance-the-governments-challenge-to-big-tech/"><u>Dismantling Digital Dominance: The Government's Challenge to Big Tech</u></a></li>
<li><a href="https://iphone-unlock.techidaily.com/how-to-unlock-apple-iphone-15-drfone-by-drfone-ios/"><u>How to Unlock Apple iPhone 15? | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-essence-of-burst-in-gopro-filming-techniques/"><u>In 2024, The Essence of Burst in GoPro Filming Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-hidden-reasons-behind-imovies-cuts/"><u>In 2024, The Hidden Reasons Behind iMovie’s Cuts</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-top-7-affordable-4k-mirrorless-cameras-(1000/"><u>In 2024, Top 7 Affordable 4K Mirrorless Cameras <$1,000</u></a></li>
<li><a href="https://review-topics.techidaily.com/mp4-video-repair-tool-repair-corrupt-damaged-unplayable-video-files-of-xiaomi-redmi-k70e-by-stellar-video-repair-mobile-video-repair/"><u>MP4 Video Repair Tool - Repair corrupt, damaged, unplayable video files of Xiaomi Redmi K70E</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/network-locked-sim-card-inserted-on-your-honor-90-pro-phone-unlock-it-now-by-drfone-android/"><u>Network Locked SIM Card Inserted On Your Honor 90 Pro Phone? Unlock It Now</u></a></li>
<li><a href="https://mondly-stories.techidaily.com/pinnacle-of-proficiency-advanced-english-techniques-by-mondly/"><u>Pinnacle of Proficiency: Advanced English Techniques by Mondly</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-vr-player-guide-unveiling-the-best-pc-streamers-for-2024/"><u>The Ultimate VR Player Guide Unveiling the Best PC Streamers for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-5-drone-friendly-vr-experiences-for-2024/"><u>Top 5 Drone-Friendly VR Experiences for 2024</u></a></li>
</ul></div>

