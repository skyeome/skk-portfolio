export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  align?: "left" | "center" | "right";
  color?: "black" | "white";
  lineHeight?: number;
  fontSize?: number;
  fontWeight?: "bold" | "normal";
};

export interface TypographyStyledProps {
  $align?: "left" | "center" | "right";
  $color?: "black" | "white";
  $lineHeight?: string;
  $fontSize?: string;
  $fontWeight?: "bold" | "normal";
}
