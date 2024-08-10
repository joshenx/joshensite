import styled from "styled-components";

interface FlexProps {
  $justifyContent?: string;
  $alignItems?: string;
  $flexDirection?: string;
  $gap?: number;
}

export const RowFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "flex-start"};
  gap: ${(props) => props.$gap || 0}px;
`;

export const ColFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "flex-start"};
  gap: ${(props) => props.$gap || 0}px;
`;
