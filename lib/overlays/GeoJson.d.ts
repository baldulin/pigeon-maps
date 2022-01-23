import React from 'react';
import { PigeonProps } from '../types';
interface GeoJsonProps extends PigeonProps {
    path: string;
    style?: React.CSSProperties;
    className?: string;
    data?: any;
    geometry?: any;
    type?: any;
    properties?: any;
    polygon?: any;
    feature?: any;
    svgAttributes?: any;
    styleCallback?: any;
    hover?: any;
    onClick?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
    onContextMenu?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
    onMouseOver?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
    onMouseOut?: ({ event: HTMLMouseEvent, anchor: Point, payload: any }: {
        event: any;
        anchor: any;
        payload: any;
    }) => void;
}
export declare function GeoJsonLoader(props: GeoJsonProps): JSX.Element;
export declare function Polygon(props: GeoJsonProps): JSX.Element;
export declare function GeoJsonFeature(props: GeoJsonProps): JSX.Element;
export declare function GeoJson(props: GeoJsonProps): JSX.Element;
export {};
