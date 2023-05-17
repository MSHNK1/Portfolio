import React, {useState, useEffect, useRef} from "react";

function NumberCounter({ number, content }) {
  const [count, setCount] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    if (count >= number) {
        return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && count < number) {
            const timer = setInterval(() => {
              setCount((count) => {
                if (count + 1 > number) {
                    return number;
                }
                return count + 1;
              });
            }, 200);

            return () => {
              clearInterval(timer);
            };
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust this threshold value as needed
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [count, number]);

  return (
    <div className="font-semibold" ref={targetRef}>
      <h1 className="text-xl laptop:text-3xl mb-2">{count}</h1>
      <h2 className="text-base laptop:text-lg">{content}</h2>
    </div>
  );
}

export default NumberCounter;