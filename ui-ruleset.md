# UI Ruleset & Design System

This document defines the visual language, theming, and layout patterns for the application, based on the provided design references.

## 1. Core Philosophy
- **Clean & Modern**: The interface prioritizes whitespace, clear hierarchy, and a clutter-free environment.
- **Soft & Organic**: Use rounded corners, soft shadows, and earthy/natural tones to create a welcoming feel.
- **Data-Centric**: Information is presented clearly in cards and tables with high legibility.

## 2. Color Palette

### Primary Colors
- **Forest Green**: `#2E7D32` (Used for primary actions, active states, branding)
- **Sage Green**: `#E8F5E9` (Used for backgrounds of active items, light accents)

### Neutral Tones
- **Background**: `#F8F9FA` (Main app background, slightly off-white)
- **Surface**: `#FFFFFF` (Card backgrounds, sidebar)
- **Text Primary**: `#1A1A1A` (Headings, main content)
- **Text Secondary**: `#757575` (Subtitles, metadata)
- **Border**: `#E0E0E0` (Dividers, card borders)

### Accent Colors
- **Alert/Error**: `#D32F2F` (Softened red)
- **Warning**: `#F9A825` (Muted yellow/gold)
- **Info**: `#0288D1` (Muted blue)

## 3. Typography

### Font Family
- **Primary**: `Inter` or `Roboto` (Clean sans-serif for maximum legibility)
- **Headings**: Optional Serif (e.g., `Playfair Display`) for high-level branding (Login page), but Sans-serif is preferred for the Dashboard UI.

### Scale
- **H1**: 24px - 32px, Bold (Page Titles)
- **H2**: 20px - 24px, Semi-Bold (Section Headers)
- **H3**: 16px - 18px, Medium (Card Titles)
- **Body**: 14px, Regular (Standard text)
- **Small**: 12px, Regular (Metadata, captions)

## 4. Layout Patterns

### Dashboard Structure
- **Sidebar Navigation**:
  - Fixed width (approx 240px-280px).
  - Light background (`#FFFFFF`).
  - Clear separation of "Main" and "Management" sections.
  - Active state: Light green background with dark green text and border-left indicator.
- **Top Bar**:
  - Minimal height (approx 64px).
  - Contains global search, notifications, and user profile.
  - Blends with the background or has a transparent/glassmorphism effect.
- **Main Content Area**:
  - Grid-based layout for widgets.
  - Padding: 24px - 32px around the content area.

### Card System
- **Container**: White background, rounded corners (`border-radius: 16px`).
- **Shadow**: Soft, diffused shadow (e.g., `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05)`).
- **Spacing**: Internal padding of 20px-24px.

## 5. Component Styles

### Buttons
- **Primary**: Forest Green background, White text, Rounded corners (8px-12px). No harsh gradients.
- **Secondary**: Transparent/White background, Bordered or subtle gray background.
- **Icon Buttons**: Circular or rounded square, subtle hover effect (light gray background).

### Inputs
- **Fields**: White background, light gray border (`#E0E0E0`), rounded corners (8px).
- **Focus State**: Green border ring/glow.

### Data Visualization
- **Charts**: Use smooth curves (spline charts).
- **Colors**: Use the primary green and secondary accents (blue, purple) in muted tones.
- **Gradients**: Subtle vertical gradients under line charts (fade to transparent).

## 6. Interaction Design
- **Hover Effects**: Subtle lift (transform: translateY(-2px)) and increased shadow for clickable cards.
- **Transitions**: Smooth ease-in-out transitions (200ms-300ms) for all interactive elements.
