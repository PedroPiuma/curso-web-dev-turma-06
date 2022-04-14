import "./Text.css";

const Text = (props) => {
  const { children, fontSize = "md", as = "p", className = "", align = '' } = props;
  const Component = as;
  return (
    <Component className={`font-${fontSize} ${className ? className : " "} font-align-${align}`}>
      {children}
    </Component>
  );
};

export default Text;
