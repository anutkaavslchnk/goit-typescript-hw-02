

// const Something = ({name, age}: Props) => {
//     return <div>{`Name is ${name}`}
//     </div>;
//   };
// type Props={
//     name:string;
//     age:number;
//     children:React.ReactElement;
// };
// const Something:React.FC<Props> = ({name, age, children}) => {
//   return <div>{`Name is ${name}`}
//   {children}
//   </div>;
// };

// export default Something;

// const Something = ({name, age, children}:Props) => {
//     return <div>{`Name is ${name}`}
//     {children}
//     </div>;
//   };
  
//   export default Something;

type User={
    name:string;
    email:string;
};
type Props={
    user:User;
    onUserUpdate:(user:User)=>void;
}


const Something = ({user, onUserUpdate}:Props) => {
  return null;
};

export default Something;
