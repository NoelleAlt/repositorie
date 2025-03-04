// Article.js

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase/config';

export default function Article() {
  const { urlId } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const ref = doc(db, "articles", urlId);
        const snapshot = await getDoc(ref);
        
        if (snapshot.exists()) {
          setArticle({ id: snapshot.id, ...snapshot.data() });
        } else {
          setError("No records found!");
        }
      } catch (err) {
        setError("Error fetching article: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();

    // Cleanup function (if needed)
    return () => {
      // Any cleanup logic can go here
    };
  }, [urlId]);

  // Redirect to home if there's an error after a delay
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [error, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}