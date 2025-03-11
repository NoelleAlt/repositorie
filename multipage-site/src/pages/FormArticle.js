import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config'
// styles
import './create.css'

export default function Create() {  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('') // Changed from description to body
  
  const navigate = useNavigate()
  
  const { urlId } = useParams();

  useEffect(() => {
    if(urlId){
      const ref = doc(db, 'articles', urlId);    
      
      getDoc(ref).then((snapshot) => {
        const article = snapshot.data();
        if(article){
          setTitle(article.title);
          setBody(article.body); // Changed from setDescription to setBody
          setAuthor(article.author);
        } else {
          navigate('/')
        }
      })     
    }
  }, [urlId, navigate]); // Added urlId and navigate to dependency array

  const handleSubmit = async (e) => {
    e.preventDefault()  
    const article = { title, author, body }; // Changed from description to body

    if(urlId){ 
      const ref = doc(db, 'articles', urlId);     
      await updateDoc(ref, article)  
    } else {      
      const ref = collection(db, 'articles')
      await addDoc(ref, article)
    } 
    
    // Clear the form fields after submission
    setTitle("");
    setAuthor("");
    setBody(""); // Changed from setDescription to setBody

    navigate('/')
  } 

  return (
    <div className="create">
      <h2 className="page-title">Add a New Article</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input 
            type="text" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </label>

        <label>
          <span>Body:</span> {/* Changed from Description to Body */}
          <textarea 
            onChange={(e) => setBody(e.target.value)} // Changed from setDescription to setBody
            value={body} // Changed from description to body
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}