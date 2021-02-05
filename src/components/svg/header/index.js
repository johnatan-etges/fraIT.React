import React from 'react';

import { Container } from './styles';

export function NotificationBell(props) {
  return (
    <Container>
    <svg 
      className={'notify'}
      width={`${props.width}px`}
      height={`${props.height}px`}
      viewBox={"0 0 30 29"}
    >
      <path
        d="M15 29.0005C17.3652 29.0005 19.2837 27.3863 19.2837 25.3947H10.7163C10.7163 27.3863 12.6348 29.0005 15 29.0005ZM29.4234 20.5658C28.1297 19.3961 25.7089 17.6366 25.7089 11.873C25.7089 7.49542 22.0607 3.99106 17.1415 3.13131V1.95718C17.1415 0.961651 16.1826 0.154297 15 0.154297C13.8174 0.154297 12.8585 0.961651 12.8585 1.95718V3.13131C7.93931 3.99106 4.2911 7.49542 4.2911 11.873C4.2911 17.6366 1.87035 19.3961 0.576607 20.5658C0.174823 20.9292 -0.00330191 21.3635 4.62982e-05 21.7889C0.00741235 22.7129 0.86924 23.5918 2.14959 23.5918H27.8504C29.1308 23.5918 29.9933 22.7129 30 21.7889C30.0033 21.3635 29.8252 20.9286 29.4234 20.5658Z"
      />
      <ellipse
        cx="18" cy="9" rx="9" ry="8.65385"
      />
    </svg>
    </Container>
  );
}

export function Expander (props) {
  return (
    <Container>
      <svg
          className={'expander'}
          width={`${props.width}px`}
          height={`${props.height}px`}
          viewBox="0 0 26 23"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 23L25.9904 0.5H0.00961876L13 23Z"
        />
      </svg>
    </Container>
  );
}

export function Lupa(props) {
  return (
    <Container>
      <svg
        className={'lupa'}
        width={`${props.width}px`}
        height={`${props.height}px`}
        viewBox="0 0 40 33"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7748 21.4398L37.8812 30.617M28 15.5C28 22.4036 22.4036 28 15.5 28C8.59644 28 3 22.4036 3 15.5C3 8.59644 8.59644 3 15.5 3C22.4036 3 28 8.59644 28 15.5Z"
          stroke-width="5"
        />
        <circle
            cx="15.5" cy="15.5" r="10.1"
        />
      </svg>
    </Container>
  );
}