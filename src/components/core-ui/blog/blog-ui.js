import React, { useContext } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../contexts/theme-context';
import { blogData } from '../../../data/blogData';
import './blog.css';
import SingleBlog from './single-blog/single-blog';

const BlogUI = ({classes}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      
    </>
  );
};

export default BlogUI;