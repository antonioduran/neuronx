import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from "react";
//import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
//import { setCategories } from '../../store/categories/categories.action';
//import { fetchCategoriesAsyc } from '../../store/categories/categories.action';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //const getCategoriesMap = async () => {
    //const categoriesArray = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesStart());
    //};
    //getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;