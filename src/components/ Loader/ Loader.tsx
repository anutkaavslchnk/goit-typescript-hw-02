import { PuffLoader } from "react-spinners";

type Props={

}
const  Loader:React.FC<Props> = () => {
  return (<>
  <PuffLoader
  color="#1cb3e6"
  cssOverride={{}}
  size={80}
/>
  
  </>)
};

export default  Loader;
