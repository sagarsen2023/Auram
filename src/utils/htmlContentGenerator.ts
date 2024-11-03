export default function htmlContentGenerator({
  htmlContent,
  fontSizeInPx,
  lineHeight,
  textAlignment = "left",
}: {
  htmlContent: string;
  fontSizeInPx?: number;
  lineHeight?: number;
  textAlignment?: "left" | "center" | "right";
}) {
  return `
      <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: ${fontSizeInPx ?? 16}px;
  line-height: ${lineHeight ?? 1.5};
  padding: 0;
  margin: 0;
  text-align: ${textAlignment};
}
</style>
</head>
<body>
${htmlContent}
</body>
</html>`;
}
