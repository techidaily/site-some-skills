---
title: "\"[Updated] The Encyclopedia of Hand-Centered Interaction Systems\""
date: 2024-06-04T02:43:19.682Z
updated: 2024-06-05T02:43:19.682Z
tags: 
  - screen-recording
  - ai video
  - ai audio
  - ai auto
categories: 
  - ai
  - screen
description: "\"This Article Describes [Updated] The Encyclopedia of Hand-Centered Interaction Systems\""
excerpt: "\"This Article Describes [Updated] The Encyclopedia of Hand-Centered Interaction Systems\""
keywords: "\"HCI Hand-Focused Tech,Hand-Interact Devices,Touch Interface Guide,Ergonomic Device Design,Human-Centered Interaction,Gesture Control Systems,Tactile User Engagement\""
thumbnail: https://www.lifewire.com/thmb/qY6YXPwK45Llx5jtogYGA3wpHHs=/400x300/filters:no_upscale():max_bytes(150000):strip_icc()/most-expensive-apps-on-itunes-3486326-acea86da615d4dbba558b30b15706dee.png
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
<li><a href="https://some-skills.techidaily.com/unveiling-the-process-of-batched-tiktok-content-extraction-for-2024/"><u>Unveiling the Process of Batched TikTok Content Extraction for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-vanguard-ventures-newcomers-to-the-panzoid-world/"><u>[Updated] Vanguard Ventures  Newcomers to the Panzoid World</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unlocking-zooms-potential-learn-how-to-use-video-filters/"><u>2024 Approved  Unlocking Zoom's Potential  Learn How to Use Video Filters</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-understanding-seconds-for-a-20mb-movie/"><u>In 2024, Understanding Seconds for a 20MB Movie</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-tech-savvy-guide-from-digital-to-physical-dvds-on-mac/"><u>2024 Approved  Tech Savvy Guide  From Digital to Physical - DVDs on Mac</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-dos-and-donts-of-mixing-music-in-instagram-videos/"><u>In 2024, The Do's and Don'ts of Mixing Music in Instagram Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-tools-for-producing-road-trip-videos/"><u>In 2024, Tools for Producing Road Trip Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-best-android-photos-tactics/"><u>In 2024, Unveiling Best Android Photos Tactics</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-setup-guide-for-effective-after-effects-texting/"><u>2024 Approved  The Ultimate Setup Guide for Effective After Effects Texting</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-unlocking-your-digital-cameras-potential/"><u>[New] Unlocking Your Digital Camera's Potential</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-best-10-final-cut-pro-plugins-ever/"><u>[New] The Best 10 Final Cut Pro Plugins Ever</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-5-cloud-based-voice-customizers-for-chrome-os-vocal-transformation-tools-reviewed/"><u>[Updated] Top 5 Cloud-Based Voice Customizers for Chrome OS  Vocal Transformation Tools Reviewed</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-5-audio-capture-techniques-for-window-warriors-for-2024/"><u>Top 5 Audio Capture Techniques for Window Warriors for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-art-of-elegant-appearance-for-2024/"><u>The Art of Elegant Appearance for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-smooth-slide-advanced-techniques-for-inshot-transitions-for-2024/"><u>The Smooth Slide  Advanced Techniques for Inshot Transitions for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-offline-voice-processor/"><u>[New] Ultimate Offline Voice Processor</u></a></li>
<li><a href="https://some-skills.techidaily.com/tutorial-triumph-a-step-towards-a-million-view-goal-for-2024/"><u>Tutorial Triumph  A Step Towards a Million View Goal for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-ultimate-video-upgrade-with-enhancer-22/"><u>[Updated] The Ultimate Video Upgrade with Enhancer 2.2</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-essence-of-time-stretching-detailed-review-of-slomo-2e1924/"><u>[New] The Essence of Time Stretching  Detailed Review of SloMo, 2E1924</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-top-8-android-apps-to-change-slow-motion-videos-to-regular-speed-videos/"><u>[New] Top 8 Android Apps to Change Slow-Motion Videos to Regular-Speed Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-roadmap-for-visual-impact-professionals/"><u>[New] The Roadmap for Visual Impact Professionals</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unboxing-the-essence-of-dji-inspire-2/"><u>2024 Approved  Unboxing the Essence of DJI Inspire 2</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-updated-list-the-premier-pc-vr-headsets-of-2023/"><u>In 2024, Updated List  The Premier PC VR Headsets of 2023</u></a></li>
<li><a href="https://some-skills.techidaily.com/top-5-slick-online-apps-for-direct-gif-to-video-updates-for-2024/"><u>Top 5 Slick Online Apps for Direct GIF to Video Updates for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unlocking-hdr-potential-with-photo-hdr-techniques/"><u>2024 Approved  Unlocking HDR Potential with Photo-HDR Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-art-of-timestamped-media-on-the-gotube-platform-for-2024/"><u>The Art of Timestamped Media on the GoTube Platform for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-freelancers-companion-easy-and-affordable-audio-effect-additions/"><u>In 2024, The Freelancer's Companion  Easy and Affordable Audio Effect Additions</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-complete-sdr-to-hdr-upgrade-blueprint/"><u>2024 Approved  The Complete SDR to HDR Upgrade Blueprint</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-worth-of-sns-hdr-an-in-depth-comparison-study/"><u>2024 Approved  The Worth of SNS HDR  An In-Depth Comparison Study</u></a></li>
<li><a href="https://some-skills.techidaily.com/unlocking-premiere-pro-full-screen-magic-for-2024/"><u>Unlocking Premiere Pro Full-Screen Magic for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-path-to-prominence-elevating-brands-with-telegram-strategies/"><u>[Updated] The Path to Prominence  Elevating Brands with Telegram Strategies</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-streamlining-post-production-with-luts-in-ae/"><u>2024 Approved  Streamlining Post-Production with LUTs in AE</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-transforming-your-zip-archive-into-an-srt-subtitle-file/"><u>2024 Approved  Transforming Your Zip Archive Into an Srt Subtitle File</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-secrets-to-polished-photo-edits-in-canva/"><u>In 2024, The Secrets to Polished Photo Edits in Canva</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-speed-loading-windows-photo-displayer/"><u>In 2024, Ultimate Speed-Loading Windows Photo Displayer</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-logo-journey-key-steps-in-crafting-iconic-covers/"><u>In 2024, The Logo Journey  Key Steps in Crafting Iconic Covers</u></a></li>
<li><a href="https://some-skills.techidaily.com/streamlined-video-calls-synchronizing-zoom-and-gmail-for-better-communication-for-2024/"><u>Streamlined Video Calls  Synchronizing Zoom & Gmail for Better Communication for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/unveiling-the-future-with-q500-typhoon-for-2024/"><u>Unveiling the Future with Q500 Typhoon for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-guide-to-unparalleled-streaming-experience-for-2024/"><u>The Ultimate Guide to Unparalleled Streaming Experience for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-unleashing-humor-the-kapwing-meme-builder-way/"><u>2024 Approved  Unleashing Humor  The Kapwing Meme Builder Way</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-swift-shots-on-iphone-time-lapse-recording-guide/"><u>[Updated] Swift Shots on iPhone  Time-Lapse Recording Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-the-comprehensive-cheat-sheet-to-mastering-spotify-advertising/"><u>[Updated] The Comprehensive Cheat Sheet to Mastering Spotify Advertising</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-ultimate-guide-to-android-photo-fixes/"><u>In 2024, Ultimate Guide to Android Photo Fixes</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-seekers-manual-a-comprehensive-approach-to-purchasing-high-definition-monitors/"><u>In 2024, The Seeker's Manual  A Comprehensive Approach to Purchasing High-Definition Monitors</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-the-ultimate-guide-to-choosing-best-free-srt-translators-online/"><u>2024 Approved  The Ultimate Guide to Choosing Best FREE SRT Translators Online</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-ultimate-approaches-to-clearer-zoomed-video-on-online-platforms/"><u>[New] Ultimate Approaches to Clearer Zoomed Video on Online Platforms</u></a></li>
<li><a href="https://snapchat-videos.techidaily.com/updated-securely-transferring-camera-photos-to-snapchat-correctly-for-2024/"><u>[Updated] Securely Transferring Camera Photos to Snapchat Correctly for 2024</u></a></li>
<li><a href="https://youtube-videos.techidaily.com/2024-approved-becoming-a-lyric-video-pro-a-lyric-video-makers-journey/"><u>2024 Approved  Becoming a Lyric Video Pro  A Lyric Video Maker's Journey</u></a></li>
<li><a href="https://video-creation-software.techidaily.com/in-2024-top-gif-accelerators-online-and-mobile-solutions/"><u>In 2024, Top GIF Accelerators Online and Mobile Solutions</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/updated-building-an-iphone-photo-collage-tutorial/"><u>[Updated] Building an iPhone Photo Collage Tutorial</u></a></li>
<li><a href="https://extra-lessons.techidaily.com/sonic-sharing-adding-music-to-your-whatsapp-status/"><u>Sonic Sharing  Adding Music to Your WhatsApp Status</u></a></li>
<li><a href="https://unlock-android.techidaily.com/lock-your-infinix-hot-30i-phone-in-style-the-top-5-gesture-lock-screen-apps-by-drfone-android/"><u>Lock Your Infinix Hot 30i Phone in Style The Top 5 Gesture Lock Screen Apps</u></a></li>
<li><a href="https://vimeo-videos.techidaily.com/new-your-path-to-success-steps-for-staff-picked-status-at-vimeo/"><u>[New] Your Path to Success  Steps for Staff-Picked Status at Vimeo</u></a></li>
<li><a href="https://tiktok-clips.techidaily.com/updated-accelerate-clan-growth-9-rapid-fire-tips-for-popularity-for-2024/"><u>[Updated] Accelerate Clan Growth  9 Rapid-Fire Tips for Popularity for 2024</u></a></li>
<li><a href="https://extra-resources.techidaily.com/2024-approved-brighten-and-sharpen-expert-tips-for-v22-video-enhancement/"><u>2024 Approved  Brighten and Sharpen  Expert Tips for V2.2 Video Enhancement</u></a></li>
<li><a href="https://tiktok-clips.techidaily.com/new-mastering-bigger-head-effects-the-ultimate-guide-for-tiktok-creators-3-steps-for-2024/"><u>[New] Mastering Bigger-Head Effects  The Ultimate Guide for TikTok Creators (3 Steps) for 2024</u></a></li>
</ul></div>
