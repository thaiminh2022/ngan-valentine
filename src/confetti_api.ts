
const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

// Api is used thorugh CDN
export function valentine_confetti() {
    // @ts-expect-error
    confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
    });

    // @ts-expect-error
    confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
    });

    // @ts-expect-error
    confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
    });
}


export function confetti_from_side(durationMS: number = 15000) {
    const end = Date.now() + durationMS;

    // go Buckeyes!
    const colors = ["#bb0000", "#ffffff"];

    (function frame() {
        // @ts-expect-error
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });
        // @ts-expect-error
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
