import { useEffect } from "react"

const InfiniteScroll = ({ hasMore, next, loading, children }) => {

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return; // Prevent loading if already loading or no more items
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Trigger next function when scrolled to the bottom
      if (scrollY + windowHeight >= documentHeight - 50 && hasMore) {
        next(); // Call the next function to load more items
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading, next]); // Added dependencies for exhaustive-deps

  return (
    <>
      {children}
      {loading && <div>Loading ....</div>} {/* Show loader if loading */}
    </>
  )

}

export default InfiniteScroll;