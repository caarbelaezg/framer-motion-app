import { useScroll, useTransform } from "framer-motion";

export const useFadeOutScroll = (xValues, opacityValues) => {
  const { scrollY } = useScroll();
  console.log(xValues)

  const x = useTransform(scrollY, xValues.from, xValues.to);
  const opacity = useTransform(scrollY, opacityValues.from, opacityValues.to);

  return {
    x,
    opacity,
  };
};
