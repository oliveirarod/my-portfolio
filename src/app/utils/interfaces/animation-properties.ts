import { EasingOptions } from "animejs";

export interface AnimationProperties {
	targets?: string | string[] | HTMLElement,
  translateX?: number | number[],
	translateY?: number | number[],
	opacity?: number | number[],
	duration?: number,
	delay?: number,
	easing?: EasingOptions,
};
