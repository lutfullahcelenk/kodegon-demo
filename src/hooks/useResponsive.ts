import { useMediaQuery } from 'react-responsive';

// xs - sm - md - lg
// --isMobile--

function useResponsive() {
    const xs = useMediaQuery({ query: '(max-width: 576px)' });
    const sm = useMediaQuery({ query: '(max-width: 768px)' });
    const lg = useMediaQuery({ query: '(max-width: 1025px)' });
    const xl = useMediaQuery({ query: '(min-width : 1200px)' });
    const xxl = useMediaQuery({ query: '(min-width:1400px' });
    const md = !(xs || lg || sm || xl);

    return { xs, sm: xs || sm, md, lg, xl, xxl, isMobile: xs || sm || md || xl };
}

export default useResponsive;
