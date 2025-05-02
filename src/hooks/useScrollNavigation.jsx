"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = ["/", "/about", "/service", "/projects", "/blog", "/contact"];

export const useScrollNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [touchStartY, setTouchStartY] = useState(null);

  useEffect(() => {
    const handleWheel = (event) => {
      const now = Date.now();
      if (now - lastScrollTime < 1000 || isNavigating) {
        return;
      }
      setLastScrollTime(now);
      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      if (event.deltaY > 0) {
        if (currentIndex < ROUTES.length - 1) {
          setIsNavigating(true);
          router.push(ROUTES[currentIndex + 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        }
      } else if (event.deltaY < 0) {
        if (currentIndex > 0) {
          setIsNavigating(true);
          router.push(ROUTES[currentIndex - 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      if (touchStartY === null) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchDiff = touchEndY - touchStartY;
      if (Math.abs(touchDiff) < 50) return;
      const now = Date.now();
      if (now - lastScrollTime < 1000 || isNavigating) {
        return;
      }

      setLastScrollTime(now);

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      if (touchDiff < 0) {
        if (currentIndex < ROUTES.length - 1) {
          setIsNavigating(true);
          router.push(ROUTES[currentIndex + 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        }
      } else {
        if (currentIndex > 0) {
          setIsNavigating(true);
          router.push(ROUTES[currentIndex - 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        }
      }
      setTouchStartY(null);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, router, lastScrollTime, isNavigating, touchStartY]);

  const navigateToNextPage = () => {
    const currentIndex = ROUTES.indexOf(pathname);
    if (currentIndex < ROUTES.length - 1) {
      router.push(ROUTES[currentIndex + 1]);
    }
  };

  const navigateToPrevPage = () => {
    const currentIndex = ROUTES.indexOf(pathname);
    if (currentIndex > 0) {
      router.push(ROUTES[currentIndex - 1]);
    }
  };

  return { navigateToNextPage, navigateToPrevPage };
};
