import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/cateogires-preview.component";
import Category from "../category/category.component";
import "./shop.styles.scss";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesStart } from "../../store/categories/category.action";
// import { CategoriesProvider } from "../../contexts/categories.context";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
