import s from './ ErrorMessage.module.css';
console.log(s);
type Props={

}
const  ErrorMessage:React.FC<Props> = () => {
  return (
    <p>Oops, something went wrong. Try to reload the page</p>
  )
};

export default  ErrorMessage;
