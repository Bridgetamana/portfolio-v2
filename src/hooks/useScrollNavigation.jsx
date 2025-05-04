"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const ROUTES = ["/", "/about", "/service", "/projects", "/blog", "/contact"];

export const useScrollNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [touchStartY, setTouchStartY] = useState(null);
  const scrollTimeout = useRef(null);
  const shouldNavigate = (direction) => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
    const atTop = scrollTop <= 10;
    return (direction === "down" && atBottom) || (direction === "up" && atTop);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      const now = Date.now();
      if (now - lastScrollTime < 1000 || isNavigating) {
        return;
      }

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) return;

      const direction = event.deltaY > 0 ? "down" : "up";

      // Only navigate if we're at the edge of the page
      if (shouldNavigate(direction)) {
        setLastScrollTime(now);

        if (direction === "down" && currentIndex < ROUTES.length - 1) {
          setIsNavigating(true);
          router.push(ROUTES[currentIndex + 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        } else if (direction === "up" && currentIndex > 0) {
          setIsNavigating(true);
          router.push(ROUTES[currentIndex - 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (touchStartY === null) return;
      const touchY = e.touches[0].clientY;
      const touchDiff = touchY - touchStartY;
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      const atTop = scrollTop <= 10;

      if ((atBottom && touchDiff > 0) || (atTop && touchDiff < 0)) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (touchStartY === null) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchDiff = touchEndY - touchStartY;

      if (Math.abs(touchDiff) < 100) {
        setTouchStartY(null);
        return;
      }
      const now = Date.now();
      if (now - lastScrollTime < 1000 || isNavigating) {
        setTouchStartY(null);
        return;
      }

      const currentIndex = ROUTES.indexOf(pathname);
      if (currentIndex === -1) {
        setTouchStartY(null);
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      const atTop = scrollTop <= 10;

      if (touchDiff < 0 && atBottom) {
        if (currentIndex < ROUTES.length - 1) {
          setLastScrollTime(now);
          setIsNavigating(true);
          router.push(ROUTES[currentIndex + 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        }
      } else if (touchDiff > 0 && atTop) {
        if (currentIndex > 0) {
          setLastScrollTime(now);
          setIsNavigating(true);
          router.push(ROUTES[currentIndex - 1]);
          setTimeout(() => setIsNavigating(false), 1000);
        }
      }

      setTouchStartY(null);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
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
