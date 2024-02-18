import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LibProps {}

const StyledLib = styled.div`
  color: pink;
`;

export function Lib(props: LibProps) {
  return (
    <StyledLib>
      <h1>Welcome to Lib!</h1>
    </StyledLib>
  );
}

export default Lib;
