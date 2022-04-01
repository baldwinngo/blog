import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'title 1', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'title 2', body: 'lorem ipsum...', author: 'luigi', id: 2 },
    { title: 'title 3', body: 'lorem ipsum...', author: 'toad', id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return ( 
    <div className="home">
      <BlogList blogs={ blogs } title="All Blogs" handleDelete={ handleDelete }/>
    </div>
   );
}
 
export default Home;
