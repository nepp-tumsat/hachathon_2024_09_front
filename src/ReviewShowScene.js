import './/ReviewShowScene.css';

function App() {
  const posts = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    text: `これは投稿番号 ${index + 1} です。読書祭りのタイムラインにようこそ！`
  }));

  return (
    <div className="App">
      <header className="App-header">
        <h1>祭りだ！祭りだ！読書祭りだ！！！</h1>
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