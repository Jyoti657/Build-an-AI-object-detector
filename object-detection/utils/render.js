// utils/render.js
export function renderPredictions(predictions, ctx) {
    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction.bbox;
      const text = prediction.class;
  
      // Draw bounding box
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
  
      // Draw label background
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(text).width;
      const textHeight = 16;
      ctx.fillRect(x, y, textWidth + 10, textHeight + 5);
  
      // Draw text
      ctx.fillStyle = "#000000";
      ctx.font = "16px Arial";
      ctx.fillText(text, x + 5, y + textHeight);
    });
  }
  