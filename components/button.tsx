import Link from "next/link";
import React from "react";

const Button = ({ children, href }: BaseProps & { href?: string }) => {
  const Comp = () => (
    <div className="bg-primary text-white px-10 py-2.5 w-fit cursor-pointer rounded">
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <Comp />
      </Link>
    );
  }

  return <Comp />;
};

export default Button;
