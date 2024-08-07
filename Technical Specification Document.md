# Green Harvest Tech Task Checklist

## General Requirements

- [ ] Mobile responsiveness is provided, with breakpoints:
  - Mobile: Flexible layout from 320 pixels, responsive from 375 pixels
  - Tablet: From 768 pixels
  - Desktop: From 1280 pixels
- [ ] Validity check for layout using [W3C Validator](https://validator.w3.org/) and [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [ ] HTML5 semantic compatibility
- [ ] Fonts are properly linked
- [ ] Vector and raster graphics are optimized for size
- [ ] Retina screen image support
- [ ] Image loading is optimized
- [ ] All SVG icons are linked with a sprite
- [ ] Favicon image is included

## Project Structure

- [ ] Header
- [ ] Hero
- [ ] How It Works
- [ ] Advertisement
- [ ] Vegetables
- [ ] Reviews
- [ ] Your Order
- [ ] Footer

## Header

- [ ] Contains header logo and site navigation
- [ ] Navigation on mobile and tablet should be a collapsible sidebar. Menu should be fixed and match the height of the viewport.
- [ ] Navigation should include links to relevant sections of the site

## Hero

- [ ] Main heading: "Organic vegetables to your diet today!"
- [ ] Includes a descriptive section
- [ ] Background image should be applied

## How It Works

- [ ] Hidden heading for browsers
- [ ] Includes a descriptive section
- [ ] Images should be applied as content
- [ ] Contains a list of steps to purchase vegetables, with steps styled using `<ol>`, custom styles for list markers with `::before`, and a custom counter

## Advertisement

- [ ] Hidden heading for browsers
- [ ] Includes a descriptive section

## Vegetables

- [ ] Section title: "Organic vegetables"
- [ ] Includes a descriptive section
- [ ] Product list should be implemented using `<ul>`
- [ ] Images should be applied as content

## Reviews

- [ ] Section title: “Reviews from our customers”
- [ ] Includes a list of customer reviews implemented with `<ul>`
- [ ] Images should be applied as content

## Your Order

- [ ] Section title: "Fresh Harvest Box has got you covered"
- [ ] Includes a descriptive section and a form with:
  - [ ] `<input>` with validation pattern `[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$` and styling for `:valid`/`:invalid`
  - [ ] `<textarea>`
  - [ ] Submit button labeled “Send”
- [ ] Image should be included as content

## Footer

- [ ] Includes company logo, slogan, a list of site links, and company contact information
- [ ] List of site links should be implemented using `<ul>`
- [ ] Contact phone number should use proper link protocols

## Social Media Links

- [ ] Instagram: [https://www.instagram.com/goit.turkiye/](https://www.instagram.com/goit.turkiye/)
- [ ] YouTube: [https://m.youtube.com/@GoITTurkey](https://m.youtube.com/@GoITTurkey)
- [ ] Facebook: [https://www.facebook.com/people/GOIT-T%C3%BCrkiye/61558036560161/](https://www.facebook.com/people/GOIT-T%C3%BCrkiye/61558036560161/)
