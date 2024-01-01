import { useEffect, useState } from "react";

export default function ProgressBar({ value , onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);
  const MIN=0;
  const MAX=100;

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX));

    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span
        style={{
          color: percent > 49 ? "white" : "black"
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}