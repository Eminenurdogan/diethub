---
name: Zenith Health Narrative
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#414843'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#727973'
  outline-variant: '#c1c8c1'
  surface-tint: '#436652'
  primary: '#163827'
  on-primary: '#ffffff'
  primary-container: '#2d4f3d'
  on-primary-container: '#9ac0a9'
  inverse-primary: '#a9cfb8'
  secondary: '#615e57'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2d8'
  on-secondary-container: '#67645c'
  tertiary: '#2a3430'
  on-tertiary: '#ffffff'
  tertiary-container: '#414a46'
  on-tertiary-container: '#afb9b4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5ecd3'
  primary-fixed-dim: '#a9cfb8'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#2c4e3c'
  secondary-fixed: '#e7e2d8'
  secondary-fixed-dim: '#cac6bd'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#494740'
  tertiary-fixed: '#dbe5df'
  tertiary-fixed-dim: '#bfc9c3'
  on-tertiary-fixed: '#151d1a'
  on-tertiary-fixed-variant: '#3f4945'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style

This design system centers on a "Modern Clinical Minimalist" aesthetic, specifically tailored for a premium dietitian-client relationship. The goal is to move away from aggressive "fitness" visuals and cold "medical" interfaces, instead landing on a space that feels like a high-end wellness sanctuary.

The brand personality is authoritative yet empathetic. It evokes a sense of calm, precision, and personalized care. By utilizing significant white space and a restrained color palette, the UI directs all focus toward the data and the dialogue between professional and client. The emotional response should be one of "structured serenity"—users should feel that their health is in expert hands and that their progress is clearly mapped.

## Colors

The palette is rooted in organic, sophisticated tones that signal growth and stability.

- **Primary (#2D4F3D):** A deep, forest-inspired green used for primary actions, branding, and high-level navigation. It represents professional authority.
- **Background (#FAF9F6):** A warm off-white that prevents screen fatigue and differentiates the app from sterile, blue-white medical software.
- **Surface (#FFFFFF):** Reserved for cards and interactive containers to create a distinct layer against the warm background.
- **Accents:** The soft beige (#F5F0E6) is used for secondary UI elements like tags or subtle section headers, while the light pale green (#E8F2EC) is used for success states and background fills for active menu items.
- **Typography:** Dark charcoal (#333333) provides high legibility for headers without the harshness of pure black. Soft grey (#666666) is used for metadata and helper text.

## Typography

This design system employs a dual-font strategy to balance character with utility. 

**Outfit** is used for headlines to provide a modern, premium geometric feel. It conveys the "SaaS-grade" quality through its clean curves and professional stature. **Inter** is used for all body text and UI labels due to its exceptional legibility at small sizes and its neutral, systematic nature.

For information hierarchy:
- Use `display-lg` for dashboard hero greetings or key metric highlights.
- Use `label-sm` in all-caps for overline category titles (e.g., "DAILY PROGRESS").
- Maintain generous line heights to ensure a "breathable" reading experience, essential for nutritional plans and long-form advice.

## Layout & Spacing

The layout philosophy follows a **fluid grid** model with strict adherence to a vertical rhythm based on 8px increments. 

On **Desktop**, a 12-column grid is used with a maximum container width of 1200px to ensure content does not become unreadable on ultrawide monitors. Sidebars should be fixed (280px) while the main content area remains fluid.

On **Mobile**, the design shifts to a single column with 20px side margins. Cards should span the full width of the safe area. 

Spacing is intentionally "loose." Use `lg` (40px) or `xl` (64px) between major sections to emphasize the minimalist aesthetic. Elements within a card should use `sm` (12px) or `md` (24px) padding to maintain internal cohesion.

## Elevation & Depth

To maintain a clean, professional feel, this design system avoids heavy drop shadows. Instead, it utilizes **Tonal Layers** and **Soft Ambient Occlusion**.

- **Level 0 (Background):** The warm off-white surface (#FAF9F6).
- **Level 1 (Cards/Content):** Pure white (#FFFFFF) with a very subtle, highly diffused shadow (0px 4px 20px rgba(45, 79, 61, 0.05)). This shadow uses a hint of the primary green color to keep the depth feeling organic rather than grey/dirty.
- **Level 2 (Modals/Overlays):** Pure white with a more pronounced shadow (0px 12px 40px rgba(0, 0, 0, 0.08)).

Interactive elements like buttons do not "pop" with shadows; they use color shifts to indicate state.

## Shapes

The shape language is defined by significant roundedness to evoke a "friendly-professional" and modern mobile-app atmosphere. 

Primary containers and cards use a **24px (2xl/3xl)** corner radius. This creates a soft, approachable frame for data. Buttons and input fields use a **12px** radius, ensuring they feel integrated with the larger containers but distinct enough to appear interactive. Small UI elements like badges or chips use a full pill-shape for maximum distinction from square-ish text blocks.

## Components

### Buttons
- **Primary:** Background #2D4F3D, Text #FFFFFF. No border. High-end, solid appearance.
- **Secondary:** Background #F5F0E6, Text #2D4F3D. For less urgent actions like "Save Draft."
- **Ghost:** Transparent background, Text #2D4F3D. Used for "Cancel" or utility actions.

### Input Fields
Inputs should be large (min-height 48px) with #F5F0E6 backgrounds and no border in their default state. On focus, they transition to a white background with a 1px solid #2D4F3D border. This "hollow out" effect creates a clear visual cue for active typing.

### Cards
Cards are the primary vehicle for information. They must have a white background (#FFFFFF) and 24px padding. Titles within cards should always use `headline-md` or `label-md` depending on the complexity of the data.

### Progress Indicators
Avoid "gym-style" ring charts. Use sleek, thin horizontal bars with #2D4F3D as the fill and #E8F2EC as the track. This maintains the professional, SaaS-grade look.

### Lists
Client lists or food logs should use "Invisible Dividers"—utilizing whitespace (`spacing.md`) rather than physical lines where possible. If lines are necessary, use 1px solid #F5F0E6.