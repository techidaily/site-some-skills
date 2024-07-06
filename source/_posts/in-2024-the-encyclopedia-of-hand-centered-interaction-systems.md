---
title: "\"In 2024, The Encyclopedia of Hand-Centered Interaction Systems\""
date: 2024-06-04T06:01:17.003Z
updated: 2024-06-05T06:01:17.003Z
tags: 
  - screen-recording
  - ai video
  - ai audio
  - ai auto
categories: 
  - ai
  - screen
description: "\"This Article Describes In 2024, The Encyclopedia of Hand-Centered Interaction Systems\""
excerpt: "\"This Article Describes In 2024, The Encyclopedia of Hand-Centered Interaction Systems\""
keywords: "\"HCI Hand-Focused Tech,Hand-Interact Devices,Touch Interface Guide,Ergonomic Device Design,Human-Centered Interaction,Gesture Control Systems,Tactile User Engagement\""
thumbnail: https://thmb.techidaily.com/cdd7fc426e2ad9d45bb7ca050714efc7a5191159c61f1ffd4157c0d0a51c0306.jpg
---

## The Encyclopedia of Hand-Centered Interaction Systems

In the era of advancements, **Hand Tracking** is a fascinating technology with a great range of applications in both virtual and augmented reality.

**Hand Tracking** is a process by which a computer can analyze and interpret the movement of a person's hands. This can be done using various devices, such as smart gloves, often known as data gloves.

In this article, we’ll discuss **Hand Tracking** technology, its various applications, and how to create it using Python, OpenCV, and Media Pipe.

1. [Tracking With Interface](#part2-1)
2. [Tracking Without Interface](#part2-2)

* [Using Python, OpenCV, And MediaPipe To Create A Hand Tracking](#part3)  

1. [What is OpenCV](#part3-1)  
2. [What Is Media Pipe](#part3-2)  
3. [Guidance With Steps](#part3-3)

* [Use Filmora to demonstarte your Hand Tracking skill](#part4)

## Part 1\. What Is Hand Tracking? Where Is It Applied?

Hand Tracking refers to the process of tracking the position and movement of a user's hands in virtual reality. This is usually done using a combination of sensors, including cameras, infrared sensors, or ultrasonic sensors.

By tracking the user's hands, VR systems can provide more immersive and interactive experiences. For example, Hand Tracking can be used to allow users to interact with virtual objects, as well as to provide input for gestures and body language.

The Oculus Quest 2 is a virtual reality headset that immerses you in virtual worlds. Quest 2's one of the coolest features is Hand Tracking, which lets you interact with the virtual world around you using your hands.

With Hand Tracking, you can interact with the virtual world more naturally and intuitively. You can use your hands to pick up objects, draw, and even type on a virtual keyboard. Moreover, it opens up new possibilities for gameplay, allowing you to play games in new and innovative ways.

![hand tracking technology](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-technology.jpg)

## Part 2\. Types Of Hand Tracking

There are two main types of Hand Tracking: with interface and without interface:

### Tracking With Interface

With interface Hand Tracking, you need to use a device such as a glove or a controller to interact with the virtual world. This can be used in VR or AR applications. It is further divided into two systems:

**1\. Inertial Motion Capture Gloves**

Inertial motion capture gloves use sensors Inertial Measurement Units or IMUs with built-in sensors to track the movement of your hands. These sensors include gyroscopes, accelerometers, and sometimes magnetometers for measuring angular rate, detecting gravitational force and acceleration, and measuring the earth’s magnetic field, respectively.

These gloves can be used for a variety of purposes, such as gaming, virtual reality, and motion capture for movies and video games. Inertial motion capture gloves are becoming increasingly popular as they offer a more immersive experience than traditional controllers.

**2\. Optical Motion Capture Systems**

Optical motion capture is a process that uses cameras and reflective sensors to track movement in three-dimensional space. These systems are often used in movies and video games to create realistic animations.

Optical motion capture systems emit infrared light from the camera. The markers reflect light, which is then captured by cameras. The movement of the markers is then used to create a three-dimensional model of the object.

The more cameras used, the more accurate the results. While this technology is very precise, it can be limited by factors such as body position and movement.

### Tracking Without Interface

Also known as Markerless Hand Tracking, this type of Hand Tracking allows users to track their hand movements without the need for any external markers or data gloves, meaning more spontaneous interaction and freedom of movement. This could hugely impact everything from gaming to virtual reality to human-computer interaction.

Right now, markerless Hand Tracking is still in its early stages, with a few limitations. However, as this technology continues to develop, we will likely see more and more applications for it in the future.

## Part 3\. Using Python, OpenCV, And MediaPipe To Create A Hand Tracking

Above we have learned what is Hand Tracking and the two types of it. Now let’s see how we can create a hand tracking with two Python Libraries - OpenCV and MediaPipe.

Before we go further about them, let us learn about Python quickly. Python is a versatile language used for a wide range of tasks, including image processing and computer vision. We will use Python and two Python Libraries: OpenCV and MediaPipe, to create a Hand Tracking module.

### What is OpenCV

To get a deeper understanding of OpenCV, please read our article: _Opencv Tracking, a compete review_.（同期交付文章，请插入相关内链\~）

### What Is Media Pipe

Media Pipe is an open-source framework by Google that provides a set of tools for working with multimedia data or media processing. It includes modules for handling audio, video, and images. Media Pipe also supports various codecs and file formats.

There are two stages for creating a Hand Tracking program using MediaPipe:

1. **Palm Detection**: In the first stage, MediaPipe has to work with the entire input image, providing a cropped image of the hand.
2. **Hand Landmarks Identification**: In the second stage, the framework works with the cropped image of the hand to find 21 hand landmarks.

![20 hand landmarks for identifiction – hand tracking](https://images.wondershare.com/filmora/article-images/2022/07/20-hand-landmarks-for-identifiction-hand-tracking.jpg)

### Guidance With Steps

Before starting to create Hand Tracking, you need to install the [Pycharm IDE](https://www.jetbrains.com/pycharm/download/#section=windows)app on your PC. Once installed, launch it and follow these instructions step-by-step:

**Install OpenCV and MediaPipe**

Click the **“New Project”** option and select **“Create”** on the next Window. Open the **Terminal** to install the two libraries.

![install and launch the pycharm app on your pc](https://images.wondershare.com/filmora/article-images/2022/07/install-and-launch-the-pycharm-app-on-your-pc.jpg)

Copy and paste the following command in the **Terminal** to install **OpenCV:**

![copy and paste command to install opencv](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-1.jpg)

Now, to install **MediaPipe**, copy and paste the following command:

![install mediapipe](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-2.jpg)

**Coding**

A _main.py_ file for writing code will be automatically created in _Pycharm_ app once you create a new project.

##### Step1 Importing The Libraries

First, import the OpenCV and MediaPipe to use their dependencies. Once done, create an object _cap_ for video capturing and three other objects; _mpHands, hands,_ and _mpDraw_ to manipulate your input using MediaPipe.

![importing the libraries](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-3.jpg)

##### Step2 Capturing And Processing An Image Input

Copy and paste the following line of code to take the image input from your PC webcam.

![capturing and processing an image input](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-4.jpg)

The image is converted to RGB from BGR because MediaPipe works with this type of image. The RBG image is then processed to track the hand.

##### Step3 Working With Both Hands

Now, create a class for tracking and for the hands function to work, key in the basic parameters. Next, provide all the initialization required. This includes the basic parameters and MediaPipe initializations. Put _“self”_ before each object to provide access to its attributes and methods.

![working with both hands](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-5.jpg)

##### Step4 Creating Method For Tracking Hands In Input Image

![creating method for tracking hands](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-6.jpg)

Afterward, use the above code to create a method for using specifically to identify hands in the input image. The code will also draw hand landmarks and hand connections.

##### Step5 Locate The ‘X’ and ‘Y’ Coordinates Of Each Hand Point

To create a method for finding the x and y coordinates of the z21 hand points and a list that you will use to keep the values of these, write the code below:

![locate x and y coordinate of hand point](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-7.jpg)

In this method, use the code that you used to find the ID and hand landmark of each hand point. Moreover, put the code you will use to circle the hand point.

##### Step6 Main Method

Now, write the below dummy code to showcase what the module can do, i.e., identify and track hands. The code appears in the main method and uses the _lmlist object_ and _image_.

![](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-8.jpg)

##### Step7 Main Method Execution

To execute the main method, copy and paste the following code lines:

![main method execution](https://images.wondershare.com/filmora/article-images/2022/07/hand-tracking-9.jpg)

##### Step8 Result

The module and output of the program will be the same, and when they are complete without any errors, you will get your output, i.e., the module will track and identify your hand movements without any glitches.

## Part 4\. Use Filmora to demonstarte your Hand Tracking skill

After what has been explained above and what you have learned by now, we hope you have been equipped with hand tracking module knowledge and be ready to take action. Here, we will also sincerely recommend you a user-friendly and professional video edtior to show your hand motion scene – [Filmora](https://tools.techidaily.com/wondershare/filmora/download/)!

[Filmora](https://tools.techidaily.com/wondershare/filmora/download/) is available for all types of users. You can easily use it to edit your video, add effects to it and insert your hand motion part naturally.

Learn more about Filmora:

[Free Download](https://tools.techidaily.com/wondershare/filmora/download/) For Win 7 or later(64-bit)

[Free Download](https://tools.techidaily.com/wondershare/filmora/download/) For macOS 10.14 or later

## Conclusion

In this article, we’ve explored Hand Tracking and its two types, i.e., tracking with interface and tracking without interface. Moreover, we provided step-by-step guidance on using Python, OpenCV, and MediaPipe to create a Hand Tracking module.

We hope this guide helped resolve your queries, and you can now create a Hand Tracking module in no time. And please do try [Filmora](https://tools.techidaily.com/wondershare/filmora/download/) to create a magical video with your Hand Tracking scenes in it!

* [What is OpenCV](#part3-1)
* [What Is Media Pipe](#part3-2)
* [Guidance With Steps](#part3-3)

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
<li><a href="https://some-skills.techidaily.com/updated-strategic-unveiling-the-box-of-opportunity/"><u>[Updated] Strategic Unveiling  The Box of Opportunity</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-syncing-yt-beats-with-visual-timelines/"><u>[New] Syncing YT Beats with Visual Timelines</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-navigating-the-convert-waters-10-tips-for-youtube-to-mp4mpeg/"><u>[Updated] Navigating the Convert Waters  10 Tips for YouTube to MP4/MPEG</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-streamlining-audio-exploration-how-to-add-apple-podcasts-to-your-device/"><u>2024 Approved  Streamlining Audio Exploration  How to Add Apple Podcasts to Your Device</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-premier-list-of-smartphone-compatible-vr-headset-for-2024/"><u>The Premier List of Smartphone-Compatible VR Headset for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/timelessly-taken-selfies-from-the-bygone-era-for-2024/"><u>Timelessly Taken  Selfies From the Bygone Era for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-optimizing-viewing-experience-video-filters-for-all-screens/"><u>2024 Approved  Optimizing Viewing Experience  Video Filters for All Screens</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-testimonial-toolkit-for-effective-promotion/"><u>In 2024, The Testimonial Toolkit for Effective Promotion</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-streamline-your-office-work-with-voice-to-text-in-ms-word/"><u>[New] Streamline Your Office Work with Voice-to-Text in MS Word</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-tiktok-video-potential-with-zoom/"><u>[New] Unlocking TikTok Video Potential with Zoom</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unveiling-secrets-to-amazing-photo-collages/"><u>2024 Approved  Unveiling Secrets to Amazing Photo Collages</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-transform-your-digital-assets-top-7-tools-to-create-nfts/"><u>2024 Approved  Transform Your Digital Assets - Top 7 Tools to Create NFTs</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-understanding-luts-to-amplify-your-photo-quality/"><u>2024 Approved  Understanding LUTs to Amplify Your Photo Quality</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-art-of-crafting-compelling-spotify-ads/"><u>2024 Approved  The Art of Crafting Compelling Spotify Ads</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-offline-transcription-programs-for-speech-for-2024/"><u>Top Offline Transcription Programs for Speech for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-perfect-your-youtube-experience-add-timestamps-efficiently/"><u>[New] Perfect Your YouTube Experience  Add Timestamps Efficiently</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-magic-of-time-expansion-a-comprehensive-guide-to-making-beautifully-long-movies-with-still-images-and-online-tools/"><u>2024 Approved  The Magic of Time Expansion  A Comprehensive Guide to Making Beautifully Long Movies with Still Images & Online Tools</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-budding-filmmakers-companion-understanding-display-quality-101/"><u>[New] The Budding Filmmaker’s Companion  Understanding Display Quality 101</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-complete-breakdown-audifree-audit-tool-performance-for-2024/"><u>The Complete Breakdown  AudiFree Audit Tool Performance for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-tips-for-applying-luts-in-film-color-grading/"><u>[New] Tips for Applying LUTs in Film Color Grading</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-understanding-srt-in-depth-with-this-guidebook/"><u>[New] Understanding SRT in Depth with This Guidebook</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-perfecting-your-sound-palette-with-audacity-crossfading/"><u>In 2024, Perfecting Your Sound Palette with Audacity Crossfading</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-the-world-of-sound-on-ios-apple-point-and-click-guide/"><u>[New] Unlocking the World of Sound on iOS  Apple' Point-and-Click Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-notch-tricks-to-nail-every-green-screen-shot/"><u>2024 Approved  Top-Notch Tricks to Nail Every Green Screen Shot</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-artisans-path-mastery-of-background-removal-tools-in-photoshop/"><u>2024 Approved  The Artisan's Path  Mastery of Background Removal Tools in Photoshop</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-10-hidden-powers-of-photoshop-newbies-for-2024/"><u>Unveiling 10 Hidden Powers of Photoshop Newbies for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-streamlining-pc-video-cuts-with-inshot/"><u>[New] Streamlining PC Video Cuts with Inshot</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-12-html5-videophones-for-optimal-viewing-for-2024/"><u>Top 12 HTML5 Videophones for Optimal Viewing for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-vr-treadmills-review/"><u>2024 Approved  Top VR Treadmills Review</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-streamlining-post-production-with-luts-in-ae/"><u>[New] Streamlining Post-Production with LUTs in AE</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-insider-guide-to-simplifying-character-voice-modification-pubg-for-2024/"><u>The Insider Guide to Simplifying Character Voice Modification (PUBG) for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-mastering-photo-color-reversal-techniques/"><u>2024 Approved  Mastering Photo Color Reversal Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-virtual-evolution-dichotomy-metaverse-and-omniverse-compared/"><u>[New] The Virtual Evolution Dichotomy  Metaverse & Omniverse Compared</u></a></li>
<li><a href="https://location-social.techidaily.com/in-2024-how-to-hidefake-snapchat-location-on-your-samsung-galaxy-f54-5g-drfone-by-drfone-virtual-android/"><u>In 2024, How to Hide/Fake Snapchat Location on Your Samsung Galaxy F54 5G | Dr.fone</u></a></li>
<li><a href="https://facebook-videos.techidaily.com/updated-leading-video-counts-the-popular-ones-for-2024/"><u>[Updated] Leading Video Counts  The Popular Ones for 2024</u></a></li>
<li><a href="https://techidaily.com/how-to-recover-lost-data-on-apple-iphone-12-mini-drfone-by-drfone-ios-data-recovery-ios-data-recovery/"><u>How To Recover Lost Data on Apple iPhone 12 mini? | Dr.fone</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/updated-top-10-soothing-games-to-ease-anxiety-for-2024/"><u>[Updated] Top 10 Soothing Games to Ease Anxiety for 2024</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/new-2024-approved-innovative-windows-10-cameras-unveiled/"><u>[New] 2024 Approved  Innovative Windows 10 Cameras Unveiled</u></a></li>
<li><a href="https://android-unlock.techidaily.com/top-10-fingerprint-lock-apps-to-lock-your-vivo-y78plus-phone-by-drfone-android/"><u>Top 10 Fingerprint Lock Apps to Lock Your Vivo Y78+ Phone</u></a></li>
<li><a href="https://instagram-video-recordings.techidaily.com/new-elevate-your-feed-crafting-engaging-instagram-videos-for-2024/"><u>[New] Elevate Your Feed  Crafting Engaging Instagram Videos for 2024</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/2024-approved-painting-with-light-the-role-of-film-grade/"><u>2024 Approved  Painting with Light  The Role of Film Grade</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/new-masterclass-setting-up-windows-movie-maker-60/"><u>[New] Masterclass  Setting Up Windows Movie Maker 6.0</u></a></li>
<li><a href="https://sound-tweaking.techidaily.com/new-2024-approved-rhythm-reduction-techniques-efficiently-extracting-percussion-from-songs-digitally/"><u>New 2024 Approved Rhythm Reduction Techniques Efficiently Extracting Percussion From Songs Digitally</u></a></li>
<li><a href="https://animation-videos.techidaily.com/in-2024-10-great-apps-for-turning-funny-animated-images-into-comics/"><u>In 2024, 10 Great Apps for Turning Funny Animated Images Into Comics</u></a></li>
<li><a href="https://easy-unlock-android.techidaily.com/universal-unlock-pattern-for-realme-narzo-60-5g-by-drfone-android/"><u>Universal Unlock Pattern for Realme Narzo 60 5G</u></a></li>
<li><a href="https://extra-approaches.techidaily.com/2024-approved-m1-advantages-in-high-quality-video-production-workstations/"><u>2024 Approved  M1 Advantages in High-Quality Video Production Workstations</u></a></li>
<li><a href="https://sound-tweaking.techidaily.com/updated-in-2024-enhance-your-memories-download-free-mp3s-onto-images/"><u>Updated In 2024, Enhance Your Memories Download Free MP3s Onto Images</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-unlock-a-network-locked-itel-s23plus-phone-by-drfone-android/"><u>How to Unlock a Network Locked Itel S23+ Phone?</u></a></li>
<li><a href="https://screen-recording.techidaily.com/top-screen-recording-tools-face-off-summary/"><u>Top Screen Recording Tools Face-Off Summary</u></a></li>
<li><a href="https://extra-skills.techidaily.com/2024-approved-sketch-whimsical-graphics-on-giphy/"><u>2024 Approved  Sketch Whimsical Graphics on Giphy</u></a></li>
<li><a href="https://extra-information.techidaily.com/ideal-webcams-to-upgrade-your-zoom-video-quality/"><u>Ideal Webcams to Upgrade Your Zoom Video Quality</u></a></li>
<li><a href="https://apple-account.techidaily.com/3-ways-of-how-to-get-someones-apple-id-off-iphone-12-pro-without-password-by-drfone-ios/"><u>3 Ways of How to Get Someones Apple ID Off iPhone 12 Pro without Password</u></a></li>
<li><a href="https://ai-live-streaming.techidaily.com/updated-how-to-start-a-private-live-stream-on-youtube-for-2024/"><u>Updated How To Start a Private Live Stream on YouTube for 2024</u></a></li>
<li><a href="https://facebook-videos.techidaily.com/updated-from-facebook-to-whatsapp-a-guide-for-video-sharing/"><u>[Updated] From Facebook to WhatsApp  A Guide for Video Sharing</u></a></li>
<li><a href="https://location-social.techidaily.com/how-to-change-oppo-reno-11-5g-location-on-skout-drfone-by-drfone-virtual-android/"><u>How to Change Oppo Reno 11 5G Location on Skout | Dr.fone</u></a></li>
<li><a href="https://video-screen-grab.techidaily.com/new-live-with-clarity-secrets-for-high-quality-fb-recordings/"><u>[New] Live with Clarity  Secrets for High-Quality FB Recordings</u></a></li>
</ul></div>
