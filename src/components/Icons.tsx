import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function IconBrandGoogle({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.389a5.5 5.5 0 1 0 2.119 3.608h-6.125v-3h9.32a9 9 0 0 1 .625 3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconActivity({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12h4l3 8l4 -16l3 8h4" />
    </svg>
  );
}

export function IconChevronLeft({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M15 6l-6 6l6 6" />
    </svg>
  );
}

export function IconChevronRight({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
}

export function IconCircleCheck({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  );
}

export function IconTooth({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M16.65 4.5c.9 -.3 2.35 -.3 3.35 .7c.6 .6 .5 1.85 .1 2.8c-.4 .97 -.8 1.9 -1.1 2.9c-.3 .97 -.3 2.15 -.1 3.2c.2 .9 .85 2 1.1 3c.3 .97 .1 2.5 -.95 3.15c-.75 .46 -2.1 .25 -2.85 -.3c-.76 -.56 -1.5 -1.35 -2.25 -1.35c-.75 0 -1.5 .8 -2.25 1.35c-.75 .55 -2.1 .76 -2.85 .3c-1.05 -.65 -1.25 -2.18 -.95 -3.15c.25 -1 .9 -2.1 1.1 -3c.2 -1.05 .2 -2.23 -.1 -3.2c-.3 -1 -.7 -1.93 -1.1 -2.9c-.4 -.95 -.5 -2.2 .1 -2.8c1 -1 2.45 -1 3.35 -.7c.9 .3 1.9 1.2 2.7 1.2s1.8 -.9 2.7 -1.2z" />
    </svg>
  );
}

export function IconCheck({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
}

export function IconStethoscope({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M6 4h-1a2 2 0 0 0 -2 2v2a5 5 0 0 0 10 0v-2a2 2 0 0 0 -2 -2h-1" />
      <path d="M8 9h.01" />
      <path d="M17 3v10a4 4 0 1 1 -8 0v-2" />
      <path d="M21 16a3 3 0 1 0 -6 0v2a3 3 0 1 0 6 0v-2z" />
    </svg>
  );
}

export function IconUser({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

export function IconCalendar({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
      <path d="M11 15h1" />
      <path d="M12 15v3" />
    </svg>
  );
}

export function IconArrowLeft({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l14 0" />
      <path d="M5 12l6 6" />
      <path d="M5 12l6 -6" />
    </svg>
  );
}

export function IconArrowRight({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  );
}

export function IconClock({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function IconBrandReddit({ size = 24, className, style, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 8c2.65 0 4.8-.4 6.3-.8c.4-.1.6-.6.5-1a.9 .9 0 0 0 -.7 -.6c-1.5 -.3 -3.6 -.6 -6.1 -.6s-4.6 .3 -6.1 .6a.9 .9 0 0 0 -.7 .6c-.1 .4 .1 .9 .5 1c1.5 .4 3.6 .8 6.3 .8z" />
      <path d="M12 8v-5l3 1.5" />
      <path d="M15 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 18c-3.3 0-6-2-6-4.5s2.7-4.5 6-4.5s6 2 6 4.5s-2.7 4.5-6 4.5z" />
      <path d="M9.5 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12.5 13a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M9.5 15.5c.8 .8 2.2 .8 3 0" />
    </svg>
  );
}
