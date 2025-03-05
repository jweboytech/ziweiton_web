import Link from "next/link";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "bg-primary text-white px-8 py-2.5 cursor-pointer rounded text-base inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        //   primary: "bg-primary text-white hover:bg-primary/90",
        //   default:
        //     "bg-white text-black-80 font-semibold border-[2px] border-black-40",
        bordered: "bg-transport border border-primary text-primary",
        //   ghost: "border-none font-normal",
        //   // outline:
        //   //   "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        //   // secondary:
        //   //   "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        //   // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // sm: "h-8 rounded-md px-3 text-xs",
        // lg: "h-10 rounded-md px-8",
        // icon: "h-9 w-9",
        xs: "w-20 h-8 text-xs",
        sm: "w-30 h-9 text-base",
        md: "w-30 h-12 text-lg",
        default: "h-10 w-35",
        lg: "w-62 h-16 text-lg",
      },
      isDisabled: {
        true: "opacity-50 cursor-not-allowed", // 禁用按钮的样式
        false: "", // 正常按钮的样式，不做额外处理
      },
      fullWidth: {
        true: "w-full h-14",
        false: "",
      },
      ghost: {
        true: "border-white text-white",
      },
    },
    defaultVariants: {
      // variant: "default",
      size: "default",
      isDisabled: false, // 默认不禁用
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  fullWidth?: boolean;
}

const Button = ({ children, href, variant }: ButtonProps) => {
  const Comp = () => (
    <button
      className={cn(
        buttonVariants({
          variant,
        })
      )}
    >
      {children}
    </button>
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
