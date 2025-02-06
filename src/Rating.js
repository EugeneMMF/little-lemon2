import { useEffect, useRef } from "react";

export default function Rating({ props }) {
  const ref = useRef(null);

  const drawStars = () => {
    const canvas = ref.current;
    if (!ref.current) return;
    let context = canvas.getContext('2d');
    const [width, height] = [canvas.width, canvas.height];
    context.clearRect(0, 0, width, height);
    let level = Math.floor(props.rating / props.maxRating * 5);
    let number = props.maxRating;
    const fraction = Math.floor(width/number);
    const positionY = Math.floor(height/2);
    let positionX = Math.floor(fraction/2);
    let value = fraction;
    let angle = 90-72;
    let outerRadius = 0.9*Math.min(positionX, positionY);
    let innerRadius = 0.3*Math.min(positionX, positionY);
    context.strokeStyle = "#000000";
    context.fillStyle = "gold";
    context.beginPath();
    for (let i=0; i<number; i++) {
      angle = 90-72;
      for (let j=0; j<11; j++) {
        let x;
        let y;
        let angleRadians = angle*Math.PI/180;
        if ((j%2) == 0) {
          x = Math.floor(innerRadius * Math.cos(angleRadians) + positionX);
          y = Math.floor(innerRadius * Math.sin(angleRadians) + positionY);
        } else {
          x = Math.floor(outerRadius * Math.cos(angleRadians) + positionX);
          y = Math.floor(outerRadius * Math.sin(angleRadians) + positionY);
        }
        if (j == 0) {
          context.moveTo(x,y);
        } else {
          context.lineTo(x,y);
          context.stroke();
        }
        angle += 36;
      }
      if (i<level) {
        console.log("filling");
        context.fill();
      }
      positionX += value;
    }
  }

  useEffect(() => drawStars(), [ref]);

  return (
    <canvas width={props.width} height={props.height} ref={ref}></canvas>
  )
}