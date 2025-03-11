import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './EditArticle.css';

const EditArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState({ title: '', author: '', body: '' }); // Changed content to body
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        } else {
          setError('No such document!');
        }
      } catch (err) {
        setError('Error fetching article: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'articles', id);
      await updateDoc(docRef, article);
      navigate('/'); // Navigate back to home after updating
    } catch (error) {
      console.error("Error updating article: ", error);
      setError('Error updating article: ' + error.message);
    }
  };

  if (loading) {
    return <div>Loading article...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="edit-article">
      <h2>Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleChange}
            required
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input
            type="text"
            name="author"
            value={article.author}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Body:</span> {/* Changed from Content to Body */}
          <textarea
            name="body" // Changed from content to body
            value={article.body} // Changed from article.content to article.body
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default EditArticle;