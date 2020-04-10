import styled from "styled-components";

export const StyledSwitchWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.layout.margin.top.large};
  ${({ theme }) => theme.layout.margin.bottom.xlarge};
`;

export const StyledSwitchLabel = styled.div`
  align-items: center;
  flex: 1;
  ${({ theme }) => theme.layout.margin.right.small};
  font-size: ${({ theme }) => theme.layout.font.body};
`;

export const StyledSearchLabel = styled.div`
  align-items: center;
  flex: 1;
  ${({ theme }) => theme.layout.margin.right.small};
  font-size: ${({ theme }) => theme.layout.font.medium};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const StyledSearchWrapper = styled.div`
  margin-right: 5px;
`;
