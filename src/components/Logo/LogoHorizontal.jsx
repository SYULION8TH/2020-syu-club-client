import React from 'react';

const LogoHorizontal = ({ color = '#804a86', size = 20, weight = 3 }) => {
    return (
        <svg
            // width="100%"
            // height="100%"
            viewBox="0 0 266 55"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            xmlnsSerif="http://www.serif.com/"
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeMiterlimit: 1.5,
                height: `${size}px`,
            }}
        >
            <circle
                cx="165.579"
                cy="27.5"
                r="24.55"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
            <path
                d="M71.427,51.346c17.136,-15.97 34.273,-31.939 51.41,-47.908"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
            <path
                d="M40.866,51.346c-3.555,-0.037 -10.664,-0.111 -15.997,-0.136c-15.751,-0.073 -23.429,-15.844 -23.35,-25.48c0.075,-9.1 10.806,-24.357 22.729,-24.22c9.157,0.031 23.877,0.098 31.237,0.131"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
            <path
                d="M234.04,2.95l29.743,49.1l-59.486,0l29.743,-49.1Z"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
        </svg>
    );
};

export default LogoHorizontal;
