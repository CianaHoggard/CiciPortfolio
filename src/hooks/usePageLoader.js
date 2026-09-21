import { useEffect, useState } from "react";

export default function usePageLoader(pathname) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    setLoaded(false);

    const timer = setTimeout(() => {
      const images = Array.from(document.images);

      const imagePromises = images.map((img) => {
        if (img.complete) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          const done = () => resolve();

          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        });
      });

      Promise.all(imagePromises).then(() => {
        if (!cancelled) {
            setLoaded(true);
          };
        }
      );
    }, 0);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [pathname]);

  return loaded;
}
