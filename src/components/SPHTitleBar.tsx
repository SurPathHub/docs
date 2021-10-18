import React from 'react';

import '../scss/modules/SPHTitleBar.scss';

interface SPHTitleBarProps {
    title?: string;
    icon?: string|any;
    isCentered?: boolean;
}

const SPHTitleBar: React.FC<SPHTitleBarProps> = ({ title, isCentered, children  }) => {
    return (
        <div className={`sph-title-bar${isCentered ? ' centered' : ''}`}>
            <h2>{ title || children }</h2>
        </div>
    );
};

export default SPHTitleBar;