---
title: AI-Powered Techniques to Scale Up and Revitalize Classic Images Sans Photoshop
date: 2025-02-05T16:41:44.192Z
updated: 2025-02-07T19:43:01.425Z
tags:
  - web
categories:
  - tech
thumbnail: https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/an-artificial-intelligence-chip-in-the-center-and-two-laptops-in-the-background-one-with-photoshop-open-and-the-other-showing-some-restored-images.jpg
---

## AI-Powered Techniques to Scale Up and Revitalize Classic Images Sans Photoshop

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/sXLLPY11of0?si=-3YNnpnO0wbc0K_-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

### Key Takeaways

* Microsoft's free AI effectively restores old photos with just one click, surpassing Photoshop's results.
* Use Replicate's catalog of AI tools to restore, colorize, and upscale old photos.
* Additional AI models on Replicate can further enhance and refine photos, offering endless possibilities for restoration.

 Photoshop has a built-in neural filter for restoring old scratched photos. But you don’t need to spend 20 bucks a month just to use that feature. Microsoft has developed a more robust AI for the job and it’s completely free. Here’s the only guide you need to bring your old photos back to life.

##  Microsoft's AI that Brings Old Photos Back to Life

 There was a time when it took Photoshop gurus hours of painstaking labor to [fix up old degraded photos](https://some-tips.techidaily.com/updated-top-tunes-where-to-secure-soundscapes/). Today, AI can do most of the heavy lifting. So much so that you can restore a photo with just one click!

[Bringing Old Photos Back to Life](https://www.microsoft.com/en-us/research/publication/bringing-old-photos-back-to-life/) is the official Microsoft project for AI-powered photo restoration. The project samples show some stunning restoration jobs on a few degraded photos. I tested it with some photos of my own too, and it worked like a charm.

![Sample photos showcasing Microsoft's photo restoration AI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/0001.jpg) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/0Kr7Dpw0HuM?si=05wWDXdPgmC-oBBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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

###  Restoring Old Photos

 After [logging into Replicate](https://replicate.com/), we’re ready for the first step. In the search bar, enter **Bringing Old Photos Back to Life**, or you can [go directly to the page](https://www.replicate.com/microsoft/bringing-old-photos-back-to-life).

 Click the tiny cloud icon to select and upload the photo you want to restore.

![Clicking the upload button on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/upload.png) 

![Uploading the old photo using Windows Explorer.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/loading.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/fJlICvacgJY?si=jNeijBVj7ia4ammA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

Close 

 Check the relevant boxes if you have a high-resolution scan and if your photo has scratches. Click “Run.” It should take roughly 2 minutes to process the output. The tool has a helpful slider to view the before and after.

![Steps for running photo restoration AI on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/run.png) 

 Keep an eye on the Warm or Cold tag under the title of the AI model. A cold tag means the model is booting, and your photo will take longer to process. If the model is already warm, you’ll get the output sooner.

 As you can see, the AI has done a great job of cleaning up the photo. ​​​​Click “Download” to get your restored image in full resolution. Or click “Tweak” to run the AI again with different settings.

![Arrow indicating the output preview window and the download button for the restored photo.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/download.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/aIx71tPaWKg?si=lG5OiUe-M6eBJf5b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

###  Colorizing Restored Photos

 Before we upscale our restored photo, we are going to add color to it. You can skip this step if you want to keep the original colors.

 We’ll be using the Deoldify AI. I tested almost half a dozen other models on Replicate built for the same job. But Deoldify consistently produced the best results.

 To run Deoldify on your restored image, search **deoldify** in the Replicate search bar or [visit the Deoldify page directly](http://replicate.com/arielreplicate/deoldify%5Fimage).

 Click the upload icon and select the restored file you just downloaded.

![Arrow indicating the upload button on the Deoldify input form.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/upload-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/uzb-0C0xUYA?si=F4MPhdVqyVgx7_8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

 Deoldify has two settings: the model name and the render factor. You can play around with both until you get the best result. The default is the Artistic model and a render factor of “35” which should work in most scenarios. I got a better result with Stable here.

![Steps for running Deoldify on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/set.png) 

 Click “Run” once you’ve selected your preferred settings. Wait for the processed output. If you’re happy with the result, click “Download.” Or click “Tweak it” to re-process it with different settings.

![Preview of the colorized photo along with the download button on Deoldify](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/download-1.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/fZTlPdOFNmo?si=Ym8p7ayV1gtNzzXj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

###  Upscaling Old Photos

 So far, we’ve restored a badly damaged photo and added a splash of color to it. To top off this restoration job, we’ll upscale the processed photo. Upscaling uses AI to add more pixels to an image, making it bigger, sharper, and clearer. Think of the [“zoom and enhance”](https://vimeo-videos.techidaily.com/updated-strategies-to-optimize-time-and-quality-in-thumbnail-design/) trope from CSI.

 Open[ESRGAN on Replicate](https://replicate.com/daanelson/real-esrgan-a100?prediction=5xta824fcsrg80cf7409m7xwh4). Click the upload button and drop the colorized image as input.

![Arrow pointing at the upload button for ESRGAN AI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/upload-2.png) 

![Steps for uploading the colorized photo to Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/explorer.png) 

Close 

 Next, we enter the scale. The scale here refers to the image size. I’ve set it to 4, which will give me an image 4 times bigger than my input. So for a 1080P image, I’ll get [4K](https://sim-unlock.techidaily.com/how-to-unlock-sim-cards-of-oppo-a78-5g-without-puk-codes-by-drfone-android/)as output. You can also select Face Enhance to clear up details on faces. Finally, click “Run.”

![Steps for running the upscaling AI on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/run-1.png) 

 When it's done, the before and after previews look identical. But when you download the processed file, it has a much higher resolution.

![Arrow indicating the download button on Replicate.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/download-2.png) 

<!-- affiliate ads begin -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/793ViIxl4tI?si=DDBkjPlPX5bZ-f1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!-- affiliate ads end -->

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
<li><a href="https://digital-screen-recording.techidaily.com/new-2024-approved-mastering-obs-mobile-top-techniques/"><u>[New] 2024 Approved Mastering OBS Mobile Top Techniques</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-how-to-use-9gag-to-create-meme/"><u>[New] How to Use 9GAG to Create Meme</u></a></li>
<li><a href="https://some-skills.techidaily.com/new-the-top-strategies-for-box-enthusiasts/"><u>[New] The Top Strategies for Box Enthusiasts</u></a></li>
<li><a href="https://fox-cloud.techidaily.com/updated-essential-six-social-media-locations-for-business-enhancement-for-2024/"><u>[Updated] Essential Six Social Media Locations for Business Enhancement for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/updated-top-8-video-transformation-tools-from-iphone-to-file/"><u>[Updated] Top #8 Video Transformation Tools From iPhone to File</u></a></li>
<li><a href="https://some-techniques.techidaily.com/2024-approved-gear-vr-latest-phone-compatibility-guide/"><u>2024 Approved Gear VR Latest Phone Compatibility Guide</u></a></li>
<li><a href="https://some-skills.techidaily.com/2024-approved-top-tips-for-capturing-clear-quality-sound-in-your-windows-11-pc/"><u>2024 Approved Top Tips for Capturing Clear, Quality Sound in Your Windows 11 PC</u></a></li>
<li><a href="https://activate-lock.techidaily.com/a-comprehensive-guide-to-icloud-unlock-on-iphone-12-pro-online-by-drfone-ios/"><u>A Comprehensive Guide to iCloud Unlock On iPhone 12 Pro Online</u></a></li>
<li><a href="https://blog-min.techidaily.com/how-to-remove-find-n3-flip-pin-by-drfone-android-unlock-android-unlock/"><u>How to remove Find N3 Flip PIN</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-unlock-xiaomi-redmi-note-12-proplus-5g-bootloader-easily-by-drfone-android/"><u>In 2024, How to Unlock Xiaomi Redmi Note 12 Pro+ 5G Bootloader Easily</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-simplifying-visual-transformations-utilizing-luts-for-obs-videos/"><u>In 2024, Simplifying Visual Transformations Utilizing LUTs for OBS Videos</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-strategically-showcasing-achievements/"><u>In 2024, Strategically Showcasing Achievements</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-strategies-for-writing-persuasive-vlog-show-narratives/"><u>In 2024, Strategies for Writing Persuasive Vlog Show Narratives</u></a></li>
<li><a href="https://some-skills.techidaily.com/in-2024-unveiling-the-secrets-of-gopro-chrono-photography/"><u>In 2024, Unveiling the Secrets of GoPro Chrono Photography</u></a></li>
<li><a href="https://hardware-help.techidaily.com/intel-iris-plus-graphics-655-driver-for-windows-11-11/"><u>Intel Iris Plus Graphics 655 Driver for Windows 11, 11</u></a></li>
<li><a href="https://win-trending.techidaily.com/most-effective-aomei-solutions-beyond-sysprep-for-windows-11-deployment-and-cloning/"><u>Most Effective AOMEI Solutions Beyond SYSPREP for Windows 11 Deployment and Cloning</u></a></li>
<li><a href="https://novels-ebooks.techidaily.com/210349457-9782226303028-oser-la-bienveillance/"><u>Oser la bienveillance | Free Book</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/step-by-step-process-to-create-impressive-gopro-timelapses-for-2024/"><u>Step-by-Step Process to Create Impressive GoPro Timelapses for 2024</u></a></li>
<li><a href="https://some-skills.techidaily.com/the-ultimate-conversion-handbook-from-gif-to-sticker-across-messaging-services-for-2024/"><u>The Ultimate Conversion Handbook From GIF to Sticker Across Messaging Services for 2024</u></a></li>
</ul></div>

