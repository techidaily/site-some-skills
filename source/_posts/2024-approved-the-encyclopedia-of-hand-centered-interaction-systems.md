---
title: "\"2024 Approved  The Encyclopedia of Hand-Centered Interaction Systems\""
date: 2024-06-04T00:32:45.727Z
updated: 2024-06-05T00:32:45.727Z
tags: 
  - screen-recording
  - ai video
  - ai audio
  - ai auto
categories: 
  - ai
  - screen
description: "\"This Article Describes 2024 Approved: The Encyclopedia of Hand-Centered Interaction Systems\""
excerpt: "\"This Article Describes 2024 Approved: The Encyclopedia of Hand-Centered Interaction Systems\""
keywords: "\"HCI Hand-Focused Tech,Hand-Interact Devices,Touch Interface Guide,Ergonomic Device Design,Human-Centered Interaction,Gesture Control Systems,Tactile User Engagement\""
thumbnail: https://thmb.techidaily.com/e694a122580d35baa4ea409639e0ea6a835876b9d9b87e9c40850a4f81b5f21f.jpg
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
<li><a href="https://some-skills.techidaily.com/in-2024-unlocking-the-potential-a-compreayers-guide-to-batched-video-downloads-from-tiktok/"><u>In 2024, Unlocking the Potential  A Compreayer's Guide to Batched Video Downloads From TikTok</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-advanced-greenscreen-techniques-a-complete-guide-to-chroma-key-kinemaster/"><u>In 2024, Unveiling Advanced Greenscreen Techniques  A Complete Guide to Chroma Key (KineMaster)</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-podcasters-roadmap-to-seo-excellence/"><u>[New] The Podcaster’s Roadmap to SEO Excellence</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-essential-techniques-for-fast-forwarding-in-spotify/"><u>In 2024, The Essential Techniques for Fast-Forwarding in Spotify</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-ultimate-collection-of-elite-cost-free-vfx-and-editing-websites/"><u>In 2024, The Ultimate Collection of Elite, Cost-Free VFX & Editing Websites</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-best-10-final-cut-pro-plugins-ever/"><u>2024 Approved  The Best 10 Final Cut Pro Plugins Ever</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-vlogging-techniques-for-stellar-gopro-content/"><u>2024 Approved  Top Vlogging Techniques for Stellar GoPro Content</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-gamers-choice-best-4k-monitors/"><u>[Updated] Top Gamer's Choice  Best 4K Monitors</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-hp-dreamcolor-z32x-review-a-quest-for-perfection/"><u>In 2024, The HP DreamColor Z32X Review  A Quest for Perfection</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-artists-roadmap-to-professional-growth-for-2024/"><u>The Artist's Roadmap to Professional Growth for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-guide-to-scrolling-through-engaging-youtube-remarks/"><u>[New] The Ultimate Guide to Scrolling Through Engaging YouTube Remarks</u></a></li>
<li><a href="https://some-skills.techidaily.com/ultimate-music-streams-network-for-2024/"><u>Ultimate Music Streams Network for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-richest-resource-of-zero-price-ae-templates/"><u>2024 Approved  The Richest Resource of Zero-Price AE Templates</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-uncover-top-11-effective-video-size-slashers-for-your-phone/"><u>2024 Approved  Uncover Top 11 Effective Video Size Slashers for Your Phone</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-superior-selection-ultimate-cloud-storage-picks/"><u>[Updated] Superior Selection  Ultimate Cloud Storage Picks</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-optimal-sites-for-pixel-sounds/"><u>In 2024, Unveiling Optimal Sites for Pixel Sounds</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-cost-effective-camera-guidebook/"><u>2024 Approved  The Cost-Effective Camera Guidebook</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-tactical-phone-data-shift-android-to-iphone/"><u>[Updated] Tactical Phone Data Shift  Android to iPhone</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-revolutionizing-workouts-the-best-vr-treadmill-choices/"><u>[New] Revolutionizing Workouts  The Best VR Treadmill Choices</u></a></li>
<li><a href="https://some-skills.techidaily.com/unleashing-creativity-full-scale-review-of-toolwizs-photography-app-for-2024/"><u>Unleashing Creativity  Full-Scale Review of Toolwiz's Photography App for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-art-of-subscriber-chatter-best-practices-for-comments-for-2024/"><u>The Art of Subscriber Chatter  Best Practices for Comments for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-conversion-guide-sdr-to-stunning-hdr-visuals/"><u>In 2024, Ultimate Conversion Guide  SDR to Stunning HDR Visuals</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-framework-for-finding-the-right-podcast-title-plus-idea-compendium/"><u>[New] Ultimate Framework for Finding the Right Podcast Title + Idea Compendium</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-tier-voice-to-text-applications/"><u>2024 Approved  Top Tier Voice to Text Applications</u></a></li>
<li><a href="https://some-skills.techidaily.com/turning-talk-into-top-tier-podcasts-writing-and-samples-included-for-2024/"><u>Turning Talk Into Top-Tier Podcasts  Writing & Samples Included for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/graceful-gallops-on-frozen-ground-for-2024/"><u>Graceful Gallops on Frozen Ground for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/toolwiz-visualize-a-comprehensive-2023-evaluation-for-2024/"><u>Toolwiz Visualize - A Comprehensive 2023 Evaluation for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-approaches-to-clearer-zoomed-video-on-online-platforms/"><u>[New] Ultimate Approaches to Clearer Zoomed Video on Online Platforms</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-ultimate-android-gaming-experience-kinemaster-reviewed/"><u>[New] The Ultimate Android Gaming Experience - KineMaster Reviewed</u></a></li>
<li><a href="https://howto.techidaily.com/stuck-at-android-system-recovery-of-vivo-y36i-fix-it-easily-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>Stuck at Android System Recovery Of Vivo Y36i ? Fix It Easily | Dr.fone</u></a></li>
<li><a href="https://extra-support.techidaily.com/proven-strategies-for-professional-green-screen-filming-for-2024/"><u>Proven Strategies for Professional Green Screen Filming for 2024</u></a></li>
<li><a href="https://screen-activity-recording.techidaily.com/updated-little-legends-top-gaming-adventures-for-2024/"><u>[Updated] Little Legends  Top Gaming Adventures for 2024</u></a></li>
<li><a href="https://screen-capture.techidaily.com/pro-level-strategies-for-saving-and-recording-movs-on-windows-pcs/"><u>Pro-Level Strategies for Saving and Recording MOVs on Windows PCs</u></a></li>
<li><a href="https://some-techniques.techidaily.com/updated-google-vs-others-a-comparison-in-ar-stickers/"><u>[Updated] Google Vs. Others  A Comparison in AR Stickers</u></a></li>
<li><a href="https://extra-tips.techidaily.com/fixed-how-do-i-convert-zip-file-into-srt-file/"><u>[Fixed!] How Do I Convert Zip File Into Srt File?</u></a></li>
<li><a href="https://howto.techidaily.com/fix-unfortunately-settings-has-stopped-on-realme-gt-neo-5-quickly-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>Fix Unfortunately Settings Has Stopped on Realme GT Neo 5 Quickly | Dr.fone</u></a></li>
<li><a href="https://extra-support.techidaily.com/tips-to-design-an-eye-catching-logo-for-podcasts-for-2024/"><u>Tips to Design an Eye-Catching Logo for Podcasts for 2024</u></a></li>
<li><a href="https://discord-videos.techidaily.com/updated-in-2024-guide-to-setting-up-and-managing-discord-channels-for-beginners/"><u>[Updated] In 2024, Guide to Setting Up and Managing Discord Channels for Beginners</u></a></li>
<li><a href="https://screen-video-capture.techidaily.com/easy-steps-for-perfect-screen-capture-with-mobizen-for-2024/"><u>Easy Steps for Perfect Screen Capture with Mobizen for 2024</u></a></li>
<li><a href="https://youtube-videos.techidaily.com/new-building-a-million-views-empire-safe-and-secure-methods/"><u>[New] Building a Million Views Empire  Safe and Secure Methods</u></a></li>
<li><a href="https://extra-resources.techidaily.com/the-ultimate-solution-of-iphone-x-face-id-not-working/"><u>The Ultimate Solution of iPhone X Face ID Not Working</u></a></li>
<li><a href="https://ios-unlock.techidaily.com/in-2024-apple-iphone-xr-backup-password-never-set-but-still-asking-heres-the-fix-by-drfone-ios/"><u>In 2024, Apple iPhone XR Backup Password Never Set But Still Asking? Heres the Fix</u></a></li>
<li><a href="https://phone-solutions.techidaily.com/can-t-play-mp4-files-on-xiaomi-redmi-note-12t-pro-by-aiseesoft-video-converter-play-mp4-on-android/"><u>Can't play MP4 files on Xiaomi Redmi Note 12T Pro</u></a></li>
<li><a href="https://ai-video-tools.techidaily.com/updated-2024-approved-mp4-to-mp3-conversion-on-mobile-the-best-apps-and-tools/"><u>Updated 2024 Approved MP4 to MP3 Conversion on Mobile The Best Apps and Tools</u></a></li>
<li><a href="https://screen-capture.techidaily.com/new-device-based-access-commence-google-meet-chat-for-2024/"><u>[New] Device-Based Access  Commence Google Meet Chat for 2024</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-get-out-of-recovery-on-iphone-14-pro-max-drfone-by-drfone-ios-system-repair-ios-system-repair/"><u>How To Get Out of Recovery on iPhone 14 Pro Max? | Dr.fone</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/how-to-use-pokemon-go-joystick-on-lava-blaze-2-pro-drfone-by-drfone-virtual-android/"><u>How to use Pokemon Go Joystick on Lava Blaze 2 Pro? | Dr.fone</u></a></li>
<li><a href="https://screen-mirroring-recording.techidaily.com/new-deep-dive-into-apps-with-az-recorder-for-2024/"><u>[New] Deep Dive Into Apps with AZ Recorder for 2024</u></a></li>
</ul></div>
