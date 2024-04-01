import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import Tweet from './Tweet';
export interface Itweet {
  id: string;
  imgUrl?: string;
  tweet: string;
  userId: string;
  userName: string;
  creatAt: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function TimeLine() {
  const [tweet, setTweet] = useState<Itweet[]>([]);

  const fetchTweet = async () => {
    const tweetQuery = query(
      collection(db, 'tweets'),
      orderBy('creatAt', 'desc')
    );
    const querySnapshot = await getDocs(tweetQuery);
    const tweet = querySnapshot.docs.map((doc) => {
      const { creatAt, imgUrl, tweet, userId, userName } =
        doc.data();
      return {
        creatAt,
        imgUrl,
        tweet,
        userId,
        userName,
        id: doc.id,
      };
    });
    setTweet(tweet);
    console.log('tweet', tweet);
  };

  useEffect(() => {
    fetchTweet();
  }, []);
  return (
    <Wrapper>
      {tweet.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
