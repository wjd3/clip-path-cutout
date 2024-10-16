# Clip Path Cutout Generator

This project provides a TypeScript function to generate a clip-path CSS property value for creating circular cutouts in HTML elements. Other shapes like triangles, square, octagons, etc. are supported by lowering the `precision` parameter to below 32.

For example, a `precision` value of `4` will generate a triangle cutout. Increasing the `precision` to `5` adds a side to the shape, getting you a square cutout.

## Features

- Generate a clip-path polygon for circular cutouts
- Customizable parameters for precise control
- Option to apply the generated clip-path directly to an HTML element
- Written in TypeScript for type safety

## Usage

The `clipPathCutout` function accepts an object with the following optional parameters:

- `precision`: Number of points to use for the circle approximation (default: 128)
- `diameter`: Diameter of the circular cutout in percentage (default: 50)
- `rotation`: Rotation of the cutout in degrees (default: 0)
- `offsetX`: Horizontal offset of the cutout center in percentage (default: 0)
- `offsetY`: Vertical offset of the cutout center in percentage (default: 0)
- `stretchX`: Horizontal stretch factor (default: 1)
- `stretchY`: Vertical stretch factor (default: 1)
- `element`: HTMLElement to apply the clip-path to (optional)

### Example

```typescript
// Generate a clip-path string for use in CSS or as an HTML `style` attribute
const clipPath = clipPathCutout({
	diameter: 60,
	rotation: 45,
	offsetX: 10,
	offsetY: -5,
	stretchX: 1.2,
	stretchY: 0.8
})
console.log(clipPath)

// Apply to an HTML element
const element = document.getElementById('my-element')
clipPathCutout({
	diameter: 70,
	element: element
})
```

## Installation

1. Clone this repository
1. Install dependencies (if any) using `npm install`
1. Import the `clipPathCutout` function from `index.ts` in your project

## License

MIT
