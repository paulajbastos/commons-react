import React, { MouseEvent } from "react";

import "./buttons.css";

import Link from "next/link";

interface ButtonProps {
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  type?: "submit" | "button" | "reset";
  href?: string;
  id?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  size = "large",
  loading,
  disabled,
  className,
  type,
  href,
  id,
  target,
  ...rest
}) => {
  const buttonClass = [
    "button",
    `button--${size}`,
    `button--${color}`,
    `${disabled ? "button--disabled" : ""}`,
  ].join(" ");

  // const buttonClass = classNames(
  //   styles.button,
  //   styles[size],
  //   styles[color],
  //   styles[variant],
  //   className,
  //   useSpacing(spacing),
  //   {
  //     [styles.disabled]: disabled,
  //     [styles.shadow]: shadow,
  //     [styles.loading]: loading,
  //     [styles.fullWidth]: fullWidth,
  //   }
  // );

  const doClientsideRouting =
    href && (href.startsWith("/") || href.startsWith("#"));

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClass} type={type} {...rest}>
        {loading && <div className="button--loading-icon" />}
        {children}
      </button>
    );
  }

  if (doClientsideRouting && href) {
    return (
      <Link legacyBehavior href={href}>
        <a className="link" href={href}>
          {loading && <div className="button--loading-icon" />}
          {children}
        </a>
      </Link>
    );
  }

  if (!onClick && !href) {
    return (
      <span className={buttonClass} id={id} {...rest}>
        {loading && <div className="button--loading-icon" />}
        {children}
      </span>
    );
  }

  return (
    <a className={buttonClass} href={href} target={target} id={id} {...rest}>
      {loading && <div className="button--loading-icon" />}
      {children}
    </a>
  );
};

export default Button;
