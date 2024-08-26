import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
type Gallery={
  id: number;
  urls: {
    small: string;
    full: string;
  }
  alt_description: string;
}
type Props={
  items:Gallery[];
   
  
  onImageClick:(image: { url: string; alt: string }) => void;
}
const ImageGallery:React.FC<Props> = ({ items, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {items.map(item => (
        <li key={item.id} className={s.galleryItem}>
          <ImageCard
            src={item.urls.small}
            alt={item.alt_description}
            onImageClick={() => onImageClick({ url: item.urls.full, alt: item.alt_description })}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
