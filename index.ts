const clipPathCutout = ({
	precision = 128,
	diameter = 50,
	rotation = 0,
	offsetX = 0,
	offsetY = 0,
	stretchX = 1,
	stretchY = 1,
	element
}: {
	precision?: number
	diameter?: number
	rotation?: number
	offsetX?: number
	offsetY?: number
	stretchX?: number
	stretchY?: number
	element?: HTMLElement
}): string => {
	const radius = diameter / 2
	const circlePoints = Array.from({ length: precision }, (_, i) => {
		const angle = (-i / (precision - 1)) * Math.PI * 2 + (rotation * Math.PI) / 180
		const x = Math.cos(angle) * radius * stretchX + 50 + offsetX
		const y = Math.sin(angle) * radius * stretchY + 50 + offsetY
		return `${x}% ${y}%`
	})

	const polygon = `polygon(100% 50%, 100% 100%, 0 100%, 0 0, 100% 0, 100% 50%, ${circlePoints.join(',')})`
	const clipPathStyle = `clip-path: ${polygon};`

	if (element instanceof HTMLElement && element.style) {
		element.style.clipPath = clipPathStyle
	}

	return clipPathStyle
}

export { clipPathCutout }
