# Photo Customization Guide - PNWLights.com

This guide will help you find and integrate even better, more specific photos for your Christmas light installation website.

## ✅ What's Already Done

I've integrated high-quality stock photos from Unsplash into your website:

- **Hero Background**: Beautiful Christmas lights on a house (twilight/evening shot)
- **Gallery Images**: 6 different Christmas-decorated homes showcasing various styles

All photos are from Unsplash, which means:
- ✅ Completely FREE to use
- ✅ No attribution required
- ✅ Commercial use allowed
- ✅ High quality, professional photography

## 🎯 Current Photo Sources

### Hero Background
**Current Image**: Warm Christmas lights on house exterior at dusk
- **URL**: `https://images.unsplash.com/photo-1481651034284-d4f3a3ba2394?w=1920&h=1080&fit=crop`
- **Location in code**: `styles.css` - Line ~237

### Gallery Images (6 photos)
1. Classic elegant white lights
2. Modern home with lights
3. Colorful festive display
4. Traditional home lighting
5. Estate-style property
6. Vibrant holiday colors

**Location in code**: `index.html` - Lines ~155-183

## 🔍 How to Find Better Specific Photos

### Option 1: Browse Unsplash Directly (Recommended)

1. **Visit**: https://unsplash.com
2. **Search for**:
   - "christmas lights house"
   - "christmas lights exterior"
   - "holiday lights home"
   - "outdoor christmas decorations"
   - "christmas lights roofline"

3. **Find photos you like**, then:
   - Click on the photo
   - Right-click the image
   - Select "Copy Image Address"
   - You'll get a URL like: `https://images.unsplash.com/photo-XXXXXXXXX...`

4. **Optimize the URL** by adding these parameters at the end:
   ```
   ?w=800&h=600&fit=crop
   ```

   Example:
   ```
   https://images.unsplash.com/photo-1481651034284-d4f3a3ba2394?w=800&h=600&fit=crop
   ```

### Option 2: Use Pexels (Alternative Free Source)

1. **Visit**: https://www.pexels.com
2. **Search**: Same terms as above
3. **Download** photos or copy the "Original" image URL
4. Upload to your website's `images/` folder

### Option 3: Pixabay (Another Free Option)

1. **Visit**: https://pixabay.com
2. **Search**: Christmas lights themes
3. **Filter**: By "Photos" and "Horizontal" orientation
4. **Download**: Free large size images

## 📸 Best Practices for Christmas Lights Photos

### What Makes a Good Photo:

**Hero Background (Main visual impact)**:
- ✅ Taken at twilight/dusk (blue hour) - shows lights AND house details
- ✅ Warm white or multi-color lights clearly visible
- ✅ Professional, well-composed shot
- ✅ House architecture visible
- ✅ High resolution (at least 1920x1080)

**Gallery Photos** (Variety is key):
- ✅ Mix of architectural styles (ranch, two-story, craftsman, etc.)
- ✅ Mix of light colors (warm white, cool white, multi-color)
- ✅ Mix of complexity (simple elegant, elaborate displays)
- ✅ All taken at same time of day (consistency)
- ✅ 800x600 minimum resolution

### What to AVOID:
- ❌ Stock photos of generic light strings/close-ups
- ❌ Indoor Christmas tree photos
- ❌ Photos taken in full daylight (lights won't show)
- ❌ Blurry or low-resolution images
- ❌ Photos with visible watermarks

## 🛠️ How to Replace Photos

### Replace Gallery Images

1. Open `index.html`
2. Find the gallery section (around line 154-183)
3. Locate the image you want to replace
4. Replace the URL in the `background-image: url('...')`

**Example:**
```html
<!-- BEFORE -->
<div class="gallery-image" style="background-image: url('https://images.unsplash.com/photo-1576357576222-de6ce1584575?w=800&h=600&fit=crop');">
</div>

<!-- AFTER (with your new photo) -->
<div class="gallery-image" style="background-image: url('https://images.unsplash.com/photo-YOUR-PHOTO-ID?w=800&h=600&fit=crop');">
</div>
```

### Replace Hero Background

1. Open `styles.css`
2. Find the `.hero` section (around line 235-242)
3. Replace the URL in the `background-image` property

**Example:**
```css
/* BEFORE */
background-image:
    linear-gradient(135deg, rgba(44, 85, 48, 0.85) 0%, rgba(26, 58, 31, 0.85) 100%),
    url('https://images.unsplash.com/photo-1481651034284-d4f3a3ba2394?w=1920&h=1080&fit=crop');

/* AFTER (with your new photo) */
background-image:
    linear-gradient(135deg, rgba(44, 85, 48, 0.85) 0%, rgba(26, 58, 31, 0.85) 100%),
    url('https://images.unsplash.com/photo-YOUR-NEW-PHOTO-ID?w=1920&h=1080&fit=crop');
```

**Important**: Keep the `linear-gradient` overlay - it ensures text remains readable!

## 📁 Using Your Own Photos (Best Option!)

If you have your own professional installation photos:

### 1. Prepare Your Photos

**Use an image editor or online tool**:
- **Recommended tool**: https://www.iloveimg.com/resize-image
- **TinyPNG**: https://tinypng.com (for compression)

**Hero Photo**:
- Resize to: 1920x1080 pixels
- Save as JPG
- Compress to under 300KB

**Gallery Photos**:
- Resize to: 800x600 pixels each
- Save as JPG
- Compress to under 150KB each

### 2. Upload Photos

Create an `images` folder in your website directory:
```
WebDesign/
├── index.html
├── styles.css
├── script.js
├── images/              ← Create this folder
│   ├── hero-bg.jpg      ← Your hero photo
│   ├── gallery-1.jpg    ← Gallery photos
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── gallery-5.jpg
│   └── gallery-6.jpg
└── README.md
```

### 3. Update the Code

**In `styles.css`** (for hero):
```css
background-image:
    linear-gradient(135deg, rgba(44, 85, 48, 0.85) 0%, rgba(26, 58, 31, 0.85) 100%),
    url('images/hero-bg.jpg');
```

**In `index.html`** (for gallery):
```html
<div class="gallery-image" style="background-image: url('images/gallery-1.jpg');"></div>
<div class="gallery-image" style="background-image: url('images/gallery-2.jpg');"></div>
<!-- ... and so on -->
```

## 🎨 Pro Tips

### Get Photos that Convert

**What homeowners respond to**:
1. **Before/After shots** - If you can get these, they're GOLD
2. **Recognizable local homes** - "That's my neighbor's house!"
3. **Variety of budgets** - Show simple AND elaborate
4. **Family moments** - Kids admiring lights, families outside
5. **Detail shots** - Close-ups of quality craftsmanship

### Photoshoot Tips (For Your Own Photos)

**Best time**: 30 minutes after sunset (blue hour)
- Sky still has color
- Lights are bright and visible
- House details still visible

**Camera settings**:
- Use a tripod (long exposure needed)
- Shoot in RAW if possible
- Slightly underexpose (lights look better)
- Use wide-angle lens for full house shots

**What to capture**:
- Full house front view
- Corner angle showing depth
- Detail shots (window, entry, roofline)
- Medium shot showing landscaping
- Wide shot showing neighborhood context

## 📊 Recommended Photo Collections

### Search These Specific Unsplash Photos (Known Good Quality):

**Hero Backgrounds:**
- Photo ID: `1481651034284-d4f3a3ba2394` (Currently used - twilight house)
- Photo ID: `1512389098783-66b81f86e199` (Modern home with lights)
- Photo ID: `1576869540420-6a5b93b75472` (Classic house at dusk)

**Gallery Inspiration:**
- Photo ID: `1576357576222-de6ce1584575` (Elegant white lights)
- Photo ID: `1544273677-1b9cdce1e3e2` (Colorful festive home)
- Photo ID: `1514933651103-005eec06c04b` (Traditional display)
- Photo ID: `1482517967863-00e15c9b44be` (Estate lighting)
- Photo ID: `1513885535751-8b9238bd345a` (Multi-color display)

To use these, construct URLs like:
```
https://images.unsplash.com/photo-[PHOTO-ID]?w=800&h=600&fit=crop
```

## ⚡ Performance Optimization

### Keep Your Site Fast

**After adding photos, check**:
- Total gallery images: Under 1MB combined
- Hero image: Under 300KB
- Use JPG format (not PNG) for photos
- Always use the `?w=XXX&h=XXX&fit=crop` parameters

**Test your site speed**:
- https://pagespeed.web.dev
- Target: Under 3 seconds load time
- Mobile and desktop should both be fast

## 🆘 Troubleshooting

**Photo won't load?**
- Check the URL has no typos
- Make sure URL starts with `https://`
- Try loading the image URL directly in browser
- Check for proper quote marks in code

**Photo looks stretched/cropped wrong?**
- Use the `&fit=crop` parameter
- Adjust width and height in URL
- Check `background-size: cover;` is set in CSS

**Site loading slow?**
- Compress your images more
- Use the Unsplash resize parameters
- Consider lazy loading (already implemented)

## 📞 Need Help?

If you want to use your own photos but need help:
1. Take the photos
2. Email them to yourself
3. Use TinyPNG.com to compress
4. Upload to the `images/` folder
5. Update the file paths in the code

---

**Remember**: The photos I've integrated are professional and free to use. They'll work great! But using your own actual installation photos will convert even better because they're REAL proof of your work.
