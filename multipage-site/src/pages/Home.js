import { Link } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useEffect, useState } from 'react'
//import { useFetch } from '../hooks/useFetch'

// styles
import './Home.css'

export default function Home() {

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const ref = collection(db, "articles");
    getDocs(ref)
     .then(snapshot => {
      let results = [];
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()});
      });

    setArticles(results);
    });
  }, []);

  return (
    <div className="home">
      <h2>Articles</h2>
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  )
}
