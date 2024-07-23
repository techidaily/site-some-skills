---
title: "[New] Using LUTs in Spark AR & Download Free LUTs"
date: 2024-07-22T02:21:30.322Z
updated: 2024-07-23T02:21:30.322Z
tags: 
  - screen-recording
  - ai video
  - ai audio
  - ai auto
categories: 
  - ai
  - screen
description: "This Article Describes [New] Using LUTs in Spark AR & Download Free LUTs"
excerpt: "This Article Describes [New] Using LUTs in Spark AR & Download Free LUTs"
keywords: "Spark AR LUT Use,Free LUT Downloads,AR App LUTs,LUT Creation Spark,Customize Spark AR,Download LUT Pack,Free AR Lookup Table"
thumbnail: https://thmb.techidaily.com/64dd4d70d6e0441ce0215a5b5c562664b1c9c88648a5d01b942d93707afe0dac.jpg
---

## Using LUTs in Spark AR & Download Free LUTs

Color LUTs (Lookup Textures) are tables of RGB color values. In Spark AR, you can use color LUTs to quickly create color gradation effects throughout the scene. Go through the article and create your color LUT effect.

## Part 1\. What are Luts in Spark AR used for?

To create a color filter effect in [Spark AR](https://sparkar.facebook.com/ar-studio/), you need a color LUT in Spark AR.

To develop AR effects for mobile cameras, you can use the Mac and Windows augmented reality platform Spark AR Studio. Imagine it like Sketch or Photoshop for augmented reality. The color values of the camera texture are mapped to the x, y, and z coordinates of the location in the color LUT. This location contains a corresponding output color that is drawn over the scene to create a color gradient effect.

![create a color gradient effect](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-1.jpg)

<!-- affiliate ads begin -->
<a href="https://secure.2checkout.com/order/checkout.php?PRODS=194977&QTY=1&AFFILIATE=108875&CART=1"><img src="https://www.blumentals.net/scrfactory/images/screensaver-software.png" border="0">Screensaver Factory, Create stunning professional screensavers within minutes. Create screensavers for yourself, for marketing or unlimited royalty-free commercial distribution. Make screensavers from images, video and swf flash, add background music and smooth sprite and transition effects. Screensaver Factory is very easy to use, and it enables you to make self-installing screensaver files and CDs for easy setup and distribution. Screensaver Factory is the most advanced software of its kind.</a>
<!-- affiliate ads end -->
## Part 2\. How to use LUTs in Spark AR?

**How to apply a color LUT to the whole scene in Spark AR:**

##### Step1Add a color LUT to your project

1. In the Assets panel, click Add Asset.
2. Select Import, then Color LUT, and select your file from your computer.

When you import a color LUT, compression is always set to None, and filtering is set to Low by default.

##### Step2Apply to the whole scene

1. In the Assets panel, right-click the LUT color.
2. Select Actions and then **Apply to Camera**.

A patch graph is automatically set that applies a color LUT to the entire scene.

![apply to the whole scene](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-2.jpg)

**The color LUT patch graph**

The patch graph that renders the color gradation effect looks like this:

<!-- affiliate ads begin -->
<a href="https://natural-cycles.sjv.io/c/5597632/2072200/17885" target="_top" id="2072200"><img src="//a.impactradius-go.com/display-ad/17885-2072200" border="0" alt="" width="728" height="90"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/2072200/17885" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
![color lut patch graph](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-3.jpg)

**To create the effect:**

* Fix Scene Render Pass renders cameraTexture0 and all objects in the scene that are children of the device. This creates the output texture.
* ColorLUTShader looks up the RGBA values of this texture in the Tension color LUT array and converts them to a new green color. This will change the texture and create a gradient effect.
* Finally, the Screen Output patch renders the green color.

## Part 3\. Free LUTs resource for Spark AR

Here are the best free LUTs resources for Spark AR:

### 1\. [Frost Zombie (Technical Showcase)](https://we.tl/t-1uj4wJKluG)

Client filter pieces occasionally end up on the scrap heap. It was a poor Frost Zombie in this instance. Since this is one of my simpler filters, I felt it was okay to publish the build information. Four objects make up much of the scene: an EyeColor block, a custom canvas segmentation, a face mesh, and an emitter for the breath mist (my personal favorite). To show the layers used in generating the primary zombie texture, I also moved to Substance Painter. This is a demonstration of my methods rather than a step-by-step manual.

![frost zombie](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-4.jpg)

<!-- affiliate ads begin -->
<a href="https://shop.emeditor.com/order/checkout.php?PRODS=4631722&QTY=1&AFFILIATE=108875&CART=1"><img src="https://www.emeditor.com/wp-content/uploads/2023/05/frontpage2-2048x588.webp" border="0">EmEditor Professional (Lifetime License, non-store app)</a>
<!-- affiliate ads end -->
### 2\. Fur

Here are the key building principles.

* Geometric layers, often known as shells, produce depth.
* Normals is used to create shells from a single mesh.
* Alpha decreases with each shell.
* Deeper shells are darker.
* Height is generated from a single grayscale channel.
* No fur is generated in the black areas of the height texture.

<!-- affiliate ads begin -->
<a href="https://secure.2checkout.com/order/checkout.php?PRODS=3546200&QTY=1&AFFILIATE=108875&CART=1"><img src="http://www.binteko.com/sites/default/files/banner01_468x60a.gif" border="0"></a>
<!-- affiliate ads end -->
![fur](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-5.jpg)

### 3\. Shockwave

Even while using large image sequences is frequently discouraged, you can still use them to make some extremely spectacular effects! I'll explain how the screen tap computation procedure relates to texture position in this walkthrough. If you want to apply this approach and texture sequence in your projects or give it a try.

![shockwave](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-6.jpg)

### 4\. Transition Curves

There are 11 distinct animation curves included with Spark AR in the Transition patch. Here is a helpful visual aid because it might be challenging to distinguish between a quartic and a quintic when working on a project. With the SDF circle doubled (to sharpen the edge) and inserted into the Patch Pack's alpha channel, the circles are likewise straightforward rectangles. Since RGB values are three times one, the object is white.

<!-- affiliate ads begin -->
<a href="https://secure.2checkout.com/order/checkout.php?PRODS=35038891&QTY=1&AFFILIATE=108875&CART=1"><img src="https://www.dupinout.com/wp-content/uploads/2021/12/DupInOut-New-Duplicate-Scan-Tab.png" border="0"></a>
<!-- affiliate ads end -->
![transition curves](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-7.jpg)

<!-- affiliate ads begin -->
<a href="https://secure.2checkout.com/order/checkout.php?PRODS=4576829&QTY=1&AFFILIATE=108875&CART=1"><img src="https://secure.avangate.com/images/merchant/9e740b84bb48a64dde25061566299467/products/copy_1_jp_box_big.png" border="0">Jet Profiler for MySQL, Enterprise Version： Jet Profiler for MySQL is real-time query performance and diagnostics tool for the MySQL database server. Its detailed query information, graphical interface and ease of use makes this a great tool for finding performance bottlenecks in your MySQL databases. </a>
<!-- affiliate ads end -->
### 5\. Realistic Smoke

By adding smoke to a scene, you can easily add a lot of detail and realism. Nothing revolutionary is happening here. The particle emitter creates flat planes of smoke texture that are forced upward. The force slowly shifts left and right as seen in the patch editor. The Fade particle script (created by Josh Beckwith) enlarges the particles and fades them out at the same time.

![realistic smoke](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-8.jpg)

<!-- affiliate ads begin -->
<a href="https://store.nero.com/order/checkout.php?PRODS=4729507&QTY=1&AFFILIATE=108875&CART=1"><img src="https://www.nero.com/nero-com-wAssets/img/banners/2023/TIU/Nero_TuneItUp_Screen_2.webp" border="0">/a>
<!-- affiliate ads end -->
### 6\. Rainbow Glitter

Given how beautifully Glitter Rain was received, I believed it would be fitting to broaden the potential with an HDR setting. While Glitter Rain made use of two different colors, this technique makes use of an entirely colorless substance and gets its color information via HDR.

<!-- affiliate ads begin -->
<a href="https://propmoneyinc.pxf.io/c/5597632/1803116/14559" target="_top" id="1803116"><img src="//a.impactradius-go.com/display-ad/14559-1803116" border="0" alt="" width="859" height="859"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/1803116/14559" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
![rainbow glitter](https://images.wondershare.com/filmora/article-images/2022/08/how-to-use-luts-in-spark-ar-9.jpg)

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2095369/26400" target="_top" id="2095369"><img src="//a.impactradius-go.com/display-ad/26400-2095369" border="0" alt="" width="1024" height="512"/></a><img height="0" width="0" src="https://imp.pxf.io/i/5597632/2095369/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->
### Closing Thoughts

Spark AR is an amazing website for LUTs and color grading. Whether you're a new student or a seasoned pro, Spark AR Studio has all the features and capabilities you need to become a good video editor. You can download free LUTs from Spark AR and apply them to your videos. The article guides on how to use LUTs in Spark AR and how to download free LUTs. So, Spark AR is one of the best online websites for LUTs I have tried.

[Free Download](https://tools.techidaily.com/wondershare/filmora/download/)For Win 7 or later(64-bit)

[Free Download](https://tools.techidaily.com/wondershare/filmora/download/)For macOS 10.14 or later

[Free Download](https://tools.techidaily.com/wondershare/filmora/download/)For macOS 10.14 or later

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="1223367746"></ins>

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
<li><a href="https://tiktok-video-recordings.techidaily.com/new-2024-approved-culinary-crossroads-global-flavors-unleashed/"><u>[New] 2024 Approved  Culinary Crossroads  Global Flavors Unleashed</u></a></li>
<li><a href="https://fox-boxes.techidaily.com/new-2024-approved-seamless-date-insertion-into-photo-editing/"><u>[New] 2024 Approved  Seamless Date Insertion Into Photo Editing</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/new-in-2024-commanders-clash-the-ultimate-ranking-of-7-total-war-games/"><u>[New] In 2024, Commanders' Clash  The Ultimate Ranking of 7 Total War Games</u></a></li>
<li><a href="https://vp-tips.techidaily.com/updated-2024-approved-how-to-maximize-your-cricket-viewing-with-premium-livestreams/"><u>[Updated] 2024 Approved  How to Maximize Your Cricket Viewing with Premium Livestreams</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/updated-simplified-screen-switching-utilizing-pip-mode-on-netflix-for-smooth-viewing/"><u>[Updated] Simplified Screen Switching  Utilizing PIP Mode on Netflix for Smooth Viewing</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-streamline-your-soundtrack-exchanging-playlists-seamlessly/"><u>[Updated] Streamline Your Soundtrack  Exchanging Playlists Seamlessly</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-art-of-float-engaging-with-netflixs-picture-in-picture/"><u>[Updated] The Art of Float  Engaging with Netflix's Picture-in-Picture</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-art-of-podcast-storytelling-writing-tips-and-example-guides/"><u>[Updated] The Art of Podcast Storytelling  Writing Tips & Example Guides</u></a></li>
<li><a href="https://vp-tips.techidaily.com/updated-the-fundamentals-of-quantum-hdr-efficiency/"><u>[Updated] The Fundamentals of Quantum HDR Efficiency</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-key-to-writing-captivating-vlogger-scripts/"><u>[Updated] The Key to Writing Captivating Vlogger Scripts</u></a></li>
<li><a href="https://facebook-video-share.techidaily.com/updated-top-10-free-stock-footage-websites-you-should-know/"><u>[Updated] Top 10 Free Stock Footage Websites You Should Know</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-transform-your-photos-removing-backdrops-with-ease/"><u>[Updated] Transform Your Photos  Removing Backdrops with Ease</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-understanding-vr-limitations/"><u>[Updated] Understanding VR Limitations</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unlock-better-videos-a-22-enhancer-users-manual/"><u>[Updated] Unlock Better Videos  A 2.2 Enhancer User's Manual</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-unlocked-skies-cheapest-drones-that-dont-break-the-bank/"><u>[Updated] Unlocked Skies  Cheapest Drones that Don't Break the Bank</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-upgrade-your-photo-edits-the-ultimate-guide-to-pixlr-power/"><u>[Updated] Upgrade Your Photo Edits  The Ultimate Guide to Pixlr Power</u></a></li>
<li><a href="https://fox-access.techidaily.com/2024-approved-lens-leaders-showcase-unveiling-the-best-6-4k-dslrs/"><u>2024 Approved  Lens Leaders Showcase  Unveiling the Best 6 4K DSLRs</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-10-key-steps-for-optimal-stream-service-picks/"><u>2024 Approved  The 10 Key Steps for Optimal Stream Service Picks</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-art-and-science-of-broadcasting-in-real-time/"><u>2024 Approved  The Art and Science of Broadcasting in Real Time</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-art-of-engaging-viewers-alive-in-the-age-of-virtual-gatherings/"><u>2024 Approved  The Art of Engaging Viewers  Alive in the Age of Virtual Gatherings</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-guide-to-closer-insight-in-roblox-games/"><u>2024 Approved  The Ultimate Guide to Closer Insight in Roblox Games</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-mac-dvd-authorization-handbook/"><u>2024 Approved  The Ultimate Mac DVD Authorization Handbook</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-toolwiz-scrutiny-expert-analysis-on-mobile-photo-tools/"><u>2024 Approved  Toolwiz Scrutiny  Expert Analysis on Mobile Photo Tools</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-selections-for-speedy-facebook-video-transfers-and-streams/"><u>2024 Approved  Top Selections for Speedy Facebook Video Transfers and Streams</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-ranked-text-enhancers-for-after-effects/"><u>2024 Approved  Top-Ranked Text Enhancers for After Effects</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-total-sphere-camera-systems/"><u>2024 Approved  Total Sphere Camera Systems</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-ultimate-ai-visual-effects-system/"><u>2024 Approved  Ultimate AI Visual Effects System</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unveiling-windows-10s-full-potential-with-zoom-services/"><u>2024 Approved  Unveiling Windows 10'S Full Potential with Zoom Services</u></a></li>
<li><a href="https://extra-hints.techidaily.com/crafting-perfect-images-with-ios-size-modification-skills-for-2024/"><u>Crafting Perfect Images with iOS Size Modification Skills for 2024</u></a></li>
<li><a href="https://techidaily.com/how-to-transfer-whatsapp-from-apple-iphone-12-pro-to-other-iphone-15-pro-max-devices-drfone-by-drfone-transfer-whatsapp-from-ios-transfer-whatsapp-from-ios/"><u>How To Transfer WhatsApp From Apple iPhone 12 Pro to other iPhone 15 Pro Max devices? | Dr.fone</u></a></li>
<li><a href="https://audio-editing.techidaily.com/in-2024-edit-mp3-basic-and-useful-tips/"><u>In 2024, Edit MP3 Basic and Useful Tips</u></a></li>
<li><a href="https://android-transfer.techidaily.com/in-2024-how-to-transfer-contacts-from-poco-c50-to-iphone-xs11-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>In 2024, How to Transfer Contacts from Poco C50 to iPhone XS/11 | Dr.fone</u></a></li>
<li><a href="https://youtube-stream.techidaily.com/in-2024-professional-level-editing-at-zero-price-8-exceptional-software-picks/"><u>In 2024, Professional-Level Editing at Zero Price  8 Exceptional Software Picks</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-streamline-your-workflow-with-leading-tts-apps-for-mac-users/"><u>In 2024, Streamline Your Workflow with Leading TTS Apps for Mac Users</u></a></li>
<li><a href="https://vp-tips.techidaily.com/in-2024-where-to-download-christian-ringtones-and-how-to-customize-a-christian/"><u>In 2024, Where To Download Christian Ringtones And How To Customize A Christian</u></a></li>
<li><a href="https://extra-support.techidaily.com/premier-top-eight-for-unparalleled-4k-viewing-for-2024/"><u>Premier Top Eight for Unparalleled 4K Viewing for 2024</u></a></li>
<li><a href="https://howto.techidaily.com/tecno-spark-10-5g-not-receiving-texts-10-hassle-free-solutions-here-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>Tecno Spark 10 5G Not Receiving Texts? 10 Hassle-Free Solutions Here | Dr.fone</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-tv-show-prep-which-software-winsvirusmix-or-wirecast-for-2024/"><u>The Ultimate TV Show Prep  Which Software Wins—VirusMix or WireCast for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/transform-videos-with-tiktok-effects-for-2024/"><u>Transform Videos with TikTok Effects for 2024</u></a></li>
<li><a href="https://video-creation-software.techidaily.com/updated-2024-approved-discover-the-top-online-waveform-generators-for-pro-sound-design/"><u>Updated 2024 Approved Discover the Top Online Waveform Generators for Pro Sound Design</u></a></li>
<li><a href="https://video-ai-editor.techidaily.com/updated-online-aspect-ratio-calculators-our-top-picks-for-2024/"><u>Updated Online Aspect Ratio Calculators Our Top Picks for 2024</u></a></li>
<li><a href="https://ai-video-tools.techidaily.com/windows-8-video-editing-software-edit-mp4-files-like-a-pro-for-2024/"><u>Windows 8 Video Editing Software Edit MP4 Files Like a Pro for 2024</u></a></li>
</ul></div>
