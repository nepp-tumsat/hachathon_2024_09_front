import logo from './logo.svg';
import './App.css';

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
        {posts.map(post => (
            <div key={post.id} className="post-card">
              <p>{post.text}</p>
            </div>
          ))}
      </main>

      <footer>
        <img src={logo} alt="App logo" />
      </footer>
    </div>
  );
}

export default App;