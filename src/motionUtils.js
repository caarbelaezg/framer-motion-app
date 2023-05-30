export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const fadeInPresentationCard = {
	initial: { y: 20, opacity: 0, transition: { duration: .5, ease: defaultEasing } },
	animate: { y: 0, opacity: 1, transition: { duration: 1, ease: defaultEasing } },
	exit: { y: 20, opacity: 0, transition: { duration: .5, ease: defaultEasing } }
}