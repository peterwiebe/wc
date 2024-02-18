import { css } from '@emotion/react';
import r2wc from '@r2wc/react-to-web-component';

function Scorecard() {
  const color = 'white';
  return (
    <div>
      <h1>Scorecard</h1>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        test
      </div>
    </div>
  );
}

// export default Scorecard;
const ScorecardWC = r2wc(Scorecard);

export default ScorecardWC;

window.customElements.define('scorecard', ScorecardWC);
