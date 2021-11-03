---
slug: /ugnay/core/theme 
title: Theme
tags:
- Ugnay Components Web
- Design System
- SCSS
- CSS
---
# Theme
- This is the documentation of the most important core module to be used in the library.
## SCSS/CSS
### SCSS `config()` API
- This is where all the theming happens in the library. The system takes the colors you've provided and automatically generates variants, as well as its appropriate text color for the components to consume.

| Property | Effect |
|----------|--------|
| `$primary` | **[REQUIRED]**. The primary color of the theme. This usually is your main brand color. |
| `$secondary` | **[REQUIRED]**. The secondary color of the theme. This color **must** be in stark contrast from the primary color as this will be used in call-to-action components such as the button, as well as to components that will catch the audiences' attention. |

```scss
@include Theme.config(
    #464646,
    #7ed957
);
```

### CSS custom properties API
- You can use these properties to override certain theme aspects of a component, may it be a global theme property or a component-specific theme property.
- This is also what the compiled CSS outputs from the `Theme.config()` mixin and uses to apply theme values to components.

| Property | Effect |
|----------|--------|
| `--sph-theme--primary` | The theme's primary default variant. |
| `--sph-theme--primary-dark` | The theme's primary dark variant. |
| `--sph-theme--primary-light` | The theme's primary light variant. |
| `--sph-theme--secondary` | The theme's secondary default variant. |
| `--sph-theme--secondary-dark` | The theme's secondary dark variant. |
| `--sph-theme--secondary-light` | The theme's secondary light variant. |
| `--sph-theme--on-primary` | The theme's primary text color value. |
| `--sph-theme--on-secondary` | The theme's secondary text color value. |
```css
:root {
  --sph-theme--primary-light: #737373;
  --sph-theme--primary: #474747;
  --sph-theme--primary-dark: #1c1c1c;
  --sph-theme--secondary-light: #b5e99f;
  --sph-theme--secondary: #7ed957;
  --sph-theme--secondary-dark: #51b128;
  --sph-theme--on-primary: #fff;
  --sph-theme--on-secondary: #000;
}
```