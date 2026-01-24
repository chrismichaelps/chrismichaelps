import { defineHook, type ReadonlySignal } from '@effuse/core';
import { taggedEnum } from '../lib/data/tagged-enum';
import { TaggedError } from '../lib/data/tagged-error';
import { matchTag } from '../lib/data/functions';
import { BREAKPOINTS } from '../constants';
import { logger } from '../utils/logger';
import { BreakpointState, BreakpointConfig, BreakpointReturn } from '../types';

const Breakpoint = taggedEnum<BreakpointState>();

const Mobile = (width: number) => Breakpoint.Mobile({ width });
const Tablet = (width: number) => Breakpoint.Tablet({ width });
const Desktop = (width: number) => Breakpoint.Desktop({ width });

const BreakpointError = TaggedError('BreakpointError');

type BreakpointErrorType =
	| { readonly _tag: 'InvalidWidth'; readonly width: unknown }
	| { readonly _tag: 'NotMounted'; readonly message: string };

const isValidWidth = (w: unknown): w is number =>
	typeof w === 'number' && Number.isFinite(w) && w >= 0;

const toBreakpoint = (width: number): BreakpointState => {
	if (!isValidWidth(width)) {
		throw new BreakpointError({
			_tag: 'InvalidWidth',
			width,
		} as BreakpointErrorType);
	}

	if (width < BREAKPOINTS.MOBILE) {
		return Mobile(width);
	}
	if (width < BREAKPOINTS.TABLET) {
		return Tablet(width);
	}
	return Desktop(width);
};

export const useBreakpoint = defineHook<BreakpointConfig, BreakpointReturn>({
	name: 'useBreakpoint',
	setup: ({ signal, effect }): BreakpointReturn => {
		const state = signal<BreakpointState>(null as unknown as BreakpointState);
		const isMounted = signal(false);

		const isMobileSig = signal(false);
		const isTabletSig = signal(false);
		const isDesktopSig = signal(false);
		const isMobileOrSmallerSig = signal(true);
		const isTabletOrSmallerSig = signal(true);

		const widthSig = signal(0);
		const breakpointSig = signal('');

		const width: ReadonlySignal<number> = widthSig;
		const breakpoint: ReadonlySignal<string> = breakpointSig;

		const isMobile: ReadonlySignal<boolean> = isMobileSig;
		const isTablet: ReadonlySignal<boolean> = isTabletSig;
		const isDesktop: ReadonlySignal<boolean> = isDesktopSig;
		const isMobileOrSmaller: ReadonlySignal<boolean> = isMobileOrSmallerSig;
		const isTabletOrSmaller: ReadonlySignal<boolean> = isTabletOrSmallerSig;

		const updateDerivedState = (newState: BreakpointState): void => {
			matchTag(newState, {
				Mobile: ({ width }: { width: number }) => {
					isMobileSig.value = true;
					isTabletSig.value = false;
					isDesktopSig.value = false;
					isMobileOrSmallerSig.value = true;
					isTabletOrSmallerSig.value = true;
					breakpointSig.value = 'mobile';
					widthSig.value = width;
				},
				Tablet: ({ width }: { width: number }) => {
					isMobileSig.value = false;
					isTabletSig.value = true;
					isDesktopSig.value = false;
					isMobileOrSmallerSig.value = false;
					isTabletOrSmallerSig.value = true;
					breakpointSig.value = 'tablet';
					widthSig.value = width;
				},
				Desktop: ({ width }: { width: number }) => {
					isMobileSig.value = false;
					isTabletSig.value = false;
					isDesktopSig.value = true;
					isMobileOrSmallerSig.value = false;
					isTabletOrSmallerSig.value = false;
					breakpointSig.value = 'desktop';
					widthSig.value = width;
				},
				_: () => { },
			});
		};

		let resizeObserver: ResizeObserver | null = null;
		let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

		const init = (): void => {
			if (typeof window === 'undefined') {
				return;
			}

			if (isMounted.value) {
				return;
			}

			try {
				const initialWidth = window.innerWidth;
				const initialState = toBreakpoint(initialWidth);
				state.value = initialState;
				updateDerivedState(initialState);
				isMounted.value = true;

				const handleResize = (): void => {
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}

					resizeTimeout = setTimeout(() => {
						const newWidth = window.innerWidth;
						const newState = toBreakpoint(newWidth);
						state.value = newState;
						updateDerivedState(newState);
					}, 100);
				};

				resizeObserver = new ResizeObserver(() => {
					handleResize();
				});

				resizeObserver.observe(document.documentElement);

				window.addEventListener('resize', handleResize, { passive: true });
			} catch (error) {
				const err = error as Error;
				logger.error(new Error(`Failed to initialize: ${err.message}`), { tag: 'useBreakpoint' });
			}
		};

		const destroy = (): void => {
			isMounted.value = false;

			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
				resizeTimeout = null;
			}

			if (resizeObserver) {
				resizeObserver.disconnect();
				resizeObserver = null;
			}

			const clearedState = null as unknown as BreakpointState;
			state.value = clearedState;
		};

		effect(() => {
			init();
			return destroy;
		});

		return {
			state,
			width,
			isMobile,
			isTablet,
			isDesktop,
			isMobileOrSmaller,
			isTabletOrSmaller,
			breakpoint,
			init,
			destroy,
		};
	},
});

export type { BreakpointState, BreakpointErrorType };
export { Mobile, Tablet, Desktop, BreakpointError };