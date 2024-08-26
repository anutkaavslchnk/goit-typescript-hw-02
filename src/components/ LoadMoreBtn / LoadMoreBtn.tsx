import s from './ LoadMoreBtn.module.css';
console.log(s);

 type Props={
  pages:()=>void;
}
const LoadMoreBtn:React.FC<Props> = ({pages}) => {
  return (
    <>
    <button className={s.btnloadmore} onClick={pages}>Load more</button>
    </>
  )
};

export default  LoadMoreBtn;
