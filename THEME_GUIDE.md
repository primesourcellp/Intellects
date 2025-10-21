# Intellects Theme System Guide

## Overview
A centralized theme system has been created to ensure consistent branding across all pages based on your logo colors.

## Theme File Location
`src/theme.js`

## Color Palette

### Primary Colors (Deep Blue - Main Brand Color)
- `colors.primary.main`: #1E3A8A (Navy Blue)
- `colors.primary.light`: #3B82F6 (Bright Blue)  
- `colors.primary.lighter`: #60A5FA (Sky Blue)
- `colors.primary.lightest`: #DBEAFE (Pale Blue)
- `colors.primary.dark`: #1E40AF (Darker Blue)

### Secondary Colors (Indigo - Complementary)
- `colors.secondary.main`: #6366F1
- `colors.secondary.light`: #818CF8
- `colors.secondary.lighter`: #A5B4FC
- `colors.secondary.lightest`: #E0E7FF

### Accent Colors (Cyan/Teal - Highlights)
- `colors.accent.main`: #0EA5E9
- `colors.accent.light`: #22D3EE
- `colors.accent.lighter`: #67E8F9
- `colors.accent.lightest`: #CFFAFE

### Neutral Colors
- `colors.neutral.white`: #FFFFFF
- `colors.neutral.gray50` through `colors.neutral.gray900`
- `colors.neutral.black`: #000000

## Usage Example

### 1. Import the theme
```javascript
import { theme } from "../../theme";
```

### 2. Destructure what you need
```javascript
const { colors, gradients, shadows, animations } = theme;
```

### 3. Use in your components
```javascript
// Headings
<h1 style={{ color: colors.primary.main }}>Title</h1>

// Backgrounds
<div style={{ backgroundColor: colors.neutral.gray50 }}>Content</div>

// Gradients
<button style={{ background: gradients.primary }}>Click Me</button>

// Shadows
<div style={{ boxShadow: shadows.lg }}>Card</div>
```

## Pages Already Updated

✅ **Home Page** (`src/Components/Pages/Home.jsx`)
- Hero section with theme colors
- Animated background particles using primary/secondary/accent colors
- Stats cards with primary color borders
- All text using neutral grays

✅ **Contact Page** (`src/Components/Pages/Contact.jsx`)
- Theme import added
- Ready for color updates

## How to Update Other Pages

### Step 1: Import Theme
```javascript
import { theme } from "../../theme";
```

### Step 2: Add to Component
```javascript
function YourComponent() {
  const { colors, gradients, shadows } = theme;
  
  // Rest of your component
}
```

### Step 3: Replace Hard-coded Colors

**Before:**
```javascript
style={{ backgroundColor: '#1E3A8A', color: '#FFFFFF' }}
```

**After:**
```javascript
style={{ backgroundColor: colors.primary.main, color: colors.neutral.white }}
```

## Common Patterns

### Hero Sections
```javascript
<section style={{ 
  background: gradients.hero,
  color: colors.neutral.white 
}}>
```

### Cards
```javascript
<div style={{
  backgroundColor: colors.neutral.white,
  border: `2px solid ${colors.primary.light}`,
  boxShadow: shadows.md
}}>
```

### Buttons
```javascript
// Primary Button
<button style={{
  background: gradients.primary,
  color: colors.neutral.white,
  boxShadow: shadows.lg
}}>

// Secondary Button
<button style={{
  background: gradients.secondary,
  color: colors.neutral.white
}}>

// Accent Button  
<button style={{
  background: gradients.accent,
  color: colors.neutral.white
}}>
```

### Text Colors
```javascript
// Headings
color: colors.primary.main

// Body text
color: colors.neutral.gray700

// Muted text
color: colors.neutral.gray500

// Links
color: colors.accent.main
```

## Gradients Available

- `gradients.primary` - Deep blue to bright blue
- `gradients.secondary` - Indigo gradient
- `gradients.accent` - Cyan/teal gradient
- `gradients.hero` - Multi-color hero gradient
- `gradients.card` - Subtle white to gray

## Shadows Available

- `shadows.sm` - Small shadow
- `shadows.base` - Default shadow
- `shadows.md` - Medium shadow
- `shadows.lg` - Large shadow
- `shadows.xl` - Extra large shadow
- `shadows.glow` - Primary color glow
- `shadows.glowAccent` - Accent color glow

## Animation Variants

Predefined Framer Motion variants:

```javascript
const { animations } = theme;

// Use in motion components
<motion.div
  variants={animations.fadeInUp}
  initial="hidden"
  animate="visible"
>
```

Available animations:
- `animations.fadeInUp`
- `animations.fadeIn`
- `animations.scaleIn`
- `animations.slideInLeft`
- `animations.slideInRight`
- `animations.container` (for stagger effects)

## Service Pages Color Recommendations

Since you have different services, you can use different accent colors while maintaining brand consistency:

### Software Development Pages
- Primary: `colors.primary.main`
- Accent: `colors.accent.main`

### Digital Marketing Pages  
- Primary: `colors.primary.main`
- Accent: `colors.secondary.main`

### HR/Recruitment Pages
- Primary: `colors.primary.main`
- Accent: Mix of `colors.accent` and `colors.secondary`

## Utility Functions

```javascript
import { getColor, getRgba } from "../../theme";

// Get nested color
const primary = getColor('primary.main');

// Get RGBA version
const semiTransparent = getRgba('#1E3A8A', 0.5);
```

## Best Practices

1. **Always use theme colors** instead of hard-coded hex values
2. **Use gradients** for buttons and hero sections
3. **Maintain contrast** - use `colors.neutral.white` text on dark backgrounds
4. **Be consistent** - use `colors.primary.main` for all primary headings
5. **Use neutral grays** for body text and backgrounds

## Quick Reference Card

| Element | Color |
|---------|-------|
| Primary Headings | `colors.primary.main` |
| Secondary Headings | `colors.primary.light` |
| Body Text | `colors.neutral.gray700` |
| Muted Text | `colors.neutral.gray500` |
| Links | `colors.accent.main` |
| Buttons (Primary) | `gradients.primary` |
| Backgrounds | `colors.neutral.white` or `colors.neutral.gray50` |
| Borders | `colors.neutral.gray200` |
| Shadows | `shadows.md` |

## Need Help?

If you need to add more colors or modify the theme:
1. Edit `src/theme.js`
2. All pages using the theme will automatically update
3. This ensures brand consistency across the entire application

---

**Created for Intellects** - Consistent, Professional, On-Brand

