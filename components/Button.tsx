"use client";

import { z } from "zod";
import Image from "next/image";
import Link from "next/link";

// Button component to be use throw the app. Added more features. Maybe look back and improve the code to be more reuseable in more situations.

export const customButtonPropsSchema = z.object({
  title: z.string(),
  link: z.string().optional(),
  isDisabled: z.boolean().optional(),
  btnType: z.enum(["button", "submit"]).optional(),
  containerStyles: z.string().optional(),
  textStyles: z.string().optional(),
  arrowIcon: z.string().optional(),
  handleClick: z.function().optional(),
  value: z.string().optional(),
});

export type CustomButtonProps = z.infer<typeof customButtonPropsSchema>;

const Button = ({
  title,
  link,
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  arrowIcon,
  handleClick,
  value,
}: CustomButtonProps) => (
  <>
    {link ? (
      <Link
        href={link}
        className={`inline-block outline-none ${containerStyles}`}
      >
        <span className={`${textStyles}`}>{title}</span>
        {arrowIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={arrowIcon}
              alt="arrow_left"
              fill
              className="object-contain"
            />
          </div>
        )}
      </Link>
    ) : (
      <button
        disabled={isDisabled}
        type={btnType || "button"}
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
        onClick={handleClick}
        value={value}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {arrowIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={arrowIcon}
              alt="arrow_left"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    )}
  </>
);

export default Button;
