import React, { useState } from 'react';
import styled from 'styled-components';
import StarRating from './StarRating'; // StarRatingコンポーネントをインポート
import CommentSection from './CommentSection'; // CommentSectionコンポーネントをインポート

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffe0; /* 背景色を黄色に変更 */
  font-family: Arial, sans-serif;
`;

const CenteredContent = styled.div`
  text-align: center;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: ${props => (props.disabled ? '#6c757d' : '#007bff')};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

function App() {
  const [rating, setRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePost = async () => {
    if (newComment.trim() && rating > 0) {
      setIsLoading(true);
      setError(null);

      const postData = {
        rating,
        comment: newComment,
      };

      try {
        const response = await fetch('https://your-api-endpoint.com/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });

        if (!response.ok) {
          throw new Error('APIリクエストが失敗しました');
        }

        const data = await response.json();
        console.log('APIレスポンス:', data);

        alert(`評価: ${rating} 星\nコメント: ${newComment}\n投稿が完了しました！`);
        setNewComment('');
        setRating(0);
      } catch (error) {
        console.error('エラー:', error);
        setError('投稿に失敗しました。もう一度お試しください。');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('評価とコメントを入力してください。');
    }
  };

  return (
    <Container>
      <CenteredContent>
        <h1>本のレビューを書こう！</h1>
        <CommentSection
          newComment={newComment}
          onCommentChange={setNewComment}
        />
        <h2>総合評価</h2>
        <RatingContainer>
          <StarRating rating={rating} onRatingChange={setRating} />
        </RatingContainer>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button onClick={handlePost} disabled={isLoading}>
          {isLoading ? '投稿中...' : '投稿する'}
        </Button>
      </CenteredContent>
    </Container>
  );
}

export default App;
