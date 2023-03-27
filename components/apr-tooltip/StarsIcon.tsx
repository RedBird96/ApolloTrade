import { useTheme } from '@chakra-ui/react';

interface Props {
    height?: number;
    width?: number;
}

function StarsIcon({ width = 24, height = 25 }: Props) {
    const theme = useTheme();

    return (
        <svg width={`${width}`} height={`${height}`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient
                    id="stars-gradient"
                    x1="24"
                    y1="-11.5"
                    x2="2.7273"
                    y2="16.3182"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={theme.colors.blue['500']} />
                    <stop offset="1" stopColor={theme.colors.green['300']} />
                </linearGradient>
            </defs>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.7809 7.27232C20.6203 7.70216 19.7081 8.67468 19.305 9.91198L18.5527 12.2203C18.5419 12.2555 18.5111 12.2792 18.4764 12.2792C18.4417 12.2792 18.4109 12.2555 18.4001 12.2203L17.6479 9.91198C17.2447 8.67461 16.3323 7.70207 15.1716 7.27232L13.0065 6.47049C12.9742 6.45851 12.9525 6.42606 12.9525 6.38961C12.9525 6.35316 12.9742 6.32071 13.0065 6.30873L15.1716 5.5069C16.3323 5.07715 17.2447 4.10461 17.6479 2.86724L18.4001 0.558892C18.4109 0.523752 18.4417 0.5 18.4764 0.5C18.5111 0.5 18.5419 0.523752 18.5527 0.558892L19.305 2.86724C19.7081 4.10455 20.6203 5.07707 21.7809 5.5069L23.9461 6.30873C23.9783 6.32071 24 6.35316 24 6.38961C24 6.42606 23.9783 6.45851 23.9461 6.47049L21.7809 7.27232ZM12.2613 14.4746C10.6494 15.0717 9.38251 16.4224 8.82264 18.1409L7.77749 21.3469C7.76214 21.3952 7.71964 21.4276 7.67183 21.4276C7.62402 21.4276 7.58152 21.3952 7.56617 21.3469L6.52102 18.1409C5.96115 16.4224 4.69427 15.0717 3.08238 14.4746L0.0748959 13.361C0.0300526 13.3443 0 13.2993 0 13.2486C0 13.198 0.0300526 13.153 0.0748959 13.1363L3.08238 12.0227C4.69428 11.4256 5.96116 10.0749 6.52102 8.35643L7.56617 5.1504C7.58152 5.10213 7.62402 5.06965 7.67183 5.06965C7.71964 5.06965 7.76214 5.10213 7.77749 5.1504L8.82264 8.35643C9.38251 10.0749 10.6494 11.4256 12.2613 12.0227L15.2688 13.1363C15.3136 13.153 15.3437 13.198 15.3437 13.2486C15.3437 13.2993 15.3136 13.3443 15.2688 13.361L12.2613 14.4746ZM18.4025 22.6042C18.725 21.6144 19.4546 20.8364 20.383 20.4924L22.1159 19.851C22.1417 19.8414 22.1591 19.8154 22.1591 19.7862C22.1591 19.7571 22.1417 19.7311 22.1159 19.7215L20.383 19.0801C19.4546 18.7361 18.725 17.9581 18.4025 16.9683L17.8005 15.1217C17.7925 15.0925 17.7674 15.0725 17.7389 15.0725C17.7104 15.0725 17.6853 15.0925 17.6773 15.1217L17.0768 16.9683C16.754 17.9585 16.0237 18.7365 15.0948 19.0801L13.3634 19.7215C13.3376 19.7311 13.3202 19.7571 13.3202 19.7862C13.3202 19.8154 13.3376 19.8414 13.3634 19.851L15.0948 20.4924C16.0237 20.836 16.754 21.614 17.0768 22.6042L17.6773 24.4509C17.6853 24.48 17.7104 24.5 17.7389 24.5C17.7674 24.5 17.7925 24.48 17.8005 24.4509L18.4025 22.6042Z"
                fill="url(#stars-gradient)"
            />
        </svg>
    );
}

export default StarsIcon;