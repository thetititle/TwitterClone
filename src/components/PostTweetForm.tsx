import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextArea = styled.textarea`
  border: 2px solid #ffffff;
  padding: 20px;
  border-radius: 20px;
  font-family: 'AppleSDGothicNeoR00';
  font-size: 16px;
  line-height: 1.5;
  background-color: #000000;
  color: ghostwhite;
  width: 100%;
  resize: none;
  transition: 0.3s;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: inset 0 0 0 5px #1d9bf0;
    transition: 0.3s;
  }
  &::placeholder {
    font-size: 16px;
    font-family: 'AppleSDGothicNeoR00';
  }
`;
const FileUploadBtn = styled.label`
  padding: 0 10px;
  color: #1d9df0;
  text-align: center;
  border-radius: 30px;
  border: 1px solid #1d9df0;
  font-family: 'AppleSDGothicNeoEB00';
  font-size: 14px;
  line-height: 50px;
  height: 50px;
  cursor: pointer;
  // transition: 0.3s;
  // &:hover {
  //   color: #ffffff;
  //   background-color: #1d9bf0;
  //   transition: 0.3s;
  // }
`;
const InputTypeFile = styled.input`
  display: none;
`;
const SubmitBtn = styled.input`
  background-color: #1d9bf0;
  color: #ffffff;
  border: none;
  padding: 0 10px;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  font-family: 'AppleSDGothicNeoEB00';
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
  &:hover,
  &:active {
    background-color: #0060a1;
    transition: 0.3s;
  }
`;

export default function PostTweetForm() {
  const [isLoading, setLoading] = useState(false);
  const [tweet, setTweet] = useState('');
  const [hasFile, setFile] = useState<File | null>(null);

  const onTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTweet(e.target.value);
  };
  const onFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e);
    const { files } = e.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };
  return (
    <Form>
      <TextArea
        rows={5}
        maxLength={150}
        placeholder="무슨일이 일어나고 있나요?"
        value={tweet}
        onChange={onTextChange}
      />
      <FileUploadBtn htmlFor="file">
        {hasFile ? 'Added photo' : 'Add photo'}
      </FileUploadBtn>
      <InputTypeFile
        type="file"
        id="file"
        accept="image/*"
        onChange={onFileChange}
      />
      <SubmitBtn
        type="submit"
        value={isLoading ? 'Posting now' : 'Post Tweet'}
      />
    </Form>
  );
}
