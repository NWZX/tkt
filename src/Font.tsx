import { Global } from '@emotion/react';

const Fonts = (): JSX.Element => (
    <Global
        styles={`
        @font-face {
            font-family: "AvenirR";
            src: local("AvenirR"),
            url("/font/AvenirR.ttf") format("truetype");
            font-weight: bold;
        }
      `}
    />
);

export default Fonts;
