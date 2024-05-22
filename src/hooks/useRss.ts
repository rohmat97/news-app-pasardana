import { useEffect, useState } from "react";

export const useRss = () => {
    const [feedData, setFeedData] = useState(null);
    const invalidate = async () => {
        try {
          const response = await fetch(
            'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fpasardana.id%2Frss'
            );
          const data = await response.json();
          setFeedData(data.items);
          
        } catch (error) {
          console.error('Error fetching RSS feed:', error);
        }
      };

    useEffect(() => {
        invalidate();
    }, []);

    return {feedData, invalidate}
}