// Type definitions for react-images 0.5.17
// Project: https://github.com/suomiton/react-images
// Definitions by: Lauri Kotilainen <lauri@offbeat.fi>
import * as React from 'react';

declare class Lightbox extends React.Component<LightboxProps> {}

export default Lightbox;

export interface LightboxImageProps {
    src: string;
    srcSet?: string[];
    caption?: string;
    alt?: string;
    type: string;
}

export interface LightboxProps {
    backdropClosesModal?: boolean;
    closeButtonTitle?: string;
    enableKeyboardInput?: boolean;
    currentItem?: number;
    customControls?: React.ReactElement<any>[];
    items: LightboxImageProps[];
    imageCountSeparator?: string;
    isOpen?: boolean;
    leftArrowTitle?: string;
    onClickPrev?: () => void;
    onClickNext?: () => void;
    onClose?: () => void;
    onClickImage?: React.MouseEventHandler<HTMLImageElement>;
    onClickThumbnail?: (index: number) => void;
    preloadNextImage?: boolean;
    rightArrowTitle?: string;
    showCloseButton?: boolean;
    showImageCount?: boolean;
    width?: number;
    spinner?: React.ReactElement<any>;
    spinnerColor?: string;
    spinnerSize?: number;
    preventScroll?: boolean;
}
