import { Link, useNavigate } from 'react-router-dom';
import { getDocs, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import DeleteIcon from '../assets/delete.svg';
import EditIcon from '../assets/edit.svg';

// Styles
import './Home.css';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const ref = collection(db, 'articles');

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setArticles(results);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching articles: ", error);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, 'articles', id));
      } catch (error) {
        console.error("Error deleting article: ", error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (loading) {
    return <div>Loading articles...</div>;
  }

  return (
    <div className="home">
      <h2>Articles</h2>
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        articles.map(article => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>Written by {article.author}</p>
            <Link to={`/articles/${article.id}`}>Read More...</Link>
            <img 
              className="icon"
              onClick={() => handleDelete(article.id)}
              src={DeleteIcon} 
              alt="delete icon" 
            />
            <img 
              className="icon"
              onClick={() => handleEdit(article.id)}
              src={EditIcon} 
              alt="edit icon" 
            />
          </div>
        ))
      )}
    </div>
  );
}