---
title: AI-Powered Techniques to Scale Up and Revitalize Classic Images Sans Photoshop
date: 2024-11-16T01:28:16.573Z
updated: 2024-11-20T02:44:31.560Z
tags:
  - web
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/an-artificial-intelligence-chip-in-the-center-and-two-laptops-in-the-background-one-with-photoshop-open-and-the-other-showing-some-restored-images.jpg
---

## AI-Powered Techniques to Scale Up and Revitalize Classic Images Sans Photoshop

### Key Takeaways

* Microsoft's free AI effectively restores old photos with just one click, surpassing Photoshop's results.
* Use Replicate's catalog of AI tools to restore, colorize, and upscale old photos.
* Additional AI models on Replicate can further enhance and refine photos, offering endless possibilities for restoration.

 Photoshop has a built-in neural filter for restoring old scratched photos. But you don’t need to spend 20 bucks a month just to use that feature. Microsoft has developed a more robust AI for the job and it’s completely free. Here’s the only guide you need to bring your old photos back to life.

##  Microsoft's AI that Brings Old Photos Back to Life

 There was a time when it took Photoshop gurus hours of painstaking labor to [fix up old degraded photos](https://some-tips.techidaily.com/updated-top-tunes-where-to-secure-soundscapes/). Today, AI can do most of the heavy lifting. So much so that you can restore a photo with just one click!

[Bringing Old Photos Back to Life](https://www.microsoft.com/en-us/research/publication/bringing-old-photos-back-to-life/) is the official Microsoft project for AI-powered photo restoration. The project samples show some stunning restoration jobs on a few degraded photos. I tested it with some photos of my own too, and it worked like a charm.

![Sample photos showcasing Microsoft's photo restoration AI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/0001.jpg) 

 Unfortunately, Microsoft has yet to offer an official app to use this AI. If you have a powerful PC and you possess the technical know-how, you can run the AI on your own hardware.

 But the easiest way is to run it for free on the cloud. You can either use:

* Google Colab
* Replicate

 Colab allows you to execute code over the cloud using Google’s hardware resources. I tested the Bringing Old Photos Back to Life AI on the [Google Colab notebook](https://colab.research.google.com/github/dlmacedo/starter-academic/blob/master/content/courses/deeplearning/notebooks/pytorch/Bringing%5FOld%5FPhoto%5FBack%5Fto%5FLife.ipynb) first. It proved buggy for me; your mileage may vary too. It’s a little tricky to use.

[Replicate](https://replicate.com/) lets you run open-source AI models with ease. Microsoft’s AI runs faster and smoother on this platform, and it only takes one click to get the output. That’s why we’ll be using it for this demonstration.

 This demonstration also includes two AI tools for colorizing and enhancing your restored photos. They’re both freely available on Replicate and Google Colab. I highly recommend trying them, but Microsoft’s AI alone is enough to cover basic restoration.

##  How to Restore, Colorize, and Upscale Old Photos

 Passing an old degraded photo through Microsoft’s AI is only the first step in my process. After that once over, we can use AI to colorize our restored photo (this bit is optional). Finally, I use a third AI to upscale the whole image.

 To get started with Replicate, all we need is a GitHub account. If you already have a GitHub, skip this step, otherwise, head over to [GitHub](https://github.com/join/). You need a valid email to join GitHub and the sign-up only takes a few minutes.

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2123730/7443" target="_top" id="2123730">
  <img src="//a.impactradius-go.com/display-ad/7443-2123730" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2123730/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

###  Restoring Old Photos

 After [logging into Replicate](https://replicate.com/), we’re ready for the first step. In the search bar, enter **Bringing Old Photos Back to Life**, or you can [go directly to the page](https://www.replicate.com/microsoft/bringing-old-photos-back-to-life).

 Click the tiny cloud icon to select and upload the photo you want to restore.

![Clicking the upload button on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/upload.png) 

![Uploading the old photo using Windows Explorer.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/loading.png) 

Close 

 Check the relevant boxes if you have a high-resolution scan and if your photo has scratches. Click “Run.” It should take roughly 2 minutes to process the output. The tool has a helpful slider to view the before and after.

![Steps for running photo restoration AI on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/run.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2144310/7443" target="_top" id="2144310">
  <img src="//a.impactradius-go.com/display-ad/7443-2144310" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2144310/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Keep an eye on the Warm or Cold tag under the title of the AI model. A cold tag means the model is booting, and your photo will take longer to process. If the model is already warm, you’ll get the output sooner.

 As you can see, the AI has done a great job of cleaning up the photo. ​​​​Click “Download” to get your restored image in full resolution. Or click “Tweak” to run the AI again with different settings.

![Arrow indicating the output preview window and the download button for the restored photo.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/download.png) 

<!-- affiliate ads begin -->
<a href="https://unicoeye.pxf.io/c/5597632/2134237/18498" target="_top" id="2134237">
  <img src="//a.impactradius-go.com/display-ad/18498-2134237" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://unicoeye.pxf.io/i/5597632/2134237/18498" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

###  Colorizing Restored Photos

 Before we upscale our restored photo, we are going to add color to it. You can skip this step if you want to keep the original colors.

 We’ll be using the Deoldify AI. I tested almost half a dozen other models on Replicate built for the same job. But Deoldify consistently produced the best results.

 To run Deoldify on your restored image, search **deoldify** in the Replicate search bar or [visit the Deoldify page directly](http://replicate.com/arielreplicate/deoldify%5Fimage).

 Click the upload icon and select the restored file you just downloaded.

![Arrow indicating the upload button on the Deoldify input form.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/upload-1.png) 

 Deoldify has two settings: the model name and the render factor. You can play around with both until you get the best result. The default is the Artistic model and a render factor of “35” which should work in most scenarios. I got a better result with Stable here.

![Steps for running Deoldify on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/set.png) 

 Click “Run” once you’ve selected your preferred settings. Wait for the processed output. If you’re happy with the result, click “Download.” Or click “Tweak it” to re-process it with different settings.

![Preview of the colorized photo along with the download button on Deoldify](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/download-1.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/2135396/19272" target="_top" id="2135396">
  <img src="//a.impactradius-go.com/display-ad/19272-2135396" border="0" alt="https://techidaily.com" width="160" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/2135396/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

###  Upscaling Old Photos

 So far, we’ve restored a badly damaged photo and added a splash of color to it. To top off this restoration job, we’ll upscale the processed photo. Upscaling uses AI to add more pixels to an image, making it bigger, sharper, and clearer. Think of the [“zoom and enhance”](https://vimeo-videos.techidaily.com/updated-strategies-to-optimize-time-and-quality-in-thumbnail-design/) trope from CSI.

 Open[ESRGAN on Replicate](https://replicate.com/daanelson/real-esrgan-a100?prediction=5xta824fcsrg80cf7409m7xwh4). Click the upload button and drop the colorized image as input.

![Arrow pointing at the upload button for ESRGAN AI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/upload-2.png) 

![Steps for uploading the colorized photo to Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/explorer.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2075475/7443" target="_top" id="2075475">
  <img src="//a.impactradius-go.com/display-ad/7443-2075475" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2075475/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

Close 

 Next, we enter the scale. The scale here refers to the image size. I’ve set it to 4, which will give me an image 4 times bigger than my input. So for a 1080P image, I’ll get [4K](https://sim-unlock.techidaily.com/how-to-unlock-sim-cards-of-oppo-a78-5g-without-puk-codes-by-drfone-android/)as output. You can also select Face Enhance to clear up details on faces. Finally, click “Run.”

![Steps for running the upscaling AI on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/run-1.png) 

<!-- affiliate ads begin -->
<a href="https://imp.i357552.net/c/5597632/1013424/11832" target="_top" id="1013424">
  <img src="//a.impactradius-go.com/display-ad/11832-1013424" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://imp.i357552.net/i/5597632/1013424/11832" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 When it's done, the before and after previews look identical. But when you download the processed file, it has a much higher resolution.

![Arrow indicating the download button on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/download-2.png) 

 That’s all. Now our restored photo is ready for your digital or print album. Here’s a side-by-side comparison.

![Before and after preview of the restored photo.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/comparison.png) 

 Including these three AI models, Replicate has a whole [collection of image restoration models](https://replicate.com/collections/image-restoration). There’s also a catalog dedicated to image [upscaling and refining models](https://replicate.com/collections/super-resolution).

 Google’s Maxim AI caught my eye in particular. It can deblur, denoise, derain, and dehaze photos with one click. The results are simply astonishing. It works wonders on Polaroids or photos taken with low-res [dumbphone](https://youtube-data.techidaily.com/024-approved-elevate-video-exposure-mastering-the-art-of-appropriate-tags/)cameras. You can retouch those old low-light photos with Google’s AI magic too.

---

 With the three simple steps, you can restore and enhance most of any old photo. But you may have to fiddle with the settings to get the perfect output. I also suggest playing around with other restoration models freely available on Replicate. You could modify my workflow or create your own.

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
<li><a href="https://twitter-videos.techidaily.com/new-in-2024-how-to-upload-tweets-no-retweets-on-mobile/"><u>[New] In 2024, How to Upload Tweets - No Retweets on Mobile?</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-premier-source-of-no-cost-creative-tools-in-ae/"><u>[New] The Premier Source of No-Cost Creative Tools in AE</u></a></li>
<li><a href="https://fox-hovers.techidaily.com/updated-deciphering-the-language-of-youtube-commenters-for-2024/"><u>[Updated] Deciphering the Language of YouTube Commenters for 2024</u></a></li>
<li><a href="https://youtube-video-recordings.techidaily.com/developing-intriguing-video-segments-for-channels-for-2024/"><u>Developing Intriguing Video Segments for Channels for 2024</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/in-2024-how-to-screen-mirror-your-apple-iphone-12-pro-max-display-drfone-by-drfone-ios/"><u>In 2024, How to Screen Mirror your Apple iPhone 12 Pro Max Display? | Dr.fone</u></a></li>
<li><a href="https://instagram-videos.techidaily.com/in-2024-optimal-insta-video-sizes-2023-guide/"><u>In 2024, Optimal Insta Video Sizes - 2023 Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-surge-in-tiktok-like-ratings-with-smart-unboxing/"><u>In 2024, Surge in TikTok Like Ratings with Smart Unboxing</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-the-progression-of-vegaspro-through-its-2019-updates/"><u>In 2024, The Progression of VegasPro Through Its 2019 Updates</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-tricks-to-increase-viewership-on-your-tiktok-unboxing-sessions/"><u>In 2024, Tricks to Increase Viewership on Your TikTok Unboxing Sessions</u></a></li>
<li><a href="https://win-blog.techidaily.com/step-by-step-troubleshooting-getting-rid-of-the-black-screen-issue-in-persona-5-strikers/"><u>Step-by-Step Troubleshooting: Getting Rid of the Black Screen Issue in Persona 5 Strikers</u></a></li>
<li><a href="https://some-approaches.techidaily.com/transforma-tu-caf-en-un-formato-mp3-libre-y-sin-expediente-usando-la-herramienta-de-linea-gratis-de-movavi/"><u>Transforma Tu CAF en Un Formato Mp3 Libre Y Sin Expediente Usando La Herramienta De Línea Gratis De Movavi</u></a></li>
<li><a href="https://some-skills.techidaily.com/ultimate-color-correction-top-15-luts-for-gopro-cams-for-2024/"><u>Ultimate Color Correction Top 15 LUTs for GoPro Cams for 2024</u></a></li>
<li><a href="https://bypass-frp.techidaily.com/ultimate-guide-on-google-pixel-8-frp-bypass-by-drfone-android/"><u>Ultimate Guide on Google Pixel 8 FRP Bypass</u></a></li>
<li><a href="https://some-skills.techidaily.com/ultimate-mix-seamless-free-and-paid-blu-ray-playback-windows-macos-for-2024/"><u>Ultimate Mix Seamless Free & Paid Blu-Ray Playback (Windows, macOS) for 2024</u></a></li>
<li><a href="https://some-tips.techidaily.com/ultimate-software-guide-to-gamers-broadcast-for-2024/"><u>Ultimate Software Guide to Gamers' Broadcast for 2024</u></a></li>
</ul></div>

