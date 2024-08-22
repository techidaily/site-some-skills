---
title: "[New] Using LUTs in Spark AR & Download Free LUTs"
date: 2024-08-21T04:07:44.626Z
updated: 2024-08-22T04:07:44.626Z
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
<li><a href="https://snapchat-videos.techidaily.com/new-2024-approved-decoding-displacement-your-snapchat-time-turner-guide/"><u>[New] 2024 Approved  Decoding Displacement  Your Snapchat Time-Turner Guide</u></a></li>
<li><a href="https://fox-friendly.techidaily.com/new-2024-approved-explore-the-11-key-insights-into-superior-color-adjustment-techniques/"><u>[New] 2024 Approved  Explore the 11 Key Insights Into Superior Color Adjustment Techniques</u></a></li>
<li><a href="https://video-capture.techidaily.com/new-2024-approved-streamline-your-apple-devices-with-easy-recording/"><u>[New] 2024 Approved  Streamline Your Apple Devices with Easy Recording</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-streamline-projects-with-free-video-intros/"><u>[New] Streamline Projects with Free Video Intros</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-superior-techniques-for-adjusting-tempo-of-tracks-in-spotify/"><u>[New] Superior Techniques for Adjusting Tempo of Tracks in Spotify</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-swift-solutions-for-iphone-photography-misfocus/"><u>[New] Swift Solutions for iPhone Photography Misfocus</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-taming-figmas-backgrounds-a-comprehensive-guide/"><u>[New] Taming Figma's Backgrounds  A Comprehensive Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-techniques-to-write-persuasive-videographic-dialogues/"><u>[New] Techniques to Write Persuasive Videographic Dialogues</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-acoustic-bridge-to-captivating-trailers/"><u>[New] The Acoustic Bridge to Captivating Trailers</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-leading-virtual-reality-titles-for-your-smartphone/"><u>[New] The Leading Virtual Reality Titles for Your Smartphone</u></a></li>
<li><a href="https://some-guidance.techidaily.com/new-transform-your-shots-with-understanding-luts/"><u>[New] Transform Your Shots with Understanding LUTs</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-the-potential-of-cds-a-wmp-masterclass/"><u>[New] Unlocking the Potential of Cds  A WMP Masterclass</u></a></li>
<li><a href="https://instagram-clips.techidaily.com/updated-2024-approved-sharing-sites-guide-for-instagram-story-and-post-links/"><u>[Updated] 2024 Approved  Sharing Sites  Guide for Instagram Story and Post Links</u></a></li>
<li><a href="https://instagram-clips.techidaily.com/updated-instagram-reel-downloads-quick-save-methods/"><u>[Updated] Instagram Reel Downloads  Quick Save Methods</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-blueprint-to-dominate-social-platforms/"><u>[Updated] The Blueprint to Dominate Social Platforms</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-compact-guide-to-transforming-vocal-identity-quickly-in-pubg/"><u>[Updated] The Compact Guide to Transforming Vocal Identity Quickly in PUBG</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-ultimate-guide-to-free-premiere-pro-template-hacks/"><u>[Updated] The Ultimate Guide to Free Premiere Pro Template Hacks</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-tips-for-dimming-windows-and-mac-music-volume/"><u>[Updated] Tips for Dimming Windows & Mac Music Volume</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-eight-sources-of-graffiti-fonts-online/"><u>[Updated] Top Eight Sources of Graffiti Fonts Online</u></a></li>
<li><a href="https://some-approaches.techidaily.com/updated-utilizing-skys-bounty-to-brighten-indoors/"><u>[Updated] Utilizing Sky's Bounty to Brighten Indoors</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-strategizing-the-open-door-to-market-success/"><u>2024 Approved  Strategizing the Open Door to Market Success</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-subtitles-that-shine-discover-the-best-free-online-tools/"><u>2024 Approved  Subtitles That Shine - Discover the Best Free Online Tools</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-5-underwater-gopro-accessories/"><u>2024 Approved  Top 5 Underwater Gopro Accessories</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-questions-on-vlc-player-mac-integration/"><u>2024 Approved  Top Questions on VLC Player Mac Integration</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-trilltones-techniques-how-to-cut-and-download-tamil-songs/"><u>2024 Approved  TrillTones Techniques  How to Cut and Download Tamil Songs</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unleash-video-potential-top-4k-downloader-apps-reviewed/"><u>2024 Approved  Unleash Video Potential  Top 4K Downloader Apps Reviewed</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unveiling-alternatives-to-sns-hdr-in-a-crowded-space/"><u>2024 Approved  Unveiling Alternatives to SNS HDR in a Crowded Space</u></a></li>
<li><a href="https://blog-min.techidaily.com/5-ways-to-move-contacts-from-nubia-z50-ultra-to-iphone-131415-drfone-by-drfone-transfer-from-android-transfer-from-android/"><u>5 Ways to Move Contacts From Nubia Z50 Ultra to iPhone (13/14/15) | Dr.fone</u></a></li>
<li><a href="https://howto.techidaily.com/6-solutions-to-fix-error-505-in-google-play-store-on-motorola-moto-g24-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>6 Solutions to Fix Error 505 in Google Play Store on Motorola Moto G24 | Dr.fone</u></a></li>
<li><a href="https://fake-location.techidaily.com/complete-tutorial-to-use-vpna-to-fake-gps-location-on-apple-iphone-8-drfone-by-drfone-virtual-ios/"><u>Complete Tutorial to Use VPNa to Fake GPS Location On Apple iPhone 8 | Dr.fone</u></a></li>
<li><a href="https://win-amazing.techidaily.com/corsair-gaming-mouse-firmware-update-get-it-now/"><u>Corsair Gaming Mouse Firmware Update - Get It Now</u></a></li>
<li><a href="https://location-social.techidaily.com/how-to-change-gps-location-on-vivo-y02t-easily-and-safely-drfone-by-drfone-virtual-android/"><u>How to Change GPS Location on Vivo Y02T Easily & Safely | Dr.fone</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/in-2024-enhance-your-story-game-applying-fun-sticker-themes/"><u>In 2024, Enhance Your Story Game  Applying Fun Sticker Themes</u></a></li>
<li><a href="https://apple-account.techidaily.com/in-2024-how-to-delete-icloud-account-remove-your-apple-id-permanently-from-iphone-13-pro-max-by-drfone-ios/"><u>In 2024, How To Delete iCloud Account Remove Your Apple ID Permanently From iPhone 13 Pro Max</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/in-2024-mold-amusement-pictures-for-giphy-platform/"><u>In 2024, Mold Amusement Pictures for Giphy Platform</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-submerged-splendor-top-underwater-video-techniques-with-gopro/"><u>In 2024, Submerged Splendor  Top Underwater Video Techniques with GoPro</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-synthesize-stellar-titles-using-ai-insights/"><u>In 2024, Synthesize Stellar Titles Using AI Insights</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-clear-path-a-step-by-step-approach-to-buying-an-exceptional-4k-monitor/"><u>In 2024, The Clear Path  A Step-By-Step Approach to Buying an Exceptional 4K Monitor</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-complete-guide-to-producing-high-quality-gopro-time-lapse/"><u>In 2024, The Complete Guide to Producing High-Quality GoPro Time-Lapse</u></a></li>
<li><a href="https://some-approaches.techidaily.com/in-2024-the-ultimate-guide-to-audacitys-professional-tracking/"><u>In 2024, The Ultimate Guide to Audacity's Professional Tracking</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-tiny-screenplay-scheme/"><u>In 2024, Tiny Screenplay Scheme</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-transcription-mastery-for-office-productivity-using-microsoft-words-voice-recognition-features/"><u>In 2024, Transcription Mastery for Office Productivity  Using Microsoft Word's Voice Recognition Features</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unlock-better-videos-a-22-enhancer-users-manual/"><u>In 2024, Unlock Better Videos  A 2.2 Enhancer User's Manual</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-the-secrets-of-crafting-perfect-audio-for-videos/"><u>In 2024, Unveiling the Secrets of Crafting Perfect Audio for Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/tailor-your-own-outro-with-free-sound-samples-for-2024/"><u>Tailor Your Own Outro with Free Sound Samples for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/techniques-for-turning-youtube-hosted-tweets-into-audio-files-for-2024/"><u>Techniques for Turning YouTube-Hosted Tweets Into Audio Files for 2024</u></a></li>
<li><a href="https://facebook.techidaily.com/1719151967218-the-tech-titans-meet-zucks-pet-the-crypto-goat/"><u>The Tech Titans Meet: Zuck's Pet, the Crypto-Goat.</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-5-apps-to-stream-your-favorite-podcasts-on-iphone-for-2024/"><u>Top 5 Apps to Stream Your Favorite Podcasts on iPhone for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-picks-for-the-best-android-image-correction-tools-5-choices-for-2024/"><u>Top Picks for the Best Android Image Correction Tools (5 Choices) for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-iphones-silhouette-potential-for-2024/"><u>Unveiling iPhone's Silhouette Potential for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-the-mystery-writing-hooks-for-vlogger-scripts-for-2024/"><u>Unveiling the Mystery  Writing Hooks for Vlogger Scripts for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-the-top-10-live-streaming-hubs-for-2024/"><u>Unveiling the Top 10 Live Streaming Hubs for 2024</u></a></li>
</ul></div>
