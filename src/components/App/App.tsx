import {  useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../ Loader/ Loader";

import LoadMoreBtn from "../ LoadMoreBtn / LoadMoreBtn";
import ImageModal from "../ ImageModal/ ImageModal";
import ErrorMessage from "../ ErrorMessage/ ErrorMessage";
import { fetchGallery } from "../../services/api";
import { FormikHelpers } from "formik";




type Props={

    url:string;
  
    id: number;
    title: string;
  
}
type User={
  url:string;
  alt:string;
}

type GalleryItem = {
  id: number;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
};
type FormValues = {
  query: string;
};
const App = () => {
  const [hits, setHits] = useState<GalleryItem[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<User>({ url: "", alt: "" });



  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    setQuery(values.query);
    setHits([]);
    setPage(1);
    actions.setSubmitting(false);
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setError(false);
        setIsLoading(true);
        const response = await fetchGallery(query, page);
        setHits((prev) => [...prev, ...response.results]);
        setShowLoadMore(!!(response.total_pages && response.total_pages !== page));

      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const pages = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = ({ url, alt }:User) => {
    setSelectedImage({ url, alt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
   
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery items={hits} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {showLoadMore && <LoadMoreBtn pages={pages}></LoadMoreBtn>}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage.url}
        imageAlt={selectedImage.alt}
      />
    </>
  );
};

export default App;
