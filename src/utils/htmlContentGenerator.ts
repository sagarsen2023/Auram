import { useState, useCallback } from "react";
import { WebViewMessageEvent } from "react-native-webview";

export default function htmlContentGenerator({
  htmlContent,
  fontSizeInPx,
  lineHeight,
  textAlignment = "left",
  backgroundColor,
  textColor,
}: {
  htmlContent: string;
  fontSizeInPx?: number;
  lineHeight?: number;
  textAlignment?: "left" | "center" | "right";
  backgroundColor?: string;
  textColor?: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        html, body {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            background-color: ${backgroundColor ?? "transparent"};
            color: ${textColor ?? "black"};
          }
          div {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            font-size: ${fontSizeInPx ?? 16}px;
            line-height: ${lineHeight ?? 1.5};
            text-align: ${textAlignment};
          }
        </style>
        <script>
          window.addEventListener('load', () => {
            const height = document.body.scrollHeight;
            window.ReactNativeWebView.postMessage(height);
          });
        </script>
      </head>
      <body>
        <div>
          ${htmlContent}
        </div>
      </body>
    </html>`;
}

export const useWebViewHeight = (initialHeight = 500) => {
  const [webViewHeight, setWebViewHeight] = useState<number>(initialHeight);

  const handleWebViewMessage = useCallback(
    (event: WebViewMessageEvent) => {
      const height = Number(event.nativeEvent.data);
      if (height && height !== webViewHeight) {
        setWebViewHeight(height);
      }
    },
    [webViewHeight]
  );

  return [webViewHeight, handleWebViewMessage];
};
