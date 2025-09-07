# Build.Malaysia Design Principles

## Core Design Principles

### 1. Zero Corner Radius
**All elements must have sharp, square corners (border-radius: 0).**
- No rounded corners on buttons, cards, images, or any UI elements
- This creates a clean, modern, architectural aesthetic
- Maintains consistency with the Build.Malaysia brand identity

### 2. Black-First Monochrome Aesthetic
**Black backgrounds with white/gray accents for a bold, sophisticated look.**
- **Primary Background**: Pure black `#000000` / `bg-black`
- **Text & Accents**: Pure white `#FFFFFF` / `bg-white` and `text-white`
- **Lines & Borders**: White `border-white` or light gray `border-gray-300`
- **Secondary Elements**: Gray variations `gray-100` through `gray-800` for subtle contrast
- **Interactive Elements**: White backgrounds with black text for buttons and forms
- No blues, reds, greens, or any other colors - strictly monochrome

### 3. Typography
**Inter font family with clean, minimal typography.**
- Build.Malaysia logo: Inter Bold (700) for "Build", Inter Regular (400) for "Malaysia"
- Consistent font weights and sizes across all components
- Adequate line spacing for readability

### 4. Minimal and Clean Layout
**Embrace white space and clean, structured layouts.**
- Grid-based layouts with clear borders
- Generous padding and margins
- Clean separation between sections

### 5. Hover States
**Subtle, elegant hover interactions.**
- Color transitions on hover (grayscale to color for images)
- Background color changes within the monochrome palette
- Smooth transitions (duration-300)

## Implementation Guidelines

### Buttons
- `className="px-8 py-3"` - No `rounded-*` classes
- Primary: White background with black text `bg-white text-black`
- Secondary: Black background with white text `bg-black text-white`
- Sharp rectangular shape

### Cards/Containers
- Black backgrounds `bg-black` with white borders `border-white`
- White text `text-white` on black backgrounds
- Use borders instead of drop shadows
- No `rounded-*` classes

### Images
- Default: `grayscale` filter for monochrome aesthetic
- Hover: Remove grayscale filter to show color
- No `rounded-*` classes - keep rectangular

### Forms
- Input fields with sharp corners
- Clean borders without radius
- Focus states using border color changes

## Files to Review for Compliance

- All component files in `/app/components/`
- All route files in `/app/routes/`
- Global CSS styles in `/app/tailwind.css`
- Tailwind configuration in `tailwind.config.ts`