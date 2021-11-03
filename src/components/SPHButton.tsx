import React from 'react';
import Link from "@docusaurus/Link";

interface SPHButtonProps {
    label?: string;
    icon?: string;
    type?: string;
    link?: string;
    isDisabled?: boolean;
}

const SPHButton: React.FC<SPHButtonProps> = ({ label, icon, type, children, link, isDisabled }) => {
    if (!link) {
        return (
            <button className={`sph-button${ type ? ' sph-button--' + type : '' }`} disabled={isDisabled}>
                { icon && <i className={`sph-button__icon bx ${ icon || 'bxs-like' }`} aria-hidden="true" /> }
                { label || children && <span className="sph-button__label">{ label || children }</span> }
            </button>
        );
    } else {
        return (
            <Link to={ link }>
                <button className={`sph-button${ type ? ' sph-button--' + type : '' }`} disabled={isDisabled}>
                    { icon && <i className={`sph-button__icon bx ${ icon || 'bxs-like' }`} aria-hidden="true" /> }
                    { label || children && <span className="sph-button__label">{ label || children }</span> }
                </button>
            </Link>
        );
    }
};

export default SPHButton;