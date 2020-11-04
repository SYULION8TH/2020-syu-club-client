import React from 'react';

const LogoVertical = ({ color = '#804a86', size = 20, weight = 3 }) => {
    return (
        <svg
            // width="100%"
            // height="100%"
            viewBox="0 0 168 226"
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
                cx="61.529"
                cy="196.315"
                r="24.55"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
            <path
                d="M104.528,142.518c17.137,-15.969 34.274,-31.938 51.411,-47.908"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
            <path
                d="M76.325,143.482c-3.555,-0.036 -10.664,-0.11 -15.996,-0.135c-15.752,-0.074 -23.429,-15.844 -23.35,-25.481c0.075,-9.099 10.805,-24.356 22.729,-24.219c9.156,0.03 23.876,0.097 31.236,0.131"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
            <path
                d="M131.922,171.765l29.743,49.1l-59.486,0l29.743,-49.1Z"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
            <path
                d="M164.409,46.977l-64.801,-44.825l-97.235,66.349l-0.245,154.963l14.89,-0.009"
                style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: `${weight}px`,
                }}
            />
        </svg>
    );
};

export default LogoVertical;
