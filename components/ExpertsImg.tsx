import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ExpertsImgSvg from "@/components/ExpertsImgSvg";

type ExpertsImgVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<ExpertsImgVariant, string> = {
  extraSmall: "experts-img_extra-small",
  small: "experts-img_small",
  medium: "experts-img_medium",
  regular: "experts-img_regular",
  wide: "experts-img_wide",
};

interface Props {
  className?: string;
  variant?: ExpertsImgVariant;
  coverColor: string;
  coverImage?: string;
}

const ExpertsImg = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <ExpertsImgSvg coverColor={coverColor} />

      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverImage}
          alt="Expert Image"
          fill
          className="rounded-sm object-fill"
        />
      </div>
    </div>
  );
};

export default ExpertsImg;
