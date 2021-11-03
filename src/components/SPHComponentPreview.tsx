import React from 'react';

interface SPHComponentPreviewProps {
    cols?: number;
}

export const SPHComponentPreview = ({ cols, children }) => {
    return (
        <section className={`sph-component-preview${ cols ? ' col-' + cols : '' }`}>
            { children }
        </section>
    );
};

export const SPHComponentPreviewRow = ({ children }) => {
    return (
        <div className="sph-component-preview__row">
            { children }
        </div>
    );
}
