import React from 'react';
import Link from "@docusaurus/Link";

interface SPHButtonProps {
    label?: string;
    icon?: string;
    type?: string;
    link?: string;
}

const SPHButton: React.FC<SPHButtonProps> = ({ label, icon, type, children, link }) => {
    if (!link) {
        return (
            <button className={`sph-button${ type == 'filled' ? 'sph-button--filled' : type == 'outlined' ? 'sph-button--outlined' : '' }`} { ...type == 'disabled' ? 'disabled' : '' }>
                { icon && <i className={`sph-button__icon bx ${ icon || 'bxs-like' }`} aria-hidden="true" /> }
                { label || children && <span className="sph-button__label">{ label || children }</span> }
            </button>
        );
    } else {
        return (
            <Link to={ link }>
                <button className={`sph-button${ type == 'filled' ? ' sph-button--filled' : type == 'outlined' ? ' sph-button--outlined' : '' }`} { ...type == 'disabled' ? 'disabled' : '' }>
                    { icon && <i className={`sph-button__icon bx ${ icon || 'bxs-like' }`} aria-hidden="true" /> }
                    { label || children && <span className="sph-button__label">{ label || children }</span> }
                </button>
            </Link>
        );
    }
};

export default SPHButton;