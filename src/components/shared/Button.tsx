interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
 }
const Button = ({title  ,...props} : ButtonProps) => {
   return (
      <button
         className="bg-secondary p-1.5 rounded text-white uppercase"
         {...props}
      >
         {title}
      </button>
   )
}

export default Button