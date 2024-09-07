import { IconComponentProps } from '@backstage/core-components';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

const DaytonaSvgIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} >
        <svg width="24" height="24" viewBox="0 0 211 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11.1428" y="149.025" width="76.2474" height="26.1421" fill="currentColor"/>
            <rect x="113.522" y="57.5287" width="87.1399" height="26.1421" fill="currentColor"/>
            <rect width="91.4971" height="26.142" transform="matrix(0.707105 -0.707108 0.707105 0.707108 67.7737 65.5858)" fill="currentColor"/>
            <rect width="70.2691" height="26.142" transform="matrix(-0.707105 -0.707108 -0.707105 0.707108 68.1729 130.941)" fill="currentColor"/>
            <rect width="74.0691" height="26.142" transform="matrix(-0.707105 0.707108 -0.707105 -0.707108 133.532 167.511)" fill="currentColor"/>
            <rect width="82.7831" height="26.142" transform="matrix(0.707105 0.707108 0.707105 -0.707108 133.133 102.156)" fill="currentColor"/>
            <rect x="67.7737" y="37.9226" width="63.1767" height="26.142" transform="rotate(90 67.7737 37.9226)" fill="currentColor"/>
            <rect x="159.278" y="129.419" width="78.4262" height="26.142" transform="rotate(90 159.278 129.419)" fill="currentColor"/>
        </svg>
    </SvgIcon>  
);

/** @public */
export function DaytonaIcon(props: IconComponentProps) {
    return <DaytonaSvgIcon id="daytona" {...props} />;
  }

export default DaytonaIcon;