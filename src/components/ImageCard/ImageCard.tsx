import s from './ImageCard.module.css';
type Props={
  src:string;
  alt:string;
  onImageClick:()=>void;
}
const ImageCard:React.FC<Props> = ({ src, alt, onImageClick }) => {
  return (
    <img
      className={s.image}
      src={src}
      alt={alt}
      onClick={onImageClick}
    />
  );
};

export default ImageCard;
