import { PropsWithChildren } from "react";
import * as Styled from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

const pxtorem = (px: number) => `${px / 16}rem`;

function Typography({
  tag,
  align,
  color,
  lineHeight,
  fontSize,
  fontWeight,
  mt,
  mb,
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) {
  const fz = pxtorem(fontSize ?? 16);
  const mtrem = pxtorem(mt ?? 0);
  const mbrem = pxtorem(mb ?? 0);
  return (
    <Styled.Text
      as={tag}
      $align={align}
      $color={color}
      $lineHeight={`${lineHeight}`}
      $fontSize={fz}
      $fontWeight={fontWeight}
      $mt={mtrem}
      $mb={mbrem}
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
  mt,
  mb,
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) {
  const mtrem = pxtorem(mt ?? 0);
  const mbrem = pxtorem(mb ?? 0);
  return (
    <Styled.H2
      $align={align}
      $color={color}
      $fontWeight={fontWeight}
      $mt={mtrem}
      $mb={mbrem}
      {...rest}
    >
      {children}
    </Styled.H2>
  );
}

function H3({
  align,
  color,
  fontWeight,
  mt,
  mb,
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) {
  const mtrem = pxtorem(mt ?? 0);
  const mbrem = pxtorem(mb ?? 0);
  return (
    <Styled.H3
      $align={align}
      $color={color}
      $fontWeight={fontWeight}
      $mt={mtrem}
      $mb={mbrem}
      {...rest}
    >
      {children}
    </Styled.H3>
  );
}

Typography.H2 = H2;
Typography.H3 = H3;
