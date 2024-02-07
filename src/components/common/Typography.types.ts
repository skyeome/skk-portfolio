export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  tag?: string;
  align?: "left" | "center" | "right";
  color?: "black" | "white" | "gray";
  lineHeight?: number;
  fontSize?: number;
  fontWeight?: "bold" | "normal";
  mt?: number;
  mb?: number;
};

export interface TypographyStyledProps {
  $align?: "left" | "center" | "right";
  $color?: "black" | "white" | "gray";
  $lineHeight?: string;
  $fontSize?: string;
  $fontWeight?: "bold" | "normal";
  $mt?: string;
  $mb?: string;
}
