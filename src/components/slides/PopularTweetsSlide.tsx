
import React from 'react';
import Slide from '@/components/Slide';
import TweetCard from '@/components/TweetCard';
import { mostRTTweets } from '@/data/reportData';

const PopularTweetsSlide = () => {
  return (
    <Slide title="5. En Popüler Tweetler" bgColor="bg-gradient-to-br from-white via-rose-50 to-rose-100">
      <div className="space-y-6">
        {mostRTTweets.slice(0, 3).map((tweet, index) => (
          <TweetCard
            key={index}
            id={tweet.id}
            content={tweet.text}
            retweets={tweet.rt}
            likes={tweet.likes}
            views={tweet.views}
            replies={Math.round(tweet.likes * 0.15)}
            isPopular={index === 0}
            author={tweet.author}
            handle={tweet.handle}
            verified={tweet.verified}
            timestamp={new Date(2025, 4, 8 + index)}
          />
        ))}
      </div>
    </Slide>
  );
};

export default PopularTweetsSlide;
