import { PropsWithChildren } from "react";
import * as Styled from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

const pxtorem = (px: number) => `${px / 16}rem`;

function Typography({
  align,
  color,
  lineHeight,
  fontSize,
  fontWeight,
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) {
  const rem = pxtorem(fontSize ?? 16);
  return (
    <Styled.Text
      $align={align}
      $color={color}
      $lineHeight={`${lineHeight}`}
      $fontSize={rem}
      $fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </Styled.Text>
  );
}

export default Typography;

function H2({
  align,
  color,
  fontWeight,
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) {
  return (
    <Styled.H2 $align={align} $color={color} $fontWeight={fontWeight} {...rest}>
      {children}
    </Styled.H2>
  );
}

function H3({
  align,
  color,
  fontWeight,
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) {
  return (
    <Styled.H3 $align={align} $color={color} $fontWeight={fontWeight} {...rest}>
      {children}
    </Styled.H3>
  );
}

Typography.H2 = H2;
Typography.H3 = H3;
