import { ReactNode } from "react";

interface IIcone {
    onClick: () => void,
    children: ReactNode
}
  
  const Icone = (props: IIcone) => {
    return (
        <div>
            {props.children}
        </div>
    )
  };
  
  export default Icone;
  