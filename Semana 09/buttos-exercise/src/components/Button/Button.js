import "./Button.css";

const Button = (props) => {
  const { children, variant, isLoading, disabled, colorScheme = 'teal', ...rest } = props;
  console.log(rest);
  return (
    <button
      className={`button button__${colorScheme}__${variant} `}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
};

export default Button;
