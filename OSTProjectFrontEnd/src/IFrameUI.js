import React from 'react';

const IFrameUI = () => {
    return (
        <div>
            <iframe
                src="www.google.com"
                title="View Program"
                width={"100%"}
                height={"50%"}
                loading="eager"
                scrolling="auto"
                frameborder="2"
                webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
        </div>
    );
};
export default IFrameUI;