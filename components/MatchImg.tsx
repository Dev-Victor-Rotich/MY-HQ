import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MatchImgVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<MatchImgVariant, string> = {
  extraSmall: "w-16 h-16",
  small: "w-24 h-24",
  medium: "w-40 h-40",
  regular: "w-64 h-64",
  wide: "w-full h-[800px]",
};

interface MatchImgProps {
  className?: string;
  variant?: MatchImgVariant;
  matchDayImage?: string;
}

const MatchImg = ({
  className,
  variant = "wide",
  matchDayImage = "https://placehold.co/400x600.png",
}: MatchImgProps) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={matchDayImage}
          alt="Match Day Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default MatchImg;
