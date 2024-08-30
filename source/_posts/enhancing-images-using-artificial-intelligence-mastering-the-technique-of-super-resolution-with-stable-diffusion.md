---
title: "Enhancing Images Using Artificial Intelligence: Mastering the Technique of Super-Resolution with Stable Diffusion"
date: 2024-08-26 12:16:49
updated: 2024-08-29 12:55:49
tags:
  - cutting-edge
categories:
  - tech
thumbnail: https://thmb.techidaily.com/b53e4c331196053afd389dad87c586f0b9c8a334fc4c9d3f146c8a4bb6f2e065.jpg
---

## Enhancing Images Using Artificial Intelligence: Mastering the Technique of Super-Resolution with Stable Diffusion

### Quick Links

* [How to Upscale Images in Stable Diffusion](https://screen-sharing-recording.techidaily.com/updated-2024-approved-exploring-premium-webcams-shoppers-insights/)
* [Tips for Better Upscaling Results](https://facebook-video-content.techidaily.com/updated-silent-canvases-unscheduled-vid-removal/)

### Key Takeaways

1. In Stable Diffusion WebUI, click the "Extras" tab.
2. Upload the image or images you want to upscale.
3. Adjust the Resize slider to choose the resolution you want.
4. Choose an upscaler to use.
5. Click "Generate."

 Disappointed by the low resolution of your Stable Diffusion creations? Or maybe you have older "real" photos you'd like to upscale? Stable Diffusion WebUI has tools for just that, and we'll walk you through the process while sharing some tips we've learned along the way.

 In this guide we're assuming you have [automatic11111's Stable Diffusion WebUI installed and running](https://sim-unlock.techidaily.com/in-2024-top-imei-unlokers-for-your-tecno-spark-go-2023-phone-by-drfone-android/). It's the definitive edition of Stable Diffusion and makes upscaling (along with many other aspects of work with AI images) much more simple and intuitive compared to [a standard Stable Diffusion installation](https://unlock-android.techidaily.com/7-ways-to-unlock-a-locked-xiaomi-redmi-k70-phone-by-drfone-android/).

##  How to Upscale Images in Stable Diffusion

 Whether you've got a [scan of an old photo](https://fox-cloud.techidaily.com/2024-approved-visualvision-studio-for-win8/), an old digital photo, or a low-res [AI-generated image](https://fox-info.techidaily.com/new-synthesize-stellar-titles-using-ai-insights/), start Stable Diffusion WebUI and follow the steps below.

###  1\. Upload an Image

 All of Stable Diffusion's upscaling tools are located in the "Extras" tab, so click it to open the upscaling menu.

![Click the "Extras" tab in Stable Diffusion WebUI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/extras-tab.png) 

 Or, if you've just generated an image you want to upscale, click "Send to Extras" and you'll be taken to there with the image in place for upscaling. Otherwise, you can drag-and-drop your image into the Extras upload field.

![A photo placed in the Extras upload field in Stable Diffusion WebUI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/generate.png) 

 If you have several images you want to upscale at once, switch to the "Batch Process" tab and drop several at once. In my experience, though, this doesn't always work, and

###  Step 2: Choose a Size

 Use the "Resize" slider to adjust how big the output image should be. By default, you'll use the "Scale By" tab which lets you multiply the image's current resolution by a given number. So for example, if you set it to 2 and your input image is 512x512, the image will be upscaled to 1024x1024.

![Adjust the "Scale By" slider or number field to choose the multiple you by which you want to upscale.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/scale-by.png) 

 Alternatively, you can switch to the "Scale To" tab and enter a specific resolution you want. Pay close attention to the image's current aspect ratio, and uncheck the "Crop to Fit" option if you don't want edges cut off.

 If you're planning to make a wallpaper, keep in mind that most modern phones use a 9:16 [aspect ratio](https://youtube-lab.techidaily.com/e-stock-images-directly-from-trusted-4-youtube-vids/), tablets use 4:3, and computers 16:9 (though ultrawide monitors go up to 21:9).

###  Step 3: Choose an Upscaler

 Now, here's where it's easy to feel overwhelmed: you have at your disposal several different upscaling algorithms at your disposal, all with cryptic names, and you must choose one.

 The one you should choose ultimately depends on what kind of image you're upscaling, like a photo, a painting, anime art, or another kind of "cartoon" style artwork. Different algorithms also work at different speeds, so it may also depend on what kind of hurry you're in.

![Dropdown list in Stable Diffusion WebUI showing available upscalers.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/choose-upscaler.png) 

#### Which Is the Best Stable Diffusion Upscaler?

 Experimenting with the different algorithms is the only way to know for sure exactly which of Stable Diffucion's built-in upscalers is best for your case. That said, if you'd like a basic recommendation, these are usually good choices:

* **Photos:** ESRGAN\_4x
* **Paintings:** R-ESRGAN 4x+
* **Anime:** R-ESRGAN 4x+ Anime6B

###  Step 4: Upscale!

 Once you've got your settings in place, it's time to upscale. Hit that big "Generate" button to begin the process.

![A photo placed in the Extras upload field in Stable Diffusion WebUI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/generate.png) 

 The first time you upscale with a given algorithm Stable Diffusion will need to download the appropriate models, so expect the initial run to take extra time (which will depend in part on your connection speed).

 Once upscaling is complete, you'll find the output images in your the 

        `extras-images`
    
 subdirectory of your 

        `outputs`
    
 folder.

Related: [How to Use Stable Diffusion to Make AI GIFs and Videos](https://youtube-help.techidaily.com/in-2024-sonic-gold-standard-10-ways-to-elevate-home-recordings/) 

##  Tips for Better Upscaling Results

 If images aren't looking quite how you expected, there are a few things you can do get better results from Stable Diffusion's upscaling tools.

###  Try an Upscaler Combo

 For advanced upscaling, you can select a second algorithm that will apply its effect to the same image, and the results of the two upscalers will be blended for the final product. (To be clear, a second upscaler will not double the output resolution.) This is useful if you find two different upscalers produce better results for different reasons.

 For example, in my testing, I found ESRGAN\_4x was best at maintaining detail, but SwinIR had less grain, while also introducing some annoying tile artifacts. I could get the best of both worlds by setting ESRGAN\_4x as the primary upscaler and SwinIR as the secondary, with 0.5 visibility.

![Secondary upscaler selected in Stable Diffusino WebUI.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/second-upscaler.png) 

###  Fix Bad Aspect Ratios With Outpainting

 If you have an image you want to use at a specific aspect ratio but the upscaled image is too tall or two wide to use without cropping, you can potentially fix that problem using [Stable Diffusion's "outpainting" tool](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features#outpainting). It lets you generate "more" of the image, adding imagery to the sides or the top and bottom that weren't there before.

 To get started outpainting, drop your image into the img2img input and, look for the "Script" dropdown menu and select either Outpainting mk2 or Poor Man's Outpainting. Adjust any settings you see as necessary and then click "Generate."

 As you'll quickly find out, outpainting well is difficult, and probably a subject for another guide, especially with complex image content like people and animals. That said, just messing around and not making too many changes I was able to generate this panoramic version of my image that, at first glance, looks half-believable.

![Upscaled photo of a walking path in autumn with the left and right side generated using Stable Diffusion.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/wallpaper_outpainting.jpg) 

Postprocess upscale by: 4, Postprocess upscaler: ESRGAN\_4x, Postprocess upscaler 2: SwinIR\_4x

###  Restore Distorted Faces With GPFGAN or CodeFormer

 If there's a person's face the image you're blowing up, it can easily become distorted beyond recognition. You've no doubt seen some of Stable Diffusion's rather horrific renditions of human faces, too. Either case is when you'd want to nudge the [GPFGAN](https://github.com/TencentARC/GFPGAN) or [CodeFormer](https://www.aimodels.fyi/models/replicate/f3e540cd-400b-4594-b11b-280f45a62722?ref=notes.replicatecodex.com) visibility sliders. Each applies a layer of facial correction during the upscaling process to fix those spooky eyes and bizarre wrinkles.

 If you're using CodeFormer, you can also adjust the "weight" of its effect, which is sort of like controlling its level of strength (while the visibility slider is sort of like adjusting its correction layer's transparency). The more you increase the weight, the more CodeFormer will try to correct. This can improve or degrade the final image depending on the situation. You may have to go through some trial and error to get the best possible result.

#### GPFGAN vs. CodeFormer for Facial Restoration

 While both are capable tools, GPFGAN is generally better at restoring a face's structure (eyes in particular), but CodeFormer is better at fixing skin textures. GPFGAN has a tendency to give human skin a strange ultrasmooth look, so if you notice that happening, try CodeFormer instead. Alternatively, combine the two and try to get the best of both worlds. Again, experimentation is key.

![Use the GFPGAN and CodeFormer sliders to add facial correction to your upscaled images.](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/facial-restoration.png) 

 In terms of speed, GPFGAN is slightly faster than CodeFormer. So if you're looking to make your upscaling happen as quickly possible, you'll probably want to lean on GPFGAN.

Related: [How to Make Awesome Wallpapers for Any Device With MidJourney](https://youtube-lab.techidaily.com/gateway-to-youtube-entrepreneurship-the-best-10-easy-to-create-channels/)

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
