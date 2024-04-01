import styled from 'styled-components';
import { Itweet } from './TimeLine';
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;
const Column = styled.div``;
const UserNmae = styled.span`
  font-family: 'AppleSDGothicNeoEB00';
  font-size: 15px;
`;
const Payload = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;
const Photo = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 15px;
  object-fit: cover;
`;

export default function Tweet({
  userId,
  userName,
  imgUrl,
  creatAt,
  tweet,
}: Itweet) {
  return (
    <Wrapper>
      <Column>
        <UserNmae>{userName}</UserNmae>
        <Payload>{tweet}</Payload>
      </Column>
      {imgUrl ? (
        <Column>
          <Photo src={imgUrl} />
        </Column>
      ) : null}
    </Wrapper>
  );
}
