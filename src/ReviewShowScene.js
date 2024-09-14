import './/ReviewShowScene.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [data, setData] = React.useState();
  const url = "http://localhost:8000/get_reviews";

  const GetData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    })
  }

  const posts = Array.from({ length: data ? data.length : 0}, (_, index) => ({
    id: index + 1,
    text: data && data[index] ? (index+1)+' : '+ data[index].title : 'データがありません'
  }));

  return (
    <div className="App">
      <header className="App-header">
        <h1>祭りだ！祭りだ！読書祭りだ！！！</h1>
        <h1>{GetData()}</h1>
      </header>

      <main className="body">
        <div>
          <p>読書祭り</p>
        </div>

        <div className='scroll-box'>
        {posts.map(post => (
            <div key={post.id} className="post-card">
              <p>{post.text}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

export default App;