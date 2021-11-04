import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    async function getDocument() {
      const docRef = doc(firestore, 'posts', postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        setPost(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    }
    getDocument();
  }, []);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
