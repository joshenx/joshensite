import styled from "styled-components";

interface FlexProps {
  $justifyContent?: string;
  $alignItems?: string;
  $flexDirection?: string;
  $gap?: number;
  $wrap?: boolean;
  $grow?: number;
}
export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  align-items: ${(props) => props.$alignItems || "flex-start"};
  gap: ${(props) => props.$gap || 0}px;
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
  flex-grow: ${(props) => props.$grow || 0};
`;

export const RowFlex = styled(FlexContainer)`
  flex-direction: row;
`;

export const ColFlex = styled(FlexContainer)`
  flex-direction: column;
`;

export const ResponsiveFlex = styled(FlexContainer)`
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
