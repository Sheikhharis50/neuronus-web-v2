import Image, { type ImageProps } from "next/image";
import { forwardRef } from "react";

/** AVIF from /public — bypasses Turbopack static import and Next image optimization. */
const AvifImage = forwardRef<HTMLImageElement, ImageProps>(function AvifImage(
  props,
  ref,
) {
  return <Image {...props} ref={ref} unoptimized />;
});

export default AvifImage;
