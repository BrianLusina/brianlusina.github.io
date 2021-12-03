import { FunctionComponent } from 'react';
import './notFound.scss';

const NotFoundPage: FunctionComponent = () => (
  <section className="fof">
    <div className="container max-width-sm">
      <div className="text-component text-center margin-bottom-lg">
        <h1 id="fof__title">Page not found</h1>
        <p id="fof__subtitle">Sorry, but the page you were looking for could not be found.</p>
        <p id="fof__link">
          <a href="/">Go to homepage</a>.
        </p>
      </div>

      <div className="fof__animation" aria-lable="404 animation">
        <svg id="i-fof" viewBox="0 0 520 450">
          <g id="i-fof-ship">
            <path
              id="i-fof-capsule"
              d="M260,9a53,53,0,0,0-53,53H313A53,53,0,0,0,260,9Z"
              fill="var(--color-contrast-lower)"
            />
            <path
              id="i-fof-ship-top"
              d="M448,73H72s78-37,188-37S448,73,448,73Z"
              fill="var(--color-contrast-low)"
            />
            <path
              id="i-fof-ship-bottom"
              d="M448,73A1185.633,1185.633,0,0,0,72,73c80.173,34.484,144.2,37,188,37C370,110,448,73,448,73Z"
              fill="var(--color-contrast-high)"
            />
          </g>
          <g id="i-fof-browser">
            <rect
              id="i-fof-browser-canvas"
              x="179"
              y="243"
              width="160"
              height="109"
              rx="6"
              transform="translate(131.361 -75.723) rotate(22.162)"
              fill="var(--color-contrast-higher)"
            />
            <g id="i-fof-browser-dots" fill="var(--color-bg)">
              <circle cx="211.713" cy="228.029" r="3" />
              <circle cx="221.9" cy="232.179" r="3" />
              <circle cx="232.088" cy="236.328" r="3" />
            </g>
            <rect
              id="i-fof-browser-body"
              x="180.737"
              y="258.557"
              width="152"
              height="89"
              rx="2"
              transform="translate(133.29 -74.459) rotate(22.162)"
              fill="var(--color-bg)"
            />
            <g id="i-fof-emoji">
              <path
                d="M248.626,322.968A22,22,0,1,1,277.3,310.893,22,22,0,0,1,248.626,322.968Z"
                fill="#ffd764"
              />
              <path d="M264.3,311a7,7,0,1,1,9.124-3.843A7,7,0,0,1,264.3,311Z" fill="#fff" />
              <path
                d="M245.778,303.452a7,7,0,1,1,9.123-3.842A7,7,0,0,1,245.778,303.452Z"
                fill="#fff"
              />
              <path
                d="M258.5,317.274l-12.966-5.281a1,1,0,0,1,.755-1.853l12.966,5.282a1,1,0,0,1-.755,1.852Z"
                fill="#444"
              />
              <path
                d="M247.287,299.747a3,3,0,1,1,3.91-1.646A3,3,0,0,1,247.287,299.747Z"
                fill="#444"
              />
              <path
                d="M265.809,307.292a3,3,0,1,1,3.91-1.647A3,3,0,0,1,265.809,307.292Z"
                fill="#444"
              />
            </g>
          </g>
          <polygon
            id="i-fof-radar-body"
            points="415 410 105 410 196 106 324 106 415 410"
            fill="#4ad36b"
            opacity="0.5"
          />
          <ellipse id="i-fof-radar-bottom" cx="260" cy="410" rx="155" ry="28" fill="#4ad36b" />
          <ellipse
            id="i-fof-shadow"
            cx="282"
            cy="410"
            rx="72"
            ry="10"
            opacity="0.4"
            fill="var(--color-black)"
          />
          <ellipse id="i-fof-radar-top" cx="260" cy="106" rx="64" ry="6" fill="#4ad36b" />
        </svg>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
